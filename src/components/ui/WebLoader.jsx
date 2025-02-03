import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import './WebLoader.css';

const WebLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Logo animation with focused metallic effect
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.logo-path', {
      duration: 1.5,
      filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) brightness(1.3)',
      scale: 1.02,
      opacity: 0.9,
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
                fill="url(#metallic-gradient)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.7227 429.398V209.34L204.414 377.676L251.328 429.398H427.453V419.516L389.492 377.676L375.723 362.5L93.8281 51.7188H375.723V156.148H427.453V0H0V25.2617L24 51.7188L51.7227 82.2852L319.668 377.676H274.242L51.7227 132.355L0 75.3398V429.398H51.7227ZM427.453 217.141H375.723L376.164 326.16L427.883 381.641L427.453 217.141Z"
              />
              <defs>
                <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#808080" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#808080" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="shimmer-text mt-4 text-xl font-semibold tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400"
          >
            NAYONA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebLoader;