import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const SpotlightCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    // Handle hover state changes
    const handleMouseEnter = () => setIsHoveringCard(true);
    const handleMouseLeave = () => setIsHoveringCard(false);

    // Add event listeners to all cards
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    // Animate cursor size and text based on hover state
    gsap.to(cursor, {
      width: isHoveringCard ? 100 : 20, // Larger circle on hover
      height: isHoveringCard ? 100 : 20,
      duration: 0.3,
      ease: "power2.out",
    });
    
    gsap.to(text, {
      opacity: isHoveringCard ? 1 : 0,
      scale: isHoveringCard ? 1 : 0.8,
      duration: 0.3,
      ease: "power2.out",
    });
    
    // Animate arrow
    if (isHoveringCard) {
      gsap.to(arrow, {
        opacity: 1,
        x: 3,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Create continuous animation
          gsap.to(arrow, {
            x: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      });
    } else {
      // Reset arrow animation
      gsap.killTweensOf(arrow);
      gsap.to(arrow, {
        opacity: 0,
        x: 0,
        duration: 0.2
      });
    }

    // Toggle mix-blend-difference
    if (isHoveringCard) {
      cursor.classList.remove("mix-blend-difference");
    } else {
      cursor.classList.add("mix-blend-difference");
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
      gsap.killTweensOf(arrow); // Clean up any ongoing animations
    };
  }, [isHoveringCard]);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:flex fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 bg-white items-center justify-center mix-blend-difference" // Default state includes mix-blend-difference
    >
      <div className="flex items-center justify-center">
        <span
          ref={textRef}
          className="text-secondary-700 font-grotesk text-body-3 font-semibold opacity-0"
        >
          Click
        </span>
        <div 
          ref={arrowRef} 
          className="opacity-0 ml-1"
        >
          <ArrowRight className="w-4 h-4 text-secondary-700" />
        </div>
      </div>
    </div>
  );
};

export default SpotlightCursor;