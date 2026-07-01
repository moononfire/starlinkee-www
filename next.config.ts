import type { NextConfig } from "next";
import { LOCALES } from "./src/i18n";
import { blogPosts, getLocalizedPost } from "./src/lib/blog";

const nextConfig: NextConfig = {
  async redirects() {
    // Stare URL-e bloga reużywały polskiego sluga pod każdym językiem (/en/blog/<pl-slug>).
    // Po wprowadzeniu lokalizowanych slugów te adresy mogą być już zaindeksowane —
    // przekierowujemy je na nowy, prawidłowy URL zamiast zwracać 404.
    const blogSlugRedirects = blogPosts.flatMap((post) =>
      LOCALES.filter((locale) => post.availableLocales.includes(locale)).flatMap((locale) => {
        const localizedSlug = getLocalizedPost(post, locale).slug;
        if (localizedSlug === post.slug) return [];
        return [
          {
            source: `/${locale}/blog/${post.slug}`,
            destination: `/${locale}/blog/${localizedSlug}`,
            permanent: true,
          },
        ];
      }),
    );

    return blogSlugRedirects;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
