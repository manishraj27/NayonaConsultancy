import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import Hero from "./components/homepage/Hero";
import NavBar from "./components/ui/NavBar";
import Career from "./components/homepage/Career";
import FloatingButtonsContainer from "./components/ui/FloatingButtonsContainer";
import WebLoader from "./components/ui/WebLoader";
import Features from "./components/homepage/Features";
import LandingPage from "./components/pages/LandingPage";



function App() {




  return (
    <>
   
      <WebLoader />
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
      <FloatingButtonsContainer />
    </>

  );
}

export default App;
