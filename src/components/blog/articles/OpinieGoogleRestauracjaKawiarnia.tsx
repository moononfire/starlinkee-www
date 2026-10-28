import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

/* Wąski wrapper dla treści prozatorskiej */
const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function OpinieGoogleRestauracjaKawiarnia() {
  return (
    <>
      {/* ── LEAD + SPIS TREŚCI ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Wybór miejsca na obiad albo kawę zapada dziś w kilka sekund — na mapie w telefonie, wśród
          kilkunastu pinezek z gwiazdkami. Gość, który szuka restauracji lub kawiarni „w pobliżu&rdquo;,
          rzadko czyta menu na stronie. Patrzy na ocenę, liczbę opinii i to, czy ostatnie recenzje
          pochodzą z zeszłego tygodnia, czy sprzed roku. Gastronomia ma przy tym jedną przewagę:
          codziennie przewija się przez nią setki zadowolonych osób — trzeba tylko sprawić, żeby
          choć część z nich zostawiła ślad w Google.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-opinie" className="text-blue-600 hover:underline">
                1. Dlaczego opinie w Google decydują o wyborze restauracji i kawiarni?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-widzi-gosc" className="text-blue-600 hover:underline">
                    1.1. Co gość widzi na mapie, zanim wejdzie do lokalu?
                  </a>
                </li>
                <li>
                  <a href="#gastronomia-wrazliwa" className="text-blue-600 hover:underline">
                    1.2. Dlaczego gastronomia jest tak wrażliwa na oceny?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-zbierac" className="text-blue-600 hover:underline">
                2. Jak zbierać opinie w restauracji i kawiarni bez zawracania gościom głowy?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#najlepszy-moment" className="text-blue-600 hover:underline">
                    2.1. Który moment wizyty jest najlepszy na prośbę o opinię?
                  </a>
                </li>
                <li>
                  <a href="#nfc-stolik-lada" className="text-blue-600 hover:underline">
                    2.2. Jak działa tabliczka NFC przy stoliku i przy kasie?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#trudne-opinie" className="text-blue-600 hover:underline">
                3. Jak reagować na trudne opinie w gastronomii?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#niezadowolony-gosc" className="text-blue-600 hover:underline">
                    3.1. Co zrobić, gdy gość jest niezadowolony z dania lub obsługi?
                  </a>
                </li>
                <li>
                  <a href="#filtr-opinii" className="text-blue-600 hover:underline">
                    3.2. Co zrobić, gdy gość ma zastrzeżenia?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#opinie-i-powroty" className="text-blue-600 hover:underline">
                4. Jak zamienić zadowolonego gościa w stałego klienta?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#stali-goscie" className="text-blue-600 hover:underline">
                    4.1. Dlaczego stali goście są najcenniejsi w gastronomii?
                  </a>
                </li>
                <li>
                  <a href="#kupony-i-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. Jak kupony SMS wspierają powroty?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Podsumowanie — jak restauracja i kawiarnia zdobywają więcej opinii?
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                6. FAQ — Najczęściej zadawane pytania
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── SEKCJA 1 ── */}
      <div className={P}>
        <h2
          id="dlaczego-opinie"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Dlaczego opinie w Google decydują o wyborze restauracji i kawiarni?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Restauracja czy kawiarnia sprzedaje doświadczenie, którego nie da się sprawdzić z
          wyprzedzeniem. Nie wiadomo, czy kawa będzie dobra, czy kelner się uśmiechnie, ani ile
          trzeba czekać na zamówienie. Opinie innych gości zastępują więc próbę — to one
          odpowiadają na pytanie „czy warto tu wejść?&rdquo; w kilka sekund, zanim klient w ogóle
          zobaczy lokal.
        </p>

        <h3
          id="co-widzi-gosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Co gość widzi na mapie, zanim wejdzie do lokalu?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Na liście wyników widać nazwę, średnią ocenę, liczbę recenzji i zdjęcia. Lokal z oceną
          4,6 i kilkuset opiniami wygrywa z miejscem, które ma 4,8, ale tylko dziewięć ocen —
          bo duża liczba recenzji wygląda jak wiarygodny dowód, a nie przypadek. Do tego dochodzi
          świeżość: jeśli ostatnia opinia pochodzi sprzed kilku miesięcy, gość zastanawia się, czy
          lokal w ogóle jeszcze działa tak samo. Więcej o tym, jak wizytówka wpływa na widoczność,
          przeczytasz w artykule o{" "}
          <Link href="/pl/blog/wizytowka-google-moja-firma-jak-zoptymalizowac" className="text-blue-600 hover:underline">
            optymalizacji wizytówki Google Moja Firma
          </Link>
          .
        </p>

        <h3
          id="gastronomia-wrazliwa"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Dlaczego gastronomia jest tak wrażliwa na oceny?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wybór restauracji to decyzja podejmowana spontanicznie i często pod presją czasu —
          przerwa na lunch, spotkanie ze znajomymi, rodzinny wypad. Nikt nie ma ochoty ryzykować
          zmarnowanego wieczoru, dlatego gość sięga po najszybszy dostępny sygnał: gwiazdki.
          Lokal, który zbiera opinie systematycznie, buduje bibliotekę dowodów — o smaku dań,
          tempie obsługi i atmosferze — zamiast liczyć na przypadkowe wpisy. Jak to robić szybko i
          zgodnie z regulaminem Google, opisujemy w poradniku o{" "}
          <Link href="/pl/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">
            szybkim i legalnym zdobywaniu opinii w Google
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="Rachunek na podkładce, filiżanka kawy i smartfon na betonowym stoliku w kawiarni"
        />
      </div>

      {/* ── PRZEJŚCIE 1→2 ── */}
      <SectionDivider quote="W gastronomii gość ocenia nie tylko jedzenie — ocenia całe doświadczenie, a Google pozwala mu opowiedzieć o nim następnym osobom." />

      {/* ── SEKCJA 2 ── */}
      <div className={P}>
        <h2
          id="jak-zbierac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Jak zbierać opinie w restauracji i kawiarni bez zawracania gościom głowy?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          W lokalu gastronomicznym obsługa ma na głowie dziesiątki zadań naraz — prośba o opinię
          nie może zabierać kelnerowi czasu ani wprawiać gościa w zakłopotanie. System zbierania
          recenzji musi działać niemal sam: bez tłumaczenia, bez wyszukiwania lokalu w mapach i
          bez instalowania czegokolwiek.
        </p>

        <h3
          id="najlepszy-moment"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Który moment wizyty jest najlepszy na prośbę o opinię?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Najlepszy jest moment, w którym gość jest najbardziej zadowolony i ma jeszcze telefon w
          ręku — zwykle przy rachunku albo tuż po zapłaceniu. Posiłek już się skończył, wrażenia
          są świeże, a nic nie dzieli go od wyjścia. Poproszony później, w domu, gość zwykle
          zapomni; poproszony w trakcie dania — poczuje się niekomfortowo. Rachunek leżący na
          stoliku jest naturalnym punktem, w którym wystarczy dyskretny napis zachęcający do oceny.
        </p>

        <h3
          id="nfc-stolik-lada"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak działa tabliczka NFC przy stoliku i przy kasie?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Mała tabliczka lub naklejka NFC stoi na stoliku albo przy terminalu płatniczym. Gość
          przykłada telefon, a formularz oceny Google otwiera się od razu — bez wpisywania nazwy
          lokalu i bez aplikacji. W kawiarni z obsługą przy ladzie najlepiej umieścić ją tuż obok
          terminala, bo klient i tak trzyma wtedy telefon w dłoni. W restauracji z obsługą
          kelnerską dobrze sprawdza się stolik, na którym gość spędza najwięcej czasu.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="Klient trzymający smartfon przy terminalu płatniczym na drewnianej ladzie w lokalu"
        />
      </div>

      {/* ── BANER NEWSLETTER — pełna szerokość ── */}
      <NewsletterBlogBanner locale="pl" />

      {/* ── SEKCJA 3 ── */}
      <div className={P}>
        <h2
          id="trudne-opinie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Jak reagować na trudne opinie w gastronomii?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          W gastronomii negatywna opinia potrafi pojawić się z powodów, na które lokal nie ma
          wpływu: długi czas oczekiwania w godzinach szczytu, awaria w kuchni, zły dzień gościa.
          Przy dużej liczbie obsługiwanych osób nie da się uniknąć każdej krytyki — można za to
          zadbać, żeby nie zostawała bez reakcji.
        </p>

        <h3
          id="niezadowolony-gosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Co zrobić, gdy gość jest niezadowolony z dania lub obsługi?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Najlepiej zareagować jeszcze przy stoliku — wymienić danie, zaproponować dolewkę albo
          rabat na kolejną wizytę, zanim irytacja zamieni się w publiczną recenzję. Jeśli
          negatywna opinia jednak się pojawi, odpowiedz spokojnie, konkretnie i bez wchodzenia w
          polemikę. Kolejni goście czytają takie odpowiedzi uważnie: oceniają nie pojedynczy
          incydent, tylko to, jak lokal radzi sobie z problemami. Gotowe wzory odpowiedzi znajdziesz
          w artykule{" "}
          <Link href="/pl/blog/jak-odpowiadac-na-opinie-w-google" className="text-blue-600 hover:underline">
            jak odpowiadać na opinie w Google
          </Link>
          .
        </p>

        <h3
          id="filtr-opinii"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Co zrobić, gdy gość ma zastrzeżenia?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Dobrze, gdy niezadowolony gość ma prosty sposób, żeby napisać do Ciebie prywatnie: dzięki temu o problemie dowiadujesz się jeszcze tego samego dnia i możesz go rozwiązać. Taka wiadomość ma jednak być dodatkiem, a nie zamiennikiem opinii. Nie wolno wybierać, komu pokazać link do Google, bo selektywne zbieranie opinii (tzw. <strong>„review gating&rdquo;</strong>) jest zabronione przez Google, a w UE może być uznane za wprowadzanie w błąd. Każdy gość powinien móc zostawić publiczną opinię.</p>
      </div>

      {/* ── PRZEJŚCIE 3→4 ── */}
      <SectionDivider quote="Nowego gościa przyciąga ocena na mapie, ale to stali goście sprawiają, że lokal ma obłożenie również we wtorek o 15:00." />

      {/* ── SEKCJA 4 ── */}
      <div className={P}>
        <h2
          id="opinie-i-powroty"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Jak zamienić zadowolonego gościa w stałego klienta?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Opinia w Google to dopiero początek relacji. Gość, który właśnie zeskanował tabliczkę
          NFC, jest w idealnym momencie, żeby zostawić też kontakt i zgodę marketingową — a
          wtedy ta sama tabliczka zaczyna pracować nie tylko na ocenę, ale i na kolejne wizyty.
        </p>

        <h3
          id="stali-goscie"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Dlaczego stali goście są najcenniejsi w gastronomii?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Stały gość zamawia częściej, nie wymaga kosztownych kampanii i poleca lokal znajomym.
          W kawiarni, do której ktoś wpada codziennie po drodze do pracy, lojalny klient jest
          wart więcej niż kilkunastu przypadkowych turystów. Dlatego zebranie numeru telefonu
          i zgody RODO w momencie oceny to inwestycja, która zwraca się przy każdej kolejnej
          wizycie.
        </p>

        <h3
          id="kupony-i-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak kupony SMS wspierają powroty?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Krótki SMS z kuponem na deser w cichszy dzień tygodnia potrafi wypełnić stoliki wtedy, gdy zwykle są puste. Jak robić to rozsądnie i zgodnie z prawem, opisujemy w artykule o <Link href="/pl/blog/sms-marketing-dla-lokalu-jak-wysylac-kupony-i-przyciagac-gosci" className="text-blue-600 hover:underline">SMS marketingu dla lokalu</Link>.</p>
      </div>

      {/* ── PODSUMOWANIE ── */}
      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — jak restauracja i kawiarnia zdobywają więcej opinii?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            W gastronomii o wyborze miejsca decydują gwiazdki widoczne na mapie, dlatego liczba i
            świeżość opinii są równie ważne jak sama średnia ocena. Kluczem jest proszenie o
            recenzję w chwili największego zadowolenia — przy rachunku lub zapłacie — oraz
            usunięcie wszystkich barier technologicznych, które mogłyby gościa zniechęcić.
            Tabliczka NFC robi to w ułamek sekundy, a ten sam nośnik może jednocześnie zbierać
            dane kontaktowe i napędzać kupony SMS, zamieniając
            jednorazowych gości w stałych klientów.
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
                Czy kelner powinien osobiście prosić gości o opinię w Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie musi. Tabliczka NFC na stoliku lub przy kasie zachęca gościa do oceny bez udziału
                obsługi, dzięki czemu nikt nie czuje presji, a kelner nie traci czasu w godzinach
                szczytu.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Kiedy najlepiej poprosić o opinię w restauracji lub kawiarni?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Przy rachunku albo tuż po zapłaceniu, gdy posiłek jest już za gościem, wrażenia są
                świeże, a telefon jest pod ręką. Prośba w trakcie jedzenia bywa uciążliwa, a poproszony
                później gość najczęściej o niej zapomina.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy gość musi pobierać aplikację, żeby wystawić opinię przez tabliczkę NFC?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie. Wystarczy zbliżyć telefon do tabliczki — formularz oceny Google otwiera się w
                przeglądarce, bez instalacji aplikacji, zakładania konta i wpisywania nazwy lokalu.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Co zrobić, jeśli gość jest niezadowolony z dania lub obsługi?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Zareaguj jeszcze przy stoliku — wymień danie lub zaproponuj rekompensatę. Jeśli
                negatywna opinia mimo to się pojawi, odpowiedz spokojnie i konkretnie, bez polemiki;
                kolejni goście ocenią przede wszystkim sposób, w jaki lokal rozwiązuje problemy.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy ta sama tabliczka NFC może zbierać opinie i kontakty do gości?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tak. Jedna tabliczka NFC może kierować gościa do formularza opinii Google i jednocześnie zbierać jego numer telefonu wraz ze zgodą na wiadomości z kuponami — bez dodatkowego sprzętu i bez aplikacji.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
