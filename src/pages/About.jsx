import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const approach = [
  {
    title: 'Strategy First',
    body: 'Successful digital marketing starts with understanding the objective. We analyse your business, market, competitors and target customers before deciding where your time and marketing budget should be invested.',
  },
  {
    title: 'Build',
    body: 'We create the digital foundation. That could mean a new website, dedicated landing pages or improving an existing website to increase its performance.',
  },
  {
    title: 'Rank',
    body: 'We increase your visibility. Through SEO, content and search optimisation, we work to put your business in front of people actively looking for the services you provide.',
  },
  {
    title: 'Grow',
    body: 'We turn visibility into opportunities. Through PPC, conversion optimisation and continuous improvements, we help turn website visitors into enquiries and customers.',
  },
]

const whyChoose = [
  {
    title: 'Results Focused',
    body: 'We care about the numbers that actually affect your business — visibility, qualified traffic, enquiries, conversions and growth.',
  },
  {
    title: 'Bespoke Strategies',
    body: 'Your business isn’t identical to your competitors, so your strategy shouldn’t be either. Our recommendations are based around your specific market and objectives.',
  },
  {
    title: 'Everything Under One Roof',
    body: 'With website design, SEO and PPC management working together, you don’t need multiple agencies pulling your digital strategy in different directions.',
  },
  {
    title: 'Conversion Focused',
    body: 'Getting somebody onto your website is only half the job. We consider what happens after they arrive and how we can encourage more visitors to become customers.',
  },
  {
    title: 'Data Driven',
    body: 'Decisions should be based on evidence. We use campaign and website data to understand what’s working, what isn’t and where improvements can be made.',
  },
  {
    title: 'Clear Communication',
    body: 'Digital marketing shouldn’t feel deliberately complicated. We explain our strategies clearly and focus reporting on information that matters.',
  },
]

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-5 pt-32 pb-20 text-white md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/about-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto max-w-4xl">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.24em] text-cyan uppercase">
            About Nexxo Digital
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Digital Solutions Built to Grow Businesses
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-3xl text-lg text-white/75 md:text-xl">
            At Nexxo Digital, we believe digital marketing should do more than
            make your business look good online. It should help your business get
            found, generate enquiries and grow.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <div className="space-y-6 text-lg leading-relaxed text-slate md:text-xl">
            <p>
              We are a results-focused web design, SEO and PPC agency helping
              businesses build powerful digital foundations and turn their online
              presence into a genuine source of new customers.
            </p>
            <p>
              From designing high-performing websites to increasing visibility on
              Google and managing targeted paid advertising campaigns, everything
              we do is built around measurable business growth.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl font-bold tracking-[0.12em] md:text-3xl">
            <span className="text-brand">BUILD</span>
            <span className="text-ink/25">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-ink/25">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-ink/25">.</span>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              className="text-center"
              eyebrow="More Than a Digital Agency"
              title="We Build Digital Strategies Around Your Business"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
              <p>
                No two businesses are exactly the same, so we don’t believe their
                digital strategies should be either.
              </p>
              <p>
                Before recommending a website, SEO campaign or PPC strategy, we
                take the time to understand your business, your customers, your
                competition and what you actually want to achieve.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/8 bg-mist/70 p-6 md:p-8">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
              <p className="text-base leading-relaxed text-slate md:text-lg">
                For some businesses, that means creating a completely new website
                designed to generate enquiries.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-mist/70 p-6 md:p-8">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
              <p className="text-base leading-relaxed text-slate md:text-lg">
                For others, it means improving existing Google rankings through
                SEO, generating immediate leads through Google Ads and PPC, or
                combining all three into a complete digital growth strategy.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan/20 bg-gradient-to-br from-mist to-white p-6 text-center md:p-9">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
              Our approach is simple:
            </p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
              Understand the business. Identify the opportunity. Build the
              strategy. Measure the results. Keep improving.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading className="text-center" title="What We Do" />
          </div>

          <div className="mt-14 grid gap-6 lg:gap-8">
            <article className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_18px_40px_-32px_rgba(5,7,13,0.35)] transition duration-300 hover:border-cyan/30 md:p-8 lg:p-10">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
              <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                Website Design — Build a Better Digital Presence
              </h3>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
                <p>
                  Your website is often the first impression a potential customer
                  gets of your company.
                </p>
                <p>
                  We design professional, responsive and conversion-focused
                  websites that communicate your value clearly and make it easy
                  for visitors to take the next step.
                </p>
                <p>
                  Our website design and development services can include bespoke
                  business websites, WordPress development, e-commerce websites,
                  landing pages, website redesigns, mobile optimisation and
                  conversion-focused design.
                </p>
                <p>
                  But we don’t design websites simply to look impressive.
                </p>
                <p className="font-medium text-ink">We build them to perform.</p>
              </div>
            </article>

            <article className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_18px_40px_-32px_rgba(5,7,13,0.35)] transition duration-300 hover:border-cyan/30 md:p-8 lg:p-10">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
              <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                Search Engine Optimisation — Rank Where Your Customers Are
                Searching
              </h3>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
                <p>
                  When someone searches Google for the products or services you
                  provide, your business should be visible.
                </p>
                <p>
                  Our SEO services are designed to increase organic search
                  visibility and attract relevant potential customers to your
                  website.
                </p>
                <p>
                  We combine keyword research, on-page SEO, technical
                  optimisation, content development, local SEO and competitor
                  analysis to create strategies focused on sustainable organic
                  growth.
                </p>
                <p>
                  We don’t chase traffic simply to make reports look impressive.
                </p>
                <p className="font-medium text-ink">
                  We focus on commercially valuable searches capable of
                  generating genuine business.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_18px_40px_-32px_rgba(5,7,13,0.35)] transition duration-300 hover:border-cyan/30 md:p-8 lg:p-10">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
              <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                PPC & Google Ads — Reach Customers at the Right Moment
              </h3>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
                <p>
                  SEO builds long-term visibility. PPC can put your business in
                  front of potential customers immediately.
                </p>
                <p>
                  Our PPC management and Google Ads services are designed around
                  generating qualified traffic, enquiries and sales while making
                  the most of your advertising budget.
                </p>
                <p>
                  From keyword and competitor research through to campaign
                  creation, conversion tracking, negative keyword management, bid
                  optimisation and landing page improvements, we continuously
                  work to improve performance.
                </p>
                <p className="font-medium text-ink">
                  Because clicks aren’t the end goal. Customers are.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              eyebrow="Why We Created Nexxo Digital"
              title="Digital Marketing Should Be About Business Growth"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
              <p>
                Businesses are constantly being told they need better websites, more
                content, SEO, Google Ads, social media and countless other digital
                services.
              </p>
              <p>
                But none of those things matter unless they contribute towards a
                clear objective.
              </p>
              <p>
                That’s why Nexxo Digital takes a commercially focused approach.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            We look at the complete journey:
          </p>
          <ul className="mx-auto mt-8 max-w-2xl space-y-5">
            {[
              'How will customers discover your business?',
              'Why will they choose to visit your website?',
              'What will convince them to trust you?',
              'What will make them enquire or purchase?',
            ].map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-ink/10 pb-5 last:border-b-0 last:pb-0"
              >
                <span className="font-display text-sm font-bold tracking-[0.18em] text-cyan">
                  0{index + 1}
                </span>
                <p className="text-base leading-relaxed text-slate md:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan/20 bg-gradient-to-br from-mist to-white p-6 text-center md:p-8">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
              And most importantly:
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
              How can we improve that process over time?
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
              By combining web design, SEO and PPC, we’re able to work across the
              entire customer journey rather than focusing on one isolated part
              of it.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading className="text-center" title="Our Approach" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-ink/8 bg-white p-6 text-center md:p-9">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand" />
            <h3 className="font-display text-2xl font-bold text-ink">
              {approach[0].title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              {approach[0].body}
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {approach.slice(1).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 md:p-7"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-xl font-bold text-brand md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg text-slate md:text-xl">
              That’s what{' '}
              <span className="font-display font-bold tracking-[0.08em]">
                <span className="text-brand">BUILD</span>
                <span className="text-ink/25">.</span>{' '}
                <span className="text-brand">RANK</span>
                <span className="text-ink/25">.</span>{' '}
                <span className="text-brand">GROW</span>
                <span className="text-ink/25">.</span>
              </span>{' '}
              means.
            </p>
            <p className="mt-4 font-display text-lg font-semibold text-ink md:text-xl">
              It’s not simply our tagline. It’s the strategy behind Nexxo
              Digital.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading className="text-center" title="Why Choose Nexxo Digital?" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/8 bg-mist/60 p-5 transition duration-300 hover:border-cyan/35 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(0,87,255,0.4)] md:p-6"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
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

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              eyebrow="One Team. One Strategy. One Goal."
              title="Your Growth."
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
              <p>A website shouldn’t exist in isolation.</p>
              <p>Neither should your SEO or Google Ads.</p>
              <p className="font-medium text-ink">
                When everything works together, your digital presence becomes
                significantly more powerful.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {[
              'PPC generates immediate visibility.',
              'SEO develops long-term organic growth.',
              'Your website turns that traffic into enquiries and customers.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-ink/10 pb-6 last:border-b-0 last:pb-0"
              >
                <span className="mt-2 h-1 w-8 shrink-0 rounded-full bg-brand" />
                <p className="text-lg leading-relaxed text-ink md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-slate md:text-xl">
            Nexxo Digital connects those elements into one strategy focused on
            helping your business move forward.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              eyebrow="Who We Work With"
              title="Built for Businesses That Want to Grow"
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate md:text-xl">
              <p>
                We work with ambitious businesses looking to improve how they
                attract customers online.
              </p>
              <p>
                Whether you’re starting a new company and need your first
                professional website, you’re an established business struggling to
                generate enough enquiries online, or you’re looking to scale an
                already successful digital marketing strategy, we can tailor our
                services around your objectives.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-cyan/20 bg-gradient-to-br from-mist to-white p-6 text-center md:p-9">
            <p className="text-lg leading-relaxed text-ink md:text-xl">
              Our solutions can support startups, local businesses, professional
              services, trades, e-commerce companies and established UK
              businesses looking for their next stage of growth.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading className="text-center" title="The Nexxo Standard" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
            We want every client relationship to be built around four things:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Performance', 'Transparency', 'Communication', 'Growth'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-ink/8 bg-white px-4 py-6"
                >
                  <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-brand" />
                  <p className="font-display text-lg font-bold text-ink">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            <p>
              We’re not interested in digital marketing for the sake of digital
              marketing.
            </p>
            <p className="font-medium text-ink">
              We want to understand what success looks like for your business and
              build a strategy designed to help achieve it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-blue uppercase">
            Ready to Take Your Business Further?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Let’s Build Something That Performs.
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate">
            <p>
              Whether you need a new website, stronger Google rankings,
              better-performing PPC campaigns or a complete digital strategy,
              talk to Nexxo Digital.
            </p>
            <p>
              Let’s find out where your business is today — and where we can take
              it next.
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
              GET YOUR FREE CONSULTATION
            </Link>
            <Link
              to="/quote"
              className="rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink/5"
            >
              SPEAK TO NEXXO DIGITAL
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
