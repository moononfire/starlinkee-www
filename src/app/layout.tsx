import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewsletterPopup from "@/components/NewsletterPopup";
import PhoneWidget from "@/components/PhoneWidget";
import ChatWidget from "@/components/ChatWidget";

const SITE_URL = "https://starlinkee.pl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Starlinkee — System opinii i lojalności dla gastronomii",
  description:
    "Tabliczki NFC, które filtrują negatywne opinie, wysyłają kupony SMS i budują lojalność klientów. Bez aplikacji.",
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
    canonical: "/",
    languages: {
      pl: "/?lang=pl",
      en: "/?lang=en",
      de: "/?lang=de",
      it: "/?lang=it",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Starlinkee",
    title: "Starlinkee — System opinii i lojalności dla gastronomii",
    description:
      "Tabliczki NFC, które filtrują negatywne opinie, wysyłają kupony SMS i budują lojalność klientów. Bez aplikacji.",
    locale: "pl_PL",
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
    title: "Starlinkee — System opinii i lojalności dla gastronomii",
    description:
      "Tabliczki NFC, które filtrują negatywne opinie, wysyłają kupony SMS i budują lojalność klientów. Bez aplikacji.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <NewsletterPopup />
        <PhoneWidget />
        <ChatWidget />
      </body>
    </html>
  );
}
