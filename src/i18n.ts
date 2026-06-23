export type Locale = "pl" | "en" | "de" | "it";

export const defaultLocale: Locale = "pl";

const translations = {
  pl: {
    nav: {
      features: "Funkcje",
      pricing: "Cennik",
      contact: "Kontakt",
      getStarted: "Kup teraz",
    },
    hero: {
      badge: "System opinii & lojalności dla gastronomii",
      title: "Więcej pozytywnych opinii.",
      titleHighlight: "Więcej powracających klientów.",
      subtitle:
        "Tabliczki NFC, które automatycznie filtrują negatywne opinie, wysyłają kupony promocyjne i budują lojalność — bez aplikacji dla Twoich klientów.",
      cta: "Kup teraz",
      ctaSecondary: "Zamów bezpłatną prezentację",
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
      getStarted: "Buy now",
    },
    hero: {
      badge: "Review & loyalty system for restaurants",
      title: "More positive reviews.",
      titleHighlight: "More returning customers.",
      subtitle:
        "NFC plates that automatically filter negative reviews, send promo coupons, and build loyalty — no app install needed for your customers.",
      cta: "Buy now",
      ctaSecondary: "Book a free demo",
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
  de: {
    nav: {
      features: "Funktionen",
      pricing: "Preise",
      contact: "Kontakt",
      getStarted: "Jetzt kaufen",
    },
    hero: {
      badge: "Bewertungs- & Treueprogramm für Gastronomie",
      title: "Mehr positive Bewertungen.",
      titleHighlight: "Mehr wiederkehrende Gäste.",
      subtitle:
        "NFC-Aufsteller, die negative Bewertungen automatisch filtern, Rabattgutscheine per SMS versenden und Kundentreue aufbauen — ohne App für Ihre Gäste.",
      cta: "Jetzt kaufen",
      ctaSecondary: "Kostenlose Demo buchen",
    },
    features: {
      sectionTitle: "Alles, was Sie brauchen",
      sectionSubtitle:
        "Eine Lösung statt mehrerer Tools. Ein Abo — das komplette System.",
      reviewTitle: "Bewertungsfilter",
      reviewDesc:
        "Der Gast scannt den NFC-Aufsteller und bewertet seinen Besuch. Positive Bewertungen gehen direkt zu Google — negative bleiben privat und geben Ihnen die Chance, die Situation zu klären.",
      promoTitle: "SMS-Gutscheine & Aktionen",
      promoDesc:
        "Senden Sie nach dem Scannen automatisch Rabattgutscheine per SMS. Der Gast kommt für den Rabatt zurück — Sie gewinnen einen erneuten Besuch und Kontaktdaten.",
      loyaltyTitle: "Treuekarte",
      loyaltyDesc:
        "Digitale Treuekarte ohne App. Der Gast scannt bei jedem Besuch den Aufsteller — nach X Besuchen erhält er eine Belohnung.",
      dashboardTitle: "Admin-Dashboard",
      dashboardDesc:
        "Verfolgen Sie Bewertungen, Scans, Gutscheine und Treue an einem Ort. Verwalten Sie mehrere Standorte von einem Konto aus.",
    },
    pricing: {
      sectionTitle: "Einfache Preise",
      sectionSubtitle: "Keine versteckten Kosten. Keine langfristigen Verträge.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/Monat",
      includes: "Inklusive:",
      feature1: "1 NFC-Aufsteller inklusive",
      feature2: "Google-Bewertungsfilter",
      feature3: "SMS-Gutscheinsystem",
      feature4: "Treuekarte",
      feature5: "Admin-Dashboard",
      feature6: "200 SMS/Monat inklusive",
      feature7: "Technischer Support",
      cta: "Jetzt kaufen",
      extra: "Zusätzliche SMS: 0,02 €/Stk.",
      plates: "Erster NFC-Aufsteller gratis, weitere je 7 €",
    },
    contact: {
      sectionTitle: "Lassen Sie uns sprechen",
      sectionSubtitle:
        "Hinterlassen Sie Ihre Daten — wir melden uns innerhalb von 24 Stunden und zeigen Ihnen, wie Starlinkee Ihrem Betrieb helfen kann.",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "Max Mustermann",
      emailLabel: "E-Mail",
      emailPlaceholder: "max@restaurant.de",
      phoneLabel: "Telefon",
      phonePlaceholder: "+49 170 1234567",
      businessLabel: "Name des Lokals",
      businessPlaceholder: "Zum Goldenen Löwen",
      messageLabel: "Nachricht (optional)",
      messagePlaceholder: "Erzählen Sie uns, was Sie brauchen...",
      submit: "Anfrage senden",
      success: "Vielen Dank! Wir melden uns in Kürze.",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
    footer: {
      tagline: "Bewertungs- & Treueprogramm für Gastronomie.",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  it: {
    nav: {
      features: "Funzionalità",
      pricing: "Prezzi",
      contact: "Contatti",
      getStarted: "Acquista ora",
    },
    hero: {
      badge: "Sistema di recensioni e fedeltà per la ristorazione",
      title: "Più recensioni positive.",
      titleHighlight: "Più clienti che ritornano.",
      subtitle:
        "Targhe NFC che filtrano automaticamente le recensioni negative, inviano coupon promozionali via SMS e costruiscono la fedeltà — senza app per i tuoi clienti.",
      cta: "Acquista ora",
      ctaSecondary: "Prenota una demo gratuita",
    },
    features: {
      sectionTitle: "Tutto ciò di cui hai bisogno",
      sectionSubtitle:
        "Una soluzione al posto di più strumenti. Un abbonamento — il sistema completo.",
      reviewTitle: "Filtro recensioni",
      reviewDesc:
        "Il cliente scansiona la targa NFC e valuta la visita. Le recensioni positive vanno direttamente su Google — quelle negative restano private, dandoti la possibilità di rimediare.",
      promoTitle: "Coupon e promozioni SMS",
      promoDesc:
        "Invia automaticamente coupon sconto via SMS dopo la scansione. Il cliente torna per lo sconto — tu ottieni una nuova visita e i dati di contatto.",
      loyaltyTitle: "Carta fedeltà",
      loyaltyDesc:
        "Carta fedeltà digitale senza app. Il cliente scansiona la targa ad ogni visita — dopo X visite riceve un premio.",
      dashboardTitle: "Pannello di controllo",
      dashboardDesc:
        "Monitora recensioni, scansioni, coupon e fedeltà in un unico posto. Gestisci più sedi da un solo account.",
    },
    pricing: {
      sectionTitle: "Prezzi semplici",
      sectionSubtitle: "Nessun costo nascosto. Nessun contratto a lungo termine.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mese",
      includes: "Include:",
      feature1: "1 targa NFC inclusa",
      feature2: "Filtro recensioni Google",
      feature3: "Sistema coupon SMS",
      feature4: "Carta fedeltà",
      feature5: "Pannello di controllo",
      feature6: "200 SMS/mese inclusi",
      feature7: "Supporto tecnico",
      cta: "Acquista ora",
      extra: "SMS aggiuntivi: 0,02 €/cad.",
      plates: "Prima targa NFC gratis, ogni altra 7 €",
    },
    contact: {
      sectionTitle: "Parliamone",
      sectionSubtitle:
        "Lascia i tuoi dati — ti ricontatteremo entro 24 ore e ti mostreremo come Starlinkee può aiutare la tua attività.",
      nameLabel: "Nome completo",
      namePlaceholder: "Mario Rossi",
      emailLabel: "Email",
      emailPlaceholder: "mario@ristorante.it",
      phoneLabel: "Telefono",
      phonePlaceholder: "+39 333 1234567",
      businessLabel: "Nome del locale",
      businessPlaceholder: "Trattoria Da Mario",
      messageLabel: "Messaggio (facoltativo)",
      messagePlaceholder: "Dicci di cosa hai bisogno...",
      submit: "Invia richiesta",
      success: "Grazie! Ti ricontatteremo presto.",
      error: "Qualcosa è andato storto. Riprova.",
    },
    footer: {
      tagline: "Sistema di recensioni e fedeltà per la ristorazione.",
      rights: "Tutti i diritti riservati.",
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
