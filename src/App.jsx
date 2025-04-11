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
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookiesPolicy from './components/pages/CookiesPolicy';
import Legal from './components/pages/Legal';
import ScrollToTop from './components/ui/ScrollToTop';

import AboutUsPage from "./components/pages/AboutUsPage";
import Blog from "./components/pages/Blog";
import BlogList from "./components/pages/BlogsList";
import JobDetail from "./components/ui/JobDetail";
import JobApplication from "./components/ui/JobApplication";


function App() {
  const showFloatingButtons = useScrollTrigger();

  return (
    <>
      <WebLoader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-light-200">
        <NavBar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about/us" element={<AboutUsPage />} />
            <Route path="/resources/blogs" element={<BlogList />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/enterprise" element={<Service />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/job/:slug" element={<JobDetail/>} />
            <Route path="/jobs/:slug/apply" element={<JobApplication />} />
            <Route path="/unsubscribe" element={<UnsubscribePage/>} />
            <Route path="/color-palette" element={<ColorPaletteVisualizer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/legal" element={<Legal />} />
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
