import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

const VALID_LOCALES = ["pl", "en", "de", "it"] as const;

export async function POST(request: NextRequest) {
  const { plates, plateLanguages, billing: rawBilling, locale: rawLocale } = await request.json();
  const locale = VALID_LOCALES.includes(rawLocale) ? rawLocale : "pl";
  const billing = rawBilling === "annual" ? "annual" : "monthly";

  let platesByLanguage: Record<string, number> | null = null;
  if (plateLanguages && typeof plateLanguages === "object" && !Array.isArray(plateLanguages)) {
    const entries = Object.entries(plateLanguages)
      .filter(([lang]) => (VALID_LOCALES as readonly string[]).includes(lang))
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

  // Multi-currency prices: one price ID per product, Stripe picks the amount
  // from the price's currency_options based on the session currency.
  const subscriptionPriceId =
    billing === "annual"
      ? process.env.STRIPE_PRICE_ID_SUBSCRIPTION_YEARLY
      : process.env.STRIPE_PRICE_ID_SUBSCRIPTION;
  const platePriceId = process.env.STRIPE_PRICE_ID_EXTRA_PLATE;
  const currency = locale === "pl" ? "pln" : "eur";

  if (!subscriptionPriceId) {
    return NextResponse.json({ error: "Subscription price not configured" }, { status: 500 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";
  const extraPlates = numPlates - 1;

  try {
    const stripe = getStripe();

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      { price: subscriptionPriceId, quantity: 1 },
    ];

    if (extraPlates > 0 && platePriceId) {
      lineItems.push({ price: platePriceId, quantity: extraPlates });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      currency,
      line_items: lineItems,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["PL", "DE", "AT", "CZ", "SK", "GB", "US", "NL", "FR", "ES", "IT"],
      },
      tax_id_collection: { enabled: true },
      locale,
      success_url: `${appUrl}/${locale}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/${locale}/order`,
      metadata: {
        total_plates: String(numPlates),
        billing,
        ...(platesByLanguage
          ? { plates_by_language: JSON.stringify(platesByLanguage) }
          : {}),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Checkout failed";
    console.error("[checkout]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
