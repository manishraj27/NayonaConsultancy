import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/ui/Footer";
import { useEffect, useState, useRef } from "react";
import Lenis from 'lenis';
import gsap from "gsap";

function App() {
  const [showFloatingButtons, setShowFloatingButtons] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf); // Sync Lenis with GSAP
    gsap.ticker.lagSmoothing(0); 
    
    // Add intersection observer to detect when footer is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide floating buttons when footer is visible
          setShowFloatingButtons(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of footer is visible
    );
    
    // Get footer element and observe it
    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      gsap.ticker.remove(raf);
      if (footer) {
        observer.unobserve(footer);
      }
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;