"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";

const STORAGE_KEY = "cookie_consent";
const CONSENT_EXPIRY_DAYS = 365;
export const CONSENT_CHANGE_EVENT = "cookie-consent-changed";

const cookieUi = {
  pl: {
    dialogLabel: "Zgoda na pliki cookies",
    boldIntro: "Ta strona używa plików cookies.",
    body: "Niezbędne cookies zapewniają działanie strony i nie wymagają zgody. Opcjonalne cookies (analityczne, marketingowe) pomagają nam ulepszać serwis — możesz je odrzucić bez wpływu na korzystanie ze strony.",
    learnMore: "Dowiedz się więcej",
    rejectOptional: "Odrzuć opcjonalne",
    acceptAll: "Akceptuj wszystkie",
  },
  en: {
    dialogLabel: "Cookie consent",
    boldIntro: "This site uses cookies.",
    body: "Essential cookies keep the site running and don't require consent. Optional cookies (analytics, marketing) help us improve the service — you can decline them without affecting your use of the site.",
    learnMore: "Learn more",
    rejectOptional: "Reject optional",
    acceptAll: "Accept all",
  },
  de: {
    dialogLabel: "Cookie-Einwilligung",
    boldIntro: "Diese Website verwendet Cookies.",
    body: "Notwendige Cookies gewährleisten den Betrieb der Website und erfordern keine Zustimmung. Optionale Cookies (Analyse, Marketing) helfen uns, den Service zu verbessern — Sie können sie ablehnen, ohne die Nutzung der Website zu beeinträchtigen.",
    learnMore: "Mehr erfahren",
    rejectOptional: "Optionale ablehnen",
    acceptAll: "Alle akzeptieren",
  },
  it: {
    dialogLabel: "Consenso ai cookie",
    boldIntro: "Questo sito utilizza i cookie.",
    body: "I cookie essenziali garantiscono il funzionamento del sito e non richiedono consenso. I cookie opzionali (analitici, marketing) ci aiutano a migliorare il servizio — puoi rifiutarli senza che ciò influisca sull'utilizzo del sito.",
    learnMore: "Scopri di più",
    rejectOptional: "Rifiuta opzionali",
    acceptAll: "Accetta tutti",
  },
} satisfies Record<Locale, Record<string, string>>;

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
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));
}

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return loadConsent();
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const c = cookieUi[locale];

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
      aria-label={c.dialogLabel}
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 pt-0 sm:px-6 sm:pb-5"
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl bg-white border border-gray-200 shadow-2xl px-5 py-4 sm:px-6 sm:py-5"
        style={{ animation: "banner-slidein 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">{c.boldIntro}</span>{" "}
              {c.body}{" "}
              <Link
                href={`/${locale}/polityka-cookies`}
                className="text-brand-600 hover:underline underline-offset-2 whitespace-nowrap"
              >
                {c.learnMore}
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={rejectOptional}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {c.rejectOptional}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}
            >
              {c.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
