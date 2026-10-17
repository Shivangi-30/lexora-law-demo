import { steps } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Process() {
  return (
    <section className="w-full bg-white border-y border-navy-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A simple, transparent process"
          text="No jargon and no surprises, just a clear path from first call to resolution."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl border border-navy-100 bg-paper p-7">
              <span className="font-display text-3xl text-gold-500">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold text-navy-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
