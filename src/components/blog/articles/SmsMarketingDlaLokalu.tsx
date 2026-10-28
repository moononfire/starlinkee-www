import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function SmsMarketingDlaLokalu() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Większość lokali ma coś, czego nie ma żadna reklama: listę ludzi, którzy już u nich byli i im smakowało. Problem w tym, że ta lista zwykle istnieje tylko w głowie obsługi. Gość wychodzi, zadowolony, i nic nie sprawia, że wróci akurat do Ciebie, a nie do lokalu obok. SMS to jeden z najprostszych sposobów, żeby to zmienić: krótka wiadomość, która trafia w kieszeń, w chwili gdy ktoś decyduje, gdzie zje dziś obiad.
        </p>

        <nav
          aria-label="Spis treści"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Spis treści:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-sms" className="text-blue-600 hover:underline">
                1. Dlaczego SMS nadal działa w gastronomii?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-czytany" className="text-blue-600 hover:underline">
                    1.1. Dlaczego SMS jest czytany częściej niż większość maili?
                  </a>
                </li>
                <li>
                  <a href="#sms-przeszkadza" className="text-blue-600 hover:underline">
                    1.2. Kiedy SMS przeszkadza zamiast pomagać?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zgoda" className="text-blue-600 hover:underline">
                2. Skąd brać numery telefonów, żeby było legalnie i bez kombinowania?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#zbieranie-zgody" className="text-blue-600 hover:underline">
                    2.1. Jak zbierać zgodę marketingową przy skanowaniu tabliczki NFC?
                  </a>
                </li>
                <li>
                  <a href="#rodo" className="text-blue-600 hover:underline">
                    2.2. O czym pamiętać w kwestii RODO?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wysylac" className="text-blue-600 hover:underline">
                3. Co wysyłać, żeby goście chcieli wracać?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jaki-kupon" className="text-blue-600 hover:underline">
                    3.1. Jaki kupon sprawdza się w restauracji i kawiarni?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-wysylac" className="text-blue-600 hover:underline">
                    3.2. Kiedy i jak często wysyłać wiadomości?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#oplaca-sie" className="text-blue-600 hover:underline">
                4. Jak sprawdzić, czy SMS-y się opłacają?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-mierzyc" className="text-blue-600 hover:underline">
                    4.1. Co warto mierzyć, a co można odpuścić?
                  </a>
                </li>
                <li>
                  <a href="#sms-opinie-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. Jak połączyć SMS-y z opiniami Google?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Podsumowanie — jak wysyłać SMS-y, żeby goście wracali?
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
          id="dlaczego-sms"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Dlaczego SMS nadal działa w gastronomii?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gastronomia żyje z powtarzalności. Gość, który był raz, ma za sobą najtrudniejszy krok: wszedł i sprawdził, jak u Ciebie jest. Kolejna wizyta jest dużo tańsza niż zdobycie nowego klienta, a SMS pozwala o nią poprosić wprost.
        </p>

        <h3
          id="sms-czytany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Dlaczego SMS jest czytany częściej niż większość maili?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          SMS trafia na ekran, który gość i tak ma w ręku, i nie konkuruje z setką innych powiadomień jak skrzynka mailowa. Do tego jest krótki, więc przeczytanie go zajmuje kilka sekund. Dla lokalu to ważne, bo decyzja „gdzie dziś zjemy” często zapada spontanicznie, a wiadomość z kuponem może przechylić ją na Twoją stronę.
        </p>

        <h3
          id="sms-przeszkadza"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Kiedy SMS przeszkadza zamiast pomagać?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Przeszkadza wtedy, gdy przychodzi za często, nic nie oferuje albo trafia do kogoś, kto o nią nie prosił. Jedna wiadomość w tygodniu z konkretną propozycją budzi sympatię. Codzienne „zapraszamy” sprawia, że gość wypisuje się lub, co gorsza, zaczyna omijać lokal szerokim łukiem.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="Uśmiechnięta klientka wchodzi do kawiarni z telefonem w dłoni"
        />
      </div>

      <SectionDivider quote="Najtańszy gość to ten, który już u Ciebie był. Trzeba tylko przypomnieć mu, że warto wrócić." />

      <div className={P}>
        <h2
          id="zgoda"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Skąd brać numery telefonów, żeby było legalnie i bez kombinowania?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Numery telefonów to dane osobowe, więc trzeba je zbierać uczciwie. Dobra wiadomość: jeśli robisz to przy okazji, kiedy gość i tak trzyma telefon w ręku, zajmuje to kilka sekund i nie wymaga żadnych sztuczek.
        </p>

        <h3
          id="zbieranie-zgody"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak zbierać zgodę marketingową przy skanowaniu tabliczki NFC?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Najwygodniej zrobić to w tym samym momencie, w którym gość skanuje tabliczkę NFC: po zeskanowaniu może zostawić numer telefonu i zaznaczyć zgodę na wiadomości z kuponami. Nie musi niczego pobierać ani zakładać konta, a Ty od razu masz numer powiązany ze świadomą zgodą. Więcej o tym, jak działa taka tabliczka, przeczytasz w poradniku o <Link href="/pl/blog/jak-szybko-zdobyc-opinie-w-google" className="text-blue-600 hover:underline">szybkim zdobywaniu opinii w Google</Link>.
        </p>

        <h3
          id="rodo"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          O czym pamiętać w kwestii RODO?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Zgoda marketingowa powinna być dobrowolna, osobna i jasno opisana: gość ma wiedzieć, na co się zgadza i że może się wypisać. Nie kupuj gotowych baz numerów i nie dopisuj do listy osób, które o nic nie prosiły, bo to najkrótsza droga do problemów i do skarg. Jeśli masz wątpliwości co do szczegółów, skonsultuj je z prawnikiem lub specjalistą od ochrony danych.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/hero.webp"
          alt="Barista podaje kawę uśmiechniętemu gościowi przy ladzie kawiarni"
        />
      </div>

      <NewsletterBlogBanner locale="pl" />

      <div className={P}>
        <h2
          id="co-wysylac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Co wysyłać, żeby goście chcieli wracać?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sam SMS to tylko kanał, a o skuteczności decyduje to, co w nim napiszesz. Wiadomość ma być krótka, konkretna i mieć dla gościa realną wartość, bo inaczej szybko ją zignoruje.
        </p>

        <h3
          id="jaki-kupon"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jaki kupon sprawdza się w restauracji i kawiarni?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Najlepiej działają proste, zrozumiałe propozycje: deser lub kawa do zamówienia, rabat na lunch w dzień, kiedy w lokalu jest luźniej, albo drobny gest dla stałych gości. Kupon powinien mieć jasny warunek i termin ważności, bo dzięki temu gość wie, że opłaca się go wykorzystać szybko.
        </p>

        <h3
          id="kiedy-wysylac"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Kiedy i jak często wysyłać wiadomości?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Zwykle wystarczy jedna wiadomość w tygodniu, a często nawet rzadziej. Najlepsze są dni i godziny, w których lokal ma wolne stoliki: kupon na wtorkowe popołudnie ma sens, a kupon na piątkowy wieczór, kiedy i tak jest komplet, to tylko stracona marża. W pakiecie Starlinkee Pro masz 100 SMS-ów marketingowych miesięcznie, co przy rozsądnym tempie w zupełności wystarcza małemu lokalowi.
        </p>
      </div>

      <SectionDivider quote="Dobry SMS brzmi jak wiadomość od kogoś znajomego, a nie jak reklama z tablicy ogłoszeń." />

      <div className={P}>
        <h2
          id="oplaca-sie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Jak sprawdzić, czy SMS-y się opłacają?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SMS marketing nie musi być skomplikowany, ale warto wiedzieć, czy robi to, po co go uruchamiasz. Dobra wiadomość: do oceny wystarczą dwie, trzy proste liczby.
        </p>

        <h3
          id="co-mierzyc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Co warto mierzyć, a co można odpuścić?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wystarczą trzy rzeczy: ile osób wykorzystało kupon, ilu gości wróciło po wiadomości i ilu się wypisało. Resztę, jak współczynniki otwarć czy rozbudowane wykresy, możesz spokojnie odpuścić, bo dla jednego lokalu nie mają większego znaczenia. Zobacz po prostu, czy we wtorki jest więcej gości niż wcześniej.
        </p>

        <h3
          id="sms-opinie-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Jak połączyć SMS-y z opiniami Google?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          SMS najlepiej działa jako część całości: tabliczka NFC zbiera opinie i numery, SMS przypomina o sobie, a kupon w wiadomości daje powód do kolejnej wizyty. A jeśli chcesz dowiedzieć się więcej o samych opiniach w gastronomii, zajrzyj do tekstu o <Link href="/pl/blog/opinie-google-restauracja-kawiarnia-jak-zdobyc-wiecej-opinii" className="text-blue-600 hover:underline">opiniach Google dla restauracji i kawiarni</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Podsumowanie — jak wysyłać SMS-y, żeby goście wracali?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SMS marketing działa w gastronomii wtedy, gdy jest rzadki, konkretny i oparty na zgodzie. Numery najlepiej zbierać przy skanowaniu tabliczki NFC, razem z jasną zgodą marketingową, a w wiadomości proponować coś, co ma sens dla gościa i dla lokalu: deser, kawę lub rabat w spokojniejszy dzień. Do oceny wystarczy kilka prostych liczb, a największy efekt daje połączenie SMS-ów z opiniami Google.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Najczęściej zadawane pytania
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Ile SMS-ów w miesiącu mogę wysłać gościom, żeby ich nie zniechęcić?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Dla większości lokali wystarcza jedna wiadomość w tygodniu, a często mniej. Ważniejsze od liczby jest to, żeby każdy SMS miał konkretną propozycję i termin ważności.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy mogę wysyłać SMS-y każdemu, kto kiedyś zostawił numer telefonu?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Tylko osobom, które wyraziły zgodę marketingową i mogą się z niej wycofać. Numer podany przy innej okazji, na przykład przy rezerwacji, nie jest automatycznie zgodą na reklamę.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Jak zbierać numery telefonów bez uciążliwego pytania przy kasie?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Przez tabliczkę NFC: gość skanuje ją telefonem, zostawia numer i zaznacza zgodę, a obsługa nie musi o nic pytać.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Jaki kupon działa najlepiej w restauracji lub kawiarni?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Prosty i konkretny: deser lub kawa do zamówienia albo rabat na lunch w dzień, kiedy w lokalu jest mniej gości. Dobrze, żeby miał termin ważności.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Czy SMS-y zastąpią opinie w Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nie, one się uzupełniają. Opinie przyciągają nowych gości, a SMS przypomina o lokalu w odpowiednim momencie.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
