import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ColorGoogle, GoogleText } from '../components/GoogleText'

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

export default function Ppc() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-5 pt-32 pb-20 text-white md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/Google-Ads-hero-BG.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto max-w-4xl">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.24em] text-cyan uppercase">
            <ColorGoogle text="PPC & GOOGLE ADS" />
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Get In Front of Customers Ready to Buy
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-3xl text-lg text-white/75 md:text-xl">
            Want results without waiting for organic rankings to develop?
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
              <ColorGoogle text="Nexxo Digital creates and manages PPC and Google Ads campaigns designed to put your business in front of potential customers at the moment they’re actively searching for your services." />
            </p>
            <p>But generating clicks isn’t the objective.</p>
            <p className="font-display text-xl font-bold text-ink">
              Generating profitable enquiries is.
            </p>
            <p>
              We focus on campaign structure, keyword targeting, ad messaging and
              conversion performance to help maximise the value of your advertising
              budget.
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
              title={
                <>
                  PPC & <GoogleText /> Ads — Reach Customers at the Right Moment
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
              <p>
                SEO builds long-term visibility. PPC can put your business in front
                of potential customers immediately.
              </p>
              <p>
                <ColorGoogle text="Our PPC management and Google Ads services are designed around generating qualified traffic, enquiries and sales while making the most of your advertising budget." />
              </p>
              <p>
                From keyword and competitor research through to campaign creation,
                conversion tracking, negative keyword management, bid optimisation
                and landing page improvements, we continuously work to improve
                performance.
              </p>
              <p className="font-display text-xl font-bold text-ink">
                Because clicks aren’t the end goal. Customers are.
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
              title="Our PPC management includes:"
            />
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ppcIncludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3.5 text-sm text-slate transition duration-300 hover:border-cyan/35 md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <ColorGoogle text={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.2),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(0,87,255,0.26),transparent_48%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            More Than Clicks. We Focus on Customers.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/75 md:text-xl">
            PPC generates immediate visibility. SEO develops long-term organic
            growth. Your website turns that traffic into enquiries and customers.
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
