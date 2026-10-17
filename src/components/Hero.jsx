import { Link } from 'react-router-dom'
import { firm } from '../data/content.js'

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="lx-rise inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1 text-xs font-medium text-navy-500">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            Trusted legal counsel since 2008
          </p>
          <h1 className="lx-rise-2 mt-6 font-display text-4xl font-semibold leading-[1.1] text-navy-800 sm:text-5xl lg:text-6xl">
            Clear advice.
            <br />
            Strong advocacy.
            <br />
            <span className="text-gold-600">Real results.</span>
          </h1>
          <p className="lx-rise-3 mt-6 max-w-xl text-lg leading-relaxed text-navy-500">
            {firm.full} helps individuals, families and businesses solve legal problems with honesty, speed and
            plain-language guidance.
          </p>
          <div className="lx-rise-3 mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-navy-800 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-navy-700"
            >
              Book a free consultation
            </Link>
            <Link
              to="/practice-areas"
              className="rounded-full border border-navy-200 px-7 py-3.5 text-sm font-medium text-navy-800 transition hover:border-gold-500 hover:text-gold-600"
            >
              Explore practice areas
            </Link>
          </div>
        </div>

        <div className="lx-rise-2 lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-3xl bg-navy-800 p-7 text-white shadow-soft">
              <p className="text-xs uppercase tracking-widest text-gold-400">Free first consultation</p>
              <p className="mt-3 font-display text-2xl leading-snug">
                30 minutes with a senior advocate, no obligation.
              </p>
            </div>
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft">
              <p className="font-display text-4xl text-navy-800">24h</p>
              <p className="mt-1 text-sm text-navy-500">Guaranteed response</p>
            </div>
            <div className="rounded-3xl border border-gold-300 bg-gold-300/30 p-6">
              <p className="font-display text-4xl text-navy-800">96%</p>
              <p className="mt-1 text-sm text-navy-700">Clients satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
