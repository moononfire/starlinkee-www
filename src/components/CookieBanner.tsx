"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";

const STORAGE_KEY = "cookie_consent";
const CONSENT_EXPIRY_DAYS = 365;

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: ConsentState = JSON.parse(raw);
    const decidedAt = new Date(parsed.decidedAt);
    const expiresAt = new Date(decidedAt.getTime() + CONSENT_EXPIRY_DAYS * 86400 * 1000);
    if (new Date() > expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: ConsentState = {
    analytics,
    marketing,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return loadConsent();
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!loadConsent()) setVisible(true);
  }, []);

  function acceptAll() {
    saveConsent(true, true);
    setVisible(false);
  }

  function rejectOptional() {
    saveConsent(false, false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 pt-0 sm:px-6 sm:pb-5"
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl bg-white border border-gray-200 shadow-2xl px-5 py-4 sm:px-6 sm:py-5"
        style={{ animation: "banner-slidein 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Ta strona używa plików cookies.</span>{" "}
              Niezbędne cookies zapewniają działanie strony i nie wymagają zgody. Opcjonalne
              cookies (analityczne, marketingowe) pomagają nam ulepszać serwis — możesz je
              odrzucić bez wpływu na korzystanie ze strony.{" "}
              <Link
                href={`/${locale}/polityka-cookies`}
                className="text-brand-600 hover:underline underline-offset-2 whitespace-nowrap"
              >
                Dowiedz się więcej
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={rejectOptional}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Odrzuć opcjonalne
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
