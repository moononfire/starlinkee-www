import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/blog";

const SITE_URL = "https://starlinkee.pl";

const BLOG_DESCRIPTION =
  "Praktyczne poradniki o zdobywaniu opinii w Google, pozycjonowaniu wizytówki i nowoczesnych systemach NFC dla restauracji i lokali.";

export const metadata: Metadata = {
  title: "Blog — Poradniki o opiniach Google i systemach NFC | Starlinkee",
  description: BLOG_DESCRIPTION,
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
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Starlinkee",
    title: "Blog — Poradniki o opiniach Google i systemach NFC | Starlinkee",
    description: BLOG_DESCRIPTION,
    locale: "pl_PL",
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
    title: "Blog — Poradniki o opiniach Google i systemach NFC | Starlinkee",
    description: BLOG_DESCRIPTION,
    images: ["/hero.png"],
  },
};

export default function BlogPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog Starlinkee",
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      description: post.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">
                /
              </li>
              <li className="text-gray-900 font-medium">Blog</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Poradniki o opiniach Google, pozycjonowaniu wizytówki i systemach NFC dla firm.
          </p>

          {/* Kategorie */}
          <nav aria-label="Kategorie bloga" className="mt-8 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}`}
                className="text-sm font-medium text-gray-600 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-full transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </header>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Link
                  href={`/blog/${post.categorySlug}`}
                  className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  {post.category}
                </Link>
                <time
                  dateTime={post.publishedAt}
                  className="text-sm text-gray-500"
                >
                  {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Czytaj dalej
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
