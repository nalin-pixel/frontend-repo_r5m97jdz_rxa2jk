import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('Sending...')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thank you — I will be in touch soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 md:p-12">
          <h3 className="font-serif text-h2 tracking-tight text-ink">Consultation</h3>
          <p className="text-muted mt-3">Share a few details and I’ll respond within two business days.</p>
          <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
            <Field label="Name">
              <input name="name" required className="input" placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required className="input" placeholder="name@example.com" />
            </Field>
            <Field label="Project Type" span>
              <select name="project_type" className="input">
                <option>Full Remodel</option>
                <option>Furnishing & Styling</option>
                <option>Space Planning</option>
                <option>Material & Finish Consultation</option>
                <option>Custom Furniture/Joinery</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" span>
              <textarea name="message" rows="5" className="input" placeholder="Tell me about your project" />
            </Field>
            <div className="md:col-span-2 flex items-center gap-6">
              <button className="btn-primary" type="submit">Send</button>
              <span className="text-muted text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, span }) {
  return (
    <label className={`flex flex-col gap-2 ${span ? 'md:col-span-2' : ''}`}>
      <span className="text-sm text-muted">{label}</span>
      {children}
    </label>
  )
}
