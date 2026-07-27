import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="content" className="theme-bg theme-text">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
