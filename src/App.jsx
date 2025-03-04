import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/ui/Footer";
import { useEffect, useState } from "react";
import Lenis from 'lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showFloatingButtons, setShowFloatingButtons] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf); // Sync Lenis with GSAP
    gsap.ticker.lagSmoothing(0); 
    
    // Create smooth ScrollTrigger for footer
    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top bottom-=100', // Start when footer top enters viewport
      end: 'bottom bottom',
      onEnter: () => setShowFloatingButtons(false),
      onLeaveBack: () => setShowFloatingButtons(true),
      // Optional: Reduce calculation frequency for performance
      toggleActions: 'play none none reverse'
    });
    
    return () => {
      gsap.ticker.remove(raf);
      // Clear ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <WebLoader />
      <div className="min-h-screen flex flex-col bg-light-200">
        <NavBar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
          {showFloatingButtons && <FloatingButtonsContainer />}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;