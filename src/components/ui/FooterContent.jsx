import React, { useEffect, useRef } from "react";
import globe from "../../assets/images/globe.png";
import NayonaFooter from "../../assets/icons/NayonaFooter";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

function FooterContent() {
  const globeRef = useRef(null); // Ref for the globe image
  const arrowRef = useRef(null); // Ref for the back-to-top arrow

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // GSAP animation for revolving the globe in a circular motion
  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;

      // Create a circular motion using GSAP
      gsap.to(globe, {
        rotation: 360,
        repeat: -1, // Infinite rotation
        duration: 5, // Adjust speed as needed
        ease: "linear", // Smooth rotation
        transformOrigin: "center", // Ensure rotation is around the center
      });
    }
  }, []);

  // GSAP animation for the back-to-top arrow hover effect
  useEffect(() => {
    if (arrowRef.current) {
      const arrow = arrowRef.current;

      // Hover effect: Move arrow up slightly
      arrow.addEventListener("mouseenter", () => {
        gsap.to(arrow, {
          y: -5, // Move up by 5px
          duration: 0.2,
          ease: "power2.out",
        });
      });

      // Reset on mouse leave
      arrow.addEventListener("mouseleave", () => {
        gsap.to(arrow, {
          y: 0, // Move back to original position
          duration: 0.2,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">
      {/* Combined Layout */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-24">
        {/* Logo and "Based in New York" */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:justify-start">
          {/* Logo */}
          <div className="w-full flex justify-center lg:justify-start mb-4 lg:mb-0">
            <NayonaFooter />
          </div>

          {/* "Based in New York" */}
          <div className="flex items-center justify-center lg:justify-start whitespace-nowrap">
            <img
              ref={globeRef}
              src={globe}
              alt="Globe"
              className="w-6 h-6 mr-2"
            />
            <span className="text-gray-700 font-grotesk text-body-2 lg:text-body-4">
              Based in New York
            </span>
          </div>
        </div>

        {/* Back to top button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="mr-2 font-grotesk text-body-2 lg:text-body-4 whitespace-nowrap">
              Back to top
            </span>
            <ArrowDown
              ref={arrowRef}
              className="w-4 h-4 transform rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;