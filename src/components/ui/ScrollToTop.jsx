import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.inOut",
      scrollTo: {
        y: 0,
        autoKill: false
      }
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;