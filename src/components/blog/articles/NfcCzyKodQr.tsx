import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function NfcCzyKodQr() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Gdy lokal chce zbierać opinie albo kontakty do gości, zwykle pada to samo pytanie: tabliczka NFC czy kod QR? Oba rozwiązania prowadzą gościa pod ten sam adres, ale różnią się tym, jak się z nich korzysta, jak wyglądają na stoliku i co robią, gdy coś pójdzie nie tak. Poniżej porównanie bez marketingowego tła, żebyś mógł wybrać to, co pasuje do Twojego lokalu.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#roznica" className="text-blue-600 hover:underline">
                1. Czym różni się tabliczka NFC od kodu QR?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jak-dziala-nfc" className="text-blue-600 hover:underline">
                    1.1. Jak działa tabliczka NFC?
                  </a>
                </li>
                <li>
                  <a href="#jak-dziala-qr" className="text-blue-600 hover:underline">
                    1.2. Jak działa kod QR?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-goscia" className="text-blue-600 hover:underline">
                2. Co jest wygodniejsze dla gościa?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#liczba-krokow" className="text-blue-600 hover:underline">
                    2.1. Ile kroków musi zrobić gość?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-zawodzi" className="text-blue-600 hover:underline">
                    2.2. Kiedy każde z rozwiązań zawodzi?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-lokalu" className="text-blue-600 hover:underline">
                3. Co jest wygodniejsze dla właściciela lokalu?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wyglad-trwalosc" className="text-blue-600 hover:underline">
                    3.1. Wygląd i trwałość
                  </a>
                </li>
                <li>
                  <a href="#koszt-zmiany" className="text-blue-600 hover:underline">
                    3.2. Koszt i możliwość zmian
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wybrac" className="text-blue-600 hover:underline">
                4. Co wybrać: NFC, QR czy oba naraz?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#oba-naraz" className="text-blue-600 hover:underline">
                    4.1. Dlaczego najlepiej mieć oba
                  </a>
                </li>
                <li>
                  <a href="#gdzie-postawic" className="text-blue-600 hover:underline">
                    4.2. Gdzie postawić tabliczkę?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Podsumowanie — NFC czy QR?
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

      <div className={P}>
        <h2
          id="roznica"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Czym różni się tabliczka NFC od kodu QR?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Technicznie oba rozwiązania robią to samo: przenoszą telefon gościa pod wskazany adres internetowy. Różnica jest w sposobie, w jaki gość to uruchamia.
        </p>

        <h3
          id="jak-dziala-nfc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak działa tabliczka NFC?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          W tabliczce NFC jest mały chip. Gdy gość przyłoży do niej telefon, telefon sam odczytuje adres i otwiera stronę, bez uruchamiania aparatu i bez żadnej aplikacji. Wystarczy przyłożyć i poczekać sekundę.
        </p>

        <h3
          id="jak-dziala-qr"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak działa kod QR?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Kod QR to wzór, który gość musi zeskanować aparatem. Telefon rozpoznaje go i proponuje otwarcie linku. Działa na praktycznie każdym smartfonie z aparatem, ale wymaga kilku więcej ruchów: otworzyć aparat, wycelować, kliknąć propozycję.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="Rachunek na podkładce, filiżanka kawy i smartfon na betonowym stoliku w kawiarni"
        />
      </div>

      <SectionDivider quote="Najlepsze rozwiązanie to takie, które gość uruchamia bez zastanawiania się." />

      <div className={P}>
        <h2
          id="dla-goscia"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Co jest wygodniejsze dla gościa?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gość nie myśli o technologii, tylko o tym, czy to zajmie mu chwilę. Dlatego najlepiej patrzeć na to z jego strony stołu.
        </p>

        <h3
          id="liczba-krokow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Ile kroków musi zrobić gość?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Przy NFC to jeden ruch: przyłożyć telefon. Przy QR trzeba odblokować telefon, otworzyć aparat, wycelować i dotknąć linku. Dla wielu osób to nie problem, ale każdy dodatkowy krok to szansa, że gość odpuści, zwłaszcza gdy ma w drugiej ręce kawę albo dziecko.
        </p>

        <h3
          id="kiedy-zawodzi"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Kiedy każde z rozwiązań zawodzi?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          NFC nie zadziała, gdy telefon go nie ma albo ma wyłączony, a niektóre grube etui mogą go osłabiać. QR zawiedzie, gdy kod jest porysowany, źle oświetlony albo wydrukowany zbyt mały. Dlatego dobrze, gdy gość ma wybór. Więcej o tym, jak zachęcić gości do zostawienia opinii, przeczytasz w poradniku o <Link href="/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">szybkim zdobywaniu opinii w Google</Link>.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="Klient trzymający smartfon przy terminalu płatniczym na drewnianej ladzie w lokalu"
        />
      </div>

      <NewsletterBlogBanner locale="pl" />

      <div className={P}>
        <h2
          id="dla-lokalu"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Co jest wygodniejsze dla właściciela lokalu?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dla Ciebie liczy się jeszcze to, jak rzecz wygląda w lokalu, jak długo wytrzyma i ile pracy wymaga, gdy trzeba coś zmienić.
        </p>

        <h3
          id="wyglad-trwalosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wygląd i trwałość
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Kod QR zwykle ląduje na wydrukowanej naklejce albo kartce, która z czasem się wyciera, brudzi i odkleja. Tabliczka jest trwalsza i wygląda jak część wystroju, a nie tymczasowa kartka. Dla lokalu, który dba o estetykę stolików, to ma znaczenie.
        </p>

        <h3
          id="koszt-zmiany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Koszt i możliwość zmian
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Wydrukowanego kodu QR nie zmienisz: jeśli adres się zmieni, trzeba drukować od nowa. Tabliczka prowadzi do strony, której treść możesz edytować, więc kupon, menu czy link do opinii zmieniasz bez wymiany tabliczki. To samo dotyczy kodu na tabliczce, jeśli prowadzi do tej samej strony.
        </p>
      </div>

      <SectionDivider quote="Jedna tabliczka, dwie drogi: przyłóż telefon albo zeskanuj kod." />

      <div className={P}>
        <h2
          id="co-wybrac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Co wybrać: NFC, QR czy oba naraz?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nie musisz wybierać jednego. W praktyce najwygodniej jest dać gościom obie drogi i pozwolić, żeby każdy użył tej, którą woli.
        </p>

        <h3
          id="oba-naraz"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Dlaczego najlepiej mieć oba
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Goście są różni. Jedni od razu przykładają telefon, inni wolą zeskanować kod, a część nie wie, że NFC w ogóle istnieje. Tabliczka z obiema opcjami i krótkim napisem w rodzaju „Zbliż telefon lub zeskanuj kod” obsługuje wszystkich i nie wymaga tłumaczenia.
        </p>

        <h3
          id="gdzie-postawic"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Gdzie postawić tabliczkę?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Najlepsze miejsce to takie, które gość widzi bez szukania: na stoliku, przy kasie albo na ladzie, na wysokości wzroku lub w zasięgu ręki. Dobrze, gdy tabliczka stoi stabilnie i nie przeszkadza w jedzeniu. O tym, kiedy prosić o opinię, piszemy w artykule o <Link href="/blog/opinie-google-restauracja-kawiarnia-jak-zdobyc-wiecej-opinii" className="text-blue-600 hover:underline">opiniach Google dla restauracji i kawiarni</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — NFC czy QR?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NFC jest wygodniejsze i szybsze, QR działa na każdym telefonie. Najlepiej połączyć oba na jednej tabliczce, postawić ją tam, gdzie gość ją zauważy, i prowadzić na stronę, którą możesz zmieniać bez drukowania od nowa. Gdy gość już skorzysta, możesz zbierać opinie w Google albo budować &#123;L:loy|program lojalnościowy bez aplikacji&#125;.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Najczęściej zadawane pytania
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy do tabliczki NFC potrzebna jest aplikacja?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie. Gość przykłada telefon, a strona otwiera się w przeglądarce. Nie musi niczego pobierać ani zakładać konta.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy NFC działa na iPhone&apos;ach?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nowsze iPhone&apos;y odczytują tabliczki NFC bez dodatkowych kroków. Na starszych modelach lepiej mieć obok kod QR jako drugą opcję.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Co jeśli gość nie ma NFC albo nie wie, jak go użyć?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Wtedy zeskanuje kod QR. Dlatego tabliczka powinna mieć oba i krótki napis, który podpowiada, co zrobić.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy kod QR na tabliczce mogę zmienić na inny adres?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Jeśli tabliczka prowadzi do strony, którą edytujesz, zmieniasz jej treść, a nie sam kod. Sama tabliczka zostaje bez zmian.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Gdzie najlepiej postawić tabliczkę w lokalu?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tam, gdzie gość ma chwilę wolnego czasu i widzi ją od razu: na stoliku, przy kasie lub na ladzie. Unikaj miejsc, gdzie coś ją zasłoni.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
