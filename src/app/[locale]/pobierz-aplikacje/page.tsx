import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, type Locale } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";
const APK_PATH = "/downloads/starlinkee.apk";

type Copy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pageTitle: string;
  intro: string;
  downloadButton: string;
  temporaryNotice: string;
  stepsTitle: string;
  steps: string[];
  playNotice: string;
};

const copy: Record<Locale, Copy> = {
  pl: {
    metaTitle: "Pobierz aplikację | Starlinkee",
    metaDescription: "Pobierz aplikację mobilną Starlinkee na Androida (plik .apk).",
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Pobierz aplikację",
    pageTitle: "Aplikacja Starlinkee na Androida",
    intro:
      "Aplikacja pozwala zbierać pieczątki na karcie lojalnościowej wprost z telefonu, bez otwierania przeglądarki po każdej wizycie.",
    downloadButton: "Pobierz aplikację (.apk)",
    temporaryNotice:
      "Aplikacja nie jest jeszcze dostępna w Google Play — trwa proces publikacji. Do tego czasu instalujesz plik bezpośrednio z tej strony.",
    stepsTitle: "Jak zainstalować",
    steps: [
      "Pobierz plik, klikając przycisk powyżej (otworzy się w przeglądarce telefonu).",
      "Telefon pokaże ostrzeżenie, że plik pochodzi spoza Google Play — to normalne przy instalacji poza sklepem. Dotknij „Mimo to pobierz” / „Zainstaluj mimo to” i odczekaj około 10 sekund, aż system zakończy skanowanie pliku.",
      "Jeśli pojawi się prośba o zezwolenie na „Instalowanie z nieznanych źródeł” dla przeglądarki — włącz ją jednorazowo (Ustawienia poprowadzą Cię automatycznie) i wróć do instalacji.",
      "Po instalacji otwórz aplikację i zaloguj się numerem telefonu przy najbliższej wizycie w lokalu.",
    ],
    playNotice: "Gdy aplikacja pojawi się w Google Play, ta strona zostanie zaktualizowana o link do sklepu.",
  },
  en: {
    metaTitle: "Download the app | Starlinkee",
    metaDescription: "Download the Starlinkee mobile app for Android (.apk file).",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Download the app",
    pageTitle: "Starlinkee app for Android",
    intro:
      "The app lets you collect loyalty stamps straight from your phone, without opening a browser after every visit.",
    downloadButton: "Download the app (.apk)",
    temporaryNotice:
      "The app isn't on Google Play yet — publishing is in progress. Until then, install it directly from this page.",
    stepsTitle: "How to install",
    steps: [
      "Tap the button above to download the file (it opens in your phone's browser).",
      "Your phone will warn that the file comes from outside Google Play — that's expected when installing outside the store. Tap \"Download anyway\" / \"Install anyway\" and wait about 10 seconds for the scan to finish.",
      "If asked to allow \"Install unknown apps\" for your browser, enable it just this once (Settings will guide you) and return to the install prompt.",
      "After installing, open the app and sign in with your phone number on your next visit.",
    ],
    playNotice: "Once the app is live on Google Play, this page will be updated with the store link.",
  },
  de: {
    metaTitle: "App herunterladen | Starlinkee",
    metaDescription: "Lade die Starlinkee-App für Android herunter (.apk-Datei).",
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "App herunterladen",
    pageTitle: "Starlinkee-App für Android",
    intro:
      "Mit der App sammelst du Treuestempel direkt vom Handy aus, ohne nach jedem Besuch einen Browser zu öffnen.",
    downloadButton: "App herunterladen (.apk)",
    temporaryNotice:
      "Die App ist noch nicht bei Google Play verfügbar — die Veröffentlichung läuft. Bis dahin installierst du sie direkt über diese Seite.",
    stepsTitle: "So installierst du die App",
    steps: [
      "Tippe oben auf die Schaltfläche, um die Datei herunterzuladen (öffnet sich im Browser deines Handys).",
      "Dein Handy warnt, dass die Datei nicht aus Google Play stammt — das ist bei einer Installation außerhalb des Stores normal. Tippe auf „Trotzdem herunterladen“ / „Trotzdem installieren“ und warte ca. 10 Sekunden auf den Scan.",
      "Falls du gefragt wirst, „Unbekannte Apps installieren“ für den Browser zuzulassen, aktiviere dies einmalig (die Einstellungen führen dich durch) und kehre zur Installation zurück.",
      "Öffne die App nach der Installation und melde dich beim nächsten Besuch mit deiner Telefonnummer an.",
    ],
    playNotice: "Sobald die App bei Google Play verfügbar ist, wird diese Seite mit dem Store-Link aktualisiert.",
  },
  it: {
    metaTitle: "Scarica l'app | Starlinkee",
    metaDescription: "Scarica l'app mobile Starlinkee per Android (file .apk).",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Scarica l'app",
    pageTitle: "App Starlinkee per Android",
    intro:
      "L'app ti permette di raccogliere i timbri fedeltà direttamente dal telefono, senza aprire il browser a ogni visita.",
    downloadButton: "Scarica l'app (.apk)",
    temporaryNotice:
      "L'app non è ancora su Google Play — la pubblicazione è in corso. Fino ad allora si installa direttamente da questa pagina.",
    stepsTitle: "Come installare",
    steps: [
      "Tocca il pulsante sopra per scaricare il file (si aprirà nel browser del telefono).",
      "Il telefono avviserà che il file proviene da fuori Google Play — è normale quando si installa fuori dallo store. Tocca \"Scarica comunque\" / \"Installa comunque\" e attendi circa 10 secondi per la scansione.",
      "Se richiesto, consenti \"Installa app sconosciute\" per il browser solo questa volta (le Impostazioni ti guideranno) e torna all'installazione.",
      "Dopo l'installazione, apri l'app e accedi con il tuo numero di telefono alla prossima visita.",
    ],
    playNotice: "Quando l'app sarà disponibile su Google Play, questa pagina verrà aggiornata con il link allo store.",
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
    alternates: { canonical: `${SITE_URL}/${locale}/pobierz-aplikacje` },
  };
}

export default async function PobierzAplikacje({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const c = copy[locale];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href={`/${locale}`} className="hover:text-gray-700">{c.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">{c.breadcrumbCurrent}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">{c.pageTitle}</h1>
        <p className="text-gray-600 mb-8">{c.intro}</p>

        <a
          href={APK_PATH}
          download
          className="inline-block bg-black text-white rounded-lg px-6 py-3 font-medium hover:bg-gray-800 transition-colors mb-4"
        >
          {c.downloadButton}
        </a>

        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          {c.temporaryNotice}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.stepsTitle}</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
          {c.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="text-sm text-gray-500">{c.playNotice}</p>
      </div>
    </main>
  );
}
