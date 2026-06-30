import type { Translations } from "@/i18n";
import Link from "next/link";

const legalLinks = [
  { href: "/regulamin", label: "Regulamin" },
  { href: "/polityka-prywatnosci", label: "Polityka Prywatności" },
  { href: "/polityka-cookies", label: "Polityka Cookies" },
];

const navLinks = [
  { href: "/#features", label: "Funkcje" },
  { href: "/#pricing", label: "Cennik" },
  { href: "/#contact", label: "Kontakt" },
  { href: "/order", label: "Zamów" },
  { href: "/blog", label: "Blog" },
];

export default function Footer({ t }: { t: Translations }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Górna część: brand + nawigacja */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="text-lg font-bold text-brand-600">
              Starlinkee
            </Link>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">{t.footer.tagline}</p>
          </div>
          <nav aria-label="Nawigacja stopki" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Dolna część: copyright + dokumenty prawne */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {year} Starlinkee. {t.footer.rights}
          </p>
          <nav aria-label="Dokumenty prawne" className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
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
      </div>
    </footer>
  );
}
