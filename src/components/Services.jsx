export default function Services() {
  const items = [
    {
      title: 'Full Remodel',
      desc: 'From shell to sanctuary—holistic planning, materials, and execution.'
    },
    {
      title: 'Furnishing & Styling',
      desc: 'Layered textiles, curated pieces, and art direction for daily life.'
    },
    {
      title: 'Space Planning',
      desc: 'Flow, proportion, and function tailored to how you live.'
    },
    {
      title: 'Material & Finish Consultation',
      desc: 'Finish schedules, samples, and specification to ensure harmony.'
    },
    {
      title: 'Custom Furniture/Joinery',
      desc: 'Bespoke pieces and built-ins designed for permanence.'
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <h3 className="font-serif text-h2 tracking-tight text-ink mb-10">Services</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <div className="text-ink font-medium">{item.title}</div>
              <p className="text-muted mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
