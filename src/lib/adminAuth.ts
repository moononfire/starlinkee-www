import { createHmac, timingSafeEqual } from "node:crypto";

// Dwa niezależne "obszary" admina, każdy z własnym hasłem (env) i ciasteczkiem.
export type AdminRealm = "admin" | "analytics";

const REALMS: Record<AdminRealm, { cookie: string; env: string }> = {
  admin: { cookie: "admin_session", env: "CHAT_ADMIN_TOKEN" },
  analytics: { cookie: "analytics_session", env: "ANALYTICS_ADMIN_PASSWORD" },
};

export const ADMIN_COOKIE = REALMS.admin.cookie;
export const ADMIN_SESSION_SECONDS = 60 * 60 * 12;

export function realmCookie(realm: AdminRealm): string {
  return REALMS[realm].cookie;
}

export function isRealm(v: unknown): v is AdminRealm {
  return v === "admin" || v === "analytics";
}

// Brak env (lub pusty) = zawsze odmowa (nigdy "undefined === undefined").
function secret(realm: AdminRealm): string | null {
  const s = process.env[REALMS[realm].env];
  return s && s.length > 0 ? s : null;
}

function sign(payload: string, key: string, realm: AdminRealm): string {
  return createHmac("sha256", key).update(`${realm}-session:${payload}`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function checkAdminPassword(password: string, realm: AdminRealm = "admin"): boolean {
  const key = secret(realm);
  if (!key || !password) return false;
  return safeEqual(password, key);
}

export function createAdminSession(realm: AdminRealm = "admin"): string | null {
  const key = secret(realm);
  if (!key) return null;
  const exp = String(Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS);
  return `${exp}.${sign(exp, key, realm)}`;
}

export function verifyAdminSession(value: string | undefined | null, realm: AdminRealm = "admin"): boolean {
  const key = secret(realm);
  if (!key || !value) return false;
  const [exp, mac] = value.split(".");
  if (!exp || !mac || !/^\d+$/.test(exp)) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;
  return safeEqual(mac, sign(exp, key, realm));
}

// Tylko ścieżki wewnątrz /admin (bez //, bez schematu).
export function safeAdminPath(next: string | null | undefined): string {
  if (next && /^\/admin(\/[A-Za-z0-9_\-./?=&%]*)?$/.test(next) && !next.includes("//")) return next;
  return "/admin/newsletter";
}
