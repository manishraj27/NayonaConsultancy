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

// 1st - correct code
// import Hero from "../homepage/Hero";
// import Motto from "../ui/Motto";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Testimonials } from "../ui/Testimonials";
// import FAQAcc from "./../ui/FAQAcc";
// import { HomePageServiceSection } from "../homepage/HomePageServiceSection";
// import { useLayoutEffect, useRef } from "react";
// import AboutCard from './../ui/AboutCard';
// import HomePageCTA from "../ui/HomePageCTA";
// import {  SeeTheEPMDifference } from "../magicui/StickyScrollRevealDemo";
// import CompetitorSection from "../ui/CompetitorSection";

// const LandingPage = () => {
//   const heroRef = useRef(null);
//   const spacerRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     ScrollTrigger.create({
//       trigger: spacerRef.current,
//       start: "top bottom",
//       end: "bottom top",
//       onEnter: () => {
//         gsap.set(heroRef.current, { 
//           position: "sticky",
//           top: 0,
//           // Smooth transition between states
//           transition: "all 0.2s ease-out" 
//         });
//       },
//       onLeaveBack: () => {
//         gsap.set(heroRef.current, { 
//           position: "fixed",
//           top: 0 
//         });
//       },
//       onLeave: () => {
//         gsap.to(heroRef.current, { 
//           opacity: 0,
//           duration: 0.3,
//           onComplete: () => {
//             gsap.set(heroRef.current, { 
//               position: "relative",
//               opacity: 1 // Reset for when scrolling back up
//             });
//           }
//         });
//       }
//     });

//     return () => ScrollTrigger.getAll().forEach(t => t.kill());
//   }, []);

//   return (
//     <div className="relative" role="main">
//       {/* Hero section */}
//       <div
//         ref={heroRef}
//         className="w-full h-screen z-10 fixed top-0 left-0"
//       >
//         <Hero />
//       </div>

//       {/* Spacer */}
//       <div ref={spacerRef} className="h-screen" aria-hidden="true"></div>

//       {/* Content wrapper with footer-matching bg */}
//       <div className="dark-section relative bg-light-200 w-full min-h-screen z-20 rounded-t-[40px]">
//         {/* Actual content with rounded corners */}
//         <div className="bg-background-100 rounded-[40px] ">
//           <Motto />
//           <AboutCard />
//           <HomePageServiceSection />
//           <SeeTheEPMDifference />
//           <CompetitorSection />
//           <Testimonials />
//           <FAQAcc />
//           <HomePageCTA />
//         </div>
//         <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-light-200"></div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


// 2nd - correct code


// 3rd - correct code from claude 
import { useEffect, useRef } from "react";
import Hero from "../homepage/Hero";
import Motto from "../ui/Motto";
import { Testimonials } from "../ui/Testimonials";
import FAQAcc from "./../ui/FAQAcc";
import { HomePageServiceSection } from "../homepage/HomePageServiceSection";
import AboutCard from './../ui/AboutCard';
import HomePageCTA from "../ui/HomePageCTA";
import { SeeTheEPMDifference } from "../magicui/StickyScrollRevealDemo";
import CompetitorSection from "../ui/CompetitorSection";

const LandingPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight) {
        heroRef.current.style.opacity = '0';
        heroRef.current.style.pointerEvents = 'none';
      } else {
        heroRef.current.style.opacity = '1';
        heroRef.current.style.pointerEvents = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      <div
        ref={heroRef}
        className="w-full h-screen fixed top-0 left-0 z-10 transition-opacity duration-300"
      >
        <Hero />
      </div>

      <div className="h-screen" aria-hidden="true" />

      <section className="dark-section relative bg-light-200 w-full min-h-screen z-20 rounded-t-[40px]">
        <div className="bg-background-100 rounded-[40px]">
          <Motto />
          <AboutCard />
          <HomePageServiceSection />
          <SeeTheEPMDifference />
          <CompetitorSection />
          <Testimonials />
          <FAQAcc />
          <HomePageCTA />
        </div>
        <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-light-200" />
      </section>
    </main>
  );
};

export default LandingPage;

// import Hero from "../homepage/Hero";
// import Motto from "../ui/Motto";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Testimonials } from "../ui/Testimonials";
// import FAQAcc from "./../ui/FAQAcc";
// import { HomePageServiceSection } from "../homepage/HomePageServiceSection";
// import { useLayoutEffect, useRef } from "react";
// import AboutCard from './../ui/AboutCard';

// const LandingPage = () => {
//   const heroRef = useRef(null);
//   const spacerRef = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: spacerRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         markers: true, // Remove in production
//       }
//     });

//     // Hero transition: fixed → sticky → hidden
//     tl.to(heroRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.in",
//       onComplete: () => {
//         gsap.set(heroRef.current, { display: "none" });
//       }
//     }, 0.5);

//     // Content section mask to hide rounded corners
//     tl.fromTo(contentRef.current, 
//       { clipPath: "inset(0 0 100% 0)" },
//       { clipPath: "inset(0 0 0 0)", duration: 0.5 },
//       0
//     );

//     return () => ScrollTrigger.getAll().forEach(t => t.kill());
//   }, []);

//   return (
//     <div className="relative" role="main">
//       {/* Hero - starts fixed, fades out when scrolling */}
//       <div
//         ref={heroRef}
//         className="w-full h-screen z-10 fixed top-0 left-0"
//       >
//         <Hero />
//       </div>

//       {/* Spacer - ensures content starts below Hero */}
//       <div ref={spacerRef} className="h-screen" aria-hidden="true"></div>

//       {/* Content section with clip-path mask */}
//       <div 
//         ref={contentRef}
//         className="relative dark-section bg-background-100 w-full rounded-[40px] z-20"
//         style={{ clipPath: "inset(0 0 100% 0)" }}
//       >
//         <Motto />
//         <AboutCard />
//         <HomePageServiceSection />
//         <Testimonials />
//         <FAQAcc />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;