import type { Metadata } from "next";

const SITE_URL = "https://starlinkee.pl";

export const metadata: Metadata = {
  title: "Zamów tabliczkę NFC do opinii Google | Starlinkee",
  description:
    "Zamów tabliczkę NFC Starlinkee i zacznij zbierać opinie Google jednym dotknięciem. Abonament 199 zł/mies. — pierwsza tabliczka gratis.",
  alternates: { canonical: `${SITE_URL}/order` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/order`,
    siteName: "Starlinkee",
    title: "Zamów tabliczkę NFC do opinii Google | Starlinkee",
    description:
      "Zamów tabliczkę NFC Starlinkee i zacznij zbierać opinie Google jednym dotknięciem. Abonament 199 zł/mies. — pierwsza tabliczka gratis.",
    locale: "pl_PL",
    images: [{ url: "/product.webp", width: 800, height: 800, alt: "Tabliczka NFC Starlinkee" }],
  },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
