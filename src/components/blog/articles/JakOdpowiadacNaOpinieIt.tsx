import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function JakOdpowiadacNaOpinieIt() {
  return (
    <>
      {/* ── INTRODUZIONE + INDICE ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Ogni recensione su Google è una conversazione pubblica — letta non solo da te e da chi
          l&apos;ha scritta, ma da centinaia di potenziali clienti ancora indecisi se fidarsi di te.
          Il modo in cui rispondi agli elogi, alle critiche e alle recensioni che sembrano ingiuste
          o addirittura false determina se il tuo profilo costruisce fiducia o la distrugge. Questo
          articolo ti mostra come rispondere a ogni tipo di recensione, quando Google rimuove
          davvero una recensione e come ridurre legalmente il numero di valutazioni ingiuste prima
          ancora che arrivino online.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#perche-importante" className="text-blue-600 hover:underline">
                1. Perché rispondere alle recensioni conta per la SEO e per i clienti
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#impatto-algoritmo" className="text-blue-600 hover:underline">
                    1.1. Come influiscono le risposte sull&apos;algoritmo di Google?
                  </a>
                </li>
                <li>
                  <a href="#cosa-vedono-gli-altri" className="text-blue-600 hover:underline">
                    1.2. Cosa vedono gli altri clienti leggendo le tue risposte?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#recensioni-positive" className="text-blue-600 hover:underline">
                2. Come rispondere alle recensioni positive
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#struttura-risposta" className="text-blue-600 hover:underline">
                    2.1. La struttura di una buona risposta
                  </a>
                </li>
                <li>
                  <a href="#esempi-positivi" className="text-blue-600 hover:underline">
                    2.2. Esempi di risposte a recensioni positive
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#recensioni-negative" className="text-blue-600 hover:underline">
                3. Come rispondere alle recensioni negative
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#regole-negative" className="text-blue-600 hover:underline">
                    3.1. Regole che non devi mai infrangere
                  </a>
                </li>
                <li>
                  <a href="#esempi-negativi" className="text-blue-600 hover:underline">
                    3.2. Esempi di risposte a recensioni difficili
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#recensioni-false" className="text-blue-600 hover:underline">
                4. Cosa fare con una recensione falsa o ingiusta
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#quando-google-rimuove" className="text-blue-600 hover:underline">
                    4.1. Quando Google rimuove una recensione — e quando no?
                  </a>
                </li>
                <li>
                  <a href="#come-segnalare" className="text-blue-600 hover:underline">
                    4.2. Come segnalare una recensione per la rimozione, passo dopo passo
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#prevenzione" className="text-blue-600 hover:underline">
                5. Come prevenire le recensioni ingiuste prima che accadano
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#review-gating" className="text-blue-600 hover:underline">
                    5.1. Cos&apos;è il review gating e perché è vietato?
                  </a>
                </li>
                <li>
                  <a href="#filtro-legale" className="text-blue-600 hover:underline">
                    5.2. Un filtro recensioni legale — come funziona nella pratica?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#riepilogo" className="text-blue-600 hover:underline">
                6. Riepilogo — risposte che costruiscono fiducia
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
        <h2 id="perche-importante" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Perché rispondere alle recensioni conta per la SEO e per i clienti
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Molti titolari di attività trattano la sezione recensioni come una bacheca che
          controllano solo quando compare qualcosa di preoccupante. In realtà, le risposte alle
          recensioni sono uno dei pochi elementi del profilo che influenzano contemporaneamente il
          posizionamento locale e la decisione d&apos;acquisto del cliente che sta leggendo il tuo
          profilo in quel preciso momento. Trascurare questa sezione costa doppio — si perde SEO e
          si perdono conversioni.
        </p>

        <h3 id="impatto-algoritmo" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Come influiscono le risposte sull&apos;algoritmo di Google?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google indica esplicitamente il rispondere alle recensioni come un elemento che rafforza
          il segnale di notorietà (prominence) di un profilo. L&apos;attività in questa sezione
          mostra all&apos;algoritmo che l&apos;account è gestito da un&apos;attività reale che si
          impegna con i propri clienti — non un profilo abbandonato e non gestito. Più risposte
          contengono un linguaggio naturale e pertinente al tuo settore e alla tua zona, più forte
          è il segnale di rilevanza per le ricerche locali. È solo uno dei tanti elementi che
          insieme costruiscono il posizionamento di un profilo — trovi l&apos;elenco completo dei
          fattori di ranking nel nostro articolo su{" "}
          <Link href="/blog/profilo-google-business-come-ottimizzare" className="text-blue-600 hover:underline">
            come ottimizzare il tuo Google Business Profile
          </Link>
          .
        </p>

        <h3 id="cosa-vedono-gli-altri" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Cosa vedono gli altri clienti leggendo le tue risposte?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Prima di chiamare o prenotare, un cliente scorre alcune delle recensioni più recenti — e
          le tue risposte sotto di esse. Una reazione calma e concreta a una recensione difficile
          crea più fiducia delle sole cinque stelle, perché mostra come si comporta
          l&apos;attività in una situazione di crisi. Nessuna reazione a una recensione negativa
          viene letta come disinteresse verso il cliente — anche se la recensione stessa non era
          del tutto giusta.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-hero.jpg"
          alt="Titolare di un locale che legge e risponde alle recensioni dei clienti nel pannello di Google Business Profile su un laptop"
        />
      </div>

      {/* ── SEZIONE 2 ── */}
      <div className={P}>
        <h2 id="recensioni-positive" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Come rispondere alle recensioni positive
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Le recensioni positive tentano a rispondere con una sola frase — „Grazie!” — e passare
          oltre. È un errore. Una risposta breve ma personalizzata costa un minuto, rafforza in
          modo naturale la descrizione della tua attività con altre parole chiave e dimostra che
          ogni voce conta, non solo quelle critiche.
        </p>

        <h3 id="struttura-risposta" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          La struttura di una buona risposta
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Una buona risposta a una recensione positiva ha quattro elementi: un ringraziamento con
          il nome del cliente (se visibile), un riferimento a un dettaglio concreto della
          recensione, un breve rafforzamento di ciò che offre l&apos;attività e un invito a
          tornare. Il tutto sta in due o tre frasi.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Ringrazia per nome, se il profilo del cliente lo mostra.</li>
          <li>Fai riferimento a un dettaglio della recensione — un piatto, un trattamento, il servizio menzionato.</li>
          <li>Inserisci in modo naturale il nome del servizio o della località, senza forzature.</li>
          <li>Invita a tornare o a consigliare l&apos;attività ad amici.</li>
        </ol>

        <h3 id="esempi-positivi" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Esempi di risposte a recensioni positive
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Ristorante:</strong> „Grazie, Anna! Siamo felicissimi che il risotto ai porcini
          ti sia piaciuto — è uno dei piatti preferiti dai nostri clienti abituali. Ti aspettiamo
          di nuovo, magari per il nostro brunch del weekend!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Salone di parrucchiere:</strong> „Grazie per la recensione! Siamo contenti che il
          nuovo colore abbia soddisfatto le tue aspettative. Ci vediamo tra 6–8 settimane per il
          ritocco!”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Studio dentistico:</strong> „Grazie per la fiducia e per le belle parole. Il
          comfort del paziente durante il trattamento è la nostra priorità — siamo felici di
          averlo garantito. Ci vediamo al prossimo controllo!”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-pozytywne.jpg"
          alt="Schermo di uno smartphone con una recensione a cinque stelle di un cliente e una risposta professionale dell'attività sotto"
        />
      </div>

      {/* ── TRANSIZIONE 2→3 ── */}
      <SectionDivider quote="Ogni risposta sotto una recensione non è scritta solo per un cliente, ma per tutti quelli che la leggeranno ancora." />

      {/* ── SEZIONE 3 ── */}
      <div className={P}>
        <h2 id="recensioni-negative" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Come rispondere alle recensioni negative
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Una recensione negativa fa male — soprattutto quando sembra esagerata. Il modo in cui
          reagisci, però, decide se l&apos;episodio verrà dimenticato dopo una settimana o diventerà
          una prova agli occhi di ogni futuro lettore del tuo profilo. Una testa lucida e un piano
          d&apos;azione concreto contano più delle emozioni.
        </p>

        <h3 id="regole-negative" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Regole che non devi mai infrangere
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Non rispondere subito sull&apos;onda dell&apos;emozione</strong> — aspetta qualche ora e rileggi la recensione a mente fredda.</li>
          <li><strong>Non litigare pubblicamente</strong> — sposta i dettagli della controversia in un messaggio privato, un&apos;email o una telefonata.</li>
          <li><strong>Non ignorare le recensioni</strong> — il silenzio viene letto come disinteresse verso il problema del cliente.</li>
          <li><strong>Non copiare la stessa formula</strong> sotto ogni recensione negativa — i clienti se ne accorgono e perdono fiducia.</li>
          <li><strong>Non ammettere colpe che non esistono</strong> — una spiegazione concreta è meglio di una scusa vuota.</li>
        </ul>

        <h3 id="esempi-negativi" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Esempi di risposte a recensioni difficili
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Lamentela sui tempi di attesa:</strong> „Ci dispiace che il tempo di attesa per il
          piatto non abbia soddisfatto le sue aspettative — quella sera avevamo un numero
          eccezionalmente alto di prenotazioni. Saremo felici di discutere i dettagli, la preghiamo
          di contattarci a [telefono/email]. Ci teniamo che la sua prossima visita sia
          completamente diversa.”
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Una recensione che sembra ingiustificata:</strong> „Grazie per la segnalazione.
          Dopo aver controllato l&apos;agenda e lo storico delle prenotazioni per il giorno e
          l&apos;ora indicati, non abbiamo trovato una voce corrispondente a questa esperienza. La
          preghiamo di contattarci a [email] per chiarire — teniamo molto all&apos;accuratezza del
          nostro profilo.”
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-negatywne.jpg"
          alt="Persona che risponde con calma e in modo concreto a una recensione negativa di un cliente sullo schermo di un computer"
        />
      </div>

      {/* ── BANNER NEWSLETTER A LARGHEZZA PIENA ── */}
      <NewsletterBlogBanner locale="it" />

      {/* ── SEZIONE 4 ── */}
      <div className={P}>
        <h2 id="recensioni-false" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Cosa fare con una recensione falsa o ingiusta
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Non ogni recensione dolorosa si qualifica per la rimozione. Google rimuove le recensioni
          solo quando violano regole specifiche delle sue norme — non semplicemente perché non ti
          piacciono o perché sono poco lusinghiere ma veritiere. Distinguere queste due situazioni
          fa risparmiare tempo e frustrazione.
        </p>

        <h3 id="quando-google-rimuove" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Quando Google rimuove una recensione — e quando no?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google agisce positivamente su una segnalazione quando una recensione contiene:
          incitamento all&apos;odio o volgarità, contenuti non collegati a una reale esperienza del
          cliente (spam, pubblicità di un concorrente), un conflitto di interessi (recensione di un
          ex dipendente o di un concorrente), dati personali di terzi, oppure quando proviene da un
          account che non ha mai avuto contatti con l&apos;attività.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google non rimuoverà invece una recensione solo perché è negativa, perché non sei
          d&apos;accordo con la descrizione dei fatti, o perché il cliente aveva — secondo te —
          aspettative eccessive. Un&apos;esperienza autentica del cliente, anche se poco
          lusinghiera, rimane sul profilo anche dopo una segnalazione.
        </p>

        <h3 id="come-segnalare" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Come segnalare una recensione per la rimozione, passo dopo passo
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-2">
          <li>Apri il profilo dell&apos;attività su Google Maps o nella ricerca.</li>
          <li>Trova la recensione in questione e clicca sull&apos;icona dei tre puntini accanto.</li>
          <li>Seleziona „Segnala recensione” e scegli il motivo di violazione più pertinente.</li>
          <li>Descrivi in modo breve e concreto perché la recensione viola le norme — senza emozioni, solo fatti.</li>
          <li>Se dopo qualche giorno non arriva risposta, escalata tramite il supporto di Google Business Profile o il modulo di assistenza Google.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-8">
          I tempi di valutazione variano — da pochi giorni a diverse settimane. Sii paziente e non
          rimuovere nel frattempo la tua risposta sotto la recensione — anche se alla fine viene
          rimossa, la tua reazione concreta resta visibile a chiunque la legga prima di allora.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-zgloszenie.jpg"
          alt="Modulo per segnalare una recensione nel pannello di Google Business Profile con un elenco di motivi di violazione delle norme"
        />
      </div>

      {/* ── TRANSIZIONE 4→5 ── */}
      <SectionDivider quote="La migliore risposta a una recensione ingiusta è un sistema che fa sì che compaia raramente." />

      {/* ── SEZIONE 5 ── */}
      <div className={P}>
        <h2 id="prevenzione" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Come prevenire le recensioni ingiuste prima che accadano
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rispondere alle recensioni difficili è importante, ma ridurne il numero alla fonte è
          ancora più efficace. L&apos;obiettivo è che un piccolo incidente — una zuppa fredda,
          cinque minuti di ritardo — non finisca subito con una stella su Google, ma arrivi prima a
          te, prima ancora di finire online.
        </p>

        <h3 id="review-gating" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Cos&apos;è il review gating e perché è vietato?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Il review gating consiste nel chiedere a un cliente „Sei soddisfatto?” e indirizzare a
          Google solo chi risponde „sì” — i clienti insoddisfatti semplicemente non ricevono mai il
          link per la recensione. Google vieta esplicitamente questa pratica nelle sue norme,
          perché gonfia artificialmente la valutazione di un profilo e trae in inganno altri
          utenti. Se scoperto, questo meccanismo può comportare una penalizzazione, un calo di
          posizionamento o la sospensione del profilo.
        </p>

        <h3 id="filtro-legale" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Un filtro recensioni legale — come funziona nella pratica?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La differenza tra il review gating vietato e la legittima protezione del profilo è
          sottile ma cruciale: un sistema legale non blocca mai a nessuno la strada verso Google —
          ogni cliente, soddisfatto o meno, ha accesso al modulo pubblico delle recensioni. Ciò che
          cambia è solo l&apos;ordine dei passaggi: un cliente insoddisfatto riceve in più la
          possibilità di segnalare il problema direttamente all&apos;attività, prima di (o insieme
          a quando) decide se scrivere anche una recensione pubblica.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          È esattamente così che funziona il filtro recensioni integrato nel{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            supporto NFC di Starlinkee
          </Link>
          . Il cliente avvicina il telefono e valuta prima l&apos;esperienza con un solo tocco. Un
          cliente soddisfatto va direttamente al modulo delle recensioni Google. Uno insoddisfatto
          arriva su un modulo di feedback interno dove può descrivere il problema — dandoti la
          possibilità di contattarlo e risolvere la situazione prima che chiunque altro ne legga.
          Non si tratta di bloccare l&apos;accesso a Google — si tratta di gestire il momento in
          cui il cliente decide dove indirizzare il proprio feedback. Puoi approfondire il processo
          di raccolta delle recensioni nell&apos;articolo su{" "}
          <Link href="/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">
            come ottenere rapidamente recensioni su Google
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie-filtr.jpg"
          alt="Schema che mostra un cliente che avvicina il telefono a un supporto NFC, indirizzato al modulo recensioni Google o al modulo di feedback interno"
        />
      </div>

      {/* ── RIEPILOGO ── */}
      <div className={P}>
        <section
          id="riepilogo"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — risposte che costruiscono fiducia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Rispondere alle recensioni non è un obbligo amministrativo, ma una conversazione
            quotidiana con il mercato che ogni potenziale cliente può vedere. Ringrazia in modo
            concreto per le recensioni positive, reagisci con calma e concretezza a quelle
            negative, e segnala per la rimozione solo quelle che violano davvero le norme di
            Google. La strategia più efficace resta però ridurre le recensioni ingiuste alla fonte
            — prima ancora che il cliente prenda il telefono per lasciare una valutazione. Se vuoi
            vedere come funziona nella pratica, scopri il{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              supporto NFC di Starlinkee
            </Link>{" "}
            con un filtro recensioni integrato e conforme alle norme di Google.
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
                Devo rispondere a ogni recensione su Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Non esiste un obbligo formale, ma è fortemente consigliato. Rispondere alle
                recensioni — sia positive che negative — è un segnale di attività considerato
                dall&apos;algoritmo SEO locale e costruisce fiducia nei clienti che leggono il tuo
                profilo.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quanto velocemente dovrei rispondere alle recensioni negative?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Il tempo di reazione ottimale è di 24–48 ore. Abbastanza rapido da dimostrare
                coinvolgimento, ma abbastanza lungo da permettere una risposta a mente fredda,
                senza emozioni che potrebbero aggravare la situazione.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Google rimuoverà una recensione negativa se lo chiedo al cliente?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Il cliente può rimuovere o modificare autonomamente la propria recensione in
                qualsiasi momento, ma Google non lo farà automaticamente su tua richiesta se il
                contenuto non viola le norme. La soluzione più efficace è chiarire la questione in
                privato e chiedere gentilmente un aggiornamento una volta risolto il problema.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                In cosa si differenzia un filtro recensioni dal review gating vietato?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Il review gating blocca ai clienti insoddisfatti l&apos;accesso al modulo recensioni
                di Google — una violazione delle norme. Un filtro recensioni legale, come quello di
                Starlinkee, dà accesso a Google a ogni cliente e offre solo in più a quelli
                insoddisfatti un canale separato per segnalare un problema direttamente
                all&apos;attività.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Cosa fare se sospetto che la recensione sia stata scritta da un concorrente?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Segnala la recensione tramite il modulo di Google, indicando il conflitto di
                interessi come motivo. È utile allegare elementi concreti (ad esempio l&apos;assenza
                di un riscontro nella tua cronologia delle prenotazioni). Rispondi anche
                pubblicamente in modo concreto, senza accusare direttamente — gli altri lettori
                trarranno le proprie conclusioni dai fatti.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
