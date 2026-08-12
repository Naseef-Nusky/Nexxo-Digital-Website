import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const websiteServices = [
  'Bespoke website design',
  'WordPress development',
  'Responsive mobile design',
  'Landing page design',
  'Website redesigns',
  'E-commerce websites',
  'Conversion-focused layouts',
  'Technical SEO foundations',
  'Website speed optimisation',
  'Enquiry and lead-generation systems',
]

const seoStrategies = [
  {
    title: 'Keyword Research',
    body: 'Identifying the searches your potential customers are actually making.',
  },
  {
    title: 'On-Page SEO',
    body: 'Optimising your pages, content, titles, headings and internal structure.',
  },
  {
    title: 'Technical SEO',
    body: 'Finding technical issues that could be preventing your website from performing properly.',
  },
  {
    title: 'Content Strategy',
    body: 'Creating useful, search-focused content designed around your services and target market.',
  },
  {
    title: 'Local SEO',
    body: 'Helping businesses increase their visibility for relevant searches within their target locations.',
  },
  {
    title: 'Competitor Analysis',
    body: 'Understanding where competitors are gaining visibility and identifying opportunities for your business.',
  },
]

const ppcIncludes = [
  'Google Search Ads',
  'Keyword research',
  'Competitor research',
  'Campaign creation',
  'Ad copywriting',
  'Negative keyword management',
  'Bid and budget optimisation',
  'Conversion tracking',
  'Landing page optimisation',
  'Ongoing campaign management',
  'Performance reporting',
]

const whyPoints = [
  {
    title: 'Strategy Before Spending',
    body: 'We don’t believe in spending money simply for the sake of generating traffic. Every campaign starts by understanding what you’re actually trying to achieve.',
  },
  {
    title: 'Built Around Your Business',
    body: 'There isn’t one digital strategy that works for every company. Your website and marketing should reflect your industry, competition and objectives.',
  },
  {
    title: 'Conversion Focused',
    body: 'Traffic means very little if visitors don’t become customers. Conversion is considered throughout our websites, SEO campaigns and PPC strategies.',
  },
  {
    title: 'Clear Communication',
    body: 'You’ll understand what we’re doing, why we’re doing it and how your campaigns are performing.',
  },
  {
    title: 'Long-Term Growth',
    body: 'Our objective isn’t simply to launch your website or campaign. It’s to help your business continue growing.',
  },
]

const journey = [
  {
    num: '01',
    title: 'THEY FIND YOU',
    body: 'SEO and PPC put your business in front of the right audience.',
  },
  {
    num: '02',
    title: 'THEY VISIT YOU',
    body: 'A professionally designed website creates credibility and trust.',
  },
  {
    num: '03',
    title: 'THEY TAKE ACTION',
    body: 'Clear messaging and conversion-focused design encourage visitors to enquire.',
  },
  {
    num: '04',
    title: 'YOU GROW',
    body: 'More qualified opportunities give your business the foundation to scale.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pt-24">
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="animate-rise h-16 w-auto md:h-20"
          />
          <p className="animate-rise mt-6 font-display text-sm font-semibold tracking-[0.28em] text-cyan uppercase md:text-base">
            NEXXO DIGITAL
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            BUILD. RANK. GROW.
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Websites That Look Better. Rank Higher. Convert More.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-4">
            <Link
              to="/quote"
              className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              GET A FREE QUOTE
            </Link>
            <Link
              to="/quote"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              SPEAK TO OUR TEAM
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate md:text-xl">
          <p>
            Nexxo Digital is a results-driven web design and digital marketing
            agency helping businesses build a stronger online presence and
            generate more customers.
          </p>
          <p>
            We combine professional website design, SEO and PPC advertising to
            create digital strategies focused on one thing: growth.
          </p>
          <p>
            Whether you need a completely new website, want to improve your
            Google rankings, or need a professionally managed Google Ads
            campaign generating enquiries, Nexxo Digital can help.
          </p>
          <p className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
            BUILD your presence. RANK above your competition. GROW your
            business.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="DIGITAL SERVICES BUILT AROUND GROWTH"
            title="Having a website isn’t enough."
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate">
            <p>
              Your business needs a website that represents your brand
              professionally, appears when potential customers search Google and
              turns those visitors into genuine enquiries.
            </p>
            <p>
              That’s why Nexxo Digital brings web design, SEO and PPC management
              together under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="WEBSITE DESIGN"
            title="Websites Designed to Convert"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
            <p>
              Your website is often the first interaction somebody has with your
              business.
            </p>
            <p>
              We design modern, fast and mobile-friendly websites that don’t just
              look professional — they’re built to generate business.
            </p>
            <p>
              From straightforward company websites to larger bespoke projects,
              every Nexxo Digital website is designed around your brand, your
              customers and your commercial objectives.
            </p>
            <p className="font-medium text-ink">
              Our website design services include:
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {websiteServices.map((item) => (
              <li
                key={item}
                className="border-l-2 border-blue/40 pl-4 text-sm text-slate md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              A Better Website Should Mean Better Business.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              We focus on creating websites that make it easy for potential
              customers to understand who you are, what you offer and why they
              should choose you.
            </p>
            <Link
              to="/web-design"
              className="mt-6 inline-flex font-semibold text-blue transition hover:text-ink"
            >
              EXPLORE WEB DESIGN →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink-soft px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            light
            eyebrow="SEO"
            title="Get Found When Your Customers Search Google"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              A great website has limited value if nobody can find it.
            </p>
            <p>
              Our SEO services are designed to improve your visibility across
              Google and help your business appear for searches that can
              generate genuine customers.
            </p>
            <p>
              Rather than chasing meaningless traffic numbers, we focus on the
              keywords and searches that matter commercially to your business.
            </p>
            <p className="font-medium text-white">
              Our SEO strategies can include:
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seoStrategies.map((item) => (
              <div key={item.title} className="border-t border-white/15 pt-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              Don’t Just Have a Website. Make Sure People Find It.
            </h3>
            <Link
              to="/seo"
              className="mt-6 inline-flex font-semibold text-cyan transition hover:text-white"
            >
              EXPLORE SEO →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="PPC & GOOGLE ADS"
            title="Get In Front of Customers Ready to Buy"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
            <p>
              Want results without waiting for organic rankings to develop?
            </p>
            <p>
              Nexxo Digital creates and manages PPC and Google Ads campaigns
              designed to put your business in front of potential customers at
              the moment they’re actively searching for your services.
            </p>
            <p>But generating clicks isn’t the objective.</p>
            <p className="font-medium text-ink">
              Generating profitable enquiries is.
            </p>
            <p>
              We focus on campaign structure, keyword targeting, ad messaging
              and conversion performance to help maximise the value of your
              advertising budget.
            </p>
            <p className="font-medium text-ink">Our PPC management includes:</p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ppcIncludes.map((item) => (
              <li
                key={item}
                className="border-l-2 border-cyan/50 pl-4 text-sm text-slate md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              More Than Clicks. We Focus on Customers.
            </h3>
            <Link
              to="/ppc"
              className="mt-6 inline-flex font-semibold text-blue transition hover:text-ink"
            >
              EXPLORE PPC →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="ONE AGENCY. ONE DIGITAL STRATEGY."
            title="Web Design + SEO + PPC"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate">
            <p>
              The strongest digital strategies don’t treat your website, SEO and
              paid advertising as completely separate services.
            </p>
            <p>They work together.</p>
            <p>Your website converts the visitor.</p>
            <p>SEO builds your long-term organic visibility.</p>
            <p>PPC puts your business in front of customers immediately.</p>
            <p>
              Nexxo Digital combines all three to create a complete customer
              acquisition strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="WHY NEXXO DIGITAL?"
            title="Digital Marketing Without the Unnecessary Complexity"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
            <p>Digital marketing can become unnecessarily complicated.</p>
            <p>We prefer to keep things straightforward.</p>
            <p>
              We understand your business, identify where the opportunities are
              and create a strategy designed around measurable commercial
              results.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyPoints.map((item) => (
              <div key={item.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            light
            eyebrow="FROM SEARCH TO SALE"
            title="We Build the Entire Journey"
          />
          <p className="mt-6 text-lg text-white/75">Someone searches Google.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <div key={step.num}>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan">
                  {step.num}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-lg text-white/80">
            That’s the Nexxo approach.
          </p>
          <p className="mt-3 font-display text-2xl font-bold tracking-[0.08em] text-cyan">
            BUILD. RANK. GROW.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="BUILT FOR AMBITIOUS BUSINESSES" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate">
            <p>
              We work with businesses that want more from their digital
              presence.
            </p>
            <p>
              Whether you’re launching a new company, replacing an outdated
              website, struggling to rank on Google or looking to generate more
              enquiries through paid advertising, we’ll build a strategy around
              where you are today and where you want to go next.
            </p>
            <p>
              From startups and local businesses to established companies looking
              to scale, Nexxo Digital provides the expertise needed to turn your
              online presence into a genuine business asset.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-blue uppercase">
            READY TO GROW YOUR BUSINESS?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Let’s Build Something That Performs.
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate">
            <p>
              Tell us about your business, what you’re looking to achieve and
              where you want to grow.
            </p>
            <p>
              We’ll help determine the right combination of website design, SEO
              and PPC to get you there.
            </p>
          </div>
          <p className="mt-8 font-display text-xl font-bold tracking-[0.12em] text-ink">
            BUILD. RANK. GROW.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              GET YOUR FREE DIGITAL CONSULTATION
            </Link>
            <Link
              to="/quote"
              className="rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink/5"
            >
              CALL NEXXO DIGITAL
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
