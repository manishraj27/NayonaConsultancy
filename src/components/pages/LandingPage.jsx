import { useEffect, useRef } from 'react';
import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const mottoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(mottoRef.current, {
        y: '100vh'
      });

      // Create scroll animation
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })
      .to(mottoRef.current, {
        y: 0,
        ease: "none",
      })
      .to(heroRef.current, {
        y: -100,
        opacity: 0.9,
        ease: "power1.inOut",
      }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="relative min-h-screen bg-light-200 overflow-hidden"
      >
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className="fixed top-0 left-0 w-full h-screen"
        >
          <Hero />
        </div>
        
        {/* Motto Section */}
        <div 
          ref={mottoRef}
          className="relative w-full"
        >
          <Motto />
          <div className="h-screen" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;