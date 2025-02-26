import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/ui/Footer";
import { useEffect } from "react";
import Lenis from 'lenis';
import gsap from "gsap";



function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf); // Sync Lenis with GSAP
    gsap.ticker.lagSmoothing(0); 
    return () => {
      gsap.ticker.remove(raf); 
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
          <FloatingButtonsContainer />
        
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
