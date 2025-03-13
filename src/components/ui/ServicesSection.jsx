import React, { useEffect, useRef, useCallback } from "react";
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
  serviceRefs.current = serviceItems.map((_, i) => serviceRefs.current[i] || React.createRef());

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

  // Setup animations
  const setupAnimations = useCallback(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    serviceRefs.current.forEach((ref, index) => {
      if (!ref.current) return;

      const serviceEl = ref.current;
      const imgEl = serviceEl.querySelector(".img");

      if (!imgEl) return;

      // Reset to initial state
      gsap.set(imgEl, { width: "30%" });
      gsap.set(serviceEl, { height: 150 });

      ScrollTrigger.create({
        trigger: serviceEl,
        start: "top 30%", // Start when the top of the element reaches 80% down the viewport
        end: "top 0%",   // End when the top of the element is 20% above the viewport
        onEnter: () => {
          // Enlarge the image in the viewport
          gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
          gsap.to(serviceEl, { height: 400, duration: 0.3, ease: "power1.out" });

          // Reset all other images to small size
          serviceRefs.current.forEach((otherRef, otherIndex) => {
            if (otherIndex !== index && otherRef.current) {
              const otherImgEl = otherRef.current.querySelector(".img");
              if (otherImgEl) {
                gsap.to(otherImgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
                gsap.to(otherRef.current, { height: 150, duration: 0.3, ease: "power1.in" });
              }
            }
          });
        },
        onLeave: () => {
          // Reset the image when leaving the viewport
          gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
          gsap.to(serviceEl, { height: 150, duration: 0.3, ease: "power1.in" });
        },
        onEnterBack: () => {
          // Enlarge the image when re-entering the viewport
          gsap.to(imgEl, { width: "100%", duration: 0.3, ease: "power1.out" });
          gsap.to(serviceEl, { height: 400, duration: 0.3, ease: "power1.out" });

          // Reset all other images to small size
          serviceRefs.current.forEach((otherRef, otherIndex) => {
            if (otherIndex !== index && otherRef.current) {
              const otherImgEl = otherRef.current.querySelector(".img");
              if (otherImgEl) {
                gsap.to(otherImgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
                gsap.to(otherRef.current, { height: 150, duration: 0.3, ease: "power1.in" });
              }
            }
          });
        },
        onLeaveBack: () => {
          // Reset the image when leaving the viewport (scrolling down)
          gsap.to(imgEl, { width: "30%", duration: 0.3, ease: "power1.in" });
          gsap.to(serviceEl, { height: 150, duration: 0.3, ease: "power1.in" });
        },
        markers: true, // Disable markers for production
        id: `service-trigger-${index}`,
      });
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(setupAnimations, 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setupAnimations]);

  return (
    <div
      id="services"
      className="relative flex flex-col w-full py-16 lg:py-16 overflow-hidden"
      aria-label="Services Section"
    >
      <div ref={containerRef} className="flex flex-col w-full">
        {serviceItems.map((service, index) => (
          <div
            key={service.id || index}
            ref={serviceRefs.current[index]}
            className="service flex gap-8 h-[150px] border-t border-opacity-20 border-secondary-700"
            aria-labelledby={`service-title-${index}`}
          >
            <div className="service-info w-full h-full flex flex-col justify-around p-4">
              <h1 id={`service-title-${index}`} className="text-on-dark text-3xl font-medium">
                {service.title}
              </h1>
              <p className="text-on-dark text-sm leading-relaxed">
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
    </div>
  );
}

export default React.memo(ServicesSection);