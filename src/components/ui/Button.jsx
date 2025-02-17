import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ text }) => {
  const buttonRef = useRef(null);
  const curtainRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const curtain = curtainRef.current;
    const textElement = textRef.current;

    const tl = gsap.timeline({ paused: true });
    
    tl.fromTo(curtain, {
      y: '100%',
      borderRadius: '100% 100% 0 0'
    }, {
      y: '0%',
      borderRadius: '0',
      duration: 0.6,
      ease: "power2.out"
    })
    .to(textElement, {
      color: '#e7e6e7',
      duration: 0.2
    }, 0);

    button.addEventListener('mouseenter', () => tl.play());
    button.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      button.removeEventListener('mouseenter', () => tl.play());
      button.removeEventListener('mouseleave', () => tl.reverse());
    };
  }, []);

  return (
    <button 
      ref={buttonRef}
      className="relative h-12 px-6 overflow-hidden rounded-full border border-background-100 text-black font-open-sans tracking-wider"
    >
      <div 
        ref={curtainRef}
        className="absolute inset-0 bg-black"
        style={{ transform: 'translateY(100%)' }}
      />
      <span ref={textRef} className="relative z-10 font-medium">
        {text}
      </span>
    </button>
  );
}

export default Button;