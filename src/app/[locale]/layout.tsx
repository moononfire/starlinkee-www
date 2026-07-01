import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NewsletterPopup from "@/components/NewsletterPopup";
import PhoneWidget from "@/components/PhoneWidget";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import { LOCALES, type Locale } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  it: "it_IT",
};

const titles: Record<Locale, string> = {
  pl: "Starlinkee — System opinii i lojalności dla gastronomii",
  en: "Starlinkee — Review & loyalty system for restaurants",
  de: "Starlinkee — Bewertungs- & Treueprogramm für Gastronomie",
  it: "Starlinkee — Sistema di recensioni e fedeltà per la ristorazione",
};

const descriptions: Record<Locale, string> = {
  pl: "Tabliczki NFC, które filtrują negatywne opinie, wysyłają kupony SMS i budują lojalność klientów. Bez aplikacji.",
  en: "NFC plates that filter negative reviews, send SMS coupons, and build customer loyalty. No app required.",
  de: "NFC-Aufsteller, die negative Bewertungen filtern, SMS-Gutscheine versenden und Kundentreue aufbauen. Ohne App.",
  it: "Targhe NFC che filtrano le recensioni negative, inviano coupon SMS e fidelizzano i clienti. Senza app.",
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const canonicalUrl = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: titles[locale],
    description: descriptions[locale],
    verification: {
      google: "jbyNhpr36lFIEJO21S7LGPJKaOEOqu5tGssShFS7Dj4",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pl: `${SITE_URL}/pl`,
        en: `${SITE_URL}/en`,
        de: `${SITE_URL}/de`,
        it: `${SITE_URL}/it`,
        "x-default": `${SITE_URL}/pl`,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title: titles[locale],
      description: descriptions[locale],
      locale: ogLocales[locale],
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 675,
          alt: "Starlinkee — panel zarządzania opiniami dla restauracji",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["/hero.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <NewsletterPopup locale={locale} />
        <PhoneWidget locale={locale} />
        <ChatWidget locale={locale} />
        <CookieBanner locale={locale} />
      </body>
    </html>
  );
}
