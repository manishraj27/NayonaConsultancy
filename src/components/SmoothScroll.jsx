import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      touchMultiplier: 1.5, // Improve touch and wheel sensitivity
      wheelEventsTarget: document, // Ensure wheel events are captured globally
      normalizeWheel: true, // Normalize wheel deltas across browsers
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    // Add explicit wheel event listeners
    const handleWheel = (e) => {
      lenis.emit('wheel', e);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
  
    return () => {
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;