export default function Testimonials() {
  const items = [
    {
      name: 'S. Williams',
      quote: 'The apartment feels calm and intentional. We notice the details every day.',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'R. Chen',
      quote: 'Elegant, warm, and functional—exactly what we hoped for.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <h3 className="font-serif text-h2 tracking-tight text-ink mb-10">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map(t => (
            <div key={t.name} className="grid grid-cols-5 gap-6 items-center">
              <div className="col-span-2 rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
                <img src={t.img} alt={t.name} className="w-full h-48 object-cover" loading="lazy" />
              </div>
              <blockquote className="col-span-3">
                <p className="font-serif text-h3 text-ink">“{t.quote}”</p>
                <div className="text-muted mt-2">— {t.name}</div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
