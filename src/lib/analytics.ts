import { createHmac } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { userAgent } from "next/server";

export const EVENT_TYPES = ["pageview", "cta_click", "order"] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export interface AnalyticsEvent {
  ts: string;
  type: EventType;
  path: string;
  locale: string;
  referrer_host: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  device: string;
  label: string | null;
  visitor: string;
}

const MAX_BODY = 2048;
const PATH_RE = /^\/(pl|en|de|it)(\/[A-Za-z0-9_\-./]*)?$/;
const HOST_RE = /^[a-z0-9.-]{1,100}$/;
const LABEL_RE = /^[a-z0-9-]{1,40}$/;

function clean(v: unknown, max = 100): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().slice(0, max);
  return s.length > 0 ? s : null;
}

// Jedyne miejsce, które widzi IP: tylko do dziennego hasha, nigdzie nie zapisywane ani logowane.
function visitorHash(headers: Headers, ua: string, salt: string): string {
  const ip = (headers.get("x-forwarded-for")?.split(",")[0] ?? headers.get("x-real-ip") ?? "").trim();
  const day = new Date().toISOString().slice(0, 10);
  return createHmac("sha256", salt).update(`${day}|${ip}|${ua}`).digest("hex").slice(0, 16);
}

/** Zwraca zdarzenie do zapisu albo null (bot, zły origin, za duże/niepoprawne body, brak soli). */
export function buildEvent(headers: Headers, rawBody: string): AnalyticsEvent | null {
  const salt = process.env.ANALYTICS_SALT;
  if (!salt) return null;
  if (rawBody.length > MAX_BODY) return null;

  const ua = headers.get("user-agent") ?? "";
  if (!ua || userAgent({ headers }).isBot) return null;

  const origin = headers.get("origin");
  if (origin) {
    const host = headers.get("x-forwarded-host") ?? headers.get("host");
    try {
      if (new URL(origin).host !== host) return null;
    } catch {
      return null;
    }
  }

  let b: Record<string, unknown>;
  try {
    const parsed = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object") return null;
    b = parsed as Record<string, unknown>;
  } catch {
    return null;
  }

  const type = b.type;
  if (!EVENT_TYPES.includes(type as EventType)) return null;
  const path = typeof b.path === "string" ? b.path.split(/[?#]/)[0].slice(0, 200) : "";
  const m = PATH_RE.exec(path);
  if (!m) return null;

  const refRaw = clean(b.referrer_host)?.toLowerCase() ?? null;
  const labelRaw = clean(b.label, 40);

  return {
    ts: new Date().toISOString(),
    type: type as EventType,
    path,
    locale: m[1],
    referrer_host: refRaw && HOST_RE.test(refRaw) ? refRaw : null,
    utm_source: clean(b.utm_source),
    utm_medium: clean(b.utm_medium),
    utm_campaign: clean(b.utm_campaign),
    device: userAgent({ headers }).device.type ?? "desktop",
    label: labelRaw && LABEL_RE.test(labelRaw) ? labelRaw : null,
    visitor: visitorHash(headers, ua, salt),
  };
}

// ─── Store: Neon (produkcja) albo pamięć procesu (ANALYTICS_STORE=memory, tylko e2e) ───

const isMemory = () => process.env.ANALYTICS_STORE === "memory";

const g = globalThis as unknown as { __analyticsMemory?: AnalyticsEvent[] };
export function memoryEvents(): AnalyticsEvent[] {
  return (g.__analyticsMemory ??= []);
}

export function memoryStoreEnabled(): boolean {
  return isMemory();
}

export async function recordEvent(e: AnalyticsEvent): Promise<void> {
  if (isMemory()) {
    memoryEvents().push(e);
    return;
  }
  if (!process.env.DATABASE_URL) return;
  const sql = neon(process.env.DATABASE_URL);
  await sql`
    INSERT INTO analytics_events
      (ts, type, path, locale, referrer_host, utm_source, utm_medium, utm_campaign, device, label, visitor)
    VALUES
      (${e.ts}, ${e.type}, ${e.path}, ${e.locale}, ${e.referrer_host}, ${e.utm_source}, ${e.utm_medium},
       ${e.utm_campaign}, ${e.device}, ${e.label}, ${e.visitor})`;
}

// ─── Odczyt dla dashboardu (/admin/analityka) ───────────────────────────────

export interface Count {
  key: string;
  count: number;
}

export interface Stats {
  pageviews: number;
  /** Suma unikalnych dziennie (ta sama osoba w dwóch dniach liczy się dwa razy). */
  uniques: number;
  daily: { day: string; pageviews: number; uniques: number }[];
  topPages: Count[];
  sources: Count[];
  locales: Count[];
  devices: Count[];
  cta: Count[];
  orders: Count[];
  ctaVisitors: number;
  orderCount: number;
}

export interface StatsQuery {
  from: string; // YYYY-MM-DD (UTC), włącznie
  to: string; // YYYY-MM-DD (UTC), włącznie
  campaign?: string | null;
}

const num = (v: unknown) => Number(v ?? 0);

function countBy(events: AnalyticsEvent[], key: (e: AnalyticsEvent) => string, limit = 20): Count[] {
  const m = new Map<string, number>();
  for (const e of events) m.set(key(e), (m.get(key(e)) ?? 0) + 1);
  return [...m].map(([k, count]) => ({ key: k, count })).sort((a, b) => b.count - a.count).slice(0, limit);
}

function statsFromMemory(q: StatsQuery): Stats {
  const lo = Date.parse(`${q.from}T00:00:00Z`);
  const hi = Date.parse(`${q.to}T00:00:00Z`) + 86_400_000;
  const all = memoryEvents().filter((e) => {
    const t = Date.parse(e.ts);
    return t >= lo && t < hi && (!q.campaign || e.utm_campaign === q.campaign);
  });
  const day = (e: AnalyticsEvent) => e.ts.slice(0, 10);
  const pv = all.filter((e) => e.type === "pageview");
  const days = [...new Set(pv.map(day))].sort();
  const daily = days.map((d) => {
    const rows = pv.filter((e) => day(e) === d);
    return { day: d, pageviews: rows.length, uniques: new Set(rows.map((e) => e.visitor)).size };
  });
  const cta = all.filter((e) => e.type === "cta_click");
  const orders = all.filter((e) => e.type === "order");
  return {
    pageviews: pv.length,
    uniques: daily.reduce((s, d) => s + d.uniques, 0),
    daily,
    topPages: countBy(pv, (e) => e.path),
    sources: countBy(pv, (e) => e.utm_source ?? e.referrer_host ?? "(direct)"),
    locales: countBy(pv, (e) => e.locale),
    devices: countBy(pv, (e) => e.device),
    cta: countBy(cta, (e) => e.label ?? "(brak)"),
    orders: countBy(orders, (e) => e.label ?? "(brak)"),
    ctaVisitors: new Set(cta.map((e) => `${day(e)}|${e.visitor}`)).size,
    orderCount: orders.length,
  };
}

export async function getStats(q: StatsQuery): Promise<Stats> {
  if (isMemory()) return statsFromMemory(q);
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
  const sql = neon(process.env.DATABASE_URL);
  const from = q.from;
  const to = q.to;
  const camp = q.campaign || null;
  const counts = (rows: Record<string, unknown>[]): Count[] =>
    rows.map((r) => ({ key: String(r.k ?? "(brak)"), count: num(r.n) }));

  const [daily, pages, sources, locales, devices, cta, orders, ctaVis] = await Promise.all([
    sql`SELECT to_char(ts AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS day, COUNT(*) AS pv, COUNT(DISTINCT visitor) AS u
        FROM analytics_events
        WHERE type = 'pageview' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 1`,
    sql`SELECT path AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'pageview' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC LIMIT 20`,
    sql`SELECT COALESCE(utm_source, referrer_host, '(direct)') AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'pageview' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC LIMIT 20`,
    sql`SELECT locale AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'pageview' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT device AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'pageview' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT label AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'cta_click' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT label AS k, COUNT(*) AS n FROM analytics_events
        WHERE type = 'order' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})
        GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT COUNT(DISTINCT (to_char(ts AT TIME ZONE 'UTC', 'YYYY-MM-DD'), visitor)) AS n FROM analytics_events
        WHERE type = 'cta_click' AND ts >= ${from}::date AND ts < ${to}::date + 1 AND (${camp}::text IS NULL OR utm_campaign = ${camp})`,
  ]);

  const dailyRows = daily.map((r) => ({ day: String(r.day), pageviews: num(r.pv), uniques: num(r.u) }));
  const orderRows = counts(orders);
  return {
    pageviews: dailyRows.reduce((s, d) => s + d.pageviews, 0),
    uniques: dailyRows.reduce((s, d) => s + d.uniques, 0),
    daily: dailyRows,
    topPages: counts(pages),
    sources: counts(sources),
    locales: counts(locales),
    devices: counts(devices),
    cta: counts(cta),
    orders: orderRows,
    ctaVisitors: num(ctaVis[0]?.n),
    orderCount: orderRows.reduce((s, r) => s + r.count, 0),
  };
}
