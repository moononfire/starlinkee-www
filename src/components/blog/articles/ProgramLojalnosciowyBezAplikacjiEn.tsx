import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function ProgramLojalnosciowyBezAplikacjiEn() {
  return (
    <>
      {/* ── LEAD + TABLE OF CONTENTS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Acquiring a new customer costs on average five times more than keeping an existing one,
          yet most local businesses have no system that rewards a return visit. A paper card gets
          lost in a wallet, and a mobile app requires a download, an account, and a notifications
          opt-in — three barriers that turn away most customers before they ever reach the first
          reward. This article shows you how to build a loyalty program that works without paper
          and without an app, while also boosting your Google reviews and marketing contact list.
        </p>

        <nav
          aria-label="Table of contents"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Table of contents:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#why-loyalty" className="text-blue-600 hover:underline">
                1. Why invest in returning customers?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#cost-of-loss" className="text-blue-600 hover:underline">
                    1.1. What does losing a loyal customer really cost?
                  </a>
                </li>
                <li>
                  <a href="#why-apps-fail" className="text-blue-600 hover:underline">
                    1.2. Why do loyalty apps usually fail?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#how-nfc-card-works" className="text-blue-600 hover:underline">
                2. How does a digital loyalty card without an app work?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#technology" className="text-blue-600 hover:underline">
                    2.1. NFC technology in practice
                  </a>
                </li>
                <li>
                  <a href="#customer-journey" className="text-blue-600 hover:underline">
                    2.2. The customer journey, step by step
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#how-to-design" className="text-blue-600 hover:underline">
                3. How to design an effective loyalty program
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#reward-threshold" className="text-blue-600 hover:underline">
                    3.1. Reward threshold and visit frequency
                  </a>
                </li>
                <li>
                  <a href="#threshold-examples" className="text-blue-600 hover:underline">
                    3.2. Example reward thresholds by industry
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#loyalty-and-reviews" className="text-blue-600 hover:underline">
                4. Loyalty programs, SMS marketing, and Google reviews
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#sms-and-loyalty" className="text-blue-600 hover:underline">
                    4.1. How to combine loyalty with SMS coupons
                  </a>
                </li>
                <li>
                  <a href="#loyal-and-reviews" className="text-blue-600 hover:underline">
                    4.2. Why loyal customers leave more reviews
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#rollout" className="text-blue-600 hover:underline">
                5. How to roll out a loyalty program step by step
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#rollout-steps" className="text-blue-600 hover:underline">
                    5.1. Rollout steps
                  </a>
                </li>
                <li>
                  <a href="#rollout-mistakes" className="text-blue-600 hover:underline">
                    5.2. The most common rollout mistakes
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#summary" className="text-blue-600 hover:underline">
                6. Summary — loyalty without friction
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                7. FAQ — Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── SECTION 1 ── */}
      <div className={P}>
        <h2 id="why-loyalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Why invest in returning customers?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most local marketing budgets go toward acquiring new visitors — ads, first-visit
          promotions, social media presence. Yet customers who have already chosen your restaurant
          or salon once generate the largest share of revenue and, more importantly, are the most
          likely to recommend it further. A loyalty program turns an occasional return visit into
          a repeatable habit.
        </p>

        <h3 id="cost-of-loss" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          What does losing a loyal customer really cost?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Acquiring a new customer requires advertising, time spent building trust, and often a
          discounted first visit. A returning customer no longer generates those costs — yet most
          businesses do nothing to consciously keep them for longer. Without a system rewarding
          repeat visits, a customer is just as likely to switch to a competitor the moment they
          spot a better promotion.
        </p>

        <h3 id="why-apps-fail" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Why do loyalty apps usually fail?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A classic mobile app built for a single restaurant or salon has one flaw that can&apos;t
          be worked around: nobody wants to download a separate app for every business they visit
          occasionally. Downloading, registering, and accepting notifications are three barriers
          that lose most customers before they ever see the first benefit of the program. A paper
          card has the opposite problem — it gets lost, gets dirty, and gives you no data at all
          about who actually comes back, or how often.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji-hero.jpg"
          alt="Customer tapping her phone against an NFC stand on a café counter, adding another visit to her digital loyalty card"
        />
      </div>

      {/* ── SECTION 2 ── */}
      <div className={P}>
        <h2 id="how-nfc-card-works" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          How does a digital loyalty card without an app work?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A middle ground between paper and an app is a digital loyalty card built on
          near-field communication. The customer installs nothing — the entire interaction happens
          in the phone&apos;s browser, and visits are logged automatically with a single tap against
          an NFC stand at the till or front desk.
        </p>

        <h3 id="technology" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          NFC technology in practice
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          NFC (Near Field Communication) is the same contactless standard behind tap-to-pay card
          and phone payments. An NFC stand or sticker needs no power source — the customer simply
          holds their phone a few centimetres away, and the system opens the right page in their
          browser. No app, no Bluetooth pairing, no QR code to scan in poor lighting.
        </p>

        <h3 id="customer-journey" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          The customer journey, step by step
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>The customer taps their phone against the NFC stand at the till, counter, or front desk.</li>
          <li>The browser opens a page showing their digital card — no login, identified by phone number.</li>
          <li>The system logs another visit and shows how many are left until the reward.</li>
          <li>Once the threshold is reached, the customer gets an SMS notification about the reward.</li>
          <li>On the next visit, staff simply hand over the reward based on the number in the dashboard.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-6">
          The whole process takes the customer about a second — faster than digging a paper card
          out of a wallet. On the business side, every visit lands straight in the admin dashboard,
          where you can see visit history, the number of active cards, and each customer&apos;s
          progress toward their reward.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji-nfc.jpg"
          alt="Close-up of an NFC stand on a hair salon counter next to a phone displaying a digital loyalty card"
        />
      </div>

      {/* ── TRANSITION 2→3 ── */}
      <SectionDivider quote="A loyalty program that asks any effort of the customer stops working by the second visit." />

      {/* ── SECTION 3 ── */}
      <div className={P}>
        <h2 id="how-to-design" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          How to design an effective loyalty program
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Technology alone isn&apos;t enough — how effective a program is depends on how you set the
          reward threshold and how well you match it to the real visit frequency of your industry.
          Too high a threshold discourages customers; too low one generates no real margin or
          loyalty.
        </p>

        <h3 id="reward-threshold" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Reward threshold and visit frequency
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A good starting point is looking at how often an average customer visits your place in
          its natural cycle. A hair salon or barbershop visited every 4–6 weeks needs a different
          threshold than a café visited every morning. The rule is simple: the reward should be
          reachable within a reasonable time — from a few weeks up to two or three months at
          most — otherwise the customer forgets about the program before ever reaching the goal.
        </p>

        <h3 id="threshold-examples" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Example reward thresholds by industry
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Café:</strong> every 8th coffee free — reached in about two weeks with daily visits.</li>
          <li><strong>Restaurant:</strong> a free dessert or starter after 5 visits.</li>
          <li><strong>Hair salon / barbershop:</strong> 50% off every 6th haircut — matched to the natural visit cycle.</li>
          <li><strong>Beauty salon:</strong> one free maintenance treatment after 4 treatments.</li>
          <li><strong>Gym / fitness studio:</strong> a reward for a monthly streak, e.g. a free personal training session after 12 check-ins.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          More important than the reward&apos;s size is its simplicity — the customer should
          understand the rule instantly, without reading terms and conditions. &ldquo;Every 8th
          coffee free&rdquo; works better than a points system requiring conversion.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji-progi.jpg"
          alt="Admin dashboard screen showing reward thresholds and customer visit progress in a digital loyalty program"
        />
      </div>

      {/* ── FULL-WIDTH NEWSLETTER BANNER ── */}
      <NewsletterBlogBanner locale="en" />

      {/* ── SECTION 4 ── */}
      <div className={P}>
        <h2 id="loyalty-and-reviews" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          Loyalty programs, SMS marketing, and Google reviews
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A loyalty card based on a phone number has one more advantage over paper — every visit
          simultaneously builds a contact list you can use for further marketing. That&apos;s three
          things combined into one system: loyalty, promotion, and reputation.
        </p>

        <h3 id="sms-and-loyalty" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          How to combine loyalty with SMS coupons
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          When a customer collects visits on a digital card and consents to marketing contact under
          GDPR, their number enters a list you can use to send personalised SMS coupons. A customer
          who is one visit away from a reward but hasn&apos;t visited in three weeks is a natural
          target for a reminder with a small bonus — exactly when winning them back is easiest.
        </p>

        <h3 id="loyal-and-reviews" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Why loyal customers leave more reviews
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A customer who visits regularly and feels valued by the reward program is far more
          willing to spend ten seconds leaving a review than someone visiting once. That&apos;s why
          it&apos;s worth pairing the moment a visit is logged with a request for a rating — for
          example, when a reward is collected. That&apos;s exactly how the{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            Starlinkee NFC stand
          </Link>{" "}
          works: one device handles the loyalty card, the Google review form, and a filter that
          protects against unfair reviews, all at once. If you want to see how collecting reviews
          itself works step by step, check out our article on{" "}
          <Link href="/blog/how-to-get-google-reviews-fast" className="text-blue-600 hover:underline">
            how to get Google reviews fast
          </Link>
          . We&apos;ve also covered how to reply to those reviews — including the difficult ones —
          in our article on{" "}
          <Link href="/blog/how-to-respond-to-google-reviews" className="text-blue-600 hover:underline">
            how to respond to Google reviews
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji-sms.jpg"
          alt="Phone displaying an SMS discount coupon next to a notification about a reward earned in a digital loyalty card"
        />
      </div>

      {/* ── TRANSITION 4→5 ── */}
      <SectionDivider quote="Customer loyalty doesn't come from a discount — it comes from how easy it is to come back." />

      {/* ── SECTION 5 ── */}
      <div className={P}>
        <h2 id="rollout" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          How to roll out a loyalty program step by step
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rolling out a digital loyalty program at a local business doesn&apos;t require integrating
          with a point-of-sale system or a week of staff training. The whole process comes down to
          a handful of simple steps.
        </p>

        <h3 id="rollout-steps" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Rollout steps
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Set the reward threshold and type, matched to your natural visit frequency.</li>
          <li>Place the NFC stand somewhere visible — at the till, counter, or front desk.</li>
          <li>Brief staff to remind customers to tap their phone at every visit.</li>
          <li>Add a short note about the program on the table, in the window, or at the entrance.</li>
          <li>Monitor the admin dashboard to see how many customers are actively collecting visits, and respond with an SMS coupon when activity drops.</li>
        </ol>

        <h3 id="rollout-mistakes" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          The most common rollout mistakes
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Setting the reward threshold too high</strong> — customers give up before seeing any benefit.</li>
          <li><strong>No reminder from staff</strong> — customers quickly forget to tap their phone if nobody mentions it.</li>
          <li><strong>Overly complicated rules</strong> — a points system with conversions discourages more than a simple visit counter.</li>
          <li><strong>No visible information about the program</strong> — customers won&apos;t use something they don&apos;t know exists.</li>
          <li><strong>Ignoring the dashboard data</strong> — visit data alone won&apos;t boost loyalty if nobody reacts to a drop in activity with a coupon or reminder.</li>
        </ul>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/program-lojalnosciowy-bez-aplikacji-wdrozenie.jpg"
          alt="Restaurant owner setting up an NFC loyalty stand at the till and showing it to the first customer"
        />
      </div>

      {/* ── SUMMARY ── */}
      <div className={P}>
        <section
          id="summary"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary — loyalty without friction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customers don&apos;t drop out of loyalty programs because they don&apos;t want the
            reward — they drop out because the path to it is too much hassle. A paper card gets
            lost, an app requires a download, and neither gives you any data on who actually comes
            back. A digital NFC-based card removes that barrier: a single tap, zero installs, full
            visibility in the admin dashboard. If you want to combine visit tracking with Google
            reviews and SMS coupons in one system, see how the{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              Starlinkee NFC stand
            </Link>{" "}
            works, with a built-in digital loyalty card.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-24 mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ — Frequently asked questions
          </h2>
          <dl className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Does the customer need to download an app to use a digital loyalty card?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. The entire card works in the phone&apos;s browser after tapping it against the
                NFC stand — no install, no account, no password login.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                What reward threshold works best?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                One the customer reaches within a few weeks up to two or three months at most,
                matched to the natural visit frequency of your industry. A reward that&apos;s too
                far off loses its motivational power.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Can data collected through a loyalty program be used for SMS marketing?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Yes, provided you obtain GDPR-compliant marketing consent when collecting the phone
                number. Once granted, the number can be used to send coupons and program reminders.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Does a loyalty program work for salons and clinics too, not just restaurants?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Yes. It works anywhere a customer returns on a cycle — hair salons, barbershops,
                beauty clinics, gyms, or car workshops. The key is matching the reward threshold to
                the industry&apos;s real visit rhythm.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How is an NFC loyalty card different from a QR code?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                A QR code requires opening the camera, decent lighting, and aiming the phone, which
                can be awkward at the till. An NFC stand just needs a tap — it works in a fraction
                of a second and doesn&apos;t depend on scan quality.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
