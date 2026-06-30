import { type Locale } from "@/i18n";

export interface BlogCategory {
  slug: string;
  name: string;
  names: Partial<Record<Locale, string>>;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "opinie-google",
    name: "Opinie Google",
    names: { en: "Google Reviews", de: "Google-Bewertungen", it: "Recensioni Google" },
    description: "Strategie zdobywania opinii, regulamin Google i systemy zbierania recenzji.",
  },
  {
    slug: "wizytowka-google",
    name: "Wizytówka Google",
    names: { en: "Google Business Profile", de: "Google Business Profile", it: "Google Business Profile" },
    description: "Optymalizacja profilu Google Business Profile, Local Pack i lokalne SEO.",
  },
  {
    slug: "zarzadzanie-reputacja",
    name: "Zarządzanie reputacją",
    names: { en: "Reputation Management", de: "Reputationsmanagement", it: "Gestione della reputazione" },
    description: "Odpowiadanie na opinie, obsługa negatywnych recenzji i budowanie wizerunku.",
  },
  {
    slug: "marketing-lokalny",
    name: "Marketing lokalny",
    names: { en: "Local Marketing", de: "Lokales Marketing", it: "Marketing locale" },
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
    Record<Locale, { title: string; description: string; category: string; keywords: string[] }>
  >;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "wizytowka-google-moja-firma-jak-zoptymalizowac",
    title: "Wizytówka Google Moja Firma: jak wypełnić i zoptymalizować profil krok po kroku",
    description:
      "Dowiedz się, jak założyć, zweryfikować i zoptymalizować wizytówkę Google Moja Firma. Sprawdź, które sygnały rankingowe mają największy wpływ na pozycję w Google Maps i Local Pack.",
    publishedAt: "2026-06-30",
    author: "Zespół Starlinkee",
    authorBio:
      "Zespół Starlinkee specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
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
    author: "Zespół Starlinkee",
    authorBio:
      "Zespół Starlinkee specjalizuje się w systemach NFC do zbierania opinii Google oraz strategiach pozycjonowania wizytówek dla firm lokalnych — od restauracji po salony i recepcje.",
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
];

export function getLocalizedPost(
  post: BlogPostMeta,
  locale: Locale,
): { title: string; description: string; category: string; keywords: string[] } {
  const loc = locale !== "pl" ? post.localized?.[locale] : undefined;
  return {
    title: loc?.title ?? post.title,
    description: loc?.description ?? post.description,
    category: loc?.category ?? post.category,
    keywords: loc?.keywords ?? post.keywords,
  };
}

export function getCategoryName(cat: BlogCategory, locale: Locale): string {
  return (locale !== "pl" ? cat.names[locale] : undefined) ?? cat.name;
}

export function getBlogPost(slug: string): BlogPostMeta | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export function getBlogCategory(slug: string): BlogCategory | null {
  return blogCategories.find((c) => c.slug === slug) ?? null;
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const post = getBlogPost(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === post.categorySlug)
    .slice(0, limit);
}

export function getEffectiveLocale(slug: string, requested: Locale): Locale {
  const post = getBlogPost(slug);
  if (!post) return "pl";
  return post.availableLocales.includes(requested)
    ? requested
    : (post.availableLocales[0] ?? "pl");
}
