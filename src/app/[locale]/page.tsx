import { getTranslations, type Locale } from "@/i18n";
import { resolveLocale } from "@/lib/locale";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const SITE_URL = "https://starlinkee.com";

const ldCopy = {
  pl: {
    product: "Tabliczka NFC do zbierania opinii Google, z kuponami SMS dla lokali usługowych i gastronomii.",
    org: "System opinii Google i kuponów SMS oparty na technologii NFC dla lokali usługowych i gastronomii.",
    software: "System do zbierania opinii Google i kontaktów do gości dla restauracji, salonów i innych lokali.",
  },
  en: {
    product: "NFC plate for collecting Google reviews, with SMS coupons for restaurants, cafes and salons.",
    org: "Google review and SMS coupon system based on NFC technology for restaurants and service venues.",
    software: "A system for collecting Google reviews and guest contacts for restaurants, salons and other venues.",
  },
  de: {
    product: "NFC-Aufsteller zum Sammeln von Google-Bewertungen, mit SMS-Gutscheinen für Gastronomie und Salons.",
    org: "System für Google-Bewertungen und SMS-Gutscheine auf Basis von NFC-Technologie für Gastronomie und Dienstleister.",
    software: "System zum Sammeln von Google-Bewertungen und Gästekontakten für Restaurants, Salons und andere Betriebe.",
  },
  it: {
    product: "Targhetta NFC per raccogliere recensioni Google, con coupon SMS per ristoranti, bar e saloni.",
    org: "Sistema di recensioni Google e coupon SMS basato sulla tecnologia NFC per ristoranti e attività di servizi.",
    software: "Sistema per raccogliere recensioni Google e contatti dei clienti per ristoranti, saloni e altri locali.",
  },
} satisfies Record<Locale, { product: string; org: string; software: string }>;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getTranslations(locale);
  const ld = ldCopy[locale];
  const priceCurrency = locale === "pl" ? "PLN" : "EUR";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Starlinkee Pro",
    description: ld.product,
    brand: { "@type": "Brand", name: "Starlinkee" },
    image: `${SITE_URL}/product/${locale}.webp`,
    offers: {
      "@type": "Offer",
      price: t.pricing.price,
      priceCurrency,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${locale}/order`,
      priceValidUntil: "2027-12-31",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Starlinkee",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-blue.webp`,
      width: 1624,
      height: 432,
    },
    description: ld.org,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@starlinkee.com",
      availableLanguage: ["Polish", "English", "German", "Italian"],
    },
    sameAs: [],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Starlinkee",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: ld.software,
    offers: {
      "@type": "Offer",
      price: t.pricing.price,
      priceCurrency,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Navbar t={t} locale={locale} />
      <main>
        <Hero t={t} locale={locale} />
        <HowItWorks t={t} />
        <Features t={t} locale={locale} />
        <LiveDemo t={t} locale={locale} />
        <Pricing t={t} locale={locale} />
        <FinalCta t={t} locale={locale} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
