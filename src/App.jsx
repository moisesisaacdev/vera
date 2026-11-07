import Header from "./components/Header"
import Hero from "./sections/Hero"
import Atelier from "./sections/Atelier"
import Collection from "./sections/Collection"
import Services from "./sections/Services"
import Quote from "./sections/Quote"
import Cta from "./sections/Cta"
import Footer from "./components/Footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const links = document.querySelectorAll("nav > ul > li > a")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            if (link.href === `${location.origin}/#${entry.target.id}`) {
              link.classList.add("active")
            } else {
              link.classList.remove("active")
            }
          })
        }
      })
    }, { threshold: 0.2 })

    sections.forEach(section => observer.observe(section))

  })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atelier />
        <Collection />
        <Services />
        <Quote />
        <Cta />
        <Footer />
      </main>
    </>
  )
}

export default App