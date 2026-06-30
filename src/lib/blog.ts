import { type Locale } from "@/i18n";

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "opinie-google",
    name: "Opinie Google",
    description: "Strategie zdobywania opinii, regulamin Google i systemy zbierania recenzji.",
  },
  {
    slug: "wizytowka-google",
    name: "Wizytówka Google",
    description: "Optymalizacja profilu Google Business Profile, Local Pack i lokalne SEO.",
  },
  {
    slug: "zarzadzanie-reputacja",
    name: "Zarządzanie reputacją",
    description: "Odpowiadanie na opinie, obsługa negatywnych recenzji i budowanie wizerunku.",
  },
  {
    slug: "marketing-lokalny",
    name: "Marketing lokalny",
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
}

export const blogPosts: BlogPostMeta[] = [
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
    availableLocales: ["pl"],
  },
];

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
