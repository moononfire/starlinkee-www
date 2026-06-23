import type { Translations } from "@/i18n";
import Image from "next/image";

const featureImages = [
  "/features/reviews.png",
  "/features/promos.png",
  "/features/loyalty.png",
  "/features/dashboard.png",
];

export default function Features({ t }: { t: Translations }) {
  const features = [
    { title: t.features.reviewTitle, desc: t.features.reviewDesc, img: featureImages[0], aspect: "aspect-[3/4]" },
    { title: t.features.promoTitle, desc: t.features.promoDesc, img: featureImages[1], aspect: "aspect-[4/3]" },
    { title: t.features.loyaltyTitle, desc: t.features.loyaltyDesc, img: featureImages[2], aspect: "aspect-[4/3]" },
    { title: t.features.dashboardTitle, desc: t.features.dashboardDesc, img: featureImages[3], aspect: "aspect-[4/3]" },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.features.sectionTitle}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.features.sectionSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
            >
              <div className={`w-full md:w-1/2 ${f.aspect} relative rounded-2xl overflow-hidden bg-white border border-gray-100`}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
