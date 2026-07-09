import type { Locale, Translations } from "@/i18n";
import Image from "next/image";

export default function Hero({ t, locale }: { t: Translations; locale: Locale }) {
  return (
    <section className="bg-white pt-32 pb-0 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-full px-4 py-1.5 mb-8 border border-brand-100">
          {t.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gray-900">{t.hero.title}</span>
          <br />
          <span className="text-brand-600">{t.hero.titleHighlight}</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`/${locale}/order`}
            className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-8 py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-gray-900 font-medium rounded-xl px-8 py-3.5 text-base hover:bg-gray-100 transition-colors shadow-md border border-gray-200"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 relative">
        <div className="absolute -inset-4 bg-gradient-to-b from-brand-100/40 to-transparent rounded-3xl blur-2xl" />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/15 border border-gray-200/80">
          <Image
            src={`/hero/${locale}.webp`}
            alt="Starlinkee — panel zarządzania opiniami dla restauracji"
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
