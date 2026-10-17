import { firm } from '../data/content.js'

export default function FloatingWhatsApp() {
  const text = encodeURIComponent('Hello, I would like to book a free consultation.')
  return (
    <a
      href={`https://wa.me/${firm.phoneRaw}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-navy-800 px-4 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-navy-700"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-navy-900">💬</span>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  )
}
