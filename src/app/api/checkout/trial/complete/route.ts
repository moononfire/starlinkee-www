import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { LOCALES, type Locale } from "@/i18n";
import { PRICING, currencyCode, annualSubPrice } from "@/lib/pricing";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: NextRequest) {
  const {
    paymentIntentId,
    email,
    locale: rawLocale,
    plates,
    plateLanguages,
    address,
  } = await request.json();

  const locale: Locale = LOCALES.includes(rawLocale) ? rawLocale : "pl";

  if (!paymentIntentId || typeof paymentIntentId !== "string") {
    return NextResponse.json({ error: "Missing paymentIntentId" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
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
    await stripe.paymentIntents.cancel(paymentIntentId);

    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId },
      metadata: { locale },
      ...(address
        ? {
            shipping: {
              name: String(address.name ?? email),
              address: {
                line1: String(address.line1 ?? ""),
                city: String(address.city ?? ""),
                postal_code: String(address.postalCode ?? ""),
                country: String(address.country ?? ""),
              },
            },
          }
        : {}),
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
    if (extraPlates > 0) {
      const platesCost = extraPlates * PRICING[locale].platePrice;
      try {
        await stripe.paymentIntents.create({
          amount: Math.round(platesCost * 100),
          currency: currencyCode(locale),
          customer: customer.id,
          payment_method: paymentMethodId,
          off_session: true,
          confirm: true,
          metadata: { purpose: "extra_plates", locale, plates: String(extraPlates) },
        });
        platesChargeStatus = "succeeded";
      } catch (err) {
        console.error("[checkout/trial/complete] extra plates charge failed", err);
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
