import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import serviceItems from './../../lib/servicesdata';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const serviceRefs = useRef([]);

  // Initialize array of refs for each service item
  if (serviceRefs.current.length !== serviceItems.length) {
    serviceRefs.current = Array(serviceItems.length).fill().map((_, i) => serviceRefs.current[i] || React.createRef());
  }

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Setup animations
    const setupAnimations = () => {
      // Create animations for each service item
      serviceRefs.current.forEach((ref, index) => {
        if (!ref.current) return;
        
        const serviceEl = ref.current;
        const imgEl = serviceEl.querySelector(".img");
        
        if (!imgEl) return;
        
        // Reset to initial state
        gsap.set(imgEl, { width: "30%" });
        gsap.set(serviceEl, { height: 150 });
        
        // Create animation for the specific viewport range
        ScrollTrigger.create({
          trigger: serviceEl,
          start: "top 80%", // Start when the top of element reaches 30% down the viewport
          end: "top 20%",  // End when the top of element is 20% above the viewport
          onEnter: () => {
            // Animate to enlarged state when entering the specified range
            gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
            gsap.to(serviceEl, { height: 300, duration: 0.3, ease: "power1.out" });
          },
          onLeave: () => {
            // Return to original size when leaving the range (scrolling up)
            gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
            gsap.to(serviceEl, { height: 150, duration: 0.3, ease: "power1.in" });
          },
          onEnterBack: () => {
            // Animate to enlarged state when entering the range again (scrolling up)
            gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
            gsap.to(serviceEl, { height: 300, duration: 0.3, ease: "power1.out" });
          },
          onLeaveBack: () => {
            // Return to original size when leaving the range (scrolling down)
            gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
            gsap.to(serviceEl, { height: 150, duration: 0.3, ease: "power1.in" });
          },
          markers: true, // Uncomment for debugging
          id: `service-trigger-${index}`,
        });
      });
      
      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(setupAnimations, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      id="services"
      className="relative flex flex-col w-full py-16 lg:py-16 overflow-hidden"
      aria-label="ServicesSection"
    >
      <div ref={containerRef} className="flex flex-col w-full">
        {serviceItems.map((service, index) => (
          <div
            key={index}
            ref={serviceRefs.current[index]}
            className="service flex gap-8 h-[150px] border-t border-opacity-20 border-secondary-700"
          >
            <div className="service-info w-full h-full flex flex-col justify-around p-4">
              <h1 className="text-on-dark text-3xl font-medium">{service.title}</h1>
              <p className="text-on-dark text-sm leading-relaxed">{service.description}</p>
            </div>
            <div className="service-img flex w-full h-full p-4">
              <div className="img w-[30%] h-full rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;