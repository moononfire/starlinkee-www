"use client";

import { useState } from "react";
import type { Locale, Translations } from "@/i18n";
import Image from "next/image";

export default function Pricing({
  t,
  locale,
}: {
  t: Translations;
  locale: Locale;
}) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const features = [
    t.pricing.feature1,
    t.pricing.feature2,
    t.pricing.feature3,
    t.pricing.feature4,
    t.pricing.feature5,
    t.pricing.feature6,
    t.pricing.feature7,
  ];

  const annualPrice = Number(t.pricing.price) * 10;

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.pricing.sectionTitle}
          </h2>
          <p className="text-lg text-gray-500">{t.pricing.sectionSubtitle}</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                billing === "monthly"
                  ? "bg-brand-600 text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {t.pricing.billingMonthly}
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
              {t.pricing.billingAnnual}
              <span className="ml-2 inline-block rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 align-middle">
                {t.pricing.annualSavingsBadge}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl border-2 border-brand-600 p-8 sm:p-10 shadow-xl shadow-brand-600/10">
          <div className="w-full md:w-2/5 aspect-square relative rounded-2xl overflow-hidden bg-gray-50 shrink-0">
            <Image
              src={`/product/${locale}.webp`}
              alt={t.pricing.planName}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-3/5">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.pricing.planName}
              </h3>
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-5xl sm:text-6xl font-bold text-gray-900">
                  {billing === "annual" ? annualPrice : t.pricing.price}
                </span>
                <span className="text-2xl font-medium text-gray-500">
                  {t.pricing.currency}
                </span>
                <span className="text-lg text-gray-500 ml-1">
                  {billing === "annual" ? t.pricing.periodAnnual : t.pricing.period}
                </span>
              </div>
              {billing === "annual" && (
                <p className="text-sm text-gray-500 mt-2">{t.pricing.annualNote}</p>
              )}
            </div>

            <div className="border-t border-gray-100 pt-8 mb-8">
              <p className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
                {t.pricing.includes}
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
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
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`/${locale}/order${billing === "annual" ? "?billing=annual" : ""}`}
              className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
            >
              {t.pricing.cta}
            </a>

            <div className="mt-6 text-center md:text-left">
              <p className="text-sm text-brand-600 font-medium">
                {t.pricing.plates}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
