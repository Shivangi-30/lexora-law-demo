export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-800 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-navy-500">{text}</p>}
    </div>
  )
}
