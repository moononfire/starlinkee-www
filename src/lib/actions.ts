"use server";

import { cookies } from "next/headers";
import { LOCALE_COOKIE_NAME, type Locale } from "@/i18n";

export async function setLocaleCookie(locale: Locale) {
  const store = await cookies();
  store.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
