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
