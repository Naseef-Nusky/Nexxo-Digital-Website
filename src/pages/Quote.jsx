import QuoteForm from '../components/QuoteForm'

export default function Quote() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-5 pt-32 pb-16 text-white md:px-8 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="animate-rise mx-auto h-14 w-auto"
          />
          <h1 className="animate-rise-delay mt-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Let’s Build Something Great
          </h1>
          <p className="animate-rise-delay-2 mt-5 text-lg text-white/75 md:text-xl">
            Request a Quote
          </p>
          <p className="mt-4 font-display text-sm font-semibold tracking-[0.22em] text-cyan uppercase">
            BUILD. RANK. GROW.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </main>
  )
}
