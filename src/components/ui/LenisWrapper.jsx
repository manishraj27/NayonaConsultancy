import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LenisWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness (optional)
      smoothWheel: true, // Enable smooth wheel scrolling
      smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
      direction: "vertical", // Restrict Lenis to vertical scrolling only
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to GSAP ticker for smooth updates
    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    // Disable lag smoothing for better performance
    gsap.ticker.lagSmoothing(0);

    // Cleanup function
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy(); // Destroy Lenis instance
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;