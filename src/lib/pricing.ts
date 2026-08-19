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

export function getShippingCost(country: string, currency: "pln" | "eur"): { amount: number; name: string } {
  let amount = 0;
  let name = "Shipping";
  const c = country.toUpperCase();
  
  if (c === "AT") {
    amount = currency === "pln" ? 2150 : 500; // 21.50 PLN / 5 EUR
    name = "Österreich Shipping";
  } else if (c === "PL") {
    amount = currency === "pln" ? 1000 : 250; // 10 PLN / 2.50 EUR
    name = "Polska Wysyłka";
  } else {
    amount = currency === "pln" ? 4300 : 1000; // 43 PLN / 10 EUR
    name = "EU Shipping";
  }
  
  return { amount, name };
}
