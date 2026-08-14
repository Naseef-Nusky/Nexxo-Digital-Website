import QuoteForm from '../components/QuoteForm'
import { contact } from '../data/contact'

export default function Quote() {
  return (
    <main>
      <section className="relative flex min-h-[58vh] items-center overflow-hidden bg-ink px-5 pt-28 pb-16 text-white md:block md:min-h-0 md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/Contact-hero-BG.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto w-full max-w-4xl text-center">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.14em] md:tracking-[0.24em] text-cyan uppercase">
            Contact Us
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Let’s Build Something Great
          </h1>
          <p className="animate-rise-delay-2 mx-auto mt-6 max-w-3xl text-base text-white/75 md:text-xl">
            Tell us a little about your project and we’ll get back to you.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <div>
            <div className="mb-4 h-1 w-14 rounded-full bg-brand" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
              Share a few details about your business and goals. We’ll help
              shape the right mix of website design, SEO and PPC.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white p-4 transition hover:border-cyan/35"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-blue">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m6 8 6 5 6-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs tracking-[0.14em] text-slate uppercase">
                    Email
                  </span>
                  <span className="font-medium text-ink">{contact.email}</span>
                </span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white p-4 transition hover:border-cyan/35"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-blue">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M8.5 4.5h2.2l1.1 3.2-1.4 1.4a12.5 12.5 0 0 0 5.5 5.5l1.4-1.4 3.2 1.1v2.2A2 2 0 0 1 18.5 18.5 13.5 13.5 0 0 1 5 5a2 2 0 0 1 2-2h1.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs tracking-[0.14em] text-slate uppercase">
                    Mobile
                  </span>
                  <span className="font-medium text-ink">{contact.phoneDisplay}</span>
                </span>
              </a>
            </div>

            <p className="mt-8 font-display text-lg font-bold tracking-[0.1em] whitespace-nowrap">
              <span className="text-brand">BUILD</span>
              <span className="text-ink/25">.</span>{' '}
              <span className="text-brand">RANK</span>
              <span className="text-ink/25">.</span>{' '}
              <span className="text-brand">GROW</span>
              <span className="text-ink/25">.</span>
            </p>
          </div>

          <div>
            <QuoteForm variant="light" />
          </div>
        </div>
      </section>
    </main>
  )
}
