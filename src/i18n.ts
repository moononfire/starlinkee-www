export type Locale = "pl" | "en" | "de" | "it";

export const defaultLocale: Locale = "pl";

export const LOCALES: Locale[] = ["pl", "en", "de", "it"];

export const LOCALE_COOKIE_NAME = "locale";

const translations = {
  // Ton PL (wzorzec dla en/de/it): krótko, jedno zdanie, bez żargonu.
  // Akcent na uczucia (spokój, duma, kontrola) i wyniki (więcej 5★, więcej powracających gości).
  // Mów do właściciela na „Ty”, konkretem zamiast ogólników; każdy język pisz naturalnie, nie tłumacz dosłownie.
  pl: {
    nav: {
      features: "Funkcje",
      pricing: "Cennik",
      contact: "Kontakt",
      getStarted: "Zacznij za darmo",
    },
    hero: {
      badge: "System opinii dla gastronomii",
      title: "Więcej gwiazdek 5★.",
      titleHighlight: "Więcej powracających gości.",
      subtitle:
        "Jedno dotknięcie: dobre opinie lecą do Google, złe zostają u Ciebie.",
      cta: "Zacznij za darmo",
      ctaSecondary: "Zamów prezentację",
    },
    features: {
      sectionTitle: "Spokojna głowa. Pełna kontrola.",
      sectionSubtitle:
        "Jedna tabliczka NFC, zero aplikacji dla Twoich gości.",
      linktreeTitle: "Twoja strona z linkami",
      linktreeDesc:
        "Po skanie gość widzi ocenę, kupon, menu i Twoje social media.",
      reviewTitle: "Same dobre opinie",
      reviewDesc:
        "Zadowolony gość trafia do Google, niezadowolony pisze do Ciebie.",
      promoTitle: "Goście wracają",
      promoDesc:
        "Zbieraj telefony i zgody, wysyłaj kupony SMS. Stała baza gości, do których wracasz.",
    },
    pricing: {
      sectionTitle: "Prosty cennik",
      sectionSubtitle: "Zaczynasz za darmo, bez umów i ukrytych kosztów.",
      planName: "Starlinkee Pro",
      price: "199",
      currency: "zł",
      period: "/mies.",
      includes: "W cenie:",
      feature1: "Tabliczka NFC w cenie",
      feature2: "Filtr opinii Google",
      feature3: "Kupony SMS",
      feature4: "200 SMS-ów/mies. w cenie",
      feature5: "Wsparcie techniczne",
      cta: "Zacznij za darmo",
      plates: "Pierwsza tabliczka gratis, kolejne po 29 zł",
      periodAnnual: "/rok",
      billingMonthly: "Płatność miesięczna",
      billingAnnual: "Płatność roczna",
      annualSavingsBadge: "2 miesiące gratis",
      annualNote: "Płać raz w roku — za 10 miesięcy zamiast 12.",
      comingSoon: "Wkrótce dostępne",
      trialTeaser: "30 dni za darmo",
      afterTrialNote: "Po 30-dniowym okresie próbnym:",
    },
    liveDemo: {
      sectionTitle: "Zobacz to na żywo",
      sectionSubtitle:
        "Tak widzi to Twój gość po zeskanowaniu tabliczki.",
      iframeTitle: "Podgląd na żywo strony po zeskanowaniu tabliczki Starlinkee",
      cta: "Podgląd na pełnym ekranie",
      expandCta: "Zobacz, jak to działa",
      collapseCta: "Schowaj podgląd",
      mobileCta: "Otwórz w swoim telefonie",
      tourIdle: "👉 Kliknij w telefon i przejdź ścieżkę oczami gościa.",
      tourLinktree:
        "Tu trafia gość po skanie. Twoje linki, zawsze aktualne.",
      tourFilter:
        "Filtr opinii: gość najpierw ocenia wizytę u Ciebie, nie w internecie.",
      tourHighRating:
        "Wysoka ocena? Gość od razu ląduje na Twoim profilu Google.",
      tourLowRating:
        "Niska ocena? Wiadomość trafia tylko do Ciebie. Spokojnie to wyjaśnisz.",
      tourPromo:
        "Tu gość odbiera kupon, który sam ustawiasz.",
      tourRestart: "Zacznij pokaz od nowa",
    },
    contact: {
      sectionTitle: "Porozmawiajmy",
      sectionSubtitle:
        "Zostaw dane — odezwiemy się w ciągu 24 godzin.",
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
      tagline: "Więcej 5★. Więcej stałych gości.",
      rights: "Wszelkie prawa zastrzeżone.",
    },
    chat: {
      triggerLabel: "Skontaktuj się z nami",
      openAria: "Otwórz czat",
      closeAria: "Zamknij czat",
      headerName: "Starlinkee",
      headerSubtitle: "Zazwyczaj odpowiadamy szybko",
      greeting: "Cześć! 👋 W czym mogę pomóc?",
      placeholder: "Napisz wiadomość...",
      sendAria: "Wyślij",
      phoneHours: "Infolinia czynna 10:00–16:00, codziennie",
      copied: "Skopiowano numer!",
      callAria: "Zadzwoń do nas",
    },
    orderSuccess: {
      title: "Zamówienie przyjęte!",
      bodyPaid1: "Dziękujemy za zakup. Na podany adres e-mail wysłaliśmy potwierdzenie zamówienia.",
      bodyPaid2: "Tabliczki NFC wyślemy na podany adres w ciągu 3-5 dni roboczych.",
      titleTrial: "Trial rozpoczęty!",
      bodyTrial1: "Masz 30 dni na sprawdzenie Starlinkee Pro bez żadnych opłat. Potwierdzenie i instrukcje wysłaliśmy na podany adres e-mail.",
      bodyTrial2: "Jeśli nic nie zrobisz, po 30 dniach naliczymy opłatę roczną zgodnie z Regulaminem — możesz zrezygnować w dowolnym momencie wcześniej.",
      back: "Wróć na stronę główną",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Start for free",
    },
    hero: {
      badge: "Review system for restaurants",
      title: "More 5★ reviews.",
      titleHighlight: "More returning guests.",
      subtitle:
        "One tap: great reviews go to Google, bad ones stay with you.",
      cta: "Start for free",
      ctaSecondary: "Book a demo",
    },
    features: {
      sectionTitle: "Peace of mind. Full control.",
      sectionSubtitle:
        "One NFC plate. Zero apps for your guests.",
      linktreeTitle: "Your own link page",
      linktreeDesc:
        "Guests scan and see rating, coupon, menu and your socials.",
      reviewTitle: "Only great reviews",
      reviewDesc:
        "Happy guests go to Google. Unhappy ones write to you.",
      promoTitle: "Guests come back",
      promoDesc:
        "Collect phone numbers and consent, send SMS coupons. Build a base of regulars.",
    },
    pricing: {
      sectionTitle: "Simple pricing",
      sectionSubtitle: "Start free. No contracts, no hidden fees.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mo",
      includes: "Includes:",
      feature1: "NFC plate included",
      feature2: "Google review filter",
      feature3: "SMS coupons",
      feature4: "200 SMS/mo included",
      feature5: "Technical support",
      cta: "Start for free",
      plates: "First plate free, extras €9 each",
      periodAnnual: "/yr",
      billingMonthly: "Monthly billing",
      billingAnnual: "Annual billing",
      annualSavingsBadge: "2 months free",
      annualNote: "Pay yearly: 10 months instead of 12.",
      comingSoon: "Coming soon",
      trialTeaser: "30 days free",
      afterTrialNote: "After 30-day trial:",
    },
    liveDemo: {
      sectionTitle: "See it live",
      sectionSubtitle:
        "This is what your guest sees after scanning.",
      iframeTitle: "Live preview of the page shown after scanning a Starlinkee plate",
      cta: "Open full-screen preview",
      expandCta: "See how it works",
      collapseCta: "Hide preview",
      mobileCta: "Open on your phone",
      tourIdle: "👉 Tap the phone and walk through it as your guest.",
      tourLinktree:
        "Guests land here after scanning. Your links, always current.",
      tourFilter:
        "Review filter: guests rate their visit with you first, not online.",
      tourHighRating:
        "High rating? Guest goes straight to your Google profile.",
      tourLowRating:
        "Low rating? The message reaches only you. Resolve it calmly.",
      tourPromo:
        "Here guests claim the coupon you set up.",
      tourRestart: "Restart the demo",
    },
    contact: {
      sectionTitle: "Let's talk",
      sectionSubtitle:
        "Leave your details — we reply within 24 hours.",
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
      tagline: "More 5★. More regulars.",
      rights: "All rights reserved.",
    },
    chat: {
      triggerLabel: "Contact us",
      openAria: "Open chat",
      closeAria: "Close chat",
      headerName: "Starlinkee",
      headerSubtitle: "We usually reply quickly",
      greeting: "Hi! 👋 How can I help?",
      placeholder: "Type a message...",
      sendAria: "Send",
      phoneHours: "Helpline available 10am–4pm, every day",
      copied: "Number copied!",
      callAria: "Call us",
    },
    orderSuccess: {
      title: "Order confirmed!",
      bodyPaid1: "Thanks for your purchase. We've sent an order confirmation to your email.",
      bodyPaid2: "We'll ship your NFC plates within 3-5 business days.",
      titleTrial: "Trial started!",
      bodyTrial1: "You have 30 days to try Starlinkee Pro, free of charge. We've sent a confirmation and instructions to your email.",
      bodyTrial2: "If you do nothing, we'll charge the annual price after 30 days per our Terms of Service — you can cancel anytime before then.",
      back: "Back to homepage",
    },
  },
  de: {
    nav: {
      features: "Funktionen",
      pricing: "Preise",
      contact: "Kontakt",
      getStarted: "Kostenlos starten",
    },
    hero: {
      badge: "Bewertungssystem für die Gastronomie",
      title: "Mehr 5★-Bewertungen.",
      titleHighlight: "Mehr Stammgäste.",
      subtitle:
        "Ein Tipp: Gute Bewertungen gehen zu Google, schlechte bleiben bei Ihnen.",
      cta: "Kostenlos starten",
      ctaSecondary: "Demo buchen",
    },
    features: {
      sectionTitle: "Gelassenheit. Volle Kontrolle.",
      sectionSubtitle:
        "Ein NFC-Aufsteller. Keine App für Ihre Gäste.",
      linktreeTitle: "Ihre eigene Link-Seite",
      linktreeDesc:
        "Der Gast scannt und sieht Bewertung, Gutschein, Speisekarte und Ihre Social-Media-Links.",
      reviewTitle: "Nur gute Bewertungen",
      reviewDesc:
        "Zufriedene Gäste gehen zu Google, unzufriedene schreiben Ihnen.",
      promoTitle: "Gäste kommen wieder",
      promoDesc:
        "Sammeln Sie Nummern und Einwilligungen, senden Sie SMS-Gutscheine. Ihre Stammgäste, jederzeit erreichbar.",
    },
    pricing: {
      sectionTitle: "Transparente Preise",
      sectionSubtitle: "Gratis starten. Keine Verträge, keine versteckten Kosten.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/Monat",
      includes: "Inklusive:",
      feature1: "NFC-Aufsteller inklusive",
      feature2: "Google-Bewertungsfilter",
      feature3: "SMS-Gutscheine",
      feature4: "200 SMS/Monat inklusive",
      feature5: "Technischer Support",
      cta: "Kostenlos starten",
      plates: "Erster Aufsteller gratis, weitere je 9 €",
      periodAnnual: "/Jahr",
      billingMonthly: "Monatliche Zahlung",
      billingAnnual: "Jährliche Zahlung",
      annualSavingsBadge: "2 Monate gratis",
      annualNote: "Jährlich zahlen: 10 Monate statt 12.",
      comingSoon: "Demnächst verfügbar",
      trialTeaser: "30 Tage gratis",
      afterTrialNote: "Nach der 30-tägigen Testphase:",
    },
    liveDemo: {
      sectionTitle: "Live erleben",
      sectionSubtitle:
        "So sieht Ihr Gast die Seite nach dem Scannen.",
      iframeTitle: "Live-Vorschau der Seite nach dem Scannen eines Starlinkee-Aufstellers",
      cta: "Vorschau im Vollbild",
      expandCta: "So funktioniert es",
      collapseCta: "Vorschau ausblenden",
      mobileCta: "Auf Ihrem Handy öffnen",
      tourIdle: "👉 Tippen Sie aufs Telefon und erleben Sie es wie Ihr Gast.",
      tourLinktree:
        "Hier landet der Gast nach dem Scan. Ihre Links, immer aktuell.",
      tourFilter:
        "Bewertungsfilter: Der Gast bewertet zuerst bei Ihnen, nicht öffentlich.",
      tourHighRating:
        "Hohe Bewertung? Der Gast geht direkt zu Ihrem Google-Profil.",
      tourLowRating:
        "Niedrige Bewertung? Die Nachricht erreicht nur Sie. Klären Sie es in Ruhe.",
      tourPromo:
        "Hier löst der Gast den Gutschein ein, den Sie festlegen.",
      tourRestart: "Demo neu starten",
    },
    contact: {
      sectionTitle: "Lassen Sie uns sprechen",
      sectionSubtitle:
        "Hinterlassen Sie Ihre Daten — wir melden uns binnen 24 Stunden.",
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
      tagline: "Mehr 5★. Mehr Stammgäste.",
      rights: "Alle Rechte vorbehalten.",
    },
    chat: {
      triggerLabel: "Kontaktieren Sie uns",
      openAria: "Chat öffnen",
      closeAria: "Chat schließen",
      headerName: "Starlinkee",
      headerSubtitle: "Wir antworten normalerweise schnell",
      greeting: "Hallo! 👋 Wie kann ich helfen?",
      placeholder: "Nachricht schreiben...",
      sendAria: "Senden",
      phoneHours: "Hotline erreichbar 10–16 Uhr, täglich",
      copied: "Nummer kopiert!",
      callAria: "Rufen Sie uns an",
    },
    orderSuccess: {
      title: "Bestellung eingegangen!",
      bodyPaid1: "Vielen Dank für Ihren Kauf. Wir haben eine Bestellbestätigung an Ihre E-Mail-Adresse gesendet.",
      bodyPaid2: "Die NFC-Aufsteller versenden wir innerhalb von 3-5 Werktagen.",
      titleTrial: "Testphase gestartet!",
      bodyTrial1: "Sie haben 30 Tage Zeit, Starlinkee Pro kostenlos zu testen. Bestätigung und Anleitung haben wir an Ihre E-Mail-Adresse gesendet.",
      bodyTrial2: "Wenn Sie nichts unternehmen, berechnen wir nach 30 Tagen den Jahrespreis gemäß unseren AGB — Sie können vorher jederzeit kündigen.",
      back: "Zurück zur Startseite",
    },
  },
  it: {
    nav: {
      features: "Funzionalità",
      pricing: "Prezzi",
      contact: "Contatti",
      getStarted: "Inizia gratis",
    },
    hero: {
      badge: "Sistema di recensioni per la ristorazione",
      title: "Più recensioni positive.",
      titleHighlight: "Più clienti che ritornano.",
      subtitle:
        "Targhe NFC che filtrano automaticamente le recensioni negative, inviano coupon promozionali via SMS e riportano i clienti da te — senza app per i tuoi clienti.",
      cta: "Inizia gratis",
      ctaSecondary: "Prenota una demo",
    },
    features: {
      sectionTitle: "Gestione completa della reputazione online",
      sectionSubtitle:
        "Una targa NFC — controllo totale sulle recensioni Google, database contatti. Nessuna app necessaria, nessuna configurazione complicata.",
      linktreeTitle: "La tua pagina di link personale",
      linktreeDesc:
        "Quando il cliente scansiona il tag NFC, atterra sulla tua pagina personale — dove valuta la visita e riscatta i coupon. Inoltre puoi aggiungere fino a 7 link personalizzati, ad esempio ai social media, al menu o alla pagina delle prenotazioni.",
      reviewTitle: "Protezione del profilo Google",
      reviewDesc:
        "Il cliente scansiona la targa NFC e valuta la visita. Soddisfatto? La recensione va direttamente sul tuo profilo Google. Insoddisfatto? Il feedback resta a te — reagisci prima che una recensione negativa finisca online.",
      promoTitle: "Raccogli consensi e dati di contatto",
      promoDesc:
        "Ad ogni scansione puoi raccogliere un numero di telefono e il consenso marketing. Invia coupon SMS, comunica promozioni — costruisci una base clienti da ricontattare con le tue offerte.",
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
      feature4: "200 SMS/mese inclusi",
      feature5: "Supporto tecnico",
      cta: "Inizia gratis",
      plates: "Prima targa NFC gratis, ogni altra 9 €",
      periodAnnual: "/anno",
      billingMonthly: "Pagamento mensile",
      billingAnnual: "Pagamento annuale",
      annualSavingsBadge: "2 mesi gratis",
      annualNote: "Paga una volta all'anno e paga per 10 mesi invece di 12.",
      comingSoon: "Prossimamente",
      trialTeaser: "30 giorni gratis",
      afterTrialNote: "Dopo la prova di 30 giorni:",
    },
    liveDemo: {
      sectionTitle: "Guardalo dal vivo",
      sectionSubtitle:
        "Questa è la vera pagina che i tuoi clienti vedono dopo aver scansionato la targa NFC — senza installazione, senza attesa.",
      iframeTitle: "Anteprima dal vivo della pagina mostrata dopo la scansione di una targa Starlinkee",
      cta: "Apri l'anteprima a schermo intero",
      expandCta: "Guarda come funziona",
      collapseCta: "Nascondi anteprima",
      mobileCta: "Apri sul tuo telefono",
      tourIdle: "👉 Tocca il telefono e segui il percorso proprio come farebbe il tuo cliente.",
      tourLinktree:
        "Questa è la pagina su cui atterra il cliente dopo la scansione — qui trovi tutti i tuoi link, che puoi cambiare quando vuoi.",
      tourFilter:
        "Questo è il filtro delle recensioni: il cliente valuta prima la visita con te, prima che qualcosa diventi pubblico.",
      tourHighRating:
        "Con una valutazione alta il cliente va direttamente al tuo profilo Google per lasciare una recensione pubblica.",
      tourLowRating:
        "Con una valutazione bassa il cliente resta con te — scrive un messaggio che arriva solo al titolare e non può più tornare a lasciare una recensione pubblica.",
      tourPromo:
        "Qui il cliente riscatta la promozione attuale — un codice o coupon che imposti tu.",
      tourRestart: "Ricomincia la demo",
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
      tagline: "Sistema di recensioni per la ristorazione.",
      rights: "Tutti i diritti riservati.",
    },
    chat: {
      triggerLabel: "Contattaci",
      openAria: "Apri chat",
      closeAria: "Chiudi chat",
      headerName: "Starlinkee",
      headerSubtitle: "Di solito rispondiamo velocemente",
      greeting: "Ciao! 👋 Come posso aiutarti?",
      placeholder: "Scrivi un messaggio...",
      sendAria: "Invia",
      phoneHours: "Assistenza telefonica 10:00–16:00, tutti i giorni",
      copied: "Numero copiato!",
      callAria: "Chiamaci",
    },
    orderSuccess: {
      title: "Ordine confermato!",
      bodyPaid1: "Grazie per il tuo acquisto. Abbiamo inviato la conferma dell'ordine al tuo indirizzo e-mail.",
      bodyPaid2: "Spediremo le targhe NFC all'indirizzo indicato entro 3-5 giorni lavorativi.",
      titleTrial: "Prova avviata!",
      bodyTrial1: "Hai 30 giorni per provare Starlinkee Pro senza alcun costo. Abbiamo inviato conferma e istruzioni al tuo indirizzo e-mail.",
      bodyTrial2: "Se non fai nulla, dopo 30 giorni addebiteremo il prezzo annuale secondo i Termini di Servizio — puoi annullare in qualsiasi momento prima.",
      back: "Torna alla homepage",
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
