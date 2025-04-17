import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import { GlobeDemo } from "../ui/GlobeNayona";
import ContactBox from "../ui/ContactBox";

function Contact() {
  // Ref for the "Get in touch" text
  const gradientTextRef = useRef(null);
  
  // GSAP animation on component mount
  useEffect(() => {
    const gradientText = gradientTextRef.current;
    // GSAP animation for gradient flow
    gsap.to(gradientText, {
      backgroundPosition: "200% 50%", // Move the gradient background
      duration: 3, // Animation duration
      repeat: -1, // Infinite loop
      ease: "linear", // Smooth linear animation
    });
  }, []);
  
  return (
    <section
      id="contact"
      aria-label="contact"
      className="rounded-b-3xl overflow-hidden w-full py-12 sm:py-16 lg:py-16 min-h-[90vh] dark-section bg-background-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-4 lg:gap-8">
        <div className="w-full md:w-3/5 text-left">
          <Heading title="Reach To Us" description="PING US" />
          <div className="mt-4 w-full md:w-4/5 lg:w-2/3">
            <span className="text-secondary-300 text-body-2 sm:text-heading-5 lg:text-heading-4 font-grotesk text-pretty block">
              Start a conversation about new business opportunities and get a free consultation.
            </span>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <GlobeDemo />
        </div>
      </div>
      
      <div className="w-full mt-8 text-left px-2 sm:px-4 lg:px-8 max-w-6xl">
        <p className="text-body-1 sm:text-heading-4 lg:text-heading-3 text-on-dark">
          Have an inquiry, suggestion, a collaboration offer, or want an unfair advantage?{" "}
          <span
            ref={gradientTextRef}
            style={{
              background: "linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="font-semibold"
          >
            Get in touch
          </span>{" "}
          with us now.
        </p>
      </div>

      <div className="w-full mt-8 lg:mt-12">
        <ContactBox />
      </div>
    </section>
  );
}

export default Contact;