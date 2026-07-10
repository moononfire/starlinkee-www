"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n";

const ui = {
  pl: {
    ariaLabel: "Bezpłatny kurs — optymalizacja wizytówki Google",
    badge: "Bezpłatny kurs e-mail",
    headingLine1: "Zadbaj o wizytówkę Google",
    headingLine2: "i wejdź wyżej w rankingu",
    body: (
      <>
        Zapisz się i odbierz <strong className="text-white">darmowy kurs</strong> — dowiesz
        się, jak samodzielnie zoptymalizować wizytówkę Google Moja Firma, żeby Twoja firma
        pojawiała się wyżej w lokalnych wynikach wyszukiwania.
      </>
    ),
    successTitle: "Świetnie! Sprawdź skrzynkę e-mail.",
    successBody: "Pierwszy odcinek kursu już czeka na Ciebie.",
    emailPlaceholder: "twoj@email.com",
    sending: "Wysyłanie…",
    submit: "Odbierz kurs →",
    disclaimer: "Bez spamu. Możesz się wypisać w dowolnym momencie.",
  },
  en: {
    ariaLabel: "Free course — Google Business Profile optimization",
    badge: "Free email course",
    headingLine1: "Take care of your Google Business Profile",
    headingLine2: "and climb higher in the rankings",
    body: (
      <>
        Sign up and get a <strong className="text-white">free course</strong> — learn how
        to optimize your Google Business Profile yourself, so your business appears higher
        in local search results.
      </>
    ),
    successTitle: "Great! Check your inbox.",
    successBody: "The first lesson of the course is already waiting for you.",
    emailPlaceholder: "your@email.com",
    sending: "Sending…",
    submit: "Get the course →",
    disclaimer: "No spam. Unsubscribe anytime.",
  },
  de: {
    ariaLabel: "Kostenloser Kurs — Optimierung des Google Unternehmensprofils",
    badge: "Kostenloser E-Mail-Kurs",
    headingLine1: "Kümmern Sie sich um Ihr Google Unternehmensprofil",
    headingLine2: "und steigen Sie im Ranking auf",
    body: (
      <>
        Melden Sie sich an und erhalten Sie einen <strong className="text-white">kostenlosen Kurs</strong> —
        erfahren Sie, wie Sie Ihr Google Unternehmensprofil selbst optimieren, damit Ihr
        Unternehmen in den lokalen Suchergebnissen weiter oben erscheint.
      </>
    ),
    successTitle: "Super! Schauen Sie in Ihr Postfach.",
    successBody: "Die erste Lektion des Kurses wartet bereits auf Sie.",
    emailPlaceholder: "ihre@email.de",
    sending: "Wird gesendet…",
    submit: "Kurs erhalten →",
    disclaimer: "Kein Spam. Jederzeit abbestellbar.",
  },
  it: {
    ariaLabel: "Corso gratuito — ottimizzazione della scheda Google",
    badge: "Corso email gratuito",
    headingLine1: "Cura la tua scheda Google",
    headingLine2: "e sali nel ranking",
    body: (
      <>
        Iscriviti e ricevi un <strong className="text-white">corso gratuito</strong> — scoprirai
        come ottimizzare da solo la tua scheda Google My Business, così la tua attività apparirà
        più in alto nei risultati di ricerca locali.
      </>
    ),
    successTitle: "Ottimo! Controlla la tua email.",
    successBody: "La prima lezione del corso ti sta già aspettando.",
    emailPlaceholder: "tua@email.it",
    sending: "Invio…",
    submit: "Ricevi il corso →",
    disclaimer: "Niente spam. Puoi disiscriverti in qualsiasi momento.",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function NewsletterLanding({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = ui[locale];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "course", locale }),
    });
    setLoading(false);
    if (!res.ok) return;
    setSubmitted(true);
  }

  return (
    <main
      className="h-dvh overflow-hidden bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800 flex flex-col"
      aria-label={t.ariaLabel}
    >
      <div className="shrink-0 pt-6 sm:pt-8 text-center">
        <Link href={`/${locale}`} className="text-lg font-bold text-white">
          Starlinkee
        </Link>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl grid sm:grid-cols-[1fr_auto] gap-8 sm:gap-10 items-center">
          <div className="max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 sm:mb-5 tracking-widest uppercase">
              {t.badge}
            </span>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-3 sm:mb-4">
              {t.headingLine1}
              <br />
              <span className="text-emerald-200">{t.headingLine2}</span>
            </h1>

            <p className="text-green-100 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {t.body}
            </p>

            {submitted ? (
              <div className="bg-white/10 rounded-2xl px-6 py-6 text-center border border-white/20">
                <div className="text-4xl mb-3">🎉</div>
                <p className="text-lg font-bold text-white">{t.successTitle}</p>
                <p className="text-green-100 text-sm mt-1">{t.successBody}</p>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="flex-1 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 bg-white shadow-md"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl px-7 py-4 text-sm font-bold bg-white text-green-700 hover:bg-green-50 transition-colors disabled:opacity-60 whitespace-nowrap shadow-md"
                  >
                    {loading ? t.sending : t.submit}
                  </button>
                </form>
                <p className="text-green-200/70 text-xs mt-3">{t.disclaimer}</p>
              </>
            )}
          </div>

          <div className="hidden sm:flex items-center justify-center w-40 md:w-52 lg:w-64 aspect-[778/1025] shrink-0 relative">
            <Image
              src={`/newsletter/${locale}.webp`}
              alt={t.badge}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
