import { stats } from '../data/content.js'

export default function StatsStrip() {
  return (
    <section className="w-full border-y border-navy-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-semibold text-navy-800">{s.value}</p>
            <p className="mt-1 text-sm text-navy-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
