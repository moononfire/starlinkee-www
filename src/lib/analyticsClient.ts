"use client";

type Payload = {
  type: "pageview" | "cta_click" | "order";
  label?: string;
  path?: string;
  referrer_host?: string | null;
};

export function sendAnalytics(p: Payload) {
  try {
    const q = new URLSearchParams(window.location.search);
    const body = JSON.stringify({
      type: p.type,
      path: p.path ?? window.location.pathname,
      label: p.label,
      referrer_host: p.referrer_host ?? null,
      utm_source: q.get("utm_source"),
      utm_medium: q.get("utm_medium"),
      utm_campaign: q.get("utm_campaign"),
    });
    if (navigator.sendBeacon?.("/api/a", new Blob([body], { type: "application/json" }))) return;
    fetch("/api/a", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(() => {});
  } catch {
    // statystyka nigdy nie psuje strony
  }
}
