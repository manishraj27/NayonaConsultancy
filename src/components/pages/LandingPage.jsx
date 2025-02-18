import { useEffect, useRef } from "react";
import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import About from "../ui/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./../homepage/HeroSection";

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Main container for the parallax effect */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Fixed Hero Section */}
        <div className="fixed top-0 left-0 w-full h-screen z-10">
          <Hero />
        </div>

        {/* Dark Sections Container that slides up */}
        <div
          ref={darkSectionsRef}
          className="absolute dark-section top-full left-0 w-full min-h-screen bg-background-100 rounded-3xl z-20"
        >
          <Motto />
          <About />
        </div>
      </div>

      {/* Additional content that appears after the animation */}
      <div className="relative z-30 bg-light-200  rounded-b-3xl">
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;