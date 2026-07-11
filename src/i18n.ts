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
      getStarted: "Dołącz teraz",
    },
    hero: {
      badge: "System opinii & lojalności dla gastronomii",
      title: "Więcej pozytywnych opinii.",
      titleHighlight: "Więcej powracających klientów.",
      subtitle:
        "Tabliczki NFC, które automatycznie filtrują negatywne opinie, wysyłają kupony promocyjne i budują lojalność — bez aplikacji dla Twoich klientów.",
      cta: "Dołącz teraz",
      ctaSecondary: "Zamów bezpłatną prezentację",
    },
    features: {
      sectionTitle: "Kompleksowe narzędzie do reputacji online",
      sectionSubtitle:
        "Jedna tabliczka NFC — i masz pełną kontrolę nad opinią w Google, bazą kontaktów i lojalnością klientów. Bez aplikacji, bez skomplikowanej konfiguracji.",
      linktreeTitle: "Twoja własna strona z linkami",
      linktreeDesc:
        "Po zeskanowaniu tabliczki NFC klient trafia na Twoją własną stronę — Twój dashboard, w którym ma dostęp do wszystkich funkcji aplikacji: ocen, kuponów i karty lojalnościowej. Dodatkowo możesz dodać do 7 własnych linków, np. do social mediów, menu czy strony z rezerwacją.",
      reviewTitle: "Ochrona profilu Google",
      reviewDesc:
        "Klient skanuje tabliczkę NFC i ocenia wizytę. Zadowolony? Jego opinia trafia prosto na Twój profil Google. Niezadowolony? Feedback zostaje u Ciebie — reagujesz zanim negatyw trafi do sieci.",
      promoTitle: "Zbieraj zgody i dane kontaktowe",
      promoDesc:
        "Przy każdym skanowaniu możesz pozyskać numer telefonu i zgodę na kontakt marketingowy. Wysyłaj kupony SMS, informuj o promocjach — buduj bazę klientów, do których wrócisz z ofertą.",
      loyaltyTitle: "Karta lojalnościowa bez aplikacji",
      loyaltyDesc:
        "Cyfrowa karta stałego klienta, która działa przez sam skan NFC. Klient zbiera wizyty, a po osiągnięciu progu — dostaje nagrodę. Budujesz nawyk powracania bez żadnych dodatkowych aplikacji.",
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
      cta: "Dołącz teraz",
      plates: "Pierwsza tabliczka NFC gratis, każda kolejna 29 zł",
      periodAnnual: "/rok",
      billingMonthly: "Płatność miesięczna",
      billingAnnual: "Płatność roczna",
      annualSavingsBadge: "2 miesiące gratis",
      annualNote: "Płać raz w roku i zapłać za 10 miesięcy zamiast 12.",
      comingSoon: "Wkrótce dostępne",
      trialTeaser: "30 dni za darmo",
    },
    liveDemo: {
      sectionTitle: "Zobacz to na żywo",
      sectionSubtitle:
        "To prawdziwa strona, którą widzi klient po zeskanowaniu tabliczki NFC — bez montażu, bez czekania.",
      iframeTitle: "Podgląd na żywo strony po zeskanowaniu tabliczki Starlinkee",
      cta: "Otwórz podgląd na pełnym ekranie",
      expandCta: "Zobacz, jak to działa",
      collapseCta: "Schowaj podgląd",
      mobileCta: "Otwórz w swoim telefonie",
      tourIdle: "👉 Kliknij w telefon i przejdź przez proces tak, jak zrobiłby to Twój klient.",
      tourLinktree:
        "To strona, na którą trafia klient po zeskanowaniu tabliczki — masz tu wszystkie swoje linki i zarządzasz nimi z panelu.",
      tourFilter:
        "To filtr opinii: klient najpierw ocenia wizytę u Ciebie, zanim cokolwiek trafi do internetu.",
      tourHighRating:
        "Przy wysokiej ocenie klient trafia prosto na Twój profil Google — tam zostawia publiczną opinię.",
      tourLowRating:
        "Przy niskiej ocenie klient zostaje z Tobą — pisze wiadomość, która trafia tylko do właściciela, i nie może już wrócić do wystawienia publicznej opinii.",
      tourLoyalty:
        "Cyfrowa karta lojalnościowa — klient zbiera wizyty samym skanem, bez instalowania żadnej aplikacji.",
      tourPromo:
        "Tu klient odbiera aktualną promocję — kod lub kupon, który sam ustawiasz w panelu.",
      tourRestart: "Zacznij pokaz od nowa",
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
    orderSuccess: {
      title: "Zamówienie przyjęte!",
      bodyPaid1: "Dziękujemy za zakup. Na podany adres e-mail wysłaliśmy potwierdzenie zamówienia oraz link do aktywacji panelu.",
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
      getStarted: "Join now",
    },
    hero: {
      badge: "Review & loyalty system for restaurants",
      title: "More positive reviews.",
      titleHighlight: "More returning customers.",
      subtitle:
        "NFC plates that automatically filter negative reviews, send promo coupons, and build loyalty — no app install needed for your customers.",
      cta: "Join now",
      ctaSecondary: "Book a free demo",
    },
    features: {
      sectionTitle: "Complete online reputation management",
      sectionSubtitle:
        "One NFC plate — full control over your Google reviews, contact database, and customer loyalty. No app needed, no complex setup.",
      linktreeTitle: "Your own link page",
      linktreeDesc:
        "When a customer scans the NFC tag, they land on your own page — your personal dashboard giving access to every feature of the app: reviews, coupons and the loyalty card. On top of that, you can add up to 7 of your own custom links, e.g. to social media, your menu or a booking page.",
      reviewTitle: "Google profile protection",
      reviewDesc:
        "Customer scans the NFC plate and rates their visit. Happy? Their review goes straight to your Google profile. Unhappy? The feedback stays with you — react before a negative review hits the web.",
      promoTitle: "Collect consent & contact data",
      promoDesc:
        "With every scan you can capture a phone number and marketing consent. Send SMS coupons, announce promotions — build a customer base you can reach again with offers.",
      loyaltyTitle: "Loyalty card without an app",
      loyaltyDesc:
        "A digital loyalty card that works with a simple NFC scan. Customers collect visits and earn a reward after reaching the threshold — no extra apps required.",
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
      cta: "Join now",
      plates: "First NFC plate free, additional plates €9 each",
      periodAnnual: "/yr",
      billingMonthly: "Monthly billing",
      billingAnnual: "Annual billing",
      annualSavingsBadge: "2 months free",
      annualNote: "Pay once a year and get 10 months for the price of 10 instead of 12.",
      comingSoon: "Coming soon",
      trialTeaser: "30 days free",
    },
    liveDemo: {
      sectionTitle: "See it live",
      sectionSubtitle:
        "This is the real page your customers see after scanning the NFC plate — no install, no waiting.",
      iframeTitle: "Live preview of the page shown after scanning a Starlinkee plate",
      cta: "Open the full-screen preview",
      expandCta: "See how it works",
      collapseCta: "Hide preview",
      mobileCta: "Open on your phone",
      tourIdle: "👉 Tap the phone and walk through the flow just like your customer would.",
      tourLinktree:
        "This is the page a customer lands on after scanning the plate — all your links live here, managed from your dashboard.",
      tourFilter:
        "This is the review filter: the customer rates their visit with you first, before anything goes public.",
      tourHighRating:
        "A high rating sends the customer straight to your Google profile to leave a public review.",
      tourLowRating:
        "A low rating keeps the customer with you — they write a message that only reaches the owner, and can't go back to leave a public review.",
      tourLoyalty:
        "A digital loyalty card — customers collect visits with a simple scan, no app install required.",
      tourPromo:
        "This is where the customer claims the current promotion — a code or coupon you set up in your dashboard.",
      tourRestart: "Restart the demo",
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
    orderSuccess: {
      title: "Order confirmed!",
      bodyPaid1: "Thanks for your purchase. We've sent an order confirmation and a panel activation link to your email.",
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
      getStarted: "Jetzt beitreten",
    },
    hero: {
      badge: "Bewertungs- & Treueprogramm für Gastronomie",
      title: "Mehr positive Bewertungen.",
      titleHighlight: "Mehr wiederkehrende Gäste.",
      subtitle:
        "NFC-Aufsteller, die negative Bewertungen automatisch filtern, Rabattgutscheine per SMS versenden und Kundentreue aufbauen — ohne App für Ihre Gäste.",
      cta: "Jetzt beitreten",
      ctaSecondary: "Kostenlose Demo buchen",
    },
    features: {
      sectionTitle: "Komplettes Online-Reputationsmanagement",
      sectionSubtitle:
        "Ein NFC-Aufsteller — volle Kontrolle über Ihre Google-Bewertungen, Kontaktdatenbank und Kundenbindung. Keine App nötig, kein kompliziertes Setup.",
      linktreeTitle: "Ihre eigene Link-Seite",
      linktreeDesc:
        "Beim Scannen des NFC-Schilds gelangt der Kunde auf Ihre eigene Seite — Ihr persönliches Dashboard mit Zugriff auf alle Funktionen der App: Bewertungen, Gutscheine und die Treuekarte. Zusätzlich können Sie bis zu 7 eigene Links hinzufügen, z. B. zu Social Media, Ihrer Speisekarte oder einer Reservierungsseite.",
      reviewTitle: "Google-Profil-Schutz",
      reviewDesc:
        "Der Gast scannt den NFC-Aufsteller und bewertet seinen Besuch. Zufrieden? Die Bewertung geht direkt auf Ihr Google-Profil. Unzufrieden? Das Feedback bleibt bei Ihnen — reagieren Sie, bevor eine negative Bewertung online geht.",
      promoTitle: "Einwilligungen & Kontaktdaten sammeln",
      promoDesc:
        "Bei jedem Scan können Sie eine Telefonnummer und Marketingeinwilligung erfassen. Senden Sie SMS-Gutscheine, informieren Sie über Aktionen — bauen Sie eine Kundenbasis auf, die Sie erneut erreichen können.",
      loyaltyTitle: "Treuekarte ohne App",
      loyaltyDesc:
        "Eine digitale Treuekarte, die per NFC-Scan funktioniert. Gäste sammeln Besuche und erhalten nach Erreichen der Schwelle eine Belohnung — keine zusätzlichen Apps nötig.",
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
      cta: "Jetzt beitreten",
      plates: "Erster NFC-Aufsteller gratis, weitere je 9 €",
      periodAnnual: "/Jahr",
      billingMonthly: "Monatliche Zahlung",
      billingAnnual: "Jährliche Zahlung",
      annualSavingsBadge: "2 Monate gratis",
      annualNote: "Einmal im Jahr zahlen und nur für 10 statt 12 Monate bezahlen.",
      comingSoon: "Demnächst verfügbar",
      trialTeaser: "30 Tage gratis",
    },
    liveDemo: {
      sectionTitle: "Live erleben",
      sectionSubtitle:
        "Das ist die echte Seite, die Ihre Gäste nach dem Scannen des NFC-Aufstellers sehen — ohne Installation, ohne Wartezeit.",
      iframeTitle: "Live-Vorschau der Seite nach dem Scannen eines Starlinkee-Aufstellers",
      cta: "Vorschau im Vollbild öffnen",
      expandCta: "Sehen, wie es funktioniert",
      collapseCta: "Vorschau ausblenden",
      mobileCta: "Auf Ihrem Handy öffnen",
      tourIdle: "👉 Tippen Sie auf das Telefon und durchlaufen Sie den Ablauf wie Ihr Gast.",
      tourLinktree:
        "Das ist die Seite, auf der der Gast nach dem Scannen landet — hier liegen alle Ihre Links, verwaltet über Ihr Dashboard.",
      tourFilter:
        "Das ist der Bewertungsfilter: Der Gast bewertet den Besuch zuerst bei Ihnen, bevor irgendetwas öffentlich wird.",
      tourHighRating:
        "Bei einer hohen Bewertung gelangt der Gast direkt zu Ihrem Google-Profil, um eine öffentliche Bewertung zu hinterlassen.",
      tourLowRating:
        "Bei einer niedrigen Bewertung bleibt der Gast bei Ihnen — er schreibt eine Nachricht, die nur der Inhaber sieht, und kann nicht mehr zu einer öffentlichen Bewertung zurückkehren.",
      tourLoyalty:
        "Eine digitale Treuekarte — Gäste sammeln Besuche per Scan, ganz ohne App-Installation.",
      tourPromo:
        "Hier löst der Gast die aktuelle Aktion ein — einen Code oder Gutschein, den Sie in Ihrem Dashboard festlegen.",
      tourRestart: "Demo neu starten",
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
    orderSuccess: {
      title: "Bestellung eingegangen!",
      bodyPaid1: "Vielen Dank für Ihren Kauf. Wir haben eine Bestellbestätigung und einen Link zur Aktivierung des Panels an Ihre E-Mail-Adresse gesendet.",
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
      getStarted: "Iscriviti ora",
    },
    hero: {
      badge: "Sistema di recensioni e fedeltà per la ristorazione",
      title: "Più recensioni positive.",
      titleHighlight: "Più clienti che ritornano.",
      subtitle:
        "Targhe NFC che filtrano automaticamente le recensioni negative, inviano coupon promozionali via SMS e costruiscono la fedeltà — senza app per i tuoi clienti.",
      cta: "Iscriviti ora",
      ctaSecondary: "Prenota una demo gratuita",
    },
    features: {
      sectionTitle: "Gestione completa della reputazione online",
      sectionSubtitle:
        "Una targa NFC — controllo totale sulle recensioni Google, database contatti e fidelizzazione clienti. Nessuna app necessaria, nessuna configurazione complicata.",
      linktreeTitle: "La tua pagina di link personale",
      linktreeDesc:
        "Quando il cliente scansiona il tag NFC, atterra sulla tua pagina personale — la tua dashboard con accesso a tutte le funzionalità dell'app: recensioni, coupon e carta fedeltà. Inoltre puoi aggiungere fino a 7 link personalizzati, ad esempio ai social media, al menu o alla pagina delle prenotazioni.",
      reviewTitle: "Protezione del profilo Google",
      reviewDesc:
        "Il cliente scansiona la targa NFC e valuta la visita. Soddisfatto? La recensione va direttamente sul tuo profilo Google. Insoddisfatto? Il feedback resta a te — reagisci prima che una recensione negativa finisca online.",
      promoTitle: "Raccogli consensi e dati di contatto",
      promoDesc:
        "Ad ogni scansione puoi raccogliere un numero di telefono e il consenso marketing. Invia coupon SMS, comunica promozioni — costruisci una base clienti da ricontattare con le tue offerte.",
      loyaltyTitle: "Carta fedeltà senza app",
      loyaltyDesc:
        "Una carta fedeltà digitale che funziona con un semplice scan NFC. I clienti accumulano visite e ricevono un premio al raggiungimento della soglia — nessuna app aggiuntiva necessaria.",
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
      cta: "Iscriviti ora",
      plates: "Prima targa NFC gratis, ogni altra 9 €",
      periodAnnual: "/anno",
      billingMonthly: "Pagamento mensile",
      billingAnnual: "Pagamento annuale",
      annualSavingsBadge: "2 mesi gratis",
      annualNote: "Paga una volta all'anno e paga per 10 mesi invece di 12.",
      comingSoon: "Prossimamente",
      trialTeaser: "30 giorni gratis",
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
        "Questa è la pagina su cui atterra il cliente dopo la scansione — qui trovi tutti i tuoi link, gestiti dalla tua dashboard.",
      tourFilter:
        "Questo è il filtro delle recensioni: il cliente valuta prima la visita con te, prima che qualcosa diventi pubblico.",
      tourHighRating:
        "Con una valutazione alta il cliente va direttamente al tuo profilo Google per lasciare una recensione pubblica.",
      tourLowRating:
        "Con una valutazione bassa il cliente resta con te — scrive un messaggio che arriva solo al titolare e non può più tornare a lasciare una recensione pubblica.",
      tourLoyalty:
        "Una carta fedeltà digitale — i clienti accumulano visite con una semplice scansione, senza installare app.",
      tourPromo:
        "Qui il cliente riscatta la promozione attuale — un codice o coupon che imposti tu dal pannello.",
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
    orderSuccess: {
      title: "Ordine confermato!",
      bodyPaid1: "Grazie per il tuo acquisto. Abbiamo inviato la conferma dell'ordine e il link di attivazione del pannello al tuo indirizzo e-mail.",
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
