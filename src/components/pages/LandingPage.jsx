import { useEffect, useRef } from "react";
import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import About from "../ui/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Testimonials } from "../ui/Testimonials";
import TrustedBySection from "../ui/TrustedBySection";
import MarqueeText from "../ui/MarqueeText";
import FAQAcc from './../ui/FAQAcc';
import SerivesSection from "../ui/ServicesSection";
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const darkSectionsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up the scroll trigger animation
      gsap.to(darkSectionsRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef); // Scope the context to the containerRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    
    <div className="relative" role="main">
      {/* Main container for the parallax effect */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Fixed Hero Section */}
        <div className="fixed top-0 left-0 w-full h-screen z-10" aria-label="Hero Section">
          <Hero />
        </div>

        {/* Dark Sections Container that slides up */}
        <div
          ref={darkSectionsRef}
          className="absolute dark-section top-full left-0 right-0 w-full min-h-screen bg-background-100 rounded-[40px] z-20"
          aria-label="Content Sections"
        >
         {/* <MarqueeText /> */}
          <Motto />
         {/* <SerivesSection /> */}
          <About />
          <Testimonials />
          <FAQAcc/>
          {/* <MarqueeText /> */}
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;