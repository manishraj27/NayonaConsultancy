import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/homepage/Contact";
import Hero from "./components/homepage/Hero";
import NavBar from "./components/ui/NavBar";
import NayonaLoader from "./components/ui/NayonaLoader";
import { useState } from "react";
import Career from "./components/homepage/Career";

function App() {


  const [isLoaded, setIsLoaded] = useState(false);



  return (
    <>
    <NayonaLoader onLoadingComplete={() => setIsLoaded(true)} />
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
       
      </div>
    </>
  );
}

export default App;
