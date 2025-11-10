export default function Process() {
  const steps = [
    { title: 'Consultation', desc: 'A conversation to understand your needs, context, and aspirations.' },
    { title: 'Concept & Visualization', desc: 'Material palettes, plans, and visual direction.' },
    { title: 'Execution & Styling', desc: 'Implementation, final styling, and handover.' },
  ]
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <h3 className="font-serif text-h2 tracking-tight text-ink mb-10">Process</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <div className="text-sm text-muted">{String(i+1).padStart(2,'0')}</div>
              <div className="text-ink font-medium mt-1">{s.title}</div>
              <p className="text-muted mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
