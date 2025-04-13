import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const SpotlightCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const animationRef = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringBlog, setIsHoveringBlog] = useState(false);

  const handleMouseEnter = useCallback((type) => {
    if (type === 'blog') setIsHoveringBlog(true);
    else setIsHoveringCard(true);
  }, []);

  const handleMouseLeave = useCallback((type) => {
    if (type === 'blog') setIsHoveringBlog(false);
    else setIsHoveringCard(false);
  }, []);

  const moveCursor = useCallback((e) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(() => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    
    if (!cursor || !text || !arrow) return;

    const timeline = gsap.timeline();

    const serviceCards = document.querySelectorAll(".service-card");
    const blogCards = document.querySelectorAll(".blog-card");

    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleMouseEnter('service'));
      card.addEventListener("mouseleave", () => handleMouseLeave('service'));
    });

    blogCards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleMouseEnter('blog'));
      card.addEventListener("mouseleave", () => handleMouseLeave('blog'));
    });

    window.addEventListener("mousemove", moveCursor);

    timeline
      .to(cursor, {
        width: isHoveringBlog ? 130 : (isHoveringCard ? 100 : 20),
        height: isHoveringBlog ? 45 : (isHoveringCard ? 100 : 20),
        borderRadius: isHoveringBlog ? '24px' : '9999px',
        backgroundColor: isHoveringBlog ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        duration: 0.3,
        ease: "power2.out",
      })
      .to([text, arrow], {
        opacity: isHoveringBlog || isHoveringCard ? 1 : 0,
        scale: isHoveringBlog || isHoveringCard ? 1 : 0.8,
        duration: 0.2,
        ease: "power2.out",
      }, "<");

    if (isHoveringBlog || isHoveringCard) {
      gsap.to(arrow, {
        x: 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", moveCursor);
      timeline.kill();
      gsap.killTweensOf(arrow);
      
      serviceCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => handleMouseEnter('service'));
        card.removeEventListener("mouseleave", () => handleMouseLeave('service'));
      });
      
      blogCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => handleMouseEnter('blog'));
        card.removeEventListener("mouseleave", () => handleMouseLeave('blog'));
      });
    };
  }, [isHoveringCard, isHoveringBlog, handleMouseEnter, handleMouseLeave, moveCursor]);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:flex fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 items-center justify-center backdrop-blur-sm"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="flex items-center justify-center px-4 relative">
        <span
          ref={textRef}
          className="text-white/90 font-grotesk text-sm font-medium tracking-wide opacity-0"
        >
          {isHoveringBlog ? 'View More' : 'Click'}
        </span>
        <div 
          ref={arrowRef} 
          className="opacity-0 ml-2"
        >
          <ArrowRight className="w-4 h-4 text-white/90" />
        </div>
      </div>
    </div>
  );
};

export default SpotlightCursor;