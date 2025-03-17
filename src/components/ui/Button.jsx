import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Button = ({ text, theme = "light" }) => {
  const buttonRef = useRef(null);
  const curtainRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const curtain = curtainRef.current;
    const textElement = textRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      curtain,
      { y: "100%", borderRadius: "100% 100% 0 0" },
      { y: "0%", borderRadius: "0", duration: 0.3, ease: "power2.out" }
    ).to(
      textElement,
      {
        color: theme === "dark" ? "#121212" : "#e7e6e7", // Adjust text color based on theme
        duration: 0.2,
      },
      0
    );

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <button
      ref={buttonRef}
      className={`relative h-12 px-6 overflow-hidden rounded-full border font-open-sans tracking-wider 
        ${theme === "dark" ? "border-light-100 text-on-dark" : "border-background-100 text-on-light"}`}
    >
      <div
        ref={curtainRef}
        className={`absolute inset-0 transition-all duration-500 
          ${theme === "dark" ? "bg-light-100" : "bg-background-100"}`}
        style={{ transform: "translateY(100%)" }}
      />
      <span ref={textRef} className="relative z-10">
        {text}
      </span>
    </button>
  );
};

export default Button;
