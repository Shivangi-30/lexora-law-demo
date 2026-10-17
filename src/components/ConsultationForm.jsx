import { useState } from 'react'
import { firm, practiceAreas } from '../data/content.js'

const initial = { name: '', phone: '', email: '', area: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[+]?[0-9\s-]{10,15}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number (10 to 15 digits).'
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.area) e.area = 'Please choose a practice area.'
  if (v.message.trim().length < 10) e.message = 'Please describe your matter in at least 10 characters.'
  return e
}

export default function ConsultationForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) setSent(true)
  }

  const waText = encodeURIComponent(
    `Hello, I am ${values.name}. Practice area: ${
      practiceAreas.find((p) => p.id === values.area)?.title || ''
    }. ${values.message}`
  )

  const field =
    'mt-1.5 w-full rounded-2xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/50'
  const label = 'block text-sm font-medium text-navy-800'
  const err = 'mt-1 text-xs text-red-600'

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold-300 bg-white p-8 text-center shadow-soft" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-300/40 text-2xl">
          ✓
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy-800">Request received</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-navy-500">
          Thank you, {values.name.split(' ')[0]}. This is a demo form, so nothing was sent. In the live site a
          lawyer would contact you within 24 hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${firm.phoneRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy-800 px-6 py-3 text-sm font-medium text-white hover:bg-navy-700"
          >
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initial)
              setSent(false)
            }}
            className="rounded-full border border-navy-200 px-6 py-3 text-sm font-medium text-navy-800 hover:border-gold-500"
          >
            Send another
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-navy-800">Request a free consultation</h3>
      <p className="mt-1 text-sm text-navy-500">Share a few details and we will get back to you within 24 hours.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" value={values.name} onChange={onChange} className={field} autoComplete="name" />
          {errors.name && <p className={err}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone *</label>
          <input id="phone" name="phone" value={values.phone} onChange={onChange} className={field} autoComplete="tel" inputMode="tel" />
          {errors.phone && <p className={err}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email (optional)</label>
          <input id="email" name="email" type="email" value={values.email} onChange={onChange} className={field} autoComplete="email" />
          {errors.email && <p className={err}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="area" className={label}>Practice area *</label>
          <select id="area" name="area" value={values.area} onChange={onChange} className={field}>
            <option value="">Select an area</option>
            {practiceAreas.map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
          {errors.area && <p className={err}>{errors.area}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Briefly describe your matter *</label>
          <textarea id="message" name="message" rows={4} value={values.message} onChange={onChange} className={field} />
          {errors.message && <p className={err}>{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-navy-800 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-navy-700"
      >
        Submit request
      </button>
      <p className="mt-3 text-center text-xs text-navy-500">
        Your details stay confidential. Submitting does not create an advocate-client relationship.
      </p>
    </form>
  )
}
