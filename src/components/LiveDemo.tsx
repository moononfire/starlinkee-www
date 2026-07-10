"use client";

import { useEffect, useState } from "react";
import type { Locale, Translations } from "@/i18n";
import DemoAnnotation, { RELEVANT_STEPS, type DemoStep } from "./DemoAnnotation";

const DEMO_URL =
  "https://app.starlinkee.com/plate/TJRUAO/ba3e54f1eea72e7423e278f37040f619";
const DEMO_ORIGIN = new URL(DEMO_URL).origin;

export default function LiveDemo({ t }: { t: Translations; locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<DemoStep | "idle">("idle");
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== DEMO_ORIGIN) return;
      const data = event.data;
      if (!data || data.source !== "starlinkee-demo") return;
      if (RELEVANT_STEPS.has(data.step)) setStep(data.step);
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function restart() {
    setStep("idle");
    setIframeKey((k) => k + 1);
  }

  return (
    <section id="live-demo" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.liveDemo.sectionTitle}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.liveDemo.sectionSubtitle}
          </p>
        </div>

        {/* Mobile: no phone-in-phone mockup — send the visitor straight into the real app */}
        <div className="md:hidden text-center">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-8 py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            {t.liveDemo.mobileCta}
          </a>
        </div>

        {/* Desktop: expandable phone mockup with tour bubbles */}
        <div className="hidden md:block text-center">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-medium rounded-xl px-8 py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            {isOpen ? t.liveDemo.collapseCta : t.liveDemo.expandCta}
          </button>

          {isOpen && (
            <>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-10">
                <div
                  className="relative w-[300px] sm:w-[320px] aspect-[9/19.5] rounded-[3.2rem] p-[14px] shrink-0"
                  style={{
                    background: "linear-gradient(160deg, #60a5fa 0%, #2563eb 45%, #1e40af 100%)",
                    boxShadow:
                      "0 30px 60px -20px rgba(37,99,235,0.45), 0 10px 20px -8px rgba(37,99,235,0.3), inset 0 0 0 1px rgba(219,234,254,0.35)",
                  }}
                >
                  {/* metallic sheen sweep */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[3.2rem] z-0"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.14) 48%, transparent 60%)",
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* side buttons */}
                  <div className="absolute -left-[2px] top-[86px] h-6 w-[3px] rounded-l bg-brand-900/70" />
                  <div className="absolute -left-[2px] top-[122px] h-10 w-[3px] rounded-l bg-brand-900/70" />
                  <div className="absolute -left-[2px] top-[168px] h-10 w-[3px] rounded-l bg-brand-900/70" />
                  <div className="absolute -right-[2px] top-[130px] h-16 w-[3px] rounded-r bg-brand-900/70" />

                  {/* notch bar, sits in the bezel above the screen */}
                  <div className="relative z-10 flex justify-center pb-1.5">
                    <div className="h-5 w-24 rounded-full bg-black" />
                  </div>

                  <div
                    className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden rounded-b-[2.5rem] rounded-t-xl bg-white"
                    style={{ boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.9)" }}
                  >
                    <iframe
                      key={iframeKey}
                      src={DEMO_URL}
                      title={t.liveDemo.iframeTitle}
                      loading="lazy"
                      className="relative h-full w-full border-0"
                    />

                    {/* glass reflection */}
                    <div
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{
                        background:
                          "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 18%, rgba(255,255,255,0) 32%)",
                      }}
                    />
                  </div>
                </div>

                <DemoAnnotation t={t} step={step} onRestart={restart} />
              </div>

              <div className="text-center mt-8">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
                >
                  {t.liveDemo.cta} →
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
