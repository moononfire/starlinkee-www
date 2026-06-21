import type { Translations } from "@/i18n";

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full border border-brand-100">
          {t.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-2">
          {t.hero.title}
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-600 mb-6">
          {t.hero.titleHighlight}
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-8 py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center border border-gray-200 text-gray-700 font-medium rounded-xl px-8 py-3.5 text-base hover:bg-gray-50 transition-colors"
          >
            {t.hero.ctaSecondary}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
