import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function SmsMarketingDlaLokaluDe() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Die meisten Lokale besitzen etwas, das keine Werbung ersetzen kann: eine Liste von Menschen, die schon einmal da waren und es gut fanden. Das Problem ist, dass diese Liste meist nur im Kopf des Personals existiert. Der Gast geht zufrieden, und nichts bringt ihn dazu, gerade zu Ihnen zurückzukommen statt ins Lokal nebenan. SMS ist eine der einfachsten Möglichkeiten, das zu ändern: eine kurze Nachricht, die in der Hosentasche landet, wenn jemand entscheidet, wo er heute isst.
        </p>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Inhaltsverzeichnis:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-sms" className="text-blue-600 hover:underline">
                1. Warum funktioniert SMS in der Gastronomie weiterhin?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-czytany" className="text-blue-600 hover:underline">
                    1.1. Warum wird eine SMS häufiger gelesen als die meisten E-Mails?
                  </a>
                </li>
                <li>
                  <a href="#sms-przeszkadza" className="text-blue-600 hover:underline">
                    1.2. Wann stört eine SMS, statt zu helfen?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zgoda" className="text-blue-600 hover:underline">
                2. Woher bekommen Sie Telefonnummern, ganz legal und ohne Tricks?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#zbieranie-zgody" className="text-blue-600 hover:underline">
                    2.1. Wie holen Sie die Marketing-Einwilligung beim Scannen des NFC-Aufstellers ein?
                  </a>
                </li>
                <li>
                  <a href="#rodo" className="text-blue-600 hover:underline">
                    2.2. Was sollten Sie zur DSGVO beachten?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wysylac" className="text-blue-600 hover:underline">
                3. Was sollten Sie senden, damit Gäste gern wiederkommen?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jaki-kupon" className="text-blue-600 hover:underline">
                    3.1. Welcher Gutschein funktioniert im Restaurant und Café?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-wysylac" className="text-blue-600 hover:underline">
                    3.2. Wann und wie oft sollten Sie Nachrichten senden?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#oplaca-sie" className="text-blue-600 hover:underline">
                4. Wie prüfen Sie, ob sich SMS-Nachrichten lohnen?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-mierzyc" className="text-blue-600 hover:underline">
                    4.1. Was lohnt sich zu messen, und was können Sie weglassen?
                  </a>
                </li>
                <li>
                  <a href="#sms-opinie-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. Wie verbinden Sie SMS mit Google-Bewertungen?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Fazit — wie versenden Sie SMS, die Gäste zurückbringen?
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
          id="dlaczego-sms"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Warum funktioniert SMS in der Gastronomie weiterhin?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gastronomie lebt von Wiederholung. Ein Gast, der einmal da war, hat den schwersten Schritt schon hinter sich: Er ist hereingekommen und hat gesehen, wie es bei Ihnen ist. Ein zweiter Besuch kostet viel weniger als einen neuen Kunden zu gewinnen, und mit einer SMS können Sie direkt darum bitten.
        </p>

        <h3
          id="sms-czytany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Warum wird eine SMS häufiger gelesen als die meisten E-Mails?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eine SMS landet auf einem Bildschirm, den der Gast ohnehin in der Hand hat, und konkurriert nicht wie ein Postfach mit hundert anderen Benachrichtigungen. Sie ist außerdem kurz, das Lesen dauert nur Sekunden. Für ein Lokal ist das wichtig, weil die Entscheidung, wo man isst, oft spontan fällt und eine Nachricht mit Gutschein sie zu Ihren Gunsten kippen kann.
        </p>

        <h3
          id="sms-przeszkadza"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wann stört eine SMS, statt zu helfen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Sie stört, wenn sie zu oft kommt, nichts anbietet oder jemanden erreicht, der nie darum gebeten hat. Eine Nachricht pro Woche mit einem konkreten Angebot schafft Sympathie. Ein tägliches „Kommen Sie vorbei“ bringt Gäste dazu, sich abzumelden oder, schlimmer, Ihr Lokal zu meiden.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="Eine lächelnde Kundin betritt ein Café mit dem Handy in der Hand"
        />
      </div>

      <SectionDivider quote="Der günstigste Gast ist der, der schon einmal bei Ihnen war. Man muss ihn nur daran erinnern, dass sich ein Besuch lohnt." />

      <div className={P}>
        <h2
          id="zgoda"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Woher bekommen Sie Telefonnummern, ganz legal und ohne Tricks?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Telefonnummern sind personenbezogene Daten und müssen daher ehrlich erhoben werden. Die gute Nachricht: Geschieht es in dem Moment, in dem der Gast ohnehin sein Handy in der Hand hält, dauert es wenige Sekunden und braucht keine Tricks.
        </p>

        <h3
          id="zbieranie-zgody"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie holen Sie die Marketing-Einwilligung beim Scannen des NFC-Aufstellers ein?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Am einfachsten geht das im selben Moment, in dem der Gast den NFC-Aufsteller scannt: Danach kann er eine Telefonnummer hinterlassen und der Zusendung von Gutscheinen zustimmen. Er muss nichts herunterladen und kein Konto anlegen, und Sie haben sofort eine Nummer samt bewusster Einwilligung. Mehr darüber, wie ein solcher Aufsteller funktioniert, lesen Sie im Leitfaden zum <Link href="/de/blog/schnell-google-bewertungen-bekommen" className="text-blue-600 hover:underline">schnellen Sammeln von Google-Bewertungen</Link>.
        </p>

        <h3
          id="rodo"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Was sollten Sie zur DSGVO beachten?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Die Marketing-Einwilligung sollte freiwillig, gesondert und klar formuliert sein: Der Gast soll wissen, wozu er zustimmt und dass er sich abmelden kann. Kaufen Sie keine fertigen Listen und tragen Sie keine Personen ein, die um nichts gebeten haben, denn das ist der kürzeste Weg zu Problemen und Beschwerden. Bei Unsicherheiten im Detail fragen Sie einen Juristen oder Datenschutzexperten.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/hero.webp"
          alt="Eine Barista reicht einem lächelnden Gast am Tresen einen Kaffee"
        />
      </div>

      <NewsletterBlogBanner locale="de" />

      <div className={P}>
        <h2
          id="co-wysylac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Was sollten Sie senden, damit Gäste gern wiederkommen?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die SMS ist nur der Kanal; ihre Wirkung hängt davon ab, was Sie schreiben. Eine Nachricht sollte kurz, konkret und für den Gast von Wert sein, sonst wird sie schnell ignoriert.
        </p>

        <h3
          id="jaki-kupon"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Welcher Gutschein funktioniert im Restaurant und Café?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Am besten funktionieren einfache, verständliche Angebote: ein Dessert oder Kaffee zur Bestellung, ein Mittagsrabatt an einem ruhigeren Tag oder eine kleine Geste für Stammgäste. Ein Gutschein sollte eine klare Bedingung und ein Ablaufdatum haben, damit der Gast weiß, dass es sich lohnt, ihn bald einzulösen.
        </p>

        <h3
          id="kiedy-wysylac"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wann und wie oft sollten Sie Nachrichten senden?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Meist genügt eine Nachricht pro Woche, oft sogar weniger. Am besten eignen sich Tage und Uhrzeiten, an denen Tische frei sind: Ein Gutschein für einen Dienstagnachmittag ergibt Sinn, einer für den Freitagabend, wenn ohnehin alles voll ist, ist nur verlorene Marge. Im Paket Starlinkee Pro sind 100 Marketing-SMS pro Monat enthalten, was bei vernünftigem Tempo für ein kleines Lokal völlig ausreicht.
        </p>
      </div>

      <SectionDivider quote="Eine gute SMS klingt wie eine Nachricht von jemandem, den man kennt, nicht wie Werbung vom schwarzen Brett." />

      <div className={P}>
        <h2
          id="oplaca-sie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Wie prüfen Sie, ob sich SMS-Nachrichten lohnen?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SMS-Marketing muss nicht kompliziert sein, aber es hilft zu wissen, ob es das leistet, wofür Sie es gestartet haben. Die gute Nachricht: Zwei, drei einfache Zahlen reichen zur Beurteilung.
        </p>

        <h3
          id="co-mierzyc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Was lohnt sich zu messen, und was können Sie weglassen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Drei Dinge genügen: wie viele Personen den Gutschein eingelöst haben, wie viele Gäste nach der Nachricht wiedergekommen sind und wie viele sich abgemeldet haben. Den Rest, etwa Öffnungsraten oder aufwendige Diagramme, können Sie getrost weglassen, denn für ein einzelnes Lokal spielen sie kaum eine Rolle. Schauen Sie einfach, ob dienstags mehr los ist als vorher.
        </p>

        <h3
          id="sms-opinie-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie verbinden Sie SMS mit Google-Bewertungen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          SMS wirkt am besten als Teil eines Ganzen: Der NFC-Aufsteller sammelt Bewertungen und Nummern, die SMS erinnert an Sie, und ein Gutschein in der Nachricht gibt einen Grund für den nächsten Besuch. Und wenn Sie mehr über Bewertungen in der Gastronomie lesen möchten, schauen Sie in unseren Text über <Link href="/de/blog/google-bewertungen-restaurant-cafe-mehr-bewertungen-bekommen" className="text-blue-600 hover:underline">Google-Bewertungen für Restaurants und Cafés</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fazit — wie versenden Sie SMS, die Gäste zurückbringen?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SMS-Marketing funktioniert in der Gastronomie, wenn es selten, konkret und einwilligungsbasiert ist. Nummern sammeln Sie am besten beim Scannen des NFC-Aufstellers, zusammen mit einer klaren Marketing-Einwilligung, und in der Nachricht bieten Sie etwas an, das für Gast und Lokal sinnvoll ist: ein Dessert, einen Kaffee oder einen Rabatt an einem ruhigeren Tag. Zur Beurteilung genügen wenige einfache Zahlen, und die größte Wirkung entsteht aus der Kombination von SMS und Google-Bewertungen.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Häufig gestellte Fragen
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wie viele SMS pro Monat kann ich Gästen schicken, ohne sie abzuschrecken?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Für die meisten Lokale genügt eine Nachricht pro Woche, oft weniger. Wichtiger als die Zahl ist, dass jede SMS ein konkretes Angebot und ein Ablaufdatum enthält.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Darf ich jedem eine SMS schicken, der einmal eine Telefonnummer hinterlassen hat?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nur Personen, die eine Marketing-Einwilligung gegeben haben und sie widerrufen können. Eine Nummer, die bei anderer Gelegenheit genannt wurde, etwa bei einer Reservierung, ist nicht automatisch eine Einwilligung in Werbung.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wie sammle ich Telefonnummern ohne lästige Frage an der Kasse?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Über einen NFC-Aufsteller: Der Gast scannt ihn mit dem Handy, hinterlässt eine Nummer und stimmt zu, das Personal muss nichts fragen.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Welcher Gutschein funktioniert im Restaurant oder Café am besten?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ein einfacher, konkreter: ein Dessert oder Kaffee zur Bestellung oder ein Mittagsrabatt an einem Tag mit weniger Gästen. Ein Ablaufdatum hilft.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Ersetzen SMS Google-Bewertungen?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nein, sie ergänzen sich. Bewertungen ziehen neue Gäste an, und die SMS erinnert im richtigen Moment an Ihr Lokal.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
