import AttorneyCard from '../components/AttorneyCard.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { attorneys } from '../data/content.js'

export default function Attorneys() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Our attorneys</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-navy-800 sm:text-5xl">
            Experienced advocates who treat your case as their own
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-500">
            Demo profiles shown for layout purposes.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {attorneys.map((a) => (
              <AttorneyCard key={a.name} a={a} />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}
