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
    <>
      <section
        id="contact"
        aria-label="contact"
        className=" rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-64 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center"
      >
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
         
          <div className="w-full md:w-3/4 text-left">
            <Heading title="Reach To Us" description="PING US" />
            <div className="mt-4 w-full md:w-2/3">
              <span className="text-secondary-300 lg:mx-16 lg:w-full text-heading-4 font-grotesk text-pretty block">
                Start a conversation about new business opportunities and get a free consultation.
              </span>
            </div>
          </div>
         
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <GlobeDemo />
          </div>
        </div>
        
        <div className="w-full mt-8 text-left lg:pr-40 ">
          <p className="lg:text-heading-3 text-heading-4  text-on-dark">
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
            >
              Get in touch
            </span>{" "}
            with us now.
          </p>
        </div>

     
            <ContactBox />
      </section>
    </>
  );
}
export default Contact;