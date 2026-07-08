import { type Locale } from "@/i18n";

export interface BlogCategory {
  slug: string;
  name: string;
  names: Partial<Record<Locale, string>>;
  slugs: Partial<Record<Locale, string>>;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "opinie-google",
    name: "Opinie Google",
    names: { en: "Google Reviews", de: "Google-Bewertungen", it: "Recensioni Google" },
    slugs: { en: "google-reviews", de: "google-bewertungen", it: "recensioni-google" },
    description: "Strategie zdobywania opinii, regulamin Google i systemy zbierania recenzji.",
  },
  {
    slug: "wizytowka-google",
    name: "Wizytówka Google",
    names: { en: "Google Business Profile", de: "Google Business Profile", it: "Google Business Profile" },
    slugs: { en: "google-business-profile", de: "google-unternehmensprofil", it: "profilo-google-business" },
    description: "Optymalizacja profilu Google Business Profile, Local Pack i lokalne SEO.",
  },
  {
    slug: "zarzadzanie-reputacja",
    name: "Zarządzanie reputacją",
    names: { en: "Reputation Management", de: "Reputationsmanagement", it: "Gestione della reputazione" },
    slugs: { en: "reputation-management", de: "reputationsmanagement", it: "gestione-reputazione" },
    description: "Odpowiadanie na opinie, obsługa negatywnych recenzji i budowanie wizerunku.",
  },
  {
    slug: "marketing-lokalny",
    name: "Marketing lokalny",
    names: { en: "Local Marketing", de: "Lokales Marketing", it: "Marketing locale" },
    slugs: { en: "local-marketing", de: "lokales-marketing", it: "marketing-locale" },
    description: "Strategie marketingowe dla firm lokalnych, NFC i automatyzacja procesów.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  authorBio: string;
  category: string;
  categorySlug: string;
  ogImage: string;
  keywords: string[];
  faq: FaqItem[];
  availableLocales: Locale[];
  localized?: Partial<
    Record<
      Locale,
      { title: string; description: string; category: string; keywords: string[]; slug: string; authorBio?: string }
    >
  >;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "jak-odpowiadac-na-opinie-w-google",
    title: "Jak odpowiadać na opinie w Google: pozytywne, negatywne i fałszywe",
    description:
      "Sprawdź, jak odpowiadać na opinie Google — pozytywne, negatywne i fałszywe. Dowiedz się, kiedy Google usunie recenzję i jak legalnie ograniczyć liczbę niesprawiedliwych ocen.",
    publishedAt: "2026-07-01",
    author: "Viktor Bobiński",
    authorBio:
      "Twórca Starlinkee i ekspert marketingu, sprzedaży oraz IT. Specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
    category: "Zarządzanie reputacją",
    categorySlug: "zarzadzanie-reputacja",
    ogImage: "/images/blog/jak-odpowiadac-na-opinie-hero.jpg",
    keywords: [
      "jak odpowiadać na opinie w google",
      "jak odpowiedzieć na negatywną opinię google",
      "jak odpowiedzieć na pozytywną opinię google",
      "przykłady odpowiedzi na opinie google",
      "jak usunąć fałszywą opinię google",
      "jak zgłosić opinię do usunięcia google",
      "review gating google",
      "filtrowanie opinii google",
      "ochrona profilu google",
      "jak radzić sobie z hejtem w internecie",
    ],
    availableLocales: ["pl", "en", "de", "it"],
    localized: {
      en: {
        title: "How to Respond to Google Reviews: Positive, Negative and Fake",
        description:
          "Learn how to respond to Google reviews — positive, negative and fake. Find out when Google actually removes a review and how to legally reduce unfair ratings.",
        category: "Reputation Management",
        slug: "how-to-respond-to-google-reviews",
        authorBio:
          "Founder of Starlinkee and an expert in marketing, sales and IT. He specialises in NFC systems for collecting Google reviews and profile-ranking strategies for local businesses — from restaurants to salons and reception desks.",
        keywords: [
          "how to respond to google reviews",
          "how to respond to a negative google review",
          "how to respond to a positive google review",
          "google review response examples",
          "how to remove a fake google review",
          "how to report a google review",
          "google review gating",
          "review filtering google",
          "protect google business profile",
        ],
      },
      de: {
        title: "Wie man auf Google-Bewertungen antwortet: positiv, negativ und gefälscht",
        description:
          "Erfahren Sie, wie Sie auf Google-Bewertungen antworten — positive, negative und gefälschte. Wann entfernt Google tatsächlich eine Bewertung und wie reduzieren Sie unfaire Bewertungen legal?",
        category: "Reputationsmanagement",
        slug: "wie-auf-google-bewertungen-antworten",
        authorBio:
          "Gründer von Starlinkee und Experte für Marketing, Vertrieb und IT. Er ist spezialisiert auf NFC-Systeme zur Sammlung von Google-Bewertungen sowie auf Strategien zur Profiloptimierung für lokale Unternehmen — von Restaurants bis zu Salons und Empfangsbereichen.",
        keywords: [
          "wie auf google bewertungen antworten",
          "negative google bewertung beantworten",
          "positive google bewertung beantworten",
          "beispiele antworten google bewertungen",
          "gefälschte google bewertung entfernen",
          "google bewertung melden",
          "google review gating",
          "bewertungsfilter google",
          "google unternehmensprofil schützen",
        ],
      },
      it: {
        title: "Come rispondere alle recensioni Google: positive, negative e false",
        description:
          "Scopri come rispondere alle recensioni Google — positive, negative e false. Scopri quando Google rimuove davvero una recensione e come ridurre legalmente le valutazioni ingiuste.",
        category: "Gestione della reputazione",
        slug: "come-rispondere-alle-recensioni-google",
        authorBio:
          "Fondatore di Starlinkee ed esperto di marketing, vendite e IT. È specializzato in sistemi NFC per la raccolta di recensioni Google e in strategie di posizionamento dei profili per le attività locali — dai ristoranti ai saloni e alle reception.",
        keywords: [
          "come rispondere alle recensioni google",
          "come rispondere a una recensione negativa google",
          "come rispondere a una recensione positiva google",
          "esempi di risposte alle recensioni google",
          "come rimuovere una recensione falsa google",
          "come segnalare una recensione google",
          "google review gating",
          "filtro recensioni google",
          "proteggere il profilo google business",
        ],
      },
    },
    faq: [
      {
        question: "Czy muszę odpowiadać na każdą opinię w Google?",
        answer:
          "Nie ma takiego wymogu formalnego, ale jest to mocno zalecane. Odpowiadanie na opinie — zarówno pozytywne, jak i negatywne — jest sygnałem aktywności profilu branym pod uwagę przez algorytm lokalnego SEO i buduje zaufanie u czytających profil klientów.",
      },
      {
        question: "Jak szybko powinienem odpowiadać na negatywne opinie?",
        answer:
          "Optymalny czas reakcji to 24–48 godzin. Wystarczająco szybko, żeby pokazać zaangażowanie, ale na tyle długo, żeby odpowiedzieć na chłodno, bez emocji, które mogłyby zaostrzyć sytuację.",
      },
      {
        question: "Czy Google usunie negatywną opinię, jeśli poproszę o to klienta?",
        answer:
          "Klient może samodzielnie usunąć lub edytować swoją opinię w dowolnym momencie, ale Google nie zrobi tego automatycznie na Twoją prośbę, jeśli treść nie narusza regulaminu. Najskuteczniejsze jest wyjaśnienie sprawy prywatnie i uprzejma prośba o aktualizację, gdy problem zostanie rozwiązany.",
      },
      {
        question: "Czym różni się filtr opinii od zakazanego review gatingu?",
        answer:
          "Review gating blokuje niezadowolonym klientom dostęp do formularza opinii Google — to naruszenie regulaminu. Legalny filtr opinii, jak ten w systemie Starlinkee, daje dostęp do Google każdemu klientowi, a jedynie dodatkowo oferuje niezadowolonym osobny kanał zgłoszenia problemu bezpośrednio do firmy.",
      },
      {
        question: "Co zrobić, gdy podejrzewam, że opinię napisał konkurent?",
        answer:
          "Zgłoś opinię przez formularz Google, wskazując konflikt interesów jako powód. Warto dołączyć konkretne przesłanki (np. brak dowodu wizyty w Twojej historii rezerwacji). Odpowiedz też publicznie w sposób rzeczowy, nie oskarżając wprost — inni czytelnicy sami wyciągną wnioski z faktów.",
      },
    ],
  },
  {
    slug: "wizytowka-google-moja-firma-jak-zoptymalizowac",
    title: "Wizytówka Google Moja Firma: jak wypełnić i zoptymalizować profil krok po kroku",
    description:
      "Dowiedz się, jak założyć, zweryfikować i zoptymalizować wizytówkę Google Moja Firma. Sprawdź, które sygnały rankingowe mają największy wpływ na pozycję w Google Maps i Local Pack.",
    publishedAt: "2026-06-30",
    author: "Viktor Bobiński",
    authorBio:
      "Twórca Starlinkee i ekspert marketingu, sprzedaży oraz IT. Specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
    category: "Wizytówka Google",
    categorySlug: "wizytowka-google",
    ogImage: "/images/blog/wizytowka-google-moja-firma-hero.jpg",
    keywords: [
      "wizytówka google moja firma",
      "google business profile",
      "pozycjonowanie wizytówki google",
      "jak zoptymalizować wizytówkę google",
      "profil firmy google",
      "jak wypełnić wizytówkę google",
      "co wpływa na pozycję w google maps",
      "local seo dla restauracji",
    ],
    availableLocales: ["pl", "en", "de", "it"],
    localized: {
      en: {
        title: "Google Business Profile: How to Fill In and Optimise Your Profile Step by Step",
        description:
          "Learn how to create, verify and optimise your Google Business Profile. Discover which ranking signals have the greatest impact on your position in Google Maps and the Local Pack.",
        category: "Google Business Profile",
        slug: "google-business-profile-how-to-optimize",
        authorBio:
          "Founder of Starlinkee and an expert in marketing, sales and IT. He specialises in NFC systems for collecting Google reviews and profile-ranking strategies for local businesses — from restaurants to salons and reception desks.",
        keywords: [
          "google business profile",
          "how to optimize google business profile",
          "google maps ranking factors",
          "local seo for restaurants",
          "google my business setup",
          "google business profile verification",
          "local pack ranking",
          "google maps optimization",
        ],
      },
      de: {
        title: "Google Business Profile: So füllen und optimieren Sie Ihr Profil Schritt für Schritt",
        description:
          "Erfahren Sie, wie Sie Ihr Google Business Profil anlegen, verifizieren und optimieren. Entdecken Sie, welche Rankingsignale die größte Auswirkung auf Ihre Position in Google Maps und dem Local Pack haben.",
        category: "Google Business Profile",
        slug: "google-unternehmensprofil-optimieren",
        authorBio:
          "Gründer von Starlinkee und Experte für Marketing, Vertrieb und IT. Er ist spezialisiert auf NFC-Systeme zur Sammlung von Google-Bewertungen sowie auf Strategien zur Profiloptimierung für lokale Unternehmen — von Restaurants bis zu Salons und Empfangsbereichen.",
        keywords: [
          "google unternehmensprofil",
          "google business profile optimieren",
          "google maps ranking faktoren",
          "local seo für restaurants",
          "google mein unternehmen einrichten",
          "google business profile verifizieren",
          "local pack ranking",
          "google maps optimierung",
        ],
      },
      it: {
        title: "Google Business Profile: come compilare e ottimizzare il profilo passo dopo passo",
        description:
          "Scopri come creare, verificare e ottimizzare il tuo Google Business Profile. Scopri quali segnali di ranking hanno il maggiore impatto sulla tua posizione in Google Maps e nel Local Pack.",
        category: "Google Business Profile",
        slug: "profilo-google-business-come-ottimizzare",
        authorBio:
          "Fondatore di Starlinkee ed esperto di marketing, vendite e IT. È specializzato in sistemi NFC per la raccolta di recensioni Google e in strategie di posizionamento dei profili per le attività locali — dai ristoranti ai saloni e alle reception.",
        keywords: [
          "profilo google business",
          "come ottimizzare google business profile",
          "fattori di ranking google maps",
          "local seo per ristoranti",
          "configurare google my business",
          "verifica profilo google business",
          "local pack ranking",
          "ottimizzazione google maps",
        ],
      },
    },
    faq: [
      {
        question: "Czy wizytówka Google Moja Firma jest bezpłatna?",
        answer:
          "Tak, założenie i prowadzenie profilu w Google Business Profile jest całkowicie bezpłatne. Google nie pobiera żadnych opłat za wyświetlanie firmy w wynikach lokalnych ani za korzystanie z funkcji postów, zdjęć czy odpowiedzi na opinie.",
      },
      {
        question: "Ile trwa weryfikacja wizytówki Google?",
        answer:
          "Weryfikacja przez pocztówkę trwa zwykle 5–14 dni roboczych. Jeśli dostępna jest weryfikacja przez SMS lub natychmiastowa weryfikacja, możesz aktywować profil w ciągu kilku minut.",
      },
      {
        question: "Jak często powinienem aktualizować wizytówkę Google?",
        answer:
          "Minimum to jeden post tygodniowo i przegląd godzin otwarcia raz w miesiącu. Zdjęcia warto uzupełniać przynajmniej co kwartał. Po każdej zmianie w ofercie lub godzinach zaktualizuj profil od razu.",
      },
      {
        question: "Czy mogę dodać słowa kluczowe do nazwy firmy w wizytówce?",
        answer:
          "Nie. Google wymaga, żeby nazwa w wizytówce była zgodna z rzeczywistą nazwą firmy. Dodawanie słów kluczowych do nazwy narusza regulamin i może skutkować zawieszeniem profilu.",
      },
      {
        question: "Czy warto odpowiadać na wszystkie opinie — także te pozytywne?",
        answer:
          "Tak. Odpowiadanie na opinie to sygnał zaangażowania uwzględniany przez Google przy ocenie aktywności profilu. Krótka odpowiedź na pozytywną recenzję buduje lojalność klientów i zachęca innych do zostawienia swojej opinii.",
      },
    ],
  },
  {
    slug: "jak-szybko-zdobyc-opinie-w-google",
    title: "Jak szybko zdobyć opinie w Google? Automatyzacja i regulamin",
    description:
      "Dowiedz się, jak legalnie i skutecznie zdobywać opinie w Google. Sprawdź, kiedy prosić o recenzję, jakie bariery usunąć i dlaczego system NFC zmienia zasady gry.",
    publishedAt: "2026-06-12",
    author: "Viktor Bobiński",
    authorBio:
      "Twórca Starlinkee i ekspert marketingu, sprzedaży oraz IT. Specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
    category: "Opinie Google",
    categorySlug: "opinie-google",
    ogImage: "/images/blog/jak-szybko-zdobyc-opinie-hero.jpg",
    keywords: [
      "opinie google",
      "jak zdobyć opinie w google",
      "system NFC opinie",
      "wizytówka google moja firma",
      "zbieranie recenzji",
      "pozycjonowanie wizytówki google",
    ],
    availableLocales: ["pl", "en", "de", "it"],
    localized: {
      en: {
        title: "How to Get Google Reviews Fast? Automation and Guidelines",
        description:
          "Find out how to legally and effectively collect Google reviews. Learn when to ask for a review, which barriers to remove, and why an NFC system changes the game.",
        category: "Google Reviews",
        slug: "how-to-get-google-reviews-fast",
        authorBio:
          "Founder of Starlinkee and an expert in marketing, sales and IT. He specialises in NFC systems for collecting Google reviews and profile-ranking strategies for local businesses — from restaurants to salons and reception desks.",
        keywords: [
          "google reviews",
          "how to get google reviews",
          "NFC review system",
          "google business profile",
          "collecting reviews",
          "google business profile ranking",
        ],
      },
      de: {
        title: "Wie bekommt man schnell Google-Bewertungen? Automatisierung und Richtlinien",
        description:
          "Erfahren Sie, wie Sie legal und effektiv Google-Bewertungen sammeln. Wann Sie um eine Rezension bitten, welche Hindernisse beseitigt werden müssen und warum ein NFC-System alles verändert.",
        category: "Google-Bewertungen",
        slug: "schnell-google-bewertungen-bekommen",
        authorBio:
          "Gründer von Starlinkee und Experte für Marketing, Vertrieb und IT. Er ist spezialisiert auf NFC-Systeme zur Sammlung von Google-Bewertungen sowie auf Strategien zur Profiloptimierung für lokale Unternehmen — von Restaurants bis zu Salons und Empfangsbereichen.",
        keywords: [
          "google bewertungen",
          "wie bekommt man google bewertungen",
          "NFC bewertungssystem",
          "google unternehmensprofil",
          "bewertungen sammeln",
          "google business profile ranking",
        ],
      },
      it: {
        title: "Come ottenere rapidamente recensioni su Google? Automazione e linee guida",
        description:
          "Scopri come raccogliere recensioni su Google in modo legale ed efficace. Quando chiedere una recensione, quali ostacoli rimuovere e perché un sistema NFC cambia le regole del gioco.",
        category: "Recensioni Google",
        slug: "come-ottenere-recensioni-google-velocemente",
        authorBio:
          "Fondatore di Starlinkee ed esperto di marketing, vendite e IT. È specializzato in sistemi NFC per la raccolta di recensioni Google e in strategie di posizionamento dei profili per le attività locali — dai ristoranti ai saloni e alle reception.",
        keywords: [
          "recensioni google",
          "come ottenere recensioni google",
          "sistema NFC recensioni",
          "profilo google business",
          "raccogliere recensioni",
          "ranking profilo google business",
        ],
      },
    },
    faq: [
      {
        question: "Czy mogę dać rabat za pozytywną opinię?",
        answer:
          "Nie. Oferowanie jakichkolwiek korzyści majątkowych za pozostawienie oceny jest wprost zabronione przez regulaminy wyszukiwarek.",
      },
      {
        question: "Co zrobić z niesprawiedliwą opinią?",
        answer:
          "Należy na nią odpowiedzieć rzeczowo, proponując wyjaśnienie sprawy w prywatnej wiadomości. Pokazuje to innym klientom profesjonalizm i chęć rozwiązania problemu.",
      },
      {
        question: "Czy każda branża potrzebuje wizytówki i recenzji?",
        answer:
          "Tak. Każdy biznes działający lokalnie lub obsługujący klientów z danego regionu zyskuje na widoczności dzięki aktywnemu profilowi w wynikach wyszukiwania.",
      },
    ],
  },
  {
    slug: "program-lojalnosciowy-bez-aplikacji-jak-budowac-lojalnosc-klientow",
    title: "Program lojalnościowy bez aplikacji: jak budować lojalność klientów",
    description:
      "Sprawdź, jak zbudować cyfrowy program lojalnościowy bez aplikacji mobilnej. Dowiedz się, jak działa karta lojalnościowa NFC i jak dobrać próg nagrody dla restauracji, salonu czy barbershopu.",
    publishedAt: "2026-07-07",
    author: "Viktor Bobiński",
    authorBio:
      "Twórca Starlinkee i ekspert marketingu, sprzedaży oraz IT. Specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
    category: "Marketing lokalny",
    categorySlug: "marketing-lokalny",
    ogImage: "/images/blog/program-lojalnosciowy-bez-aplikacji-hero.jpg",
    keywords: [
      "karta lojalnościowa bez aplikacji",
      "cyfrowa karta lojalnościowa",
      "program lojalnościowy dla restauracji",
      "jak budować lojalność klientów",
      "jak zatrzymać klientów w restauracji",
      "jak zwiększyć powracalność klientów",
      "karta stałego klienta restauracja",
      "program lojalnościowy salon fryzjerski",
      "karta lojalnościowa barbershop",
      "loyalty program bez aplikacji mobilnej",
    ],
    availableLocales: ["pl", "en", "de", "it"],
    localized: {
      en: {
        title: "Loyalty Program Without an App: How to Build Customer Loyalty",
        description:
          "Find out how to build a digital loyalty program without a mobile app. Learn how an NFC loyalty card works and how to set the reward threshold for a restaurant, salon or barbershop.",
        category: "Local Marketing",
        slug: "loyalty-program-without-an-app-how-to-build-customer-loyalty",
        authorBio:
          "Founder of Starlinkee and an expert in marketing, sales and IT. He specialises in NFC systems for collecting Google reviews and profile-ranking strategies for local businesses — from restaurants to salons and reception desks.",
        keywords: [
          "loyalty card without an app",
          "digital loyalty card",
          "loyalty program for restaurants",
          "how to build customer loyalty",
          "how to retain restaurant customers",
          "how to increase customer return rate",
          "regular customer card restaurant",
          "hair salon loyalty program",
          "barbershop loyalty card",
          "loyalty program without a mobile app",
        ],
      },
      de: {
        title: "Treueprogramm ohne App: Wie man Kundentreue aufbaut",
        description:
          "Erfahren Sie, wie Sie ein digitales Treueprogramm ohne mobile App aufbauen. Entdecken Sie, wie eine NFC-Treuekarte funktioniert und wie Sie die Belohnungsschwelle für Restaurant, Salon oder Barbershop festlegen.",
        category: "Lokales Marketing",
        slug: "treueprogramm-ohne-app-wie-kundentreue-aufbauen",
        authorBio:
          "Gründer von Starlinkee und Experte für Marketing, Vertrieb und IT. Er ist spezialisiert auf NFC-Systeme zur Sammlung von Google-Bewertungen sowie auf Strategien zur Profiloptimierung für lokale Unternehmen — von Restaurants bis zu Salons und Empfangsbereichen.",
        keywords: [
          "treuekarte ohne app",
          "digitale treuekarte",
          "treueprogramm für restaurants",
          "wie kundentreue aufbauen",
          "kunden im restaurant halten",
          "kundenrückkehrrate erhöhen",
          "stammkundenkarte restaurant",
          "treueprogramm friseursalon",
          "treuekarte barbershop",
          "treueprogramm ohne mobile app",
        ],
      },
      it: {
        title: "Programma fedeltà senza app: come costruire la fedeltà dei clienti",
        description:
          "Scopri come costruire un programma fedeltà digitale senza app mobile. Scopri come funziona una tessera fedeltà NFC e come impostare la soglia premio per ristorante, salone o barbershop.",
        category: "Marketing locale",
        slug: "programma-fedelta-senza-app-come-costruire-la-fedelta-dei-clienti",
        authorBio:
          "Fondatore di Starlinkee ed esperto di marketing, vendite e IT. È specializzato in sistemi NFC per la raccolta di recensioni Google e in strategie di posizionamento dei profili per le attività locali — dai ristoranti ai saloni e alle reception.",
        keywords: [
          "tessera fedeltà senza app",
          "tessera fedeltà digitale",
          "programma fedeltà per ristoranti",
          "come costruire la fedeltà dei clienti",
          "come trattenere i clienti al ristorante",
          "come aumentare il ritorno dei clienti",
          "tessera cliente abituale ristorante",
          "programma fedeltà parrucchiere",
          "tessera fedeltà barbershop",
          "programma fedeltà senza app mobile",
        ],
      },
    },
    faq: [
      {
        question: "Czy klient musi pobrać aplikację, żeby korzystać z cyfrowej karty lojalnościowej?",
        answer:
          "Nie. Cała karta działa w przeglądarce telefonu po zbliżeniu go do tabliczki NFC — bez instalacji, bez zakładania konta i bez logowania hasłem.",
      },
      {
        question: "Jaki próg nagrody sprawdza się najlepiej?",
        answer:
          "Taki, który klient osiąga w ciągu kilku tygodni do maksymalnie dwóch–trzech miesięcy, dopasowany do naturalnej częstotliwości wizyt w Twojej branży. Zbyt odległa nagroda traci moc motywacyjną.",
      },
      {
        question: "Czy dane zebrane przez program lojalnościowy można wykorzystać do marketingu SMS?",
        answer:
          "Tak, pod warunkiem uzyskania zgody marketingowej zgodnej z RODO w momencie zbierania numeru telefonu. Po jej udzieleniu numer można wykorzystać do wysyłki kuponów i przypomnień o programie.",
      },
      {
        question: "Czy program lojalnościowy działa też dla salonów i gabinetów, nie tylko gastronomii?",
        answer:
          "Tak. Sprawdza się wszędzie tam, gdzie klient wraca cyklicznie — salony fryzjerskie, barbershopy, gabinety kosmetyczne, siłownie czy warsztaty samochodowe. Kluczem jest dopasowanie progu nagrody do rzeczywistego rytmu wizyt danej branży.",
      },
      {
        question: "Czym różni się karta lojalnościowa NFC od kodu QR?",
        answer:
          "Kod QR wymaga uruchomienia aparatu, odpowiedniego oświetlenia i wycelowania telefonu, co bywa niewygodne przy kasie. Tabliczka NFC wystarczy zbliżyć — działanie trwa ułamek sekundy i nie zależy od jakości skanu.",
      },
    ],
  },
  {
    slug: "opinie-google-salon-fryzjerski-jak-zdobyc-wiecej-ocen",
    title: "Opinie Google dla salonu kosmetycznego i fryzjera: jak zdobyć więcej ocen",
    description:
      "Sprawdź, jak salon kosmetyczny, fryzjer i barbershop mogą zdobywać więcej opinii Google. Dowiedz się, kiedy prosić o recenzję, jak reagować na trudne opinie i jak połączyć je z lojalnością klientów.",
    publishedAt: "2026-07-08",
    author: "Viktor Bobiński",
    authorBio:
      "Twórca Starlinkee i ekspert marketingu, sprzedaży oraz IT. Specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
    category: "Opinie Google",
    categorySlug: "opinie-google",
    ogImage: "/images/blog/opinie-google-salon-fryzjerski-hero.jpg",
    keywords: [
      "opinie google salon kosmetyczny",
      "jak zdobyć opinie salon kosmetyczny",
      "zbieranie opinii salon piękności",
      "nfc salon kosmetyczny",
      "tabliczka nfc salon",
      "opinie google fryzjer",
      "jak zdobyć opinie fryzjer",
      "system opinii barbershop",
      "nfc barbershop opinie",
      "karta lojalnościowa barbershop",
      "karta lojalnościowa fryzjer",
      "program lojalnościowy salon fryzjerski",
    ],
    availableLocales: ["pl", "en", "de", "it"],
    localized: {
      en: {
        title: "Google Reviews for Hair Salons and Barbershops: How to Get More Ratings",
        description:
          "Find out how hair salons, barbershops and beauty salons can get more Google reviews. Learn when to ask for a review, how to handle difficult reviews, and how to link them to customer loyalty.",
        category: "Google Reviews",
        slug: "google-reviews-hair-salons-barbershops-how-to-get-more-ratings",
        authorBio:
          "Founder of Starlinkee and an expert in marketing, sales and IT. He specialises in NFC systems for collecting Google reviews and profile-ranking strategies for local businesses — from restaurants to salons and reception desks.",
        keywords: [
          "google reviews hair salon",
          "how to get reviews beauty salon",
          "collecting reviews beauty salon",
          "nfc beauty salon",
          "nfc plate salon",
          "google reviews hairdresser",
          "how to get reviews hairdresser",
          "review system barbershop",
          "nfc barbershop reviews",
          "loyalty card barbershop",
          "loyalty card hairdresser",
          "loyalty program hair salon",
        ],
      },
      de: {
        title: "Google-Bewertungen für Friseursalons und Barbershops: Mehr Bewertungen bekommen",
        description:
          "Erfahren Sie, wie Friseursalons, Barbershops und Kosmetiksalons mehr Google-Bewertungen sammeln. Wann Sie um eine Bewertung bitten, wie Sie mit schwierigen Bewertungen umgehen und wie Sie diese mit Kundentreue verbinden.",
        category: "Google-Bewertungen",
        slug: "google-bewertungen-friseursalon-barbershop-mehr-bewertungen-bekommen",
        authorBio:
          "Gründer von Starlinkee und Experte für Marketing, Vertrieb und IT. Er ist spezialisiert auf NFC-Systeme zur Sammlung von Google-Bewertungen sowie auf Strategien zur Profiloptimierung für lokale Unternehmen — von Restaurants bis zu Salons und Empfangsbereichen.",
        keywords: [
          "google bewertungen friseursalon",
          "bewertungen bekommen kosmetiksalon",
          "bewertungen sammeln schönheitssalon",
          "nfc kosmetiksalon",
          "nfc plakette salon",
          "google bewertungen friseur",
          "bewertungen bekommen friseur",
          "bewertungssystem barbershop",
          "nfc barbershop bewertungen",
          "treuekarte barbershop",
          "treuekarte friseur",
          "treueprogramm friseursalon",
        ],
      },
      it: {
        title: "Recensioni Google per parrucchieri e barbershop: come ottenere più recensioni",
        description:
          "Scopri come saloni di parrucchiere, barbershop e centri estetici possono ottenere più recensioni Google. Quando chiedere una recensione, come gestire quelle difficili e come collegarle alla fedeltà dei clienti.",
        category: "Recensioni Google",
        slug: "recensioni-google-parrucchiere-barbiere-come-ottenere-piu-recensioni",
        authorBio:
          "Fondatore di Starlinkee ed esperto di marketing, vendite e IT. È specializzato in sistemi NFC per la raccolta di recensioni Google e in strategie di posizionamento dei profili per le attività locali — dai ristoranti ai saloni e alle reception.",
        keywords: [
          "recensioni google salone estetico",
          "come ottenere recensioni salone estetico",
          "raccogliere recensioni centro estetico",
          "nfc salone estetico",
          "targhetta nfc salone",
          "recensioni google parrucchiere",
          "come ottenere recensioni parrucchiere",
          "sistema recensioni barbershop",
          "recensioni nfc barbershop",
          "tessera fedeltà barbershop",
          "tessera fedeltà parrucchiere",
          "programma fedeltà parrucchiere",
        ],
      },
    },
    faq: [
      {
        question: "Czy mogę poprosić klientkę o opinię zaraz po zabiegu, czy lepiej poczekać?",
        answer:
          "Najlepiej poprosić od razu, gdy klientka widzi efekt w lustrze i wyraża zadowolenie. To moment najsilniejszych pozytywnych emocji w całej wizycie — czekanie do domu znacznie obniża szansę na wystawienie recenzji.",
      },
      {
        question: "Jak reagować, gdy klientka jest niezadowolona i grozi negatywną opinią?",
        answer:
          "Zaproponuj bezpłatną poprawkę jeszcze tego samego dnia lub w najbliższym możliwym terminie. Rozwiązanie problemu przed wystawieniem opinii jest zawsze skuteczniejsze niż odpowiadanie na już opublikowaną, negatywną recenzję.",
      },
      {
        question:
          "Czy tabliczka NFC sprawdzi się przy stanowisku fryzjerskim, gdzie ręce klienta bywają zajęte?",
        answer:
          "Tak. Wystarczy zbliżenie telefonu na ułamek sekundy, dlatego tabliczka najlepiej sprawdza się tuż po zdjęciu peleryny fryzjerskiej, gdy klient ma już wolne ręce i patrzy w lustro na efekt końcowy.",
      },
      {
        question:
          "Jaki próg nagrody w karcie lojalnościowej najlepiej sprawdza się w salonie fryzjerskim?",
        answer:
          "Zwykle piąta wizyta, dopasowana do rytmu wizyt co 3–4 tygodnie. Dla salonów kosmetycznych z rzadszymi zabiegami lepiej sprawdza się próg trzech lub czterech wizyt.",
      },
      {
        question: "Czy program lojalnościowy i zbieranie opinii mogą działać na tej samej tabliczce NFC?",
        answer:
          "Tak. Jeden nośnik NFC może jednocześnie kierować zadowolonego klienta do formularza opinii Google i rejestrować jego wizytę w cyfrowej karcie lojalnościowej — bez dodatkowego sprzętu i bez instalowania aplikacji.",
      },
    ],
  },
];

export function getLocalizedPost(
  post: BlogPostMeta,
  locale: Locale,
): { title: string; description: string; category: string; keywords: string[]; slug: string; authorBio: string } {
  const loc = locale !== "pl" ? post.localized?.[locale] : undefined;
  return {
    title: loc?.title ?? post.title,
    description: loc?.description ?? post.description,
    category: loc?.category ?? post.category,
    keywords: loc?.keywords ?? post.keywords,
    slug: loc?.slug ?? post.slug,
    authorBio: loc?.authorBio ?? post.authorBio,
  };
}

export function getCategoryName(cat: BlogCategory, locale: Locale): string {
  return (locale !== "pl" ? cat.names[locale] : undefined) ?? cat.name;
}

export function getLocalizedCategorySlug(cat: BlogCategory, locale: Locale): string {
  return (locale !== "pl" ? cat.slugs[locale] : undefined) ?? cat.slug;
}

// `slug` jest kanonicznym (polskim) identyfikatorem posta używanym wewnętrznie —
// adres URL widoczny dla danego języka pochodzi z getLocalizedPost(...).slug.
export function getBlogPost(slug: string): BlogPostMeta | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export function getBlogCategory(slug: string): BlogCategory | null {
  return blogCategories.find((c) => c.slug === slug) ?? null;
}

export function findPostByLocalizedSlug(locale: Locale, slug: string): BlogPostMeta | null {
  return blogPosts.find((p) => getLocalizedPost(p, locale).slug === slug) ?? null;
}

export function findCategoryByLocalizedSlug(locale: Locale, slug: string): BlogCategory | null {
  return blogCategories.find((c) => getLocalizedCategorySlug(c, locale) === slug) ?? null;
}

export const BLOG_POSTS_PER_PAGE = 20;

export function sortPostsByDateDesc(posts: BlogPostMeta[]): BlogPostMeta[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return sortPostsByDateDesc(blogPosts.filter((p) => p.categorySlug === categorySlug));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const post = getBlogPost(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === post.categorySlug)
    .slice(0, limit);
}
