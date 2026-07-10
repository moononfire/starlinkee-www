"use client";

import { usePathname } from "next/navigation";
import NewsletterPopup from "@/components/NewsletterPopup";
import PhoneWidget from "@/components/PhoneWidget";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import type { Locale } from "@/i18n";

export default function GlobalWidgets({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isNewsletterLanding = /^\/[a-z]{2}\/newsletter\/?$/.test(pathname ?? "");

  if (isNewsletterLanding) return null;

  return (
    <>
      <NewsletterPopup locale={locale} />
      <PhoneWidget locale={locale} />
      <ChatWidget locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}
