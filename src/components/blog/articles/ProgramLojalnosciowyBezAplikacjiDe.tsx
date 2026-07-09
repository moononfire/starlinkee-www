import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function ProgramLojalnosciowyBezAplikacjiDe() {
  return (
    <>
      {/* ── EINLEITUNG + INHALTSVERZEICHNIS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Die Gewinnung eines neuen Kunden kostet im Schnitt fünfmal mehr als das Halten eines
          bestehenden — trotzdem haben die meisten lokalen Betriebe kein System, das Wiederkehr
          belohnt. Eine Papierkarte geht im Portemonnaie verloren, und eine mobile App verlangt
          Download, Kontoerstellung und Zustimmung zu Benachrichtigungen — drei Hürden, an denen
          die meisten Kunden scheitern, bevor sie überhaupt die erste Belohnung sehen. Dieser
          Artikel zeigt Ihnen, wie Sie ein Treueprogramm aufbauen, das ohne Papier und ohne App
          funktioniert — und dabei zugleich Google-Bewertungen und Ihre Marketing-Kontaktliste
          stärkt.
        </p>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Inhaltsverzeichnis:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#warum-treue" className="text-blue-600 hover:underline">
                1. Warum in wiederkehrende Kunden investieren?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#kosten-verlust" className="text-blue-600 hover:underline">
                    1.1. Was kostet der Verlust eines Stammkunden wirklich?
                  </a>
                </li>
                <li>
                  <a href="#warum-apps-scheitern" className="text-blue-600 hover:underline">
                    1.2. Warum scheitern Treue-Apps meistens?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#wie-nfc-karte-funktioniert" className="text-blue-600 hover:underline">
                2. Wie funktioniert eine digitale Treuekarte ohne App?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#technologie" className="text-blue-600 hover:underline">
                    2.1. NFC-Technologie in der Praxis
                  </a>
                </li>
                <li>
                  <a href="#kundenweg" className="text-blue-600 hover:underline">
                    2.2. Der Kundenweg Schritt für Schritt
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#wie-gestalten" className="text-blue-600 hover:underline">
                3. Wie gestaltet man ein wirksames Treueprogramm?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#belohnungsschwelle" className="text-blue-600 hover:underline">
                    3.1. Belohnungsschwelle und Besuchsfrequenz
                  </a>
                </li>
                <li>
                  <a href="#beispiele-schwellen" className="text-blue-600 hover:underline">
                    3.2. Beispielhafte Belohnungsschwellen nach Branche
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#treue-und-bewertungen" className="text-blue-600 hover:underline">
                4. Treueprogramm, SMS-Marketing und Google-Bewertungen
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-und-treue" className="text-blue-600 hover:underline">
                    4.1. Wie verbindet man Treue mit SMS-Gutscheinen?
                  </a>
                </li>
                <li>
                  <a href="#treue-und-rezensionen" className="text-blue-600 hover:underline">
                    4.2. Warum hinterlassen treue Kunden mehr Bewertungen?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#einfuehrung" className="text-blue-600 hover:underline">
                5. Wie führt man ein Treueprogramm Schritt für Schritt ein?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#einfuehrungsschritte" className="text-blue-600 hover:underline">
                    5.1. Schritte der Einführung
                  </a>
                </li>
                <li>
                  <a href="#haeufige-fehler" className="text-blue-600 hover:underline">
                    5.2. Die häufigsten Fehler bei der Einführung
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zusammenfassung" className="text-blue-600 hover:underline">
                6. Zusammenfassung — Treue ohne Reibung
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                7. FAQ — Häufig gestellte Fragen
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── ABSCHNITT 1 ── */}
      <div className={P}>
        <h2 id="warum-treue" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Warum in wiederkehrende Kunden investieren?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die meisten Marketingbudgets lokaler Betriebe fließen in die Gewinnung neuer Gäste —
          Werbung, Erstbesuchsrabatte, Präsenz in sozialen Netzwerken. Dabei erwirtschaften Kunden,
          die sich bereits einmal für Ihr Lokal oder Ihren Salon entschieden haben, den größten
          Teil des Umsatzes und empfehlen ihn, was noch wichtiger ist, am häufigsten weiter. Ein
          Treueprogramm macht aus einer zufälligen Rückkehr eine wiederholbare Gewohnheit.
        </p>

        <h3 id="kosten-verlust" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Was kostet der Verlust eines Stammkunden wirklich?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die Gewinnung eines neuen Kunden erfordert Werbung, Zeit für den Aufbau von Vertrauen und
          oft einen ermäßigten ersten Besuch. Ein Stammkunde verursacht diese Kosten nicht mehr —
          trotzdem tun die meisten Betriebe nichts, um ihn bewusst länger zu halten. Ohne ein
          System zur Belohnung von Wiederbesuchen wechselt ein Kunde genauso gern zur Konkurrenz,
          sobald diese gerade eine bessere Aktion anbietet.
        </p>

        <h3 id="warum-apps-scheitern" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Warum scheitern Treue-Apps meistens?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eine klassische mobile App für ein einzelnes Restaurant oder einen einzelnen Salon hat
          einen Fehler, der sich nicht umgehen lässt: Niemand möchte für jeden Betrieb, den er nur
          gelegentlich besucht, eine eigene App herunterladen. Download, Registrierung und
          Zustimmung zu Benachrichtigungen sind drei Hürden, an denen die überwiegende Mehrheit der
          Kunden scheitert — noch bevor sie überhaupt den ersten Vorteil des Programms sehen. Eine
          Papierkarte hat das umgekehrte Problem: Sie geht verloren, wird schmutzig und liefert
          keinerlei Daten darüber, wer tatsächlich wie oft wiederkommt.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/papierowa-karta.webp"
          alt="Eine abgenutzte, verblasste Papier-Treuekarte, zerknittert zwischen Quittungen am Boden eines Portemonnaies"
        />
      </div>

      {/* ── ABSCHNITT 2 ── */}
      <div className={P}>
        <h2 id="wie-nfc-karte-funktioniert" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Wie funktioniert eine digitale Treuekarte ohne App?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ein Mittelweg zwischen Papier und App ist eine digitale Treuekarte auf Basis der
          Nahfeldkommunikation. Der Kunde installiert nichts — die gesamte Interaktion läuft im
          Browser des Telefons ab, und Besuche werden automatisch nach einem einzigen Kontakt mit
          der NFC-Theke an der Kasse oder Rezeption gespeichert.
        </p>

        <h3 id="technologie" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          NFC-Technologie in der Praxis
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          NFC (Near Field Communication) ist derselbe kontaktlose Standard, der auch hinter dem
          kontaktlosen Bezahlen mit Karte oder Telefon steckt. Eine NFC-Theke oder ein NFC-Aufkleber
          benötigt keine Stromversorgung — es genügt, das Telefon wenige Zentimeter davorzuhalten,
          damit das System die passende Seite im Browser öffnet. Keine App, kein Bluetooth-Pairing,
          kein QR-Code, der bei schlechtem Licht gescannt werden muss.
        </p>

        <h3 id="kundenweg" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Der Kundenweg Schritt für Schritt
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Der Kunde hält sein Telefon an die NFC-Theke an Kasse, Tresen oder Rezeption.</li>
          <li>Der Browser öffnet eine Seite mit seiner digitalen Karte — ohne Login, anhand der Telefonnummer.</li>
          <li>Das System zählt einen weiteren Besuch und zeigt, wie viele bis zur Belohnung fehlen.</li>
          <li>Nach Erreichen der Schwelle erhält der Kunde eine SMS-Benachrichtigung über die zugeteilte Belohnung.</li>
          <li>Beim nächsten Besuch übergibt das Personal die Belohnung einfach anhand der Nummer im Panel.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-6">
          Der gesamte Vorgang dauert für den Kunden buchstäblich eine Sekunde — schneller, als die
          Papierkarte im Portemonnaie zu finden. Für den Betrieb landet jeder Besuch sofort im
          Admin-Panel, wo Besuchshistorie, Anzahl aktiver Karten und der Fortschritt einzelner
          Kunden zur Belohnungsschwelle sichtbar sind.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/nfc.webp"
          alt="Kundenhand hält beiläufig ein Smartphone an einer modernen Rezeptionstheke im Friseursalon, natürliche Geste, Bildschirm außerhalb des Bildausschnitts"
        />
      </div>

      {/* ── ÜBERGANG 2→3 ── */}
      <SectionDivider quote="Ein Treueprogramm, das dem Kunden Aufwand abverlangt, funktioniert schon beim zweiten Besuch nicht mehr." />

      {/* ── ABSCHNITT 3 ── */}
      <div className={P}>
        <h2 id="wie-gestalten" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Wie gestaltet man ein wirksames Treueprogramm?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Technologie allein reicht nicht aus — über die Wirksamkeit des Programms entscheidet, wie
          Sie die Belohnungsschwelle festlegen und wie gut sie zur tatsächlichen Besuchsfrequenz
          Ihrer Branche passt. Eine zu hohe Schwelle schreckt ab, eine zu niedrige erzeugt weder
          echte Marge noch echte Treue.
        </p>

        <h3 id="belohnungsschwelle" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Belohnungsschwelle und Besuchsfrequenz
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ein guter Ausgangspunkt ist ein Blick darauf, wie oft ein durchschnittlicher Kunde einen
          bestimmten Ort in seinem natürlichen Zyklus besucht. Ein Friseur oder Barber, der alle
          4–6 Wochen aufgesucht wird, braucht eine andere Schwelle als ein Café, in das der Kunde
          jeden Morgen kommt. Die Regel ist einfach: Die Belohnung sollte in angemessener Zeit
          erreichbar sein — von wenigen Wochen bis maximal zwei bis drei Monaten — sonst vergisst
          der Kunde das Programm, bevor er sein Ziel erreicht.
        </p>

        <h3 id="beispiele-schwellen" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Beispielhafte Belohnungsschwellen nach Branche
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Café:</strong> jeder 8. Kaffee gratis — bei täglichen Besuchen in etwa zwei Wochen erreicht.</li>
          <li><strong>Restaurant:</strong> nach 5 Besuchen ein Dessert oder eine Vorspeise gratis.</li>
          <li><strong>Friseursalon / Barbershop:</strong> jeder 6. Haarschnitt mit 50 % Rabatt — abgestimmt auf den natürlichen Besuchszyklus.</li>
          <li><strong>Kosmetikstudio:</strong> nach 4 Behandlungen eine kostenlose Pflegebehandlung.</li>
          <li><strong>Fitnessstudio:</strong> Belohnung für eine Serie von Besuchen im Monat, z. B. gratis Personal-Training nach 12 Check-ins.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wichtiger als die Höhe der Belohnung ist ihre Einfachheit — der Kunde sollte die Regel
          sofort verstehen, ohne AGB zu lesen. &bdquo;Jeder 8. Kaffee gratis&ldquo; funktioniert
          besser als ein Punktesystem mit Umrechnung.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/progi.webp"
          alt="Eine Kreidetafel an der Café-Theke mit einer handgeschriebenen Treueprämien-Botschaft"
        />
      </div>

      {/* ── VOLLBREITER NEWSLETTER-BANNER ── */}
      <NewsletterBlogBanner locale="de" />

      {/* ── ABSCHNITT 4 ── */}
      <div className={P}>
        <h2 id="treue-und-bewertungen" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Treueprogramm, SMS-Marketing und Google-Bewertungen
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eine Treuekarte auf Basis der Telefonnummer hat gegenüber Papier einen weiteren Vorteil —
          jeder Besuch baut gleichzeitig eine Kontaktliste auf, die für weiteres Marketing genutzt
          werden kann. Das ist die Verbindung von drei Elementen — Treue, Aktion und Reputation —
          in einem System.
        </p>

        <h3 id="sms-und-treue" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Wie verbindet man Treue mit SMS-Gutscheinen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wenn ein Kunde Besuche auf einer digitalen Karte sammelt und der Kontaktaufnahme zu
          Marketingzwecken gemäß DSGVO zustimmt, landet seine Nummer in einer Liste, die für den
          Versand personalisierter SMS-Gutscheine genutzt werden kann. Ein Kunde, der nur noch
          einen Besuch von der Belohnung entfernt ist, aber seit drei Wochen nicht mehr da war, ist
          der natürliche Empfänger einer Erinnerung mit kleinem Bonus — genau in dem Moment, in dem
          er am leichtesten zurückzugewinnen ist.
        </p>

        <h3 id="treue-und-rezensionen" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Warum hinterlassen treue Kunden mehr Bewertungen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ein Kunde, der regelmäßig wiederkommt und sich durch das Belohnungsprogramm geschätzt
          fühlt, nimmt sich deutlich lieber zehn Sekunden Zeit für eine Bewertung als jemand, der
          nur einmalig da war. Deshalb lohnt es sich, den Moment der Besuchserfassung mit einer
          Bitte um eine Bewertung zu verbinden — etwa beim Einlösen einer Belohnung. Genau so
          funktioniert die{" "}
          <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            Starlinkee-NFC-Theke
          </Link>
          : Ein Gerät bedient gleichzeitig die Treuekarte, das Google-Bewertungsformular und einen
          Filter, der vor unfairen Bewertungen schützt. Wie das Sammeln von Bewertungen selbst
          Schritt für Schritt funktioniert, erfahren Sie in unserem Artikel darüber,{" "}
          <Link href="/blog/schnell-google-bewertungen-bekommen" className="text-blue-600 hover:underline">
            wie man schnell Google-Bewertungen bekommt
          </Link>
          . Wie Sie auf diese Bewertungen — auch auf schwierige — antworten, haben wir im Artikel{" "}
          <Link href="/blog/wie-auf-google-bewertungen-antworten" className="text-blue-600 hover:underline">
            wie man auf Google-Bewertungen antwortet
          </Link>{" "}
          beschrieben.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="Lächelnde Kundin kehrt in ein Café zurück, hält ihr Smartphone locker an der Seite, Bildschirm nicht sichtbar"
        />
      </div>

      {/* ── ÜBERGANG 4→5 ── */}
      <SectionDivider quote="Kundentreue entsteht nicht durch einen Rabatt — sie entsteht dadurch, wie leicht die Rückkehr fällt." />

      {/* ── ABSCHNITT 5 ── */}
      <div className={P}>
        <h2 id="einfuehrung" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Wie führt man ein Treueprogramm Schritt für Schritt ein?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die Einführung eines digitalen Treueprogramms in einem lokalen Betrieb erfordert weder
          eine Integration in die Kasse noch eine wochenlange Schulung des Personals. Der gesamte
          Prozess besteht aus wenigen einfachen Schritten.
        </p>

        <h3 id="einfuehrungsschritte" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Schritte der Einführung
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Legen Sie die Belohnungsschwelle und -art fest, passend zur natürlichen Besuchsfrequenz.</li>
          <li>Platzieren Sie die NFC-Theke gut sichtbar — an Kasse, Tresen oder Rezeption.</li>
          <li>Weisen Sie das Personal an, Kunden bei jedem Besuch ans Auflegen des Telefons zu erinnern.</li>
          <li>Fügen Sie einen kurzen Hinweis zum Programm am Tisch, im Schaufenster oder am Eingang hinzu.</li>
          <li>Beobachten Sie im Admin-Panel, wie viele Kunden aktiv Besuche sammeln, und reagieren Sie mit einem SMS-Gutschein, wenn die Aktivität nachlässt.</li>
        </ol>

        <h3 id="haeufige-fehler" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Die häufigsten Fehler bei der Einführung
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Zu hohe Belohnungsschwelle</strong> — Kunden geben auf, bevor sie den ersten Vorteil sehen.</li>
          <li><strong>Keine Erinnerung durch das Personal</strong> — Kunden vergessen schnell, das Telefon aufzulegen, wenn niemand sie daran erinnert.</li>
          <li><strong>Zu komplizierte Regeln</strong> — ein Punktesystem mit Umrechnung schreckt mehr ab als ein einfacher Besuchszähler.</li>
          <li><strong>Keine sichtbare Information über das Programm</strong> — Kunden nutzen nichts, von dessen Existenz sie nichts wissen.</li>
          <li><strong>Ignorieren der Panel-Daten</strong> — Besuchsdaten allein steigern die Treue nicht, wenn niemand auf einen Rückgang der Aktivität mit einem Gutschein oder einer Erinnerung reagiert.</li>
        </ul>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/wdrozenie.webp"
          alt="Restaurantbesitzer erklärt einem lächelnden Erstkunden begeistert etwas an der Theke"
        />
      </div>

      {/* ── ZUSAMMENFASSUNG ── */}
      <div className={P}>
        <section
          id="zusammenfassung"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Zusammenfassung — Treue ohne Reibung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Kunden verlassen Treueprogramme nicht, weil sie keine Belohnung wollen — sie verlassen
            sie, weil der Weg dorthin zu mühsam ist. Die Papierkarte geht verloren, die App
            verlangt einen Download, und beide Lösungen liefern keinerlei Daten darüber, wer
            wirklich wiederkommt. Eine digitale, auf NFC basierende Karte beseitigt diese Hürde:
            ein Antippen des Telefons, keine Installation, volle Übersicht im Admin-Panel. Wenn Sie
            das Sammeln von Besuchen mit Google-Bewertungen und SMS-Gutscheinen in einem System
            verbinden möchten, sehen Sie sich an, wie die{" "}
            <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Starlinkee-NFC-Theke
            </Link>{" "}
            mit integrierter digitaler Treuekarte funktioniert.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Häufig gestellte Fragen
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Muss der Kunde eine App herunterladen, um die digitale Treuekarte zu nutzen?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nein. Die gesamte Karte funktioniert im Browser des Telefons, nachdem es an die
                NFC-Theke gehalten wurde — ohne Installation, ohne Kontoerstellung und ohne
                Passwort-Login.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Welche Belohnungsschwelle funktioniert am besten?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Eine, die der Kunde innerhalb weniger Wochen bis maximal zwei bis drei Monaten
                erreicht, abgestimmt auf die natürliche Besuchsfrequenz Ihrer Branche. Eine zu weit
                entfernte Belohnung verliert ihre motivierende Wirkung.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Dürfen die über das Treueprogramm gesammelten Daten für SMS-Marketing genutzt werden?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ja, sofern beim Sammeln der Telefonnummer eine DSGVO-konforme Marketingeinwilligung
                eingeholt wurde. Nach deren Erteilung darf die Nummer für den Versand von
                Gutscheinen und Programmerinnerungen genutzt werden.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Funktioniert ein Treueprogramm auch für Salons und Praxen, nicht nur für die Gastronomie?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ja. Es funktioniert überall dort, wo Kunden zyklisch wiederkommen — Friseursalons,
                Barbershops, Kosmetikstudios, Fitnessstudios oder Autowerkstätten. Entscheidend ist,
                die Belohnungsschwelle an den tatsächlichen Besuchsrhythmus der jeweiligen Branche
                anzupassen.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Worin unterscheidet sich eine NFC-Treuekarte von einem QR-Code?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ein QR-Code erfordert das Öffnen der Kamera, ausreichende Beleuchtung und das
                Anvisieren mit dem Telefon, was an der Kasse unpraktisch sein kann. Eine NFC-Theke
                muss nur angetippt werden — der Vorgang dauert einen Bruchteil einer Sekunde und
                hängt nicht von der Scanqualität ab.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
