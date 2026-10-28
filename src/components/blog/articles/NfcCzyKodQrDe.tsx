import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function NfcCzyKodQrDe() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Wenn ein Lokal Bewertungen oder Gästekontakte sammeln möchte, kommt immer dieselbe Frage: NFC-Tafel oder QR-Code? Beide führen den Gast zur selben Adresse, unterscheiden sich aber darin, wie man sie nutzt, wie sie auf dem Tisch aussehen und was passiert, wenn etwas nicht klappt. Hier ein nüchterner Vergleich, damit Sie das wählen können, was zu Ihrem Lokal passt.
        </p>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Inhaltsverzeichnis:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#roznica" className="text-blue-600 hover:underline">
                1. Worin unterscheidet sich eine NFC-Tafel von einem QR-Code?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jak-dziala-nfc" className="text-blue-600 hover:underline">
                    1.1. Wie funktioniert eine NFC-Tafel?
                  </a>
                </li>
                <li>
                  <a href="#jak-dziala-qr" className="text-blue-600 hover:underline">
                    1.2. Wie funktioniert ein QR-Code?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-goscia" className="text-blue-600 hover:underline">
                2. Was ist für den Gast bequemer?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#liczba-krokow" className="text-blue-600 hover:underline">
                    2.1. Wie viele Schritte muss der Gast machen?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-zawodzi" className="text-blue-600 hover:underline">
                    2.2. Wann versagt welche Lösung?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-lokalu" className="text-blue-600 hover:underline">
                3. Was ist für Sie als Inhaber bequemer?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wyglad-trwalosc" className="text-blue-600 hover:underline">
                    3.1. Aussehen und Haltbarkeit
                  </a>
                </li>
                <li>
                  <a href="#koszt-zmiany" className="text-blue-600 hover:underline">
                    3.2. Kosten und Änderbarkeit
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wybrac" className="text-blue-600 hover:underline">
                4. Was wählen: NFC, QR oder beides?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#oba-naraz" className="text-blue-600 hover:underline">
                    4.1. Warum beides am besten ist
                  </a>
                </li>
                <li>
                  <a href="#gdzie-postawic" className="text-blue-600 hover:underline">
                    4.2. Wo stellt man die Tafel hin?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Fazit — NFC oder QR?
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                6. FAQ — Häufig gestellte Fragen
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
          Worin unterscheidet sich eine NFC-Tafel von einem QR-Code?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Technisch tun beide dasselbe: Sie leiten das Handy des Gastes zu einer Internetadresse. Der Unterschied liegt darin, wie der Gast das startet.
        </p>

        <h3
          id="jak-dziala-nfc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie funktioniert eine NFC-Tafel?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          In einer NFC-Tafel steckt ein kleiner Chip. Hält der Gast sein Handy daran, liest das Handy die Adresse selbst und öffnet die Seite, ohne Kamera und ohne App. Kurz anhalten, eine Sekunde warten.
        </p>

        <h3
          id="jak-dziala-qr"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie funktioniert ein QR-Code?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Ein QR-Code ist ein Muster, das der Gast mit der Kamera scannt. Das Handy erkennt ihn und schlägt vor, den Link zu öffnen. Das funktioniert auf fast jedem Smartphone mit Kamera, braucht aber ein paar Handgriffe mehr: Kamera öffnen, zielen, Vorschlag antippen.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="Rechnung auf einem Klemmbrett, eine Tasse Kaffee und ein Smartphone auf einem Betontisch im Café"
        />
      </div>

      <SectionDivider quote="Die beste Lösung ist die, die der Gast startet, ohne nachzudenken." />

      <div className={P}>
        <h2
          id="dla-goscia"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Was ist für den Gast bequemer?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Der Gast denkt nicht an Technik, sondern daran, ob es nur einen Moment dauert. Deshalb lohnt der Blick von seiner Seite des Tisches.
        </p>

        <h3
          id="liczba-krokow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie viele Schritte muss der Gast machen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Bei NFC ist es ein Handgriff: Handy anhalten. Beim QR-Code muss der Gast das Handy entsperren, die Kamera öffnen, zielen und den Link antippen. Für viele ist das kein Problem, aber jeder zusätzliche Schritt ist eine Chance, dass der Gast abbricht, besonders mit Kaffee oder Kind in der anderen Hand.
        </p>

        <h3
          id="kiedy-zawodzi"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wann versagt welche Lösung?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          NFC funktioniert nicht, wenn das Handy es nicht hat oder ausgeschaltet ist, und manche dicken Hüllen können es abschwächen. Ein QR-Code versagt, wenn er zerkratzt, schlecht beleuchtet oder zu klein gedruckt ist. Darum ist es gut, dem Gast die Wahl zu lassen. Mehr dazu, wie Gäste eine Bewertung hinterlassen, lesen Sie in unserem Ratgeber zu <Link href="/blog/schnell-google-bewertungen-bekommen" className="text-blue-600 hover:underline">schnell Google-Bewertungen bekommen</Link>.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="Ein Kunde hält ein Smartphone neben ein Zahlungsterminal auf einer Holztheke"
        />
      </div>

      <NewsletterBlogBanner locale="de" />

      <div className={P}>
        <h2
          id="dla-lokalu"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Was ist für Sie als Inhaber bequemer?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Für Sie zählt zusätzlich, wie es im Lokal aussieht, wie lange es hält und wie viel Aufwand Änderungen machen.
        </p>

        <h3
          id="wyglad-trwalosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Aussehen und Haltbarkeit
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ein QR-Code landet meist auf einem gedruckten Aufkleber oder Zettel, der mit der Zeit abnutzt, schmutzig wird und sich löst. Eine Tafel hält länger und wirkt wie Teil der Einrichtung, nicht wie ein Provisorium. Für ein Lokal, das auf seine Tische achtet, zählt das.
        </p>

        <h3
          id="koszt-zmiany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Kosten und Änderbarkeit
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Einen gedruckten QR-Code können Sie nicht ändern: Ändert sich die Adresse, muss neu gedruckt werden. Die Tafel führt zu einer Seite, deren Inhalt Sie bearbeiten können, also ändern Sie Gutschein, Speisekarte oder Bewertungslink, ohne die Tafel zu ersetzen. Dasselbe gilt für den Code auf der Tafel, wenn er zu derselben Seite führt.
        </p>
      </div>

      <SectionDivider quote="Eine Tafel, zwei Wege: Handy anhalten oder Code scannen." />

      <div className={P}>
        <h2
          id="co-wybrac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Was wählen: NFC, QR oder beides?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sie müssen sich nicht für eines entscheiden. In der Praxis ist es am bequemsten, beide Wege anzubieten und jeden den wählen zu lassen, den er bevorzugt.
        </p>

        <h3
          id="oba-naraz"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Warum beides am besten ist
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gäste sind verschieden. Manche halten sofort das Handy an, andere scannen lieber einen Code, und manche wissen gar nicht, dass es NFC gibt. Eine Tafel mit beiden Optionen und einem kurzen Satz wie „Handy anhalten oder Code scannen“ bedient alle und braucht keine Erklärung.
        </p>

        <h3
          id="gdzie-postawic"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wo stellt man die Tafel hin?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Der beste Platz ist einer, den der Gast ohne Suchen sieht: auf dem Tisch, an der Kasse oder auf der Theke, in Augenhöhe oder in Reichweite. Die Tafel sollte stabil stehen und beim Essen nicht stören. Wann Sie um eine Bewertung bitten sollten, lesen Sie in unserem Artikel zu <Link href="/blog/google-bewertungen-restaurant-cafe-mehr-bewertungen-bekommen" className="text-blue-600 hover:underline">Google-Bewertungen für Restaurants und Cafés</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fazit — NFC oder QR?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NFC ist schneller und bequemer, QR funktioniert auf jedem Handy. Am besten kombinieren Sie beides auf einer Tafel, stellen sie dorthin, wo Gäste sie bemerken, und verlinken auf eine Seite, die Sie ohne Neudruck ändern können. Sobald Gäste sie nutzen, können Sie Google-Bewertungen sammeln oder ein &#123;L:loy|Treueprogramm ohne App&#125; aufbauen.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Häufig gestellte Fragen
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Braucht man für eine NFC-Tafel eine App?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nein. Der Gast hält das Handy an, und die Seite öffnet sich im Browser. Er muss nichts herunterladen und kein Konto anlegen.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Funktioniert NFC auf dem iPhone?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Neuere iPhones lesen NFC-Tafeln ohne zusätzliche Schritte. Bei älteren Modellen ist ein QR-Code daneben als zweite Option besser.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Was, wenn der Gast kein NFC hat oder nicht weiß, wie es geht?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Dann scannt er den QR-Code. Deshalb sollte eine Tafel beides haben und einen kurzen Hinweis, was zu tun ist.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Kann ich ändern, wohin der QR-Code auf der Tafel führt?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Führt die Tafel zu einer Seite, die Sie bearbeiten, ändern Sie die Seite, nicht den Code selbst. Die Tafel bleibt, wie sie ist.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wo stelle ich die Tafel im Lokal am besten hin?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Dort, wo der Gast einen freien Moment hat und sie sofort sieht: auf dem Tisch, an der Kasse oder auf der Theke. Vermeiden Sie Plätze, an denen sie verdeckt werden kann.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
