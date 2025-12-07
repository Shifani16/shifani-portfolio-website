import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FallingEffects from "./components/FallingEffects";
import MusicToggle from "./components/MusicToggle";

function App() {
  return (
     <div className="bg-blue-primary text-[#E8DCC2]">
      <FallingEffects />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />

      <MusicToggle />
    </div>
  );
}

export default App;
