import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

function getPriceIds(locale: string) {
  const isEur = locale === "en" || locale === "de" || locale === "it";

  return {
    subscription: isEur
      ? process.env.STRIPE_PRICE_ID_SUBSCRIPTION_EUR
      : process.env.STRIPE_PRICE_ID_SUBSCRIPTION,
    plate: isEur
      ? process.env.STRIPE_PRICE_ID_EXTRA_PLATE_EUR
      : process.env.STRIPE_PRICE_ID_EXTRA_PLATE,
  };
}

export async function POST(request: NextRequest) {
  const { plates, locale } = await request.json();

  const numPlates = Math.max(1, Math.min(50, Number(plates) || 1));
  const { subscription: subscriptionPriceId, plate: platePriceId } = getPriceIds(locale);

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
      line_items: lineItems,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["PL", "DE", "AT", "CZ", "SK", "GB", "US", "NL", "FR", "ES", "IT"],
      },
      tax_id_collection: { enabled: true },
      locale: (["pl", "en", "de", "it"].includes(locale) ? locale : "en") as "pl" | "en" | "de" | "it",
      success_url: `${appUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/order?lang=${locale}`,
      metadata: {
        total_plates: String(numPlates),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Checkout failed";
    console.error("[checkout]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
