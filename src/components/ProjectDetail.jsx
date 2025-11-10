import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Not found')
        return r.json()
      })
      .then(setProject)
      .catch(() => setError('Project not found'))
  }, [slug])

  if (error) {
    return (
      <div className="max-w-[1320px] mx-auto px-6 py-32">
        <p className="text-muted">{error}</p>
        <Link to="/" className="btn-secondary mt-6 inline-block">Back to portfolio</Link>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="max-w-[1320px] mx-auto px-6 py-32 text-muted">Loading…</div>
    )
  }

  return (
    <article className="pt-28">
      <div className="w-full">
        <img src={project.cover} alt={project.title} className="w-full h-[60vh] object-cover" />
      </div>
      <div className="max-w-[960px] mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-h1 tracking-tight text-ink">{project.title}</h1>
        <p className="text-muted mt-3">{project.excerpt}</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {project.year && <Fact label="Year" value={project.year} />}
          {project.location && <Fact label="Location" value={project.location} />}
          {project.area && <Fact label="Area" value={project.area} />}
          {project.scope && <Fact label="Scope" value={project.scope} />}
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-6 pb-24">
        {(project.images || []).map((src, i) => (
          <img key={i} src={src} alt={`${project.title} image ${i+1}`} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] object-cover w-full h-[420px]" loading="lazy" />
        ))}
      </div>
    </article>
  )
}

function Fact({ label, value }) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
      <div className="text-muted">{label}</div>
      <div className="text-ink font-medium">{value}</div>
    </div>
  )
}
