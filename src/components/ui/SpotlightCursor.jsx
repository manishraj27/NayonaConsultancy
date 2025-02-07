import React, { useEffect, useRef } from 'react';

const SpotlightCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference bg-white"
       
      />
      <style jsx global>{`
        * {
          cursor: none;
        }
        
      `}</style>
    </>
  );
};

export default SpotlightCursor;