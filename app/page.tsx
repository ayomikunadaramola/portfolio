import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import GitHubStats from '@/components/GitHubStats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Certifications />
      <GitHubStats />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
