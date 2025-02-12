import React, { useEffect, useRef } from 'react';
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
      // Set initial states
      gsap.set(containerRef.current, {
        perspective: 1000,
      });
      
      gsap.set(mottoRef.current, {
        translateY: '100vh',
      });

      // Create the scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          markers: false,
        }
      });

      // Smooth slide-over animation
      tl.to(mottoRef.current, {
        translateY: '0vh',
        ease: "none",
        duration: 1
      })
      .to(heroRef.current, {
        translateY: '-15vh',
        ease: "power1.inOut",
        duration: 0.5
      }, 0);
    });

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
          style={{ willChange: 'transform' }}
        >
          <Hero />
        </div>
        
        {/* Motto Section */}
        <div 
          ref={mottoRef}
          className="relative w-full bg-light-200"
          style={{ willChange: 'transform' }}
        >
          <Motto />
          {/* Add extra space for smooth scrolling */}
          <div className="h-screen bg-light-200" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;