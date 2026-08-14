import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import QuoteForm from '../components/QuoteForm'

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
    image: '/seo/keyword-research.png',
  },
  {
    title: 'On-Page SEO',
    body: 'Optimising your pages, content, titles, headings and internal structure.',
    image: '/seo/on-page.png',
  },
  {
    title: 'Technical SEO',
    body: 'Finding technical issues that could be preventing your website from performing properly.',
    image: '/seo/technical.png',
  },
  {
    title: 'Content Strategy',
    body: 'Creating useful, search-focused content designed around your services and target market.',
    image: '/seo/content-strategy.png',
  },
  {
    title: 'Local SEO',
    body: 'Helping businesses increase their visibility for relevant searches within their target locations.',
    image: '/seo/local.png',
  },
  {
    title: 'Competitor Analysis',
    body: 'Understanding where competitors are gaining visibility and identifying opportunities for your business.',
    image: '/seo/competitor.png',
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.42),transparent_45%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.55),transparent_50%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/45" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center md:px-8 md:pt-24">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.28em] text-cyan uppercase md:text-base">
            NEXXO DIGITAL
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            BUILD. RANK. GROW.
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Websites That Look Better. Rank Higher. Convert More.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap justify-center gap-4">
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
        <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-slate md:text-xl">
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
            <span className="text-brand">BUILD</span> your presence.{' '}
            <span className="text-brand">RANK</span> above your competition.{' '}
            <span className="text-brand">GROW</span> your business.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            className="text-center"
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

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="WEBSITE DESIGN"
              title="Websites Designed to Convert"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Your website is often the first interaction somebody has with
                your business.
              </p>
              <p>
                We design modern, fast and mobile-friendly websites that don’t
                just look professional — they’re built to generate business.
              </p>
              <p>
                From straightforward company websites to larger bespoke
                projects, every Nexxo Digital website is designed around your
                brand, your customers and your commercial objectives.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-brand" />
            <p className="text-center font-display text-sm font-semibold tracking-[0.22em] text-blue uppercase md:text-base">
              Our website design services include
            </p>
          </div>
        </div>

        <div className="marquee-pause relative mt-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-mist to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-mist to-transparent sm:w-28" />

          <div className="marquee-track-left flex w-max gap-3">
            {[
              ...websiteServices,
              ...websiteServices,
              ...websiteServices,
              ...websiteServices,
            ].map((item, index) => (
                <div
                  key={`service-${item}-${index}`}
                  className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-ink/10 bg-white/80 px-4 py-2.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-blue">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5 6.5 11.5 12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink/85">{item}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-16 text-white md:px-8 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,194,255,0.22),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,87,255,0.28),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
            A Better Website Should Mean Better Business.
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            We focus on creating websites that make it easy for potential
            customers to understand who you are, what you offer and why they
            should choose you.
          </p>
          <Link
            to="/web-design"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            EXPLORE WEB DESIGN →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="SEO"
              title="Get Found When Your Customers Search Google"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>A great website has limited value if nobody can find it.</p>
              <p>
                Our SEO services are designed to improve your visibility across
                Google and help your business appear for searches that can
                generate genuine customers.
              </p>
              <p>
                Rather than chasing meaningless traffic numbers, we focus on the
                keywords and searches that matter commercially to your business.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-brand" />
            <p className="text-center font-display text-sm font-semibold tracking-[0.22em] text-blue uppercase md:text-base">
              Our SEO strategies can include
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {seoStrategies.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-ink/8 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_22px_48px_-28px_rgba(0,87,255,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate md:text-[0.95rem]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-16 text-white md:px-8 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,194,255,0.2),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(0,87,255,0.25),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
            Don’t Just Have a Website. Make Sure People Find It.
          </h3>
          <Link
            to="/seo"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            EXPLORE SEO →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="PPC & GOOGLE ADS"
              title="Get In Front of Customers Ready to Buy"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Want results without waiting for organic rankings to develop?
              </p>
              <p>
                Nexxo Digital creates and manages PPC and Google Ads campaigns
                designed to put your business in front of potential customers at
                the moment they’re actively searching for your services.
              </p>
              <p>But generating clicks isn’t the objective.</p>
              <p className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                Generating profitable{' '}
                <span className="text-brand">enquiries</span> is.
              </p>
              <p>
                We focus on campaign structure, keyword targeting, ad messaging
                and conversion performance to help maximise the value of your
                advertising budget.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-brand" />
            <p className="text-center font-display text-sm font-semibold tracking-[0.22em] text-blue uppercase md:text-base">
              Our PPC management includes
            </p>
            <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-3">
              {ppcIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 px-1 py-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-blue">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5 6.5 11.5 12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink/85 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-16 text-white md:px-8 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,194,255,0.22),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(0,87,255,0.28),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
            More Than Clicks. We Focus on Customers.
          </h3>
          <Link
            to="/ppc"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            EXPLORE PPC →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="ONE AGENCY. ONE DIGITAL STRATEGY."
              title="Web Design + SEO + PPC"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                The strongest digital strategies don’t treat your website, SEO
                and paid advertising as completely separate services.
              </p>
              <p className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                They work <span className="text-brand">together</span>.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: 'Web Design',
                body: 'Your website converts the visitor.',
                image: '/pillars/web-design.png',
              },
              {
                title: 'SEO',
                body: 'SEO builds your long-term organic visibility.',
                image: '/pillars/seo.png',
              },
              {
                title: 'PPC',
                body: 'PPC puts your business in front of customers immediately.',
                image: '/pillars/ppc.png',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-ink/8 bg-white text-center transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_22px_48px_-28px_rgba(0,87,255,0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand" />
                  <h3 className="font-display text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-slate md:text-xl">
            Nexxo Digital combines all three to create a complete customer
            acquisition strategy.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="WHY NEXXO DIGITAL?"
              title="Digital Marketing Without the Unnecessary Complexity"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>Digital marketing can become unnecessarily complicated.</p>
              <p className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                We prefer to keep things{' '}
                <span className="text-brand">straightforward</span>.
              </p>
              <p>
                We understand your business, identify where the opportunities
                are and create a strategy designed around measurable commercial
                results.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {whyPoints.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-ink/8 bg-white p-5 md:p-6 lg:col-span-2 ${
                  index === 3 ? 'lg:col-start-2' : ''
                } ${index === 4 ? 'lg:col-start-4' : ''}`}
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071525] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(0,87,255,0.32),transparent_48%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              light
              className="text-center"
              eyebrow="FROM SEARCH TO SALE"
              title="We Build the Entire Journey"
            />
            <p className="mt-6 text-lg text-white/75 md:text-xl">
              Someone searches Google.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {journey.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-sm font-bold text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-brand" />
            <p className="text-lg text-white/80 md:text-xl">
              That’s the Nexxo approach.
            </p>
            <p className="mt-4 font-display text-2xl font-bold tracking-[0.08em] md:text-3xl">
              <span className="text-brand">BUILD</span>
              <span className="text-white/40">.</span>{' '}
              <span className="text-brand">RANK</span>
              <span className="text-white/40">.</span>{' '}
              <span className="text-brand">GROW</span>
              <span className="text-white/40">.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="BUILT FOR AMBITIOUS BUSINESSES"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
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

      <section
        id="quote"
        className="relative overflow-hidden bg-navy px-5 py-20 text-white md:px-8 md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,194,255,0.18),transparent_42%),radial-gradient(circle_at_85%_75%,rgba(0,87,255,0.22),transparent_48%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="font-display text-sm font-semibold tracking-[0.22em] text-cyan uppercase">
              READY TO GROW YOUR BUSINESS?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Let’s Build Something That Performs.
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)]">
              <img
                src="/contact-home-bottom.png"
                alt="Nexxo Digital website design, SEO and analytics"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div id="quote-form">
            <QuoteForm variant="dark" />
          </div>
        </div>
      </section>
    </main>
  )
}
