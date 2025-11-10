export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <div className="rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
            <img src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop" alt="Portrait of the designer" className="w-full h-[420px] object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-serif text-h2 tracking-tight text-ink">About</h3>
          <p className="mt-4 text-muted leading-relaxed text-body">I craft interiors with a quiet, modern sensibility—balancing proportion, texture, and light. My practice is grounded in a deep respect for materials and the people who live with them every day.</p>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <Stat label="Years" value="10+" />
            <Stat label="Projects" value="65" />
            <Stat label="Locations" value="7" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
      <div className="text-2xl font-semibold text-ink">{value}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  )
}
