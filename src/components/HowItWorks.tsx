import type { Translations } from "@/i18n";

export default function HowItWorks({ t }: { t: Translations }) {
  const steps = [
    { title: t.how.step1Title, desc: t.how.step1Desc },
    { title: t.how.step2Title, desc: t.how.step2Desc },
    { title: t.how.step3Title, desc: t.how.step3Desc },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {t.how.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {t.how.title}
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="text-center md:text-left">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-bold mb-5">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
