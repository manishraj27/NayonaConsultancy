import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SpotlightCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power1.out'
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference bg-white"
    />
  );
};

export default SpotlightCursor;