import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

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

export default function Seo() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-5 pt-32 pb-20 text-white md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <div className="relative mx-auto max-w-4xl">
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="animate-rise h-14 w-auto"
          />
          <p className="animate-rise mt-6 font-display text-sm font-semibold tracking-[0.24em] text-cyan uppercase">
            SEO
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Get Found When Your Customers Search Google
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

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          <p>
            Our SEO services are designed to improve your visibility across
            Google and help your business appear for searches that can generate
            genuine customers.
          </p>
          <p>
            Rather than chasing meaningless traffic numbers, we focus on the
            keywords and searches that matter commercially to your business.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Search Engine Optimisation — Rank Where Your Customers Are Searching"
          />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
            <p>
              When someone searches Google for the products or services you
              provide, your business should be visible.
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
            <p className="font-medium text-ink">
              We focus on commercially valuable searches capable of generating
              genuine business.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our SEO strategies can include:" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {seoStrategies.map((item) => (
              <div key={item.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink-soft px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Don’t Just Have a Website. Make Sure People Find It.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/75">
            SEO builds long-term visibility. PPC can put your business in front
            of potential customers immediately.
          </p>
          <p className="mt-6 font-display text-xl font-bold tracking-[0.12em] text-cyan">
            BUILD. RANK. GROW.
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
