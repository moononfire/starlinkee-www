import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function SmsMarketingDlaLokaluIt() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          La maggior parte dei locali ha qualcosa che nessuna pubblicità può comprare: un elenco di persone che ci sono già state e si sono trovate bene. Il problema è che questo elenco di solito esiste solo nella testa del personale. Il cliente esce soddisfatto e niente lo spinge a tornare proprio da te e non nel locale accanto. L&apos;SMS è uno dei modi più semplici per cambiare le cose: un breve messaggio che arriva in tasca proprio quando qualcuno decide dove mangiare oggi.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-sms" className="text-blue-600 hover:underline">
                1. Perché l&apos;SMS funziona ancora nella ristorazione?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-czytany" className="text-blue-600 hover:underline">
                    1.1. Perché un SMS viene letto più spesso della maggior parte delle email?
                  </a>
                </li>
                <li>
                  <a href="#sms-przeszkadza" className="text-blue-600 hover:underline">
                    1.2. Quando l&apos;SMS dà fastidio invece di aiutare?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zgoda" className="text-blue-600 hover:underline">
                2. Dove trovare i numeri di telefono in modo legale e senza trucchi?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#zbieranie-zgody" className="text-blue-600 hover:underline">
                    2.1. Come raccogliere il consenso marketing quando il cliente scansiona il supporto NFC?
                  </a>
                </li>
                <li>
                  <a href="#rodo" className="text-blue-600 hover:underline">
                    2.2. Cosa tenere a mente sul GDPR?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wysylac" className="text-blue-600 hover:underline">
                3. Cosa inviare perché i clienti vogliano tornare?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jaki-kupon" className="text-blue-600 hover:underline">
                    3.1. Quale coupon funziona in un ristorante o bar?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-wysylac" className="text-blue-600 hover:underline">
                    3.2. Quando e quanto spesso inviare i messaggi?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#oplaca-sie" className="text-blue-600 hover:underline">
                4. Come capire se gli SMS ripagano?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-mierzyc" className="text-blue-600 hover:underline">
                    4.1. Cosa vale la pena misurare e cosa si può lasciare?
                  </a>
                </li>
                <li>
                  <a href="#sms-opinie-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. Come combinare gli SMS con recensioni e tessera fedeltà?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Riepilogo — come inviare SMS che riportano i clienti?
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                6. FAQ — Domande frequenti
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
          Perché l&apos;SMS funziona ancora nella ristorazione?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La ristorazione vive di ripetizione. Un cliente che è venuto una volta ha già fatto il passo più difficile: è entrato e ha visto com&apos;è da te. Una seconda visita costa molto meno che conquistare un nuovo cliente, e con un SMS puoi semplicemente chiederla.
        </p>

        <h3
          id="sms-czytany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Perché un SMS viene letto più spesso della maggior parte delle email?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;SMS arriva su uno schermo che il cliente ha già in mano e non compete con cento altre notifiche come fa una casella email. Inoltre è breve, quindi si legge in pochi secondi. Per un locale è importante, perché la decisione su dove mangiare spesso si prende lì per lì e un messaggio con un coupon può farla pendere dalla tua parte.
        </p>

        <h3
          id="sms-przeszkadza"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quando l&apos;SMS dà fastidio invece di aiutare?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Dà fastidio quando arriva troppo spesso, non offre nulla o raggiunge chi non l&apos;ha mai chiesto. Un messaggio a settimana con una proposta concreta crea simpatia. Un «venite a trovarci» ogni giorno spinge i clienti a disiscriversi o, peggio, a evitare il tuo locale.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="Una cliente sorridente entra in un bar con il telefono in mano"
        />
      </div>

      <SectionDivider quote="Il cliente più economico è quello che è già stato da te. Basta ricordargli che vale la pena tornare." />

      <div className={P}>
        <h2
          id="zgoda"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Dove trovare i numeri di telefono in modo legale e senza trucchi?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          I numeri di telefono sono dati personali, quindi vanno raccolti in modo onesto. La buona notizia: se lo fai nel momento in cui il cliente ha comunque il telefono in mano, bastano pochi secondi e nessun trucco.
        </p>

        <h3
          id="zbieranie-zgody"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come raccogliere il consenso marketing quando il cliente scansiona il supporto NFC?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Il momento più comodo è lo stesso in cui il cliente scansiona il supporto NFC: dopo la scansione può lasciare un numero di telefono e dare il consenso ai messaggi con coupon. Non scarica nulla né crea un account, e tu hai subito un numero legato a un consenso consapevole. Puoi leggere di più su come funziona un supporto simile nella guida su come <Link href="/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">ottenere recensioni Google in modo rapido</Link>.
        </p>

        <h3
          id="rodo"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cosa tenere a mente sul GDPR?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Il consenso marketing deve essere volontario, separato e formulato in modo chiaro: il cliente deve sapere a cosa acconsente e che può disiscriversi. Non comprare elenchi già pronti e non aggiungere chi non ha chiesto nulla, perché è la via più breve verso problemi e reclami. Se hai dubbi sui dettagli, confrontati con un avvocato o un esperto di protezione dei dati.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/hero.webp"
          alt="Una barista porge un caffè a un cliente sorridente al banco"
        />
      </div>

      <NewsletterBlogBanner locale="it" />

      <div className={P}>
        <h2
          id="co-wysylac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Cosa inviare perché i clienti vogliano tornare?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;SMS è solo il canale; l&apos;effetto dipende da ciò che scrivi. Un messaggio deve essere breve, concreto e avere un valore per il cliente, altrimenti viene ignorato in fretta.
        </p>

        <h3
          id="jaki-kupon"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quale coupon funziona in un ristorante o bar?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Funzionano meglio proposte semplici e chiare: un dolce o un caffè con l&apos;ordine, uno sconto sul pranzo in un giorno più tranquillo o un piccolo gesto per i clienti abituali. Un coupon dovrebbe avere una condizione chiara e una scadenza, così il cliente sa che conviene usarlo presto.
        </p>

        <h3
          id="kiedy-wysylac"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quando e quanto spesso inviare i messaggi?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Di solito basta un messaggio a settimana, spesso anche meno. I giorni e gli orari migliori sono quelli con tavoli liberi: un coupon per un martedì pomeriggio ha senso, mentre uno per il venerdì sera, quando sei comunque pieno, è solo margine perso. Il piano Starlinkee Pro include 100 SMS di marketing al mese, che con un ritmo ragionevole bastano ampiamente a un piccolo locale.
        </p>
      </div>

      <SectionDivider quote="Un buon SMS suona come un messaggio di qualcuno che conosci, non come un annuncio da bacheca." />

      <div className={P}>
        <h2
          id="oplaca-sie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Come capire se gli SMS ripagano?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;SMS marketing non deve essere complicato, ma conviene sapere se fa ciò per cui lo hai avviato. La buona notizia: bastano due o tre numeri semplici per valutarlo.
        </p>

        <h3
          id="co-mierzyc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cosa vale la pena misurare e cosa si può lasciare?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Bastano tre cose: quante persone hanno usato il coupon, quanti clienti sono tornati dopo il messaggio e quanti si sono disiscritti. Il resto, come i tassi di apertura o i grafici elaborati, puoi tranquillamente lasciarlo, perché per un singolo locale contano poco. Guarda semplicemente se il martedì c&apos;è più gente di prima.
        </p>

        <h3
          id="sms-opinie-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come combinare gli SMS con recensioni e tessera fedeltà?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          L&apos;SMS funziona meglio come parte di un insieme: il supporto NFC raccoglie recensioni e numeri, l&apos;SMS ricorda che esisti e una tessera fedeltà digitale dà un motivo per tornare. Come costruire un sistema simile senza app lo descriviamo nell&apos;articolo sul <Link href="/blog/programma-fedelta-senza-app-come-costruire-la-fedelta-dei-clienti" className="text-blue-600 hover:underline">programma fedeltà senza app</Link>. E se vuoi saperne di più sulle recensioni nella ristorazione, leggi il testo sulle <Link href="/blog/recensioni-google-ristorante-bar-come-ottenere-piu-recensioni" className="text-blue-600 hover:underline">recensioni Google per ristoranti e bar</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — come inviare SMS che riportano i clienti?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L&apos;SMS marketing funziona nella ristorazione quando è raro, concreto e basato sul consenso. I numeri conviene raccoglierli quando il cliente scansiona il supporto NFC, insieme a un chiaro consenso marketing, e nel messaggio proporre qualcosa che abbia senso per il cliente e per il locale: un dolce, un caffè o uno sconto in un giorno più tranquillo. Per valutare bastano pochi numeri semplici, e l&apos;effetto maggiore si ottiene combinando SMS, recensioni Google e tessera fedeltà.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Domande frequenti
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quanti SMS al mese posso inviare ai clienti senza scoraggiarli?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Per la maggior parte dei locali basta un messaggio a settimana, spesso meno. Più del numero conta che ogni SMS contenga una proposta concreta e una scadenza.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Posso mandare SMS a chiunque abbia lasciato un numero di telefono?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Solo a chi ha dato il consenso marketing e può revocarlo. Un numero fornito in un&apos;altra occasione, per esempio per una prenotazione, non è automaticamente un consenso alla pubblicità.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Come raccogliere i numeri senza una domanda scomoda alla cassa?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Con un supporto NFC: il cliente lo scansiona con il telefono, lascia un numero e dà il consenso, e il personale non deve chiedere nulla.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quale coupon funziona meglio in un ristorante o bar?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Uno semplice e concreto: un dolce o un caffè con l&apos;ordine o uno sconto sul pranzo in un giorno con meno clienti. Aiuta dargli una scadenza.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Gli SMS sostituiscono la tessera fedeltà o le recensioni Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No, si completano. Le recensioni attirano nuovi clienti, la tessera fedeltà dà un motivo per tornare e l&apos;SMS ricorda il locale al momento giusto.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
