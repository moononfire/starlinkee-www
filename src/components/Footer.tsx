import type { Translations } from "@/i18n";
import Link from "next/link";

const legalLinks = [
  { href: "/regulamin", label: "Regulamin" },
  { href: "/polityka-prywatnosci", label: "Polityka Prywatności" },
  { href: "/polityka-cookies", label: "Polityka Cookies" },
];

export default function Footer({ t }: { t: Translations }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-lg font-bold text-brand-600">Starlinkee</span>
            <p className="text-sm text-gray-500 mt-1">{t.footer.tagline}</p>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {year} Starlinkee. {t.footer.rights}
          </p>
        </div>
        <nav aria-label="Dokumenty prawne" className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
