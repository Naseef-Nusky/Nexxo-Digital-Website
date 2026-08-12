import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/web-design', label: 'Web Design' },
  { to: '/seo', label: 'SEO' },
  { to: '/ppc', label: 'PPC' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition hover:text-cyan ${isActive ? 'text-cyan' : 'text-white/80'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            className="rounded-full bg-brand px-5 py-2.5 font-semibold text-white transition hover:brightness-110"
          >
            Get a Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-white/90">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full bg-brand px-5 py-2.5 font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
