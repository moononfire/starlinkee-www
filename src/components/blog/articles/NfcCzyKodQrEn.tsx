import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function NfcCzyKodQrEn() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          When a venue wants to collect reviews or guest contacts, the same question comes up: an NFC plate or a QR code? Both send the guest to the same address, but they differ in how they are used, how they look on a table and what happens when something goes wrong. Here is a plain comparison, so you can pick what suits your place.
        </p>

        <nav
          aria-label="Table of contents"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Table of contents:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#roznica" className="text-blue-600 hover:underline">
                1. How does an NFC plate differ from a QR code?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jak-dziala-nfc" className="text-blue-600 hover:underline">
                    1.1. How does an NFC plate work?
                  </a>
                </li>
                <li>
                  <a href="#jak-dziala-qr" className="text-blue-600 hover:underline">
                    1.2. How does a QR code work?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-goscia" className="text-blue-600 hover:underline">
                2. Which is easier for the guest?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#liczba-krokow" className="text-blue-600 hover:underline">
                    2.1. How many steps does the guest take?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-zawodzi" className="text-blue-600 hover:underline">
                    2.2. When does each one fail?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#dla-lokalu" className="text-blue-600 hover:underline">
                3. Which is easier for the owner?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#wyglad-trwalosc" className="text-blue-600 hover:underline">
                    3.1. Looks and durability
                  </a>
                </li>
                <li>
                  <a href="#koszt-zmiany" className="text-blue-600 hover:underline">
                    3.2. Cost and flexibility
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wybrac" className="text-blue-600 hover:underline">
                4. What to choose: NFC, QR or both?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#oba-naraz" className="text-blue-600 hover:underline">
                    4.1. Why having both works best
                  </a>
                </li>
                <li>
                  <a href="#gdzie-postawic" className="text-blue-600 hover:underline">
                    4.2. Where to put the plate?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Summary — NFC or QR?
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                6. FAQ — Frequently asked questions
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
          How does an NFC plate differ from a QR code?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Technically both do the same thing: they send the guest&apos;s phone to a web address. The difference is how the guest starts it.
        </p>

        <h3
          id="jak-dziala-nfc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How does an NFC plate work?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          An NFC plate contains a small chip. When a guest holds their phone to it, the phone reads the address and opens the page by itself, with no camera and no app. Hold it for a second and it opens.
        </p>

        <h3
          id="jak-dziala-qr"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How does a QR code work?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          A QR code is a pattern the guest scans with the camera. The phone recognises it and offers to open the link. It works on almost any smartphone with a camera, but it takes a few more moves: open the camera, aim, tap the suggestion.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/restauracja.webp"
          alt="A bill on a clipboard, a cup of coffee and a smartphone on a concrete café table"
        />
      </div>

      <SectionDivider quote="The best solution is the one a guest starts without thinking." />

      <div className={P}>
        <h2
          id="dla-goscia"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Which is easier for the guest?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Guests don&apos;t think about technology, only about whether it takes a moment. So it helps to look at it from their side of the table.
        </p>

        <h3
          id="liczba-krokow"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How many steps does the guest take?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          With NFC it is one move: hold the phone to the plate. With QR the guest has to unlock the phone, open the camera, aim and tap the link. For many people that is fine, but every extra step is a chance the guest gives up, especially with a coffee or a child in the other hand.
        </p>

        <h3
          id="kiedy-zawodzi"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          When does each one fail?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          NFC won&apos;t work if the phone lacks it or has it switched off, and some thick cases can weaken it. QR fails when the code is scratched, badly lit or printed too small. That is why it helps to give guests a choice. For more on getting guests to leave a review, see our guide to <Link href="/blog/how-to-get-google-reviews-fast" className="text-blue-600 hover:underline">getting Google reviews fast</Link>.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-szybko-zdobyc-opinie/nfc.webp"
          alt="A customer holding a smartphone next to a payment terminal on a wooden counter"
        />
      </div>

      <NewsletterBlogBanner locale="en" />

      <div className={P}>
        <h2
          id="dla-lokalu"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Which is easier for the owner?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          For you it also matters how it looks in the venue, how long it lasts and how much work it takes when something needs to change.
        </p>

        <h3
          id="wyglad-trwalosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Looks and durability
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A QR code usually ends up on a printed sticker or sheet that wears out, gets dirty and peels off over time. A plate lasts longer and looks like part of the decor rather than a temporary note. For a venue that cares about its tables, that matters.
        </p>

        <h3
          id="koszt-zmiany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Cost and flexibility
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          A printed QR code can&apos;t be changed: if the address changes, you reprint. A plate leads to a page whose content you can edit, so you change a coupon, a menu or a review link without replacing the plate. The same goes for the code on the plate if it leads to that same page.
        </p>
      </div>

      <SectionDivider quote="One plate, two ways in: tap the phone or scan the code." />

      <div className={P}>
        <h2
          id="co-wybrac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          What to choose: NFC, QR or both?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You don&apos;t have to pick just one. In practice the easiest way is to give guests both routes and let each one use the one they prefer.
        </p>

        <h3
          id="oba-naraz"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Why having both works best
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Guests differ. Some tap their phone straight away, others prefer to scan a code, and some don&apos;t know NFC exists. A plate with both options and a short line such as “Tap your phone or scan the code” serves everyone and needs no explaining.
        </p>

        <h3
          id="gdzie-postawic"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Where to put the plate?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          The best spot is one the guest sees without looking: on the table, by the till or on the counter, at eye level or within reach. Make sure the plate stands steady and doesn&apos;t get in the way of eating. On when to ask for a review, see our article on <Link href="/blog/google-reviews-restaurants-cafes-how-to-get-more-reviews" className="text-blue-600 hover:underline">Google reviews for restaurants and cafés</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary — NFC or QR?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NFC is faster and more convenient, while QR works on every phone. The best choice is to combine both on one plate, put it where guests will notice it and point it to a page you can change without reprinting. Once guests use it, you can collect Google reviews or build a &#123;L:loy|loyalty program without an app&#125;.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Frequently asked questions
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Does an NFC plate need an app?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. The guest taps their phone and the page opens in the browser. There is nothing to download and no account to create.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Does NFC work on iPhones?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Newer iPhones read NFC plates with no extra steps. On older models it is better to have a QR code next to it as a second option.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                What if the guest has no NFC or doesn&apos;t know how to use it?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                They scan the QR code instead. That is why a plate should have both and a short line that tells them what to do.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Can I change where the QR code on the plate leads?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                If the plate leads to a page you edit, you change the page, not the code itself. The plate stays as it is.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Where should I put the plate in my venue?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Where the guest has a free moment and sees it right away: on the table, by the till or on the counter. Avoid spots where something might block it.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
