import { LOCALES, defaultLocale, type Locale } from "@/i18n";

export function isValidLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
  return isValidLocale(value) ? value : defaultLocale;
}
