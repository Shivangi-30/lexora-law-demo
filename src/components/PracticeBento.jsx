import { Link } from 'react-router-dom'
import { practiceAreas } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

// Bento layout on large screens: lg cards span 2 columns, md cards span 1.
export default function PracticeBento({ showHeading = true, detailed = false }) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Practice areas"
            title="Expert help across the areas that matter most"
            text="Focused teams, one standard: clear communication and carefully prepared cases."
          />
        )}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? 'mt-12' : ''}`}>
          {practiceAreas.map((a) => (
            <article
              key={a.id}
              className={`group flex flex-col justify-between rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-soft ${
                a.size === 'lg'
                  ? 'bg-navy-800 text-white border-navy-800 lg:col-span-2'
                  : 'bg-white text-navy-800 border-navy-100'
              }`}
            >
              <div>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
                    a.size === 'lg' ? 'bg-white/10' : 'bg-navy-50'
                  }`}
                  aria-hidden="true"
                >
                  {a.icon}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{a.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    a.size === 'lg' ? 'text-navy-200' : 'text-navy-500'
                  }`}
                >
                  {detailed ? a.long : a.short}
                </p>
              </div>
              <Link
                to="/contact"
                className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${
                  a.size === 'lg' ? 'text-gold-400' : 'text-gold-600'
                }`}
              >
                Discuss your case <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
