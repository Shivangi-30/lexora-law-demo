export default function AttorneyCard({ a }) {
  return (
    <article className="rounded-3xl border border-navy-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-800 font-display text-xl text-gold-400">
          {a.initials}
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-navy-800">{a.name}</h3>
          <p className="text-sm text-gold-600">{a.role}</p>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-navy-50 p-3">
          <dt className="text-xs uppercase tracking-wider text-navy-500">Focus</dt>
          <dd className="mt-1 font-medium text-navy-800">{a.focus}</dd>
        </div>
        <div className="rounded-2xl bg-navy-50 p-3">
          <dt className="text-xs uppercase tracking-wider text-navy-500">Experience</dt>
          <dd className="mt-1 font-medium text-navy-800">{a.exp}</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-relaxed text-navy-500">{a.bio}</p>
    </article>
  )
}
