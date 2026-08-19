import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { LOCALES, type Locale } from "@/i18n";
import { PRICING, currencyCode, annualSubPrice, getShippingCost } from "@/lib/pricing";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: NextRequest) {
  const {
    paymentIntentId,
    customerId,
    locale: rawLocale,
    plates,
    plateLanguages,
  } = await request.json();

  const locale: Locale = LOCALES.includes(rawLocale) ? rawLocale : "pl";

  if (!paymentIntentId || typeof paymentIntentId !== "string") {
    return NextResponse.json({ error: "Missing paymentIntentId" }, { status: 400 });
  }
  if (!customerId || typeof customerId !== "string") {
    return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
  }

  const subscriptionPriceId = process.env.STRIPE_PRICE_ID_SUBSCRIPTION_YEARLY;
  if (!subscriptionPriceId) {
    return NextResponse.json({ error: "Subscription price not configured" }, { status: 500 });
  }

  let platesByLanguage: Record<string, number> | null = null;
  if (plateLanguages && typeof plateLanguages === "object" && !Array.isArray(plateLanguages)) {
    const entries = Object.entries(plateLanguages)
      .filter(([lang]) => (LOCALES as readonly string[]).includes(lang))
      .map(([lang, qty]) => [lang, Math.max(0, Math.min(50, Math.floor(Number(qty) || 0)))] as const)
      .filter(([, qty]) => qty > 0);
    if (entries.length > 0) {
      platesByLanguage = Object.fromEntries(entries);
    }
  }
  const requestedPlates = platesByLanguage
    ? Object.values(platesByLanguage).reduce((sum, qty) => sum + qty, 0)
    : Number(plates) || 1;
  const numPlates = Math.max(1, Math.min(50, requestedPlates));
  const extraPlates = numPlates - 1;

  try {
    const stripe = getStripe();

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "requires_capture") {
      return NextResponse.json(
        { error: "Card verification not completed" },
        { status: 400 }
      );
    }
    if (paymentIntent.metadata?.purpose !== "trial_preauth") {
      return NextResponse.json({ error: "Invalid verification" }, { status: 400 });
    }
    if (paymentIntent.customer !== customerId) {
      return NextResponse.json({ error: "Customer mismatch" }, { status: 400 });
    }
    const expectedAmount = Math.round(annualSubPrice(locale) * 100);
    if (paymentIntent.amount !== expectedAmount) {
      return NextResponse.json({ error: "Amount mismatch" }, { status: 400 });
    }

    const paymentMethodId =
      typeof paymentIntent.payment_method === "string"
        ? paymentIntent.payment_method
        : paymentIntent.payment_method?.id;
    if (!paymentMethodId) {
      return NextResponse.json({ error: "No verified payment method" }, { status: 400 });
    }

    // Zwolnienie blokady — pieniądze nigdy nie zostały pobrane, to była tylko weryfikacja.
    // Metoda płatności została już zapisana do klienta dzięki setup_future_usage w trial/init.
    await stripe.paymentIntents.cancel(paymentIntentId);

    const customer = await stripe.customers.update(customerId, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: subscriptionPriceId }],
      trial_period_days: 30,
      default_payment_method: paymentMethodId,
      metadata: {
        billing: "trial",
        plates: String(numPlates),
        ...(platesByLanguage ? { plates_by_language: JSON.stringify(platesByLanguage) } : {}),
      },
    });

    let platesChargeStatus: "not_applicable" | "succeeded" | "failed" = "not_applicable";
    const currency = currencyCode(locale);
    const shippingCountry = customer.shipping?.address?.country ?? "";
    const shipping = getShippingCost(shippingCountry, currency);
    const platesCost = extraPlates * PRICING[locale].platePrice * 100;
    const totalAmount = Math.round(platesCost + shipping.amount);

    if (totalAmount > 0) {
      try {
        await stripe.paymentIntents.create({
          amount: totalAmount,
          currency: currency,
          customer: customer.id,
          payment_method: paymentMethodId,
          off_session: true,
          confirm: true,
          metadata: { 
            purpose: "extra_plates_and_shipping", 
            locale, 
            plates: String(extraPlates),
            shipping_name: shipping.name,
            shipping_cost: String(shipping.amount)
          },
        });
        platesChargeStatus = "succeeded";
      } catch (err) {
        console.error("[checkout/trial/complete] upfront charge failed", err);
        platesChargeStatus = "failed";
      }
    }

    return NextResponse.json({
      ok: true,
      subscriptionId: subscription.id,
      customerId: customer.id,
      platesChargeStatus,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Trial completion failed";
    console.error("[checkout/trial/complete]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
