"use client";

import { useState } from "react";
import type { Locale, Translations } from "@/i18n";

export default function Navbar({
  t,
  locale,
  onLocaleChange,
}: {
  t: Translations;
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-brand-600">
          Starlinkee
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.features}
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => onLocaleChange(locale === "pl" ? "en" : "pl")}
            className="text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-md px-2.5 py-1 transition-colors cursor-pointer"
          >
            {locale === "pl" ? "EN" : "PL"}
          </button>

          <a
            href="#contact"
            className="text-sm font-medium bg-brand-600 text-white rounded-lg px-4 py-2 hover:bg-brand-700 transition-colors"
          >
            {t.nav.getStarted}
          </a>
        </div>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-gray-600"
          >
            {t.nav.features}
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-gray-600"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-gray-600"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => {
              onLocaleChange(locale === "pl" ? "en" : "pl");
              setMobileOpen(false);
            }}
            className="text-sm text-gray-500 border border-gray-200 rounded-md px-2.5 py-1 w-fit cursor-pointer"
          >
            {locale === "pl" ? "EN" : "PL"}
          </button>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium bg-brand-600 text-white rounded-lg px-4 py-2 text-center"
          >
            {t.nav.getStarted}
          </a>
        </div>
      )}
    </nav>
  );
}
