import type { MetadataRoute } from "next";
import { blogPosts, blogCategories } from "@/lib/blog";

const SITE_URL = "https://starlinkee.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryEntries: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
    url: `${SITE_URL}/blog/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          pl: `${SITE_URL}/?lang=pl`,
          en: `${SITE_URL}/?lang=en`,
          de: `${SITE_URL}/?lang=de`,
          it: `${SITE_URL}/?lang=it`,
        },
      },
    },
    {
      url: `${SITE_URL}/order`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...blogEntries,
  ];
}
