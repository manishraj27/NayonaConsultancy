import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Animate the logo
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.logo-path', {
      duration: 1.5,
      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
      opacity: 0.8,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32"
          >
            <svg 
              viewBox="0 0 428 430" 
              className="w-full h-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                className="logo-path"
                fill="#808080"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.7227 429.398V209.34L204.414 377.676L251.328 429.398H427.453V419.516L389.492 377.676L375.723 362.5L93.8281 51.7188H375.723V156.148H427.453V0H0V25.2617L24 51.7188L51.7227 82.2852L319.668 377.676H274.242L51.7227 132.355L0 75.3398V429.398H51.7227ZM427.453 217.141H375.723L376.164 326.16L427.883 381.641L427.453 217.141Z"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-xl font-semibold tracking-widest font-mono text-gray-400"
          >
            NAYONA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default Preloader;