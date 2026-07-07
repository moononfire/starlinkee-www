import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function JakOdpowiadacNaOpinieDe() {
  return (
    <>
      {/* ── EINLEITUNG + INHALTSVERZEICHNIS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Jede Google-Bewertung ist ein öffentliches Gespräch — gelesen nicht nur von Ihnen und dem
          Verfasser, sondern von Hunderten potenzieller Kunden, die noch überlegen, ob sie Ihnen
          vertrauen sollen. Wie Sie auf Lob, Kritik und Bewertungen reagieren, die unfair oder
          schlicht gefälscht wirken, entscheidet darüber, ob Ihr Profil Vertrauen aufbaut oder
          zerstört. Dieser Artikel zeigt Ihnen, wie Sie auf jede Art von Bewertung reagieren, wann
          Google eine Bewertung tatsächlich entfernt und wie Sie die Zahl unfairer Bewertungen
          legal reduzieren, bevor sie überhaupt im Netz landen.
        </p>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Inhaltsverzeichnis:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#warum-wichtig" className="text-blue-600 hover:underline">
                1. Warum das Beantworten von Bewertungen für SEO und Kunden zählt
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#einfluss-algorithmus" className="text-blue-600 hover:underline">
                    1.1. Wie wirken sich Antworten auf den Google-Algorithmus aus?
                  </a>
                </li>
                <li>
                  <a href="#was-andere-sehen" className="text-blue-600 hover:underline">
                    1.2. Was sehen andere Kunden, wenn sie Ihre Antworten lesen?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#positive-bewertungen" className="text-blue-600 hover:underline">
                2. Wie man auf positive Bewertungen antwortet
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#antwortstruktur" className="text-blue-600 hover:underline">
                    2.1. Der Aufbau einer guten Antwort
                  </a>
                </li>
                <li>
                  <a href="#beispiele-positiv" className="text-blue-600 hover:underline">
                    2.2. Beispiele für Antworten auf positive Bewertungen
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#negative-bewertungen" className="text-blue-600 hover:underline">
                3. Wie man auf negative Bewertungen antwortet
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#regeln-negativ" className="text-blue-600 hover:underline">
                    3.1. Regeln, die Sie niemals brechen dürfen
                  </a>
                </li>
                <li>
                  <a href="#beispiele-negativ" className="text-blue-600 hover:underline">
                    3.2. Beispiele für Antworten auf schwierige Bewertungen
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#gefaelschte-bewertungen" className="text-blue-600 hover:underline">
                4. Was tun bei einer gefälschten oder unberechtigten Bewertung?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wann-google-entfernt" className="text-blue-600 hover:underline">
                    4.1. Wann entfernt Google eine Bewertung — und wann nicht?
                  </a>
                </li>
                <li>
                  <a href="#wie-melden" className="text-blue-600 hover:underline">
                    4.2. So melden Sie eine Bewertung Schritt für Schritt
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#vorbeugen" className="text-blue-600 hover:underline">
                5. Wie man unfairen Bewertungen vorbeugt, bevor sie entstehen
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#review-gating" className="text-blue-600 hover:underline">
                    5.1. Was ist Review-Gating und warum ist es verboten?
                  </a>
                </li>
                <li>
                  <a href="#legaler-filter" className="text-blue-600 hover:underline">
                    5.2. Ein legaler Bewertungsfilter — wie funktioniert das in der Praxis?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zusammenfassung" className="text-blue-600 hover:underline">
                6. Zusammenfassung — Antworten, die Vertrauen aufbauen
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
        <h2 id="warum-wichtig" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Warum das Beantworten von Bewertungen für SEO und Kunden zählt
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Viele Unternehmer behandeln den Bewertungsbereich wie ein Schwarzes Brett, auf das sie
          nur schauen, wenn etwas Beunruhigendes auftaucht. Dabei sind Antworten unter Bewertungen
          eines der wenigen Profilelemente, die gleichzeitig das lokale Ranking und die
          Kaufentscheidung des Kunden beeinflussen, der Ihr Profil gerade in diesem Moment liest.
          Wer diesen Bereich vernachlässigt, verliert doppelt — SEO und Conversion.
        </p>

        <h3 id="einfluss-algorithmus" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Wie wirken sich Antworten auf den Google-Algorithmus aus?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google nennt das Beantworten von Bewertungen ausdrücklich als Element, das das
          Prominence-Signal eines Profils stärkt. Aktivität in diesem Bereich zeigt dem Algorithmus,
          dass das Konto von einem echten Unternehmen betreut wird, das sich mit seinen Kunden
          auseinandersetzt — und kein verwaistes, unbetreutes Profil ist. Je mehr Antworten
          natürliche, thematisch passende Begriffe zu Ihrer Branche und Ihrem Standort enthalten,
          desto stärker das Relevanzsignal für lokale Suchanfragen. Das ist nur eines von mehreren
          Elementen, die gemeinsam das Ranking eines Profils bilden — die vollständige Liste der
          Rankingfaktoren finden Sie in unserem Artikel darüber,{" "}
          <Link href="/blog/google-unternehmensprofil-optimieren" className="text-blue-600 hover:underline">
            wie Sie Ihr Google Business Profile optimieren
          </Link>
          .
        </p>

        <h3 id="was-andere-sehen" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Was sehen andere Kunden, wenn sie Ihre Antworten lesen?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Bevor ein Kunde anruft oder bucht, liest er ein paar der letzten Bewertungen — und Ihre
          Antworten darunter. Eine ruhige, sachliche Reaktion auf eine schwierige Bewertung schafft
          mehr Vertrauen als fünf Sterne allein, weil sie zeigt, wie sich das Unternehmen in einer
          Krisensituation verhält. Keine Reaktion auf eine negative Bewertung wird als
          Desinteresse am Kunden gelesen — selbst wenn die Bewertung selbst nicht ganz fair war.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-hero.jpg"
          alt="Geschäftsinhaber liest und beantwortet Kundenbewertungen im Google Business Profile-Dashboard auf einem Laptop"
        />
      </div>

      {/* ── ABSCHNITT 2 ── */}
      <div className={P}>
        <h2 id="positive-bewertungen" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Wie man auf positive Bewertungen antwortet
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Positive Bewertungen verleiten dazu, mit einem einzigen Satz zu antworten — „Danke!” —
          und weiterzumachen. Das ist ein Fehler. Eine kurze, aber persönliche Antwort kostet eine
          Minute, stärkt Ihre Unternehmensbeschreibung ganz natürlich um weitere Schlüsselwörter und
          zeigt, dass jede Stimme zählt, nicht nur die kritischen.
        </p>

        <h3 id="antwortstruktur" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Der Aufbau einer guten Antwort
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eine gute Antwort auf eine positive Bewertung besteht aus vier Elementen: Dank mit
          Namensnennung (falls sichtbar), Bezug auf ein konkretes Detail aus der Bewertung, eine
          kurze Bekräftigung dessen, was das Unternehmen bietet, und eine Einladung zur Rückkehr.
          Das Ganze passt in zwei bis drei Sätze.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Danken Sie mit Namen, wenn das Kundenprofil einen zeigt.</li>
          <li>Nehmen Sie Bezug auf ein Detail aus der Bewertung — Gericht, Behandlung, Service.</li>
          <li>Flechten Sie den Namen der Dienstleistung oder des Standorts natürlich ein, nicht erzwungen.</li>
          <li>Laden Sie zu einem erneuten Besuch oder einer Weiterempfehlung ein.</li>
        </ol>

        <h3 id="beispiele-positiv" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Beispiele für Antworten auf positive Bewertungen
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Restaurant:</strong> „Vielen Dank, Anna! Wir freuen uns sehr, dass Ihnen unser
          Steinpilz-Risotto geschmeckt hat — eines der Lieblingsgerichte unserer Stammgäste. Kommen
          Sie gerne wieder, vielleicht diesmal zu unserem Wochenend-Brunch!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Friseursalon:</strong> „Vielen Dank für Ihre Bewertung! Schön, dass die neue
          Coloration Ihren Erwartungen entsprochen hat. Bis in 6–8 Wochen zur Auffrischung!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Zahnarztpraxis:</strong> „Vielen Dank für Ihr Vertrauen und die netten Worte.
          Der Komfort unserer Patienten während der Behandlung hat für uns Priorität — schön zu
          hören, dass wir das erreicht haben. Bis zur nächsten Kontrolle!”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-pozytywne.jpg"
          alt="Smartphone-Bildschirm mit einer Fünf-Sterne-Bewertung eines Kunden und einer professionellen Antwort des Unternehmens darunter"
        />
      </div>

      {/* ── ÜBERGANG 2→3 ── */}
      <SectionDivider quote="Jede Antwort unter einer Bewertung ist nicht nur an einen Kunden gerichtet, sondern an alle, die sie noch lesen werden." />

      {/* ── ABSCHNITT 3 ── */}
      <div className={P}>
        <h2 id="negative-bewertungen" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Wie man auf negative Bewertungen antwortet
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eine negative Bewertung tut weh — besonders wenn sie übertrieben wirkt. Wie Sie reagieren,
          entscheidet jedoch darüber, ob der Vorfall nach einer Woche vergessen ist oder zum Beweis
          in den Augen jedes zukünftigen Lesers Ihres Profils wird. Ein kühler Kopf und ein
          konkreter Handlungsplan zählen mehr als Emotionen.
        </p>

        <h3 id="regeln-negativ" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Regeln, die Sie niemals brechen dürfen
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Antworten Sie nicht sofort emotional</strong> — warten Sie ein paar Stunden und lesen Sie die Bewertung mit klarem Kopf erneut.</li>
          <li><strong>Streiten Sie nicht öffentlich</strong> — verlagern Sie die Details des Konflikts in eine private Nachricht, E-Mail oder ein Telefonat.</li>
          <li><strong>Ignorieren Sie Bewertungen nicht</strong> — Schweigen wird als Desinteresse am Problem des Kunden gedeutet.</li>
          <li><strong>Kopieren Sie nicht dieselbe Vorlage</strong> unter jede negative Bewertung — Kunden bemerken das und verlieren das Vertrauen.</li>
          <li><strong>Geben Sie keine Schuld zu, die nicht besteht</strong> — eine sachliche Erklärung ist besser als eine leere Entschuldigung.</li>
        </ul>

        <h3 id="beispiele-negativ" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Beispiele für Antworten auf schwierige Bewertungen
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Beschwerde über Wartezeiten:</strong> „Es tut uns leid, dass die Wartezeit auf Ihr
          Gericht Ihre Erwartungen nicht erfüllt hat — an diesem Abend hatten wir außergewöhnlich
          viele Reservierungen. Gerne besprechen wir die Details unter [Telefon/E-Mail]. Uns liegt
          daran, dass Ihr nächster Besuch ganz anders verläuft.”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Eine Bewertung, die unberechtigt erscheint:</strong> „Vielen Dank für den Hinweis.
          Nach Prüfung unseres Terminplans und der Buchungshistorie für den genannten Tag und die
          Uhrzeit konnten wir keinen passenden Eintrag finden. Bitte kontaktieren Sie uns unter
          [E-Mail], damit wir die Angelegenheit klären können — uns liegt an der Genauigkeit
          unseres Profils.”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-negatywne.jpg"
          alt="Person antwortet ruhig und sachlich auf eine negative Kundenbewertung am Computerbildschirm"
        />
      </div>

      {/* ── NEWSLETTER-BANNER IN VOLLER BREITE ── */}
      <NewsletterBlogBanner />

      {/* ── ABSCHNITT 4 ── */}
      <div className={P}>
        <h2 id="gefaelschte-bewertungen" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Was tun bei einer gefälschten oder unberechtigten Bewertung?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nicht jede verletzende Bewertung qualifiziert sich für eine Entfernung. Google entfernt
          Bewertungen nur, wenn sie gegen konkrete Richtlinien verstoßen — nicht, weil sie Ihnen
          einfach nicht gefallen oder unvorteilhaft, aber wahrheitsgemäß sind. Diese beiden
          Situationen zu unterscheiden spart Zeit und Frustration.
        </p>

        <h3 id="wann-google-entfernt" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Wann entfernt Google eine Bewertung — und wann nicht?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google reagiert positiv auf eine Meldung, wenn eine Bewertung Folgendes enthält: Hassrede
          oder Beleidigungen, Inhalte ohne Bezug zu einer echten Kundenerfahrung (Spam, Werbung
          eines Konkurrenten), einen Interessenkonflikt (Bewertung eines ehemaligen Mitarbeiters
          oder Konkurrenten), personenbezogene Daten Dritter, oder wenn sie von einem Konto stammt,
          das nie Kontakt mit dem Unternehmen hatte.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google entfernt eine Bewertung hingegen nicht nur, weil sie negativ ist, weil Sie mit der
          Schilderung nicht einverstanden sind, oder weil der Kunde — Ihrer Meinung nach —
          überzogene Erwartungen hatte. Eine echte, wenn auch unvorteilhafte Kundenerfahrung bleibt
          auch nach einer Meldung auf dem Profil.
        </p>

        <h3 id="wie-melden" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          So melden Sie eine Bewertung Schritt für Schritt
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-2">
          <li>Öffnen Sie das Unternehmensprofil in Google Maps oder in der Suche.</li>
          <li>Suchen Sie die betreffende Bewertung und klicken Sie auf das Drei-Punkte-Symbol daneben.</li>
          <li>Wählen Sie „Bewertung melden” und den am besten passenden Verstoßgrund.</li>
          <li>Beschreiben Sie kurz und sachlich, warum die Bewertung gegen die Richtlinien verstößt — ohne Emotionen, nur mit Fakten.</li>
          <li>Kommt nach einigen Tagen keine Antwort, eskalieren Sie über den Google Business Profile-Support oder das Google-Hilfeformular.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-8">
          Die Bearbeitungszeit variiert — von wenigen Tagen bis zu mehreren Wochen. Haben Sie
          Geduld und löschen Sie in der Zwischenzeit nicht Ihre eigene Antwort unter der Bewertung —
          selbst wenn diese am Ende entfernt wird, bleibt Ihre sachliche Reaktion für jeden
          sichtbar, der sie vorher gelesen hat.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-zgloszenie.jpg"
          alt="Formular zum Melden einer Bewertung im Google Business Profile-Dashboard mit einer Liste von Verstoßgründen"
        />
      </div>

      {/* ── ÜBERGANG 4→5 ── */}
      <SectionDivider quote="Die beste Antwort auf eine unfaire Bewertung ist ein System, das dafür sorgt, dass sie selten überhaupt entsteht." />

      {/* ── ABSCHNITT 5 ── */}
      <div className={P}>
        <h2 id="vorbeugen" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Wie man unfairen Bewertungen vorbeugt, bevor sie entstehen
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Das Beantworten schwieriger Bewertungen ist wichtig, aber noch wirkungsvoller ist es,
          ihre Anzahl direkt an der Quelle zu reduzieren. Es geht darum, dass ein kleiner Vorfall —
          eine kalte Suppe, fünf Minuten Verspätung — nicht sofort mit einem Stern bei Google endet,
          sondern zuerst Sie erreicht, bevor er überhaupt im Netz landet.
        </p>

        <h3 id="review-gating" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Was ist Review-Gating und warum ist es verboten?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Review-Gating bedeutet, einen Kunden zu fragen „Sind Sie zufrieden?” und nur diejenigen,
          die mit „Ja” antworten, zu Google weiterzuleiten — unzufriedene Kunden erhalten den
          Bewertungslink schlicht nie. Google verbietet diese Praxis ausdrücklich in seinen
          Richtlinien, weil sie die Bewertung eines Profils künstlich aufbläht und andere Nutzer
          in die Irre führt. Wird ein solcher Mechanismus entdeckt, drohen eine Abwertung, ein
          schlechteres Ranking oder die Sperrung des Profils.
        </p>

        <h3 id="legaler-filter" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Ein legaler Bewertungsfilter — wie funktioniert das in der Praxis?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Der Unterschied zwischen verbotenem Review-Gating und legitimem Profilschutz ist subtil,
          aber entscheidend: Ein legales System versperrt niemandem den Weg zu Google — jeder
          Kunde, ob zufrieden oder nicht, hat Zugang zum öffentlichen Bewertungsformular. Was sich
          ändert, ist nur die Reihenfolge der Schritte: Ein unzufriedener Kunde erhält zusätzlich
          die Möglichkeit, das Problem direkt dem Unternehmen zu melden, bevor (oder parallel dazu)
          er entscheidet, ob er auch eine öffentliche Bewertung schreiben möchte.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Genau so funktioniert der Bewertungsfilter, der im{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            Starlinkee-NFC-Aufsteller
          </Link>{" "}
          integriert ist. Der Kunde tippt mit seinem Handy an und bewertet zunächst die Erfahrung
          mit einem einzigen Tap. Ein zufriedener Kunde gelangt direkt zum Google-Bewertungsformular.
          Ein unzufriedener landet auf einem internen Feedback-Formular, wo er das Problem
          beschreiben kann — und Sie erhalten die Chance, sich zu melden und die Situation zu
          klären, bevor sonst jemand davon liest. Das ist kein Blockieren des Zugangs zu Google —
          es ist das Steuern des Moments, in dem der Kunde entscheidet, wohin er sein Feedback
          richtet. Mehr über den eigentlichen Prozess des Bewertungssammelns erfahren Sie im Artikel
          darüber,{" "}
          <Link href="/blog/schnell-google-bewertungen-bekommen" className="text-blue-600 hover:underline">
            wie man schnell Google-Bewertungen bekommt
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-filtr.jpg"
          alt="Schema zeigt einen Kunden, der einen NFC-Aufsteller antippt und entweder zum Google-Bewertungsformular oder zum internen Feedback-Formular geleitet wird"
        />
      </div>

      {/* ── ZUSAMMENFASSUNG ── */}
      <div className={P}>
        <section
          id="zusammenfassung"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Zusammenfassung — Antworten, die Vertrauen aufbauen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Das Beantworten von Bewertungen ist keine Verwaltungspflicht, sondern ein tägliches
            Gespräch mit dem Markt, das jeder potenzielle Kunde sieht. Danken Sie konkret für
            positive Bewertungen, reagieren Sie sachlich auf negative und melden Sie nur solche
            Bewertungen zur Entfernung, die tatsächlich gegen die Google-Richtlinien verstoßen. Die
            wirksamste Strategie bleibt jedoch, die Zahl unfairer Bewertungen an der Quelle zu
            reduzieren — bevor der Kunde überhaupt zum Handy greift, um eine Bewertung abzugeben.
            Wenn Sie sehen möchten, wie das in der Praxis aussieht, schauen Sie sich den{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              Starlinkee-NFC-Aufsteller
            </Link>{" "}
            mit integriertem, Google-konformem Bewertungsfilter an.
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
                Muss ich auf jede Bewertung bei Google antworten?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Es gibt keine formale Pflicht, aber es wird dringend empfohlen. Das Beantworten von
                Bewertungen — sowohl positive als auch negative — ist ein Aktivitätssignal, das der
                lokale SEO-Algorithmus berücksichtigt, und schafft Vertrauen bei Kunden, die Ihr
                Profil lesen.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Wie schnell sollte ich auf negative Bewertungen antworten?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Die optimale Reaktionszeit liegt bei 24–48 Stunden. Schnell genug, um Engagement zu
                zeigen, aber lang genug, um mit kühlem Kopf zu antworten, ohne Emotionen, die die
                Situation verschärfen könnten.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Entfernt Google eine negative Bewertung, wenn ich den Kunden darum bitte?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Der Kunde kann seine eigene Bewertung jederzeit selbst löschen oder bearbeiten,
                aber Google tut dies nicht automatisch auf Ihre Bitte hin, wenn der Inhalt nicht
                gegen die Richtlinien verstößt. Am wirksamsten ist es, die Angelegenheit privat zu
                klären und höflich um eine Aktualisierung zu bitten, sobald das Problem gelöst ist.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Worin unterscheidet sich ein Bewertungsfilter vom verbotenen Review-Gating?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Review-Gating blockiert unzufriedenen Kunden den Zugang zum Google-Bewertungsformular
                — ein Verstoß gegen die Richtlinien. Ein legaler Bewertungsfilter, wie er bei
                Starlinkee eingesetzt wird, gewährt jedem Kunden Zugang zu Google und bietet
                unzufriedenen Kunden lediglich zusätzlich einen separaten Kanal, um ein Problem
                direkt dem Unternehmen zu melden.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Was tun, wenn ich vermute, dass ein Konkurrent die Bewertung geschrieben hat?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Melden Sie die Bewertung über das Google-Formular und geben Sie einen
                Interessenkonflikt als Grund an. Es hilft, konkrete Belege beizufügen (z. B. kein
                Nachweis eines Besuchs in Ihrer Buchungshistorie). Antworten Sie außerdem öffentlich
                sachlich, ohne direkt zu beschuldigen — andere Leser ziehen ihre eigenen Schlüsse
                aus den Fakten.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
