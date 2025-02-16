import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { AnimatedBeam } from './../animated-beam';
import FinalLogo from './../../assets/icons/FinalLogo';
import Icons from "../../lib/Icons";
import gsap from 'gsap';

const Circle = forwardRef(({ className, children, label }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!label) return; // Skip animation for logo
    
    setIsHovered(true);
    gsap.to(circleRef.current, {
      scale: 0.8,
      opacity: 0.7,
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(textRef.current, {
      opacity: 1,
      y: -15,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, [label]);

  const handleMouseLeave = useCallback(() => {
    if (!label) return; // Skip animation for logo
    
    setIsHovered(false);
    gsap.to(circleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(textRef.current, {
      opacity: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, [label]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={label || "Logo"}
      role="button"
    >
      <div
        ref={circleRef}
        className={`z-10 flex size-8 items-center justify-center rounded-full border-2 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
        style={{
          borderColor: isHovered ? '#e5e6e1' : '#E5E7EB',
          boxShadow: isHovered ? '0 0 15px -5px rgba(59, 130, 246, 0.5)' : '0 0 15px -10px rgba(0, 0, 0, 0.6)'
        }}
      >
        {children}
      </div>
      {label && (
        <div 
          ref={textRef}
          className="absolute text-nowrap text-sm font-open-sans pt-16 opacity-0 text-white/90"
          style={{
            transform: 'translateY(0)',
            transition: 'opacity 0.3s ease, transform 0.3s ease'
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const beams = useMemo(() => [
    { from: div1Ref, to: div4Ref, curvature: -60, endYOffset: -8, color: '#e5e6e1' },
    { from: div2Ref, to: div4Ref, color: '#e5e6e1' },
    { from: div3Ref, to: div4Ref, curvature: 60, endYOffset: 8, color: '#e5e6e1' },
    { from: div5Ref, to: div4Ref, curvature: -60, endYOffset: -8, reverse: true, color: '#e5e6e1' },
    { from: div6Ref, to: div4Ref, reverse: true, color: '#e5e6e1' },
    { from: div7Ref, to: div4Ref, curvature: 60, endYOffset: 8, reverse: true, color: '#e5e6e1' },
  ], []);

  return (
    <div
      className="relative flex h-[250px] w-[250px] items-center justify-center overflow-hidden p-8"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[150px] max-w-md flex-col items-stretch justify-between gap-6">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} label="Planning">
            <Icons.planning />
          </Circle>
          <Circle ref={div5Ref} label="Consolidation">
            <Icons.consolidation />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} label="Reporting">
            <Icons.reporting />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <FinalLogo />
          </Circle>
          <Circle ref={div6Ref} label="Tax">
            <Icons.tax />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} label="Account Rec">
            <Icons.accountRec />
          </Circle>
          <Circle ref={div7Ref} label="Profitability">
            <Icons.profitability />
          </Circle>
        </div>
      </div>

      {beams.map((beam, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={beam.from}
          toRef={beam.to}
          curvature={beam.curvature}
          endYOffset={beam.endYOffset}
          reverse={beam.reverse}
          color={beam.color}
        />
      ))}
    </div>
  );
}
