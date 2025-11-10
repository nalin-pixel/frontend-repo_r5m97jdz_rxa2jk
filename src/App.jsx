import Splash from './components/Splash'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      <Splash />
      <Header />
      <main className="space-y-20 md:space-y-28">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
