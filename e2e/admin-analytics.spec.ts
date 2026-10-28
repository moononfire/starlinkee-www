import { randomUUID } from "node:crypto";
import { test, expect, type APIRequestContext } from "@playwright/test";
import { checkAdminPassword, createAdminSession, verifyAdminSession } from "../src/lib/adminAuth";

// Serwer e2e ma ANALYTICS_STORE=memory i ANALYTICS_ADMIN_PASSWORD (playwright.config.ts).
// Magazyn jest wspólny dla wszystkich testów, więc każdy test izoluje się własnym utm_campaign
// (dashboard ma filtr "Kampania").
const PASSWORD = "e2e-analytics-password";
const UA_DESKTOP =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
const UA_MOBILE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
const UA_BOT = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

function send(request: APIRequestContext, ua: string, c: string, ev: Record<string, unknown>) {
  return request.post("/api/a", {
    headers: { "content-type": "application/json", "user-agent": ua },
    data: JSON.stringify({ utm_campaign: c, ...ev }),
  });
}

async function stored(request: APIRequestContext, c: string) {
  const { events } = (await (await request.get("/api/a")).json()) as { events: { utm_campaign: string }[] };
  return events.filter((e) => e.utm_campaign === c).length;
}

// Czeka na odpowiedź server action, inaczej kolejna próba może wystartować w trakcie poprzedniej.
async function login(page: import("@playwright/test").Page, password: string) {
  await page.getByPlaceholder("Hasło").fill(password);
  const done = page.waitForResponse((r) => r.request().method() === "POST" && new URL(r.url()).pathname === "/admin/analityka");
  await page.getByRole("button", { name: "Zaloguj" }).click();
  await done;
}

test.describe("/admin/analityka", () => {
  test("po zalogowaniu pokazuje odsłony, unikalnych, CTA i zamówienia; zakres dat działa", async ({ page, request }) => {
    const c = randomUUID();
    await send(request, UA_DESKTOP, c, { type: "pageview", path: "/pl" });
    await send(request, UA_DESKTOP, c, { type: "pageview", path: "/pl" });
    await send(request, UA_MOBILE, c, { type: "pageview", path: "/en" });
    await send(request, UA_DESKTOP, c, { type: "cta_click", path: "/pl", label: "hero" });
    await send(request, UA_DESKTOP, c, { type: "order", path: "/pl/order/success", label: "trial" });
    await expect.poll(() => stored(request, c)).toBe(5);

    await page.goto(`/admin/analityka?campaign=${c}`);
    await login(page, PASSWORD);

    await expect(page.getByTestId("stat-pageviews")).toHaveText("3");
    await expect(page.getByTestId("stat-uniques")).toHaveText("2");
    await expect(page.getByTestId("stat-cta")).toHaveText("1");
    await expect(page.getByTestId("stat-orders")).toHaveText("1");
    await expect(page.getByTestId("top-pages")).toContainText("/pl");
    await expect(page.getByTestId("devices")).toContainText("mobile");
    await expect(page.getByTestId("cta")).toContainText("hero");
    await expect(page.getByTestId("orders")).toContainText("trial");
    await expect(page.getByTestId("funnel")).toContainText("klik CTA 1");

    // hasło analityki nie otwiera /admin/newsletter (osobne ciasteczka)
    await page.goto("/admin/newsletter");
    await expect(page.getByPlaceholder("Hasło")).toBeVisible();

    // zakres dat w przyszłości = zero
    await page.goto(`/admin/analityka?campaign=${c}&from=2099-01-01&to=2099-01-07`);
    await expect(page.getByTestId("stat-pageviews")).toHaveText("0");
    await expect(page.getByTestId("stat-orders")).toHaveText("0");
  });

  test("bez logowania, ze złym hasłem i z hasłem czatu nie widać liczb; bot nie zwiększa licznika", async ({ page, request }) => {
    const c = randomUUID();
    await send(request, UA_BOT, c, { type: "pageview", path: "/pl" });
    await send(request, UA_DESKTOP, c, { type: "pageview", path: "/pl" });
    await expect.poll(() => stored(request, c)).toBe(1);

    await page.goto(`/admin/analityka?campaign=${c}`);
    await expect(page.getByPlaceholder("Hasło")).toBeVisible();
    await expect(page.getByTestId("stat-pageviews")).toHaveCount(0);

    for (const bad of ["zle-haslo", "e2e-admin-password"]) {
      await login(page, bad);
      await expect(page.getByText("Nieprawidłowe hasło.")).toBeVisible();
      await expect(page.getByTestId("stat-pageviews")).toHaveCount(0);
      await expect(page.locator("table")).toHaveCount(0);
    }

    await login(page, PASSWORD);
    await expect(page.getByTestId("stat-pageviews")).toHaveText("1"); // bot odrzucony przy zapisie
  });

  test("noindex w nagłówku strony", async ({ page }) => {
    await page.goto("/admin/analityka");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });
});

test("brak ANALYTICS_ADMIN_PASSWORD = zawsze odmowa (także dla pustego hasła i sfałszowanej sesji)", () => {
  const saved = process.env.ANALYTICS_ADMIN_PASSWORD;
  try {
    for (const missing of [undefined, ""]) {
      if (missing === undefined) delete process.env.ANALYTICS_ADMIN_PASSWORD;
      else process.env.ANALYTICS_ADMIN_PASSWORD = missing;
      expect(checkAdminPassword("", "analytics")).toBe(false);
      expect(checkAdminPassword("undefined", "analytics")).toBe(false);
      expect(createAdminSession("analytics")).toBeNull();
      expect(verifyAdminSession(`${Math.floor(Date.now() / 1000) + 600}.abc`, "analytics")).toBe(false);
    }
    process.env.ANALYTICS_ADMIN_PASSWORD = PASSWORD;
    const ok = createAdminSession("analytics");
    expect(verifyAdminSession(ok, "analytics")).toBe(true);
    expect(verifyAdminSession(ok, "admin")).toBe(false); // sesja analityki nie działa w obszarze admin
  } finally {
    if (saved === undefined) delete process.env.ANALYTICS_ADMIN_PASSWORD;
    else process.env.ANALYTICS_ADMIN_PASSWORD = saved;
  }
});
