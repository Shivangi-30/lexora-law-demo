import ConsultationForm from '../components/ConsultationForm.jsx'
import { firm } from '../data/content.js'

export default function Contact() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy-800 sm:text-5xl">
            Let&apos;s talk about your case
          </h1>
          <p className="mt-4 text-lg text-navy-500">
            Call, message or visit us. We reply to every enquiry within 24 hours.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl border border-navy-100 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-navy-500">Call</p>
              <a href={`tel:+${firm.phoneRaw}`} className="mt-1 block font-display text-2xl text-navy-800">
                {firm.phone}
              </a>
            </div>
            <div className="rounded-3xl border border-navy-100 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-navy-500">Email</p>
              <a href={`mailto:${firm.email}`} className="mt-1 block text-lg font-medium text-navy-800">
                {firm.email}
              </a>
            </div>
            <div className="rounded-3xl bg-navy-800 p-6 text-white">
              <p className="text-xs uppercase tracking-wider text-gold-400">Office</p>
              <p className="mt-1 text-base">{firm.address}</p>
              <p className="mt-1 text-sm text-navy-200">{firm.hours}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>
      </div>
    </section>
  )
}
