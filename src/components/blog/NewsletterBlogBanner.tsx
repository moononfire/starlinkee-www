"use client";

import { useState } from "react";

const STORAGE_KEY = "newsletter_status";
const SUBSCRIBED = "subscribed";

export default function NewsletterBlogBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "course" }),
    });
    setLoading(false);
    if (!res.ok) return;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, SUBSCRIBED);
    }
  }

  return (
    <section
      className="w-full bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800 py-14 my-14"
      aria-label="Bezpłatny kurs — optymalizacja wizytówki Google"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-[1fr_auto] gap-10 items-center">

        {/* Lewa strona — tekst + formularz */}
        <div className="max-w-xl">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-widest uppercase">
            Bezpłatny kurs e-mail
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Zadbaj o wizytówkę Google<br />
            <span className="text-emerald-200">i wejdź wyżej w rankingu</span>
          </h2>

          <p className="text-green-100 text-base leading-relaxed mb-8">
            Zapisz się i odbierz <strong className="text-white">darmowy kurs</strong> — dowiesz
            się, jak samodzielnie zoptymalizować wizytówkę Google Moja Firma, żeby Twoja firma
            pojawiała się wyżej w lokalnych wynikach wyszukiwania.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-2xl px-6 py-6 text-center border border-white/20">
              <div className="text-4xl mb-3">🎉</div>
              <p className="text-lg font-bold text-white">Świetnie! Sprawdź skrzynkę e-mail.</p>
              <p className="text-green-100 text-sm mt-1">
                Pierwszy odcinek kursu już czeka na Ciebie.
              </p>
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
                  placeholder="twoj@email.com"
                  className="flex-1 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 bg-white shadow-md"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl px-7 py-4 text-sm font-bold bg-white text-green-700 hover:bg-green-50 transition-colors disabled:opacity-60 whitespace-nowrap shadow-md"
                >
                  {loading ? "Wysyłanie…" : "Odbierz kurs →"}
                </button>
              </form>
              <p className="text-green-200/70 text-xs mt-3">
                Bez spamu. Możesz się wypisać w dowolnym momencie.
              </p>
            </>
          )}
        </div>

        {/* Prawa strona — grafika placeholder */}
        <div className="hidden sm:flex flex-col items-center justify-center w-56 h-56 shrink-0">
          {/*
            Zamień ten blok na:
            <Image src="/images/newsletter-kurs-wizytowka.png" alt="Kurs optymalizacji wizytówki Google" width={224} height={224} />
          */}
          <div className="w-full h-full rounded-2xl bg-white/10 border-2 border-dashed border-white/30 flex flex-col items-center justify-center gap-4 p-6">
            {/* Dekoracyjna grafika SVG */}
            <svg viewBox="0 0 80 80" className="w-20 h-20" aria-hidden="true">
              {/* Karta wizytówki */}
              <rect x="6" y="16" width="68" height="48" rx="6" fill="white" fillOpacity="0.15" />
              <rect x="12" y="22" width="56" height="6" rx="3" fill="white" fillOpacity="0.5" />
              {/* 5 gwiazdek */}
              <text x="12" y="40" fontSize="10" fill="#fbbf24">★★★★★</text>
              <rect x="12" y="43" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
              <rect x="12" y="49" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
              {/* Strzałka w górę */}
              <circle cx="62" cy="58" r="10" fill="#4ade80" fillOpacity="0.9" />
              <path d="M62 63 L62 53 M58.5 56.5 L62 53 L65.5 56.5"
                stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <p className="text-white/50 text-xs text-center leading-tight">
              Grafika<br />(zastąp plikiem)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
