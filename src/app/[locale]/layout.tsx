import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import GlobalWidgets from "@/components/GlobalWidgets";
import GoogleAnalyticsGate from "@/components/GoogleAnalyticsGate";
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
  pl: "Starlinkee — Więcej 5★, więcej stałych gości",
  en: "Starlinkee — More 5★ reviews, more returning guests",
  de: "Starlinkee — Mehr 5★-Bewertungen, mehr Stammgäste",
  it: "Starlinkee — Più recensioni 5★, più clienti fedeli",
};

const descriptions: Record<Locale, string> = {
  pl: "Jedno dotknięcie: dobre opinie lecą do Google, złe zostają u Ciebie. Tabliczka NFC, kupony SMS, zero aplikacji.",
  en: "One tap: great reviews go to Google, bad ones stay with you. NFC plate, SMS coupons, no app for guests.",
  de: "Ein Tipp: Gute Bewertungen gehen zu Google, schlechte bleiben bei Ihnen. NFC-Aufsteller, SMS-Gutscheine, keine App.",
  it: "Un tocco: le belle recensioni su Google, le brutte restano da te. Targa NFC, coupon SMS, nessuna app.",
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
          alt: "Starlinkee — tabliczka NFC dla restauracji",
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
      <head>
        <script
          defer
          src="https://pulse.viktorbobinski.com/static/pulse/tracker.js"
          data-site="56e7bdce12"
        ></script>
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <AnalyticsTracker />
        <GlobalWidgets locale={locale} />
        <GoogleAnalyticsGate />
      </body>
    </html>
  );
}
