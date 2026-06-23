"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

type Locale = "pl" | "en" | "de" | "it";

const t: Record<Locale, {
  title: string;
  subtitle: string;
  subscription: string;
  subscriptionDesc: string;
  perMonth: string;
  plates: string;
  platesDesc: string;
  free: string;
  each: string;
  howMany: string;
  summary: string;
  monthlyFee: string;
  platesOnetime: string;
  firstFree: string;
  additional: string;
  total: string;
  subscriptionNote: string;
  checkout: string;
  back: string;
  loading: string;
  includes: string;
  features: string[];
}> = {
  pl: {
    title: "Skonfiguruj zamówienie",
    subtitle: "Wybierz ile tabliczek NFC potrzebujesz do swoich lokalizacji.",
    subscription: "Abonament Starlinkee Pro",
    subscriptionDesc: "Filtrowanie opinii, kupony SMS, karta lojalnościowa, panel administracyjny",
    perMonth: "/mies.",
    plates: "Tabliczki NFC",
    platesDesc: "Pierwsza tabliczka gratis — każda kolejna 29 zł",
    free: "Gratis",
    each: "/ szt.",
    howMany: "Ile tabliczek?",
    summary: "Podsumowanie",
    monthlyFee: "Abonament miesięczny",
    platesOnetime: "Tabliczki NFC (jednorazowo)",
    firstFree: "1 × gratis",
    additional: "dodatkowe",
    total: "Do zapłaty teraz",
    subscriptionNote: "Abonament 199 zł/mies. — płatność cykliczna",
    checkout: "Przejdź do płatności",
    back: "Wróć do strony głównej",
    loading: "Przekierowanie do płatności...",
    includes: "W cenie:",
    features: [
      "1 tabliczka NFC w cenie",
      "Filtrowanie opinii Google",
      "System kuponów SMS",
      "Karta lojalnościowa",
      "Panel administracyjny",
      "200 SMS-ów/mies. w cenie",
      "Wsparcie techniczne",
    ],
  },
  en: {
    title: "Configure your order",
    subtitle: "Choose how many NFC plates you need for your locations.",
    subscription: "Starlinkee Pro subscription",
    subscriptionDesc: "Review filtering, SMS coupons, loyalty card, admin dashboard",
    perMonth: "/mo",
    plates: "NFC Plates",
    platesDesc: "First plate free — each additional plate €9",
    free: "Free",
    each: "/ each",
    howMany: "How many plates?",
    summary: "Summary",
    monthlyFee: "Monthly subscription",
    platesOnetime: "NFC plates (one-time)",
    firstFree: "1 × free",
    additional: "additional",
    total: "Total due now",
    subscriptionNote: "Subscription €49/mo — recurring billing",
    checkout: "Proceed to payment",
    back: "Back to homepage",
    loading: "Redirecting to payment...",
    includes: "Includes:",
    features: [
      "1 NFC plate included",
      "Google review filtering",
      "SMS coupon system",
      "Loyalty card",
      "Admin dashboard",
      "200 SMS/mo included",
      "Technical support",
    ],
  },
  de: {
    title: "Bestellung konfigurieren",
    subtitle: "Wählen Sie, wie viele NFC-Aufsteller Sie für Ihre Standorte benötigen.",
    subscription: "Starlinkee Pro Abo",
    subscriptionDesc: "Bewertungsfilter, SMS-Gutscheine, Treuekarte, Admin-Dashboard",
    perMonth: "/Monat",
    plates: "NFC-Aufsteller",
    platesDesc: "Erster Aufsteller gratis — jeder weitere 9 €",
    free: "Gratis",
    each: "/ Stk.",
    howMany: "Wie viele Aufsteller?",
    summary: "Zusammenfassung",
    monthlyFee: "Monatliches Abo",
    platesOnetime: "NFC-Aufsteller (einmalig)",
    firstFree: "1 × gratis",
    additional: "weitere",
    total: "Jetzt zu zahlen",
    subscriptionNote: "Abo 49 €/Monat — wiederkehrende Zahlung",
    checkout: "Zur Zahlung",
    back: "Zurück zur Startseite",
    loading: "Weiterleitung zur Zahlung...",
    includes: "Inklusive:",
    features: [
      "1 NFC-Aufsteller inklusive",
      "Google-Bewertungsfilter",
      "SMS-Gutscheinsystem",
      "Treuekarte",
      "Admin-Dashboard",
      "200 SMS/Monat inklusive",
      "Technischer Support",
    ],
  },
  it: {
    title: "Configura il tuo ordine",
    subtitle: "Scegli quante targhe NFC ti servono per le tue sedi.",
    subscription: "Abbonamento Starlinkee Pro",
    subscriptionDesc: "Filtro recensioni, coupon SMS, carta fedeltà, pannello di controllo",
    perMonth: "/mese",
    plates: "Targhe NFC",
    platesDesc: "Prima targa gratis — ogni altra 9 €",
    free: "Gratis",
    each: "/ cad.",
    howMany: "Quante targhe?",
    summary: "Riepilogo",
    monthlyFee: "Abbonamento mensile",
    platesOnetime: "Targhe NFC (una tantum)",
    firstFree: "1 × gratis",
    additional: "aggiuntive",
    total: "Da pagare ora",
    subscriptionNote: "Abbonamento 49 €/mese — pagamento ricorrente",
    checkout: "Procedi al pagamento",
    back: "Torna alla homepage",
    loading: "Reindirizzamento al pagamento...",
    includes: "Include:",
    features: [
      "1 targa NFC inclusa",
      "Filtro recensioni Google",
      "Sistema coupon SMS",
      "Carta fedeltà",
      "Pannello di controllo",
      "200 SMS/mese inclusi",
      "Supporto tecnico",
    ],
  },
};

const pricing: Record<Locale, { subPrice: number; platePrice: number; currency: string }> = {
  pl: { subPrice: 199, platePrice: 29, currency: "zł" },
  en: { subPrice: 49, platePrice: 9, currency: "€" },
  de: { subPrice: 49, platePrice: 9, currency: "€" },
  it: { subPrice: 49, platePrice: 9, currency: "€" },
};

function OrderContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang") as Locale | null;
  const locale: Locale = langParam && langParam in t ? langParam : "pl";
  const l = t[locale];
  const p = pricing[locale];

  const [plates, setPlates] = useState(1);
  const [loading, setLoading] = useState(false);

  const extraPlates = Math.max(0, plates - 1);
  const platesCost = extraPlates * p.platePrice;
  const totalNow = p.subPrice + platesCost;

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plates, locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {l.back}
        </a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{l.title}</h1>
        <p className="text-gray-500 mb-10">{l.subtitle}</p>

        {/* What's included */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-4">
          <p className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
            {l.includes}
          </p>
          <ul className="space-y-2">
            {l.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-brand-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{l.subscription}</h3>
              <p className="text-sm text-gray-400 mt-1">{l.subscriptionDesc}</p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <span className="text-2xl font-bold text-gray-900">
                {p.subPrice} {p.currency}
              </span>
              <span className="text-sm text-gray-400">{l.perMonth}</span>
            </div>
          </div>
        </div>

        {/* Plates */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-semibold text-gray-900">{l.plates}</h3>
              <p className="text-sm text-gray-400 mt-1">{l.platesDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-28 h-28 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
              <Image
                src="/product.webp"
                alt="Starlinkee NFC"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {l.howMany}
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPlates(Math.max(1, plates - 1))}
                  className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="text-3xl font-bold w-12 text-center">{plates}</span>
                <button
                  type="button"
                  onClick={() => setPlates(Math.min(50, plates + 1))}
                  className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {plates > 1 && (
            <div className="mt-4 text-sm text-gray-500">
              <span className="text-brand-600 font-medium">{l.firstFree}</span>
              {" + "}
              {extraPlates} {l.additional} × {p.platePrice} {p.currency} ={" "}
              <span className="font-semibold text-gray-900">
                {platesCost} {p.currency}
              </span>
            </div>
          )}
          {plates === 1 && (
            <div className="mt-4 text-sm text-brand-600 font-medium">
              {l.free}
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border-2 border-brand-600 p-6 shadow-lg shadow-brand-600/10">
          <h3 className="font-semibold text-gray-900 mb-4">{l.summary}</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{l.monthlyFee}</span>
              <span className="font-medium text-gray-900">
                {p.subPrice} {p.currency}
              </span>
            </div>
            {platesCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {l.platesOnetime} ({extraPlates}×)
                </span>
                <span className="font-medium text-gray-900">
                  {platesCost} {p.currency}
                </span>
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 flex justify-between">
              <span className="font-semibold text-gray-900">{l.total}</span>
              <span className="text-xl font-bold text-gray-900">
                {totalNow} {p.currency}
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3">{l.subscriptionNote}</p>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? l.loading : l.checkout}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderContent />
    </Suspense>
  );
}
