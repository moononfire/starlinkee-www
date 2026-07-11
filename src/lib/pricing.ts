import type { Locale } from "@/i18n";

export const PRICING: Record<Locale, { subPrice: number; platePrice: number; currency: string }> = {
  pl: { subPrice: 199, platePrice: 29, currency: "zł" },
  en: { subPrice: 49, platePrice: 9, currency: "€" },
  de: { subPrice: 49, platePrice: 9, currency: "€" },
  it: { subPrice: 49, platePrice: 9, currency: "€" },
};

export function currencyCode(locale: Locale): "pln" | "eur" {
  return locale === "pl" ? "pln" : "eur";
}

export function annualSubPrice(locale: Locale): number {
  return PRICING[locale].subPrice * 10;
}
