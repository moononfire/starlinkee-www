import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function ProgramLojalnosciowyBezAplikacjiIt() {
  return (
    <>
      {/* ── INTRODUZIONE + INDICE ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Acquisire un nuovo cliente costa in media cinque volte di più che mantenerne uno già
          esistente, eppure la maggior parte delle attività locali non ha alcun sistema che premi
          il ritorno del cliente. Una tessera cartacea si perde nel portafoglio, e un&rsquo;app
          mobile richiede download, creazione di un account e consenso alle notifiche — tre
          ostacoli che allontanano la maggior parte dei clienti prima ancora che arrivino al primo
          premio. Questo articolo mostra come costruire un programma fedeltà che funziona senza
          carta e senza app, rafforzando allo stesso tempo le recensioni Google e la lista contatti
          per il marketing.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#perche-fedelta" className="text-blue-600 hover:underline">
                1. Perché investire sui clienti che tornano?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#costo-perdita" className="text-blue-600 hover:underline">
                    1.1. Quanto costa davvero perdere un cliente abituale?
                  </a>
                </li>
                <li>
                  <a href="#perche-app-falliscono" className="text-blue-600 hover:underline">
                    1.2. Perché le app fedeltà di solito falliscono?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#come-funziona-carta-nfc" className="text-blue-600 hover:underline">
                2. Come funziona una tessera fedeltà digitale senza app?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#tecnologia" className="text-blue-600 hover:underline">
                    2.1. La tecnologia NFC nella pratica
                  </a>
                </li>
                <li>
                  <a href="#percorso-cliente" className="text-blue-600 hover:underline">
                    2.2. Il percorso del cliente passo dopo passo
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#come-progettare" className="text-blue-600 hover:underline">
                3. Come progettare un programma fedeltà efficace
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#soglia-premio" className="text-blue-600 hover:underline">
                    3.1. Soglia del premio e frequenza delle visite
                  </a>
                </li>
                <li>
                  <a href="#esempi-soglie" className="text-blue-600 hover:underline">
                    3.2. Esempi di soglie premio per settore
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#fedelta-e-recensioni" className="text-blue-600 hover:underline">
                4. Programma fedeltà, SMS marketing e recensioni Google
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-e-fedelta" className="text-blue-600 hover:underline">
                    4.1. Come unire la fedeltà ai coupon via SMS
                  </a>
                </li>
                <li>
                  <a href="#fedeli-e-recensioni" className="text-blue-600 hover:underline">
                    4.2. Perché i clienti fedeli lasciano più recensioni
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#implementazione" className="text-blue-600 hover:underline">
                5. Come implementare un programma fedeltà passo dopo passo
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#fasi-implementazione" className="text-blue-600 hover:underline">
                    5.1. Le fasi dell&rsquo;implementazione
                  </a>
                </li>
                <li>
                  <a href="#errori-comuni" className="text-blue-600 hover:underline">
                    5.2. Gli errori più comuni nell&rsquo;implementazione
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#riepilogo" className="text-blue-600 hover:underline">
                6. Riepilogo — fedeltà senza attrito
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                7. FAQ — Domande frequenti
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── SEZIONE 1 ── */}
      <div className={P}>
        <h2 id="perche-fedelta" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Perché investire sui clienti che tornano?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La maggior parte dei budget di marketing locale viene destinata all&rsquo;acquisizione di
          nuovi clienti — pubblicità, promozioni per la prima visita, presenza sui social. Eppure
          sono i clienti che hanno già scelto una volta il tuo ristorante o il tuo salone a generare
          la quota maggiore del fatturato e, cosa ancora più importante, a consigliarlo più
          spesso. Un programma fedeltà trasforma un ritorno occasionale in un&rsquo;abitudine
          ripetibile.
        </p>

        <h3 id="costo-perdita" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Quanto costa davvero perdere un cliente abituale?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Acquisire un nuovo cliente richiede pubblicità, tempo per costruire fiducia e spesso una
          prima visita a prezzo scontato. Un cliente abituale non genera più questi costi — eppure
          la maggior parte delle attività non fa nulla per trattenerlo consapevolmente più a lungo.
          Senza un sistema che premi i ritorni, un cliente è altrettanto disposto a scegliere la
          concorrenza non appena questa propone una promozione migliore.
        </p>

        <h3 id="perche-app-falliscono" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Perché le app fedeltà di solito falliscono?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Una classica app mobile creata per un singolo ristorante o salone ha un difetto che non
          si può aggirare: nessuno vuole scaricare un&rsquo;app separata per ogni attività che
          frequenta solo occasionalmente. Download, registrazione e consenso alle notifiche sono
          tre ostacoli su cui si arena la maggior parte dei clienti — prima ancora di vedere il
          primo vantaggio del programma. La tessera cartacea ha il problema opposto: si perde, si
          sporca e non fornisce alcun dato su chi torna davvero, né su quanto spesso.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/hero.webp"
          alt="Un barista porge una tazza di caffè a un cliente abituale sorridente al bancone — un caldo momento di fedeltà e connessione"
        />
      </div>

      {/* ── SEZIONE 2 ── */}
      <div className={P}>
        <h2 id="come-funziona-carta-nfc" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Come funziona una tessera fedeltà digitale senza app?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Una via di mezzo tra carta e app è la tessera fedeltà digitale basata sulla comunicazione
          in prossimità. Il cliente non installa nulla — tutta l&rsquo;interazione avviene nel
          browser del telefono, e le visite vengono registrate automaticamente con un solo tocco
          sul totem NFC alla cassa o alla reception.
        </p>

        <h3 id="tecnologia" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          La tecnologia NFC nella pratica
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&rsquo;NFC (Near Field Communication) è lo stesso standard contactless alla base dei
          pagamenti con carta o telefono. Un totem o un adesivo NFC non richiede alimentazione —
          basta avvicinare il telefono a pochi centimetri perché il sistema apra la pagina giusta
          nel browser. Nessuna app, nessun abbinamento Bluetooth, nessun codice QR da inquadrare con
          poca luce.
        </p>

        <h3 id="percorso-cliente" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Il percorso del cliente passo dopo passo
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Il cliente avvicina il telefono al totem NFC alla cassa, al bancone o alla reception.</li>
          <li>Il browser apre una pagina con la sua tessera digitale — senza login, in base al numero di telefono.</li>
          <li>Il sistema registra un&rsquo;altra visita e mostra quante ne mancano al premio.</li>
          <li>Al raggiungimento della soglia, il cliente riceve una notifica SMS sul premio assegnato.</li>
          <li>Alla visita successiva, lo staff consegna semplicemente il premio in base al numero nel pannello.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-6">
          Per il cliente l&rsquo;intero processo dura letteralmente un secondo — più veloce di
          quanto serva a trovare la tessera cartacea nel portafoglio. Per l&rsquo;attività, ogni
          visita finisce subito nel pannello amministrativo, dove è visibile lo storico delle
          visite, il numero di tessere attive e i progressi di ogni cliente verso il premio.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/nfc.jpg"
          alt="Primo piano di un totem NFC sul bancone di un salone di parrucchiere accanto a un telefono che mostra una tessera fedeltà digitale"
        />
      </div>

      {/* ── TRANSIZIONE 2→3 ── */}
      <SectionDivider quote="Un programma fedeltà che richiede sforzo al cliente smette di funzionare già dalla seconda visita." />

      {/* ── SEZIONE 3 ── */}
      <div className={P}>
        <h2 id="come-progettare" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Come progettare un programma fedeltà efficace
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La tecnologia da sola non basta — l&rsquo;efficacia del programma dipende da come imposti
          la soglia del premio e da quanto la adatti alla reale frequenza di visita del tuo
          settore. Una soglia troppo alta scoraggia, una troppo bassa non genera né margine reale né
          vera fedeltà.
        </p>

        <h3 id="soglia-premio" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Soglia del premio e frequenza delle visite
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Un buon punto di partenza è osservare quanto spesso un cliente medio visita un
          determinato luogo nel suo ciclo naturale. Un parrucchiere o un barbiere visitato ogni
          4–6 settimane richiede una soglia diversa rispetto a un caffè visitato ogni mattina. La
          regola è semplice: il premio deve essere raggiungibile in un tempo ragionevole — da poche
          settimane fino a un massimo di due o tre mesi — altrimenti il cliente dimentica il
          programma prima ancora di raggiungere l&rsquo;obiettivo.
        </p>

        <h3 id="esempi-soglie" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Esempi di soglie premio per settore
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Caffè:</strong> ogni 8° caffè gratis — raggiunto in circa due settimane con visite quotidiane.</li>
          <li><strong>Ristorante:</strong> dopo 5 visite un dessert o un antipasto in omaggio.</li>
          <li><strong>Parrucchiere / barbershop:</strong> ogni 6° taglio con il 50% di sconto — allineato al ciclo naturale delle visite.</li>
          <li><strong>Centro estetico:</strong> dopo 4 trattamenti un trattamento di mantenimento gratuito.</li>
          <li><strong>Palestra / studio fitness:</strong> premio per una serie di visite mensili, ad esempio una sessione di personal training gratuita dopo 12 ingressi.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Più del valore del premio conta la sua semplicità — il cliente deve capire subito la
          regola, senza leggere un regolamento. &laquo;Ogni 8° caffè gratis&raquo; funziona meglio
          di un sistema a punti che richiede conversioni.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/progi.jpg"
          alt="Schermata del pannello amministrativo che mostra le soglie premio e l&rsquo;avanzamento delle visite dei clienti in un programma fedeltà digitale"
        />
      </div>

      {/* ── BANNER NEWSLETTER — LARGHEZZA PIENA ── */}
      <NewsletterBlogBanner locale="it" />

      {/* ── SEZIONE 4 ── */}
      <div className={P}>
        <h2 id="fedelta-e-recensioni" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Programma fedeltà, SMS marketing e recensioni Google
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Una tessera fedeltà basata sul numero di telefono ha un vantaggio in più rispetto alla
          carta — ogni visita costruisce contemporaneamente una lista contatti utilizzabile per
          ulteriori attività di marketing. È l&rsquo;unione di tre elementi — fedeltà, promozione e
          reputazione — in un unico sistema.
        </p>

        <h3 id="sms-e-fedelta" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Come unire la fedeltà ai coupon via SMS
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Quando un cliente raccoglie visite su una tessera digitale e acconsente al contatto di
          marketing in conformità al GDPR, il suo numero entra in una lista utilizzabile per
          l&rsquo;invio di coupon SMS personalizzati. Un cliente a una sola visita dal premio, ma
          che non si presenta da tre settimane, è il destinatario naturale di un promemoria con un
          piccolo bonus — proprio nel momento in cui è più facile recuperarlo.
        </p>

        <h3 id="fedeli-e-recensioni" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Perché i clienti fedeli lasciano più recensioni
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Un cliente che torna regolarmente e si sente valorizzato dal programma premi è molto più
          disposto a dedicare dieci secondi a una recensione rispetto a chi ha visitato il locale
          una sola volta. Per questo conviene collegare il momento della registrazione della visita
          a una richiesta di valutazione — ad esempio al ritiro di un premio. Funziona esattamente
          così il{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            totem NFC Starlinkee
          </Link>
          : un unico dispositivo gestisce contemporaneamente la tessera fedeltà, il modulo di
          recensione Google e un filtro che protegge dalle recensioni ingiuste. Se vuoi scoprire
          come funziona passo dopo passo la raccolta delle recensioni, leggi l&rsquo;articolo su{" "}
          <Link href="/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">
            come ottenere rapidamente recensioni su Google
          </Link>
          . Abbiamo inoltre spiegato come rispondere a queste recensioni — comprese quelle più
          difficili — nell&rsquo;articolo{" "}
          <Link href="/blog/come-rispondere-alle-recensioni-google" className="text-blue-600 hover:underline">
            come rispondere alle recensioni Google
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.jpg"
          alt="Telefono che mostra un coupon sconto via SMS accanto a una notifica di un premio ottenuto nella tessera fedeltà digitale"
        />
      </div>

      {/* ── TRANSIZIONE 4→5 ── */}
      <SectionDivider quote="La fedeltà del cliente non nasce da uno sconto — nasce dalla facilità con cui è possibile tornare." />

      {/* ── SEZIONE 5 ── */}
      <div className={P}>
        <h2 id="implementazione" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Come implementare un programma fedeltà passo dopo passo
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementare un programma fedeltà digitale in un&rsquo;attività locale non richiede
          l&rsquo;integrazione con la cassa né una settimana di formazione del personale.
          L&rsquo;intero processo si riduce a pochi semplici passaggi.
        </p>

        <h3 id="fasi-implementazione" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Le fasi dell&rsquo;implementazione
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Stabilisci la soglia e il tipo di premio, adattati alla frequenza naturale delle visite.</li>
          <li>Posiziona il totem NFC in un punto visibile — alla cassa, al bancone o alla reception.</li>
          <li>Istruisci lo staff a ricordare ai clienti di avvicinare il telefono a ogni visita.</li>
          <li>Aggiungi una breve informazione sul programma sul tavolo, in vetrina o all&rsquo;ingresso.</li>
          <li>Monitora nel pannello amministrativo quanti clienti raccolgono attivamente visite, e reagisci con un coupon SMS quando l&rsquo;attività cala.</li>
        </ol>

        <h3 id="errori-comuni" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Gli errori più comuni nell&rsquo;implementazione
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Soglia del premio troppo alta</strong> — il cliente rinuncia prima di vedere il primo vantaggio.</li>
          <li><strong>Nessun promemoria da parte dello staff</strong> — i clienti dimenticano rapidamente di avvicinare il telefono se nessuno glielo ricorda.</li>
          <li><strong>Regole troppo complicate</strong> — un sistema a punti con conversioni scoraggia più di un semplice conteggio delle visite.</li>
          <li><strong>Nessuna informazione visibile sul programma</strong> — il cliente non userà qualcosa di cui non sa l&rsquo;esistenza.</li>
          <li><strong>Ignorare i dati del pannello</strong> — i soli dati sulle visite non aumentano la fedeltà se nessuno reagisce a un calo di attività con un coupon o un promemoria.</li>
        </ul>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/wdrozenie.jpg"
          alt="Titolare di un ristorante che installa un totem fedeltà NFC alla cassa e lo mostra al primo cliente"
        />
      </div>

      {/* ── RIEPILOGO ── */}
      <div className={P}>
        <section
          id="riepilogo"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — fedeltà senza attrito
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I clienti non abbandonano i programmi fedeltà perché non vogliono il premio —
            li abbandonano perché il percorso per raggiungerlo è troppo faticoso. La tessera
            cartacea si perde, l&rsquo;app richiede un download, ed entrambe le soluzioni non
            forniscono alcun dato su chi davvero ritorna. Una tessera digitale basata su NFC
            elimina questo ostacolo: un solo tocco del telefono, zero installazioni, piena
            visibilità nel pannello amministrativo. Se vuoi unire in un unico sistema la raccolta
            delle visite, le recensioni Google e i coupon SMS, scopri come funziona il{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              totem NFC Starlinkee
            </Link>{" "}
            con tessera fedeltà digitale integrata.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Domande frequenti
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Il cliente deve scaricare un&rsquo;app per usare la tessera fedeltà digitale?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. L&rsquo;intera tessera funziona nel browser del telefono dopo averlo avvicinato
                al totem NFC — senza installazione, senza creazione di un account e senza login con
                password.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quale soglia premio funziona meglio?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Quella che il cliente raggiunge entro poche settimane fino a un massimo di due o
                tre mesi, adattata alla frequenza naturale delle visite del tuo settore. Un premio
                troppo lontano perde la sua forza motivazionale.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                I dati raccolti tramite il programma fedeltà possono essere usati per il marketing via SMS?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Sì, a condizione di ottenere un consenso di marketing conforme al GDPR al momento
                della raccolta del numero di telefono. Una volta ottenuto, il numero può essere
                usato per inviare coupon e promemoria sul programma.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Un programma fedeltà funziona anche per saloni e studi, non solo per la ristorazione?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Sì. Funziona ovunque il cliente torni ciclicamente — saloni di parrucchiere,
                barbershop, centri estetici, palestre o officine meccaniche. La chiave è adattare
                la soglia del premio al reale ritmo di visita del settore.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                In cosa differisce una tessera fedeltà NFC da un codice QR?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Un codice QR richiede aprire la fotocamera, una buona illuminazione e inquadrare
                con il telefono, il che può risultare scomodo alla cassa. Un totem NFC richiede
                solo un tocco — l&rsquo;operazione dura una frazione di secondo e non dipende dalla
                qualità della scansione.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
