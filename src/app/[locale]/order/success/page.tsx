import type { Metadata } from "next";
import { getTranslations, LOCALES, type Locale } from "@/i18n";

export const metadata: Metadata = {
  title: "Zamówienie przyjęte | Starlinkee",
  robots: { index: false, follow: false },
};

export default async function OrderSuccess({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const { mode } = await searchParams;
  const locale: Locale = LOCALES.includes(rawLocale as Locale) ? (rawLocale as Locale) : "pl";
  const t = getTranslations(locale).orderSuccess;
  const isTrial = mode === "trial";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isTrial ? t.titleTrial : t.title}
        </h1>
        <p className="text-gray-500 mb-2">{isTrial ? t.bodyTrial1 : t.bodyPaid1}</p>
        <p className="text-gray-500 mb-8">{isTrial ? t.bodyTrial2 : t.bodyPaid2}</p>
        <a
          href={`/${locale}`}
          className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-6 py-3 hover:bg-brand-700 transition-colors"
        >
          {t.back}
        </a>
      </div>
    </div>
  );
}
