import type { Translations } from "@/i18n";
import Image from "next/image";

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-bottom opacity-30"
      />
      <div className="absolute inset-0 bg-blue-500/15" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full border border-brand-100">
          {t.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-2">
          {t.hero.title}
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-600 mb-6">
          {t.hero.titleHighlight}
        </h1>

        <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto mb-10 leading-relaxed" style={{ textShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.6)' }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-8 py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-gray-900 text-gray-700 font-medium rounded-xl px-8 py-3.5 text-base hover:bg-gray-50 transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
