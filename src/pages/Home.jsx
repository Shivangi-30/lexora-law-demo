import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import PracticeBento from '../components/PracticeBento.jsx'
import Process from '../components/Process.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Faq from '../components/Faq.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PracticeBento />
      <Process />
      <Testimonials />
      <Faq />
      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-800 px-8 py-14 text-center text-white sm:px-14">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Facing a legal problem? Talk to us first.</h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Your first 30-minute consultation is free and confidential.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-900 transition hover:bg-gold-400"
            >
              Book your consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
