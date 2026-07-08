"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n";

const STORAGE_KEY = "newsletter_status";
const SUBSCRIBED = "subscribed";
const DELAY_MS = 15000;

const popupUi = {
  pl: {
    close: "Zamknij",
    thanks: "Dziękujemy!",
    thanksBody: "Kod rabatowy wyślemy na podany adres e-mail.",
    badge: "Oferta powitalna",
    headingPrefix: "Odbierz ",
    headingDiscount: "5 € zniżki",
    headingSuffix: "na pierwsze zamówienie",
    subtitle: "Zapisz się na newsletter i otrzymaj kod rabatowy na skrzynkę e-mail.",
    emailPlaceholder: "twoj@email.com",
    sending: "Wysyłanie…",
    submit: "Odbierz zniżkę 5 €",
    disclaimer: "Bez spamu. Możesz się wypisać w dowolnym momencie.",
    noThanks: "Nie, dziękuję",
  },
  en: {
    close: "Close",
    thanks: "Thank you!",
    thanksBody: "We'll send the discount code to your email address.",
    badge: "Welcome offer",
    headingPrefix: "Get ",
    headingDiscount: "€5 off",
    headingSuffix: "your first order",
    subtitle: "Sign up for the newsletter and get a discount code in your inbox.",
    emailPlaceholder: "your@email.com",
    sending: "Sending…",
    submit: "Get €5 off",
    disclaimer: "No spam. Unsubscribe anytime.",
    noThanks: "No, thanks",
  },
  de: {
    close: "Schließen",
    thanks: "Vielen Dank!",
    thanksBody: "Wir senden den Rabattcode an Ihre E-Mail-Adresse.",
    badge: "Willkommensangebot",
    headingPrefix: "Sichern Sie sich ",
    headingDiscount: "5 € Rabatt",
    headingSuffix: "auf Ihre erste Bestellung",
    subtitle: "Melden Sie sich für den Newsletter an und erhalten Sie einen Rabattcode per E-Mail.",
    emailPlaceholder: "ihre@email.de",
    sending: "Wird gesendet…",
    submit: "5 € Rabatt sichern",
    disclaimer: "Kein Spam. Jederzeit abbestellbar.",
    noThanks: "Nein, danke",
  },
  it: {
    close: "Chiudi",
    thanks: "Grazie!",
    thanksBody: "Ti invieremo il codice sconto all'indirizzo email indicato.",
    badge: "Offerta di benvenuto",
    headingPrefix: "Ricevi ",
    headingDiscount: "5 € di sconto",
    headingSuffix: "sul primo ordine",
    subtitle: "Iscriviti alla newsletter e ricevi un codice sconto via email.",
    emailPlaceholder: "tua@email.it",
    sending: "Invio…",
    submit: "Ricevi 5 € di sconto",
    disclaimer: "Niente spam. Puoi disiscriverti in qualsiasi momento.",
    noThanks: "No, grazie",
  },
} satisfies Record<Locale, Record<string, string>>;

function getTodayDate() {
  return new Date().toISOString().split("T")[0]; // "2026-06-30"
}

function shouldShow(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return true;
  if (stored === SUBSCRIBED) return false; // zapisał się — nigdy więcej
  return stored !== getTodayDate(); // odrzucił dziś — nie pokazuj; jutro — tak
}

export default function NewsletterPopup({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const p = popupUi[locale];

  useEffect(() => {
    if (!shouldShow()) return;

    let shown = false;

    function triggerPopup() {
      if (!shown) {
        shown = true;
        setVisible(true);
      }
    }

    const timer = setTimeout(triggerPopup, DELAY_MS);

    // Exit intent: kursor opuszcza widok przez górną krawędź (kierunek paska przeglądarki)
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, getTodayDate()); // nie pokazuj do końca dnia
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "discount", locale }),
    });
    setLoading(false);
    if (!res.ok) return;
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, SUBSCRIBED);
    setTimeout(() => setVisible(false), 3000);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center pb-6 px-4 sm:items-center sm:pb-0"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
        style={{ animation: "popup-fadein 0.35s ease both" }}
      >
        {/* Górny pasek z gradientem */}
        <div
          className="h-2 w-full"
          style={{ background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" }}
        />

        <button
          onClick={dismiss}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-light leading-none"
          aria-label={p.close}
        >
          ×
        </button>

        <div className="px-7 py-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <p className="text-lg font-semibold text-gray-800">{p.thanks}</p>
              <p className="text-sm text-gray-500 mt-1">
                {p.thanksBody}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-5">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                  {p.badge}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {p.headingPrefix}<span className="text-blue-600">{p.headingDiscount}</span>
                  <br />{p.headingSuffix}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {p.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={p.emailPlaceholder}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
                  style={{ background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" }}
                >
                  {loading ? p.sending : p.submit}
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-3">
                {p.disclaimer}
              </p>

              <button
                onClick={dismiss}
                className="block w-full text-center text-xs text-gray-400 hover:text-gray-500 mt-2 underline underline-offset-2"
              >
                {p.noThanks}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
