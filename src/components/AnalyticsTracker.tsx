"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sendAnalytics } from "@/lib/analyticsClient";

function externalReferrerHost(): string | null {
  try {
    if (!document.referrer) return null;
    const host = new URL(document.referrer).hostname;
    return host === window.location.hostname ? null : host;
  } catch {
    return null;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || last.current === pathname) return;
    const first = last.current === null;
    last.current = pathname;
    sendAnalytics({ type: "pageview", path: pathname, referrer_host: first ? externalReferrerHost() : null });
  }, [pathname]);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as Element | null)?.closest?.("[data-track]");
      const label = el?.getAttribute("data-track");
      if (label) sendAnalytics({ type: "cta_click", label });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
