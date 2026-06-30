import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultLocale, getTranslations } from "@/i18n";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const t = getTranslations(defaultLocale);

  return (
    <>
      <Navbar t={t} locale={defaultLocale} />
      {children}
      <Footer t={t} />
    </>
  );
}
