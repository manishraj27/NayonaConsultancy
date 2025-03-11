import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import LandingPage from "./components/pages/LandingPage";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorPaletteVisualizer from "./lib/ColorPaletteVisualizer";
import Footer from "./components/ui/Footer/Footer";
import Service from "./components/pages/Service";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showFloatingButtons, setShowFloatingButtons] = useState(true);

  useEffect(() => {
    // Create smooth ScrollTrigger for footer
    ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom-=100", // Start when footer top enters viewport
      end: "bottom bottom",
      onEnter: () => setShowFloatingButtons(false),
      onLeaveBack: () => setShowFloatingButtons(true),
      // Optional: Reduce calculation frequency for performance
      toggleActions: "play none none reverse",
    });

    return () => {
      // Clear ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
            <Route path="/services/enterprise" element={<Service />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/color-palette" element={<ColorPaletteVisualizer />} />
          </Routes>
          {showFloatingButtons && <FloatingButtonsContainer />}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
