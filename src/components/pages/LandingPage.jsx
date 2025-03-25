// import { useEffect, useRef } from "react";
// import Hero from "../homepage/Hero";
// import Motto from "../ui/Motto";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Testimonials } from "../ui/Testimonials";
// import FAQAcc from "./../ui/FAQAcc";
// import { HomePageServiceSection } from "../homepage/HomePageServiceSection";

// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   const darkSectionsRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(darkSectionsRef.current, {
//         yPercent: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=100%",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="relative" role="main">
//       <div ref={containerRef} className="div1 relative h-screen overflow-hidden">
//         <div
//           className="fixed top-0 left-0 w-full h-screen z-10"
//           aria-label="Hero Section"
//         >
//           <Hero />
//         </div>
//         <div
//           ref={darkSectionsRef}
//           className="absolute dark-section top-full left-0 right-0 w-full min-h-screen bg-background-100 rounded-t-[40px] z-20"
//         >
//           <Motto />
//         </div>
//       </div>

//       <div className="div2 dark-section overflow-hidden relative bg-background-100 left-0 right-0 w-full min-h-screen rounded-b-[40px] -mt-1 md:mt-0">
//         <HomePageServiceSection />
//         <Testimonials />
//         <FAQAcc />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Testimonials } from "../ui/Testimonials";
import FAQAcc from "./../ui/FAQAcc";
import { HomePageServiceSection } from "../homepage/HomePageServiceSection";
import { useLayoutEffect, useRef } from "react";
import AboutCard from './../ui/AboutCard';

const LandingPage = () => {
  const heroRef = useRef(null);
  const spacerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero starts fixed, switches to sticky, then unfixes completely
    ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top bottom", // When spacer enters viewport
      end: "bottom top",  // When spacer leaves viewport
      onEnter: () => {
        // When scrolled past Hero, make it sticky (but not fixed)
        gsap.set(heroRef.current, {
          position: "sticky",
          top: 0,
        });
      },
      onLeaveBack: () => {
        // When scrolling back up (before Hero is fully covered), reset to fixed
        gsap.set(heroRef.current, {
          position: "fixed",
          top: 0,
        });
      },
      onLeave: () => {
        // When scrolled past completely, make it relative (normal scroll)
        gsap.set(heroRef.current, {
          position: "relative",
        });
      },
      markers: true, // Disable in production
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative" role="main">
      {/* Hero - starts fixed, becomes sticky, then relative */}
      <div
        ref={heroRef}
        className="w-full h-screen z-10"
        style={{
          position: "fixed", // Initial state
          top: 0,
          left: 0,
        }}
      >
        <Hero />
      </div>

      {/* Spacer - ensures content starts below Hero */}
      <div ref={spacerRef} className="h-screen" aria-hidden="true"></div>

      {/* Content section */}
      <div className="relative bg-background-100 w-full rounded-[40px] z-20">
        <Motto />
        <AboutCard />
        <HomePageServiceSection />
        <Testimonials />
        <FAQAcc />
      </div>
    </div>
  );
};

export default LandingPage;
