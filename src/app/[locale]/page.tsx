import { getTranslations } from "@/i18n";
import { resolveLocale } from "@/lib/locale";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const SITE_URL = "https://starlinkee.com";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getTranslations(locale);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Starlinkee Pro",
    description:
      "Tabliczka NFC z systemem filtrowania opinii Google, kuponami SMS i cyfrową kartą lojalnościową dla gastronomii.",
    brand: { "@type": "Brand", name: "Starlinkee" },
    image: `${SITE_URL}/product/${locale}.webp`,
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "PLN",
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
      url: `${SITE_URL}/hero/${locale}.png`,
      width: 1200,
      height: 675,
    },
    description:
      "System opinii i lojalności dla gastronomii oparty na technologii NFC.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "kontakt@starlinkee.com",
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
    description:
      "System zarządzania opiniami i lojalnością klientów dla restauracji i lokali gastronomicznych.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "PLN",
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
        <Features t={t} locale={locale} />
        <Pricing t={t} locale={locale} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
