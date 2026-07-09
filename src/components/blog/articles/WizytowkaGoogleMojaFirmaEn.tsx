import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import NewsletterBlogBanner from "@/components/blog/NewsletterBlogBanner";
import SectionDivider from "@/components/blog/SectionDivider";

const P = "max-w-3xl mx-auto px-4 sm:px-6";

export default function WizytowkaGoogleMojaFirmaEn() {
  return (
    <>
      {/* ── LEAD + TABLE OF CONTENTS ── */}
      <div className={P}>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Your Google Business Profile matters more than your website. When someone searches
          "restaurant near me" or "hairdresser London" on their phone, the algorithm decides in a
          fraction of a second which profiles appear at the top of the map. It doesn't look at your
          website design. It looks at how well you filled in your profile — and how actively you
          maintain it. This article walks you through the entire process, from zero to a fully
          optimised listing.
        </p>

        <nav
          aria-label="Table of contents"
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8"
        >
          <p className="text-base font-semibold text-gray-800 mb-4">Table of contents:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#what-is-it" className="text-blue-600 hover:underline">
                1. What is Google Business Profile and why does it matter?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#profile-vs-website" className="text-blue-600 hover:underline">
                    1.1. How is a business profile different from a website?
                  </a>
                </li>
                <li>
                  <a href="#maps-impact" className="text-blue-600 hover:underline">
                    1.2. How does your listing affect Google Maps results?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#how-to-create" className="text-blue-600 hover:underline">
                2. How to create and verify your Google profile?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#registration" className="text-blue-600 hover:underline">
                    2.1. Registering a new listing — step by step
                  </a>
                </li>
                <li>
                  <a href="#verification" className="text-blue-600 hover:underline">
                    2.2. Address verification — what to expect
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#how-to-fill" className="text-blue-600 hover:underline">
                3. How to fill in your Google Business Profile step by step?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#name-category-description" className="text-blue-600 hover:underline">
                    3.1. Name, category and description — what has the biggest SEO impact?
                  </a>
                </li>
                <li>
                  <a href="#hours-photos-attributes" className="text-blue-600 hover:underline">
                    3.2. Opening hours, photos and attributes
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#ranking-signals" className="text-blue-600 hover:underline">
                4. What affects your position in Google Maps?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#three-signals" className="text-blue-600 hover:underline">
                    4.1. The three main Google ranking signals
                  </a>
                </li>
                <li>
                  <a href="#profile-activity" className="text-blue-600 hover:underline">
                    4.2. How to keep your profile regularly updated?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#posts-updates" className="text-blue-600 hover:underline">
                5. Posts and updates — how to keep your listing active?
              </a>
              <ol className="ml-4 mt-1 space-y-1 list-none">
                <li>
                  <a href="#posting-frequency" className="text-blue-600 hover:underline">
                    5.1. How often should you publish posts on Google Business Profile?
                  </a>
                </li>
                <li>
                  <a href="#post-content" className="text-blue-600 hover:underline">
                    5.2. What content engages local customers best?
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#summary" className="text-blue-600 hover:underline">
                6. Summary — a listing that really works
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
        <h2
          id="what-is-it"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          What is Google Business Profile and why does it matter?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Business Profile (formerly Google My Business) is a free dashboard where you
          define how your company appears in Google Search and Google Maps. When a customer
          searches for a product or service nearby, your listing delivers the name, address, opening
          hours, photos and reviews — before they ever reach your website. For most local businesses,
          this panel is the first and often the only point of contact with a new customer.
        </p>

        <h3
          id="profile-vs-website"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How is a business profile different from a website?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A website requires the customer to click a link, load a page and find opening hours or an
          address on their own. A Google Business Profile delivers that information instantly — right
          in the search results card, without any extra clicks. What's more, a profile on Google is
          indexed separately and can rank higher than your own website for local phrases. A
          restaurant with a well-maintained listing will capture "pizza near me" searches faster
          than through website optimisation alone.
        </p>

        <h3
          id="maps-impact"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How does your listing affect Google Maps results?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Google Maps and local results are driven by the so-called Local Pack — a set of three
          businesses that the algorithm considers most relevant for a given query. Whoever lands in
          that pack captures the lion's share of clicks. The algorithm weighs three factors:
          relevance (does the profile match the query), distance (is the business close to the
          searcher) and prominence (is the profile complete, active and well-reviewed). You can
          directly control two of those three factors through your dashboard.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/local-pack.webp"
          alt="Smartphone screen showing Google Maps results with three businesses in the Local Pack with star ratings and addresses"
        />
      </div>

      {/* ── SECTION 2 ── */}
      <div className={P}>
        <h2
          id="how-to-create"
          className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          How to create and verify your Google profile?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If your business doesn't have a profile yet, start by going to{" "}
          <a
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            business.google.com
          </a>{" "}
          and signing in with a Google account. One Google account can manage multiple locations,
          so you don't need separate accounts for each branch. The registration process takes
          about fifteen minutes. Verification may take longer — Google needs to confirm that the
          business actually operates at the given address.
        </p>

        <h3
          id="registration"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Registering a new listing — step by step
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          During registration Google asks for several key details. Enter them accurately — every
          field can be edited later, but consistent data from the start shortens verification time
          and builds the algorithm's trust.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li>Go to <strong>business.google.com</strong> and click "Manage now".</li>
          <li>Enter your business name — exactly as it appears on your sign and receipts.</li>
          <li>Choose your <strong>primary category</strong> (e.g. "Restaurant", "Hair salon").</li>
          <li>Add your address or indicate that you serve customers at their location.</li>
          <li>Add a phone number and your website address.</li>
          <li>Choose a verification method and complete the process.</li>
        </ol>

        <h3
          id="verification"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Address verification — what to expect
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Most commonly, Google sends a postcard with a PIN code to your physical address. The
          wait is usually 5–14 days. Some industries and accounts can use faster verification via
          SMS, a video recording or instant verification through Search — if that option appears on
          the list, use it first. Until verification is complete, the profile exists but does not
          appear publicly in search results.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/panel.webp"
          alt="Google Business Profile admin panel visible on a laptop with completed business profile sections"
        />
      </div>

      {/* ── TRANSITION 2→3 ── */}
      <SectionDivider quote="Your Google profile is a digital shop front — the more information you provide, the easier it is for customers to choose you." />

      {/* ── SECTION 3 ── */}
      <div className={P}>
        <h2
          id="how-to-fill"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          How to fill in your Google Business Profile step by step?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Profile completeness is one of the most important signals for the local SEO algorithm.
          Google itself states that businesses with complete information are "1.7 times more likely
          to be considered reputable". In practice, this means no section should be left empty —
          because every blank field is an opportunity for a competitor who took the time to fill
          theirs in.
        </p>

        <h3
          id="name-category-description"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Name, category and description — what has the biggest SEO impact?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your <strong>business name</strong> should match the name you actually use. Don't stuff
          keywords into it like "Restaurant Maria — pizza London city centre" — Google treats this
          as spam and may suspend the profile. If your business is called "Restaurant Maria", that's
          what goes in the name field.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>primary category</strong> is the strongest ranking signal of all the profile
          fields. Choose it precisely. If you run a pizzeria, pick "Pizzeria", not the generic
          "Restaurant". You can add up to ten additional categories — for example "Italian
          restaurant", "Bar", "Food delivery" — but never do it blindly. Each category determines
          which queries you can appear for.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The <strong>business description</strong> has a 750-character limit. The first 250
          characters are visible without expanding, so put your most important information there:
          what you do, for whom, where and what sets you apart. Weave in keywords naturally — don't
          force them, because real customers read the description too.
        </p>

        <h3
          id="hours-photos-attributes"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          Opening hours, photos and attributes
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Opening hours</strong> must be current. It's a small thing many businesses
          neglect — and a customer who arrives at a closed venue will leave a one-star review.
          Remember to add special hours for public holidays and days off.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Photos</strong> have a real impact on clicks. Profiles with at least ten photos
          generate three times more requests for directions. Add: a main photo (exterior or logo),
          interior shots, products or services, staff in action. Update them at least once a quarter
          — fresh photos signal activity.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          <strong>Attributes</strong> are details customers filter by in Search: accessibility for
          people with disabilities, payment options, Wi-Fi, outdoor seating, parking, vegetarian
          options. Every ticked attribute increases the chance of appearing for filtered searches.
          Go through the full list available for your category and tick everything you genuinely
          offer.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/zdjecia.webp"
          alt="Photo gallery in a restaurant's Google listing showing the interior, dishes and smiling staff"
        />
      </div>

      {/* ── NEWSLETTER BANNER — full width ── */}
      <NewsletterBlogBanner locale="en" />

      {/* ── SECTION 4 ── */}
      <div className={P}>
        <h2
          id="ranking-signals"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          What affects your position in Google Maps?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your Google Maps ranking isn't random. The local algorithm calculates it from dozens of
          signals, but three groups matter most. Understanding their hierarchy lets you focus effort
          on actions that actually produce results, rather than wasting time on cosmetic tweaks.
        </p>

        <h3
          id="three-signals"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          The three main Google ranking signals
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>1. Relevance</strong> — how well the profile answers the customer's query. What
          counts here is profile completeness, category choice, keywords in the description and
          answers in the Q&A section. Businesses that naturally use the language their customers
          speak in their posts and descriptions consistently win this signal.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>2. Distance</strong> — how far the business is from the user or from the location
          mentioned in the query. You can't directly change this factor, but you can precisely
          define your service area if you're a mobile business or operate across several
          neighbourhoods.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>3. Prominence</strong> — how well-known the business is online. This signal is
          built from: the number and quality of Google reviews, links to your website from external
          sources, profile activity and any mentions in local directories (e.g. Tripadvisor,
          Yelp). Google reviews are the key direct factor here — for more on collecting reviews,
          see our article on{" "}
          <Link href="/blog/how-to-get-google-reviews-fast" className="text-blue-600 hover:underline">
            how to get Google reviews quickly
          </Link>
          .
        </p>

        <h3
          id="profile-activity"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How to keep your profile regularly updated?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Google rewards active profiles. Regular updates signal that the business is operating and
          cares about its online presence. In practice, a simple rhythm is enough: one photo per
          week, a post with an offer or update every two weeks, a monthly review of hours and
          attributes. It's not about the volume of content, but its regularity — a profile that
          goes silent for three months loses ground to a competitor who posts modestly but
          consistently.
        </p>
      </div>

      {/* ── TRANSITION 4→5 ── */}
      <SectionDivider quote="Google's algorithm rewards activity — a listing you keep updated works for you around the clock." />

      {/* ── SECTION 5 ── */}
      <div className={P}>
        <h2
          id="posts-updates"
          className="text-2xl font-bold text-gray-900 mt-2 mb-4 scroll-mt-24"
        >
          Posts and updates — how to keep your listing active?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Posts on Google Business Profile are short updates visible directly in the business
          knowledge panel — right below the photo and rating. You can share news, offers, events
          and products there. Most local business owners don't use this feature at all, making it
          an easy advantage over competitors. A post expires after seven days (offers have their
          own duration), so posting regularly isn't optional — it's necessary if you want this
          element to remain visible.
        </p>

        <h3
          id="posting-frequency"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          How often should you publish posts on Google Business Profile?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          The optimum for most local businesses is one post per week. That's enough to keep the
          posts section always filled with current content. If you run a food business, publish the
          daily menu or weekend specials — customers search for exactly that kind of information
          right before deciding where to eat. A hair salon can post available appointment slots or
          current promotions. A clinic can share health tips or information about new treatments.
          Content should be useful, not purely promotional.
        </p>

        <h3
          id="post-content"
          className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          What content engages local customers best?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The best-performing posts answer a specific question or need at a given moment. A few
          formats proven in local marketing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          <li><strong>Time-limited offer</strong> — "20% off treatments until Friday" with a "Book now" button.</li>
          <li><strong>New addition</strong> — a new dish, treatment or product with a photo.</li>
          <li><strong>Practical update</strong> — changed hours, maintenance break, parking info.</li>
          <li><strong>Behind the scenes</strong> — anniversary, industry award, new team member.</li>
          <li><strong>Question for customers</strong> — "Which option do you prefer?" — increases engagement.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Add a photo to every post — posts with images generate many times more views than text
          alone. Use call-to-action buttons: "Call", "Book", "Learn more", "Order online". Every
          click on a button is an engagement signal that influences the profile's ranking.
        </p>
      </div>

      <div className={P}>
        <BlogImage
          src="/images/blog/wizytowka-google-moja-firma/posty.webp"
          alt="Smartphone screen showing a current post on a restaurant's Google Business Profile with a weekly promotion"
        />
      </div>

      {/* ── SUMMARY ── */}
      <div className={P}>
        <section
          id="summary"
          className="scroll-mt-24 mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary — a listing that really works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A well-optimised Google Business Profile isn't a one-off project — it's an ongoing
            process. You set it up once, but you optimise it continuously: fill in attributes, add
            photos, publish posts, respond to reviews and answer questions. Businesses that treat
            their profile as a living communication channel consistently outrank competitors in
            local results. Collecting Google reviews is an inseparable part of that work — the more
            recent reviews you have, the stronger the prominence signal for the algorithm. If you
            want to automate this, see how the{" "}
            <Link href="/order" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Starlinkee NFC stand
            </Link>
            {" "}works — the customer taps their phone and lands straight on the review form, no
            searching required.
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
                Is Google Business Profile free?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Yes, creating and managing a Google Business Profile is completely free. Google
                does not charge for showing your business in local results or for using posts,
                photos or review responses.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How long does Google listing verification take?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Postcard verification usually takes 5–14 business days. If SMS or instant
                verification is available, you can activate the profile within a few minutes.
                Once verification is complete, the profile appears publicly in search results.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                How often should I update my Google Business Profile?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                At minimum, post once a week and review your opening hours once a month. Update
                photos at least quarterly. After any change to your offer or hours, update the
                profile immediately — outdated information discourages customers and leads to
                negative reviews.
              </dd>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Can I add keywords to my business name on Google?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                No. Google requires that the name in the listing matches your real business name.
                Adding keywords to the name (e.g. "Hairdresser Jane — hair salon London") violates
                the guidelines and can result in a suspended profile or a ranking penalty.
              </dd>
            </div>
            <div className="pb-6">
              <dt className="text-lg font-semibold text-gray-900 mb-2">
                Is it worth responding to all reviews — including positive ones?
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Yes. Responding to reviews (both positive and negative) is an engagement signal
                that Google factors into its assessment of profile activity. A short, personalised
                reply to a positive review also builds customer loyalty and encourages others to
                leave their own feedback.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
