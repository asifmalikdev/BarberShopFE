import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Locations from './components/Locations'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <Services />
      <section id="team">
        <Team />
      </section>
      <Locations />
      <Footer />
    </main>
  )
}