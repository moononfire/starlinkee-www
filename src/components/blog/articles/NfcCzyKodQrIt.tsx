import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function NfcCzyKodQrIt() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Quando un locale vuole raccogliere recensioni o contatti dei clienti, arriva sempre la stessa domanda: targhetta NFC o codice QR? Entrambi portano l&apos;ospite allo stesso indirizzo, ma cambia il modo di usarli, l&apos;aspetto sul tavolo e cosa succede quando qualcosa non va. Ecco un confronto senza fronzoli, così puoi scegliere ciò che si adatta al tuo locale.
        </p>

        <nav
          aria-label="Indice"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Indice:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#roznica" className="text-blue-600 hover:underline">
                1. In cosa una targhetta NFC si differenzia da un codice QR?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jak-dziala-nfc" className="text-blue-600 hover:underline">
                    1.1. Come funziona una targhetta NFC?
                  </a>
                </li>
                <li>
                  <a href="#jak-dziala-qr" className="text-blue-600 hover:underline">
                    1.2. Come funziona un codice QR?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-goscia" className="text-blue-600 hover:underline">
                2. Cosa è più comodo per l&apos;ospite?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#liczba-krokow" className="text-blue-600 hover:underline">
                    2.1. Quanti passaggi deve fare l&apos;ospite?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-zawodzi" className="text-blue-600 hover:underline">
                    2.2. Quando ognuno dei due non funziona?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-lokalu" className="text-blue-600 hover:underline">
                3. Cosa è più comodo per il titolare?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wyglad-trwalosc" className="text-blue-600 hover:underline">
                    3.1. Aspetto e durata
                  </a>
                </li>
                <li>
                  <a href="#koszt-zmiany" className="text-blue-600 hover:underline">
                    3.2. Costo e possibilità di modifica
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wybrac" className="text-blue-600 hover:underline">
                4. Cosa scegliere: NFC, QR o entrambi?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#oba-naraz" className="text-blue-600 hover:underline">
                    4.1. Perché avere entrambi è meglio
                  </a>
                </li>
                <li>
                  <a href="#gdzie-postawic" className="text-blue-600 hover:underline">
                    4.2. Dove mettere la targhetta?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Riepilogo — NFC o QR?
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
          id="roznica"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          In cosa una targhetta NFC si differenzia da un codice QR?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Tecnicamente fanno la stessa cosa: portano il telefono dell&apos;ospite a un indirizzo web. La differenza è come l&apos;ospite lo avvia.
        </p>

        <h3
          id="jak-dziala-nfc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come funziona una targhetta NFC?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nella targhetta NFC c&apos;è un piccolo chip. Quando l&apos;ospite avvicina il telefono, il telefono legge l&apos;indirizzo e apre la pagina da solo, senza fotocamera e senza app. Basta avvicinare e aspettare un secondo.
        </p>

        <h3
          id="jak-dziala-qr"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Come funziona un codice QR?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Il codice QR è un disegno che l&apos;ospite inquadra con la fotocamera. Il telefono lo riconosce e propone di aprire il link. Funziona su quasi ogni smartphone con fotocamera, ma richiede qualche gesto in più: aprire la fotocamera, inquadrare, toccare il suggerimento.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="Conto su una cartellina, una tazza di caffè e uno smartphone su un tavolo di cemento in un bar"
        />
      </div>

      <SectionDivider quote="La soluzione migliore è quella che l'ospite avvia senza pensarci." />

      <div className={P}>
        <h2
          id="dla-goscia"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Cosa è più comodo per l&apos;ospite?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;ospite non pensa alla tecnologia, ma a se ci vuole un attimo. Per questo conviene guardare le cose dal suo lato del tavolo.
        </p>

        <h3
          id="liczba-krokow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quanti passaggi deve fare l&apos;ospite?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Con l&apos;NFC è un gesto: avvicinare il telefono. Con il QR bisogna sbloccare il telefono, aprire la fotocamera, inquadrare e toccare il link. Per molti non è un problema, ma ogni passaggio in più è un&apos;occasione per rinunciare, soprattutto con un caffè o un bambino nell&apos;altra mano.
        </p>

        <h3
          id="kiedy-zawodzi"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Quando ognuno dei due non funziona?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          L&apos;NFC non funziona se il telefono non ce l&apos;ha o l&apos;ha disattivato, e alcune custodie spesse possono indebolirlo. Il QR non funziona se il codice è graffiato, mal illuminato o stampato troppo piccolo. Per questo è utile dare all&apos;ospite una scelta. Per saperne di più su come invitare gli ospiti a lasciare una recensione, leggi la guida su <Link href="/it/blog/come-ottenere-recensioni-google-velocemente" className="text-blue-600 hover:underline">come ottenere recensioni Google velocemente</Link>.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="Un cliente con lo smartphone accanto al terminale di pagamento su un bancone di legno"
        />
      </div>

      <NewsletterBlogBanner locale="it" />

      <div className={P}>
        <h2
          id="dla-lokalu"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Cosa è più comodo per il titolare?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Per te contano anche l&apos;aspetto nel locale, quanto dura e quanto lavoro serve quando c&apos;è qualcosa da cambiare.
        </p>

        <h3
          id="wyglad-trwalosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Aspetto e durata
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Il codice QR di solito finisce su un adesivo o un foglio stampato che col tempo si consuma, si sporca e si stacca. Una targhetta dura di più e sembra parte dell&apos;arredo, non un avviso provvisorio. Per un locale attento ai tavoli, conta.
        </p>

        <h3
          id="koszt-zmiany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Costo e possibilità di modifica
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Un codice QR stampato non si può cambiare: se l&apos;indirizzo cambia, si ristampa. La targhetta porta a una pagina il cui contenuto puoi modificare, quindi cambi coupon, menu o link alla recensione senza sostituirla. Lo stesso vale per il codice sulla targhetta, se porta a quella stessa pagina.
        </p>
      </div>

      <SectionDivider quote="Una targhetta, due strade: avvicina il telefono o inquadra il codice." />

      <div className={P}>
        <h2
          id="co-wybrac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Cosa scegliere: NFC, QR o entrambi?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Non devi sceglierne uno solo. In pratica la soluzione più comoda è offrire entrambe le strade e lasciare che ognuno usi quella che preferisce.
        </p>

        <h3
          id="oba-naraz"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Perché avere entrambi è meglio
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gli ospiti sono diversi. Alcuni avvicinano subito il telefono, altri preferiscono inquadrare un codice, e qualcuno non sa nemmeno che l&apos;NFC esista. Una targhetta con entrambe le opzioni e una breve scritta come «Avvicina il telefono o inquadra il codice» serve tutti e non richiede spiegazioni.
        </p>

        <h3
          id="gdzie-postawic"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Dove mettere la targhetta?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Il posto migliore è quello che l&apos;ospite vede senza cercare: sul tavolo, vicino alla cassa o sul bancone, all&apos;altezza degli occhi o a portata di mano. La targhetta deve stare ferma e non dare fastidio mentre si mangia. Su quando chiedere una recensione, leggi l&apos;articolo sulle <Link href="/it/blog/recensioni-google-ristorante-bar-come-ottenere-piu-recensioni" className="text-blue-600 hover:underline">recensioni Google per ristoranti e bar</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riepilogo — NFC o QR?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L&apos;NFC è più rapido e comodo, il QR funziona su ogni telefono. La scelta migliore è unire entrambi su una targhetta, metterla dove gli ospiti la notano e indirizzarla a una pagina che puoi cambiare senza ristampare. Quando gli ospiti la usano, puoi raccogliere recensioni Google o costruire un &#123;L:loy|programma fedeltà senza app&#125;.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Domande frequenti
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Serve un&apos;app per la targhetta NFC?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. L&apos;ospite avvicina il telefono e la pagina si apre nel browser. Non deve scaricare nulla né creare un account.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                L&apos;NFC funziona sugli iPhone?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Gli iPhone più recenti leggono le targhette NFC senza passaggi aggiuntivi. Sui modelli più vecchi è meglio avere accanto un codice QR come seconda opzione.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                E se l&apos;ospite non ha l&apos;NFC o non sa come usarlo?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Inquadrerà il codice QR. Per questo la targhetta dovrebbe avere entrambi e una breve scritta che spiega cosa fare.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Posso cambiare dove porta il codice QR sulla targhetta?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Se la targhetta porta a una pagina che modifichi, cambi la pagina, non il codice stesso. La targhetta resta com&apos;è.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Dove conviene mettere la targhetta nel locale?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Dove l&apos;ospite ha un momento libero e la vede subito: sul tavolo, vicino alla cassa o sul bancone. Evita i posti dove qualcosa potrebbe coprirla.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
