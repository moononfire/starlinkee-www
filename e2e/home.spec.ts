import { getTranslations } from "../src/i18n";
import { LOCALES, expect, isMobile, relevantErrors, scrollThrough, test } from "./fixtures";

for (const locale of LOCALES) {
  const t = getTranslations(locale);

  test(`strona główna /${locale} renderuje wszystkie sekcje bez błędów`, async ({ page, consoleErrors }) => {
    const response = await page.goto(`/${locale}`);
    expect(response?.status()).toBe(200);

    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(t.hero.title);

    for (const id of ["how-it-works", "features", "live-demo", "pricing", "contact"]) {
      await expect(page.locator(`section#${id}`)).toBeAttached();
    }
    await expect(page.getByRole("heading", { name: t.finalCta.title })).toBeVisible();
    await expect(page.locator("footer")).toContainText(t.footer.rights);

    await scrollThrough(page);
    await page.waitForLoadState("networkidle");

    const layout = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      brokenImages: [...document.images]
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src),
    }));
    expect(layout.scrollWidth, "poziomy scroll strony").toBeLessThanOrEqual(layout.clientWidth);
    expect(layout.brokenImages, "nieładowane obrazy").toEqual([]);

    // Linki wewnętrzne mają prefiks języka (bez niego crawler ląduje na /pl/...).
    const unprefixed = await page
      .locator("a[href^='/']")
      .evaluateAll((as, loc) =>
        as
          .map((a) => a.getAttribute("href")!)
          .filter((h) => !h.startsWith(`/${loc}`) && !h.startsWith("/api")),
      locale);
    expect(unprefixed, "linki bez prefiksu języka").toEqual([]);

    expect(relevantErrors(consoleErrors), "błędy w konsoli").toEqual([]);
  });
}

test("cennik: przełącznik rocznej płatności zmienia cenę i link zamówienia", async ({ page }) => {
  const t = getTranslations("pl");
  await page.goto("/pl");
  const pricing = page.locator("section#pricing");
  await pricing.scrollIntoViewIfNeeded();

  await expect(pricing).toContainText(`${t.pricing.price} ${t.pricing.currency}`);
  await expect(pricing).toContainText(t.pricing.trialTeaser);

  await pricing.getByRole("button", { name: t.pricing.billingAnnual }).click();
  await expect(pricing).toContainText(`${Number(t.pricing.price) * 10} ${t.pricing.currency}`);
  await expect(pricing).toContainText(t.pricing.periodAnnual);
  await expect(pricing.getByRole("link", { name: t.pricing.cta })).toHaveAttribute(
    "href",
    "/pl/order?billing=annual",
  );
});

test("lightbox: powiększa obraz, zamyka się Esc i klikiem w tło, oddaje fokus", async ({ page }) => {
  const t = getTranslations("pl");
  await page.goto("/pl");

  const trigger = page.getByRole("button", { name: `${t.features.zoom}: ${t.features.linktreeTitle}` });
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: t.features.linktreeTitle });
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("img")).toBeVisible();
  await expect(dialog.getByRole("button", { name: t.features.close })).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");

  // Klik w tło (róg nakładki, poza obrazem) też zamyka.
  await trigger.click();
  await expect(dialog).toBeVisible();
  await dialog.click({ position: { x: 5, y: 5 } });
  await expect(dialog).toBeHidden();

  // Klik w sam obraz nie zamyka.
  await trigger.click();
  await dialog.locator("img").click();
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: t.features.close }).click();
  await expect(dialog).toBeHidden();
});

test("kafel wideo otwiera film z kontrolkami", async ({ page }) => {
  const t = getTranslations("pl");
  await page.goto("/pl");

  const tile = page.getByRole("button", { name: t.features.videoTitle });
  await tile.scrollIntoViewIfNeeded();
  const preview = tile.locator("video");
  await expect(preview).toHaveAttribute("src", "/demo/demo.mp4");

  await tile.click();
  const dialog = page.getByRole("dialog", { name: t.features.videoTitle });
  await expect(dialog.locator("video[controls]")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("przełącznik języka przenosi na tę samą stronę w innym języku", async ({ page }) => {
  const en = getTranslations("en");
  await page.goto("/pl");

  const opener = isMobile(page)
    ? page.getByRole("button", { name: "Menu" })
    : page.getByRole("button", { name: "PL", exact: true });
  await expect(opener).toHaveAttribute("aria-expanded", "false");
  await opener.click();
  await expect(opener).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("button", { name: "EN", exact: true }).click();

  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(en.hero.title);
});

test("widżet czatu: otwiera się, zamyka Esc i chowa przy dole strony", async ({ page }) => {
  const t = getTranslations("pl").chat;
  await page.goto("/pl");

  const trigger = page.getByRole("button", { name: t.openAria });
  await expect(trigger).toBeVisible();
  await expect(trigger).toBeInViewport();

  await trigger.click();
  const chat = page.getByRole("dialog", { name: t.headerName });
  await expect(chat).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(chat).toBeHidden();

  // Przy końcu strony przycisk odjeżdża, żeby nie zasłaniać stopki.
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(trigger).toHaveCSS("opacity", "0");
  await expect(trigger).toHaveAttribute("tabindex", "-1");

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(trigger).toHaveCSS("opacity", "1");
});
