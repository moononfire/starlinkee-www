"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "newsletter_status";
const SUBSCRIBED = "subscribed";
const DELAY_MS = 8000;

function getTodayDate() {
  return new Date().toISOString().split("T")[0]; // "2026-06-30"
}

function shouldShow(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return true;
  if (stored === SUBSCRIBED) return false; // zapisał się — nigdy więcej
  return stored !== getTodayDate(); // odrzucił dziś — nie pokazuj; jutro — tak
}

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!shouldShow()) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
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
      body: JSON.stringify({ email, source: "discount" }),
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
          aria-label="Zamknij"
        >
          ×
        </button>

        <div className="px-7 py-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <p className="text-lg font-semibold text-gray-800">Dziękujemy!</p>
              <p className="text-sm text-gray-500 mt-1">
                Kod rabatowy wyślemy na podany adres e-mail.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-5">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                  Oferta powitalna
                </span>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  Odbierz <span className="text-blue-600">5&nbsp;€&nbsp;zniżki</span>
                  <br />na pierwsze zamówienie
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Zapisz się na newsletter i otrzymaj kod rabatowy na skrzynkę e-mail.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
                  style={{ background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" }}
                >
                  {loading ? "Wysyłanie…" : "Odbierz zniżkę 5 €"}
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-3">
                Bez spamu. Możesz się wypisać w dowolnym momencie.
              </p>

              <button
                onClick={dismiss}
                className="block w-full text-center text-xs text-gray-400 hover:text-gray-500 mt-2 underline underline-offset-2"
              >
                Nie, dziękuję
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
