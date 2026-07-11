import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { LOCALES, type Locale } from "@/i18n";
import { currencyCode, annualSubPrice } from "@/lib/pricing";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: NextRequest) {
  const { plates, plateLanguages, locale: rawLocale } = await request.json();
  const locale: Locale = LOCALES.includes(rawLocale) ? rawLocale : "pl";

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

  // Kwota liczona po stronie serwera — nie ufamy kwocie od klienta, bo to ona
  // jest przedmiotem pre-autoryzacji (weryfikacja zdolności płatniczej karty).
  const annualAmount = annualSubPrice(locale);
  const currency = currencyCode(locale);
  const amountMinor = Math.round(annualAmount * 100);

  try {
    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountMinor,
      currency,
      capture_method: "manual",
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      metadata: {
        purpose: "trial_preauth",
        locale,
        plates: String(numPlates),
        ...(platesByLanguage ? { plates_by_language: JSON.stringify(platesByLanguage) } : {}),
        annual_amount: String(annualAmount),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      annualAmount,
      currency,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Trial verification failed";
    console.error("[checkout/trial/init]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
