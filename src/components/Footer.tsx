import type { Locale, Translations } from "@/i18n";
import Link from "next/link";

const footerUi = {
  pl: {
    nav: "Nawigacja stopki",
    legal: "Dokumenty prawne",
    order: "Zamów",
    blog: "Blog",
    app: "Aplikacja mobilna",
    terms: "Regulamin",
    privacy: "Polityka Prywatności",
    cookies: "Polityka Cookies",
  },
  en: {
    nav: "Footer navigation",
    legal: "Legal documents",
    order: "Order",
    blog: "Blog",
    app: "Mobile app",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
  },
  de: {
    nav: "Footer-Navigation",
    legal: "Rechtliche Dokumente",
    order: "Bestellen",
    blog: "Blog",
    app: "Mobile App",
    terms: "AGB",
    privacy: "Datenschutzerklärung",
    cookies: "Cookie-Richtlinie",
  },
  it: {
    nav: "Navigazione del footer",
    legal: "Documenti legali",
    order: "Ordina",
    blog: "Blog",
    app: "App mobile",
    terms: "Termini e Condizioni",
    privacy: "Informativa sulla Privacy",
    cookies: "Politica dei Cookie",
  },
} satisfies Record<Locale, Record<string, string>>;

export default function Footer({ t, locale }: { t: Translations; locale: Locale }) {
  const year = new Date().getFullYear();
  const fu = footerUi[locale];

  const navLinks = [
    { href: "/#features", label: t.nav.features },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/#contact", label: t.nav.contact },
    { href: "/order", label: fu.order },
    { href: "/blog", label: fu.blog },
    { href: "/pobierz-aplikacje", label: fu.app },
  ];

  const legalLinks = [
    { href: "/regulamin", label: fu.terms },
    { href: "/polityka-prywatnosci", label: fu.privacy },
    { href: "/polityka-cookies", label: fu.cookies },
  ];

  return (
    <footer className="border-t border-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Górna część: brand + nawigacja */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <Link href={`/${locale}`} className="text-lg font-bold text-brand-600">
              Starlinkee
            </Link>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">{t.footer.tagline}</p>
          </div>
          <nav aria-label={fu.nav} className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
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
          <nav aria-label={fu.legal} className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
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
