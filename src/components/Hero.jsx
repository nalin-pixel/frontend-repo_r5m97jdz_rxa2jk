export default function Hero() {
  return (
    <section className="pt-28">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="rounded-[32px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d51?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury interior hero"
            className="w-full h-[60vh] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:rgb(0_0_0_/_0.25)] to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-[var(--surface)]">
            <h2 className="font-serif tracking-tight text-h1 leading-tight">I create calm, curated spaces for modern living.</h2>
            <p className="mt-3 max-w-xl text-body text-[var(--surface)]/90">Spaces that breathe. Materials that age gracefully. Function that feels effortless.</p>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] grid place-items-center shadow-sm">
            <span className="sr-only">Scroll down</span>
            <div className="w-1 h-3 rounded-full bg-[var(--ink)]/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
