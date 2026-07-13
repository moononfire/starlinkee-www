import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, type Locale } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";
const contactEmail = "vikbobinski@gmail.com";

type CookieRow = { category: string; nameProvider: string; purpose: string; duration: string; consent: string; required: boolean };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pageTitle: string;
  lastUpdated: string;

  s1Title: string;
  s1Body: string;

  s2Title: string;
  tableHeaders: { category: string; nameProvider: string; purpose: string; duration: string; consent: string };
  rows: CookieRow[];
  s2Note: string;

  s3Title: string;
  s3Necessary: string;
  s3Optional: string;

  s4Title: string;
  s4Body1: string;
  s4Body2: string;

  s5Title: string;
  s5Intro: string;
  s5Banner: string;
  s5Browser: string;
  s5OptOutTitle: string;
  s5OptOutGA: string;
  s5OptOutOther: string;
  s5Warning: string;

  s6Title: string;
  s6Intro: string;
  s6Google: string;
  s6Other: string;

  s7Title: string;
  s7Body: string;

  s8Title: string;
  s8Body: string;
  s8LinkBody: string;
  s8LinkLabel: string;
};

const copy: Record<Locale, Copy> = {
  pl: {
    metaTitle: "Polityka Cookies | Starlinkee",
    metaDescription: "Polityka plików cookies serwisu Starlinkee — jakie cookies używamy i jak nimi zarządzać.",
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Polityka Cookies",
    pageTitle: "Polityka Cookies",
    lastUpdated: "Ostatnia aktualizacja: 11 lipca 2026 r.",

    s1Title: "1. Czym są pliki cookies?",
    s1Body: "Pliki cookies (ciasteczka) to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu (komputerze, smartfonie, tablecie) podczas odwiedzania stron internetowych. Cookies pozwalają stronie „pamiętać” Twoje działania i preferencje przez określony czas, dzięki czemu nie musisz ich ponownie podawać przy każdej wizycie.",

    s2Title: "2. Jakich cookies używamy?",
    tableHeaders: { category: "Kategoria", nameProvider: "Nazwa / Dostawca", purpose: "Cel", duration: "Czas ważności", consent: "Zgoda" },
    rows: [
      { category: "Niezbędne", nameProvider: "[session], [csrf_token]", purpose: "Bezpieczeństwo, sesja, proces zamówienia", duration: "Sesja / 1 rok", consent: "Nie wymagana", required: false },
      { category: "Preferencji", nameProvider: "[cookie_consent], [lang]", purpose: "Zapamiętanie zgody cookies, język", duration: "1 rok", consent: "Nie wymagana", required: false },
      { category: "Analityczne", nameProvider: "Google Analytics (_ga, _gid)", purpose: "Statystyki ruchu, analiza zachowań użytkowników", duration: "2 lata / 24 godz.", consent: "Wymagana", required: true },
      { category: "Marketingowe", nameProvider: "[NAZWA NARZĘDZIA, np. Meta Pixel, Google Ads]", purpose: "Remarketing, mierzenie konwersji reklam", duration: "[CZAS]", consent: "Wymagana", required: true },
    ],
    s2Note: "Uzupełnij tabelę o rzeczywiste nazwy cookies używane w Twoim serwisie. Listę możesz uzyskać w narzędziach deweloperskich przeglądarki (DevTools → Application → Cookies).",

    s3Title: "3. Cookies niezbędne a opcjonalne",
    s3Necessary: "Cookies niezbędne są konieczne do prawidłowego działania strony, w tym procesu zamówienia i logowania do panelu, i nie wymagają Twojej zgody — umieszczamy je automatycznie. Bez nich strona nie mogłaby funkcjonować poprawnie.",
    s3Optional: "Cookies analityczne i marketingowe wymagają Twojej dobrowolnej zgody wyrażonej poprzez baner cookie wyświetlany przy pierwszej wizycie. Możesz ją w każdej chwili wycofać, co nie wpłynie na zgodność z prawem przetwarzania przed wycofaniem.",

    s4Title: "4. Podstawa prawna",
    s4Body1: "Przetwarzanie danych za pośrednictwem cookies analitycznych i marketingowych odbywa się na podstawie art. 6 ust. 1 lit. a RODO (zgoda). Pliki cookies niezbędne opierają się na art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes — zapewnienie technicznego funkcjonowania serwisu).",
    s4Body2: "Korzystamy z cookies zgodnie z art. 173 ustawy Prawo telekomunikacyjne oraz wytycznymi dyrektywy ePrivacy (2002/58/WE).",

    s5Title: "5. Jak zarządzać cookies?",
    s5Intro: "Masz kilka możliwości zarządzania plikami cookies:",
    s5Banner: "Baner cookie — przy pierwszej wizycie możesz wyrazić lub odrzucić zgodę na poszczególne kategorie cookies. Aby zmienić preferencje, wyczyść cookies w przeglądarce i odśwież stronę.",
    s5Browser: "Ustawienia przeglądarki — możesz zablokować lub usunąć cookies bezpośrednio w przeglądarce (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).",
    s5OptOutTitle: "Narzędzia opt-out dostawców:",
    s5OptOutGA: "Google Analytics: Google Analytics Opt-out",
    s5OptOutOther: "[DODAJ LINKI OPT-OUT DLA INNYCH NARZĘDZI]",
    s5Warning: "Uwaga: wyłączenie cookies niezbędnych może spowodować problemy z działaniem strony lub procesu zakupu.",

    s6Title: "6. Cookies podmiotów trzecich",
    s6Intro: "Nasza strona może korzystać z usług podmiotów trzecich, które instalują własne pliki cookies. Podmioty te mają własne polityki prywatności — zachęcamy do zapoznania się z nimi:",
    s6Google: "Google LLC — Polityka prywatności Google",
    s6Other: "[INNY DOSTAWCA] — [LINK DO POLITYKI]",

    s7Title: "7. Zmiany Polityki Cookies",
    s7Body: "Zastrzegamy sobie prawo do zmiany niniejszej Polityki. Wszelkie zmiany wchodzą w życie w dniu opublikowania zaktualizowanego dokumentu na tej stronie. Data ostatniej aktualizacji widnieje na górze dokumentu.",

    s8Title: "8. Kontakt",
    s8Body: "W sprawach dotyczących cookies i prywatności skontaktuj się z nami:",
    s8LinkBody: "Więcej informacji o przetwarzaniu danych osobowych, w tym o zapisie do newslettera przy zakładaniu konta, znajdziesz w naszej",
    s8LinkLabel: "Polityce Prywatności",
  },

  en: {
    metaTitle: "Cookie Policy | Starlinkee",
    metaDescription: "Starlinkee's cookie policy — which cookies we use and how to manage them.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Cookie Policy",
    pageTitle: "Cookie Policy",
    lastUpdated: "Last updated: 11 July 2026",

    s1Title: "1. What are cookies?",
    s1Body: "Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. Cookies let a site “remember” your actions and preferences for a period of time, so you don't have to re-enter them on every visit.",

    s2Title: "2. Which cookies do we use?",
    tableHeaders: { category: "Category", nameProvider: "Name / Provider", purpose: "Purpose", duration: "Duration", consent: "Consent" },
    rows: [
      { category: "Necessary", nameProvider: "[session], [csrf_token]", purpose: "Security, session, order process", duration: "Session / 1 year", consent: "Not required", required: false },
      { category: "Preferences", nameProvider: "[cookie_consent], [lang]", purpose: "Remembering cookie consent and language", duration: "1 year", consent: "Not required", required: false },
      { category: "Analytics", nameProvider: "Google Analytics (_ga, _gid)", purpose: "Traffic statistics, user behavior analysis", duration: "2 years / 24 hours", consent: "Required", required: true },
      { category: "Marketing", nameProvider: "[TOOL NAME, e.g. Meta Pixel, Google Ads]", purpose: "Remarketing, ad conversion measurement", duration: "[DURATION]", consent: "Required", required: true },
    ],
    s2Note: "Fill in the table with the actual cookie names used on your site. You can get the list from your browser's developer tools (DevTools → Application → Cookies).",

    s3Title: "3. Necessary vs. optional cookies",
    s3Necessary: "Necessary cookies are required for the site to work correctly, including the order process and dashboard login, and do not require your consent — we set them automatically. Without them the site could not function properly.",
    s3Optional: "Analytics and marketing cookies require your voluntary consent, given via the cookie banner shown on your first visit. You can withdraw consent at any time, which does not affect the lawfulness of processing carried out before withdrawal.",

    s4Title: "4. Legal basis",
    s4Body1: "Processing via analytics and marketing cookies is based on Art. 6(1)(a) GDPR (consent). Necessary cookies rely on Art. 6(1)(f) GDPR (legitimate interest — ensuring the site functions correctly).",
    s4Body2: "We use cookies in accordance with applicable national e-communications law and the ePrivacy Directive (2002/58/EC).",

    s5Title: "5. How to manage cookies",
    s5Intro: "You have several options for managing cookies:",
    s5Banner: "Cookie banner — on your first visit you can accept or reject individual cookie categories. To change your preferences, clear cookies in your browser and refresh the page.",
    s5Browser: "Browser settings — you can block or delete cookies directly in your browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).",
    s5OptOutTitle: "Provider opt-out tools:",
    s5OptOutGA: "Google Analytics: Google Analytics Opt-out",
    s5OptOutOther: "[ADD OPT-OUT LINKS FOR OTHER TOOLS]",
    s5Warning: "Note: disabling necessary cookies may cause problems with the site or the checkout process.",

    s6Title: "6. Third-party cookies",
    s6Intro: "Our site may use third-party services that set their own cookies. These providers have their own privacy policies — we encourage you to review them:",
    s6Google: "Google LLC — Google Privacy Policy",
    s6Other: "[OTHER PROVIDER] — [LINK TO POLICY]",

    s7Title: "7. Changes to this Cookie Policy",
    s7Body: "We reserve the right to amend this Policy. Any changes take effect on the day the updated document is published on this page. The date of the last update is shown at the top of this document.",

    s8Title: "8. Contact",
    s8Body: "For questions about cookies and privacy, contact us:",
    s8LinkBody: "More information about the processing of personal data, including newsletter sign-up during account creation, is available in our",
    s8LinkLabel: "Privacy Policy",
  },

  de: {
    metaTitle: "Cookie-Richtlinie | Starlinkee",
    metaDescription: "Cookie-Richtlinie von Starlinkee — welche Cookies wir verwenden und wie Sie diese verwalten können.",
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Cookie-Richtlinie",
    pageTitle: "Cookie-Richtlinie",
    lastUpdated: "Zuletzt aktualisiert: 11. Juli 2026",

    s1Title: "1. Was sind Cookies?",
    s1Body: "Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden. Cookies ermöglichen es der Website, sich für einen bestimmten Zeitraum an Ihre Aktionen und Präferenzen zu „erinnern“, sodass Sie diese nicht bei jedem Besuch erneut eingeben müssen.",

    s2Title: "2. Welche Cookies verwenden wir?",
    tableHeaders: { category: "Kategorie", nameProvider: "Name / Anbieter", purpose: "Zweck", duration: "Gültigkeitsdauer", consent: "Einwilligung" },
    rows: [
      { category: "Notwendig", nameProvider: "[session], [csrf_token]", purpose: "Sicherheit, Sitzung, Bestellvorgang", duration: "Sitzung / 1 Jahr", consent: "Nicht erforderlich", required: false },
      { category: "Präferenzen", nameProvider: "[cookie_consent], [lang]", purpose: "Speicherung der Cookie-Einwilligung, Sprache", duration: "1 Jahr", consent: "Nicht erforderlich", required: false },
      { category: "Analyse", nameProvider: "Google Analytics (_ga, _gid)", purpose: "Traffic-Statistiken, Analyse des Nutzerverhaltens", duration: "2 Jahre / 24 Std.", consent: "Erforderlich", required: true },
      { category: "Marketing", nameProvider: "[TOOL-NAME, z. B. Meta Pixel, Google Ads]", purpose: "Remarketing, Messung von Werbekonversionen", duration: "[DAUER]", consent: "Erforderlich", required: true },
    ],
    s2Note: "Ergänzen Sie die Tabelle um die tatsächlich auf Ihrer Website verwendeten Cookie-Namen. Die Liste finden Sie in den Entwicklertools Ihres Browsers (DevTools → Application → Cookies).",

    s3Title: "3. Notwendige und optionale Cookies",
    s3Necessary: "Notwendige Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich, einschließlich des Bestellvorgangs und der Anmeldung im Dashboard, und erfordern keine Einwilligung — wir setzen sie automatisch. Ohne sie könnte die Website nicht korrekt funktionieren.",
    s3Optional: "Analyse- und Marketing-Cookies erfordern Ihre freiwillige Einwilligung, die über das beim ersten Besuch angezeigte Cookie-Banner erteilt wird. Sie können sie jederzeit widerrufen, ohne dass dies die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt.",

    s4Title: "4. Rechtsgrundlage",
    s4Body1: "Die Verarbeitung über Analyse- und Marketing-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Notwendige Cookies stützen sich auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse — Gewährleistung der technischen Funktionsfähigkeit der Website).",
    s4Body2: "Wir verwenden Cookies im Einklang mit dem anwendbaren nationalen Telekommunikationsrecht und der ePrivacy-Richtlinie (2002/58/EG).",

    s5Title: "5. Wie können Sie Cookies verwalten?",
    s5Intro: "Sie haben mehrere Möglichkeiten, Cookies zu verwalten:",
    s5Banner: "Cookie-Banner — beim ersten Besuch können Sie einzelne Cookie-Kategorien zulassen oder ablehnen. Um Ihre Einstellungen zu ändern, löschen Sie die Cookies in Ihrem Browser und laden Sie die Seite neu.",
    s5Browser: "Browsereinstellungen — Sie können Cookies direkt in Ihrem Browser blockieren oder löschen (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).",
    s5OptOutTitle: "Opt-out-Tools der Anbieter:",
    s5OptOutGA: "Google Analytics: Google Analytics Opt-out",
    s5OptOutOther: "[OPT-OUT-LINKS FÜR WEITERE TOOLS ERGÄNZEN]",
    s5Warning: "Hinweis: Das Deaktivieren notwendiger Cookies kann zu Problemen mit der Website oder dem Bestellvorgang führen.",

    s6Title: "6. Cookies Dritter",
    s6Intro: "Unsere Website kann Dienste Dritter nutzen, die eigene Cookies setzen. Diese Anbieter verfügen über eigene Datenschutzerklärungen — wir empfehlen, diese zu lesen:",
    s6Google: "Google LLC — Datenschutzerklärung von Google",
    s6Other: "[ANDERER ANBIETER] — [LINK ZUR RICHTLINIE]",

    s7Title: "7. Änderungen dieser Cookie-Richtlinie",
    s7Body: "Wir behalten uns das Recht vor, diese Richtlinie zu ändern. Änderungen treten mit der Veröffentlichung des aktualisierten Dokuments auf dieser Seite in Kraft. Das Datum der letzten Aktualisierung finden Sie oben im Dokument.",

    s8Title: "8. Kontakt",
    s8Body: "Bei Fragen zu Cookies und Datenschutz kontaktieren Sie uns:",
    s8LinkBody: "Weitere Informationen zur Verarbeitung personenbezogener Daten, einschließlich der Newsletter-Anmeldung bei der Kontoerstellung, finden Sie in unserer",
    s8LinkLabel: "Datenschutzerklärung",
  },

  it: {
    metaTitle: "Informativa sui Cookie | Starlinkee",
    metaDescription: "Informativa sui cookie di Starlinkee — quali cookie utilizziamo e come gestirli.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Informativa sui Cookie",
    pageTitle: "Informativa sui Cookie",
    lastUpdated: "Ultimo aggiornamento: 11 luglio 2026",

    s1Title: "1. Cosa sono i cookie?",
    s1Body: "I cookie sono piccoli file di testo salvati sul tuo dispositivo (computer, smartphone, tablet) quando visiti un sito web. I cookie permettono al sito di “ricordare” le tue azioni e preferenze per un certo periodo di tempo, così non devi reinserirle ad ogni visita.",

    s2Title: "2. Quali cookie utilizziamo?",
    tableHeaders: { category: "Categoria", nameProvider: "Nome / Fornitore", purpose: "Finalità", duration: "Durata", consent: "Consenso" },
    rows: [
      { category: "Necessari", nameProvider: "[session], [csrf_token]", purpose: "Sicurezza, sessione, processo d'ordine", duration: "Sessione / 1 anno", consent: "Non richiesto", required: false },
      { category: "Preferenze", nameProvider: "[cookie_consent], [lang]", purpose: "Memorizzazione del consenso ai cookie, lingua", duration: "1 anno", consent: "Non richiesto", required: false },
      { category: "Analitici", nameProvider: "Google Analytics (_ga, _gid)", purpose: "Statistiche di traffico, analisi del comportamento degli utenti", duration: "2 anni / 24 ore", consent: "Richiesto", required: true },
      { category: "Marketing", nameProvider: "[NOME STRUMENTO, es. Meta Pixel, Google Ads]", purpose: "Remarketing, misurazione delle conversioni pubblicitarie", duration: "[DURATA]", consent: "Richiesto", required: true },
    ],
    s2Note: "Completa la tabella con i nomi effettivi dei cookie utilizzati sul tuo sito. Puoi ottenere l'elenco dagli strumenti per sviluppatori del browser (DevTools → Application → Cookie).",

    s3Title: "3. Cookie necessari e opzionali",
    s3Necessary: "I cookie necessari sono indispensabili per il corretto funzionamento del sito, incluso il processo d'ordine e l'accesso al pannello, e non richiedono il tuo consenso — li impostiamo automaticamente. Senza di essi il sito non potrebbe funzionare correttamente.",
    s3Optional: "I cookie analitici e di marketing richiedono il tuo consenso volontario, espresso tramite il banner cookie mostrato alla prima visita. Puoi revocarlo in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca.",

    s4Title: "4. Base giuridica",
    s4Body1: "Il trattamento tramite cookie analitici e di marketing si basa sull'art. 6(1)(a) del GDPR (consenso). I cookie necessari si basano sull'art. 6(1)(f) del GDPR (legittimo interesse — garantire il corretto funzionamento tecnico del sito).",
    s4Body2: "Utilizziamo i cookie in conformità alla normativa nazionale applicabile in materia di comunicazioni elettroniche e alla direttiva ePrivacy (2002/58/CE).",

    s5Title: "5. Come gestire i cookie",
    s5Intro: "Hai diverse possibilità per gestire i cookie:",
    s5Banner: "Banner cookie — alla prima visita puoi accettare o rifiutare le singole categorie di cookie. Per modificare le preferenze, cancella i cookie nel browser e aggiorna la pagina.",
    s5Browser: "Impostazioni del browser — puoi bloccare o eliminare i cookie direttamente dal browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).",
    s5OptOutTitle: "Strumenti di opt-out dei fornitori:",
    s5OptOutGA: "Google Analytics: Google Analytics Opt-out",
    s5OptOutOther: "[AGGIUNGERE LINK DI OPT-OUT PER ALTRI STRUMENTI]",
    s5Warning: "Attenzione: la disattivazione dei cookie necessari può causare problemi al funzionamento del sito o al processo di acquisto.",

    s6Title: "6. Cookie di terze parti",
    s6Intro: "Il nostro sito può utilizzare servizi di terze parti che installano propri cookie. Questi fornitori dispongono di proprie informative sulla privacy — ti invitiamo a consultarle:",
    s6Google: "Google LLC — Informativa sulla privacy di Google",
    s6Other: "[ALTRO FORNITORE] — [LINK ALL'INFORMATIVA]",

    s7Title: "7. Modifiche alla presente Informativa sui Cookie",
    s7Body: "Ci riserviamo il diritto di modificare la presente Informativa. Le modifiche entrano in vigore il giorno della pubblicazione del documento aggiornato su questa pagina. La data dell'ultimo aggiornamento è indicata nella parte superiore del documento.",

    s8Title: "8. Contatti",
    s8Body: "Per domande su cookie e privacy, contattaci:",
    s8LinkBody: "Maggiori informazioni sul trattamento dei dati personali, inclusa l'iscrizione alla newsletter al momento della creazione dell'account, sono disponibili nella nostra",
    s8LinkLabel: "Informativa sulla Privacy",
  },
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const c = copy[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale}/polityka-cookies` },
    robots: { index: false, follow: false },
  };
}

export default async function PolitykaCookies({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const c = copy[locale];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href={`/${locale}`} className="hover:text-gray-700">{c.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">{c.breadcrumbCurrent}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{c.pageTitle}</h1>
        <p className="text-sm text-gray-500 mb-10">{c.lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s1Title}</h2>
            <p>{c.s1Body}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s2Title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.category}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.nameProvider}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.purpose}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.duration}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.consent}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                      <td className="p-3 border border-gray-200 font-medium">{row.category}</td>
                      <td className="p-3 border border-gray-200">{row.nameProvider}</td>
                      <td className="p-3 border border-gray-200">{row.purpose}</td>
                      <td className="p-3 border border-gray-200">{row.duration}</td>
                      <td className={`p-3 border border-gray-200 ${row.required ? "text-amber-700 font-medium" : ""}`}>{row.consent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">{c.s2Note}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s3Title}</h2>
            <p><strong>{c.s3Necessary}</strong></p>
            <p className="mt-3">{c.s3Optional}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s4Title}</h2>
            <p>{c.s4Body1}</p>
            <p className="mt-3">{c.s4Body2}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s5Title}</h2>
            <p>{c.s5Intro}</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>{c.s5Banner}</li>
              <li>{c.s5Browser}</li>
              <li>
                {c.s5OptOutTitle}
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  <li>
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.s5OptOutGA}
                    </a>
                  </li>
                  <li>{c.s5OptOutOther}</li>
                </ul>
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">{c.s5Warning}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s6Title}</h2>
            <p>{c.s6Intro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Google LLC —{" "}
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {c.s6Google.split("— ")[1]}
                </a>
              </li>
              <li>{c.s6Other}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s7Title}</h2>
            <p>{c.s7Body}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s8Title}</h2>
            <p>
              {c.s8Body}<br />
              e-mail: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
            </p>
            <p className="mt-3">
              {c.s8LinkBody}{" "}
              <Link href={`/${locale}/polityka-prywatnosci`} className="text-blue-600 hover:underline">{c.s8LinkLabel}</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
