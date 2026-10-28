import type { Locale, Translations } from "@/i18n";
import Image from "next/image";

export default function Hero({ t, locale }: { t: Translations; locale: Locale }) {
  const points = [t.hero.point1, t.hero.point2, t.hero.point3];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="inline-block text-sm font-semibold text-brand-700 bg-brand-100/70 rounded-full px-3.5 py-1 mb-6">
          {t.hero.badge}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
          {t.hero.title}{" "}
          <span className="text-brand-600">{t.hero.titleHighlight}</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`/${locale}/order`}
            data-track="hero"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-semibold rounded-lg px-7 py-3.5 text-base hover:bg-brand-700 transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold rounded-lg px-7 py-3.5 text-base hover:bg-gray-50 transition-colors border border-gray-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative max-w-6xl mx-auto mt-12 sm:mt-16">
        <div className="absolute -inset-4 rounded-[2rem] bg-brand-100/60 blur-2xl" aria-hidden="true" />
        <Image
          src={`/hero/${locale}.webp`}
          alt="Starlinkee — tabliczka NFC"
          width={3168}
          height={1344}
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="relative w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-900/10"
        />
      </div>
    </section>
  );
}
