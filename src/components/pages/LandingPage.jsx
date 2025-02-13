import { useEffect, useRef } from 'react';
import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import About from '../ui/About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './../homepage/HeroSection';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const darkSectionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animation for dark sections sliding up
      gsap.to(darkSectionsRef.current, {
        ease: "none",
        scrollTrigger: {
          trigger: darkSectionsRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Light Hero Section */}
      <div className="relative z-0 bg-light-200">
        <Hero />
      </div>

      {/* Dark Sections Container */}
      <div
        ref={darkSectionsRef}
        className='bg-secondary-100 dark-section rounded-3xl relative  flex flex-col w-full min-h-screen items-center overflow-hidden'
      >

        <Motto />

               
          <About />
       

      </div>

      <div className="relative z-0 bg-light-200">
        {/* test hero sec */}
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;