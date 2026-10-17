import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { firm, navLinks } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-gold-600' : 'text-navy-700 hover:text-gold-600'
    }`

  return (
    <header className="sticky top-0 z-40 w-full border-b border-navy-100 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 font-display text-lg text-gold-400">
            L
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-navy-800">
            {firm.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:+${firm.phoneRaw}`}
            className="text-sm font-medium text-navy-700 hover:text-gold-600"
          >
            {firm.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-navy-800 px-5 py-2 text-sm font-medium text-white transition hover:bg-navy-700"
          >
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-paper px-4 pb-5 pt-3 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-navy-50 text-gold-600' : 'text-navy-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy-800 px-5 py-3 text-center text-sm font-medium text-white"
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
