import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://starlinkee.com";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Starlinkee",
  description: "Polityka prywatności serwisu Starlinkee — informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  alternates: { canonical: `${SITE_URL}/polityka-prywatnosci` },
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Strona główna</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Polityka Prywatności</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Polityka Prywatności</h1>
        <p className="text-sm text-gray-500 mb-10">Ostatnia aktualizacja: 30 czerwca 2026 r.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest:<br />
              <strong>[NAZWA FIRMY / IMIĘ I NAZWISKO]</strong><br />
              [ADRES REJESTROWY]<br />
              NIP: [NIP]<br />
              REGON: [REGON] (jeśli dotyczy)<br />
              e-mail: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Dane kontaktowe Inspektora Ochrony Danych</h2>
            <p>
              Jeśli powołałeś/powołałaś Inspektora Ochrony Danych, podaj jego dane tutaj. W przeciwnym razie usuń tę sekcję lub zaznacz, że nie powołano IOD (dopuszczalne dla małych firm, które nie przetwarzają danych na dużą skalę).
            </p>
            <p>IOD: [IMIĘ I NAZWISKO IOD lub &quot;Nie powołano Inspektora Ochrony Danych&quot;]</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Jakie dane zbieramy i w jakim celu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Cel przetwarzania</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Kategorie danych</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Podstawa prawna (RODO)</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Okres przechowywania</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Realizacja zamówienia</td>
                    <td className="p-3 border border-gray-200">imię, nazwisko, adres, e-mail, telefon</td>
                    <td className="p-3 border border-gray-200">Art. 6 ust. 1 lit. b – wykonanie umowy</td>
                    <td className="p-3 border border-gray-200">5 lat od końca roku podatkowego</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Obsługa formularza kontaktowego</td>
                    <td className="p-3 border border-gray-200">imię, e-mail, treść wiadomości</td>
                    <td className="p-3 border border-gray-200">Art. 6 ust. 1 lit. f – prawnie uzasadniony interes</td>
                    <td className="p-3 border border-gray-200">12 miesięcy od ostatniego kontaktu</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Newsletter</td>
                    <td className="p-3 border border-gray-200">adres e-mail</td>
                    <td className="p-3 border border-gray-200">Art. 6 ust. 1 lit. a – zgoda</td>
                    <td className="p-3 border border-gray-200">Do wycofania zgody</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Analityka i cookies</td>
                    <td className="p-3 border border-gray-200">dane o aktywności, adres IP</td>
                    <td className="p-3 border border-gray-200">Art. 6 ust. 1 lit. a – zgoda</td>
                    <td className="p-3 border border-gray-200">Zgodnie z Polityką Cookies</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Obowiązki księgowe i podatkowe</td>
                    <td className="p-3 border border-gray-200">dane z faktury</td>
                    <td className="p-3 border border-gray-200">Art. 6 ust. 1 lit. c – obowiązek prawny</td>
                    <td className="p-3 border border-gray-200">5 lat od końca roku podatkowego</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Odbiorcy danych</h2>
            <p>Twoje dane mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Dostawcy usług płatniczych (np. [NAZWA OPERATORA PŁATNOŚCI, np. Stripe, PayU, Przelewy24])</li>
              <li>Dostawcy usług hostingowych i infrastruktury IT</li>
              <li>Dostawcy usług e-mail i newslettera (np. [NAZWA DOSTAWCY, np. Mailchimp, Brevo])</li>
              <li>Biuro rachunkowe / księgowe</li>
              <li>Podmioty świadczące usługi kurierskie i pocztowe (jeśli dotyczy wysyłki fizycznej)</li>
            </ul>
            <p className="mt-3">
              Nie sprzedajemy Twoich danych osobowych podmiotom trzecim w celach marketingowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Przekazywanie danych poza EOG</h2>
            <p>
              Jeśli korzystasz z usług dostawców spoza Europejskiego Obszaru Gospodarczego (np. Google, Meta), Twoje dane mogą być przekazywane do państw trzecich. Transfer odbywa się na podstawie standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską lub innych mechanizmów przewidzianych przez RODO. Szczegółowe informacje znajdziesz w politykach prywatności poszczególnych dostawców.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Twoje prawa</h2>
            <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Prawo dostępu</strong> – możesz uzyskać kopię swoich danych (art. 15 RODO)</li>
              <li><strong>Prawo do sprostowania</strong> – możesz poprawić nieprawidłowe dane (art. 16 RODO)</li>
              <li><strong>Prawo do usunięcia</strong> – możesz zażądać usunięcia danych w określonych przypadkach (art. 17 RODO)</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> – możesz żądać zawieszenia przetwarzania (art. 18 RODO)</li>
              <li><strong>Prawo do przenoszenia danych</strong> – możesz otrzymać dane w ustrukturyzowanym formacie (art. 20 RODO)</li>
              <li><strong>Prawo do sprzeciwu</strong> – możesz sprzeciwić się przetwarzaniu opartemu na prawnie uzasadnionym interesie (art. 21 RODO)</li>
              <li><strong>Prawo do cofnięcia zgody</strong> – w każdej chwili, bez wpływu na zgodność z prawem przetwarzania przed cofnięciem</li>
            </ul>
            <p className="mt-3">
              Wnioski kieruj na adres e-mail: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a>.<br />
              Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
            <p>
              Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania, które wywoływałoby skutki prawne lub w podobny sposób istotnie wpływało na Ciebie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Pliki cookies</h2>
            <p>
              Szczegółowe informacje dotyczące plików cookies znajdziesz w naszej{" "}
              <Link href="/polityka-cookies" className="text-blue-600 hover:underline">Polityce Cookies</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Zmiany Polityki Prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności. O wszelkich istotnych zmianach poinformujemy Cię za pośrednictwem wiadomości e-mail lub komunikatu na stronie. Data ostatniej aktualizacji widnieje na górze dokumentu.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
