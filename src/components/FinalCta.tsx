import type { Locale, Translations } from "@/i18n";

export default function FinalCta({ t, locale }: { t: Translations; locale: Locale }) {
  return (
    <section className="bg-brand-700 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {t.finalCta.title}
        </h2>
        <p className="text-lg text-brand-100 mb-8">{t.finalCta.subtitle}</p>
        <a
          href={`/${locale}/order`}
          className="inline-flex items-center justify-center bg-white text-brand-700 font-semibold rounded-lg px-8 py-3.5 text-base hover:bg-brand-50 transition-colors"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
