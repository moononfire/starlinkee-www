import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";
export default function SmsMarketingDlaLokaluEn() {
  return (
    <>
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Most venues own something no advert can buy: a list of people who have already been there and liked it. The trouble is that this list usually lives only in the staff&apos;s heads. A guest leaves happy, and nothing makes them come back to you rather than the place next door. SMS is one of the simplest ways to change that: a short message that lands in a pocket just as someone is deciding where to eat today.
        </p>

        <nav
          aria-label="Table of contents"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Table of contents:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#dlaczego-sms" className="text-blue-600 hover:underline">
                1. Why does SMS still work in hospitality?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-czytany" className="text-blue-600 hover:underline">
                    1.1. Why is an SMS read more often than most emails?
                  </a>
                </li>
                <li>
                  <a href="#sms-przeszkadza" className="text-blue-600 hover:underline">
                    1.2. When does an SMS annoy instead of help?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#zgoda" className="text-blue-600 hover:underline">
                2. Where do you get phone numbers legally and without tricks?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#zbieranie-zgody" className="text-blue-600 hover:underline">
                    2.1. How do you collect marketing consent when a guest scans the NFC stand?
                  </a>
                </li>
                <li>
                  <a href="#rodo" className="text-blue-600 hover:underline">
                    2.2. What should you keep in mind about GDPR?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#co-wysylac" className="text-blue-600 hover:underline">
                3. What should you send so guests want to come back?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#jaki-kupon" className="text-blue-600 hover:underline">
                    3.1. Which coupon works in a restaurant or café?
                  </a>
                </li>
                <li>
                  <a href="#kiedy-wysylac" className="text-blue-600 hover:underline">
                    3.2. When and how often should you send messages?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#oplaca-sie" className="text-blue-600 hover:underline">
                4. How do you check whether your SMS messages pay off?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#co-mierzyc" className="text-blue-600 hover:underline">
                    4.1. What is worth measuring, and what can you skip?
                  </a>
                </li>
                <li>
                  <a href="#sms-opinie-lojalnosc" className="text-blue-600 hover:underline">
                    4.2. How do you combine SMS with reviews and a loyalty card?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#podsumowanie" className="text-blue-600 hover:underline">
                5. Summary — how to send SMS messages that bring guests back?
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
          id="dlaczego-sms"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          Why does SMS still work in hospitality?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hospitality lives on repeat business. A guest who has visited once has already taken the hardest step: they walked in and saw what you are like. A second visit costs far less than winning a new customer, and an SMS lets you simply ask for it.
        </p>

        <h3
          id="sms-czytany"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Why is an SMS read more often than most emails?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          An SMS arrives on a screen the guest is already holding, and it does not compete with a hundred other notifications like an inbox does. It is also short, so reading it takes seconds. For a venue that matters, because the decision about where to eat is often made on the spot, and a message with a coupon can tip it your way.
        </p>

        <h3
          id="sms-przeszkadza"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          When does an SMS annoy instead of help?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          It annoys when it comes too often, offers nothing, or reaches someone who never asked for it. One message a week with a concrete offer earns goodwill. A daily “come and see us” gets guests to unsubscribe or, worse, to steer clear of your venue.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/sms.webp"
          alt="A smiling customer walks into a café with a phone in her hand"
        />
      </div>

      <SectionDivider quote="The cheapest guest is the one who has already been to your place. You only need to remind them it is worth coming back." />

      <div className={P}>
        <h2
          id="zgoda"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Where do you get phone numbers legally and without tricks?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Phone numbers are personal data, so they must be collected honestly. The good news: if you do it at a moment when the guest is holding their phone anyway, it takes a few seconds and needs no tricks.
        </p>

        <h3
          id="zbieranie-zgody"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How do you collect marketing consent when a guest scans the NFC stand?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The easiest time is the same moment the guest scans the NFC stand: after scanning they can leave a phone number and tick consent for coupon messages. They do not download anything or create an account, and you immediately have a number tied to informed consent. You can read more about how such a stand works in the guide to <Link href="/blog/how-to-get-google-reviews-fast" className="text-blue-600 hover:underline">getting Google reviews fast</Link>.
        </p>

        <h3
          id="rodo"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          What should you keep in mind about GDPR?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Marketing consent should be voluntary, separate and clearly worded: the guest should know what they agree to and that they can opt out. Do not buy ready-made lists and do not add people who asked for nothing, because that is the shortest route to problems and complaints. If you are unsure about the details, check them with a lawyer or a data-protection specialist.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji/hero.webp"
          alt="A barista hands a coffee to a smiling guest at a café counter"
        />
      </div>

      <NewsletterBlogBanner locale="en" />

      <div className={P}>
        <h2
          id="co-wysylac"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          What should you send so guests want to come back?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SMS is only a channel; what decides its effect is what you write. A message should be short, specific and worth something to the guest, or it will quickly be ignored.
        </p>

        <h3
          id="jaki-kupon"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Which coupon works in a restaurant or café?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Simple, clear offers work best: a dessert or a coffee with an order, a lunch discount on a day when the venue is quieter, or a small gesture for regulars. A coupon should have a clear condition and an expiry date, so the guest knows it is worth using soon.
        </p>

        <h3
          id="kiedy-wysylac"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          When and how often should you send messages?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          One message a week is usually enough, and often even less. The best days and hours are the ones when you have empty tables: a coupon for a Tuesday afternoon makes sense, while one for a Friday evening, when you are full anyway, is just lost margin. The Starlinkee Pro plan includes 100 marketing SMS a month, which at a sensible pace is plenty for a small venue.
        </p>
      </div>

      <SectionDivider quote="A good SMS sounds like a message from someone you know, not like an ad from a noticeboard." />

      <div className={P}>
        <h2
          id="oplaca-sie"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          How do you check whether your SMS messages pay off?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          SMS marketing does not have to be complicated, but it helps to know whether it does what you started it for. The good news: two or three simple numbers are enough to judge it.
        </p>

        <h3
          id="co-mierzyc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          What is worth measuring, and what can you skip?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Three things are enough: how many people used the coupon, how many guests came back after the message, and how many unsubscribed. You can happily skip the rest, such as open rates or elaborate charts, because for a single venue they matter little. Just check whether Tuesdays are busier than before.
        </p>

        <h3
          id="sms-opinie-lojalnosc"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How do you combine SMS with reviews and a loyalty card?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          SMS works best as part of a whole: the NFC stand collects reviews and numbers, SMS reminds guests you exist, and a digital loyalty card gives a reason to visit again. How to build such a system without an app is described in the article on a <Link href="/blog/loyalty-program-without-an-app-how-to-build-customer-loyalty" className="text-blue-600 hover:underline">loyalty program without an app</Link>. And if you want to read more about reviews in hospitality, see our text on <Link href="/blog/google-reviews-restaurants-cafes-how-to-get-more-reviews" className="text-blue-600 hover:underline">Google reviews for restaurants and cafés</Link>.
        </p>
      </div>

      <div className={P}>
        <section
          id="podsumowanie"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary — how to send SMS messages that bring guests back?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SMS marketing works in hospitality when it is rare, specific and based on consent. The best time to collect numbers is when a guest scans the NFC stand, together with clear marketing consent, and the message should offer something that makes sense for both the guest and the venue: a dessert, a coffee or a discount on a quieter day. A few simple numbers are enough to judge it, and the biggest effect comes from combining SMS with Google reviews and a loyalty card.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Frequently asked questions
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How many SMS a month can I send guests without putting them off?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                For most venues one message a week is enough, often less. More important than the number is that every SMS carries a concrete offer and an expiry date.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Can I text everyone who once left a phone number?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Only people who gave marketing consent and can withdraw it. A number given on another occasion, such as a booking, is not automatically consent to advertising.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How do I collect phone numbers without an awkward question at the till?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                With an NFC stand: the guest scans it with their phone, leaves a number and ticks consent, and staff do not have to ask anything.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Which coupon works best in a restaurant or café?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                A simple, specific one: a dessert or a coffee with an order, or a lunch discount on a day with fewer guests. It helps to give it an expiry date.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Will SMS replace a loyalty card or Google reviews?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No, they complement each other. Reviews attract new guests, a loyalty card gives a reason to return, and SMS reminds people of your venue at the right moment.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
