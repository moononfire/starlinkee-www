export type Locale = "pl" | "en";

export const defaultLocale: Locale = "pl";

const translations = {
  pl: {
    nav: {
      features: "Funkcje",
      pricing: "Cennik",
      contact: "Kontakt",
      getStarted: "Rozpocznij",
    },
    hero: {
      badge: "System opinii & lojalności dla gastronomii",
      title: "Więcej pozytywnych opinii.",
      titleHighlight: "Więcej powracających klientów.",
      subtitle:
        "Tabliczki NFC, które automatycznie filtrują negatywne opinie, wysyłają kupony promocyjne i budują lojalność — bez aplikacji dla Twoich klientów.",
      cta: "Zamów bezpłatną prezentację",
      ctaSecondary: "Zobacz jak działa",
    },
    features: {
      sectionTitle: "Wszystko, czego potrzebujesz",
      sectionSubtitle:
        "Jedno rozwiązanie zamiast kilku narzędzi. Płacisz jeden abonament — dostajesz cały system.",
      reviewTitle: "Filtrowanie opinii",
      reviewDesc:
        "Klient skanuje tabliczkę NFC i ocenia wizytę. Pozytywne opinie trafiają prosto na Google — negatywne zostajesz tylko Ty, z szansą na naprawę sytuacji.",
      promoTitle: "Kupony & promocje SMS",
      promoDesc:
        "Automatycznie wysyłaj kupony rabatowe przez SMS po skanowaniu. Klient wraca po zniżkę — Ty zyskujesz ponowną wizytę i dane kontaktowe.",
      loyaltyTitle: "Karta lojalnościowa",
      loyaltyDesc:
        "Cyfrowa karta stałego klienta bez aplikacji. Klient skanuje tabliczkę przy każdej wizycie — po X wizytach dostaje nagrodę.",
      dashboardTitle: "Panel administracyjny",
      dashboardDesc:
        "Śledź opinie, skany, kupony i lojalność w jednym miejscu. Zarządzaj wieloma lokalizacjami z jednego konta.",
    },
    pricing: {
      sectionTitle: "Prosty cennik",
      sectionSubtitle: "Bez ukrytych kosztów. Bez długoterminowych umów.",
      planName: "Starlinkee Pro",
      price: "199",
      currency: "zł",
      period: "/mies.",
      includes: "W cenie:",
      feature1: "1 tabliczka NFC w cenie",
      feature2: "Filtrowanie opinii Google",
      feature3: "System kuponów SMS",
      feature4: "Karta lojalnościowa",
      feature5: "Panel administracyjny",
      feature6: "200 SMS-ów/mies. w cenie",
      feature7: "Wsparcie techniczne",
      cta: "Kup teraz",
      extra: "Dodatkowe SMS-y: 0,09 zł/szt.",
      plates: "Pierwsza tabliczka NFC gratis, każda kolejna 29 zł",
    },
    contact: {
      sectionTitle: "Porozmawiajmy",
      sectionSubtitle:
        "Zostaw swoje dane — odezwiemy się w ciągu 24 godzin i pokażemy, jak Starlinkee może pomóc Twojemu biznesowi.",
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "Jan Kowalski",
      emailLabel: "E-mail",
      emailPlaceholder: "jan@restauracja.pl",
      phoneLabel: "Telefon",
      phonePlaceholder: "+48 123 456 789",
      businessLabel: "Nazwa lokalu",
      businessPlaceholder: "Restauracja Pod Złotym Lwem",
      messageLabel: "Wiadomość (opcjonalnie)",
      messagePlaceholder: "Powiedz nam czego potrzebujesz...",
      submit: "Wyślij zgłoszenie",
      success: "Dziękujemy! Odezwiemy się wkrótce.",
      error: "Coś poszło nie tak. Spróbuj ponownie.",
    },
    footer: {
      tagline: "System opinii i lojalności dla gastronomii.",
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Get started",
    },
    hero: {
      badge: "Review & loyalty system for restaurants",
      title: "More positive reviews.",
      titleHighlight: "More returning customers.",
      subtitle:
        "NFC plates that automatically filter negative reviews, send promo coupons, and build loyalty — no app install needed for your customers.",
      cta: "Book a free demo",
      ctaSecondary: "See how it works",
    },
    features: {
      sectionTitle: "Everything you need",
      sectionSubtitle:
        "One solution instead of multiple tools. One subscription — the full system.",
      reviewTitle: "Review filtering",
      reviewDesc:
        "Customer scans the NFC plate and rates their visit. Positive reviews go straight to Google — negative ones stay private, giving you a chance to make it right.",
      promoTitle: "SMS coupons & promos",
      promoDesc:
        "Automatically send discount coupons via SMS after scanning. Customer comes back for the deal — you get a repeat visit and their contact info.",
      loyaltyTitle: "Loyalty card",
      loyaltyDesc:
        "Digital loyalty card with no app install. Customer scans the plate on each visit — after X visits they get a reward.",
      dashboardTitle: "Admin dashboard",
      dashboardDesc:
        "Track reviews, scans, coupons, and loyalty in one place. Manage multiple locations from a single account.",
    },
    pricing: {
      sectionTitle: "Simple pricing",
      sectionSubtitle: "No hidden fees. No long-term contracts.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mo",
      includes: "Includes:",
      feature1: "1 NFC plate included",
      feature2: "Google review filtering",
      feature3: "SMS coupon system",
      feature4: "Loyalty card",
      feature5: "Admin dashboard",
      feature6: "200 SMS/mo included",
      feature7: "Technical support",
      cta: "Buy now",
      extra: "Additional SMS: €0.02/each",
      plates: "First NFC plate free, additional plates €7 each",
    },
    contact: {
      sectionTitle: "Let's talk",
      sectionSubtitle:
        "Leave your details — we'll get back to you within 24 hours and show you how Starlinkee can help your business.",
      nameLabel: "Full name",
      namePlaceholder: "John Smith",
      emailLabel: "Email",
      emailPlaceholder: "john@restaurant.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+1 555 123 4567",
      businessLabel: "Business name",
      businessPlaceholder: "The Golden Lion Restaurant",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Tell us what you need...",
      submit: "Send inquiry",
      success: "Thank you! We'll be in touch soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Review & loyalty system for restaurants.",
      rights: "All rights reserved.",
    },
  },
};

type TranslationTree = typeof translations.pl;

export type Translations = {
  [K in keyof TranslationTree]: {
    [K2 in keyof TranslationTree[K]]: string;
  };
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
