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

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-blue/20 bg-white p-8 text-center md:p-10">
        <h3 className="font-display text-2xl font-bold text-ink">Thank you</h3>
        <p className="mt-3 text-slate">
          We’ve received your request and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(5,7,13,0.5)] md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            className="mt-2 w-full border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Business Name
          <input
            name="business"
            className="mt-2 w-full border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Telephone
          <input
            name="telephone"
            className="mt-2 w-full border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-ink">
        What do you need?
        <select
          name="need"
          className="mt-2 w-full border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-ink">
        Tell us about your project
        <textarea
          required
          name="project"
          rows={5}
          className="mt-2 w-full resize-y border border-ink/15 bg-[#f8fafc] px-4 py-3 outline-none transition focus:border-blue"
        />
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110 md:w-auto"
      >
        Request a Quote
      </button>
    </form>
  )
}
