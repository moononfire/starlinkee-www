import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostsByCategory,
  getRelatedPosts,
  getLocalizedPost,
  getCategoryName,
  getLocalizedCategorySlug,
  getBlogCategory,
  findPostByLocalizedSlug,
  findCategoryByLocalizedSlug,
  blogPosts,
  blogCategories,
} from "@/lib/blog";
import { LOCALES, type Locale } from "@/i18n";
import { resolveLocale } from "@/lib/locale";
import BlogImage from "@/components/blog/BlogImage";
import JakSzybkoZdobycOpinie from "@/components/blog/articles/JakSzybkoZdobycOpinie";
import JakSzybkoZdobycOpinieEn from "@/components/blog/articles/JakSzybkoZdobycOpinieEn";
import JakSzybkoZdobycOpinieDe from "@/components/blog/articles/JakSzybkoZdobycOpinieDe";
import JakSzybkoZdobycOpinieIt from "@/components/blog/articles/JakSzybkoZdobycOpinieIt";
import WizytowkaGoogleMojaFirma from "@/components/blog/articles/WizytowkaGoogleMojaFirma";
import WizytowkaGoogleMojaFirmaEn from "@/components/blog/articles/WizytowkaGoogleMojaFirmaEn";
import WizytowkaGoogleMojaFirmaDe from "@/components/blog/articles/WizytowkaGoogleMojaFirmaDe";
import WizytowkaGoogleMojaFirmaIt from "@/components/blog/articles/WizytowkaGoogleMojaFirmaIt";

const SITE_URL = "https://starlinkee.com";

// Klucz to kanoniczny (polski) `post.slug` — niezależny od adresu URL widocznego w danym języku.
const articleComponents: Record<string, Partial<Record<Locale, React.ComponentType>>> = {
  "jak-szybko-zdobyc-opinie-w-google": {
    pl: JakSzybkoZdobycOpinie,
    en: JakSzybkoZdobycOpinieEn,
    de: JakSzybkoZdobycOpinieDe,
    it: JakSzybkoZdobycOpinieIt,
  },
  "wizytowka-google-moja-firma-jak-zoptymalizowac": {
    pl: WizytowkaGoogleMojaFirma,
    en: WizytowkaGoogleMojaFirmaEn,
    de: WizytowkaGoogleMojaFirmaDe,
    it: WizytowkaGoogleMojaFirmaIt,
  },
};

const dateLocales: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-GB",
  de: "de-DE",
  it: "it-IT",
};

const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  it: "it_IT",
};

const slugUi = {
  pl: {
    home: "Strona główna",
    readMore: "Czytaj dalej",
    category: "Kategoria",
    soon: "Wkrótce pojawią się artykuły w tej kategorii.",
    backToBlog: "← Wróć do bloga",
    author: "Autor",
    relatedPosts: "Powiązane artykuły",
    ctaHeading: "Gotowy na więcej opinii w Google?",
    ctaBody: "Tabliczka NFC, która sprawia, że klient wystawia opinię jednym dotknięciem — bez aplikacji, bez logowania.",
    ctaButton: "Zamów tabliczkę NFC →",
  },
  en: {
    home: "Home",
    readMore: "Read more",
    category: "Category",
    soon: "Articles in this category are coming soon.",
    backToBlog: "← Back to blog",
    author: "Author",
    relatedPosts: "Related articles",
    ctaHeading: "Ready for more Google reviews?",
    ctaBody: "An NFC stand that lets customers leave a review with a single tap — no app, no login.",
    ctaButton: "Order your NFC stand →",
  },
  de: {
    home: "Startseite",
    readMore: "Weiterlesen",
    category: "Kategorie",
    soon: "Artikel in dieser Kategorie erscheinen in Kürze.",
    backToBlog: "← Zurück zum Blog",
    author: "Autor",
    relatedPosts: "Ähnliche Artikel",
    ctaHeading: "Bereit für mehr Google-Bewertungen?",
    ctaBody: "Ein NFC-Aufsteller, mit dem Gäste eine Bewertung mit einem einzigen Antippen hinterlassen — ohne App, ohne Anmeldung.",
    ctaButton: "NFC-Aufsteller bestellen →",
  },
  it: {
    home: "Home",
    readMore: "Leggi di più",
    category: "Categoria",
    soon: "Gli articoli in questa categoria saranno disponibili a breve.",
    backToBlog: "← Torna al blog",
    author: "Autore",
    relatedPosts: "Articoli correlati",
    ctaHeading: "Pronto per più recensioni su Google?",
    ctaBody: "Un supporto NFC che permette ai clienti di lasciare una recensione con un solo tocco — senza app, senza registrazione.",
    ctaButton: "Ordina il supporto NFC →",
  },
} satisfies Record<Locale, Record<string, string>>;

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) => {
    const postSlugs = blogPosts
      .filter((post) => post.availableLocales.includes(locale))
      .map((post) => ({ locale, slug: getLocalizedPost(post, locale).slug }));
    const categorySlugs = blogCategories.map((cat) => ({
      locale,
      slug: getLocalizedCategorySlug(cat, locale),
    }));
    return [...postSlugs, ...categorySlugs];
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}`;

  const cat = findCategoryByLocalizedSlug(locale, slug);
  if (cat) {
    const catName = getCategoryName(cat, locale);
    return {
      title: `${catName} — Blog | Starlinkee`,
      description: cat.description,
      alternates: { canonical: canonicalUrl },
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
      openGraph: { type: "website", url: canonicalUrl, siteName: "Starlinkee", title: `${catName} — Blog | Starlinkee`, description: cat.description, locale: ogLocales[locale] },
    };
  }

  const post = findPostByLocalizedSlug(locale, slug);
  if (!post) return {};

  const locPost = getLocalizedPost(post, locale);

  const languageAlternates: Record<string, string> = {};
  for (const loc of post.availableLocales) {
    languageAlternates[loc] = `${SITE_URL}/${loc}/blog/${getLocalizedPost(post, loc).slug}`;
  }
  languageAlternates["x-default"] = `${SITE_URL}/pl/blog/${post.slug}`;

  return {
    title: `${locPost.title} | Starlinkee`,
    description: locPost.description,
    keywords: locPost.keywords,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    alternates: { canonical: canonicalUrl, languages: languageAlternates },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title: locPost.title,
      description: locPost.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      authors: [post.author],
      locale: ogLocales[locale],
      images: [{ url: post.ogImage, width: 1200, height: 675, alt: locPost.title }],
    },
    twitter: { card: "summary_large_image", title: locPost.title, description: locPost.description, images: [post.ogImage] },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug, locale: rawLocale } = await params;
  const requestedLocale = resolveLocale(rawLocale);
  const canonicalUrl = `${SITE_URL}/${requestedLocale}/blog/${slug}`;

  // ── WIDOK KATEGORII ──────────────────────────────────────────────
  const cat = findCategoryByLocalizedSlug(requestedLocale, slug);
  if (cat) {
    const posts = getPostsByCategory(cat.slug);
    const ui = slugUi[requestedLocale];
    const catName = getCategoryName(cat, requestedLocale);

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: `${SITE_URL}/${requestedLocale}` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/${requestedLocale}/blog` },
        { "@type": "ListItem", position: 3, name: catName, item: canonicalUrl },
      ],
    };
    const itemListJsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${catName} — Blog Starlinkee`,
      description: cat.description,
      url: canonicalUrl,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${SITE_URL}/${requestedLocale}/blog/${getLocalizedPost(post, requestedLocale).slug}`,
      })),
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
        <main className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                  <li><Link href={`/${requestedLocale}`} className="hover:text-gray-700">{ui.home}</Link></li>
                  <li aria-hidden="true" className="text-gray-300">/</li>
                  <li><Link href={`/${requestedLocale}/blog`} className="hover:text-gray-700">Blog</Link></li>
                  <li aria-hidden="true" className="text-gray-300">/</li>
                  <li className="text-gray-900 font-medium">{catName}</li>
                </ol>
              </nav>
              <div className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">{ui.category}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{catName}</h1>
              <p className="text-lg text-gray-600">{cat.description}</p>
            </header>
            {posts.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg">{ui.soon}</p>
                <Link href={`/${requestedLocale}/blog`} className="mt-4 inline-block text-sm text-blue-600 hover:underline">{ui.backToBlog}</Link>
              </div>
            ) : (
              <div className="grid gap-8">
                {posts.map((post) => {
                  const locPost = getLocalizedPost(post, requestedLocale);
                  return (
                    <article key={post.slug} className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{locPost.category}</span>
                        <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString(dateLocales[requestedLocale], { day: "2-digit", month: "long", year: "numeric" })}
                        </time>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        <Link href={`/${requestedLocale}/blog/${locPost.slug}`} className="hover:text-blue-600 transition-colors">{locPost.title}</Link>
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">{locPost.description}</p>
                      <Link href={`/${requestedLocale}/blog/${locPost.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                        {ui.readMore} <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </>
    );
  }

  // ── WIDOK ARTYKUŁU ───────────────────────────────────────────────
  const post = findPostByLocalizedSlug(requestedLocale, slug);
  if (!post) notFound();

  const ui = slugUi[requestedLocale];
  const locPost = getLocalizedPost(post, requestedLocale);
  const postCategory = getBlogCategory(post.categorySlug);
  const categoryHref = postCategory ? getLocalizedCategorySlug(postCategory, requestedLocale) : post.categorySlug;

  const ArticleContent = articleComponents[post.slug]?.[requestedLocale];
  if (!ArticleContent) notFound();

  const relatedPosts = getRelatedPosts(post.slug);

  const inLanguage = dateLocales[requestedLocale];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: locPost.title,
    description: locPost.description,
    keywords: locPost.keywords.join(", "),
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: "Starlinkee", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/hero.png`, width: 1200, height: 675 } },
    image: { "@type": "ImageObject", url: `${SITE_URL}${post.ogImage}`, width: 1200, height: 675 },
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    inLanguage,
    articleSection: locPost.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: `${SITE_URL}/${requestedLocale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/${requestedLocale}/blog` },
      { "@type": "ListItem", position: 3, name: locPost.category, item: `${SITE_URL}/${requestedLocale}/blog/${categoryHref}` },
      { "@type": "ListItem", position: 4, name: locPost.title, item: canonicalUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-white overflow-x-hidden">

        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li><Link href={`/${requestedLocale}`} className="hover:text-gray-700">{ui.home}</Link></li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li><Link href={`/${requestedLocale}/blog`} className="hover:text-gray-700">Blog</Link></li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li>
                <Link href={`/${requestedLocale}/blog/${categoryHref}`} className="hover:text-gray-700">
                  {locPost.category}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs">{locPost.title}</li>
            </ol>
          </nav>
        </div>

        <article>
          {/* Nagłówek + hero */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-0">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/${requestedLocale}/blog/${categoryHref}`}
                  className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  {locPost.category}
                </Link>
                <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString(dateLocales[requestedLocale], { day: "2-digit", month: "long", year: "numeric" })}
                </time>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{locPost.title}</h1>
              <p className="text-sm text-gray-500">{ui.author}: <span className="font-medium text-gray-700">{post.author}</span></p>
            </header>
            <BlogImage src={post.ogImage} alt={locPost.title} priority />
          </div>

          {/* Treść artykułu */}
          <div className="mt-8">
            <ArticleContent />
          </div>

          {/* Bio autora */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-base">S</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">Starlinkee</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <aside className="mt-14 bg-gradient-to-br from-blue-600 to-blue-800 py-14 text-white text-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Starlinkee</p>
              <h2 className="text-3xl font-bold mb-4">{ui.ctaHeading}</h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">{ui.ctaBody}</p>
              <Link href={`/${requestedLocale}/order`} className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg">
                {ui.ctaButton}
              </Link>
            </div>
          </aside>

          {/* Powiązane artykuły */}
          {relatedPosts.length > 0 && (
            <section aria-label={ui.relatedPosts} className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{ui.relatedPosts}</h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => {
                  const locRelated = getLocalizedPost(related, requestedLocale);
                  const relatedCat = getBlogCategory(related.categorySlug);
                  const relatedCategoryHref = relatedCat ? getLocalizedCategorySlug(relatedCat, requestedLocale) : related.categorySlug;
                  return (
                    <article key={related.slug} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Link href={`/${requestedLocale}/blog/${relatedCategoryHref}`} className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-0.5 rounded-full transition-colors">
                          {locRelated.category}
                        </Link>
                        <time dateTime={related.publishedAt} className="text-xs text-gray-400">
                          {new Date(related.publishedAt).toLocaleDateString(dateLocales[requestedLocale], { day: "2-digit", month: "long", year: "numeric" })}
                        </time>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <Link href={`/${requestedLocale}/blog/${locRelated.slug}`} className="hover:text-blue-600 transition-colors">{locRelated.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{locRelated.description}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <div className="h-16" />
        </article>
      </main>
    </>
  );
}
