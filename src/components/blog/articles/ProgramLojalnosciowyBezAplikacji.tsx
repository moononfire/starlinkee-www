import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function ProgramLojalnosciowyBezAplikacji() {
  return (
    <>
      {/* ── LEAD + SPIS TREŚCI ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Pozyskanie nowego klienta kosztuje średnio pięć razy więcej niż utrzymanie obecnego, a
          mimo to większość lokalnych firm nie ma żadnego systemu, który nagradzałby powroty.
          Papierowa karta ginie w portfelu, a aplikacja mobilna wymaga pobrania, założenia konta
          i zgody na powiadomienia — czyli trzech barier, które odrzucają większość klientów, zanim
          zdążą skorzystać z pierwszej nagrody. Ten artykuł pokazuje, jak zbudować program
          lojalnościowy, który działa bez papieru i bez aplikacji, a przy okazji wzmacnia liczbę
          opinii Google i bazę kontaktów marketingowych.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-lojalnosc" className="text-blue-600 hover:underline">
                1. Dlaczego warto inwestować w powracających klientów?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#koszt-utraty" className="text-blue-600 hover:underline">
                    1.1. Ile naprawdę kosztuje utrata stałego klienta?
                  </a>
                </li>
                <li>
                  <a href="#dlaczego-aplikacje-zawodza" className="text-blue-600 hover:underline">
                    1.2. Dlaczego aplikacje lojalnościowe zwykle zawodzą?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-dziala-karta-nfc" className="text-blue-600 hover:underline">
                2. Jak działa cyfrowa karta lojalnościowa bez aplikacji?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#technologia" className="text-blue-600 hover:underline">
                    2.1. Technologia NFC w praktyce
                  </a>
                </li>
                <li>
                  <a href="#sciezka-klienta" className="text-blue-600 hover:underline">
                    2.2. Ścieżka klienta krok po kroku
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-zaprojektowac" className="text-blue-600 hover:underline">
                3. Jak zaprojektować skuteczny program lojalnościowy?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#prog-nagrody" className="text-blue-600 hover:underline">
                    3.1. Próg nagrody i częstotliwość wizyt
                  </a>
                </li>
                <li>
                  <a href="#przyklady-progow" className="text-blue-600 hover:underline">
                    3.2. Przykładowe progi nagród dla różnych branż
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#lojalnosc-a-opinie" className="text-blue-600 hover:underline">
                4. Program lojalnościowy a marketing SMS i opinie Google
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-i-lojalnosc" className="text-blue-600 hover:underline">
                    4.1. Jak połączyć lojalność z kuponami SMS?
                  </a>
                </li>
                <li>
                  <a href="#lojalni-a-opinie" className="text-blue-600 hover:underline">
                    4.2. Dlaczego lojalni klienci częściej zostawiają opinie?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#wdrozenie" className="text-blue-600 hover:underline">
                5. Jak wdrożyć program lojalnościowy krok po kroku?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#etapy-wdrozenia" className="text-blue-600 hover:underline">
                    5.1. Etapy wdrożenia
                  </a>
                </li>
                <li>
                  <a href="#bledy-wdrozenia" className="text-blue-600 hover:underline">
                    5.2. Najczęstsze błędy przy wdrażaniu
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                6. Podsumowanie — lojalność bez tarcia
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                7. FAQ — Najczęściej zadawane pytania
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── SEKCJA 1 ── */}
      <div className={P}>
        <h2 id="dlaczego-lojalnosc" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Dlaczego warto inwestować w powracających klientów?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Większość budżetów marketingowych lokalnych firm ucieka na pozyskiwanie nowych gości —
          reklamy, promocje na start, obecność w mediach społecznościowych. Tymczasem to klienci,
          którzy już raz wybrali Twój lokal czy salon, generują największą część przychodu i, co
          ważniejsze, najczęściej polecają go dalej. Program lojalnościowy zamienia przypadkowy
          powrót w powtarzalny nawyk.
        </p>

        <h3 id="koszt-utraty" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Ile naprawdę kosztuje utrata stałego klienta?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Pozyskanie nowego klienta wymaga reklamy, czasu na budowanie zaufania i często pierwszej
          wizyty w cenie promocyjnej. Stały klient tych kosztów już nie generuje — a mimo to
          większość firm nie robi nic, żeby świadomie zatrzymać go na dłużej. Brak systemu
          nagradzania powrotów oznacza, że klient równie chętnie wybierze konkurencję, jeśli
          akurat trafi na jej promocję.
        </p>

        <h3 id="dlaczego-aplikacje-zawodza" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Dlaczego aplikacje lojalnościowe zwykle zawodzą?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Klasyczna aplikacja mobilna dla pojedynczej restauracji czy salonu ma jedną wadę, której
          nie da się obejść: nikt nie chce ściągać osobnej aplikacji dla każdej firmy, z której
          korzysta okazjonalnie. Pobranie, rejestracja i zgoda na powiadomienia to trzy bariery,
          na których odpada zdecydowana większość klientów — zanim w ogóle zobaczą pierwszą
          korzyść z programu. Papierowa karta ma z kolei odwrotny problem: ginie, brudzi się
          i nie daje żadnych danych o tym, kto i jak często wraca.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/papierowa-karta.webp"
          alt="Znoszona, poplamiona papierowa karta lojalnościowa zgnieciona na dnie portfela wśród paragonów"
        />
      </div>

      {/* ── SEKCJA 2 ── */}
      <div className={P}>
        <h2 id="jak-dziala-karta-nfc" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Jak działa cyfrowa karta lojalnościowa bez aplikacji?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rozwiązaniem pośrednim między papierem a aplikacją jest cyfrowa karta lojalnościowa
          oparta na technologii zbliżeniowej. Klient nie instaluje niczego — cała interakcja
          odbywa się w przeglądarce telefonu, a wizyty zapisują się automatycznie po jednym
          zbliżeniu do tabliczki NFC przy kasie lub recepcji.
        </p>

        <h3 id="technologia" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Technologia NFC w praktyce
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          NFC (Near Field Communication) to ten sam standard komunikacji zbliżeniowej, który stoi
          za płatnościami zbliżeniowymi kartą czy telefonem. Tabliczka lub naklejka NFC nie
          wymaga zasilania — wystarczy zbliżyć telefon na kilka centymetrów, żeby system otworzył
          odpowiednią stronę w przeglądarce. Żadnej aplikacji, żadnego Bluetooth do parowania,
          żadnego kodu QR do skanowania w słabym świetle.
        </p>

        <h3 id="sciezka-klienta" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Ścieżka klienta krok po kroku
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Klient przykłada telefon do tabliczki NFC przy kasie, ladzie lub recepcji.</li>
          <li>Przeglądarka otwiera stronę z jego cyfrową kartą — bez logowania, na podstawie numeru telefonu.</li>
          <li>System dolicza kolejną wizytę i pokazuje, ile brakuje do nagrody.</li>
          <li>Po osiągnięciu progu klient dostaje powiadomienie SMS z informacją o przyznanej nagrodzie.</li>
          <li>Przy kolejnej wizycie personel po prostu odbiera nagrodę na podstawie numeru w panelu.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cały proces po stronie klienta trwa dosłownie sekundę — krócej niż odnalezienie
          papierowej karty w portfelu. Po stronie firmy każda wizyta trafia od razu do panelu
          administracyjnego, gdzie widać historię odwiedzin, liczbę aktywnych kart i postęp
          poszczególnych klientów do progu nagrody.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/nfc.webp"
          alt="Dłoń klienta trzymająca telefon przy nowoczesnej ladzie recepcyjnej w salonie fryzjerskim, naturalny gest, ekran poza kadrem"
        />
      </div>

      {/* ── PRZEJŚCIE 2→3 ── */}
      <SectionDivider quote="Program lojalnościowy, który wymaga wysiłku od klienta, przestaje działać już przy drugiej wizycie." />

      {/* ── SEKCJA 3 ── */}
      <div className={P}>
        <h2 id="jak-zaprojektowac" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Jak zaprojektować skuteczny program lojalnościowy?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sama technologia nie wystarczy — o skuteczności programu decyduje to, jak ustawisz próg
          nagrody i jak dopasujesz go do rzeczywistej częstotliwości wizyt w Twojej branży. Zbyt
          wysoki próg zniechęca, zbyt niski nie generuje realnej marży ani lojalności.
        </p>

        <h3 id="prog-nagrody" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Próg nagrody i częstotliwość wizyt
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dobry punkt wyjścia to spojrzenie na to, jak często przeciętny klient odwiedza dane
          miejsce w naturalnym cyklu. Fryzjer lub barber odwiedzany co 4–6 tygodni potrzebuje
          innego progu niż kawiarnia, do której klient wpada codziennie rano. Zasada jest prosta:
          nagroda powinna być osiągalna w rozsądnym czasie — od kilku tygodni do maksymalnie
          dwóch–trzech miesięcy — inaczej klient zapomni o programie, zanim dotrze do celu.
        </p>

        <h3 id="przyklady-progow" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Przykładowe progi nagród dla różnych branż
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Kawiarnia:</strong> co 8. kawa gratis — przy codziennych wizytach próg osiągany w około dwa tygodnie.</li>
          <li><strong>Restauracja:</strong> po 5 wizytach deser lub przystawka gratis do rachunku.</li>
          <li><strong>Salon fryzjerski / barbershop:</strong> co 6. strzyżenie z rabatem 50% — dopasowane do naturalnego cyklu wizyt.</li>
          <li><strong>Salon kosmetyczny:</strong> po 4 zabiegach jeden zabieg pielęgnacyjny gratis.</li>
          <li><strong>Siłownia / studio fitness:</strong> nagroda za serię wizyt w miesiącu, np. gratisowy trening personalny po 12 wejściach.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ważniejsza od wysokości nagrody jest jej prostota — klient powinien od razu rozumieć
          zasadę, bez czytania regulaminu. „Co 8. kawa gratis” działa lepiej niż system punktowy
          wymagający przeliczania.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/progi.webp"
          alt="Tablica kredowa przy ladzie kawiarni z odręcznym napisem o nagrodzie w programie lojalnościowym"
        />
      </div>

      {/* ── BANER NEWSLETTER — pełna szerokość ── */}
      <NewsletterBlogBanner locale="pl" />

      {/* ── SEKCJA 4 ── */}
      <div className={P}>
        <h2 id="lojalnosc-a-opinie" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Program lojalnościowy a marketing SMS i opinie Google
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Karta lojalnościowa oparta na numerze telefonu ma dodatkową przewagę nad papierem —
          każda wizyta buduje jednocześnie bazę kontaktów, na której można oprzeć dalszy marketing.
          To połączenie trzech elementów: lojalności, promocji i reputacji, w jednym systemie.
        </p>

        <h3 id="sms-i-lojalnosc" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Jak połączyć lojalność z kuponami SMS?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gdy klient zbiera wizyty na cyfrowej karcie i zgadza się na kontakt marketingowy zgodnie
          z RODO, jego numer trafia do bazy, którą można wykorzystać do wysyłki spersonalizowanych
          kuponów SMS. Klient, który jest jedną wizytą od nagrody, a nie odwiedził lokalu od trzech
          tygodni, to naturalny odbiorca przypomnienia z drobnym bonusem — dokładnie w momencie,
          gdy najłatwiej go odzyskać.
        </p>

        <h3 id="lojalni-a-opinie" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Dlaczego lojalni klienci częściej zostawiają opinie?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Klient, który wraca regularnie i czuje się doceniony przez program nagród, znacznie
          chętniej poświęci dziesięć sekund na wystawienie opinii niż osoba odwiedzająca lokal
          jednorazowo. To dlatego warto łączyć moment zbierania wizyty z prośbą o ocenę — na
          przykład przy okazji odbioru nagrody. Dokładnie tak działa{" "}
          <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            tabliczka NFC Starlinkee
          </Link>
          : jedno urządzenie obsługuje jednocześnie kartę lojalnościową, formularz oceny Google
          i filtr chroniący przed niesprawiedliwymi opiniami. Jeśli chcesz dowiedzieć się, jak
          samo zbieranie recenzji wygląda krok po kroku, sprawdź artykuł o tym,{" "}
          <Link href="/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">
            jak szybko zdobyć opinie w Google
          </Link>
          . Zasady odpowiadania na te opinie — także te trudniejsze — opisaliśmy z kolei w tekście{" "}
          <Link href="/blog/jak-odpowiadac-na-opinie-w-google" className="text-blue-600 hover:underline">
            jak odpowiadać na opinie w Google
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="Uśmiechnięta klientka wraca do kawiarni, trzymając telefon przy boku, ekran niewidoczny"
        />
      </div>

      {/* ── PRZEJŚCIE 4→5 ── */}
      <SectionDivider quote="Lojalność klienta nie bierze się z rabatu — bierze się z tego, jak łatwo jest wrócić." />

      {/* ── SEKCJA 5 ── */}
      <div className={P}>
        <h2 id="wdrozenie" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Jak wdrożyć program lojalnościowy krok po kroku?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wdrożenie cyfrowego programu lojalnościowego w lokalnym biznesie nie wymaga integracji
          z kasą fiskalną ani szkolenia personelu przez tydzień. Cały proces sprowadza się do
          kilku prostych kroków.
        </p>

        <h3 id="etapy-wdrozenia" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Etapy wdrożenia
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Ustal próg nagrody i jej rodzaj, dopasowany do naturalnej częstotliwości wizyt.</li>
          <li>Ustaw tabliczkę NFC w widocznym miejscu — przy kasie, ladzie lub recepcji.</li>
          <li>Poinformuj personel, żeby przy każdej wizycie przypominał o przyłożeniu telefonu.</li>
          <li>Dodaj krótką informację o programie na stoliku, w oknie lub przy wejściu.</li>
          <li>Monitoruj w panelu administracyjnym, ilu klientów aktywnie zbiera wizyty, i reaguj kuponem SMS, gdy aktywność spada.</li>
        </ol>

        <h3 id="bledy-wdrozenia" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Najczęstsze błędy przy wdrażaniu
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Zbyt wysoki próg nagrody</strong> — klient rezygnuje, zanim zobaczy pierwszą korzyść.</li>
          <li><strong>Brak przypomnienia ze strony personelu</strong> — klienci szybko zapominają o przyłożeniu telefonu, jeśli nikt im o tym nie mówi.</li>
          <li><strong>Zbyt skomplikowane zasady</strong> — system punktowy z przelicznikami zniechęca bardziej niż prosty licznik wizyt.</li>
          <li><strong>Brak informacji o programie w widocznym miejscu</strong> — klient nie skorzysta z czegoś, o czym nie wie.</li>
          <li><strong>Ignorowanie danych z panelu</strong> — same dane o wizytach nie zwiększą lojalności, jeśli nikt nie reaguje na spadek aktywności kuponem czy przypomnieniem.</li>
        </ul>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/wdrozenie.webp"
          alt="Właściciel restauracji z entuzjazmem opowiada uśmiechniętemu klientowi o nowości przy ladzie"
        />
      </div>

      {/* ── PODSUMOWANIE ── */}
      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — lojalność bez tarcia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Klienci nie rezygnują z programów lojalnościowych, bo nie chcą nagród — rezygnują,
            bo droga do nich jest zbyt uciążliwa. Papierowa karta ginie, aplikacja wymaga
            pobrania, a oba rozwiązania nie dają Ci żadnych danych o tym, kto naprawdę wraca.
            Cyfrowa karta oparta na NFC usuwa tę barierę: jedno zbliżenie telefonu, zero
            instalacji, pełna widoczność w panelu administracyjnym. Jeśli chcesz połączyć
            zbieranie wizyt z opiniami Google i kuponami SMS w jednym systemie, sprawdź, jak
            działa{" "}
            <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              tabliczka NFC Starlinkee
            </Link>
            {" "}z wbudowaną cyfrową kartą lojalnościową.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Najczęściej zadawane pytania
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy klient musi pobrać aplikację, żeby korzystać z cyfrowej karty lojalnościowej?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie. Cała karta działa w przeglądarce telefonu po zbliżeniu go do tabliczki NFC —
                bez instalacji, bez zakładania konta i bez logowania hasłem.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Jaki próg nagrody sprawdza się najlepiej?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Taki, który klient osiąga w ciągu kilku tygodni do maksymalnie dwóch–trzech
                miesięcy, dopasowany do naturalnej częstotliwości wizyt w Twojej branży. Zbyt
                odległa nagroda traci moc motywacyjną.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy dane zebrane przez program lojalnościowy można wykorzystać do marketingu SMS?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tak, pod warunkiem uzyskania zgody marketingowej zgodnej z RODO w momencie
                zbierania numeru telefonu. Po jej udzieleniu numer można wykorzystać do wysyłki
                kuponów i przypomnień o programie.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy program lojalnościowy działa też dla salonów i gabinetów, nie tylko gastronomii?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tak. Sprawdza się wszędzie tam, gdzie klient wraca cyklicznie — salony fryzjerskie,
                barbershopy, gabinety kosmetyczne, siłownie czy warsztaty samochodowe. Kluczem jest
                dopasowanie progu nagrody do rzeczywistego rytmu wizyt danej branży.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czym różni się karta lojalnościowa NFC od kodu QR?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Kod QR wymaga uruchomienia aparatu, odpowiedniego oświetlenia i wycelowania
                telefonu, co bywa niewygodne przy kasie. Tabliczka NFC wystarczy zbliżyć —
                działanie trwa ułamek sekundy i nie zależy od jakości skanu.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
