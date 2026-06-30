"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n";

const PHONE_NUMBER = "+48 123 456 789";
const PHONE_HREF = PHONE_NUMBER.replace(/\s/g, "");
const FOOTER_HEIGHT = 180;
const BASE_BOTTOM = 24;

const callUs: Record<Locale, string> = {
  pl: "Zadzwoń do nas",
  en: "Call us",
  de: "Ruf uns an",
  it: "Chiamaci",
};

function PhoneWidgetInner() {
  const searchParams = useSearchParams();
  const lang = (searchParams.get("lang") ?? "pl") as Locale;
  const label = callUs[lang] ?? callUs.pl;

  const [bottom, setBottom] = useState(BASE_BOTTOM);

  useEffect(() => {
    function update() {
      const distFromBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      const shift = Math.max(0, FOOTER_HEIGHT - distFromBottom);
      setBottom(BASE_BOTTOM + shift);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href={`tel:${PHONE_HREF}`}
      aria-label={`${label}: ${PHONE_NUMBER}`}
      className="fixed left-5 z-40 flex items-center gap-2.5 rounded-full px-4 py-3 select-none transition-[bottom] duration-200"
      style={{
        bottom: `${bottom}px`,
        background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 35%, #FBBF24 70%, #F59E0B 100%)",
        animation: "phone-glow-pulse 5.6s ease-in-out infinite",
        border: "1.5px solid rgba(251,191,36,0.7)",
        textShadow: "0 1px 2px rgba(120,53,15,0.2)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 shrink-0 text-amber-800"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-amber-900 opacity-80">{label}</span>
        <span className="text-sm font-bold text-amber-900">{PHONE_NUMBER}</span>
      </div>
    </a>
  );
}

export default function PhoneWidget() {
  return (
    <Suspense>
      <PhoneWidgetInner />
    </Suspense>
  );
}
