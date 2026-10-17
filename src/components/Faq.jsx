import { useState } from 'react'
import { faqs } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-white border-y border-navy-100">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear most"
            text="Can't find your answer? Send us a message and we will reply within 24 hours."
          />
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="rounded-2xl border border-navy-100 bg-paper">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="font-medium text-navy-800">{f.q}</span>
                  <span className="text-xl text-gold-600" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-navy-500">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
