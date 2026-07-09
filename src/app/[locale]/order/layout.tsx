import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/i18n";
import { resolveLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";

const titles: Record<Locale, string> = {
  pl: "Zamów tabliczkę NFC do opinii Google | Starlinkee",
  en: "Order your NFC review plate | Starlinkee",
  de: "Bestellen Sie Ihren NFC-Bewertungsaufsteller | Starlinkee",
  it: "Ordina la tua targa NFC per le recensioni | Starlinkee",
};

const descriptions: Record<Locale, string> = {
  pl: "Zamów tabliczkę NFC Starlinkee i zacznij zbierać opinie Google jednym dotknięciem. Abonament 199 zł/mies. — pierwsza tabliczka gratis.",
  en: "Order your Starlinkee NFC plate and start collecting Google reviews with a single tap. €49/mo subscription — first plate free.",
  de: "Bestellen Sie Ihren Starlinkee NFC-Aufsteller und sammeln Sie Google-Bewertungen mit einem Antippen. Abo 49 €/Monat — erster Aufsteller gratis.",
  it: "Ordina la tua targa NFC Starlinkee e inizia a raccogliere recensioni Google con un tocco. Abbonamento 49 €/mese — prima targa gratis.",
};

const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  it: "it_IT",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const canonicalUrl = `${SITE_URL}/${locale}/order`;

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title: titles[locale],
      description: descriptions[locale],
      locale: ogLocales[locale],
      images: [{ url: `/product/${locale}.webp`, width: 800, height: 800, alt: "Tabliczka NFC Starlinkee" }],
    },
  };
}

export default async function OrderLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getTranslations(locale);

  return (
    <>
      {children}
      <Footer t={t} locale={locale} />
    </>
  );
}
