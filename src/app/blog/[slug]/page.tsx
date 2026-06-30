import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getEffectiveLocale, getRelatedPosts, blogPosts } from "@/lib/blog";
import { type Locale, defaultLocale } from "@/i18n";
import BlogImage from "@/components/blog/BlogImage";
import JakSzybkoZdobycOpinie from "@/components/blog/articles/JakSzybkoZdobycOpinie";

const SITE_URL = "https://starlinkee.pl";
const LOCALES: Locale[] = ["pl", "en", "de", "it"];

const articleComponents: Record<string, React.ComponentType> = {
  "jak-szybko-zdobyc-opinie-w-google": JakSzybkoZdobycOpinie,
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;

  const post = getBlogPost(slug);
  if (!post) return {};

  const requestedLocale = LOCALES.includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  const effectiveLocale = getEffectiveLocale(slug, requestedLocale);
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  const hreflangAlternates: Record<string, string> = {
    pl: canonicalUrl,
    "x-default": canonicalUrl,
  };

  return {
    title: `${post.title} | Starlinkee`,
    description: post.description,
    keywords: post.keywords,
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
      languages: hreflangAlternates,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      authors: [post.author],
      locale: effectiveLocale === "pl" ? "pl_PL" : effectiveLocale,
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang } = await searchParams;

  const post = getBlogPost(slug);
  if (!post) notFound();

  const requestedLocale = LOCALES.includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  void getEffectiveLocale(slug, requestedLocale);

  const ArticleContent = articleComponents[slug];
  if (!ArticleContent) notFound();

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const relatedPosts = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Starlinkee",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${post.ogImage}`,
      width: 1200,
      height: 675,
    },
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    inLanguage: "pl-PL",
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-white overflow-x-hidden">

        {/* Breadcrumb — wąski */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-700">
                  {post.category}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs">{post.title}</li>
            </ol>
          </nav>
        </div>

        <article>
          {/* Nagłówek artykułu + hero — wąski */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-0">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/blog/${post.categorySlug}`}
                  className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  {post.category}
                </Link>
                <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-sm text-gray-500">
                Autor:{" "}
                <span className="font-medium text-gray-700">{post.author}</span>
              </p>
            </header>

            <BlogImage
              src={post.ogImage}
              alt="Klient zbliża smartfon do stojaka NFC, aby wystawić opinię Google w kawiarni"
              priority
            />
          </div>

          {/* Treść artykułu — zarządza własną szerokością wewnętrznie */}
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

          {/* CTA — pełna szerokość */}
          <aside className="mt-14 bg-gradient-to-br from-blue-600 to-blue-800 py-14 text-white text-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
                Starlinkee
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Gotowy na więcej opinii w Google?
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Tabliczka NFC, która sprawia, że klient wystawia opinię jednym dotknięciem —
                bez aplikacji, bez logowania.
              </p>
              <Link
                href="/order"
                className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg"
              >
                Zamów tabliczkę NFC →
              </Link>
            </div>
          </aside>

          {/* Powiązane artykuły */}
          {relatedPosts.length > 0 && (
            <section aria-label="Powiązane artykuły" className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Powiązane artykuły</h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Link
                        href={`/blog/${related.categorySlug}`}
                        className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-0.5 rounded-full transition-colors"
                      >
                        {related.category}
                      </Link>
                      <time dateTime={related.publishedAt} className="text-xs text-gray-400">
                        {new Date(related.publishedAt).toLocaleDateString("pl-PL", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      <Link href={`/blog/${related.slug}`} className="hover:text-blue-600 transition-colors">
                        {related.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{related.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Dolny margines */}
          <div className="h-16" />
        </article>
      </main>
    </>
  );
}
