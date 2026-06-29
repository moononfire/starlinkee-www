import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starlinkee — System opinii i lojalności dla gastronomii",
  description:
    "Tabliczki NFC, które filtrują negatywne opinie, wysyłają kupony SMS i budują lojalność klientów. Bez aplikacji.",
  verification: {
    google: "jbyNhpr36lFIEJO21S7LGPJKaOEOqu5tGssShFS7Dj4",
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
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
