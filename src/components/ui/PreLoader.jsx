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


// import { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { gsap } from 'gsap';

// const Preloader = () => {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Smoother progress animation
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           return 100;
//         }
//         // Slower at the end for anticipation
//         const increment = prev > 80 ? 0.5 : 2;
//         return Math.min(prev + increment, 100);
//       });
//     }, 50);

//     // Delayed completion for satisfaction
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     // Enhanced animations
//     const tl = gsap.timeline({ repeat: -1 });
    
//     // Pulse animation
//     tl.to('.logo-container', {
//       duration: 2,
//       scale: 1.05,
//       filter: 'brightness(1.2)',
//       yoyo: true,
//       repeat: -1,
//       ease: 'power2.inOut',
//     });

//     // Shine effect
//     const shine = gsap.to('.shine-effect', {
//       duration: 2,
//       x: '200%',
//       skewX: -15,
//       ease: 'power4.inOut',
//       repeat: -1,
//       delay: 1,
//     });

//     return () => {
//       clearTimeout(timer);
//       clearInterval(progressInterval);
//       tl.kill();
//       shine.kill();
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{
//             opacity: 0,
//             scale: 1.1,
//             transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
//           }}
//           className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black"
//         >
//           {/* Ambient background animation */}
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
//           </div>

//           {/* Logo container */}
//           <motion.div
//             ref={containerRef}
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
//             className="relative w-32 h-32"
//           >
//             {/* Shine effect overlay */}
//             <div className="absolute inset-0 overflow-hidden rounded-full">
//               <div className="shine-effect absolute top-0 -left-3/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-15" />
//             </div>

//             {/* Logo SVG with enhanced gradient */}
//             <svg 
//               viewBox="0 0 428 430" 
//               className="w-full h-full drop-shadow-2xl"
//               fill="none" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <motion.path
//                 className="logo-path"
//                 fill="url(#modern-gradient)"
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M51.7227 429.398V209.34L204.414 377.676L251.328 429.398H427.453V419.516L389.492 377.676L375.723 362.5L93.8281 51.7188H375.723V156.148H427.453V0H0V25.2617L24 51.7188L51.7227 82.2852L319.668 377.676H274.242L51.7227 132.355L0 75.3398V429.398H51.7227ZM427.453 217.141H375.723L376.164 326.16L427.883 381.641L427.453 217.141Z"
//               />
//               <defs>
//                 <linearGradient id="modern-gradient" x1="0" y1="0" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#60A5FA">
//                     <animate
//                       attributeName="stop-color"
//                       values="#60A5FA; #818CF8; #60A5FA"
//                       dur="3s"
//                       repeatCount="indefinite"
//                     />
//                   </stop>
//                   <stop offset="100%" stopColor="#818CF8">
//                     <animate
//                       attributeName="stop-color"
//                       values="#818CF8; #C084FC; #818CF8"
//                       dur="3s"
//                       repeatCount="indefinite"
//                     />
//                   </stop>
//                 </linearGradient>
//               </defs>
//             </svg>
//           </motion.div>

//           {/* Brand name with modern gradient */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-6 text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
//           >
//             NAYONA
//           </motion.div>

//           {/* Modern progress indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="mt-8 relative w-48 h-1 bg-gray-800/50 rounded-full overflow-hidden"
//           >
//             <motion.div
//               className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-purple-400"
//               animate={{
//                 width: `${progress}%`,
//                 transition: { duration: 0.4, ease: "easeOut" }
//               }}
//             />
//           </motion.div>

//           {/* Loading text */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="mt-4 text-sm text-gray-400 font-medium tracking-wider"
//           >
//             {progress === 100 ? "LAUNCHING" : "LOADING"}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Preloader;