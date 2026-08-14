import { useState } from 'react'

const needOptions = [
  'Website Design',
  'SEO',
  'PPC / Google Ads',
  'Website + SEO',
  'Website + PPC',
  'Complete Digital Strategy',
  'Not sure yet',
]

export default function QuoteForm({ variant = 'light' }) {
  const [submitted, setSubmitted] = useState(false)
  const dark = variant === 'dark'

  const fieldClass = dark
    ? 'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan/50 focus:bg-white/10 focus:ring-2 focus:ring-cyan/20 sm:text-base'
    : 'mt-2 w-full rounded-xl border border-ink/12 bg-mist/50 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-cyan/50 focus:bg-white focus:ring-2 focus:ring-cyan/20 sm:text-base'

  const labelClass = dark
    ? 'block text-sm font-medium text-white/80'
    : 'block text-sm font-medium text-ink'

  const optionClass = dark ? 'bg-[#071525] text-white' : 'bg-white text-ink'

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={
          dark
            ? 'rounded-2xl border border-white/10 bg-[#071525] p-8 text-center shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] md:p-10'
            : 'rounded-2xl border border-ink/8 bg-white p-8 text-center shadow-[0_18px_40px_-28px_rgba(5,7,13,0.2)] md:p-10'
        }
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className={`mt-5 font-display text-2xl font-bold md:text-3xl ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          Thank you
        </h3>
        <p className={`mt-3 ${dark ? 'text-white/70' : 'text-slate'}`}>
          We’ve received your request and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        dark
          ? 'relative overflow-hidden rounded-2xl border border-white/10 bg-[#071525] p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] sm:p-7 md:p-8'
          : 'relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_18px_40px_-28px_rgba(5,7,13,0.18)] sm:p-7 md:p-8'
      }
    >
      {dark ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(0,194,255,0.18),transparent_40%),radial-gradient(circle_at_10%_100%,rgba(0,87,255,0.16),transparent_45%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      )}

      <div className="relative">
        <div className="mb-6">
          <p
            className={`font-display text-xs font-semibold tracking-[0.2em] uppercase ${
              dark ? 'text-cyan' : 'text-blue'
            }`}
          >
            Contact
          </p>
          <h3
            className={`mt-2 font-display text-xl font-bold md:text-2xl ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            Request a Quote
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <label className={labelClass}>
            Name <span className="text-cyan">*</span>
            <input
              required
              name="name"
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Business Name
            <input
              name="business"
              autoComplete="organization"
              placeholder="Company name"
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Email <span className="text-cyan">*</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Telephone
            <input
              name="telephone"
              type="tel"
              autoComplete="tel"
              placeholder="+44..."
              className={fieldClass}
            />
          </label>
        </div>

        <label className={`mt-4 md:mt-5 ${labelClass}`}>
          What do you need? <span className="text-cyan">*</span>
          <select
            name="need"
            className={`${fieldClass} appearance-none`}
            defaultValue=""
            required
          >
            <option value="" disabled className={optionClass}>
              Select an option
            </option>
            {needOptions.map((option) => (
              <option key={option} value={option} className={optionClass}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={`mt-4 md:mt-5 ${labelClass}`}>
          Tell us about your project <span className="text-cyan">*</span>
          <textarea
            required
            name="project"
            rows={4}
            placeholder="Share a few details about your goals..."
            className={`${fieldClass} resize-y`}
          />
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110 sm:mt-7 md:w-auto"
        >
          Request a Quote
        </button>
      </div>
    </form>
  )
}
