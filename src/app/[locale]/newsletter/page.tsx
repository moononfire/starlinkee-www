import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsletterLanding from "@/components/NewsletterLanding";
import { LOCALES } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";

const titles = {
  pl: "Bezpłatny kurs — wizytówka Google | Starlinkee",
  en: "Free course — Google Business Profile | Starlinkee",
  de: "Kostenloser Kurs — Google Unternehmensprofil | Starlinkee",
  it: "Corso gratuito — scheda Google | Starlinkee",
} as const;

const descriptions = {
  pl: "Zapisz się na bezpłatny kurs e-mail i dowiedz się, jak zoptymalizować wizytówkę Google Moja Firma.",
  en: "Sign up for a free email course and learn how to optimize your Google Business Profile.",
  de: "Melden Sie sich für einen kostenlosen E-Mail-Kurs an und erfahren Sie, wie Sie Ihr Google Unternehmensprofil optimieren.",
  it: "Iscriviti a un corso email gratuito e scopri come ottimizzare la tua scheda Google My Business.",
} as const;

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

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/newsletter`,
      languages: {
        pl: `${SITE_URL}/pl/newsletter`,
        en: `${SITE_URL}/en/newsletter`,
        de: `${SITE_URL}/de/newsletter`,
        it: `${SITE_URL}/it/newsletter`,
        "x-default": `${SITE_URL}/pl/newsletter`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  return <NewsletterLanding locale={rawLocale} />;
}
