import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function WizytowkaGoogleMojaFirmaDe() {
  return (
    <>
      {/* ── LEAD + INHALTSVERZEICHNIS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Dein Google Business Profil ist heute wichtiger als deine eigene Website. Wenn jemand
          auf dem Handy „Restaurant in der Nähe" oder „Friseur Berlin" eingibt, entscheidet der
          Algorithmus in Bruchteilen einer Sekunde, welche Profile oben auf der Karte erscheinen.
          Nicht das Design deiner Website zählt. Es zählt, wie vollständig du dein Profil ausgefüllt
          hast — und wie aktiv du es pflegst. Dieser Artikel führt dich durch den gesamten Prozess,
          von null bis zu einem vollständig optimierten Eintrag.
        </p>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Inhaltsverzeichnis:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#was-ist-es" className="text-blue-600 hover:underline">
                1. Was ist Google Business Profile und warum ist es wichtig?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#profil-vs-website" className="text-blue-600 hover:underline">
                    1.1. Wie unterscheidet sich ein Unternehmensprofil von einer Website?
                  </a>
                </li>
                <li>
                  <a href="#maps-einfluss" className="text-blue-600 hover:underline">
                    1.2. Wie wirkt sich dein Eintrag auf die Google Maps-Ergebnisse aus?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#wie-anlegen" className="text-blue-600 hover:underline">
                2. Wie legst du ein Google-Profil an und verifizierst es?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#registrierung" className="text-blue-600 hover:underline">
                    2.1. Einen neuen Eintrag anlegen — Schritt für Schritt
                  </a>
                </li>
                <li>
                  <a href="#verifizierung" className="text-blue-600 hover:underline">
                    2.2. Adressverifizierung — was dich erwartet
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#wie-ausfuellen" className="text-blue-600 hover:underline">
                3. Wie füllst du dein Google Business Profil Schritt für Schritt aus?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#name-kategorie-beschreibung" className="text-blue-600 hover:underline">
                    3.1. Name, Kategorie und Beschreibung — was hat den größten SEO-Einfluss?
                  </a>
                </li>
                <li>
                  <a href="#zeiten-fotos-attribute" className="text-blue-600 hover:underline">
                    3.2. Öffnungszeiten, Fotos und Attribute
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#ranking-signale" className="text-blue-600 hover:underline">
                4. Was beeinflusst deine Position in Google Maps?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#drei-signale" className="text-blue-600 hover:underline">
                    4.1. Die drei wichtigsten Google-Rankingsignale
                  </a>
                </li>
                <li>
                  <a href="#profil-aktivitaet" className="text-blue-600 hover:underline">
                    4.2. Wie aktualisierst du dein Profil regelmäßig?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#beitraege-updates" className="text-blue-600 hover:underline">
                5. Beiträge und Updates — wie hältst du deinen Eintrag aktiv?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#beitragsfrequenz" className="text-blue-600 hover:underline">
                    5.1. Wie oft solltest du Beiträge bei Google Business Profile veröffentlichen?
                  </a>
                </li>
                <li>
                  <a href="#beitragsinhalt" className="text-blue-600 hover:underline">
                    5.2. Welche Inhalte sprechen lokale Kunden am besten an?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zusammenfassung" className="text-blue-600 hover:underline">
                6. Zusammenfassung — ein Eintrag, der wirklich arbeitet
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
        <h2
          id="was-ist-es"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Was ist Google Business Profile und warum ist es wichtig?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile (früher Google My Business) ist ein kostenloses Dashboard, in dem
          du festlegst, wie dein Unternehmen in der Google-Suche und auf Google Maps erscheint. Wenn
          ein Kunde in der Nähe nach einem Produkt oder einer Dienstleistung sucht, liefert dein
          Eintrag sofort Name, Adresse, Öffnungszeiten, Fotos und Bewertungen — noch bevor der
          Kunde deine Website besucht. Für die meisten lokalen Unternehmen ist dieses Dashboard der
          erste und oft einzige Kontaktpunkt mit einem neuen Kunden.
        </p>

        <h3
          id="profil-vs-website"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie unterscheidet sich ein Unternehmensprofil von einer Website?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eine Website verlangt vom Kunden, auf einen Link zu klicken, eine Seite zu laden und
          selbstständig Öffnungszeiten oder eine Adresse zu finden. Ein Google Business Profil
          liefert diese Informationen sofort — direkt in der Suchergebniskarte, ohne zusätzliche
          Klicks. Darüber hinaus wird das Google-Profil separat indexiert und kann bei lokalen
          Suchanfragen höher ranken als deine eigene Website. Ein Restaurant mit einem
          gut gepflegten Eintrag erscheint bei „Pizza in der Nähe" schneller als durch die
          Optimierung der eigenen Website.
        </p>

        <h3
          id="maps-einfluss"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie wirkt sich dein Eintrag auf die Google Maps-Ergebnisse aus?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Maps und lokale Ergebnisse basieren auf dem sogenannten Local Pack — einer Gruppe
          von drei Unternehmen, die der Algorithmus für eine bestimmte Suchanfrage als am
          relevantesten erachtet. Wer in dieses Paket kommt, erhält den Löwenanteil der Klicks.
          Der Algorithmus berücksichtigt drei Faktoren: Relevanz (passt das Profil zur Suchanfrage),
          Entfernung (ist das Unternehmen in der Nähe des Suchenden) und Bekanntheit (ist das Profil
          vollständig, aktiv und gut bewertet). Zwei dieser drei Faktoren kannst du direkt über
          dein Dashboard steuern.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/local-pack.webp"
          alt="Smartphone-Bildschirm mit Google Maps-Ergebnissen, die drei Unternehmen im Local Pack mit Sternebewertungen und Adressen zeigen"
        />
      </div>

      {/* ── ABSCHNITT 2 ── */}
      <div className={P}>
        <h2
          id="wie-anlegen"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Wie legst du ein Google-Profil an und verifizierst es?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wenn dein Unternehmen noch kein Profil hat, gehst du zunächst auf{" "}
          <a
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            business.google.com
          </a>{" "}
          und meldest dich mit einem Google-Konto an. Ein Google-Konto kann mehrere Standorte
          verwalten, du brauchst also keine separaten Konten für jede Filiale. Die Registrierung
          dauert etwa fünfzehn Minuten. Die Verifizierung kann länger dauern — Google muss
          bestätigen, dass das Unternehmen tatsächlich an der angegebenen Adresse tätig ist.
        </p>

        <h3
          id="registrierung"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Einen neuen Eintrag anlegen — Schritt für Schritt
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bei der Registrierung fragt Google nach mehreren wichtigen Angaben. Trage sie genau ein —
          jedes Feld kann später bearbeitet werden, aber konsistente Daten von Anfang an verkürzen
          die Verifizierungszeit und stärken das Vertrauen des Algorithmus.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Geh auf <strong>business.google.com</strong> und klicke auf „Jetzt verwalten".</li>
          <li>Gib den Unternehmensnamen ein — genau so, wie er auf deinem Schild und auf Quittungen steht.</li>
          <li>Wähle deine <strong>Hauptkategorie</strong> (z. B. „Restaurant", „Friseursalon").</li>
          <li>Füge deine Adresse hinzu oder gib an, dass du Kunden vor Ort bedienst.</li>
          <li>Füge eine Telefonnummer und deine Website-Adresse hinzu.</li>
          <li>Wähle eine Verifizierungsmethode und schließe den Vorgang ab.</li>
        </ol>

        <h3
          id="verifizierung"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Adressverifizierung — was dich erwartet
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Am häufigsten schickt Google eine Postkarte mit einem PIN-Code an deine physische Adresse.
          Die Wartezeit beträgt in der Regel 5–14 Tage. Einige Branchen und Konten können die
          schnellere Verifizierung per SMS, per Videoaufnahme oder durch die Sofortverifizierung
          über die Suche nutzen — wenn diese Option in der Liste erscheint, nutze sie zuerst. Bis
          die Verifizierung abgeschlossen ist, existiert das Profil, wird aber nicht öffentlich
          in den Suchergebnissen angezeigt.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/panel.webp"
          alt="Google Business Profile-Verwaltungspanel auf einem Laptop mit ausgefüllten Unternehmensprofilabschnitten"
        />
      </div>

      {/* ── ÜBERGANG 2→3 ── */}
      <SectionDivider quote="Dein Google-Profil ist ein digitales Schaufenster — je mehr Informationen du angibst, desto leichter fällt Kunden die Entscheidung." />

      {/* ── ABSCHNITT 3 ── */}
      <div className={P}>
        <h2
          id="wie-ausfuellen"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Wie füllst du dein Google Business Profil Schritt für Schritt aus?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die Vollständigkeit des Profils ist eines der wichtigsten Signale für den lokalen
          SEO-Algorithmus. Google selbst gibt an, dass Unternehmen mit vollständigen Angaben
          „1,7-mal eher als vertrauenswürdig eingestuft werden". In der Praxis bedeutet das: kein
          Abschnitt sollte leer bleiben — denn jedes leere Feld ist eine Chance für einen
          Wettbewerber, der sich die Zeit genommen hat, sein Profil auszufüllen.
        </p>

        <h3
          id="name-kategorie-beschreibung"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Name, Kategorie und Beschreibung — was hat den größten SEO-Einfluss?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Der <strong>Unternehmensname</strong> sollte dem Namen entsprechen, den du tatsächlich
          verwendest. Füge keine Keywords wie „Restaurant Maria — Pizza Berlin Mitte" hinzu —
          Google wertet das als Spam und kann das Profil sperren. Wenn dein Unternehmen
          „Restaurant Maria" heißt, trägst du genau das in das Namensfeld ein.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Die <strong>Hauptkategorie</strong> ist das stärkste Rankingsignal unter allen
          Profilfeldern. Wähle sie präzise. Wenn du eine Pizzeria betreibst, wähle „Pizzeria",
          nicht das allgemeine „Restaurant". Du kannst bis zu zehn zusätzliche Kategorien
          hinzufügen — z. B. „Italienisches Restaurant", „Bar", „Essenslieferung" — aber tue
          das nie blindlings. Jede Kategorie bestimmt, für welche Suchanfragen du erscheinen
          kannst.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Die <strong>Unternehmensbeschreibung</strong> hat ein Limit von 750 Zeichen. Die ersten
          250 Zeichen sind ohne Aufklappen sichtbar, also platziere dort deine wichtigsten
          Informationen: was du anbietest, für wen, wo und was dich auszeichnet. Binde Keywords
          natürlich ein — erzwinge sie nicht, denn echte Kunden lesen die Beschreibung ebenfalls.
        </p>

        <h3
          id="zeiten-fotos-attribute"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Öffnungszeiten, Fotos und Attribute
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Öffnungszeiten</strong> müssen aktuell sein. Das ist eine Kleinigkeit, die viele
          Unternehmen vernachlässigen — und ein Kunde, der vor einem geschlossenen Lokal steht,
          hinterlässt einen Ein-Stern-Kommentar. Vergiss nicht, Sonderöffnungszeiten für Feiertage
          und freie Tage einzutragen.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Fotos</strong> haben einen echten Einfluss auf Klicks. Profile mit mindestens
          zehn Fotos generieren dreimal mehr Anfragen nach einer Wegbeschreibung. Füge hinzu:
          ein Hauptfoto (Außenansicht oder Logo), Innenaufnahmen, Produkte oder Dienstleistungen,
          Mitarbeiter bei der Arbeit. Aktualisiere sie mindestens einmal pro Quartal — neue Fotos
          sind ein Aktivitätssignal.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Attribute</strong> sind Details, nach denen Kunden in der Suche filtern:
          Barrierefreiheit, Zahlungsoptionen, WLAN, Außenbereich, Parkplatz, vegetarische Optionen.
          Jedes angekreuzte Attribut erhöht die Chance, bei gefilterten Suchanfragen zu erscheinen.
          Geh die vollständige Liste für deine Kategorie durch und kreuze alles an, was du
          tatsächlich anbietest.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/zdjecia.webp"
          alt="Fotogalerie im Google-Eintrag eines Restaurants mit Innenaufnahmen, Gerichten und lächelndem Personal"
        />
      </div>

      {/* ── NEWSLETTER-BANNER — volle Breite ── */}
      <NewsletterBlogBanner locale="de" />

      {/* ── ABSCHNITT 4 ── */}
      <div className={P}>
        <h2
          id="ranking-signale"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Was beeinflusst deine Position in Google Maps?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Deine Position in Google Maps ist nicht zufällig. Der lokale Algorithmus berechnet sie
          anhand von Dutzenden von Signalen, aber drei Gruppen sind am wichtigsten. Wenn du ihre
          Hierarchie verstehst, kannst du deine Energie auf Maßnahmen konzentrieren, die wirklich
          Ergebnisse bringen, anstatt Zeit mit kosmetischen Änderungen zu verschwenden.
        </p>

        <h3
          id="drei-signale"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Die drei wichtigsten Google-Rankingsignale
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>1. Relevanz</strong> — wie gut das Profil die Suchanfrage des Kunden beantwortet.
          Hier zählen: Vollständigkeit des Profils, Kategorienauswahl, Keywords in der Beschreibung
          und Antworten im Q&A-Bereich. Unternehmen, die in ihren Beiträgen und Beschreibungen
          natürlich die Sprache ihrer Kunden verwenden, gewinnen dieses Signal konsequent.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>2. Entfernung</strong> — wie weit das Unternehmen vom Nutzer oder von dem in der
          Suchanfrage genannten Ort entfernt ist. Diesen Faktor kannst du nicht direkt beeinflussen,
          aber du kannst dein Einzugsgebiet präzise definieren, wenn du ein mobiles Unternehmen
          betreibst oder in mehreren Stadtteilen tätig bist.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>3. Bekanntheit</strong> (engl. prominence) — wie bekannt das Unternehmen im
          Internet ist. Dieses Signal wird gebildet durch: Anzahl und Qualität der
          Google-Bewertungen, Links zu deiner Website von externen Quellen, Profilaktivität und
          Erwähnungen in lokalen Verzeichnissen (z. B. Tripadvisor, Yelp). Google-Bewertungen
          sind hier der wichtigste direkte Faktor — mehr zum Thema Bewertungen sammeln findest du
          in unserem Artikel darüber,{" "}
          <Link href="/blog/schnell-google-bewertungen-bekommen" className="text-blue-600 hover:underline">
            wie du schnell Google-Bewertungen sammelst
          </Link>
          .
        </p>

        <h3
          id="profil-aktivitaet"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie aktualisierst du dein Profil regelmäßig?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Google belohnt aktive Profile. Regelmäßige Updates signalisieren, dass das Unternehmen
          tätig ist und seine Online-Präsenz pflegt. In der Praxis reicht ein einfacher Rhythmus:
          ein Foto pro Woche, alle zwei Wochen ein Beitrag mit einem Angebot oder einer
          Information, einmal im Monat eine Überprüfung von Öffnungszeiten und Attributen. Es geht
          nicht um die Menge der Inhalte, sondern um ihre Regelmäßigkeit — ein Profil, das drei
          Monate schweigt, verliert Positionen an einen Wettbewerber, der bescheiden, aber
          konsequent veröffentlicht.
        </p>
      </div>

      {/* ── ÜBERGANG 4→5 ── */}
      <SectionDivider quote="Googles Algorithmus belohnt Aktivität — ein Eintrag, den du pflegst, arbeitet rund um die Uhr für dich." />

      {/* ── ABSCHNITT 5 ── */}
      <div className={P}>
        <h2
          id="beitraege-updates"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Beiträge und Updates — wie hältst du deinen Eintrag aktiv?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Beiträge bei Google Business Profile sind kurze Updates, die direkt im
          Unternehmens-Knowledge-Panel erscheinen — direkt unter dem Foto und der Bewertung. Du
          kannst dort Neuigkeiten, Angebote, Veranstaltungen und Produkte teilen. Die meisten
          lokalen Unternehmer nutzen diese Funktion überhaupt nicht, was sie zu einem einfachen
          Vorteil gegenüber Mitbewerbern macht. Ein Beitrag läuft nach sieben Tagen ab (Angebote
          haben eine eigene Laufzeit), daher ist regelmäßiges Posten keine Option — es ist
          notwendig, wenn du dieses Element sichtbar halten willst.
        </p>

        <h3
          id="beitragsfrequenz"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Wie oft solltest du Beiträge bei Google Business Profile veröffentlichen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Das Optimum für die meisten lokalen Unternehmen ist ein Beitrag pro Woche. Das reicht,
          um den Beitragsbereich immer mit aktuellen Inhalten gefüllt zu halten. Wenn du ein
          Gastronomiebetrieb führst, veröffentliche das Tagesmenü oder Wochenend-Specials —
          Kunden suchen genau nach solchen Informationen kurz bevor sie entscheiden, wo sie essen.
          Ein Friseursalon kann freie Termine oder aktuelle Aktionen posten. Eine Klinik kann
          Gesundheitstipps oder Informationen zu neuen Behandlungen teilen. Die Inhalte sollten
          nützlich sein, nicht rein werblich.
        </p>

        <h3
          id="beitragsinhalt"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Welche Inhalte sprechen lokale Kunden am besten an?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Am besten performen Beiträge, die eine konkrete Frage oder ein aktuelles Bedürfnis
          beantworten. Einige im lokalen Marketing bewährte Formate:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Zeitlich begrenztes Angebot</strong> — „20 % Rabatt auf Behandlungen bis Freitag" mit einem „Jetzt buchen"-Button.</li>
          <li><strong>Neuheit im Angebot</strong> — ein neues Gericht, eine neue Behandlung oder ein neues Produkt mit Foto.</li>
          <li><strong>Praktische Information</strong> — geänderte Öffnungszeiten, Betriebspause, Parkinformation.</li>
          <li><strong>Blick hinter die Kulissen</strong> — Jubiläum, Branchenauszeichnung, neues Teammitglied.</li>
          <li><strong>Frage an die Kunden</strong> — „Welche Variante bevorzugst du?" — erhöht das Engagement.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Füge jedem Beitrag ein Foto hinzu — Beiträge mit Bildern erzielen ein Vielfaches mehr
          Aufrufe als reine Texte. Nutze Call-to-Action-Buttons: „Anrufen", „Buchen",
          „Mehr erfahren", „Online bestellen". Jeder Klick auf einen Button ist ein
          Engagement-Signal, das die Position des Profils beeinflusst.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/posty.webp"
          alt="Smartphone-Bildschirm mit einem aktuellen Beitrag im Google Business Profile eines Restaurants mit einer Wochenaktion"
        />
      </div>

      {/* ── ZUSAMMENFASSUNG ── */}
      <div className={P}>
        <section
          id="zusammenfassung"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Zusammenfassung — ein Eintrag, der wirklich arbeitet
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ein gut optimiertes Google Business Profil ist kein einmaliges Projekt — es ist ein
            fortlaufender Prozess. Du richtest es einmal ein, aber du optimierst es kontinuierlich:
            füllst Attribute aus, fügst Fotos hinzu, veröffentlichst Beiträge, beantwortest
            Bewertungen und Fragen. Unternehmen, die ihr Profil als lebendigen Kommunikationskanal
            behandeln, schlagen Mitbewerber in den lokalen Ergebnissen konsequent. Google-Bewertungen
            zu sammeln ist ein untrennbarer Teil dieser Arbeit — je mehr aktuelle Rezensionen du
            hast, desto stärker das Bekanntheitssignal für den Algorithmus. Wenn du das
            automatisieren möchtest, schau dir an, wie der{" "}
            <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Starlinkee NFC-Ständer
            </Link>
            {" "}funktioniert — der Kunde tippt sein Handy an und landet direkt auf dem
            Bewertungsformular, ohne suchen zu müssen.
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
                Ist Google Business Profile kostenlos?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ja, das Anlegen und Verwalten eines Google Business Profils ist vollständig
                kostenlos. Google erhebt keine Gebühren für die Anzeige deines Unternehmens in
                lokalen Ergebnissen oder für die Nutzung von Beiträgen, Fotos und
                Bewertungsantworten.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wie lange dauert die Verifizierung des Google-Eintrags?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Die Verifizierung per Postkarte dauert in der Regel 5–14 Werktage. Wenn die
                SMS-Verifizierung oder Sofortverifizierung verfügbar ist, kannst du das Profil
                innerhalb weniger Minuten aktivieren. Nach Abschluss der Verifizierung erscheint
                das Profil öffentlich in den Suchergebnissen.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wie oft sollte ich mein Google Business Profil aktualisieren?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Minimum ist ein Beitrag pro Woche und eine monatliche Überprüfung der
                Öffnungszeiten. Fotos sollten mindestens einmal pro Quartal ergänzt werden.
                Nach jeder Änderung im Angebot oder den Öffnungszeiten aktualisiere das Profil
                sofort — veraltete Informationen schrecken Kunden ab und führen zu negativen
                Bewertungen.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Kann ich Keywords in den Unternehmensnamen bei Google eintragen?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Nein. Google verlangt, dass der Name im Eintrag mit dem tatsächlichen
                Unternehmensnamen übereinstimmt. Das Hinzufügen von Keywords zum Namen (z. B.
                „Friseur Jana — Friseursalon Berlin") verstößt gegen die Richtlinien und kann zu
                einem gesperrten Profil oder einer Rankingstrafe führen.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Lohnt es sich, auf alle Bewertungen zu antworten — auch auf positive?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Ja. Das Antworten auf Bewertungen (sowohl positive als auch negative) ist ein
                Engagement-Signal, das Google bei der Bewertung der Profilaktivität berücksichtigt.
                Eine kurze, personalisierte Antwort auf eine positive Rezension stärkt auch die
                Kundenbindung und ermutigt andere, ihre eigene Meinung zu hinterlassen.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
