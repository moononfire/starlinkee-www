import { test, expect } from "@playwright/test";

// Bez fixtures.ts: tu nie mockujemy /api/chat. Serwer dev dostaje CHAT_ADMIN_TOKEN z playwright.config.ts.
const PASSWORD = "e2e-admin-password";

test.describe("admin: logowanie", () => {
  test("newsletter: bez sesji tylko formularz, ze złym hasłem odmowa", async ({ page }) => {
    await page.goto("/admin/newsletter");
    await expect(page.getByPlaceholder("Hasło")).toBeVisible();
    await expect(page.getByText("Newsletter Dashboard")).toHaveCount(0);

    await page.getByPlaceholder("Hasło").fill("zle-haslo");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await expect(page.getByText("Nieprawidłowe hasło.")).toBeVisible();
    await expect(page.getByText("Newsletter Dashboard")).toHaveCount(0);
  });

  test("stary adres ?token= nic nie odblokowuje", async ({ page }) => {
    await page.goto(`/admin/newsletter?token=${PASSWORD}`);
    await expect(page.getByPlaceholder("Hasło")).toBeVisible();
    await expect(page.getByText("Newsletter Dashboard")).toHaveCount(0);
  });

  test("chat: bez sesji formularz, a odpowiedź (API) bez ciasteczka daje 401", async ({ page, request }) => {
    await page.goto("/admin/chat?s=abc");
    await expect(page.getByPlaceholder("Hasło")).toBeVisible();
    await expect(page.getByPlaceholder("Wpisz odpowiedź...")).toHaveCount(0);

    const res = await request.post("/api/chat/reply", { data: { sessionId: "abc", text: "x", token: PASSWORD } });
    expect(res.status()).toBe(401);
  });

  test("dobre hasło: ciasteczko httpOnly, strona chatu odblokowana, token nie ląduje w URL", async ({ page, context }) => {
    await page.goto("/admin/chat?s=abc");
    await page.getByPlaceholder("Hasło").fill(PASSWORD);
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await expect(page.getByPlaceholder("Wpisz odpowiedź...")).toBeVisible();
    expect(page.url()).not.toContain(PASSWORD);

    const cookie = (await context.cookies()).find((c) => c.name === "admin_session");
    expect(cookie?.httpOnly).toBe(true);
    expect(cookie?.sameSite).toBe("Strict");
    expect(cookie?.value).not.toContain(PASSWORD);

    await page.goto("/admin/newsletter");
    await expect(page.getByPlaceholder("Hasło")).toHaveCount(0);
  });
});

test.describe("/api/track/click: open redirect", () => {
  const click = (request: import("@playwright/test").APIRequestContext, url: string) =>
    request.get(`/api/track/click?url=${encodeURIComponent(url)}`, { maxRedirects: 0 });

  test("dozwolony adres: przekierowanie na niego", async ({ request }) => {
    for (const url of ["https://starlinkee.com/pl/order", "https://app.starlinkee.com/x", "https://business.google.com/"]) {
      const res = await click(request, url);
      expect(res.status()).toBeGreaterThanOrEqual(300);
      expect(res.headers().location).toBe(url);
    }
  });

  test("obca domena i podstępne warianty: przekierowanie na stronę główną", async ({ request }) => {
    for (const url of [
      "https://evil.example/phish",
      "http://starlinkee.com/",
      "https://starlinkee.com.evil.example/",
      "https://evil.example/?x=starlinkee.com",
      "https://starlinkee.com@evil.example/",
      "javascript:alert(1)",
      "//evil.example",
    ]) {
      const res = await click(request, url);
      expect(res.status()).toBeGreaterThanOrEqual(300);
      expect(new URL(res.headers().location).pathname).toBe("/");
      expect(new URL(res.headers().location).hostname).not.toContain("evil");
    }
  });

  test("brak url: 400", async ({ request }) => {
    expect((await request.get("/api/track/click", { maxRedirects: 0 })).status()).toBe(400);
  });
});
