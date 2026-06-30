export type Locale = "pl" | "en" | "de" | "it";

export const defaultLocale: Locale = "pl";

export const LOCALES: Locale[] = ["pl", "en", "de", "it"];

export const LOCALE_COOKIE_NAME = "locale";

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
      sectionTitle: "Kompleksowe narzędzie do reputacji online",
      sectionSubtitle:
        "Jedna tabliczka NFC — i masz pełną kontrolę nad opinią w Google, bazą kontaktów i lojalnością klientów. Bez aplikacji, bez skomplikowanej konfiguracji.",
      reviewTitle: "Ochrona profilu Google",
      reviewDesc:
        "Klient skanuje tabliczkę NFC i ocenia wizytę. Zadowolony? Jego opinia trafia prosto na Twój profil Google. Niezadowolony? Feedback zostaje u Ciebie — reagujesz zanim negatyw trafi do sieci.",
      promoTitle: "Zbieraj zgody i dane kontaktowe",
      promoDesc:
        "Przy każdym skanowaniu możesz pozyskać numer telefonu i zgodę na kontakt marketingowy. Wysyłaj kupony SMS, informuj o promocjach — buduj bazę klientów, do których wrócisz z ofertą.",
      loyaltyTitle: "Karta lojalnościowa bez aplikacji",
      loyaltyDesc:
        "Cyfrowa karta stałego klienta, która działa przez sam skan NFC. Klient zbiera wizyty, a po osiągnięciu progu — dostaje nagrodę. Budujesz nawyk powracania bez żadnych dodatkowych aplikacji.",
      dashboardTitle: "Wszystko w jednym panelu",
      dashboardDesc:
        "Opinie, skany, kupony, lojalność, dane kontaktowe — wszystko w jednym miejscu. Zarządzaj wieloma lokalizacjami z jednego konta i miej pełen obraz swojego marketingu lokalnego.",
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
      periodAnnual: "/rok",
      billingMonthly: "Płatność miesięczna",
      billingAnnual: "Płatność roczna",
      annualSavingsBadge: "2 miesiące gratis",
      annualNote: "Płać raz w roku i zapłać za 10 miesięcy zamiast 12.",
      comingSoon: "Wkrótce dostępne",
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
    chat: {
      triggerLabel: "Napisz do nas",
      openAria: "Otwórz czat",
      closeAria: "Zamknij czat",
      headerName: "Starlinkee",
      headerSubtitle: "Zazwyczaj odpowiadamy szybko",
      greeting: "Cześć! 👋 W czym mogę pomóc?",
      placeholder: "Napisz wiadomość...",
      sendAria: "Wyślij",
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
      sectionTitle: "Complete online reputation management",
      sectionSubtitle:
        "One NFC plate — full control over your Google reviews, contact database, and customer loyalty. No app needed, no complex setup.",
      reviewTitle: "Google profile protection",
      reviewDesc:
        "Customer scans the NFC plate and rates their visit. Happy? Their review goes straight to your Google profile. Unhappy? The feedback stays with you — react before a negative review hits the web.",
      promoTitle: "Collect consent & contact data",
      promoDesc:
        "With every scan you can capture a phone number and marketing consent. Send SMS coupons, announce promotions — build a customer base you can reach again with offers.",
      loyaltyTitle: "Loyalty card without an app",
      loyaltyDesc:
        "A digital loyalty card that works with a simple NFC scan. Customers collect visits and earn a reward after reaching the threshold — no extra apps required.",
      dashboardTitle: "Everything in one dashboard",
      dashboardDesc:
        "Reviews, scans, coupons, loyalty, contact data — all in one place. Manage multiple locations from a single account and get a full picture of your local marketing.",
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
      plates: "First NFC plate free, additional plates €9 each",
      periodAnnual: "/yr",
      billingMonthly: "Monthly billing",
      billingAnnual: "Annual billing",
      annualSavingsBadge: "2 months free",
      annualNote: "Pay once a year and get 10 months for the price of 10 instead of 12.",
      comingSoon: "Coming soon",
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
    chat: {
      triggerLabel: "Message us",
      openAria: "Open chat",
      closeAria: "Close chat",
      headerName: "Starlinkee",
      headerSubtitle: "We usually reply quickly",
      greeting: "Hi! 👋 How can I help?",
      placeholder: "Type a message...",
      sendAria: "Send",
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
      sectionTitle: "Komplettes Online-Reputationsmanagement",
      sectionSubtitle:
        "Ein NFC-Aufsteller — volle Kontrolle über Ihre Google-Bewertungen, Kontaktdatenbank und Kundenbindung. Keine App nötig, kein kompliziertes Setup.",
      reviewTitle: "Google-Profil-Schutz",
      reviewDesc:
        "Der Gast scannt den NFC-Aufsteller und bewertet seinen Besuch. Zufrieden? Die Bewertung geht direkt auf Ihr Google-Profil. Unzufrieden? Das Feedback bleibt bei Ihnen — reagieren Sie, bevor eine negative Bewertung online geht.",
      promoTitle: "Einwilligungen & Kontaktdaten sammeln",
      promoDesc:
        "Bei jedem Scan können Sie eine Telefonnummer und Marketingeinwilligung erfassen. Senden Sie SMS-Gutscheine, informieren Sie über Aktionen — bauen Sie eine Kundenbasis auf, die Sie erneut erreichen können.",
      loyaltyTitle: "Treuekarte ohne App",
      loyaltyDesc:
        "Eine digitale Treuekarte, die per NFC-Scan funktioniert. Gäste sammeln Besuche und erhalten nach Erreichen der Schwelle eine Belohnung — keine zusätzlichen Apps nötig.",
      dashboardTitle: "Alles in einem Dashboard",
      dashboardDesc:
        "Bewertungen, Scans, Gutscheine, Treue, Kontaktdaten — alles an einem Ort. Verwalten Sie mehrere Standorte von einem Konto aus und behalten Sie Ihr lokales Marketing im Blick.",
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
      plates: "Erster NFC-Aufsteller gratis, weitere je 9 €",
      periodAnnual: "/Jahr",
      billingMonthly: "Monatliche Zahlung",
      billingAnnual: "Jährliche Zahlung",
      annualSavingsBadge: "2 Monate gratis",
      annualNote: "Einmal im Jahr zahlen und nur für 10 statt 12 Monate bezahlen.",
      comingSoon: "Demnächst verfügbar",
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
    chat: {
      triggerLabel: "Schreiben Sie uns",
      openAria: "Chat öffnen",
      closeAria: "Chat schließen",
      headerName: "Starlinkee",
      headerSubtitle: "Wir antworten normalerweise schnell",
      greeting: "Hallo! 👋 Wie kann ich helfen?",
      placeholder: "Nachricht schreiben...",
      sendAria: "Senden",
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
      sectionTitle: "Gestione completa della reputazione online",
      sectionSubtitle:
        "Una targa NFC — controllo totale sulle recensioni Google, database contatti e fidelizzazione clienti. Nessuna app necessaria, nessuna configurazione complicata.",
      reviewTitle: "Protezione del profilo Google",
      reviewDesc:
        "Il cliente scansiona la targa NFC e valuta la visita. Soddisfatto? La recensione va direttamente sul tuo profilo Google. Insoddisfatto? Il feedback resta a te — reagisci prima che una recensione negativa finisca online.",
      promoTitle: "Raccogli consensi e dati di contatto",
      promoDesc:
        "Ad ogni scansione puoi raccogliere un numero di telefono e il consenso marketing. Invia coupon SMS, comunica promozioni — costruisci una base clienti da ricontattare con le tue offerte.",
      loyaltyTitle: "Carta fedeltà senza app",
      loyaltyDesc:
        "Una carta fedeltà digitale che funziona con un semplice scan NFC. I clienti accumulano visite e ricevono un premio al raggiungimento della soglia — nessuna app aggiuntiva necessaria.",
      dashboardTitle: "Tutto in un unico pannello",
      dashboardDesc:
        "Recensioni, scansioni, coupon, fedeltà, dati di contatto — tutto in un unico posto. Gestisci più sedi da un solo account e tieni sotto controllo tutto il tuo marketing locale.",
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
      plates: "Prima targa NFC gratis, ogni altra 9 €",
      periodAnnual: "/anno",
      billingMonthly: "Pagamento mensile",
      billingAnnual: "Pagamento annuale",
      annualSavingsBadge: "2 mesi gratis",
      annualNote: "Paga una volta all'anno e paga per 10 mesi invece di 12.",
      comingSoon: "Prossimamente",
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
    chat: {
      triggerLabel: "Scrivici",
      openAria: "Apri chat",
      closeAria: "Chiudi chat",
      headerName: "Starlinkee",
      headerSubtitle: "Di solito rispondiamo velocemente",
      greeting: "Ciao! 👋 Come posso aiutarti?",
      placeholder: "Scrivi un messaggio...",
      sendAria: "Invia",
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
