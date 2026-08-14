import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ColorGoogle, GoogleText } from '../components/GoogleText'

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

export default function Seo() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-5 pt-32 pb-20 text-white md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/seo-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto max-w-4xl">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.24em] text-cyan uppercase">
            SEO
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Get Found When Your Customers Search <GoogleText />
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-3xl text-lg text-white/75 md:text-xl">
            A great website has limited value if nobody can find it.
          </p>
          <Link
            to="/quote"
            className="mt-10 inline-flex rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <div className="space-y-6 text-lg leading-relaxed text-slate md:text-xl">
            <p>
              <ColorGoogle text="Our SEO services are designed to improve your visibility across Google and help your business appear for searches that can generate genuine customers." />
            </p>
            <p>
              Rather than chasing meaningless traffic numbers, we focus on the
              keywords and searches that matter commercially to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Search Engine Optimisation — Rank Where Your Customers Are Searching"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
              <p>
                <ColorGoogle text="When someone searches Google for the products or services you provide, your business should be visible." />
              </p>
              <p>
                Our SEO services are designed to increase organic search visibility
                and attract relevant potential customers to your website.
              </p>
              <p>
                We combine keyword research, on-page SEO, technical optimisation,
                content development, local SEO and competitor analysis to create
                strategies focused on sustainable organic growth.
              </p>
              <p>
                We don’t chase traffic simply to make reports look impressive.
              </p>
              <p className="font-display text-xl font-bold text-ink">
                We focus on commercially valuable searches capable of generating
                genuine business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Our SEO strategies can include:"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.2),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(0,87,255,0.26),transparent_48%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Don’t Just Have a Website. Make Sure People Find It.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/75 md:text-xl">
            SEO builds long-term visibility. PPC can put your business in front
            of potential customers immediately.
          </p>
          <p className="mt-8 font-display text-xl font-bold tracking-[0.12em] md:text-2xl">
            <span className="text-brand">BUILD</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-white/35">.</span>
          </p>
          <Link
            to="/quote"
            className="mt-10 inline-flex rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            GET YOUR FREE CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  )
}
