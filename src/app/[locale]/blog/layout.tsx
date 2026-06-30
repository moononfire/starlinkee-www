import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTranslations } from "@/i18n";
import { resolveLocale } from "@/lib/locale";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getTranslations(locale);

  return (
    <>
      <Navbar t={t} locale={locale} />
      {children}
      <Footer t={t} locale={locale} />
    </>
  );
}
