import type { MetadataRoute } from "next";
import { blogPosts, blogCategories } from "@/lib/blog";
import { LOCALES, defaultLocale, type Locale } from "@/i18n";

const SITE_URL = "https://starlinkee.pl";

function languageAlternates(path: string, locales: readonly Locale[] = LOCALES) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languageAlternates("") },
  }));

  const orderEntries: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}/order`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: { languages: languageAlternates("/order") },
  }));

  const blogIndexEntries: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: { languages: languageAlternates("/blog") },
  }));

  const categoryEntries: MetadataRoute.Sitemap = blogCategories.flatMap((cat) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}/blog/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: { languages: languageAlternates(`/blog/${cat.slug}`) },
    })),
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.flatMap((post) =>
    post.availableLocales.map((locale) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: languageAlternates(`/blog/${post.slug}`, post.availableLocales) },
    })),
  );

  const legalEntries: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    ["regulamin", "polityka-prywatnosci", "polityka-cookies"].map((slug) => ({
      url: `${SITE_URL}/${locale}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    })),
  );

  return [...homeEntries, ...orderEntries, ...blogIndexEntries, ...categoryEntries, ...blogEntries, ...legalEntries];
}
