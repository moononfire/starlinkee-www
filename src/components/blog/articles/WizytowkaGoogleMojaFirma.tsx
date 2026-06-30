import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function WizytowkaGoogleMojaFirma() {
  return (
    <>
      {/* ── LEAD + SPIS TREŚCI ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Wizytówka Google Moja Firma to dziś ważniejszy punkt kontaktu z klientem niż własna strona
          internetowa. Gdy ktoś wpisuje w telefonie „restauracja w pobliżu" lub „fryzjer Warszawa",
          algorytm decyduje w ułamku sekundy, który profil pokaże na szczycie mapy. Nie decyduje
          wygląd witryny. Decyduje to, jak dobrze wypełniłeś swój profil — i jak aktywnie go
          prowadzisz. Ten artykuł przeprowadzi Cię przez cały proces od zera do w pełni
          zoptymalizowanej wizytówki.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#co-to-jest" className="text-blue-600 hover:underline">
                1. Co to jest wizytówka Google Moja Firma i dlaczego ma znaczenie?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#profil-vs-strona" className="text-blue-600 hover:underline">
                    1.1. Czym różni się profil firmy od strony internetowej?
                  </a>
                </li>
                <li>
                  <a href="#wplyw-na-mapy" className="text-blue-600 hover:underline">
                    1.2. Jak wizytówka wpływa na wyniki w Google Maps?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-zalozyc" className="text-blue-600 hover:underline">
                2. Jak założyć i zweryfikować profil w Google?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#rejestracja" className="text-blue-600 hover:underline">
                    2.1. Rejestracja nowej wizytówki — krok po kroku
                  </a>
                </li>
                <li>
                  <a href="#weryfikacja" className="text-blue-600 hover:underline">
                    2.2. Weryfikacja adresu — czego się spodziewać?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-wypelnic" className="text-blue-600 hover:underline">
                3. Jak wypełnić wizytówkę Google krok po kroku?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#nazwa-kategoria-opis" className="text-blue-600 hover:underline">
                    3.1. Nazwa, kategoria i opis — co ma największy wpływ na SEO?
                  </a>
                </li>
                <li>
                  <a href="#godziny-zdjecia-atrybuty" className="text-blue-600 hover:underline">
                    3.2. Godziny otwarcia, zdjęcia i atrybuty
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#sygnaly-rankingowe" className="text-blue-600 hover:underline">
                4. Co wpływa na pozycję firmy w Google Maps?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#trzy-sygnaly" className="text-blue-600 hover:underline">
                    4.1. Trzy główne sygnały rankingowe Google
                  </a>
                </li>
                <li>
                  <a href="#aktywnosc-profilu" className="text-blue-600 hover:underline">
                    4.2. Jak regularnie aktualizować profil?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#posty-aktualizacje" className="text-blue-600 hover:underline">
                5. Posty i aktualizacje — jak utrzymać aktywną wizytówkę?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#czestotliwosc-postow" className="text-blue-600 hover:underline">
                    5.1. Jak często publikować posty w Google Moja Firma?
                  </a>
                </li>
                <li>
                  <a href="#tresc-postow" className="text-blue-600 hover:underline">
                    5.2. Jakie treści najlepiej angażują lokalnych klientów?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                6. Podsumowanie — wizytówka, która naprawdę pracuje
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
        <h2
          id="co-to-jest"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Co to jest wizytówka Google Moja Firma i dlaczego ma znaczenie?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile (dawniej Google Moja Firma) to bezpłatny panel, w którym
          definiujesz, jak Twoja firma pojawia się w wyszukiwarce Google i na Mapach Google. Gdy
          klient szuka produktu lub usługi w pobliżu, to właśnie wizytówka dostarcza mu nazwy,
          adresu, godzin otwarcia, zdjęć i opinii — zanim w ogóle trafi na Twoją stronę
          internetową. Dla większości firm lokalnych ten panel jest pierwszym i często jedynym
          punktem kontaktu z nowym klientem.
        </p>

        <h3
          id="profil-vs-strona"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Czym różni się profil firmy od strony internetowej?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Strona internetowa wymaga od klienta kliknięcia linku, załadowania podstrony i samodzielnego
          znalezienia godzin lub adresu. Wizytówka Google podaje te informacje natychmiast — w karcie
          wyników wyszukiwania, bez dodatkowych kliknięć. Co ważniejsze, profil w Google jest
          indeksowany osobno i może pozycjonować się wyżej niż Twoja witryna na frazy lokalne.
          Restauracja z dobrze prowadzoną wizytówką zdobędzie trafienia na „pizza Kraków" szybciej
          niż przez optymalizację własnej strony.
        </p>

        <h3
          id="wplyw-na-mapy"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak wizytówka wpływa na wyniki w Google Maps?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Maps i wyniki lokalne działają na bazie tzw. Local Pack — zestawu trzech firm,
          które algorytm uznaje za najbardziej trafne dla danego zapytania. Kto trafia do tego pakietu,
          zgarnia lwią część kliknięć. Algorytm bierze pod uwagę trzy czynniki: trafność (czy profil
          pasuje do zapytania), odległość (czy firma jest blisko szukającego) i rozpoznawalność
          (czy profil jest kompletny, aktywny i dobrze oceniany). Dwa z tych trzech czynników możesz
          bezpośrednio kontrolować przez swój panel.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma-local-pack.jpg"
          alt="Ekran smartfona z wynikami Google Maps pokazującymi trzy firmy w Local Pack z gwiazdkami i adresami"
        />
      </div>

      {/* ── SEKCJA 2 ── */}
      <div className={P}>
        <h2
          id="jak-zalozyc"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Jak założyć i zweryfikować profil w Google?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Jeśli Twoja firma jeszcze nie ma profilu, zaczynasz od wejścia na{" "}
          <a
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            business.google.com
          </a>{" "}
          i zalogowania się kontem Google. Ważne: jedno konto Google może zarządzać wieloma
          lokalizacjami, więc nie musisz tworzyć osobnych kont dla każdego oddziału. Cały proces
          rejestracji zajmuje kilkanaście minut. Weryfikacja bywa dłuższa — Google musi upewnić się,
          że firma faktycznie działa pod podanym adresem.
        </p>

        <h3
          id="rejestracja"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Rejestracja nowej wizytówki — krok po kroku
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Podczas rejestracji Google pyta o kilka kluczowych danych. Podawaj je dokładnie, bo
          każdą informację możesz później edytować, ale spójność danych od początku skraca czas
          weryfikacji i buduje zaufanie algorytmu.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Wejdź na <strong>business.google.com</strong> i kliknij „Zarządzaj teraz".</li>
          <li>Wpisz nazwę firmy — dokładnie taką, jakiej używasz na szyldzie i paragonie.</li>
          <li>Wybierz <strong>kategorię główną</strong> (np. „Restauracja", „Salon fryzjerski").</li>
          <li>Podaj adres lub zaznacz, że obsługujesz klientów w terenie.</li>
          <li>Dodaj numer telefonu i adres strony internetowej.</li>
          <li>Wybierz metodę weryfikacji i dokończ proces.</li>
        </ol>

        <h3
          id="weryfikacja"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Weryfikacja adresu — czego się spodziewać?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Najczęściej Google wysyła pocztówkę z kodem PIN na podany adres fizyczny. Czas oczekiwania
          to zwykle 5–14 dni. Niektóre branże i konta mogą skorzystać z szybszej weryfikacji przez
          SMS, nagranie wideo lub natychmiastową weryfikację przez wyszukiwarkę — jeśli ta opcja
          pojawia się na liście, korzystaj z niej w pierwszej kolejności. Do czasu zakończenia
          weryfikacji profil istnieje, ale nie pojawia się publicznie w wynikach wyszukiwania.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma-panel.jpg"
          alt="Panel administracyjny Google Business Profile widoczny na laptopie z wypełnionymi sekcjami profilu firmy"
        />
      </div>

      {/* ── PRZEJŚCIE 2→3 ── */}
      <SectionDivider quote="Profil w Google działa jak cyfrowy szyld — im więcej informacji, tym łatwiej klient podejmuje decyzję o wizycie." />

      {/* ── SEKCJA 3 ── */}
      <div className={P}>
        <h2
          id="jak-wypelnic"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Jak wypełnić wizytówkę Google krok po kroku?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Kompletność profilu to jeden z ważniejszych sygnałów dla algorytmu lokalnego SEO. Google
          sam informuje, że firmy z pełnymi danymi są „1,7 razy bardziej skłonne być postrzegane
          jako wiarygodne". W praktyce chodzi o to, żeby żadna sekcja nie była pusta — bo każda
          pusta rubryka to szansa dla konkurencji, która poświęciła czas na wypełnienie swojego
          profilu.
        </p>

        <h3
          id="nazwa-kategoria-opis"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Nazwa, kategoria i opis — co ma największy wpływ na SEO?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Nazwa</strong> powinna być identyczna z tą, której używasz w rzeczywistości.
          Nie dodawaj do niej słów kluczowych w stylu „Restauracja Marta — pizza Kraków centrum" —
          Google traktuje to jako spam i może zawiesić profil. Jeśli Twoja firma nazywa się
          „Restauracja Marta", tak wpisz w pole nazwy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Kategoria główna</strong> to najsilniejszy sygnał rankingowy spośród wszystkich
          pól wizytówki. Dobierz ją precyzyjnie. Jeśli prowadzisz pizzerię, wybierz „Pizzeria",
          nie ogólnikową „Restaurację". Możesz dodać do dziesięciu kategorii dodatkowych — np.
          „Restauracja włoska", „Bar", „Dostawa jedzenia" — ale nigdy nie rób tego na ślepo.
          Każda kategoria decyduje, na jakie zapytania możesz się pojawiać.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Opis firmy</strong> ma limit 750 znaków. Pierwsze 250 jest widoczne bez rozwijania,
          więc właśnie tam umieść najważniejsze informacje: czym się zajmujesz, dla kogo, gdzie i co
          Cię wyróżnia. Naturalnie wpleć słowa kluczowe — nie upychaj ich na siłę, bo opis czytają
          też prawdziwi klienci.
        </p>

        <h3
          id="godziny-zdjecia-atrybuty"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Godziny otwarcia, zdjęcia i atrybuty
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Godziny otwarcia</strong> muszą być aktualne. To błahostka, którą wiele firm
          zaniedbuje — a klient, który przyjedzie do zamkniętego lokalu, zostawi jedną gwiazdkę.
          Pamiętaj o dodaniu godzin wyjątkowych na święta i dni wolne.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Zdjęcia</strong> mają realne przełożenie na kliknięcia. Profile z minimum dziesięcioma
          zdjęciami generują trzykrotnie więcej próśb o wskazówki dojazdu. Dodaj: zdjęcie główne
          (front lokalu lub logo), wnętrze, produkty lub usługi, pracowników w akcji. Aktualizuj
          je przynajmniej raz na kwartał — świeże zdjęcia to sygnał aktywności.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Atrybuty</strong> to szczegóły, które klienci filtrują w wyszukiwarce: dostępność
          dla osób z niepełnosprawnościami, opcje płatności, WiFi, ogródek, parking, obsługa
          wegetarian. Każdy zaznaczony atrybut zwiększa szansę pojawienia się przy wyszukiwaniu
          z filtrem. Przejrzyj całą listę dostępną dla Twojej kategorii i zaznacz wszystko, co
          faktycznie oferujesz.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma-zdjecia.jpg"
          alt="Galeria zdjęć w wizytówce Google restauracji pokazująca wnętrze lokalu, dania i uśmiechniętą obsługę"
        />
      </div>

      {/* ── BANER NEWSLETTER — pełna szerokość ── */}
      <NewsletterBlogBanner />

      {/* ── SEKCJA 4 ── */}
      <div className={P}>
        <h2
          id="sygnaly-rankingowe"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Co wpływa na pozycję firmy w Google Maps?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Pozycja w Google Maps nie jest losowa. Algorytm lokalny oblicza ją na podstawie
          dziesiątek sygnałów, ale trzy grupy mają największe znaczenie. Zrozumienie ich hierarchii
          pozwala skupić wysiłek na działaniach, które faktycznie przynoszą efekty, zamiast
          marnować czas na kosmetyczne poprawki.
        </p>

        <h3
          id="trzy-sygnaly"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Trzy główne sygnały rankingowe Google
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>1. Trafność</strong> — na ile profil odpowiada na zapytanie klienta. Tutaj liczy
          się kompletność profilu, wybór kategorii, słowa w opisie i odpowiedzi na pytania w sekcji
          Q&A. Firmy, które regularnie używają w swoich postach i opisach języka, którym posługują
          się klienci, naturalnie wygrywają ten sygnał.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>2. Odległość</strong> — jak daleko firma jest od użytkownika lub od miejsca
          wskazanego w zapytaniu. Tego czynnika nie możesz bezpośrednio zmieniać, ale możesz
          precyzyjnie zdefiniować obszar obsługi, jeśli jesteś firmą mobilną lub działasz w kilku
          dzielnicach.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>3. Rozpoznawalność</strong> (ang. prominence) — jak bardzo firma jest znana
          w sieci. Ten sygnał tworzą: liczba i jakość opinii Google, linki do Twojej strony z
          zewnętrznych serwisów, aktywność profilu i wszelkie wzmianki w lokalnych katalogach
          (np. Pyszne.pl, Tripadvisor, Booksy). Opinie Google są tu kluczowym, bezpośrednim
          czynnikiem — więcej o zbieraniu recenzji piszemy w artykule o{" "}
          <Link href="/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">
            tym, jak szybko zdobyć opinie w Google
          </Link>
          .
        </p>

        <h3
          id="aktywnosc-profilu"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak regularnie aktualizować profil?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Google premiuje aktywne profile. Regularne aktualizacje to sygnał, że firma działa i
          dba o swoją obecność online. W praktyce wystarczy stworzyć prosty rytm: co tydzień jedno
          zdjęcie, co dwa tygodnie post z ofertą lub informacją, raz w miesiącu przegląd godzin
          i atrybutów. Nie chodzi o ilość treści, ale o jej regularność — profil, który milczy
          przez trzy miesiące, traci pozycje na rzecz konkurenta, który publikuje choćby skromnie,
          ale systematycznie.
        </p>
      </div>

      {/* ── PRZEJŚCIE 4→5 ── */}
      <SectionDivider quote="Algorytm Google nagradza aktywność — wizytówka, którą aktualizujesz, pracuje na Ciebie przez całą dobę." />

      {/* ── SEKCJA 5 ── */}
      <div className={P}>
        <h2
          id="posty-aktualizacje"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Posty i aktualizacje — jak utrzymać aktywną wizytówkę?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Posty w Google Business Profile to krótkie wpisy widoczne bezpośrednio w panelu wiedzy
          firmy — tuż pod zdjęciem i oceną. Możesz tam zamieszczać aktualności, oferty, wydarzenia
          i produkty. Większość właścicieli firm w ogóle nie korzysta z tej funkcji, co czyni ją
          łatwą przewagą nad konkurencją. Post wygasa po siedmiu dniach (oferty mają własny czas
          trwania), więc regularność publikacji nie jest opcją — jest koniecznością, jeśli chcesz
          utrzymać widoczność tego elementu.
        </p>

        <h3
          id="czestotliwosc-postow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak często publikować posty w Google Moja Firma?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Optimum dla większości firm lokalnych to jeden post tygodniowo. To wystarczy, żeby sekcja
          postów była zawsze wypełniona aktualną treścią. Jeśli prowadzisz lokal gastronomiczny,
          publikuj menu dnia lub weekendowe specjały — klienci szukają właśnie takich informacji
          tuż przed podjęciem decyzji, gdzie zjeść. Salon fryzjerski może publikować wolne terminy
          lub aktualne promocje. Klinika — wskazówki zdrowotne lub informacje o nowych zabiegach.
          Treść powinna być użyteczna, a nie reklamowa.
        </p>

        <h3
          id="tresc-postow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jakie treści najlepiej angażują lokalnych klientów?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Najlepiej działają posty, które odpowiadają na konkretne pytanie lub potrzebę w danym
          momencie. Kilka formatów sprawdzonych w lokalnym marketingu:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Oferta czasowa</strong> — „20% rabatu na zabiegi do piątku" z przyciskiem „Zarezerwuj".</li>
          <li><strong>Nowość w ofercie</strong> — nowe danie, nowy zabieg, nowy produkt ze zdjęciem.</li>
          <li><strong>Informacja praktyczna</strong> — zmiana godzin, przerwa techniczna, parking.</li>
          <li><strong>Historia z życia lokalu</strong> — jubileusz, nagroda branżowa, nowy pracownik.</li>
          <li><strong>Pytanie do klientów</strong> — „Który wariant wolisz?" — zwiększa zaangażowanie.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Do każdego posta dodaj zdjęcie — posty z grafiką generują wielokrotnie więcej wyświetleń
          niż same teksty. Używaj przycisków akcji (CTA): „Zadzwoń", „Zarezerwuj", „Dowiedz się
          więcej", „Zamów online". Każdy klik w przycisk to sygnał zaangażowania, który wpływa
          na pozycję profilu.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma-posty.jpg"
          alt="Ekran smartfona z widokiem aktualnego posta w Google Business Profile restauracji z promocją tygodniową"
        />
      </div>

      {/* ── PODSUMOWANIE ── */}
      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — wizytówka, która naprawdę pracuje
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dobrze wypełniona wizytówka Google to nie jednorazowy projekt — to proces. Zakładasz ją
            raz, ale optymalizujesz stale: uzupełniasz atrybuty, dodajesz zdjęcia, publikujesz posty,
            odpowiadasz na opinie i pytania. Firmy, które traktują swój profil jak żywy kanał
            komunikacji, systematycznie wyprzedzają konkurencję w wynikach lokalnych. Zdobywanie
            opinii Google jest nieodłączną częścią tej pracy — im więcej aktualnych recenzji, tym
            silniejszy sygnał rozpoznawalności dla algorytmu. Jeśli chcesz to zautomatyzować,
            sprawdź, jak działa{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              tabliczka NFC Starlinkee
            </Link>
            {" "}— klient przykłada telefon i trafia prosto na formularz oceny, bez szukania firmy
            w sieci.
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
                Czy wizytówka Google Moja Firma jest bezpłatna?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tak, założenie i prowadzenie profilu w Google Business Profile jest całkowicie
                bezpłatne. Google nie pobiera żadnych opłat za wyświetlanie firmy w wynikach lokalnych
                ani za korzystanie z funkcji postów, zdjęć czy odpowiedzi na opinie.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Ile trwa weryfikacja wizytówki Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Weryfikacja przez pocztówkę trwa zwykle 5–14 dni roboczych. Jeśli dostępna jest
                weryfikacja przez SMS lub natychmiastowa weryfikacja, możesz aktywować profil w ciągu
                kilku minut. Po zakończeniu weryfikacji profil pojawia się publicznie w wynikach
                wyszukiwania.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Jak często powinienem aktualizować wizytówkę Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Minimum to jeden post tygodniowo i przegląd godzin otwarcia raz w miesiącu. Zdjęcia
                warto uzupełniać przynajmniej co kwartał. Po każdej zmianie w ofercie lub godzinach
                zaktualizuj profil od razu — nieaktualne informacje zniechęcają klientów i powodują
                negatywne opinie.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy mogę dodać słowa kluczowe do nazwy firmy w wizytówce?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie. Google wymaga, żeby nazwa w wizytówce była zgodna z rzeczywistą nazwą firmy.
                Dodawanie słów kluczowych do nazwy (np. „Fryzjer Jan — salon fryzjerski Poznań")
                narusza regulamin i może skutkować zawieszeniem profilu lub karą w rankingu.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy warto odpowiadać na wszystkie opinie — także te pozytywne?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tak. Odpowiadanie na opinie (zarówno pozytywne, jak i negatywne) to sygnał
                zaangażowania, który Google uwzględnia przy ocenie aktywności profilu. Krótka,
                spersonalizowana odpowiedź na pozytywną recenzję buduje też lojalność klientów i
                zachęca innych do zostawienia swojej opinii.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
