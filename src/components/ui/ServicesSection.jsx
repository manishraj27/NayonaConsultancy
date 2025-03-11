import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import pic from "../../assets/images/pic1.avif";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function SerivesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Setup scroll animations
    if (containerRef.current) {
      const services = gsap.utils.toArray(".service");

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const service = entry.target;
            const imgContainer = service.querySelector(".img");

            // First ScrollTrigger for image width expansion
            ScrollTrigger.create({
              trigger: service,
              start: "bottom bottom",
              end: "top top",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                let newWidth = 30 + 70 * progress;
                gsap.to(imgContainer, {
                  width: `${newWidth}%`,
                  duration: 0.1,
                  ease: "none",
                });
              },
            });

            // Second ScrollTrigger for section height change
            ScrollTrigger.create({
              trigger: service,
              start: "top bottom",
              end: "top top",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                let newHeight = 150 + 300 * progress;
                gsap.to(service, {
                  height: `${newHeight}px`,
                  duration: 0.1,
                  ease: "none",
                });
              },
            });

            observer.unobserve(service);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      services.forEach((service) => {
        observer.observe(service);
      });
    }

    // Cleanup function
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Sample service data
  const serviceItems = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum rem Lorem ipsum dolor sit amet, consectetur adipisi",
      image: pic,
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum rem Lorem ipsum dolor sit amet, consectetur adipisi",
      image: pic,
    },
    
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum rem Lorem ipsum dolor sit amet, consectetur adipisi",
      image: pic,
    },
    // Add more service items as needed
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col lg:px-12 px-4 w-full py-16 lg:py-16 overflow-hidden"
      aria-label="SerivesSection"
    >
      <div ref={containerRef}>
        <div className="container w-full h-full">
          <div className="services-header w-full flex gap-16">
            <div className="col flex-2"></div>
            <div className="col flex-5 p-4">
              <h1 className="text-on-dark text-4xl font-medium">All SerivesSection</h1>
            </div>
          </div>

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
      </div>
    </section>
  );
}

export default SerivesSection;