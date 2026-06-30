import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://starlinkee.pl";

export const metadata: Metadata = {
  title: "Regulamin Sklepu | Starlinkee",
  description: "Regulamin sprzedaży produktów Starlinkee — warunki zakupu, prawo do odstąpienia od umowy, reklamacje.",
  alternates: { canonical: `${SITE_URL}/regulamin` },
};

export default function Regulamin() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Strona główna</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Regulamin</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Regulamin Sklepu Internetowego</h1>
        <p className="text-sm text-gray-500 mb-10">Ostatnia aktualizacja: 30 czerwca 2026 r.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 1. Dane Sprzedawcy</h2>
            <p>
              Sprzedawcą jest:<br />
              <strong>[NAZWA FIRMY / IMIĘ I NAZWISKO]</strong><br />
              [ADRES REJESTROWY]<br />
              NIP: [NIP]<br />
              REGON: [REGON] (jeśli dotyczy)<br />
              Wpisany do [KRS / CEIDG]: [NUMER WPISU]<br />
              e-mail: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a><br />
              Telefon: [NUMER TELEFONU] (dostępny w godzinach [GODZINY PRACY])<br />
              Organ nadzoru: Prezes Urzędu Ochrony Konkurencji i Konsumentów (UOKiK)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 2. Definicje</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sklep</strong> – serwis internetowy dostępny pod adresem {SITE_URL}</li>
              <li><strong>Sprzedawca</strong> – podmiot wskazany w § 1</li>
              <li><strong>Kupujący</strong> – osoba fizyczna, prawna lub jednostka organizacyjna składająca zamówienie</li>
              <li><strong>Konsument</strong> – Kupujący będący osobą fizyczną dokonującą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową</li>
              <li><strong>Produkt</strong> – towar lub usługa cyfrowa dostępna w Sklepie</li>
              <li><strong>Umowa</strong> – umowa sprzedaży zawarta na odległość za pośrednictwem Sklepu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 3. Wymagania techniczne</h2>
            <p>Do korzystania ze Sklepu wymagane jest:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Dostęp do Internetu</li>
              <li>Aktualna przeglądarka internetowa obsługująca JavaScript i pliki cookies</li>
              <li>Aktywny adres e-mail</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 4. Składanie zamówień</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu przez stronę internetową Sklepu.</li>
              <li>W celu złożenia zamówienia Kupujący wypełnia formularz zamówienia, podając dane niezbędne do realizacji.</li>
              <li>Złożenie zamówienia stanowi ofertę zakupu. Umowa zostaje zawarta z chwilą wysłania przez Sprzedawcę potwierdzenia przyjęcia zamówienia do realizacji.</li>
              <li>Ceny podane w Sklepie są cenami brutto (zawierają VAT) i wyrażone są w złotych polskich (PLN) lub innej wskazanej walucie.</li>
              <li>Sprzedawca zastrzega sobie prawo do odmowy realizacji zamówienia w przypadku: podania nieprawidłowych danych, niedostępności produktu lub uzasadnionych podejrzeń działania niezgodnego z prawem.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 5. Płatności</h2>
            <p>Dostępne metody płatności:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>[WYMIEŃ METODY PŁATNOŚCI, np. karta płatnicza, przelew bankowy, BLIK, PayU, Przelewy24, Stripe]</li>
            </ul>
            <p className="mt-3">
              Płatność powinna zostać dokonana w ciągu [LICZBA] dni roboczych od złożenia zamówienia, chyba że inaczej wskazano. Brak płatności w tym terminie skutkuje anulowaniem zamówienia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 6. Realizacja zamówienia i dostawa</h2>
            <p>
              [UZUPEŁNIJ stosownie do swojego produktu. Przykłady poniżej — usuń nieaktualne akapity:]
            </p>
            <p className="mt-2 italic text-gray-500">Dla produktów fizycznych:</p>
            <p>
              Zamówienie jest realizowane w ciągu [LICZBA] dni roboczych od zaksięgowania płatności. Dostawa odbywa się za pośrednictwem [KURIER/POCZTA POLSKA]. Koszty dostawy wskazane są w podsumowaniu zamówienia.
            </p>
            <p className="mt-2 italic text-gray-500">Dla produktów/usług cyfrowych:</p>
            <p>
              Dostęp do produktu cyfrowego / licencja zostaje aktywowana niezwłocznie po zaksięgowaniu płatności i przesłana na podany adres e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 7. Prawo do odstąpienia od umowy</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-blue-800">Informacja dla Konsumentów</p>
              <p className="text-sm text-blue-700 mt-1">
                Zgodnie z art. 27 ustawy z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2014 poz. 827 ze zm.) masz prawo odstąpić od umowy zawartej na odległość bez podania przyczyny.
              </p>
            </div>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Termin na odstąpienie wynosi <strong>14 dni</strong> od dnia, w którym wszedłeś/weszłaś w posiadanie towaru (lub ostatniego towaru przy kilku sztukach) albo od dnia zawarcia umowy (dla usług i treści cyfrowych).
              </li>
              <li>
                Aby skorzystać z prawa do odstąpienia, poinformuj nas o swojej decyzji w drodze jednoznacznego oświadczenia (np. pismo wysłane pocztą lub e-mailem na adres: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a>). Możesz skorzystać ze wzoru formularza odstąpienia stanowiącego Załącznik nr 1 do niniejszego Regulaminu.
              </li>
              <li>
                Do zachowania terminu wystarczy wysłanie oświadczenia przed jego upływem.
              </li>
              <li>
                W przypadku odstąpienia Sprzedawca zwróci wszystkie otrzymane od Ciebie płatności, w tym koszty dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Ciebie sposobu dostarczenia innego niż najtańszy), nie później niż 14 dni od dnia otrzymania oświadczenia o odstąpieniu. Zwrot nastąpi przy użyciu takich samych sposobów płatności, jakie zostały użyte przez Ciebie.
              </li>
              <li>
                Jeżeli Sprzedawca nie zaproponował, że sam odbierze towar, może wstrzymać się ze zwrotem płatności do chwili otrzymania towaru z powrotem lub dostarczenia dowodu jego odesłania.
              </li>
              <li>
                Towar należy odesłać lub przekazać na adres: <strong>[ADRES DO ZWROTÓW]</strong> nie później niż 14 dni od dnia, w którym poinformowałeś/poinformowałaś nas o odstąpieniu od umowy. Bezpośrednie koszty zwrotu ponosi Kupujący.
              </li>
              <li>
                Ponosisz odpowiedzialność za zmniejszenie wartości towaru wynikające z korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru.
              </li>
            </ol>
            <p className="mt-4 font-semibold">Wyjątki od prawa do odstąpienia (art. 38 ustawy o prawach konsumenta):</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Produkty wykonane na indywidualne zamówienie Konsumenta</li>
              <li>Treści cyfrowe dostarczane w sposób inny niż na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą Konsumenta przed upływem terminu i po poinformowaniu go o utracie prawa do odstąpienia</li>
              <li>[UZUPEŁNIJ inne wyjątki jeśli dotyczą Twojego produktu]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 8. Reklamacje i rękojmia</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Sprzedawca ponosi odpowiedzialność za wady towaru na podstawie przepisów kodeksu cywilnego o rękojmi (art. 556 i nast. k.c.) oraz, w stosunku do Konsumentów, przepisów ustawy o prawach konsumenta.
              </li>
              <li>
                Reklamację można złożyć:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>e-mailem na adres: <a href="mailto:[EMAIL KONTAKTOWY]" className="text-blue-600 hover:underline">[EMAIL KONTAKTOWY]</a></li>
                  <li>pisemnie na adres: [ADRES DO REKLAMACJI]</li>
                </ul>
              </li>
              <li>
                Reklamacja powinna zawierać: imię i nazwisko, adres e-mail, numer zamówienia, opis wady oraz żądanie (naprawa, wymiana, obniżenie ceny, odstąpienie od umowy).
              </li>
              <li>
                Sprzedawca rozpatruje reklamację w terminie <strong>14 dni</strong> od jej otrzymania i informuje Kupującego o sposobie rozpatrzenia.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 9. Pozasądowe sposoby rozstrzygania sporów</h2>
            <p>
              Konsument ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Platforma ODR (Online Dispute Resolution) Komisji Europejskiej:{" "}
                <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  ec.europa.eu/consumers/odr
                </a>
              </li>
              <li>Stały Polubowny Sąd Konsumencki przy właściwym Inspektoracie Inspekcji Handlowej</li>
              <li>Powiatowy lub Miejski Rzecznik Praw Konsumentów</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 10. Ochrona danych osobowych</h2>
            <p>
              Szczegółowe informacje o przetwarzaniu danych osobowych znajdziesz w naszej{" "}
              <Link href="/polityka-prywatnosci" className="text-blue-600 hover:underline">Polityce Prywatności</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">§ 11. Postanowienia końcowe</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności kodeksu cywilnego oraz ustawy o prawach konsumenta.</li>
              <li>Dla Konsumentów z innych państw UE, w zakresie ochrony ich praw, zastosowanie mogą znaleźć przepisy prawa państwa ich zwykłego pobytu.</li>
              <li>Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie po upływie 14 dni od ich publikacji i nie dotyczą zamówień złożonych przed zmianą.</li>
              <li>Regulamin obowiązuje od dnia [DATA WEJŚCIA W ŻYCIE].</li>
            </ol>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Załącznik nr 1 — Wzór formularza odstąpienia od umowy</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm">
              <p className="font-bold mb-4">FORMULARZ ODSTĄPIENIA OD UMOWY</p>
              <p>(wypełnij i odeślij tylko w przypadku chęci odstąpienia od umowy)</p>
              <br />
              <p>Adresat: [NAZWA FIRMY], [ADRES], [EMAIL]</p>
              <br />
              <p>
                Ja/My (*) niniejszym informuję/informujemy (*) o moim/naszym (*) odstąpieniu od umowy sprzedaży następujących towarów (*) / umowy o dostarczenie następujących treści cyfrowych (*) / umowy o świadczenie następującej usługi (*):
              </p>
              <br />
              <p>Data zawarcia umowy (*) / odbioru (*): .........................................................</p>
              <br />
              <p>Imię i nazwisko konsumenta(-ów): ................................................................</p>
              <br />
              <p>Adres konsumenta(-ów): .............................................................................</p>
              <br />
              <p>Numer zamówienia: .....................................................................................</p>
              <br />
              <p>Podpis konsumenta(-ów) (tylko jeżeli formularz jest przesyłany w wersji papierowej):</p>
              <br />
              <p>.....................................................</p>
              <br />
              <p>Data: ................................................</p>
              <br />
              <p className="text-xs text-gray-500">(*) Niepotrzebne skreślić</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
