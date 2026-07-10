"use client";

import type { Translations } from "@/i18n";

export type DemoStep =
  | "linktree"
  | "loyalty"
  | "promo"
  | "promo_claim"
  | "plate_scan"
  | "rating_selected"
  | "high_rating_redirect"
  | "low_rating_feedback";

export const RELEVANT_STEPS = new Set<DemoStep>([
  "linktree",
  "loyalty",
  "promo",
  "promo_claim",
  "plate_scan",
  "high_rating_redirect",
  "low_rating_feedback",
]);

const TERMINAL_STEPS = new Set<DemoStep>(["high_rating_redirect", "low_rating_feedback"]);

export default function DemoAnnotation({
  t,
  step,
  onRestart,
}: {
  t: Translations;
  step: DemoStep | "idle";
  onRestart: () => void;
}) {
  const copy: Record<DemoStep | "idle", string> = {
    idle: t.liveDemo.tourIdle,
    linktree: t.liveDemo.tourLinktree,
    loyalty: t.liveDemo.tourLoyalty,
    promo: t.liveDemo.tourPromo,
    promo_claim: t.liveDemo.tourPromo,
    plate_scan: t.liveDemo.tourFilter,
    rating_selected: t.liveDemo.tourFilter,
    high_rating_redirect: t.liveDemo.tourHighRating,
    low_rating_feedback: t.liveDemo.tourLowRating,
  };

  const isTerminal = step !== "idle" && TERMINAL_STEPS.has(step);

  return (
    <div className="relative max-w-xs">
      <div className="hidden md:block absolute left-[-10px] top-8 h-4 w-4 rotate-45 bg-brand-50 border-l border-b border-brand-100" />
      <div className="bg-brand-50 border border-brand-100 rounded-2xl px-5 py-4 text-sm sm:text-base text-gray-700 leading-relaxed">
        {copy[step]}
        {isTerminal && (
          <button
            type="button"
            onClick={onRestart}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors"
          >
            ↻ {t.liveDemo.tourRestart}
          </button>
        )}
      </div>
    </div>
  );
}
