import { blogPosts, getLocalizedPost } from "../src/lib/blog";
import { LOCALES, expect, relevantErrors, test } from "./fixtures";

const post = blogPosts.find((p) => p.slug === "tabliczka-nfc-czy-kod-qr-co-wybrac-dla-lokalu")!;

for (const locale of LOCALES) {
  const localized = getLocalizedPost(post, locale);

  test(`artykuł NFC vs QR /${locale}: treść, FAQ JSON-LD i linki z prefiksem języka`, async ({
    page,
    consoleErrors,
  }) => {
    const response = await page.goto(`/${locale}/blog/${localized.slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(localized.title);

    const faq = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) =>
        els.map((e) => JSON.parse(e.textContent ?? "{}")).find((d) => d["@type"] === "FAQPage"),
      );
    expect(faq?.mainEntity?.length).toBeGreaterThan(0);

    const blogLinks = await page
      .locator("article a[href*='/blog/']")
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
    expect(blogLinks.length).toBeGreaterThan(0);
    for (const href of blogLinks) expect(href, "link wewnętrzny bloga").toMatch(new RegExp(`^/${locale}/blog/`));

    expect(relevantErrors(consoleErrors)).toEqual([]);
  });
}

test("nieistniejący artykuł zwraca 404", async ({ page }) => {
  const response = await page.goto("/pl/blog/ten-artykul-nie-istnieje");
  expect(response?.status()).toBe(404);
});
