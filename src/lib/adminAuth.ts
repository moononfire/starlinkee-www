import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "admin_session";
const SESSION_SECONDS = 60 * 60 * 12;

// Brak CHAT_ADMIN_TOKEN = zawsze odmowa (nigdy "undefined === undefined").
function secret(): string | null {
  const s = process.env.CHAT_ADMIN_TOKEN;
  return s && s.length > 0 ? s : null;
}

function sign(payload: string, key: string): string {
  return createHmac("sha256", key).update(`admin-session:${payload}`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function checkAdminPassword(password: string): boolean {
  const key = secret();
  if (!key || !password) return false;
  return safeEqual(password, key);
}

export function createAdminSession(): string | null {
  const key = secret();
  if (!key) return null;
  const exp = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return `${exp}.${sign(exp, key)}`;
}

export function verifyAdminSession(value: string | undefined | null): boolean {
  const key = secret();
  if (!key || !value) return false;
  const [exp, mac] = value.split(".");
  if (!exp || !mac || !/^\d+$/.test(exp)) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;
  return safeEqual(mac, sign(exp, key));
}

export const ADMIN_SESSION_SECONDS = SESSION_SECONDS;

// Tylko ścieżki wewnątrz /admin (bez //, bez schematu).
export function safeAdminPath(next: string | null | undefined): string {
  if (next && /^\/admin(\/[A-Za-z0-9_\-./?=&%]*)?$/.test(next) && !next.includes("//")) return next;
  return "/admin/newsletter";
}
