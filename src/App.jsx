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
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/enterprise" element={<Service />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/unsubscribe" element={<UnsubscribePage/>} />
            <Route path="/color-palette" element={<ColorPaletteVisualizer />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          {showFloatingButtons && <FloatingButtonsContainer />}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
