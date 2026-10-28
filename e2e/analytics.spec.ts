import { randomUUID } from "node:crypto";
import type { APIRequestContext } from "@playwright/test";
import { test, expect } from "./fixtures";

// Serwer e2e ma ANALYTICS_STORE=memory (playwright.config.ts), więc GET /api/a zwraca zebrane zdarzenia.
// Testy współdzielą magazyn, dlatego każdy filtruje po własnym utm_campaign.
const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

type Ev = Record<string, string | null>;

async function eventsFor(request: APIRequestContext, campaign: string): Promise<Ev[]> {
  const res = await request.get("/api/a");
  const { events } = (await res.json()) as { events: Ev[] };
  return events.filter((e) => e.utm_campaign === campaign);
}

async function waitForEvent(request: APIRequestContext, campaign: string, match: (e: Ev) => boolean) {
  let found: Ev | undefined;
  await expect
    .poll(async () => (found = (await eventsFor(request, campaign)).find(match)), { timeout: 15_000 })
    .toBeTruthy();
  return found!;
}

test.describe("analityka: zbieranie", () => {
  test("odsłona niesie ścieżkę, język i utm", async ({ page, request }) => {
    const c = randomUUID();
    const beacon = page.waitForRequest((r) => r.url().endsWith("/api/a") && r.method() === "POST");
    await page.goto(`/pl?utm_source=fb&utm_campaign=${c}`);
    await beacon;
    const e = await waitForEvent(request, c, (x) => x.type === "pageview");
    expect(e).toMatchObject({ path: "/pl", locale: "pl", utm_source: "fb" });
  });

  test("klik w CTA w hero wysyła cta_click z label=hero", async ({ page, request }) => {
    const c = randomUUID();
    await page.goto(`/pl?utm_campaign=${c}`);
    await page.locator('[data-track="hero"]').first().click();
    const e = await waitForEvent(request, c, (x) => x.type === "cta_click");
    expect(e.label).toBe("hero");
  });

  test("strona sukcesu triala wysyła order z label=trial", async ({ page, request }) => {
    const c = randomUUID();
    await page.goto(`/pl/order/success?mode=trial&utm_campaign=${c}`);
    const e = await waitForEvent(request, c, (x) => x.type === "order");
    expect(e).toMatchObject({ label: "trial", locale: "pl", path: "/pl/order/success" });
  });
});

test.describe("analityka: odrzucanie i prywatność", () => {
  const valid = (c: string, over: Record<string, unknown> = {}) =>
    JSON.stringify({ type: "pageview", path: "/pl", utm_campaign: c, ...over });
  const post = (request: APIRequestContext, data: string, headers: Record<string, string> = {}) =>
    request.post("/api/a", { data, headers: { "content-type": "application/json", "user-agent": CHROME_UA, ...headers } });

  test("bot, zły typ, zła ścieżka, obcy origin i za duże body: 204, ale nic się nie zapisuje", async ({ request }) => {
    const c = randomUUID();
    const rejected = [
      await post(request, valid(c), { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }),
      await post(request, valid(c, { type: "hack" })),
      await post(request, valid(c, { path: "/evil" })),
      await post(request, valid(c), { origin: "https://evil.example" }),
      await post(request, valid(c, { label: "x".repeat(3000) })),
    ];
    for (const res of rejected) expect(res.status()).toBe(204);

    // kontrola: poprawne żądanie z tym samym znacznikiem jest zapisane (więc filtr nie jest ślepy)
    expect((await post(request, valid(c))).status()).toBe(204);
    await waitForEvent(request, c, () => true);
    expect(await eventsFor(request, c)).toHaveLength(1);
  });

  test("zapisane zdarzenie nie zawiera IP ani UA", async ({ request }) => {
    const c = randomUUID();
    await post(request, valid(c), { "x-forwarded-for": "203.0.113.9" });
    const e = await waitForEvent(request, c, () => true);
    const raw = JSON.stringify(e);
    expect(raw).not.toContain("203.0.113.9");
    expect(raw).not.toContain("Mozilla");
    expect(e.visitor).toMatch(/^[0-9a-f]{16}$/);
    expect(Object.keys(e).sort()).toEqual(
      ["device", "label", "locale", "path", "referrer_host", "ts", "type", "utm_campaign", "utm_medium", "utm_source", "visitor"],
    );
  });
});
