import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategories, getBlogCategory, getPostsByCategory } from "@/lib/blog";

const SITE_URL = "https://starlinkee.pl";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getBlogCategory(category);
  if (!cat) return {};

  const title = `${cat.name} — Blog | Starlinkee`;
  const canonicalUrl = `${SITE_URL}/blog/${category}`;

  return {
    title,
    description: cat.description,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Starlinkee",
      title,
      description: cat.description,
      locale: "pl_PL",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getBlogCategory(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category);
  const canonicalUrl = `${SITE_URL}/blog/${category}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: cat.name, item: canonicalUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cat.name} — Blog Starlinkee`,
    description: cat.description,
    url: canonicalUrl,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
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
                <li><Link href="/" className="hover:text-gray-700">Strona główna</Link></li>
                <li aria-hidden="true" className="text-gray-300">/</li>
                <li><Link href="/blog" className="hover:text-gray-700">Blog</Link></li>
                <li aria-hidden="true" className="text-gray-300">/</li>
                <li className="text-gray-900 font-medium">{cat.name}</li>
              </ol>
            </nav>

            <div className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              Kategoria
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{cat.name}</h1>
            <p className="text-lg text-gray-600">{cat.description}</p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">Wkrótce pojawią się artykuły w tej kategorii.</p>
              <Link href="/blog" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
                ← Wróć do bloga
              </Link>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Czytaj dalej <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
