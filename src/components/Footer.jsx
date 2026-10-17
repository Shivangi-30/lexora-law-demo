import { Link } from 'react-router-dom'
import { firm, navLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="w-full bg-navy-900 text-navy-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500 font-display text-lg text-navy-900">
              L
            </span>
            <span className="font-display text-xl text-white">{firm.full}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Clear, honest and effective legal counsel for individuals, families and businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Visit & contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{firm.address}</li>
            <li>{firm.hours}</li>
            <li>
              <a href={`tel:+${firm.phoneRaw}`} className="hover:text-white">
                {firm.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${firm.email}`} className="hover:text-white">
                {firm.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <p className="mx-auto w-full max-w-7xl px-4 py-5 text-xs text-navy-200 sm:px-6 lg:px-8">
          © 2026 {firm.full}. Demo website: all names, numbers and testimonials are placeholders. Content here is
          general information and not legal advice.
        </p>
      </div>
    </footer>
  )
}
