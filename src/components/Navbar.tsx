"use client";

import { useState, type ReactNode } from "react";
import type { Locale, Translations } from "@/i18n";

const flags: Record<Locale, ReactNode> = {
  pl: (
    <svg className="w-5 h-3.5 rounded-[2px]" viewBox="0 0 640 480">
      <rect width="640" height="240" fill="#fff" />
      <rect y="240" width="640" height="240" fill="#dc143c" />
    </svg>
  ),
  en: (
    <svg className="w-5 h-3.5 rounded-[2px]" viewBox="0 0 640 480">
      <rect width="640" height="480" fill="#012169" />
      <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#fff" />
      <path d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E" />
      <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff" />
      <path d="M273 0v480h96V0h-96zM0 192v96h640v-96H0z" fill="#C8102E" />
    </svg>
  ),
  de: (
    <svg className="w-5 h-3.5 rounded-[2px]" viewBox="0 0 640 480">
      <rect width="640" height="160" fill="#000" />
      <rect y="160" width="640" height="160" fill="#D00" />
      <rect y="320" width="640" height="160" fill="#FFCE00" />
    </svg>
  ),
  it: (
    <svg className="w-5 h-3.5 rounded-[2px]" viewBox="0 0 640 480">
      <rect width="213.3" height="480" fill="#009246" />
      <rect x="213.3" width="213.3" height="480" fill="#fff" />
      <rect x="426.6" width="213.4" height="480" fill="#CE2B37" />
    </svg>
  ),
};

const localeLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  it: "IT",
};

const locales: Locale[] = ["pl", "en", "de", "it"];

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
  const [langOpen, setLangOpen] = useState(false);

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

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-md px-2.5 py-1 transition-colors cursor-pointer"
            >
              {flags[locale]}
              {localeLabels[locale]}
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[80px]">
                {locales
                  .filter((l) => l !== locale)
                  .map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        onLocaleChange(l);
                        setLangOpen(false);
                      }}
                      className="flex items-center gap-1.5 w-full text-left text-sm text-gray-600 hover:bg-gray-50 px-3 py-1.5 cursor-pointer"
                    >
                      {flags[l]}
                      {localeLabels[l]}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <a
            href="#pricing"
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
          <div className="flex gap-2">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => {
                  onLocaleChange(l);
                  setMobileOpen(false);
                }}
                className={`flex items-center gap-1.5 text-sm border rounded-md px-2.5 py-1 cursor-pointer ${
                  l === locale
                    ? "border-brand-600 text-brand-600 font-medium"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {flags[l]}
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <a
            href="#pricing"
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
