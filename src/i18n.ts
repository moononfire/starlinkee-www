export type Locale = "pl" | "en" | "de" | "it";

export const defaultLocale: Locale = "pl";

export const LOCALES: Locale[] = ["pl", "en", "de", "it"];

export const LOCALE_COOKIE_NAME = "locale";

const translations = {
  // Ton PL (wzorzec dla en/de/it): pisz jak człowiek do człowieka: prosto, konkretnie, 1–2 zdania.
  // Powiedz, co robi gość i co dostaje właściciel. Bez haseł reklamowych, wykrzykników i na siłę luzackich zwrotów.
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
        "Gość przykłada telefon do tabliczki. Dobra opinia trafia do Google, a jeśli coś poszło nie tak, dowiadujesz się o tym pierwszy.",
      cta: "Zacznij za darmo",
      ctaSecondary: "Zamów prezentację",
    },
    features: {
      sectionTitle: "Spokojna głowa. Pełna kontrola.",
      sectionSubtitle:
        "Tabliczka na stoliku i telefon gościa. Nic nie trzeba pobierać ani zakładać.",
      linktreeTitle: "Twoja strona z linkami",
      linktreeDesc:
        "Po przyłożeniu telefonu gość widzi Twoją ocenę, kupon, menu i social media. Wszystko w jednym miejscu.",
      reviewTitle: "Same dobre opinie",
      reviewDesc:
        "Zadowolony gość zostawia opinię w Google. Niezadowolony pisze do Ciebie i możecie to załatwić między sobą.",
      promoTitle: "Goście wracają",
      promoDesc:
        "Zbierasz numery telefonów i zgody, a potem wysyłasz kupony SMS. Na przykład na deser w dzień, gdy w lokalu jest luźniej.",
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
        "Kliknij i zobacz, co widzi Twój gość po zeskanowaniu tabliczki.",
      iframeTitle: "Podgląd na żywo strony po zeskanowaniu tabliczki Starlinkee",
      cta: "Podgląd na pełnym ekranie",
      expandCta: "Zobacz, jak to działa",
      collapseCta: "Schowaj podgląd",
      mobileCta: "Otwórz w swoim telefonie",
      tourIdle: "👉 Kliknij w telefon i przejdź ścieżkę oczami gościa.",
      tourLinktree:
        "Tu trafia gość po zeskanowaniu. Twoje linki, zawsze aktualne.",
      tourFilter:
        "Filtr opinii: gość najpierw ocenia wizytę u Ciebie, a nie od razu w Google.",
      tourHighRating:
        "Wysoka ocena? Gość od razu przechodzi do Twojego profilu w Google.",
      tourLowRating:
        "Niska ocena? Wiadomość dostajesz tylko Ty, więc możesz to spokojnie wyjaśnić.",
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
        "Guests tap their phone on the plate. Good reviews go to Google, and if something went wrong, you hear about it first.",
      cta: "Start for free",
      ctaSecondary: "Book a demo",
    },
    features: {
      sectionTitle: "Peace of mind. Full control.",
      sectionSubtitle:
        "A plate on the table and the guest's own phone. Nothing to download or sign up for.",
      linktreeTitle: "Your own link page",
      linktreeDesc:
        "After the tap, guests see your rating, a coupon, the menu and your socials, all in one place.",
      reviewTitle: "Only great reviews",
      reviewDesc:
        "Happy guests leave a review on Google. Unhappy ones message you, so you can sort it out directly.",
      promoTitle: "Guests come back",
      promoDesc:
        "You collect phone numbers and consent, then send SMS coupons. A dessert on a slow weekday, say.",
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
        "Tap through it and see what your guest sees after scanning the plate.",
      iframeTitle: "Live preview of the page shown after scanning a Starlinkee plate",
      cta: "Open full-screen preview",
      expandCta: "See how it works",
      collapseCta: "Hide preview",
      mobileCta: "Open on your phone",
      tourIdle: "👉 Tap the phone and walk through it as your guest.",
      tourLinktree:
        "Guests land here after scanning. Your links, always up to date.",
      tourFilter:
        "Review filter: guests rate their visit with you first, not straight on Google.",
      tourHighRating:
        "High rating? The guest goes straight to your Google profile.",
      tourLowRating:
        "Low rating? Only you get the message, so you can sort it out calmly.",
      tourPromo:
        "Here the guest picks up the coupon you set up.",
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
        "Der Gast hält das Handy an den Aufsteller. Gute Bewertungen gehen zu Google, und wenn etwas schiefgelaufen ist, erfahren Sie es als Erstes.",
      cta: "Kostenlos starten",
      ctaSecondary: "Demo buchen",
    },
    features: {
      sectionTitle: "Gelassenheit. Volle Kontrolle.",
      sectionSubtitle:
        "Ein Aufsteller auf dem Tisch und das Handy des Gastes. Nichts herunterzuladen, keine Anmeldung.",
      linktreeTitle: "Ihre eigene Link-Seite",
      linktreeDesc:
        "Nach dem Scannen sieht der Gast Ihre Bewertung, einen Gutschein, die Speisekarte und Ihre Social-Media-Links an einem Ort.",
      reviewTitle: "Nur gute Bewertungen",
      reviewDesc:
        "Zufriedene Gäste bewerten Sie bei Google. Unzufriedene schreiben Ihnen, und Sie klären es direkt.",
      promoTitle: "Gäste kommen wieder",
      promoDesc:
        "Sie sammeln Telefonnummern und Einwilligungen und verschicken SMS-Gutscheine, zum Beispiel für ein Dessert an einem ruhigen Wochentag.",
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
        "Klicken Sie sich durch und sehen Sie, was Ihr Gast nach dem Scannen sieht.",
      iframeTitle: "Live-Vorschau der Seite nach dem Scannen eines Starlinkee-Aufstellers",
      cta: "Vorschau im Vollbild",
      expandCta: "So funktioniert es",
      collapseCta: "Vorschau ausblenden",
      mobileCta: "Auf Ihrem Handy öffnen",
      tourIdle: "👉 Tippen Sie aufs Telefon und erleben Sie es wie Ihr Gast.",
      tourLinktree:
        "Hier landet der Gast nach dem Scannen. Ihre Links, immer aktuell.",
      tourFilter:
        "Bewertungsfilter: Der Gast bewertet den Besuch zuerst bei Ihnen, nicht gleich bei Google.",
      tourHighRating:
        "Hohe Bewertung? Der Gast geht direkt zu Ihrem Google-Profil.",
      tourLowRating:
        "Niedrige Bewertung? Nur Sie bekommen die Nachricht und können es in Ruhe klären.",
      tourPromo:
        "Hier holt der Gast den Gutschein ab, den Sie festgelegt haben.",
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
        "Il cliente avvicina il telefono alla targa. Le recensioni positive vanno su Google e, se qualcosa è andato storto, lo sai tu per primo.",
      cta: "Inizia gratis",
      ctaSecondary: "Prenota una demo",
    },
    features: {
      sectionTitle: "Serenità. Controllo totale.",
      sectionSubtitle:
        "Una targa sul tavolo e il telefono del cliente. Niente da scaricare, niente registrazione.",
      linktreeTitle: "La tua pagina link",
      linktreeDesc:
        "Dopo la scansione il cliente vede il tuo voto, un coupon, il menu e i tuoi social, tutto in un posto.",
      reviewTitle: "Solo recensioni top",
      reviewDesc:
        "Chi è contento lascia una recensione su Google. Chi non lo è scrive a te, e ve la vedete tra voi.",
      promoTitle: "I clienti tornano",
      promoDesc:
        "Raccogli numeri e consensi, poi mandi coupon SMS. Per esempio un dolce in un giorno con meno clienti.",
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
        "Prova a cliccare e guarda cosa vede il tuo cliente dopo la scansione.",
      iframeTitle: "Anteprima dal vivo della pagina mostrata dopo la scansione di una targa Starlinkee",
      cta: "Anteprima a schermo intero",
      expandCta: "Guarda come funziona",
      collapseCta: "Nascondi anteprima",
      mobileCta: "Apri sul tuo telefono",
      tourIdle: "👉 Tocca il telefono e vivi il percorso come il tuo cliente.",
      tourLinktree:
        "Qui arriva il cliente dopo la scansione. I tuoi link, sempre aggiornati.",
      tourFilter:
        "Filtro recensioni: il cliente valuta prima la visita con te, non subito su Google.",
      tourHighRating:
        "Voto alto? Il cliente va direttamente al tuo profilo Google.",
      tourLowRating:
        "Voto basso? Il messaggio arriva solo a te, così puoi chiarire con calma.",
      tourPromo:
        "Qui il cliente ritira il coupon che imposti tu.",
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
