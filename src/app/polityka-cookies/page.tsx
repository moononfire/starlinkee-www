import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://starlinkee.pl";

export const metadata: Metadata = {
  title: "Polityka Cookies | Starlinkee",
  description: "Polityka plików cookies serwisu Starlinkee — jakie cookies używamy i jak nimi zarządzać.",
  alternates: { canonical: `${SITE_URL}/polityka-cookies` },
};

export default function PolitykaCookies() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Strona główna</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Polityka Cookies</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Polityka Cookies</h1>
        <p className="text-sm text-gray-500 mb-10">Ostatnia aktualizacja: 30 czerwca 2026 r.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Czym są pliki cookies?</h2>
            <p>
              Pliki cookies (ciasteczka) to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu (komputerze, smartfonie, tablecie) podczas odwiedzania stron internetowych. Cookies pozwalają stronie &ldquo;pamiętać&rdquo; Twoje działania i preferencje przez określony czas, dzięki czemu nie musisz ich ponownie podawać przy każdej wizycie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Jakich cookies używamy?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Kategoria</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Nazwa / Dostawca</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Cel</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Czas ważności</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Zgoda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Niezbędne</td>
                    <td className="p-3 border border-gray-200">[session], [csrf_token]</td>
                    <td className="p-3 border border-gray-200">Bezpieczeństwo, sesja, koszyk</td>
                    <td className="p-3 border border-gray-200">Sesja / 1 rok</td>
                    <td className="p-3 border border-gray-200">Nie wymagana</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Preferencji</td>
                    <td className="p-3 border border-gray-200">[cookie_consent], [lang]</td>
                    <td className="p-3 border border-gray-200">Zapamiętanie zgody cookies, język</td>
                    <td className="p-3 border border-gray-200">1 rok</td>
                    <td className="p-3 border border-gray-200">Nie wymagana</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Analityczne</td>
                    <td className="p-3 border border-gray-200">Google Analytics (_ga, _gid)</td>
                    <td className="p-3 border border-gray-200">Statystyki ruchu, analiza zachowań użytkowników</td>
                    <td className="p-3 border border-gray-200">2 lata / 24 godz.</td>
                    <td className="p-3 border border-gray-200 text-amber-700 font-medium">Wymagana</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Marketingowe</td>
                    <td className="p-3 border border-gray-200">[NAZWA NARZĘDZIA, np. Meta Pixel, Google Ads]</td>
                    <td className="p-3 border border-gray-200">Remarketing, mierzenie konwersji reklam</td>
                    <td className="p-3 border border-gray-200">[CZAS]</td>
                    <td className="p-3 border border-gray-200 text-amber-700 font-medium">Wymagana</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Uzupełnij tabelę o rzeczywiste nazwy cookies używane w Twoim serwisie. Listę możesz uzyskać w narzędziach deweloperskich przeglądarki (DevTools → Application → Cookies).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies niezbędne a opcjonalne</h2>
            <p>
              <strong>Cookies niezbędne</strong> są konieczne do prawidłowego działania strony i nie wymagają Twojej zgody — umieszczamy je automatycznie. Bez nich strona nie mogłaby funkcjonować poprawnie.
            </p>
            <p className="mt-3">
              <strong>Cookies analityczne i marketingowe</strong> wymagają Twojej dobrowolnej zgody wyrażonej poprzez baner cookie wyświetlany przy pierwszej wizycie. Możesz ją w każdej chwili wycofać, co nie wpłynie na zgodność z prawem przetwarzania przed wycofaniem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Podstawa prawna</h2>
            <p>
              Przetwarzanie danych za pośrednictwem cookies analitycznych i marketingowych odbywa się na podstawie art. 6 ust. 1 lit. a RODO (zgoda). Pliki cookies niezbędne opierają się na art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes — zapewnienie technicznego funkcjonowania serwisu).
            </p>
            <p className="mt-3">
              Korzystamy z cookies zgodnie z art. 173 ustawy Prawo telekomunikacyjne oraz wytycznymi dyrektywy ePrivacy (2002/58/WE).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Jak zarządzać cookies?</h2>
            <p>Masz kilka możliwości zarządzania plikami cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Baner cookie</strong> — przy pierwszej wizycie możesz wyrazić lub odrzucić zgodę na poszczególne kategorie cookies. Aby zmienić preferencje, wyczyść cookies w przeglądarce i odśwież stronę.
              </li>
              <li>
                <strong>Ustawienia przeglądarki</strong> — możesz zablokować lub usunąć cookies bezpośrednio w przeglądarce:
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
              </li>
              <li>
                <strong>Narzędzia opt-out dostawców</strong>:
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li>[DODAJ LINKI OPT-OUT DLA INNYCH NARZĘDZI]</li>
                </ul>
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Uwaga: wyłączenie cookies niezbędnych może spowodować problemy z działaniem strony lub procesu zakupu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies podmiotów trzecich</h2>
            <p>
              Nasza strona może korzystać z usług podmiotów trzecich, które instalują własne pliki cookies. Podmioty te mają własne polityki prywatności — zachęcamy do zapoznania się z nimi:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Google LLC — <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Polityka prywatności Google</a></li>
              <li>[INNY DOSTAWCA] — [LINK DO POLITYKI]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Zmiany Polityki Cookies</h2>
            <p>
              Zastrzegamy sobie prawo do zmiany niniejszej Polityki. Wszelkie zmiany wchodzą w życie w dniu opublikowania zaktualizowanego dokumentu na tej stronie. Data ostatniej aktualizacji widnieje na górze dokumentu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Kontakt</h2>
            <p>
              W sprawach dotyczących cookies i prywatności skontaktuj się z nami:<br />
              e-mail: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a>
            </p>
            <p className="mt-3">
              Więcej informacji o przetwarzaniu danych osobowych znajdziesz w naszej{" "}
              <Link href="/polityka-prywatnosci" className="text-blue-600 hover:underline">Polityce Prywatności</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
