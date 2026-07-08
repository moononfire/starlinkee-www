"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Locale = "pl" | "en" | "de" | "it";

const t: Record<Locale, {
  productName: string;
  description: string;
  subtitle: string;
  subscription: string;
  subscriptionDesc: string;
  perMonth: string;
  plates: string;
  platesDesc: string;
  free: string;
  each: string;
  quantity: string;
  languageNames: Record<Locale, string>;
  addLanguageHint: string;
  removeLanguage: string;
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
  billingMonthly: string;
  billingAnnual: string;
  annualSavingsBadge: string;
  annualNote: string;
  subscriptionNoteAnnual: string;
  periodAnnual: string;
}> = {
  pl: {
    productName: "Starlinkee Pro + tabliczka NFC",
    description:
      "Starlinkee Pro to abonament, który automatycznie filtruje negatywne opinie Google, wysyła kupony SMS i prowadzi kartę lojalnościową Twoich klientów — wszystko z jednego panelu administracyjnego. W zestawie tabliczka NFC, dzięki której klienci zostawiają opinię jednym dotknięciem telefonu.",
    subtitle: "Wybierz ile tabliczek NFC potrzebujesz do swoich lokalizacji.",
    subscription: "Abonament Starlinkee Pro",
    subscriptionDesc: "Filtrowanie opinii, kupony SMS, karta lojalnościowa, panel administracyjny",
    perMonth: "/mies.",
    plates: "Tabliczki NFC",
    platesDesc: "Pierwsza tabliczka gratis — każda kolejna 29 zł",
    free: "Gratis",
    each: "/ szt.",
    quantity: "Ilość tabliczek",
    languageNames: { pl: "Polski", en: "Angielski", de: "Niemiecki", it: "Włoski" },
    addLanguageHint: "Potrzebujesz tabliczek w innych językach? Dodaj wersję językową:",
    removeLanguage: "Usuń język",
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
    billingMonthly: "Płatność miesięczna",
    billingAnnual: "Płatność roczna",
    annualSavingsBadge: "2 miesiące gratis",
    annualNote: "Płać raz w roku i zapłać za 10 miesięcy zamiast 12.",
    subscriptionNoteAnnual: "Abonament 1990 zł/rok — płatność cykliczna",
    periodAnnual: "/rok",
  },
  en: {
    productName: "Starlinkee Pro + NFC plate",
    description:
      "Starlinkee Pro is a subscription that automatically filters negative Google reviews, sends SMS coupons, and runs your customers' loyalty card — all from a single admin dashboard. Includes an NFC plate so customers can leave a review with a single tap of their phone.",
    subtitle: "Choose how many NFC plates you need for your locations.",
    subscription: "Starlinkee Pro subscription",
    subscriptionDesc: "Review filtering, SMS coupons, loyalty card, admin dashboard",
    perMonth: "/mo",
    plates: "NFC Plates",
    platesDesc: "First plate free — each additional plate €9",
    free: "Free",
    each: "/ each",
    quantity: "Quantity",
    languageNames: { pl: "Polish", en: "English", de: "German", it: "Italian" },
    addLanguageHint: "Need plates in other languages? Add a language version:",
    removeLanguage: "Remove language",
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
    billingMonthly: "Monthly billing",
    billingAnnual: "Annual billing",
    annualSavingsBadge: "2 months free",
    annualNote: "Pay once a year and get 10 months for the price of 10 instead of 12.",
    subscriptionNoteAnnual: "Subscription €490/yr — recurring billing",
    periodAnnual: "/yr",
  },
  de: {
    productName: "Starlinkee Pro + NFC-Aufsteller",
    description:
      "Starlinkee Pro ist ein Abo, das negative Google-Bewertungen automatisch filtert, SMS-Gutscheine versendet und die Treuekarte Ihrer Kunden verwaltet — alles über ein einziges Admin-Dashboard. Inklusive NFC-Aufsteller, mit dem Kunden mit einem Antippen des Telefons eine Bewertung hinterlassen können.",
    subtitle: "Wählen Sie, wie viele NFC-Aufsteller Sie für Ihre Standorte benötigen.",
    subscription: "Starlinkee Pro Abo",
    subscriptionDesc: "Bewertungsfilter, SMS-Gutscheine, Treuekarte, Admin-Dashboard",
    perMonth: "/Monat",
    plates: "NFC-Aufsteller",
    platesDesc: "Erster Aufsteller gratis — jeder weitere 9 €",
    free: "Gratis",
    each: "/ Stk.",
    quantity: "Anzahl",
    languageNames: { pl: "Polnisch", en: "Englisch", de: "Deutsch", it: "Italienisch" },
    addLanguageHint: "Benötigen Sie Aufsteller in anderen Sprachen? Sprachversion hinzufügen:",
    removeLanguage: "Sprache entfernen",
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
    billingMonthly: "Monatliche Zahlung",
    billingAnnual: "Jährliche Zahlung",
    annualSavingsBadge: "2 Monate gratis",
    annualNote: "Einmal im Jahr zahlen und nur für 10 statt 12 Monate bezahlen.",
    subscriptionNoteAnnual: "Abo 490 €/Jahr — wiederkehrende Zahlung",
    periodAnnual: "/Jahr",
  },
  it: {
    productName: "Starlinkee Pro + targa NFC",
    description:
      "Starlinkee Pro è un abbonamento che filtra automaticamente le recensioni negative su Google, invia coupon via SMS e gestisce la carta fedeltà dei tuoi clienti — tutto da un unico pannello di controllo. Include una targa NFC che permette ai clienti di lasciare una recensione con un semplice tocco del telefono.",
    subtitle: "Scegli quante targhe NFC ti servono per le tue sedi.",
    subscription: "Abbonamento Starlinkee Pro",
    subscriptionDesc: "Filtro recensioni, coupon SMS, carta fedeltà, pannello di controllo",
    perMonth: "/mese",
    plates: "Targhe NFC",
    platesDesc: "Prima targa gratis — ogni altra 9 €",
    free: "Gratis",
    each: "/ cad.",
    quantity: "Quantità",
    languageNames: { pl: "Polacco", en: "Inglese", de: "Tedesco", it: "Italiano" },
    addLanguageHint: "Ti servono targhe in altre lingue? Aggiungi una versione linguistica:",
    removeLanguage: "Rimuovi lingua",
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
    billingMonthly: "Pagamento mensile",
    billingAnnual: "Pagamento annuale",
    annualSavingsBadge: "2 mesi gratis",
    annualNote: "Paga una volta all'anno e paga per 10 mesi invece di 12.",
    subscriptionNoteAnnual: "Abbonamento 490 €/anno — pagamento ricorrente",
    periodAnnual: "/anno",
  },
};

const pricing: Record<Locale, { subPrice: number; platePrice: number; currency: string }> = {
  pl: { subPrice: 199, platePrice: 29, currency: "zł" },
  en: { subPrice: 49, platePrice: 9, currency: "€" },
  de: { subPrice: 49, platePrice: 9, currency: "€" },
  it: { subPrice: 49, platePrice: 9, currency: "€" },
};

const galleryImages = ["/product.webp"];

const MAX_PLATES = 50;
const ALL_LOCALES = Object.keys(pricing) as Locale[];

export default function OrderPage() {
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1] as Locale | undefined;
  const locale: Locale = pathLocale && pathLocale in t ? pathLocale : "pl";
  const l = t[locale];
  const p = pricing[locale];

  const [langRows, setLangRows] = useState<{ lang: Locale; qty: number }[]>([
    { lang: locale, qty: 1 },
  ]);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("billing") === "annual") {
      setBilling("annual");
    }
  }, []);

  const totalPlates = langRows.reduce((sum, o) => sum + o.qty, 0);
  const extraPlates = Math.max(0, totalPlates - 1);
  const platesCost = extraPlates * p.platePrice;
  const annualSubPrice = p.subPrice * 10;
  const totalNow = (billing === "annual" ? annualSubPrice : p.subPrice) + platesCost;

  const availableLangs = ALL_LOCALES.filter(
    (lang) => !langRows.some((o) => o.lang === lang)
  );

  function addLanguage(lang: Locale) {
    if (totalPlates >= MAX_PLATES) return;
    setLangRows((prev) => [...prev, { lang, qty: 1 }]);
  }

  function setLangQty(lang: Locale, qty: number) {
    setLangRows((prev) => prev.map((o) => (o.lang === lang ? { ...o, qty } : o)));
  }

  function removeLanguage(lang: Locale) {
    setLangRows((prev) => (prev.length > 1 ? prev.filter((o) => o.lang !== lang) : prev));
  }

  async function handleCheckout() {
    setLoading(true);
    try {
      const plateLanguages: Record<string, number> = {};
      for (const o of langRows) plateLanguages[o.lang] = o.qty;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plates: totalPlates, plateLanguages, billing, locale }),
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
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <a
          href={`/${locale}`}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {l.back}
        </a>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white border border-gray-100">
              <Image
                src={galleryImages[activeImage]}
                alt={l.productName}
                fill
                priority
                className="object-cover"
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="flex gap-3 mt-4">
                {galleryImages.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 relative rounded-xl overflow-hidden bg-white border-2 transition-colors cursor-pointer ${
                      i === activeImage ? "border-brand-600" : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details + purchase */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{l.productName}</h1>

            <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-1 mb-4">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  billing === "monthly"
                    ? "bg-brand-600 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {l.billingMonthly}
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  billing === "annual"
                    ? "bg-brand-600 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {l.billingAnnual}
                <span className="ml-2 inline-block rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 align-middle">
                  {l.annualSavingsBadge}
                </span>
              </button>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-gray-900">
                {billing === "annual" ? annualSubPrice : p.subPrice} {p.currency}
              </span>
              <span className="text-gray-400">
                {billing === "annual" ? l.periodAnnual : l.perMonth}
              </span>
            </div>
            {billing === "annual" && (
              <p className="text-xs text-gray-400 mb-5">{l.annualNote}</p>
            )}
            {billing === "monthly" && <div className="mb-5" />}

            <p className="text-gray-600 leading-relaxed mb-6">{l.description}</p>

            {/* Includes */}
            <div className="mb-6">
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

            <div className="border-t border-gray-200 my-6" />

            {/* Quantity */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {l.quantity}
              </label>
              <p className="text-xs text-gray-400 mb-3">{l.platesDesc}</p>

              <div className="space-y-2">
                {langRows.map((o) => (
                  <div
                    key={o.lang}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {l.languageNames[o.lang]}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center rounded-lg border border-gray-300 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setLangQty(o.lang, Math.max(1, o.qty - 1))}
                          className="w-10 h-10 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-11 text-center text-base font-semibold border-x border-gray-300 h-10 flex items-center justify-center">
                          {o.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => totalPlates < MAX_PLATES && setLangQty(o.lang, o.qty + 1)}
                          className="w-10 h-10 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      {langRows.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLanguage(o.lang)}
                          aria-label={l.removeLanguage}
                          title={l.removeLanguage}
                          className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add language */}
              {availableLangs.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-400 mb-2">{l.addLanguageHint}</p>
                  <div className="flex flex-wrap gap-2">
                    {availableLangs.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => addLanguage(lang)}
                        className="inline-flex items-center gap-1 rounded-full border border-dashed border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:border-brand-600 hover:text-brand-600 transition-colors cursor-pointer"
                      >
                        + {l.languageNames[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {totalPlates > 1 ? (
                <div className="mt-3 text-sm text-gray-500">
                  <span className="text-brand-600 font-medium">{l.firstFree}</span>
                  {" + "}
                  {extraPlates} {l.additional} × {p.platePrice} {p.currency} ={" "}
                  <span className="font-semibold text-gray-900">
                    {platesCost} {p.currency}
                  </span>
                </div>
              ) : (
                <div className="mt-3 text-sm text-brand-600 font-medium">{l.free}</div>
              )}
            </div>

            <div className="border-t border-gray-200 my-6" />

            {/* Order summary */}
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {billing === "annual" ? l.billingAnnual : l.monthlyFee}
                </span>
                <span className="font-medium text-gray-900">
                  {billing === "annual" ? annualSubPrice : p.subPrice} {p.currency}
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
              <div className="border-t border-gray-100 pt-2 flex justify-between">
                <span className="font-semibold text-gray-900">{l.total}</span>
                <span className="text-xl font-bold text-gray-900">
                  {totalNow} {p.currency}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? l.loading : l.checkout}
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              {billing === "annual" ? l.subscriptionNoteAnnual : l.subscriptionNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
