import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/background";
import About from "./components/About";
import { Hero } from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { WindowFrame } from "./components/WindowFrame";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import { useEffect, useState } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if(showIntro) {
      document.body.style.overflow = "hidden";
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => {
      clearTimeout(timer);

      document.body.style.overflow = "unset";
    };
  }, [showIntro]);

  return (
    <BrowserRouter>
    {showIntro && <Intro></Intro>}
      <div>
        <Background />

        <WindowFrame>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Navigation />
                </>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </WindowFrame>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
