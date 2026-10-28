// Hosty, do których newsletter faktycznie linkuje: starlinkee.com (z subdomenami, np. app.)
// i business.google.com (lekcja o profilu Google). Host z NEXT_PUBLIC_APP_URL też jest dozwolony.
const EXACT_HOSTS = ["business.google.com"];
const DOMAIN_SUFFIXES = ["starlinkee.com"];

export function isAllowedRedirect(raw: string): URL | null {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" || u.username || u.password) return null;
  const host = u.hostname.toLowerCase();
  const appHost = (() => {
    try {
      return new URL(process.env.NEXT_PUBLIC_APP_URL ?? "").hostname.toLowerCase();
    } catch {
      return null;
    }
  })();
  const ok =
    EXACT_HOSTS.includes(host) ||
    host === appHost ||
    DOMAIN_SUFFIXES.some((d) => host === d || host.endsWith(`.${d}`));
  return ok ? u : null;
}
