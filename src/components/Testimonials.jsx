import { testimonials } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Testimonials() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title="What clients say about working with us"
          text="Demo testimonials shown for layout purposes."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`flex flex-col justify-between rounded-3xl border p-7 ${
                i === 1 ? 'border-navy-800 bg-navy-800 text-white' : 'border-navy-100 bg-white'
              }`}
            >
              <blockquote
                className={`font-display text-lg leading-relaxed ${i === 1 ? 'text-white' : 'text-navy-800'}`}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className={`font-semibold ${i === 1 ? 'text-gold-400' : 'text-navy-800'}`}>{t.name}</span>
                <span className={i === 1 ? 'text-navy-200' : 'text-navy-500'}> · {t.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
