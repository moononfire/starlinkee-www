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
      menu: "Menu",
    },
    hero: {
      badge: "Opinie Google i lojalność klientów",
      title: "Więcej gwiazdek 5★.",
      titleHighlight: "Więcej powracających gości.",
      subtitle:
        "Gość przykłada telefon do tabliczki i zostawia opinię w Google. Jeśli coś poszło nie tak, możesz dowiedzieć się o tym od razu.",
      cta: "Zacznij za darmo",
      ctaSecondary: "Zamów prezentację",
      point1: "30 dni za darmo",
      point2: "Rezygnacja w okresie próbnym bez opłat",
      point3: "Pierwsza tabliczka gratis",
    },
    features: {
      sectionTitle: "Spokojna głowa. Pełna kontrola.",
      sectionSubtitle:
        "Tabliczka na stoliku i telefon gościa. Nic nie trzeba pobierać ani zakładać.",
      linktreeTitle: "Twoja strona z linkami",
      linktreeDesc:
        "Po przyłożeniu telefonu gość widzi Twoją ocenę, kupon, menu i social media. Wszystko w jednym miejscu.",
      reviewTitle: "Opinie w Google",
      reviewDesc:
        "Gość ocenia wizytę i zostawia opinię w Google. Jeśli coś poszło nie tak, może też napisać do Ciebie prywatnie.",
      promoTitle: "Goście wracają",
      promoDesc:
        "Zbierasz numery telefonów i zgody, a potem wysyłasz kupony SMS. Na przykład na deser w dzień, gdy w lokalu jest luźniej.",
      videoTitle: "Zobacz, jak to działa w praktyce",
      videoDesc:
        "Krótki film: od przyłożenia telefonu do opinii w Google.",
      close: "Zamknij",
      zoom: "Powiększ",
    },
    pricing: {
      sectionTitle: "Prosty cennik",
      sectionSubtitle: "Zaczynasz za darmo, bez ukrytych kosztów.",
      planName: "Starlinkee Pro",
      price: "199",
      currency: "zł",
      period: "/mies.",
      includes: "W cenie:",
      feature1: "Tabliczka NFC w cenie",
      feature2: "Zbieranie opinii Google",
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
        "Gość najpierw ocenia wizytę, a potem przechodzi do opinii w Google.",
      tourHighRating:
        "Wysoka ocena? Gość od razu przechodzi do Twojego profilu w Google.",
      tourLowRating:
        "Coś poszło nie tak? Gość może też napisać do Ciebie prywatnie, więc możesz to spokojnie wyjaśnić.",
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
    how: {
      eyebrow: "Jak to działa",
      title: "Trzy kroki, zero instalacji",
      step1Title: "Gość przykłada telefon",
      step1Desc:
        "Tabliczka NFC stoi na stoliku. Wystarczy dotknąć jej telefonem, bez aplikacji.",
      step2Title: "Ocenia wizytę",
      step2Desc:
        "Wybiera liczbę gwiazdek na Twojej stronie.",
      step3Title: "Opinia trafia do Google",
      step3Desc:
        "Gość zostawia opinię w Google. Jeśli coś poszło nie tak, może też napisać do Ciebie prywatnie.",
    },
    finalCta: {
      title: "Gotowy na więcej opinii?",
      subtitle: "Wypróbuj Starlinkee Pro przez 30 dni za darmo.",
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
      menu: "Menu",
    },
    hero: {
      badge: "Google reviews and customer loyalty",
      title: "More 5★ reviews.",
      titleHighlight: "More returning guests.",
      subtitle:
        "Guests tap their phone on the plate and leave a review on Google. If something went wrong, you can hear about it right away.",
      cta: "Start for free",
      ctaSecondary: "Book a demo",
      point1: "30 days free",
      point2: "Cancel free during the trial",
      point3: "First plate free",
    },
    features: {
      sectionTitle: "Peace of mind. Full control.",
      sectionSubtitle:
        "A plate on the table and the guest's own phone. Nothing to download or sign up for.",
      linktreeTitle: "Your own link page",
      linktreeDesc:
        "After the tap, guests see your rating, a coupon, the menu and your socials, all in one place.",
      reviewTitle: "Reviews on Google",
      reviewDesc:
        "Guests rate their visit and leave a review on Google. If something went wrong, they can also write to you privately.",
      promoTitle: "Guests come back",
      promoDesc:
        "You collect phone numbers and consent, then send SMS coupons. A dessert on a slow weekday, say.",
      videoTitle: "See how it works in practice",
      videoDesc:
        "A short video: from tapping the phone to a review on Google.",
      close: "Close",
      zoom: "Enlarge",
    },
    pricing: {
      sectionTitle: "Simple pricing",
      sectionSubtitle: "Start free. No hidden fees.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mo",
      includes: "Includes:",
      feature1: "NFC plate included",
      feature2: "Google review collection",
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
        "Guests rate their visit first, then move on to leave a review on Google.",
      tourHighRating:
        "High rating? The guest goes straight to your Google profile.",
      tourLowRating:
        "Something went wrong? Guests can also message you privately, so you can sort it out calmly.",
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
    how: {
      eyebrow: "How it works",
      title: "Three steps, nothing to install",
      step1Title: "Guest taps their phone",
      step1Desc:
        "The NFC plate sits on the table. One tap with a phone, no app needed.",
      step2Title: "Rates the visit",
      step2Desc:
        "They pick a star rating on your page.",
      step3Title: "The review lands on Google",
      step3Desc:
        "Guests leave their review on Google. If something went wrong, they can also message you privately.",
    },
    finalCta: {
      title: "Ready for more reviews?",
      subtitle: "Try Starlinkee Pro free for 30 days.",
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
      menu: "Menü",
    },
    hero: {
      badge: "Google-Bewertungen und Kundenbindung",
      title: "Mehr Bewertungen mit 5★.",
      titleHighlight: "Mehr Stammgäste.",
      subtitle:
        "Der Gast hält das Handy an den Aufsteller und hinterlässt eine Bewertung bei Google. Wenn etwas schiefgelaufen ist, können Sie es sofort erfahren.",
      cta: "Kostenlos starten",
      ctaSecondary: "Demo buchen",
      point1: "30 Tage kostenlos",
      point2: "Im Testzeitraum kostenlos kündbar",
      point3: "Erster Aufsteller gratis",
    },
    features: {
      sectionTitle: "Gelassenheit. Volle Kontrolle.",
      sectionSubtitle:
        "Ein Aufsteller auf dem Tisch und das Handy des Gastes. Nichts herunterzuladen, keine Anmeldung.",
      linktreeTitle: "Ihre eigene Link-Seite",
      linktreeDesc:
        "Nach dem Scannen sieht der Gast Ihre Bewertung, einen Gutschein, die Speisekarte und Ihre Social-Media-Links an einem Ort.",
      reviewTitle: "Bewertungen bei Google",
      reviewDesc:
        "Gäste bewerten den Besuch und hinterlassen eine Bewertung bei Google. Lief etwas schief, können sie Ihnen auch privat schreiben.",
      promoTitle: "Gäste kommen wieder",
      promoDesc:
        "Sie sammeln Telefonnummern und Einwilligungen und verschicken SMS-Gutscheine, zum Beispiel für ein Dessert an einem ruhigen Wochentag.",
      videoTitle: "So funktioniert es in der Praxis",
      videoDesc:
        "Ein kurzes Video: vom Antippen des Handys bis zur Bewertung bei Google.",
      close: "Schließen",
      zoom: "Vergrößern",
    },
    pricing: {
      sectionTitle: "Transparente Preise",
      sectionSubtitle: "Gratis starten. Keine versteckten Kosten.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/Monat",
      includes: "Inklusive:",
      feature1: "NFC-Aufsteller inklusive",
      feature2: "Google-Bewertungen sammeln",
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
        "Der Gast bewertet zuerst den Besuch und gelangt dann zur Bewertung bei Google.",
      tourHighRating:
        "Hohe Bewertung? Der Gast geht direkt zu Ihrem Google-Profil.",
      tourLowRating:
        "Etwas schiefgelaufen? Der Gast kann Ihnen auch privat schreiben, und Sie klären es in Ruhe.",
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
    how: {
      eyebrow: "So funktioniert's",
      title: "Drei Schritte, nichts zu installieren",
      step1Title: "Gast hält das Handy dran",
      step1Desc:
        "Der NFC-Aufsteller steht auf dem Tisch. Einmal mit dem Handy antippen, ganz ohne App.",
      step2Title: "Bewertet den Besuch",
      step2Desc:
        "Er wählt auf Ihrer Seite die Anzahl der Sterne.",
      step3Title: "Die Bewertung landet bei Google",
      step3Desc:
        "Der Gast hinterlässt seine Bewertung bei Google. Lief etwas schief, kann er Ihnen auch privat schreiben.",
    },
    finalCta: {
      title: "Bereit für mehr Bewertungen?",
      subtitle: "Testen Sie Starlinkee Pro 30 Tage kostenlos.",
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
      menu: "Menu",
    },
    hero: {
      badge: "Recensioni Google e fidelizzazione clienti",
      title: "Più recensioni 5★.",
      titleHighlight: "Più clienti che tornano.",
      subtitle:
        "Il cliente avvicina il telefono alla targhetta e lascia una recensione su Google. Se qualcosa è andato storto, puoi saperlo subito.",
      cta: "Inizia gratis",
      ctaSecondary: "Prenota una demo",
      point1: "30 giorni gratis",
      point2: "Disdici gratis durante la prova",
      point3: "Prima targhetta gratis",
    },
    features: {
      sectionTitle: "Serenità. Controllo totale.",
      sectionSubtitle:
        "Una targhetta sul tavolo e il telefono del cliente. Niente da scaricare, niente registrazione.",
      linktreeTitle: "La tua pagina link",
      linktreeDesc:
        "Dopo la scansione il cliente vede il tuo voto, un coupon, il menu e i tuoi social, tutto in un posto.",
      reviewTitle: "Recensioni su Google",
      reviewDesc:
        "Gli ospiti valutano la visita e lasciano una recensione su Google. Se qualcosa non è andato, possono anche scriverti in privato.",
      promoTitle: "I clienti tornano",
      promoDesc:
        "Raccogli numeri e consensi, poi mandi coupon SMS. Per esempio un dolce in un giorno con meno clienti.",
      videoTitle: "Guarda come funziona in pratica",
      videoDesc:
        "Un breve video: dal tocco del telefono alla recensione su Google.",
      close: "Chiudi",
      zoom: "Ingrandisci",
    },
    pricing: {
      sectionTitle: "Prezzi semplici",
      sectionSubtitle: "Parti gratis. Niente costi nascosti.",
      planName: "Starlinkee Pro",
      price: "49",
      currency: "€",
      period: "/mese",
      includes: "Include:",
      feature1: "Targhetta NFC inclusa",
      feature2: "Raccolta recensioni Google",
      feature3: "Coupon SMS",
      feature4: "100 SMS di marketing/mese ai tuoi clienti",
      feature5: "Supporto rapidissimo",
      cta: "Inizia gratis",
      plates: "Prima targhetta gratis, le altre 9 €",
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
      iframeTitle: "Anteprima dal vivo della pagina mostrata dopo la scansione di una targhetta Starlinkee",
      cta: "Anteprima a schermo intero",
      expandCta: "Guarda come funziona",
      collapseCta: "Nascondi anteprima",
      mobileCta: "Apri sul tuo telefono",
      tourIdle: "👉 Tocca il telefono e vivi il percorso come il tuo cliente.",
      tourLinktree:
        "Qui arriva il cliente dopo la scansione. I tuoi link, sempre aggiornati.",
      tourFilter:
        "Il cliente valuta prima la visita, poi passa a lasciare la recensione su Google.",
      tourHighRating:
        "Voto alto? Il cliente va direttamente al tuo profilo Google.",
      tourLowRating:
        "Qualcosa è andato storto? Il cliente può anche scriverti in privato, così puoi chiarire con calma.",
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
    how: {
      eyebrow: "Come funziona",
      title: "Tre passi, niente da installare",
      step1Title: "Il cliente avvicina il telefono",
      step1Desc:
        "La targhetta NFC sta sul tavolo. Basta toccarla con il telefono, senza app.",
      step2Title: "Valuta la visita",
      step2Desc:
        "Sceglie il numero di stelle sulla tua pagina.",
      step3Title: "La recensione arriva su Google",
      step3Desc:
        "Il cliente lascia la recensione su Google. Se qualcosa non è andato, può anche scriverti in privato.",
    },
    finalCta: {
      title: "Pronto per avere più recensioni?",
      subtitle: "Prova Starlinkee Pro gratis per 30 giorni.",
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
