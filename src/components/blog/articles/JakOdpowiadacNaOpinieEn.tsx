import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function JakOdpowiadacNaOpinieEn() {
  return (
    <>
      {/* ── LEAD + TABLE OF CONTENTS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Every Google review is a public conversation — read not just by you and the reviewer,
          but by hundreds of prospective customers still deciding whether to trust you. How you
          respond to praise, criticism, and reviews that feel unfair or outright fake determines
          whether your profile builds trust or destroys it. This article shows you how to respond
          to every type of review, when Google actually removes a review, and how to legally
          reduce the number of unfair ratings before they ever reach the web.
        </p>

        <nav
          aria-label="Table of contents"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Table of contents:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#why-it-matters" className="text-blue-600 hover:underline">
                1. Why responding to reviews matters for SEO and customers
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#algorithm-impact" className="text-blue-600 hover:underline">
                    1.1. How do replies affect the Google algorithm?
                  </a>
                </li>
                <li>
                  <a href="#what-others-see" className="text-blue-600 hover:underline">
                    1.2. What do other customers see when they read your replies?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#positive-reviews" className="text-blue-600 hover:underline">
                2. How to respond to positive reviews
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#reply-structure" className="text-blue-600 hover:underline">
                    2.1. The structure of a good reply
                  </a>
                </li>
                <li>
                  <a href="#positive-examples" className="text-blue-600 hover:underline">
                    2.2. Examples of replies to positive reviews
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#negative-reviews" className="text-blue-600 hover:underline">
                3. How to respond to negative reviews
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#negative-rules" className="text-blue-600 hover:underline">
                    3.1. Rules you must never break
                  </a>
                </li>
                <li>
                  <a href="#negative-examples" className="text-blue-600 hover:underline">
                    3.2. Examples of replies to difficult reviews
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#fake-reviews" className="text-blue-600 hover:underline">
                4. What to do about a fake or unfair review
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#when-google-removes" className="text-blue-600 hover:underline">
                    4.1. When will Google remove a review — and when won&apos;t it?
                  </a>
                </li>
                <li>
                  <a href="#how-to-report" className="text-blue-600 hover:underline">
                    4.2. How to report a review for removal, step by step
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#prevention" className="text-blue-600 hover:underline">
                5. How to prevent unfair reviews before they happen
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#review-gating" className="text-blue-600 hover:underline">
                    5.1. What is review gating and why is it banned?
                  </a>
                </li>
                <li>
                  <a href="#legal-filter" className="text-blue-600 hover:underline">
                    5.2. A legal review filter — how does it work in practice?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#summary" className="text-blue-600 hover:underline">
                6. Summary — replies that build trust
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
        <h2 id="why-it-matters" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          Why responding to reviews matters for SEO and customers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Many business owners treat the reviews section like a noticeboard they only check when
          something worrying pops up. In reality, replies to reviews are one of the few profile
          elements that simultaneously affect your local ranking and the buying decision of the
          specific customer reading your profile right now. Neglecting this section costs you
          twice — you lose SEO and you lose conversions.
        </p>

        <h3 id="algorithm-impact" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          How do replies affect the Google algorithm?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google explicitly lists responding to reviews as an element that builds a profile&apos;s
          prominence signal. Activity in this section shows the algorithm that the account is
          managed by a real business engaged with its customers — not an abandoned, unmanaged
          profile. The more replies containing natural, topical language tied to your industry and
          location, the stronger the relevance signal for local searches. It&apos;s just one of
          several elements that together build a profile&apos;s ranking — see the full list of
          ranking factors in our article on{" "}
          <Link href="/blog/google-business-profile-how-to-optimize" className="text-blue-600 hover:underline">
            how to optimise your Google Business Profile
          </Link>
          .
        </p>

        <h3 id="what-others-see" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          What do other customers see when they read your replies?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Before calling or booking, a customer browses a handful of recent reviews — and your
          replies underneath them. A calm, factual reaction to a difficult review builds more
          trust than five stars alone, because it shows how the business behaves under pressure.
          No reaction at all to a negative review reads as indifference toward the customer — even
          if the review itself wasn&apos;t entirely fair.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie/hero.webp"
          alt="Smiling business owner warmly greeting a customer at a café counter, cozy blurred interior in the background"
        />
      </div>

      {/* ── SECTION 2 ── */}
      <div className={P}>
        <h2 id="positive-reviews" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
          How to respond to positive reviews
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Positive reviews tempt you to reply with a single line — &ldquo;Thanks!&rdquo; — and move
          on. That&apos;s a mistake. A short, personalised reply takes a minute, naturally
          reinforces your business description with a few extra keywords, and shows that every
          voice counts, not just the critical ones.
        </p>

        <h3 id="reply-structure" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          The structure of a good reply
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A good reply to a positive review has four parts: a thank-you using the customer&apos;s
          name (if visible), a reference to a specific detail from the review, a brief reinforcement
          of what your business offers, and an invitation to return. The whole thing fits in two or
          three sentences.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Thank the customer by name if their profile shows one.</li>
          <li>Reference a detail from the review — a dish, a treatment, the service they mentioned.</li>
          <li>Weave in the service or location name naturally, never forced.</li>
          <li>Invite them to return or recommend you to friends.</li>
        </ol>

        <h3 id="positive-examples" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Examples of replies to positive reviews
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Restaurant:</strong> &ldquo;Thank you, Anna! We&apos;re thrilled you enjoyed the
          wild mushroom risotto — it&apos;s a firm favourite among our regulars. Do come back soon,
          maybe for our weekend brunch this time!&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Hair salon:</strong> &ldquo;Thanks so much for your review! We&apos;re glad the
          new colour met your expectations. See you in 6–8 weeks for your next touch-up!&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Dental practice:</strong> &ldquo;Thank you for your trust and kind words. Patient
          comfort during treatment is our priority — it&apos;s great to hear we delivered on that.
          See you at your next check-up!&rdquo;
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie/pozytywne.webp"
          alt="Delighted customer warmly shaking hands with a smiling business owner across the counter"
        />
      </div>

      {/* ── TRANSITION 2→3 ── */}
      <SectionDivider quote="Every reply under a review is written not just for one customer, but for everyone who will still read it." />

      {/* ── SECTION 3 ── */}
      <div className={P}>
        <h2 id="negative-reviews" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          How to respond to negative reviews
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A negative review stings — especially when it feels exaggerated. But how you react
          decides whether the incident is forgotten within a week or becomes evidence in the eyes
          of every future reader of your profile. A cool head and a concrete plan matter more than
          emotion.
        </p>

        <h3 id="negative-rules" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Rules you must never break
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Don&apos;t reply while emotional</strong> — wait a few hours and re-read the review with a clear head.</li>
          <li><strong>Don&apos;t argue in public</strong> — move the details of any dispute to a private message, email, or phone call.</li>
          <li><strong>Don&apos;t ignore reviews</strong> — silence reads as indifference to the customer&apos;s problem.</li>
          <li><strong>Don&apos;t copy-paste the same template</strong> under every negative review — customers notice, and trust suffers.</li>
          <li><strong>Don&apos;t admit fault you don&apos;t have</strong> — a factual explanation beats an empty apology.</li>
        </ul>

        <h3 id="negative-examples" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          Examples of replies to difficult reviews
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Complaint about wait times:</strong> &ldquo;We&apos;re sorry your dish didn&apos;t
          arrive as quickly as you expected — we had an unusually busy evening with a full house of
          reservations. We&apos;d love to discuss the details, please reach out at
          [phone/email]. We want your next visit to be completely different.&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>A review that seems unwarranted:</strong> &ldquo;Thank you for letting us know.
          After checking our schedule and booking history for the date and time mentioned, we
          couldn&apos;t find a record matching this experience. Please get in touch at [email] so
          we can clarify — we care about the accuracy of our profile.&rdquo;
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie/negatywne.webp"
          alt="Calm business owner attentively and patiently listening to a customer"
        />
      </div>

      {/* ── FULL-WIDTH NEWSLETTER BANNER ── */}
      <NewsletterBlogBanner locale="en" />

      {/* ── SECTION 4 ── */}
      <div className={P}>
        <h2 id="fake-reviews" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          What to do about a fake or unfair review
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Not every hurtful review qualifies for removal. Google removes reviews only when they
          violate specific policy rules — not simply because you dislike them or because they are
          unflattering yet truthful. Telling these two situations apart saves time and frustration.
        </p>

        <h3 id="when-google-removes" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          When will Google remove a review — and when won&apos;t it?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google generally acts on a report when a review contains: hate speech or profanity,
          content unrelated to a real customer experience (spam, a competitor&apos;s advert), a
          conflict of interest (a review from a former employee or competitor), third-party
          personal data, or when it comes from an account that never had any contact with the
          business.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google will not remove a review just because it&apos;s negative, because you disagree
          with the account of events, or because the customer had — in your opinion — unreasonable
          expectations. A genuine, if unflattering, customer experience stays on the profile even
          after a report.
        </p>

        <h3 id="how-to-report" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          How to report a review for removal, step by step
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-2">
          <li>Open your business listing on Google Maps or in Search.</li>
          <li>Find the review in question and click the three-dot icon next to it.</li>
          <li>Select &ldquo;Report review&rdquo; and choose the closest matching policy violation.</li>
          <li>Describe briefly and factually why the review violates the guidelines — no emotion, just facts.</li>
          <li>If there&apos;s no response after a few days, escalate through Google Business Profile support or the Google help form.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-8">
          Review time varies — from a few days to several weeks. Be patient, and don&apos;t remove
          your own reply under the review in the meantime — even if it&apos;s eventually taken
          down, your factual response stays visible to anyone who reads it before then.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie/zgloszenie.webp"
          alt="Focused business owner reviewing documents at a desk, serious and attentive expression"
        />
      </div>

      {/* ── TRANSITION 4→5 ── */}
      <SectionDivider quote="The best response to an unfair review is a system that makes sure it rarely appears in the first place." />

      {/* ── SECTION 5 ── */}
      <div className={P}>
        <h2 id="prevention" className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24">
          How to prevent unfair reviews before they happen
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Responding to difficult reviews matters, but reducing their number at the source is even
          more effective. The goal is that a minor incident — a cold soup, a five-minute delay —
          doesn&apos;t immediately end up as one star on Google, but reaches you first, before it
          ever reaches the web.
        </p>

        <h3 id="review-gating" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          What is review gating and why is it banned?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Review gating is the practice of asking a customer &ldquo;Are you satisfied?&rdquo; and
          directing only those who answer &ldquo;yes&rdquo; to Google — dissatisfied customers
          simply never receive the review link. Google explicitly bans this practice in its
          guidelines, because it artificially inflates a profile&apos;s rating and misleads other
          users. Getting caught can result in a penalty, a ranking drop, or profile suspension.
        </p>

        <h3 id="legal-filter" className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          A legal review filter — how does it work in practice?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The difference between banned review gating and legitimate profile protection is subtle
          but crucial: a legal system never blocks anyone&apos;s path to Google — every customer,
          satisfied or not, has access to the public review form. What changes is only the order of
          steps: a dissatisfied customer additionally gets the option to report the problem
          directly to the business, before (or alongside) deciding whether they also want to write
          a public review.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          That&apos;s exactly how the review filter built into the{" "}
          <Link href="/order" className="text-blue-600 hover:underline font-medium">
            Starlinkee NFC stand
          </Link>{" "}
          works. The customer taps their phone and first rates the experience with a single tap. A
          satisfied customer goes straight to the Google review form. A dissatisfied one lands on
          an internal feedback form where they can describe the issue — giving you a chance to
          reach out and fix things before anyone else reads about it. This isn&apos;t blocking
          access to Google — it&apos;s managing the moment at which a customer decides where to
          direct their feedback. You can read more about the review-collection process itself in
          our article on{" "}
          <Link href="/blog/how-to-get-google-reviews-fast" className="text-blue-600 hover:underline">
            how to get Google reviews fast
          </Link>
          .
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/jak-odpowiadac-na-opinie/filtr.webp"
          alt="Minimalist café interior with a fork in the path — an open door and a side corridor symbolizing two separate feedback routes"
        />
      </div>

      {/* ── SUMMARY ── */}
      <div className={P}>
        <section
          id="summary"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary — replies that build trust
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Responding to reviews isn&apos;t an administrative chore — it&apos;s a daily
            conversation with the market that every prospective customer can see. Thank customers
            specifically for positive reviews, react calmly and factually to negative ones, and
            only report reviews for removal when they genuinely violate Google&apos;s guidelines.
            The most effective strategy, though, remains reducing unfair reviews at the source —
            before a customer even reaches for their phone to leave a rating. To see what that
            looks like in practice, check out the{" "}
            <Link href="/order" className="text-blue-600 hover:underline font-medium">
              Starlinkee NFC stand
            </Link>{" "}
            with a built-in, Google-compliant review filter.
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
                Do I have to respond to every review on Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                There&apos;s no formal requirement, but it&apos;s strongly recommended. Replying to
                reviews — both positive and negative — is an activity signal taken into account by
                the local SEO algorithm and builds trust with customers reading your profile.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How quickly should I respond to negative reviews?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                The ideal window is 24–48 hours. Fast enough to show you&apos;re engaged, slow
                enough to reply calmly, without emotions that could escalate the situation.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Will Google remove a negative review if I ask the customer to?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                A customer can remove or edit their own review at any time, but Google won&apos;t
                do it automatically at your request if the content doesn&apos;t violate its
                guidelines. The most effective approach is resolving the issue privately and
                politely asking for an update once the problem is solved.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                What&apos;s the difference between a review filter and banned review gating?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Review gating blocks dissatisfied customers from the Google review form — a policy
                violation. A legal review filter, like the one in Starlinkee, gives every customer
                access to Google and simply offers dissatisfied ones an additional, separate channel
                to report a problem directly to the business.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                What should I do if I suspect a competitor wrote a review?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Report the review through Google&apos;s form, citing conflict of interest as the
                reason. It helps to include concrete evidence (e.g. no matching record in your
                booking history). Also reply publicly in a factual tone without directly accusing
                anyone — other readers will draw their own conclusions from the facts.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
