import type { Metadata } from "next";
import Link from "next/link";
import OpenLinksInNewTab from "@/components/blog/OpenLinksInNewTab";
import {
  blogPosts,
  blogCategories,
  getLocalizedPost,
  getCategoryName,
  getLocalizedCategorySlug,
  getBlogCategory,
  sortPostsByDateDesc,
  BLOG_POSTS_PER_PAGE,
} from "@/lib/blog";
import { LOCALES, type Locale } from "@/i18n";
import { resolveLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";

const BLOG_DESCRIPTIONS: Record<Locale, string> = {
  pl: "Praktyczne poradniki o zdobywaniu opinii w Google, pozycjonowaniu wizytówki i nowoczesnych systemach NFC dla restauracji i lokali.",
  en: "Practical guides on getting Google reviews, optimising your Business Profile, and modern NFC systems for restaurants and local businesses.",
  de: "Praktische Ratgeber zum Sammeln von Google-Bewertungen, zur Optimierung des Business-Profils und zu modernen NFC-Systemen für Restaurants und lokale Unternehmen.",
  it: "Guide pratiche per ottenere recensioni su Google, ottimizzare il profilo aziendale e i moderni sistemi NFC per ristoranti e attività locali.",
};

const TITLES: Record<Locale, string> = {
  pl: "Blog — Poradniki o opiniach Google i systemach NFC | Starlinkee",
  en: "Blog — Guides on Google Reviews and NFC Systems | Starlinkee",
  de: "Blog — Ratgeber zu Google-Bewertungen und NFC-Systemen | Starlinkee",
  it: "Blog — Guide su recensioni Google e sistemi NFC | Starlinkee",
};

const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  it: "it_IT",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const canonicalUrl = `${SITE_URL}/${locale}/blog`;

  return {
    title: TITLES[locale],
    description: BLOG_DESCRIPTIONS[locale],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pl: `${SITE_URL}/pl/blog`,
        en: `${SITE_URL}/en/blog`,
        de: `${SITE_URL}/de/blog`,
        it: `${SITE_URL}/it/blog`,
        "x-default": `${SITE_URL}/pl/blog`,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title: TITLES[locale],
      description: BLOG_DESCRIPTIONS[locale],
      locale: ogLocales[locale],
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 675,
          alt: "Blog Starlinkee — poradniki o opiniach Google i systemach NFC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLES[locale],
      description: BLOG_DESCRIPTIONS[locale],
      images: ["/hero.png"],
    },
  };
}

const ui = {
  pl: {
    home: "Strona główna",
    heading: "Blog",
    subheading: "Poradniki o opiniach Google, pozycjonowaniu wizytówki i systemach NFC dla firm.",
    readMore: "Czytaj dalej",
    categories: "Kategorie bloga",
  },
  en: {
    home: "Home",
    heading: "Blog",
    subheading: "Guides on Google reviews, Business Profile optimisation and NFC systems for local businesses.",
    readMore: "Read more",
    categories: "Blog categories",
  },
  de: {
    home: "Startseite",
    heading: "Blog",
    subheading: "Ratgeber zu Google-Bewertungen, Business-Profil-Optimierung und NFC-Systemen für lokale Unternehmen.",
    readMore: "Weiterlesen",
    categories: "Blog-Kategorien",
  },
  it: {
    home: "Home",
    heading: "Blog",
    subheading: "Guide sulle recensioni Google, l'ottimizzazione del profilo aziendale e i sistemi NFC per le attività locali.",
    readMore: "Leggi di più",
    categories: "Categorie del blog",
  },
} satisfies Record<Locale, { home: string; heading: string; subheading: string; readMore: string; categories: string }>;

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = ui[locale];
  const canonicalUrl = `${SITE_URL}/${locale}/blog`;
  const posts = sortPostsByDateDesc(blogPosts).slice(0, BLOG_POSTS_PER_PAGE);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog Starlinkee",
    description: BLOG_DESCRIPTIONS[locale],
    url: canonicalUrl,
    itemListElement: posts.map((post, index) => {
      const locPost = getLocalizedPost(post, locale);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: locPost.title,
        url: `${SITE_URL}/${locale}/blog/${locPost.slug}`,
        description: locPost.description,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="min-h-screen bg-white">
       <OpenLinksInNewTab>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href={`/${locale}`} className="hover:text-gray-700">
                    {t.home}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gray-300">/</li>
                <li className="text-gray-900 font-medium">{t.heading}</li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.heading}</h1>
            <p className="text-lg text-gray-600">{t.subheading}</p>

            <nav aria-label={t.categories} className="mt-8 flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${locale}/blog/${getLocalizedCategorySlug(cat, locale)}`}
                  className="text-sm font-medium text-gray-600 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-full transition-colors"
                >
                  {getCategoryName(cat, locale)}
                </Link>
              ))}
            </nav>
          </header>

          <div className="grid gap-8">
            {posts.map((post) => {
              const locPost = getLocalizedPost(post, locale);
              const cat = getBlogCategory(post.categorySlug);
              const catHref = cat ? getLocalizedCategorySlug(cat, locale) : post.categorySlug;
              return (
                <article
                  key={post.slug}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Link
                      href={`/${locale}/blog/${catHref}`}
                      className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                    >
                      {locPost.category}
                    </Link>
                    <time
                      dateTime={post.publishedAt}
                      className="text-sm text-gray-500"
                    >
                      {new Date(post.publishedAt).toLocaleDateString(
                        locale === "pl" ? "pl-PL" : locale === "de" ? "de-DE" : locale === "it" ? "it-IT" : "en-GB",
                        { day: "2-digit", month: "long", year: "numeric" },
                      )}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link
                      href={`/${locale}/blog/${locPost.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {locPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{locPost.description}</p>
                  <Link
                    href={`/${locale}/blog/${locPost.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    {t.readMore}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
       </OpenLinksInNewTab>
      </main>
    </>
  );
}
