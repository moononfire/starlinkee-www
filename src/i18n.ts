export type Locale = "pl" | "en" | "de" | "it";

export const defaultLocale: Locale = "pl";

export const LOCALES: Locale[] = ["pl", "en", "de", "it"];

export const LOCALE_COOKIE_NAME = "locale";

const translations = {
  // Ton PL (wzorzec dla en/de/it): zwięźle, ale z ciepłem: 1–2 zdania, obrazy i zmysły (uśmiech, dotyk, spokój) zamiast suchych faktów, bez żargonu.
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
        "Jedno dotknięcie, a uśmiech gościa zamienia się w piątą gwiazdkę. Pochwały lecą do Google, a krytyka trafia cicho do Ciebie.",
      cta: "Zacznij za darmo",
      ctaSecondary: "Zamów prezentację",
    },
    features: {
      sectionTitle: "Spokojna głowa. Pełna kontrola.",
      sectionSubtitle:
        "Jedna dyskretna tabliczka NFC na stoliku. Gość przykłada telefon i gotowe: bez aplikacji, bez logowania, bez zbędnych kroków.",
      linktreeTitle: "Twoja strona z linkami",
      linktreeDesc:
        "Gość przykłada telefon i od razu widzi wszystko, co dobre: ocenę, kupon, menu i Twoje social media. Lekko, ładnie, bez szukania.",
      reviewTitle: "Same dobre opinie",
      reviewDesc:
        "Uśmiechnięty gość trafia prosto do Google, a ten, któremu coś nie pasowało, pisze do Ciebie. Spokojna rozmowa zamiast publicznej burzy.",
      promoTitle: "Goście wracają",
      promoDesc:
        "Zbieraj telefony i zgody, a potem wyślij kupon na deser w spokojniejszy wtorek. Stali goście, którzy czują, że o nich pamiętasz.",
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
      feature4: "100 SMS-ów marketingowych/mies. do Twoich gości",
      feature5: "Błyskawiczne wsparcie",
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
        "Weź telefon do ręki i poczuj to tak, jak Twój gość tuż po zeskanowaniu tabliczki.",
      iframeTitle: "Podgląd na żywo strony po zeskanowaniu tabliczki Starlinkee",
      cta: "Podgląd na pełnym ekranie",
      expandCta: "Zobacz, jak to działa",
      collapseCta: "Schowaj podgląd",
      mobileCta: "Otwórz w swoim telefonie",
      tourIdle: "👉 Kliknij w telefon i przejdź ścieżkę oczami gościa.",
      tourLinktree:
        "Tu ląduje gość po skanie: jedno przyjazne miejsce z Twoimi linkami, zawsze świeżymi.",
      tourFilter:
        "Filtr opinii: gość najpierw dzieli się wrażeniami z Tobą, a nie z całym internetem.",
      tourHighRating:
        "Wysoka ocena? Gość wciąż się uśmiecha i od razu trafia na Twój profil Google.",
      tourLowRating:
        "Niższa ocena? Wiadomość trafia tylko do Ciebie, więc możesz wszystko wyjaśnić na spokojnie.",
      tourPromo:
        "Tu gość odbiera kupon, który sam ustawiasz: miły powód, żeby wrócić.",
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
        "One tap, and a guest's smile becomes a fifth star. Praise goes to Google, criticism lands quietly with you.",
      cta: "Start for free",
      ctaSecondary: "Book a demo",
    },
    features: {
      sectionTitle: "Peace of mind. Full control.",
      sectionSubtitle:
        "One discreet NFC plate on the table. Guests hold up their phone and that's it: no app, no login, no fuss.",
      linktreeTitle: "Your own link page",
      linktreeDesc:
        "Guests tap their phone and see everything good at once: your rating, a coupon, the menu and your socials. Light, tidy, effortless.",
      reviewTitle: "Only great reviews",
      reviewDesc:
        "A delighted guest flows straight to Google. One who felt let down writes to you: a calm conversation instead of a public storm.",
      promoTitle: "Guests come back",
      promoDesc:
        "Collect phone numbers and consent, then send a dessert coupon for a quieter Tuesday. Regulars who feel remembered.",
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
      feature4: "100 marketing SMS/mo to your guests",
      feature5: "Lightning-fast support",
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
        "Pick up your phone and feel it just as your guest does, right after scanning the plate.",
      iframeTitle: "Live preview of the page shown after scanning a Starlinkee plate",
      cta: "Open full-screen preview",
      expandCta: "See how it works",
      collapseCta: "Hide preview",
      mobileCta: "Open on your phone",
      tourIdle: "👉 Tap the phone and walk through it as your guest.",
      tourLinktree:
        "Guests land here after scanning: one friendly place with your links, always fresh.",
      tourFilter:
        "Review filter: guests share their impressions with you first, not with the whole internet.",
      tourHighRating:
        "High rating? The smile is still on their face, and they land right on your Google profile.",
      tourLowRating:
        "A lower rating? The message reaches only you, so you can set things right calmly.",
      tourPromo:
        "Here guests pick up the coupon you set up: a pleasant reason to come back.",
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
        "Ein Tipp, und das Lächeln Ihres Gastes wird zum fünften Stern. Lob geht zu Google, Kritik landet leise bei Ihnen.",
      cta: "Kostenlos starten",
      ctaSecondary: "Demo buchen",
    },
    features: {
      sectionTitle: "Gelassenheit. Volle Kontrolle.",
      sectionSubtitle:
        "Ein dezenter NFC-Aufsteller am Tisch. Der Gast hält das Handy daran, fertig: ohne App, ohne Anmeldung, ohne Umwege.",
      linktreeTitle: "Ihre eigene Link-Seite",
      linktreeDesc:
        "Der Gast hält das Handy daran und sieht auf einen Blick alles Schöne: Bewertung, Gutschein, Speisekarte und Ihre Social-Media-Links. Leicht und aufgeräumt.",
      reviewTitle: "Nur gute Bewertungen",
      reviewDesc:
        "Ein begeisterter Gast landet direkt bei Google. Wer sich geärgert hat, schreibt Ihnen: ein ruhiges Gespräch statt öffentlichem Sturm.",
      promoTitle: "Gäste kommen wieder",
      promoDesc:
        "Sammeln Sie Nummern und Einwilligungen und schicken Sie einen Dessert-Gutschein für einen ruhigeren Dienstag. Stammgäste, die spüren, dass Sie an sie denken.",
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
      feature4: "100 Marketing-SMS/Monat an Ihre Gäste",
      feature5: "Blitzschneller Support",
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
        "Nehmen Sie Ihr Handy in die Hand und erleben Sie es so, wie Ihr Gast direkt nach dem Scannen.",
      iframeTitle: "Live-Vorschau der Seite nach dem Scannen eines Starlinkee-Aufstellers",
      cta: "Vorschau im Vollbild",
      expandCta: "So funktioniert es",
      collapseCta: "Vorschau ausblenden",
      mobileCta: "Auf Ihrem Handy öffnen",
      tourIdle: "👉 Tippen Sie aufs Telefon und erleben Sie es wie Ihr Gast.",
      tourLinktree:
        "Hier landet der Gast nach dem Scan: ein freundlicher Ort mit Ihren Links, immer frisch.",
      tourFilter:
        "Bewertungsfilter: Der Gast teilt seine Eindrücke zuerst mit Ihnen, nicht mit dem ganzen Internet.",
      tourHighRating:
        "Hohe Bewertung? Das Lächeln ist noch da, und der Gast landet direkt auf Ihrem Google-Profil.",
      tourLowRating:
        "Schlechtere Bewertung? Die Nachricht erreicht nur Sie, so klären Sie alles in Ruhe.",
      tourPromo:
        "Hier holt der Gast den Gutschein ab, den Sie festlegen: ein schöner Grund, wiederzukommen.",
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
      title: "Più recensioni 5★.",
      titleHighlight: "Più clienti che tornano.",
      subtitle:
        "Un tocco, e il sorriso del cliente diventa la quinta stella. Gli elogi vanno su Google, le critiche arrivano piano da te.",
      cta: "Inizia gratis",
      ctaSecondary: "Prenota una demo",
    },
    features: {
      sectionTitle: "Serenità. Controllo totale.",
      sectionSubtitle:
        "Una targa NFC discreta sul tavolo. Il cliente avvicina il telefono e basta: niente app, niente accesso, nessun giro.",
      linktreeTitle: "La tua pagina link",
      linktreeDesc:
        "Il cliente avvicina il telefono e vede subito tutto il bello: voto, coupon, menu e i tuoi social. Leggero, ordinato, senza fatica.",
      reviewTitle: "Solo recensioni top",
      reviewDesc:
        "Il cliente entusiasta va dritto su Google. Chi è rimasto deluso scrive a te: una conversazione serena invece di una tempesta pubblica.",
      promoTitle: "I clienti tornano",
      promoDesc:
        "Raccogli numeri e consensi, poi manda un coupon per il dolce in un martedì più tranquillo. Clienti fedeli che si sentono ricordati.",
    },
    pricing: {
      sectionTitle: "Prezzi semplici",
      sectionSubtitle: "Parti gratis. Niente contratti né costi nascosti.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mese",
      includes: "Include:",
      feature1: "Targa NFC inclusa",
      feature2: "Filtro recensioni Google",
      feature3: "Coupon SMS",
      feature4: "100 SMS di marketing/mese ai tuoi clienti",
      feature5: "Supporto rapidissimo",
      cta: "Inizia gratis",
      plates: "Prima targa gratis, le altre 9 €",
      periodAnnual: "/anno",
      billingMonthly: "Pagamento mensile",
      billingAnnual: "Pagamento annuale",
      annualSavingsBadge: "2 mesi gratis",
      annualNote: "Paghi una volta l'anno: 10 mesi invece di 12.",
      comingSoon: "Prossimamente",
      trialTeaser: "30 giorni gratis",
      afterTrialNote: "Dopo la prova di 30 giorni:",
    },
    liveDemo: {
      sectionTitle: "Guardalo dal vivo",
      sectionSubtitle:
        "Prendi il telefono e vivilo come il tuo cliente, subito dopo la scansione della targa.",
      iframeTitle: "Anteprima dal vivo della pagina mostrata dopo la scansione di una targa Starlinkee",
      cta: "Anteprima a schermo intero",
      expandCta: "Guarda come funziona",
      collapseCta: "Nascondi anteprima",
      mobileCta: "Apri sul tuo telefono",
      tourIdle: "👉 Tocca il telefono e vivi il percorso come il tuo cliente.",
      tourLinktree:
        "Qui arriva il cliente dopo la scansione: un posto accogliente con i tuoi link, sempre freschi.",
      tourFilter:
        "Filtro recensioni: il cliente condivide prima le sue impressioni con te, non con tutto il web.",
      tourHighRating:
        "Voto alto? Il sorriso c'è ancora e il cliente va dritto al tuo profilo Google.",
      tourLowRating:
        "Voto più basso? Il messaggio arriva solo a te, così sistemi tutto con calma.",
      tourPromo:
        "Qui il cliente ritira il coupon che imposti tu: un bel motivo per tornare.",
      tourRestart: "Ricomincia la demo",
    },
    contact: {
      sectionTitle: "Parliamone",
      sectionSubtitle:
        "Lascia i tuoi dati — ti rispondiamo entro 24 ore.",
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
      tagline: "Più 5★. Più clienti fedeli.",
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
