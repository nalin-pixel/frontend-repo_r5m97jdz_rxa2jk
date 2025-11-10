import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Portfolio() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <h3 className="font-serif text-h2 tracking-tight text-ink mb-10">Portfolio</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {projects.map(p => (
            <a key={p.slug} href={`/project/${p.slug}`} className="group block">
              <div className="rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <div className="text-ink font-medium">{p.title}</div>
                  <div className="text-muted text-sm">{p.location || p.year}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
