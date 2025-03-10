// import React, { useEffect, useRef, useState } from 'react';
// import { Plus } from 'lucide-react';
// import { gsap } from 'gsap';

// const Accordion = ({ number, title, children }) => {
//   const accordionRef = useRef(null);
//   const contentRef = useRef(null);
//   const iconRef = useRef(null);
//   const tlRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const accordionElement = accordionRef.current;
//     const contentElement = contentRef.current;
//     const iconElement = iconRef.current;
    
//     // Create timeline
//     tlRef.current = gsap.timeline({
//       paused: true,
//       reversed: true,
//       onReverseComplete: () => setIsOpen(false),
//       onComplete: () => setIsOpen(true)
//     });

//     // Animate content height and children
//     tlRef.current
//       // Content animation
//       .fromTo(
//         contentElement, 
//         { 
//           height: 0, 
//           overflow: 'hidden' 
//         },
//         {
//           height: 'auto',
//           duration: 0.8,
//           ease: 'power3.out'
//         },
//         'open'
//       )
//       // Rotate plus icon to X
//       .to(
//         iconElement,
//         {
//           rotation: 135,
//           duration: 0.5,
//           ease: 'power2.inOut'
//         },
//         'open'
//       );

//     // Toggle animation on click
//     const toggleHandler = () => {
//       tlRef.current.reversed() ? tlRef.current.play() : tlRef.current.reverse();
//     };

//     const clickTarget = accordionElement.querySelector('.acc-block');
//     clickTarget.addEventListener('click', toggleHandler);

//     return () => {
//       clickTarget.removeEventListener('click', toggleHandler);
//       tlRef.current && tlRef.current.kill();
//     };
//   }, []);

//   return (
//     <div ref={accordionRef} className="accordion-item">
//       <div 
//         className="acc-block flex justify-between items-center py-6 cursor-pointer border-b border-secondary-600 hover:bg-secondary-800 transition-colors duration-300"
//       >
//         <div className="flex items-center space-x-6">
//           <div className="acc-no text-accent-400 text-body-1 font-serif">{number}</div>
//           <div className="acc-title text-on-dark text-body-1 font-grotesk">{title}</div>
//         </div>
//         <div className={`acc-toggle-icon text-secondary-300 transition-colors duration-300 ${isOpen ? 'text-accent-400' : ''}`}>
//           <Plus 
//             ref={iconRef} 
//             className="w-8 h-8 transform transition-transform"
//           />
//         </div>
//       </div>
//       <div 
//         ref={contentRef} 
//         className="accordion-content h-0 overflow-hidden"
//       >
//         <ul className="py-4 px-6 space-y-3">
//           {React.Children.map(children, (child, index) => (
//             <li
//               key={index} 
//               className={`text-on-dark text-body-3 font-grotesk transition-all duration-500 transform ${
//                 isOpen 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-2'
//               }`}
//               style={{ 
//                 transitionDelay: `${index * 50 }ms`
//               }}
//             >
//               {child}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Accordion;

// OPEN AND CLOSE ANIMATION

import React, { useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { gsap } from 'gsap';

const Accordion = ({ number, title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    tlRef.current = gsap.timeline({ paused: true });

    // Animate content height
    tlRef.current.to(contentRef.current, {
      height: 'auto',
      duration: 0.5,
      ease: 'power3.out',
    });

    // Animate icon rotation
    tlRef.current.to(
      iconRef.current,
      {
        rotation: 135,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      '<' // Start at the same time as the height animation
    );

    // Cleanup timeline on unmount
    return () => {
      tlRef.current.kill();
    };
  }, []);

  useEffect(() => {
    // Play or reverse the timeline based on `isOpen`
    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <div
        className="acc-block flex justify-between items-center py-6 cursor-pointer border-b border-secondary-600 hover:bg-secondary-800 transition-colors duration-300"
        onClick={onClick}
      >
        <div className="flex items-center space-x-6">
          <div className="acc-no text-accent-400 text-body-1 font-serif">{number}</div>
          <div className="acc-title text-on-dark text-body-1 font-grotesk">{title}</div>
        </div>
        <div className={`acc-toggle-icon text-secondary-300 transition-colors duration-300 ${isOpen ? 'text-accent-400' : ''}`}>
          <Plus
            ref={iconRef}
            className="w-8 h-8 transform transition-transform"
          />
        </div>
      </div>
      <div
        ref={contentRef}
        className="accordion-content h-0 overflow-hidden"
      >
        <ul className="py-4 px-6 space-y-3">
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={`text-on-dark text-body-3 font-grotesk transition-all duration-500 transform ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;