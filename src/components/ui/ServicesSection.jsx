import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import serviceItems from './../../lib/servicesdata';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function SerivesSection() {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const animationsSetupRef = useRef(false);
  const [refresh, setRefresh] = useState(0);
  
  console.log("Component rendering");

  useEffect(() => {
    console.log("Main effect running, refresh count:", refresh);
    
    // Kill all existing ScrollTriggers first
    console.log("Killing all existing ScrollTriggers");
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.kill();
    });
    
    // Clean up existing Lenis instance
    if (lenisRef.current) {
      console.log("Destroying existing Lenis instance");
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
    
    // Create a new Lenis instance with more aggressive settings
    console.log("Creating new Lenis instance");
    const lenis = new Lenis({
      lerp: 0.05, // More responsive
      smoothWheel: true,
      syncTouch: true,
    });
    lenisRef.current = lenis;
    
    // Connect Lenis to ScrollTrigger
    function updateScroll() {
      ScrollTrigger.update();
    }
    lenis.on("scroll", updateScroll);
    
    // Use native requestAnimationFrame for smoother handling
    function raf(time) {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Reset initial states of all elements
    function resetElementStates() {
      const services = document.querySelectorAll(".service");
      services.forEach(service => {
        const imgContainer = service.querySelector(".img");
        if (imgContainer) {
          gsap.set(imgContainer, { width: "30%" });
        }
        gsap.set(service, { height: "150px" });
      });
      console.log(`Reset states for ${services.length} service elements`);
    }
    
    // Set up animation for a single service element
    function setupServiceAnimation(service, index) {
      const imgContainer = service.querySelector(".img");
      if (!imgContainer) {
        console.error(`Image container not found for service ${index}`);
        return;
      }
      
      // Image width animation
      ScrollTrigger.create({
        trigger: service,
        start: "top bottom",
        end: "top center",
        id: `image-width-${index}`,
        
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          console.log(`Service ${index} entered viewport`);
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const newWidth = 30 + 70 * progress;
          gsap.to(imgContainer, {
            width: `${newWidth}%`,
            duration: 0.1,
            ease: "none",
            overwrite: "auto"
          });
        }
      });
      
      // Height animation
      ScrollTrigger.create({
        trigger: service,
        start: "top bottom",
        end: "top center",
        id: `service-height-${index}`,
        markers: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newHeight = 150 + 300 * progress;
          gsap.to(service, {
            height: `${newHeight}px`,
            duration: 0.1,
            ease: "none",
            overwrite: "auto"
          });
        }
      });
    }
    
    // Function to set up all animations
    function setupAllAnimations() {
      // Reset all states first
      resetElementStates();
      
      // Force a refresh of ScrollTrigger
      ScrollTrigger.refresh(true);
      
      // Get all service elements
      const services = document.querySelectorAll(".service");
      console.log(`Found ${services.length} service elements for animation setup`);
      
      if (services.length > 0) {
        // Set up animations for each service
        services.forEach((service, index) => {
          console.log(`Setting up animation for service ${index}`);
          setupServiceAnimation(service, index);
        });
        
        // Final refresh to ensure everything is properly initialized
        ScrollTrigger.refresh();
        console.log("All animations set up successfully");
        animationsSetupRef.current = true;
      } else {
        console.error("No service elements found");
      }
    }
    
    // Delay to ensure DOM is fully rendered before setting up animations
    const setupDelay = setTimeout(() => {
      console.log("Setting up animations after delay");
      setupAllAnimations();
      
      // Extra safety: refresh again after a short delay to handle any race conditions
      setTimeout(() => {
        ScrollTrigger.refresh();
        console.log("Extra refresh completed");
      }, 200);
    }, 100);
    
    // Handle window resize to ensure animations stay accurate
    const handleResize = () => {
      console.log("Window resized, refreshing ScrollTrigger");
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("resize", handleResize);
    
    // Handle scroll position at initial load
    const handleInitialScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 0) {
        console.log(`Detected initial scroll position: ${scrollPos}px, refreshing`);
        ScrollTrigger.refresh();
      }
    };
    setTimeout(handleInitialScroll, 300);
    
    return () => {
      console.log("Cleanup function running");
      clearTimeout(setupDelay);
      
      // Remove event listeners
      window.removeEventListener("resize", handleResize);
      
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
      
      // Destroy Lenis
      if (lenisRef.current) {
        lenisRef.current.off("scroll", updateScroll);
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [refresh]); // Dependency on refresh state

  // Add this effect to handle visibility change (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        console.log("Tab became visible, forcing refresh");
        setRefresh(prev => prev + 1);
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // This effect handles scroll position restoration
  useEffect(() => {
    const handleScrollRestoration = () => {
      console.log("Handling scroll restoration");
      ScrollTrigger.refresh();
    };
    
    window.addEventListener("pageshow", handleScrollRestoration);
    
    return () => {
      window.removeEventListener("pageshow", handleScrollRestoration);
    };
  }, []);

  return (
    <div
      id="services"
      className="relative flex flex-col w-full py-16 lg:py-16 overflow-hidden"
      aria-label="ServicesSection"
    >
      <div ref={containerRef}>
        {serviceItems.map((service, index) => (
          <div
            key={index}
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
      
      {/* Debug button */}
      <button 
        onClick={() => setRefresh(prev => prev + 1)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded z-50"
      >
        Refresh Animations
      </button>
    </div>
  );
}

export default SerivesSection;