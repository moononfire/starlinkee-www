"use client";

import { useState } from "react";
import { type Locale, defaultLocale, getTranslations } from "@/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = getTranslations(locale);

  return (
    <>
      <Navbar t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t} locale={locale} />
        <Features t={t} />
        <Pricing t={t} locale={locale} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
