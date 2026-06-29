import type { Translations } from "@/i18n";

export default function Footer({ t }: { t: Translations }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-lg font-bold text-brand-600">Starlinkee</span>
          <p className="text-sm text-gray-500 mt-1">{t.footer.tagline}</p>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {year} Starlinkee. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
