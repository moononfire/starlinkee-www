import type { Locale, Translations } from "@/i18n";
import { ZoomableImage, VideoTile } from "./Lightbox";

export default function Features({ t, locale }: { t: Translations; locale: Locale }) {
  const featureImages = [
    `/features/${locale}/linktree.webp`,
    `/product/${locale}.webp`,
    `/features/${locale}/promos.webp`,
  ];

  const features = [
    { title: t.features.linktreeTitle, desc: t.features.linktreeDesc, img: featureImages[0] },
    { title: t.features.reviewTitle, desc: t.features.reviewDesc, img: featureImages[1] },
    { title: t.features.promoTitle, desc: t.features.promoDesc, img: featureImages[2] },
  ];

  // Film demo: public/demo/demo.mp4. Ustaw false, jeśli plik zostanie usunięty.
  const hasVideo = true;

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {t.nav.features}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {t.features.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.features.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[510/693] bg-brand-50 overflow-hidden">
                <ZoomableImage
                  src={f.img}
                  alt={f.title}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  zoomLabel={t.features.zoom}
                  closeLabel={t.features.close}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {hasVideo && (
          <div className="mt-6">
            <VideoTile
              src="/demo/demo.mp4"
              title={t.features.videoTitle}
              desc={t.features.videoDesc}
              closeLabel={t.features.close}
            />
          </div>
        )}
      </div>
    </section>
  );
}
