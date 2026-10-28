import { test as base, expect, type Page } from "@playwright/test";

export const LOCALES = ["pl", "en", "de", "it"] as const;

// Zewnętrzne zasoby, których błędy nie zależą od tego repo (analityka, iframe demo z app.starlinkee.com,
// który na localhost blokuje frame-ancestors).
const IGNORED_ERRORS = [/pulse\.viktorbobinski\.com/, /app\.starlinkee\.com/, /frame-ancestors/];

type Fixtures = { consoleErrors: string[] };

export const test = base.extend<Fixtures>({
  page: async ({ page }, provide) => {
    // Zgoda na cookies zapisana z góry, żeby baner nie zasłaniał strony.
    await page.addInitScript(() => {
      localStorage.setItem(
        "cookie_consent",
        JSON.stringify({ analytics: false, marketing: false, decidedAt: new Date().toISOString() }),
      );
    });
    // Czat odpytuje Redis, którego lokalnie nie ma; testy nie zależą od backendu czatu.
    await page.route("**/api/chat/**", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: '{"messages":[]}' }),
    );
    await provide(page);
  },
  consoleErrors: async ({ page }, provide) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("pageerror", (e) => errors.push(e.message));
    await provide(errors);
  },
});

export function relevantErrors(errors: string[]) {
  return errors.filter((e) => !IGNORED_ERRORS.some((re) => re.test(e)));
}

export function isMobile(page: Page) {
  return (page.viewportSize()?.width ?? 1440) < 768;
}

export async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
  });
}

export { expect };
