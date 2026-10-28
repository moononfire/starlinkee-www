import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function OpinieGoogleRestauracjaKawiarniaIt() {
  return (
    <>
      {/* ── INTRODUZIONE + INDICE ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Scegliere dove pranzare o prendere un caffè oggi si decide in pochi secondi — sulla
          mappa dello smartphone, tra una dozzina di segnaposto con le stelline. Un cliente che
          cerca un ristorante o un bar &ldquo;vicino a me&rdquo; raramente legge il menu su un sito.
          Guarda la valutazione, il numero di recensioni e se le ultime risalgono alla settimana
          scorsa o a un anno fa. La ristorazione ha un vantaggio: ogni giorno passano centinaia di
          persone soddisfatte — basta far sì che almeno una parte di loro lasci un segno su Google.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-opinie" className="text-blue-600 hover:underline">
                1. Perché le recensioni Google decidono la scelta di ristoranti e bar?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-widzi-gosc" className="text-blue-600 hover:underline">
                    1.1. Cosa vede il cliente sulla mappa prima di entrare nel locale?
                  </a>
                </li>
                <li>
                  <a href="#gastronomia-wrazliwa" className="text-blue-600 hover:underline">
                    1.2. Perché la ristorazione è così sensibile alle valutazioni?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#jak-zbierac" className="text-blue-600 hover:underline">
                2. Come raccogliere recensioni in un ristorante o bar senza disturbare i clienti?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#najlepszy-moment" className="text-blue-600 hover:underline">
                    2.1. Qual è il momento migliore della visita per chiedere una recensione?
                  </a>
                </li>
                <li>
                  <a href="#nfc-stolik-lada" className="text-blue-600 hover:underline">
                    2.2. Come funziona il supporto NFC al tavolo e alla cassa?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#trudne-opinie" className="text-blue-600 hover:underline">
                3. Come reagire alle recensioni difficili nella ristorazione?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#niezadowolony-gosc" className="text-blue-600 hover:underline">
                    3.1. Cosa fare se un cliente è insoddisfatto del piatto o del servizio?
                  </a>
                </li>
                <li>
                  <a href="#filtr-opinii" className="text-blue-600 hover:underline">
                    3.2. Cosa fare quando un cliente ha da ridire?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#opinie-i-powroty" className="text-blue-600 hover:underline">
                4. Come trasformare un cliente soddisfatto in un cliente abituale?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#stali-goscie" className="text-blue-600 hover:underline">
                    4.1. Perché i clienti abituali sono i più preziosi nella ristorazione?
                  </a>
                </li>
                <li>
                  <a href="#kupony-i-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. Come favoriscono il ritorno i coupon SMS?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Riepilogo — come ottengono più recensioni ristoranti e bar?
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

      {/* ── SEZIONE 1 ── */}
      <div className={P}>
        <h2
          id="dlaczego-opinie"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Perché le recensioni Google decidono la scelta di ristoranti e bar?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Un ristorante o un bar vende un&apos;esperienza che non si può verificare in anticipo.
          Non si sa se il caffè sarà buono, se il cameriere sorriderà o quanto si dovrà attendere
          l&apos;ordine. Le recensioni degli altri clienti sostituiscono quindi la prova —
          rispondono alla domanda &ldquo;vale la pena entrare?&rdquo; in pochi secondi, prima
          ancora che il cliente abbia visto il locale.
        </p>

        <h3
          id="co-widzi-gosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cosa vede il cliente sulla mappa prima di entrare nel locale?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nell&apos;elenco dei risultati vede il nome, la valutazione media, il numero di recensioni
          e le foto. Un locale con 4,6 stelle e diverse centinaia di recensioni batte un posto con
          4,8 ma solo nove valutazioni — perché un gran numero di recensioni appare come una prova
          credibile, non come un caso. Conta anche la freschezza: se l&apos;ultima recensione risale a
          diversi mesi fa, il cliente si chiede se il locale funzioni ancora allo stesso modo. Puoi
          approfondire come il profilo incide sulla visibilità nell&apos;articolo
          sull&apos;
          <Link href="/it/blog/profilo-google-business-come-ottimizzare" className="text-blue-600 hover:underline">
            ottimizzazione del profilo Google Business
          </Link>
          .
        </p>

        <h3
          id="gastronomia-wrazliwa"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Perché la ristorazione è così sensibile alle valutazioni?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Scegliere un ristorante è una decisione spontanea, spesso presa con poco tempo — la pausa
          pranzo, l&apos;incontro con gli amici, l&apos;uscita in famiglia. Nessuno vuole rischiare
          una serata rovinata, quindi il cliente cerca il segnale più rapido disponibile: le
          stelle. Un locale che raccoglie recensioni in modo sistematico costruisce una raccolta di
          prove — sul gusto dei piatti, sulla velocità del servizio e sull&apos;atmosfera — invece di
          affidarsi a commenti casuali. Come farlo in fretta e nel rispetto delle regole di Google è
          spiegato nella guida su come{" "}
          <Link href="/it/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">
            ottenere recensioni Google in modo rapido e legale
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="Conto su una cartellina, una tazza di caffè e uno smartphone su un tavolo di cemento in un bar"
        />
      </div>

      {/* ── TRANSIZIONE 1→2 ── */}
      <SectionDivider quote="Nella ristorazione il cliente non valuta solo il cibo — valuta l'intera esperienza, e Google gli permette di raccontarla alle persone successive." />

      {/* ── SEZIONE 2 ── */}
      <div className={P}>
        <h2
          id="jak-zbierac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Come raccogliere recensioni in un ristorante o bar senza disturbare i clienti?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          In un locale il personale ha decine di compiti contemporaneamente — chiedere una
          recensione non deve togliere tempo al cameriere né mettere in imbarazzo il cliente. Il
          sistema di raccolta deve funzionare quasi da solo: senza spiegazioni, senza cercare il
          locale sulla mappa e senza installare nulla.
        </p>

        <h3
          id="najlepszy-moment"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Qual è il momento migliore della visita per chiedere una recensione?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Il momento migliore è quando il cliente è più soddisfatto e ha ancora il telefono in mano
          — di solito al conto o subito dopo aver pagato. Il pasto è finito, le impressioni sono
          fresche e nulla lo separa dall&apos;uscita. Se glielo si chiede dopo, a casa, di solito
          dimentica; se glielo si chiede durante il pasto, si sente a disagio. Il conto sul tavolo è
          un punto naturale in cui basta una scritta discreta che inviti a lasciare una valutazione.
        </p>

        <h3
          id="nfc-stolik-lada"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come funziona il supporto NFC al tavolo e alla cassa?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Un piccolo supporto o adesivo NFC sta sul tavolo o accanto al terminale di pagamento. Il
          cliente avvicina il telefono e il modulo di recensione Google si apre subito — senza
          digitare il nome del locale e senza app. In un bar con servizio al banco conviene
          metterlo accanto al terminale, perché il cliente ha comunque il telefono in mano. In un
          ristorante con servizio al tavolo funziona bene il tavolo in cui il cliente passa più
          tempo.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="Un cliente con lo smartphone accanto al terminale di pagamento su un bancone di legno"
        />
      </div>

      {/* ── BANNER NEWSLETTER — larghezza piena ── */}
      <NewsletterBlogBanner locale="it" />

      {/* ── SEZIONE 3 ── */}
      <div className={P}>
        <h2
          id="trudne-opinie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Come reagire alle recensioni difficili nella ristorazione?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nella ristorazione una recensione negativa può nascere per motivi su cui il locale non ha
          controllo: lunga attesa nelle ore di punta, un problema in cucina, un cliente nella
          giornata sbagliata. Con così tante persone servite non si può evitare ogni critica — ma si
          può fare in modo che nessuna resti senza risposta.
        </p>

        <h3
          id="niezadowolony-gosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cosa fare se un cliente è insoddisfatto del piatto o del servizio?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          La cosa migliore è reagire ancora al tavolo — sostituire il piatto, offrire un bis o uno
          sconto sulla visita successiva, prima che il fastidio si trasformi in una recensione
          pubblica. Se la recensione negativa compare comunque, rispondi con calma e in modo
          concreto, senza polemiche. Gli altri clienti leggono con attenzione queste risposte:
          giudicano non il singolo episodio, ma come il locale gestisce i problemi. Modelli di
          risposta pronti li trovi nell&apos;articolo{" "}
          <Link href="/it/blog/come-rispondere-alle-recensioni-google" className="text-blue-600 hover:underline">
            come rispondere alle recensioni Google
          </Link>
          .
        </p>

        <h3
          id="filtr-opinii"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cosa fare quando un cliente ha da ridire?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          È utile che un cliente insoddisfatto abbia un modo semplice per scriverti in privato: così vieni a sapere del problema lo stesso giorno e puoi risolverlo. Quel messaggio però deve essere un&apos;aggiunta, non un sostituto della recensione. Non si può scegliere a chi mostrare il link a Google, perché la raccolta selettiva di recensioni (il cosiddetto <strong>&ldquo;review gating&rdquo;</strong>) è vietata da Google e nell&apos;UE può essere considerata ingannevole. Ogni cliente dovrebbe poter lasciare una recensione pubblica.</p>
      </div>

      {/* ── TRANSIZIONE 3→4 ── */}
      <SectionDivider quote="Una valutazione sulla mappa attira un nuovo cliente, ma sono i clienti abituali a far lavorare il locale anche il martedì alle 15." />

      {/* ── SEZIONE 4 ── */}
      <div className={P}>
        <h2
          id="opinie-i-powroty"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Come trasformare un cliente soddisfatto in un cliente abituale?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Una recensione su Google è solo l&apos;inizio del rapporto. Un cliente che ha appena
          scansionato il supporto NFC è nel momento ideale per lasciare anche i suoi contatti e il
          consenso marketing — e allora lo stesso supporto lavora non solo per la valutazione, ma
          anche per le visite successive.
        </p>

        <h3
          id="stali-goscie"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Perché i clienti abituali sono i più preziosi nella ristorazione?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Un cliente abituale ordina più spesso, non richiede campagne costose e consiglia il locale
          agli amici. In un bar dove qualcuno passa ogni giorno andando al lavoro, un cliente fedele
          vale più di una dozzina di turisti occasionali. Per questo raccogliere numero di telefono e
          consenso GDPR al momento della valutazione è un investimento che si ripaga a ogni visita
          successiva.
        </p>

        <h3
          id="kupony-i-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come favoriscono il ritorno i coupon SMS?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Un breve SMS con un coupon per il dolce in un giorno più tranquillo della settimana può riempire i tavoli proprio quando di solito sono vuoti. Come farlo in modo sensato e lecito lo descriviamo nell&apos;articolo sull&apos;<Link href="/it/blog/sms-marketing-ristoranti-bar-come-inviare-coupon" className="text-blue-600 hover:underline">SMS marketing per i locali</Link>.</p>
      </div>

      {/* ── RIEPILOGO ── */}
      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — come ottengono più recensioni ristoranti e bar?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nella ristorazione la scelta del locale dipende dalle stelle visibili sulla mappa, quindi
            numero e freschezza delle recensioni contano quanto la valutazione media stessa. La
            chiave è chiedere una recensione nel momento di maggiore soddisfazione — al conto o al
            pagamento — e rimuovere ogni barriera tecnologica che potrebbe scoraggiare il cliente. Un
            supporto NFC lo fa in una frazione di secondo, e lo stesso supporto può raccogliere
            contatti e alimentare coupon SMS, trasformando i clienti occasionali in
            clienti abituali.
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
                Il cameriere deve chiedere personalmente ai clienti una recensione su Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Non è necessario. Un supporto NFC sul tavolo o alla cassa invita il cliente a
                lasciare una valutazione senza l&apos;intervento del personale, così nessuno si sente
                sotto pressione e il cameriere non perde tempo nelle ore di punta.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quando è meglio chiedere una recensione in un ristorante o bar?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Al conto o subito dopo il pagamento, quando il pasto è finito, le impressioni sono
                fresche e il telefono è a portata di mano. Una richiesta durante il pasto può essere
                invadente e un cliente a cui lo si chiede dopo di solito dimentica.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Il cliente deve scaricare un&apos;app per lasciare una recensione con il supporto NFC?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. Basta avvicinare il telefono al supporto — il modulo di recensione Google si apre
                nel browser, senza installare app, senza creare un account e senza digitare il nome
                del locale.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Cosa fare se un cliente è insoddisfatto del piatto o del servizio?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Reagisci ancora al tavolo — sostituisci il piatto o proponi un risarcimento. Se la
                recensione negativa compare comunque, rispondi con calma e in modo concreto, senza
                polemiche; gli altri clienti giudicheranno soprattutto come il locale risolve i
                problemi.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Lo stesso supporto NFC può raccogliere recensioni e contatti dei clienti?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Sì. Un unico supporto NFC può indirizzare il cliente al modulo di recensione Google e raccogliere allo stesso tempo il suo numero di telefono con il consenso ai messaggi con coupon — senza hardware aggiuntivo e senza app.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
