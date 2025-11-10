import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(255_255_255_/_0.6)]' : 'bg-transparent'}`}>
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-center mx-auto">
          <span className="font-serif text-xl tracking-tight text-ink">A. Hart</span>
        </div>
        <nav className="hidden md:flex gap-6 absolute right-6 top-1/2 -translate-y-1/2 text-sm text-muted">
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
