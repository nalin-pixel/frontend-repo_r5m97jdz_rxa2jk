import { useEffect, useState } from 'react'

export default function Splash() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const p = Math.min(1, y / 240)
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const opacity = 1 - progress
  const translate = -20 * progress

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center"
      style={{ opacity }}
    >
      <div
        className="mx-auto w-full h-full flex items-center justify-center"
        style={{ transform: `translateY(${translate}px)` }}
      >
        <div className="text-center p-10">
          <div className="inline-flex items-center justify-center rounded-3xl px-8 py-6 bg-[var(--surface)] shadow-sm border border-[var(--line)]">
            <div className="space-y-3">
              <h1 className="font-serif text-ink tracking-tight text-display leading-none">
                A. Hart
              </h1>
              <p className="text-muted text-sm uppercase tracking-[0.2em]">Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--bg)]" />
    </div>
  )
}
