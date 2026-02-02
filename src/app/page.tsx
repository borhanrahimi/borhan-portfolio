import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="theme-bg theme-text">
      <section className="snap-section delay-0">
        <Navbar />
      </section>

      <section className="snap-section delay-80">
        <Hero />
      </section>

      <section className="snap-section delay-160">
        <About />
      </section>

      <section className="snap-section delay-240">
        <Work />
      </section>

      <section className="snap-section delay-320">
        <Skills />
      </section>

      <section className="snap-section delay-400">
        <Contact />
      </section>

      <section className="snap-section delay-480">
        <Footer />
      </section>
    </main>
  );
}
