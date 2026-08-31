import { Link } from 'react-router-dom'
import { contact, legal } from '../data/contact'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/web-design', label: 'Web Design' },
  { to: '/seo', label: 'SEO' },
  { to: '/ppc', label: 'PPC' },
  { to: '/quote', label: 'Request a Quote' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] md:px-8">
        <div>
          <img src="/Nexxo-Logo.png" alt="Nexxo Digital" className="h-16 w-auto md:h-20" />
          <p className="mt-5 font-display text-sm font-semibold tracking-[0.14em] md:tracking-[0.22em] text-cyan uppercase whitespace-nowrap">
            BUILD. RANK. GROW.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Nexxo Digital is a results-driven web design and digital marketing
            agency helping businesses build a stronger online presence and
            generate more customers.
          </p>
          <Link
            to="/quote"
            className="btn-brand mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get a Free Quote
          </Link>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-white/50 uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="transition hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-white/50 uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition hover:text-cyan"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
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
                  <span className="block text-xs tracking-[0.14em] text-white/45 uppercase">
                    Email
                  </span>
                  {contact.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 transition hover:text-cyan"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
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
                  <span className="block text-xs tracking-[0.14em] text-white/45 uppercase">
                    Mobile
                  </span>
                  {contact.phoneDisplay}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45 md:px-8">
        <div className="space-y-1 leading-relaxed">
          <p className="md:whitespace-nowrap">{legal.tradingNameLine}</p>
          <p>{legal.companyNumberLine}</p>
        </div>
        <p className="mt-3">
          © {new Date().getFullYear()} Nexxo Digital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
