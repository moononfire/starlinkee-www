"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getConsent, CONSENT_CHANGE_EVENT } from "@/components/CookieBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalyticsGate() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setAnalyticsAllowed(getConsent()?.analytics === true);

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<{ analytics: boolean }>).detail;
      setAnalyticsAllowed(detail.analytics === true);
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  if (!GA_ID || !analyticsAllowed) return null;

  return <GoogleAnalytics gaId={GA_ID} />;
}
