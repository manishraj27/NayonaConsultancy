import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/ui/Footer/Footer";
import Service from "./components/pages/Service";
import ColorPaletteVisualizer from "./lib/ColorPaletteVisualizer";
import useScrollTrigger from "./lib/hooks/useScrollTrigger";
import NotFound from './components/ui/NotFound';
import UnsubscribePage from "./components/pages/UnsubscribePage";
import CloudService from "./components/pages/CloudService";

import AboutUsPage from "./components/pages/AboutUsPage";
import FooterUpper from "./components/ui/Footer/FooterUpper";


function App() {
  const showFloatingButtons = useScrollTrigger();

  return (
    <>
      <WebLoader />
      <div className="min-h-screen flex flex-col bg-light-200">
        <NavBar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about/us" element={<AboutUsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/enterprise" element={<Service />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/unsubscribe" element={<UnsubscribePage/>} />
            <Route path="/color-palette" element={<ColorPaletteVisualizer />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          {showFloatingButtons && <FloatingButtonsContainer />}
          <Footer />
          {/* <FooterUpper /> */}
        </main>
      </div>
    </>
  );
}

export default App;
