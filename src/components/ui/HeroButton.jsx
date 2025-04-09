import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Button from './Button';
import CalComIntegration from './CalComIntegration';

const HeroButton = () => {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const handleClick = () => {
    const aboutSection = document.getElementById('aboutus');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = arrowRef.current.querySelectorAll('line');
      
      gsap.set(lines, {
        strokeDasharray: '35',
        strokeDashoffset: '35'
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(lines, {
        strokeDashoffset: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      });

      containerRef.current.addEventListener('mouseenter', () => tl.play());
      containerRef.current.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-2 flex items-center gap-2">
      <CalComIntegration />
      <p
        ref={containerRef}
        onClick={handleClick}
        className="text-body-3 font-open-sans text-on-light flex items-center cursor-pointer hover:text-primary-400 transition-colors"
      >
        About Us&nbsp;
        <span className="relative mt-px">
          <svg
            ref={arrowRef}
            aria-hidden="true"
            className="overflow-visible pointer-events-none"
            width="35"
            height="12"
            viewBox="0 0 35 12"
          >
            <g
              transform="translate(0 .6)"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
            >
              <line x1=".5" y1="4.9" x2="34.5" y2="4.9" />
              <line x1="34.5" y1="4.9" x2="29.7" y2="0" />
              <line x1="34.5" y1="4.9" x2="29.7" y2="10" />
            </g>
          </svg>
        </span>
      </p>
    </div>
  );
};

export default HeroButton;