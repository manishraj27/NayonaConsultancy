import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ServicesSection({ title, services }) {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const serviceRefs = useRef([]);

  // Initialize array of refs for each service item
  serviceRefs.current = services.map((_, i) => serviceRefs.current[i] || React.createRef());

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  // Setup animations for desktop
  const setupDesktopAnimations = useCallback(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Only set up these animations for desktop
    if (window.innerWidth >= 768) {
      serviceRefs.current.forEach((ref, index) => {
        if (!ref.current) return;

        const serviceEl = ref.current;
        const imgEl = serviceEl.querySelector(".img");

        if (!imgEl) return;

        // Reset to initial state
        gsap.set(imgEl, { width: "30%" });
        gsap.set(serviceEl, { height: 310 });

        ScrollTrigger.create({
          trigger: serviceEl,
          start: "top 30%",
          end: "top 0%",
          onEnter: () => {
            // Enlarge the image in the viewport
            gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
            gsap.to(serviceEl, { height: 450, duration: 0.3, ease: "power1.out" });

            // Reset all other images to small size
            serviceRefs.current.forEach((otherRef, otherIndex) => {
              if (otherIndex !== index && otherRef.current) {
                const otherImgEl = otherRef.current.querySelector(".img");
                if (otherImgEl) {
                  gsap.to(otherImgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
                  gsap.to(otherRef.current, { height: 310, duration: 0.3, ease: "power1.in" });
                }
              }
            });
          },
          onLeave: () => {
            // Reset the image when leaving the viewport
            gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
            gsap.to(serviceEl, { height: 310, duration: 0.3, ease: "power1.in" });
          },
          onEnterBack: () => {
            // Enlarge the image when re-entering the viewport
            gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
            gsap.to(serviceEl, { height: 450, duration: 0.3, ease: "power1.out" });

            // Reset all other images to small size
            serviceRefs.current.forEach((otherRef, otherIndex) => {
              if (otherIndex !== index && otherRef.current) {
                const otherImgEl = otherRef.current.querySelector(".img");
                if (otherImgEl) {
                  gsap.to(otherImgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
                  gsap.to(otherRef.current, { height: 310, duration: 0.3, ease: "power1.in" });
                }
              }
            });
          },
          onLeaveBack: () => {
            // Reset the image when leaving the viewport (scrolling down)
            gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
            gsap.to(serviceEl, { height: 310, duration: 0.3, ease: "power1.in" });
          },
          markers: false, // Disable markers for production
          id: `service-trigger-${index}`,
        });
      });
    }

    ScrollTrigger.refresh();
  }, [services]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setupDesktopAnimations();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setupDesktopAnimations]);

  useEffect(() => {
    const timer = setTimeout(setupDesktopAnimations, 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setupDesktopAnimations]);

  return (
    <div
      id="services"
      className="relative flex flex-col w-full pb-28 overflow-hidden bg-background-100"
      aria-label="Services Section"
    >
      <h1 className="text-on-dark text-heading-1 font-grotesk text-center mb-20">
        {title}
      </h1>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col w-full " ref={containerRef}>
        {services.map((service, index) => (
          <div
            key={`desktop-${service.id || index}`}
            ref={serviceRefs.current[index]}
            className="service flex gap-8 h-[310px] border-t border-opacity-20 border-secondary-100"
            aria-labelledby={`service-title-desktop-${index}`}
          >
            <div className="service-info w-full h-full flex flex-col justify-around p-4">
              <h1 id={`service-title-desktop-${index}`} className="text-on-dark text-heading-3 font-grotesk">
                {service.title}
              </h1>
              <p className="text-on-dark text-body-3 font-open-sans leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="service-img flex w-full h-full p-4">
              <div className="img w-[30%] h-full rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div
            key={`mobile-${service.id || index}`}
            className="service-card  rounded-3xl overflow-hidden shadow-lg bg-secondary-700  bg-opacity-10"
            aria-labelledby={`service-title-mobile-${index}`}
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 id={`service-title-mobile-${index}`} className="text-on-dark text-heading-4 font-grotesk font-medium mb-2">
                {service.title}
              </h2>
              <p className="text-on-dark text-body-3 font-open-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ServicesSection);