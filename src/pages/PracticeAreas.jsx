import PracticeBento from '../components/PracticeBento.jsx'
import Process from '../components/Process.jsx'

export default function PracticeAreas() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Practice areas</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-navy-800 sm:text-5xl">
            Legal support built around your situation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-500">
            Six focus areas, each led by an advocate who handles these matters every day.
          </p>
        </div>
      </section>
      <PracticeBento showHeading={false} detailed />
      <Process />
    </>
  )
}
