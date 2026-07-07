import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function JakOdpowiadacNaOpinie() {
  return (
    <>
      {/* ── LEAD + SPIS TREŚCI ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Każda opinia w Google to publiczna rozmowa — czytają ją nie tylko Ty i autor recenzji,
          ale też setki potencjalnych klientów, którzy dopiero zastanawiają się, czy Ci zaufać.
          Sposób, w jaki odpowiadasz na pochwały, krytykę i te opinie, które wydają się
          niesprawiedliwe albo wręcz fałszywe, decyduje o tym, czy profil buduje zaufanie, czy je
          niszczy. Ten artykuł pokazuje, jak odpowiadać na każdy typ opinii, kiedy Google faktycznie
          usunie recenzję i jak legalnie ograniczyć liczbę niesprawiedliwych ocen, zanim w ogóle
          trafią do sieci.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-to-wazne" className="text-blue-600 hover:underline">
                1. Dlaczego odpowiadanie na opinie ma znaczenie dla SEO i klientów?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wplyw-na-algorytm" className="text-blue-600 hover:underline">
                    1.1. Jak odpowiedzi wpływają na algorytm Google?
                  </a>
                </li>
                <li>
                  <a href="#co-widza-inni" className="text-blue-600 hover:underline">
                    1.2. Co widzą inni klienci, czytając Twoje odpowiedzi?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#pozytywne-opinie" className="text-blue-600 hover:underline">
                2. Jak odpowiadać na pozytywne opinie?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#struktura-odpowiedzi" className="text-blue-600 hover:underline">
                    2.1. Struktura dobrej odpowiedzi
                  </a>
                </li>
                <li>
                  <a href="#przyklady-pozytywne" className="text-blue-600 hover:underline">
                    2.2. Przykłady odpowiedzi na pozytywne opinie
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#negatywne-opinie" className="text-blue-600 hover:underline">
                3. Jak odpowiadać na negatywne opinie?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#zasady-negatywne" className="text-blue-600 hover:underline">
                    3.1. Zasady, których nie wolno łamać
                  </a>
                </li>
                <li>
                  <a href="#przyklady-negatywne" className="text-blue-600 hover:underline">
                    3.2. Przykłady odpowiedzi na trudne opinie
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#falszywe-opinie" className="text-blue-600 hover:underline">
                4. Co zrobić z fałszywą lub nieuprawnioną opinią?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#kiedy-google-usunie" className="text-blue-600 hover:underline">
                    4.1. Kiedy Google usunie opinię, a kiedy nie?
                  </a>
                </li>
                <li>
                  <a href="#jak-zglosic" className="text-blue-600 hover:underline">
                    4.2. Jak zgłosić opinię do usunięcia krok po kroku
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zapobieganie" className="text-blue-600 hover:underline">
                5. Jak zapobiegać niesprawiedliwym opiniom, zanim się pojawią?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#review-gating" className="text-blue-600 hover:underline">
                    5.1. Czym jest review gating i dlaczego jest zakazany?
                  </a>
                </li>
                <li>
                  <a href="#legalny-filtr" className="text-blue-600 hover:underline">
                    5.2. Legalny filtr opinii — jak to działa w praktyce?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                6. Podsumowanie — odpowiedzi, które budują zaufanie
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
        <h2 id="dlaczego-to-wazne" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Dlaczego odpowiadanie na opinie ma znaczenie dla SEO i klientów?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wielu właścicieli firm traktuje sekcję opinii jak tablicę ogłoszeń, na którą zaglądają
          tylko wtedy, gdy pojawi się coś niepokojącego. Tymczasem odpowiedzi pod recenzjami to
          jeden z niewielu elementów wizytówki, który jednocześnie wpływa na pozycję w wynikach
          lokalnych i na decyzję zakupową konkretnego klienta czytającego profil w danej chwili.
          Zaniedbanie tej sekcji kosztuje podwójnie — traci SEO i traci konwersję.
        </p>

        <h3 id="wplyw-na-algorytm" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Jak odpowiedzi wpływają na algorytm Google?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google wprost wskazuje odpowiadanie na opinie jako element budujący sygnał
          rozpoznawalności (prominence) profilu. Aktywność w tej sekcji pokazuje algorytmowi, że
          konto jest zarządzane przez realną firmę, która angażuje się w relację z klientami — a nie
          porzucony profil bez opieki. Im więcej odpowiedzi zawierających naturalne, tematyczne
          słownictwo związane z Twoją branżą i lokalizacją, tym silniejszy sygnał trafności dla
          zapytań lokalnych. To jeden z wielu elementów, które razem budują pozycję profilu —
          pełną listę czynników rankingowych znajdziesz w artykule o tym,{" "}
          <Link href="/blog/wizytowka-google-moja-firma-jak-zoptymalizowac" className="text-blue-600 hover:underline">
            jak zoptymalizować wizytówkę Google Moja Firma
          </Link>
          .
        </p>

        <h3 id="co-widza-inni" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Co widzą inni klienci, czytając Twoje odpowiedzi?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Zanim klient zadzwoni lub zarezerwuje wizytę, przegląda kilka ostatnich opinii — i Twoje
          odpowiedzi pod nimi. Rzeczowa, spokojna reakcja na trudną recenzję buduje więcej zaufania
          niż sama piątka gwiazdek, bo pokazuje, jak firma zachowuje się w sytuacji kryzysowej.
          Brak jakiejkolwiek reakcji na negatywną opinię czytany jest jako brak zainteresowania
          klientem — nawet jeśli sama opinia nie była do końca sprawiedliwa.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-hero.jpg"
          alt="Właściciel lokalu czyta i odpowiada na opinie klientów w panelu Google Business Profile na laptopie"
        />
      </div>

      {/* ── SEKCJA 2 ── */}
      <div className={P}>
        <h2 id="pozytywne-opinie" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Jak odpowiadać na pozytywne opinie?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Pozytywne opinie kuszą, żeby odpowiedzieć jednym zdaniem — „Dziękujemy!” — i przejść
          dalej. To błąd. Krótka, ale spersonalizowana odpowiedź kosztuje minutę, a naturalnie
          wzmacnia opis Twojej firmy o kolejne słowa kluczowe i pokazuje, że każdy głos się liczy,
          nie tylko te krytyczne.
        </p>

        <h3 id="struktura-odpowiedzi" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Struktura dobrej odpowiedzi
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dobra odpowiedź na pozytywną opinię ma cztery elementy: podziękowanie z imieniem klienta
          (jeśli jest widoczne), odniesienie się do konkretu z opinii, krótkie wzmocnienie tego, co
          firma oferuje, i zaproszenie do powrotu. Cały schemat mieści się w dwóch–trzech zdaniach.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Podziękuj po imieniu, jeśli profil klienta je pokazuje.</li>
          <li>Nawiąż do szczegółu z opinii — dania, zabiegu, obsługi, o której wspomniał.</li>
          <li>Wpleć naturalnie nazwę usługi lub lokalizacji, nie na siłę.</li>
          <li>Zaproś do ponownej wizyty lub poleceń znajomym.</li>
        </ol>

        <h3 id="przyklady-pozytywne" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Przykłady odpowiedzi na pozytywne opinie
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Restauracja:</strong> „Dziękujemy, Aniu! Bardzo cieszymy się, że risotto z borowikami
          przypadło Ci do gustu — to jedno z ulubionych dań naszych stałych gości. Zapraszamy
          ponownie, tym razem może na nasz weekendowy brunch!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Salon fryzjerski:</strong> „Dziękujemy za opinię! Cieszymy się, że nowa koloryzacja
          spełniła Twoje oczekiwania. Do zobaczenia na kolejnym odświeżeniu koloru za 6–8 tygodni!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Gabinet stomatologiczny:</strong> „Dziękujemy za zaufanie i miłe słowa. Komfort
          pacjenta podczas zabiegu to dla nas priorytet — miło słyszeć, że udało nam się go
          zapewnić. Do zobaczenia na kontroli!”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-pozytywne.jpg"
          alt="Ekran smartfona z pięciogwiazdkową opinią klienta i profesjonalną odpowiedzią firmy pod spodem"
        />
      </div>

      {/* ── PRZEJŚCIE 2→3 ── */}
      <SectionDivider quote="Każda odpowiedź pod opinią to zdanie napisane nie do jednego klienta, ale do wszystkich, którzy je jeszcze przeczytają." />

      {/* ── SEKCJA 3 ── */}
      <div className={P}>
        <h2 id="negatywne-opinie" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Jak odpowiadać na negatywne opinie?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Negatywna opinia boli — zwłaszcza gdy wydaje się przesadzona. Sposób reakcji decyduje
          jednak o tym, czy incydent zostanie zapomniany po tygodniu, czy stanie się dowodem
          w oczach każdego kolejnego czytelnika profilu. Chłodna głowa i konkretny plan działania
          liczą się bardziej niż emocje.
        </p>

        <h3 id="zasady-negatywne" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Zasady, których nie wolno łamać
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Nie odpowiadaj od razu pod wpływem emocji</strong> — odczekaj kilka godzin, przeczytaj opinię ponownie na chłodno.</li>
          <li><strong>Nie kłóć się publicznie</strong> — szczegóły sporu przenieś do prywatnej wiadomości, e-maila lub telefonu.</li>
          <li><strong>Nie ignoruj opinii</strong> — brak odpowiedzi czyta się jako brak zainteresowania problemem klienta.</li>
          <li><strong>Nie kopiuj tej samej formułki</strong> pod każdą negatywną recenzją — klienci to zauważają i tracą zaufanie.</li>
          <li><strong>Nie przyznawaj się do winy, której nie ma</strong> — rzeczowe wyjaśnienie sytuacji jest lepsze niż pusta kapitulacja.</li>
        </ul>

        <h3 id="przyklady-negatywne" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Przykłady odpowiedzi na trudne opinie
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Skarga na czas oczekiwania:</strong> „Przykro nam, że czas oczekiwania na danie
          nie spełnił Pana oczekiwań — tego wieczoru mieliśmy wyjątkowo dużo rezerwacji. Chętnie
          porozmawiamy o szczegółach, prosimy o kontakt pod [numer/e-mail]. Zależy nam, żeby
          kolejna wizyta wypadła zupełnie inaczej.”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Opinia, która wydaje się nieuprawniona:</strong> „Dziękujemy za informację. Po
          sprawdzeniu grafiku i historii rezerwacji na podany dzień i godzinę nie znaleźliśmy
          wpisu odpowiadającego opisanej sytuacji. Prosimy o kontakt pod [e-mail], żeby wyjaśnić
          sprawę — zależy nam na rzetelności naszego profilu.”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-negatywne.jpg"
          alt="Osoba odpowiadająca spokojnie i rzeczowo na negatywną opinię klienta na ekranie komputera"
        />
      </div>

      {/* ── BANER NEWSLETTER — pełna szerokość ── */}
      <NewsletterBlogBanner />

      {/* ── SEKCJA 4 ── */}
      <div className={P}>
        <h2 id="falszywe-opinie" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Co zrobić z fałszywą lub nieuprawnioną opinią?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nie każda krzywdząca opinia kwalifikuje się do usunięcia. Google usuwa recenzje wyłącznie
          wtedy, gdy naruszają konkretne zasady regulaminu — nie wtedy, gdy po prostu Ci się nie
          podobają albo są niepochlebne, ale rzetelne. Rozróżnienie tych dwóch sytuacji oszczędza
          czas i frustrację.
        </p>

        <h3 id="kiedy-google-usunie" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Kiedy Google usunie opinię, a kiedy nie?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google rozpatruje zgłoszenie pozytywnie, gdy opinia zawiera: mowę nienawiści lub
          wulgaryzmy, treści niezwiązane z realnym doświadczeniem klienta (spam, reklamę
          konkurencji), konflikt interesów (opinia od byłego pracownika lub konkurenta), dane
          osobowe osób trzecich, albo gdy pochodzi z konta, które nigdy nie miało kontaktu z firmą.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google nie usunie natomiast opinii tylko dlatego, że jest negatywna, że nie zgadzasz się
          z opisem sytuacji, albo że klient miał — Twoim zdaniem — wygórowane oczekiwania. Prawdziwe,
          choć niepochlebne doświadczenie klienta zostaje na profilu, nawet po zgłoszeniu.
        </p>

        <h3 id="jak-zglosic" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Jak zgłosić opinię do usunięcia krok po kroku
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-2">
          <li>Otwórz wizytówkę firmy w Google Maps lub w wyszukiwarce.</li>
          <li>Znajdź sporną opinię i kliknij ikonę trzech kropek obok niej.</li>
          <li>Wybierz „Zgłoś opinię” i zaznacz najbardziej pasujący powód naruszenia regulaminu.</li>
          <li>Opisz krótko i konkretnie, dlaczego opinia narusza zasady — bez emocji, z faktami.</li>
          <li>Jeśli po kilku dniach nie ma odpowiedzi, zgłoś sprawę też przez Google Business Profile lub formularz pomocy Google.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-8">
          Czas rozpatrzenia zgłoszenia bywa różny — od kilku dni do kilku tygodni. Zachowaj
          cierpliwość i nie usuwaj w międzyczasie własnej odpowiedzi pod opinią — nawet jeśli
          zostanie ona finalnie usunięta, Twoja rzeczowa reakcja jest widoczna dla każdego, kto
          zdąży ją zobaczyć wcześniej.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-zgloszenie.jpg"
          alt="Formularz zgłaszania opinii do usunięcia w panelu Google Business Profile z listą powodów naruszenia regulaminu"
        />
      </div>

      {/* ── PRZEJŚCIE 4→5 ── */}
      <SectionDivider quote="Najlepsza odpowiedź na niesprawiedliwą opinię to system, który sprawia, że rzadko się pojawia." />

      {/* ── SEKCJA 5 ── */}
      <div className={P}>
        <h2 id="zapobieganie" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Jak zapobiegać niesprawiedliwym opiniom, zanim się pojawią?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Odpowiadanie na trudne opinie jest ważne, ale jeszcze skuteczniejsze jest ograniczenie
          ich liczby u źródła. Chodzi o to, żeby drobny incydent — zimna zupa, pięć minut
          opóźnienia — nie kończył się od razu jedną gwiazdką w Google, tylko trafiał najpierw do
          Ciebie, zanim trafi do sieci.
        </p>

        <h3 id="review-gating" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Czym jest review gating i dlaczego jest zakazany?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Review gating (filtrowanie bramkowe) to praktyka polegająca na pytaniu klienta „Czy
          jesteś zadowolony?” i kierowaniu do Google wyłącznie tych, którzy odpowiedzą „tak” —
          niezadowoleni po prostu nie dostają linku do wystawienia opinii. Google wprost zakazuje
          tej praktyki w swoim regulaminie, bo sztucznie zawyża ocenę profilu i wprowadza w błąd
          innych użytkowników. Wykrycie takiego mechanizmu może skutkować karą, obniżeniem pozycji
          lub zawieszeniem profilu.
        </p>

        <h3 id="legalny-filtr" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Legalny filtr opinii — jak to działa w praktyce?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Różnica między zakazanym review gatingiem a legalną ochroną profilu jest subtelna, ale
          kluczowa: legalny system nie blokuje nikomu drogi do Google — każdy klient, zadowolony
          i niezadowolony, ma dostęp do publicznego formularza opinii. Zmienia się tylko kolejność
          działań: niezadowolony klient dodatkowo otrzymuje możliwość zgłoszenia problemu
          bezpośrednio do firmy, zanim (lub równolegle z tym, jak) zdecyduje, czy chce też napisać
          publiczną recenzję.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dokładnie tak działa filtr opinii wbudowany w{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            tabliczkę NFC Starlinkee
          </Link>
          . Klient przykłada telefon i najpierw ocenia doświadczenie jednym kliknięciem. Zadowolony
          trafia od razu na formularz oceny Google. Niezadowolony trafia na wewnętrzny formularz
          feedbacku, gdzie może opisać problem — a Ty dostajesz szansę na kontakt i naprawienie
          sytuacji, zanim ktokolwiek inny ją przeczyta. To nie jest blokowanie dostępu do Google —
          to zarządzanie momentem, w którym klient decyduje, gdzie skierować swoją opinię. Więcej
          o samym procesie zbierania recenzji znajdziesz w artykule o tym,{" "}
          <Link href="/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">
            jak szybko zdobyć opinie w Google
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-filtr.jpg"
          alt="Schemat pokazujący klienta skanującego tabliczkę NFC, który trafia na formularz oceny Google lub wewnętrzny formularz feedbacku"
        />
      </div>

      {/* ── PODSUMOWANIE ── */}
      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — odpowiedzi, które budują zaufanie
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Odpowiadanie na opinie to nie obowiązek administracyjny, tylko codzienna rozmowa
            z rynkiem, którą widzi każdy potencjalny klient. Dziękuj konkretnie za pozytywne
            recenzje, reaguj rzeczowo na negatywne i zgłaszaj do usunięcia tylko te, które
            faktycznie naruszają regulamin Google. Najskuteczniejszą strategią pozostaje jednak
            ograniczenie liczby niesprawiedliwych opinii u źródła — zanim klient w ogóle sięgnie
            po telefon, żeby wystawić ocenę. Jeśli chcesz zobaczyć, jak wygląda to w praktyce,
            sprawdź, jak działa{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              tabliczka NFC Starlinkee
            </Link>
            {" "}z wbudowanym, zgodnym z regulaminem Google filtrem opinii.
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
                Czy muszę odpowiadać na każdą opinię w Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie ma takiego wymogu formalnego, ale jest to mocno zalecane. Odpowiadanie na
                opinie — zarówno pozytywne, jak i negatywne — jest sygnałem aktywności profilu
                branym pod uwagę przez algorytm lokalnego SEO i buduje zaufanie u czytających
                profil klientów.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Jak szybko powinienem odpowiadać na negatywne opinie?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Optymalny czas reakcji to 24–48 godzin. Wystarczająco szybko, żeby pokazać
                zaangażowanie, ale na tyle długo, żeby odpowiedzieć na chłodno, bez emocji, które
                mogłyby zaostrzyć sytuację.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy Google usunie negatywną opinię, jeśli poproszę o to klienta?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Klient może samodzielnie usunąć lub edytować swoją opinię w dowolnym momencie, ale
                Google nie zrobi tego automatycznie na Twoją prośbę, jeśli treść nie narusza
                regulaminu. Najskuteczniejsze jest wyjaśnienie sprawy prywatnie i uprzejma prośba
                o aktualizację, gdy problem zostanie rozwiązany.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czym różni się filtr opinii od zakazanego review gatingu?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Review gating blokuje niezadowolonym klientom dostęp do formularza opinii Google —
                to naruszenie regulaminu. Legalny filtr opinii, jak ten w systemie Starlinkee, daje
                dostęp do Google każdemu klientowi, a jedynie dodatkowo oferuje niezadowolonym
                osobny kanał zgłoszenia problemu bezpośrednio do firmy.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Co zrobić, gdy podejrzewam, że opinię napisał konkurent?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Zgłoś opinię przez formularz Google, wskazując konflikt interesów jako powód.
                Warto dołączyć konkretne przesłanki (np. brak dowodu wizyty w Twojej historii
                rezerwacji). Odpowiedz też publicznie w sposób rzeczowy, nie oskarżając wprost —
                inni czytelnicy sami wyciągną wnioski z faktów.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
