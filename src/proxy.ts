import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, LOCALE_COOKIE_NAME, defaultLocale, type Locale } from "@/i18n";

function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

function detectLocale(request: NextRequest): Locale {
  const fromCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (fromCookie && isLocale(fromCookie)) return fromCookie;

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    const match = preferred.find((lang) => isLocale(lang));
    if (match) return match;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE_NAME, firstSegment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const locale = detectLocale(request);
  const suffix = pathname === "/" ? "" : pathname;
  const redirectUrl = new URL(`/${locale}${suffix}`, request.url);
  redirectUrl.search = request.nextUrl.search;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!api|admin|_next/static|_next/image|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml).*)",
  ],
};
