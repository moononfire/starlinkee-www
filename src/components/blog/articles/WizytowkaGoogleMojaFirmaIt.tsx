import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function WizytowkaGoogleMojaFirmaIt() {
  return (
    <>
      {/* ── LEAD + INDICE ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Il tuo profilo Google Business è oggi più importante del tuo sito web. Quando qualcuno
          cerca "ristorante vicino a me" o "parrucchiere Milano" sul telefono, l'algoritmo decide
          in una frazione di secondo quali profili appaiono in cima alla mappa. Non conta il design
          del tuo sito. Conta quanto hai compilato bene il tuo profilo — e quanto attivamente lo
          gestisci. Questo articolo ti guida attraverso l'intero processo, da zero a un profilo
          completamente ottimizzato.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#cos-e" className="text-blue-600 hover:underline">
                1. Cos'è Google Business Profile e perché è importante?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#profilo-vs-sito" className="text-blue-600 hover:underline">
                    1.1. In cosa differisce un profilo aziendale da un sito web?
                  </a>
                </li>
                <li>
                  <a href="#impatto-mappe" className="text-blue-600 hover:underline">
                    1.2. Come influisce la scheda sui risultati di Google Maps?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#come-creare" className="text-blue-600 hover:underline">
                2. Come creare e verificare il profilo Google?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#registrazione" className="text-blue-600 hover:underline">
                    2.1. Creare una nuova scheda — passo dopo passo
                  </a>
                </li>
                <li>
                  <a href="#verifica" className="text-blue-600 hover:underline">
                    2.2. Verifica dell'indirizzo — cosa aspettarsi
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#come-compilare" className="text-blue-600 hover:underline">
                3. Come compilare il profilo Google Business passo dopo passo?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#nome-categoria-descrizione" className="text-blue-600 hover:underline">
                    3.1. Nome, categoria e descrizione — cosa influisce di più sulla SEO?
                  </a>
                </li>
                <li>
                  <a href="#orari-foto-attributi" className="text-blue-600 hover:underline">
                    3.2. Orari di apertura, foto e attributi
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#segnali-ranking" className="text-blue-600 hover:underline">
                4. Cosa influisce sulla posizione su Google Maps?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#tre-segnali" className="text-blue-600 hover:underline">
                    4.1. I tre principali segnali di ranking di Google
                  </a>
                </li>
                <li>
                  <a href="#attivita-profilo" className="text-blue-600 hover:underline">
                    4.2. Come aggiornare il profilo regolarmente?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#post-aggiornamenti" className="text-blue-600 hover:underline">
                5. Post e aggiornamenti — come mantenere la scheda attiva?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#frequenza-post" className="text-blue-600 hover:underline">
                    5.1. Con quale frequenza pubblicare post su Google Business Profile?
                  </a>
                </li>
                <li>
                  <a href="#contenuto-post" className="text-blue-600 hover:underline">
                    5.2. Quali contenuti coinvolgono meglio i clienti locali?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#riepilogo" className="text-blue-600 hover:underline">
                6. Riepilogo — una scheda che lavora davvero
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
        <h2
          id="cos-e"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Cos'è Google Business Profile e perché è importante?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile (ex Google My Business) è una dashboard gratuita in cui definisci
          come appare la tua attività su Google Search e Google Maps. Quando un cliente cerca un
          prodotto o un servizio nelle vicinanze, la tua scheda fornisce immediatamente nome,
          indirizzo, orari di apertura, foto e recensioni — ancora prima che raggiunga il tuo sito
          web. Per la maggior parte delle attività locali, questo pannello è il primo e spesso
          unico punto di contatto con un nuovo cliente.
        </p>

        <h3
          id="profilo-vs-sito"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          In cosa differisce un profilo aziendale da un sito web?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Un sito web richiede al cliente di cliccare su un link, caricare una pagina e trovare
          autonomamente orari o indirizzo. Un profilo Google Business fornisce queste informazioni
          immediatamente — direttamente nella scheda dei risultati di ricerca, senza clic
          aggiuntivi. Inoltre, il profilo su Google viene indicizzato separatamente e può
          posizionarsi più in alto del tuo sito web per le frasi locali. Un ristorante con una
          scheda ben curata comparirà per "pizza vicino a me" più velocemente rispetto all'
          ottimizzazione del sito web.
        </p>

        <h3
          id="impatto-mappe"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come influisce la scheda sui risultati di Google Maps?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Maps e i risultati locali si basano sul cosiddetto Local Pack — un insieme di tre
          attività che l'algoritmo considera più rilevanti per una determinata ricerca. Chi entra
          in quel pacchetto ottiene la maggior parte dei clic. L'algoritmo valuta tre fattori:
          pertinenza (il profilo corrisponde alla ricerca), distanza (l'attività è vicina al
          ricercatore) e notorietà (il profilo è completo, attivo e ben recensito). Puoi
          controllare direttamente due di questi tre fattori attraverso il tuo pannello.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/local-pack.jpg"
          alt="Schermo di smartphone con risultati di Google Maps che mostrano tre attività nel Local Pack con stelle e indirizzi"
        />
      </div>

      {/* ── SEZIONE 2 ── */}
      <div className={P}>
        <h2
          id="come-creare"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Come creare e verificare il profilo Google?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Se la tua attività non ha ancora un profilo, inizia andando su{" "}
          <a
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            business.google.com
          </a>{" "}
          e accedendo con un account Google. Un solo account Google può gestire più sedi, quindi
          non hai bisogno di account separati per ogni filiale. Il processo di registrazione richiede
          circa quindici minuti. La verifica può richiedere più tempo — Google deve confermare
          che l'attività opera effettivamente all'indirizzo indicato.
        </p>

        <h3
          id="registrazione"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Creare una nuova scheda — passo dopo passo
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Durante la registrazione Google chiede alcune informazioni chiave. Inseriscile con
          precisione — ogni campo può essere modificato in seguito, ma dati coerenti fin dall'inizio
          accorciano i tempi di verifica e rafforzano la fiducia dell'algoritmo.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Vai su <strong>business.google.com</strong> e clicca su "Gestisci ora".</li>
          <li>Inserisci il nome dell'attività — esattamente come appare sull'insegna e sulle ricevute.</li>
          <li>Scegli la tua <strong>categoria principale</strong> (ad es. "Ristorante", "Salone di parrucchiere").</li>
          <li>Aggiungi l'indirizzo o indica che servi i clienti nella loro sede.</li>
          <li>Aggiungi un numero di telefono e l'indirizzo del tuo sito web.</li>
          <li>Scegli un metodo di verifica e completa il processo.</li>
        </ol>

        <h3
          id="verifica"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Verifica dell'indirizzo — cosa aspettarsi
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Nella maggior parte dei casi Google invia una cartolina con un codice PIN all'indirizzo
          fisico indicato. L'attesa è solitamente di 5–14 giorni. Alcune categorie e account
          possono utilizzare la verifica più rapida tramite SMS, registrazione video o verifica
          istantanea tramite Ricerca — se questa opzione appare nell'elenco, usala per prima. Fino
          al completamento della verifica il profilo esiste ma non appare pubblicamente nei
          risultati di ricerca.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/panel.jpg"
          alt="Pannello di amministrazione di Google Business Profile visibile su un laptop con le sezioni del profilo aziendale compilate"
        />
      </div>

      {/* ── TRANSIZIONE 2→3 ── */}
      <SectionDivider quote="Il tuo profilo Google è una vetrina digitale — più informazioni fornisci, più è facile per i clienti sceglierti." />

      {/* ── SEZIONE 3 ── */}
      <div className={P}>
        <h2
          id="come-compilare"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Come compilare il profilo Google Business passo dopo passo?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La completezza del profilo è uno dei segnali più importanti per l'algoritmo della SEO
          locale. Google stesso afferma che le attività con informazioni complete sono "1,7 volte
          più probabili di essere considerate affidabili". In pratica, significa che nessuna sezione
          dovrebbe restare vuota — perché ogni campo vuoto è un'opportunità per un concorrente che
          ha dedicato tempo a compilare il proprio profilo.
        </p>

        <h3
          id="nome-categoria-descrizione"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Nome, categoria e descrizione — cosa influisce di più sulla SEO?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il <strong>nome dell'attività</strong> deve corrispondere al nome che usi effettivamente.
          Non aggiungere parole chiave come "Ristorante Maria — pizza Milano centro" — Google lo
          considera spam e può sospendere il profilo. Se la tua attività si chiama
          "Ristorante Maria", inserisci esattamente quello nel campo del nome.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>categoria principale</strong> è il segnale di ranking più forte tra tutti i
          campi del profilo. Sceglila con precisione. Se gestisci una pizzeria, scegli "Pizzeria",
          non il generico "Ristorante". Puoi aggiungere fino a dieci categorie aggiuntive — ad es.
          "Ristorante italiano", "Bar", "Consegna cibo" — ma non farlo mai alla cieca. Ogni
          categoria determina per quali ricerche puoi apparire.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          La <strong>descrizione dell'attività</strong> ha un limite di 750 caratteri. I primi 250
          sono visibili senza espandere, quindi inserisci lì le informazioni più importanti: cosa
          fai, per chi, dove e cosa ti distingue. Integra naturalmente le parole chiave — non
          forzarle, perché la descrizione la leggono anche i clienti reali.
        </p>

        <h3
          id="orari-foto-attributi"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Orari di apertura, foto e attributi
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gli <strong>orari di apertura</strong> devono essere aggiornati. È un dettaglio che molte
          attività trascurano — e un cliente che arriva davanti a un locale chiuso lascerà una
          recensione da una stella. Ricorda di aggiungere orari speciali per le festività e i giorni
          di chiusura.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>foto</strong> hanno un impatto reale sui clic. I profili con almeno dieci foto
          generano tre volte più richieste di indicazioni stradali. Aggiungi: una foto principale
          (esterno o logo), interni, prodotti o servizi, personale in azione. Aggiornale almeno
          una volta al trimestre — le foto recenti sono un segnale di attività.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Gli <strong>attributi</strong> sono dettagli che i clienti filtrano nella ricerca:
          accessibilità per persone con disabilità, opzioni di pagamento, Wi-Fi, posti all'aperto,
          parcheggio, opzioni vegetariane. Ogni attributo spuntato aumenta le possibilità di
          apparire nelle ricerche con filtro. Scorri l'elenco completo disponibile per la tua
          categoria e seleziona tutto ciò che effettivamente offri.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/zdjecia.jpg"
          alt="Galleria fotografica nella scheda Google di un ristorante con foto dell'interno, dei piatti e del personale sorridente"
        />
      </div>

      {/* ── BANNER NEWSLETTER — larghezza piena ── */}
      <NewsletterBlogBanner locale="it" />

      {/* ── SEZIONE 4 ── */}
      <div className={P}>
        <h2
          id="segnali-ranking"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Cosa influisce sulla posizione su Google Maps?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La tua posizione su Google Maps non è casuale. L'algoritmo locale la calcola sulla base
          di decine di segnali, ma tre gruppi hanno maggiore importanza. Capire la loro gerarchia
          ti permette di concentrare gli sforzi sulle azioni che producono davvero risultati,
          invece di sprecare tempo in modifiche cosmetiche.
        </p>

        <h3
          id="tre-segnali"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          I tre principali segnali di ranking di Google
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>1. Pertinenza</strong> — quanto il profilo risponde alla ricerca del cliente.
          Qui contano: completezza del profilo, scelta della categoria, parole chiave nella
          descrizione e risposte nella sezione Domande e risposte. Le attività che usano
          naturalmente il linguaggio dei propri clienti nei post e nelle descrizioni vincono
          costantemente questo segnale.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>2. Distanza</strong> — quanto dista l'attività dall'utente o dal luogo indicato
          nella ricerca. Non puoi modificare direttamente questo fattore, ma puoi definire con
          precisione la tua area di servizio se sei un'attività mobile o operi in più quartieri.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>3. Notorietà</strong> (in inglese prominence) — quanto è conosciuta l'attività
          online. Questo segnale è costruito da: numero e qualità delle recensioni Google, link al
          tuo sito da fonti esterne, attività del profilo e menzioni in directory locali (ad es.
          Tripadvisor, TheFork). Le recensioni Google sono il fattore diretto chiave — per saperne
          di più su come raccogliere recensioni, leggi il nostro articolo su{" "}
          <Link href="/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">
            come ottenere rapidamente recensioni su Google
          </Link>
          .
        </p>

        <h3
          id="attivita-profilo"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come aggiornare il profilo regolarmente?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Google premia i profili attivi. Gli aggiornamenti regolari segnalano che l'attività è
          operativa e cura la propria presenza online. In pratica basta creare un ritmo semplice:
          una foto a settimana, un post con un'offerta o un aggiornamento ogni due settimane, una
          revisione mensile di orari e attributi. Non si tratta della quantità di contenuti, ma
          della loro regolarità — un profilo che tace per tre mesi perde posizioni a favore di un
          concorrente che pubblica con modestia ma costanza.
        </p>
      </div>

      {/* ── TRANSIZIONE 4→5 ── */}
      <SectionDivider quote="L'algoritmo di Google premia l'attività — una scheda che aggiorni lavora per te ventiquattro ore su ventiquattro." />

      {/* ── SEZIONE 5 ── */}
      <div className={P}>
        <h2
          id="post-aggiornamenti"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Post e aggiornamenti — come mantenere la scheda attiva?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          I post su Google Business Profile sono brevi aggiornamenti visibili direttamente nel
          pannello delle informazioni aziendali — proprio sotto la foto e la valutazione. Puoi
          condividere notizie, offerte, eventi e prodotti. La maggior parte dei titolari di attività
          locali non usa affatto questa funzione, il che la rende un vantaggio facile sui
          concorrenti. Un post scade dopo sette giorni (le offerte hanno una durata propria),
          quindi pubblicare regolarmente non è opzionale — è necessario se vuoi che questo elemento
          rimanga visibile.
        </p>

        <h3
          id="frequenza-post"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Con quale frequenza pubblicare post su Google Business Profile?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          L'ottimale per la maggior parte delle attività locali è un post a settimana. È sufficiente
          per tenere sempre la sezione post piena di contenuti attuali. Se gestisci un'attività
          gastronomica, pubblica il menu del giorno o i piatti del weekend — i clienti cercano
          esattamente queste informazioni poco prima di decidere dove mangiare. Un salone di
          bellezza può pubblicare gli appuntamenti disponibili o le promozioni in corso. Una clinica
          può condividere consigli sulla salute o informazioni su nuovi trattamenti. Il contenuto
          deve essere utile, non puramente promozionale.
        </p>

        <h3
          id="contenuto-post"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quali contenuti coinvolgono meglio i clienti locali?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          I post più efficaci rispondono a una domanda o a un bisogno specifico in un dato momento.
          Alcuni formati collaudati nel marketing locale:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Offerta a tempo</strong> — "20% di sconto sui trattamenti fino a venerdì" con un pulsante "Prenota ora".</li>
          <li><strong>Novità nell'offerta</strong> — un nuovo piatto, trattamento o prodotto con foto.</li>
          <li><strong>Informazione pratica</strong> — cambio di orari, chiusura temporanea, info sul parcheggio.</li>
          <li><strong>Dietro le quinte</strong> — anniversario, premio di settore, nuovo membro del team.</li>
          <li><strong>Domanda ai clienti</strong> — "Quale variante preferisci?" — aumenta il coinvolgimento.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Aggiungi una foto a ogni post — i post con immagini generano molte più visualizzazioni
          rispetto ai soli testi. Usa i pulsanti di chiamata all'azione: "Chiama", "Prenota",
          "Scopri di più", "Ordina online". Ogni clic su un pulsante è un segnale di coinvolgimento
          che influisce sulla posizione del profilo.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/posty.jpg"
          alt="Schermo di smartphone con un post attuale nel profilo Google Business di un ristorante con una promozione settimanale"
        />
      </div>

      {/* ── RIEPILOGO ── */}
      <div className={P}>
        <section
          id="riepilogo"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — una scheda che lavora davvero
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Un profilo Google Business ben ottimizzato non è un progetto una tantum — è un processo
            continuativo. Lo configuri una volta, ma lo ottimizzi costantemente: compili gli
            attributi, aggiungi foto, pubblichi post, rispondi alle recensioni e alle domande. Le
            attività che trattano il proprio profilo come un canale di comunicazione vivo superano
            sistematicamente i concorrenti nei risultati locali. Raccogliere recensioni su Google è
            parte inscindibile di questo lavoro — più recensioni recenti hai, più forte è il
            segnale di notorietà per l'algoritmo. Se vuoi automatizzare questo processo, scopri
            come funziona il{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              supporto NFC Starlinkee
            </Link>
            {" "}— il cliente avvicina il telefono e accede direttamente al modulo di recensione,
            senza cercare nulla.
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
                Google Business Profile è gratuito?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Sì, creare e gestire un profilo Google Business è completamente gratuito. Google
                non addebita nulla per mostrare la tua attività nei risultati locali né per
                l'utilizzo di post, foto e risposte alle recensioni.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Quanto tempo richiede la verifica della scheda Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                La verifica tramite cartolina richiede solitamente 5–14 giorni lavorativi. Se è
                disponibile la verifica via SMS o la verifica istantanea, puoi attivare il profilo
                in pochi minuti. Una volta completata la verifica, il profilo appare pubblicamente
                nei risultati di ricerca.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Con quale frequenza dovrei aggiornare il mio profilo Google Business?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Il minimo è un post a settimana e una revisione degli orari di apertura ogni mese.
                Le foto andrebbero aggiornate almeno ogni trimestre. Dopo qualsiasi modifica
                all'offerta o agli orari, aggiorna il profilo immediatamente — le informazioni
                obsolete scoraggiano i clienti e portano a recensioni negative.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Posso aggiungere parole chiave al nome dell'attività su Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. Google richiede che il nome nella scheda corrisponda al nome reale dell'attività.
                Aggiungere parole chiave al nome (ad es. "Parrucchiere Maria — salone Milano")
                viola le linee guida e può comportare la sospensione del profilo o una penalità
                nel ranking.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Vale la pena rispondere a tutte le recensioni — anche quelle positive?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Sì. Rispondere alle recensioni (sia positive che negative) è un segnale di
                coinvolgimento che Google considera nella valutazione dell'attività del profilo.
                Una risposta breve e personalizzata a una recensione positiva rafforza anche la
                fedeltà dei clienti e incoraggia gli altri a lasciare il proprio feedback.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
