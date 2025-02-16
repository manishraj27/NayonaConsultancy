import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Blocks = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Set initial visibility
    gsap.set(containerRef.current.querySelector('.hero-inner'), {
      scale: 1,
      autoAlpha: 1
    });

    const tl = gsap.timeline({ 
      repeat: 0,
      defaults: { ease: "power1.inOut" },
      delay: 3.5  // Added initial delay of 2.5 seconds
    });
    
    // Start animation sequence with longer durations
    tl.from(containerRef.current.querySelector('.hero-inner'), {
      scale: 0,
      duration: 2,  // Increased from 1.5
      ease: "elastic.out(2, 1)",
      autoAlpha: 1
    })
    
    .from([".block1", ".block3"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 100,
      duration: 1.2,  // Increased from 0.75
      autoAlpha: 1
    })
    .from([".block2", ".block4"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: -100,
      duration: 1.2,
      autoAlpha: 1
    }, "-=1.2")
    
    .to([".block1", ".block3"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: 50,
      duration: 1.2,
    })
    .to([".block2", ".block4"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: -50,
      duration: 1.2,
    }, "-=1.2")
    
    .to([".block1", ".block3"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: 50,
      scaleX: -1,
      duration: 1.2,
    })
    .to([".block2", ".block4"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: -50,
      scaleX: -1,
      duration: 1.2,
    }, "-=1.2")
    
    .to(containerRef.current.querySelector(".block3"), {
      x: 0,
      y: 50,
      scaleX: 1,
      duration: 1.2,
    })
    .to(containerRef.current.querySelector(".block2"), {
      x: 0,
      y: -50,
      scaleX: 1,
      duration: 1.2,
    }, "-=1.2")
    
    .to([".block1", ".block3"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: 0,
      duration: 1.2,
    })
    .to([".block2", ".block4"].map(selector => 
      containerRef.current.querySelector(selector)), {
      x: 0,
      y: 0,
      duration: 1.2,
    }, "-=1.2")
    
    .to(containerRef.current.querySelector(".block3"), {
      x: 0,
      y: 0,
      scaleX: -1,
      duration: 1.2,
    })
    .to(containerRef.current.querySelector(".block2"), {
      x: 0,
      y: 0,
      scaleX: -1,
      duration: 1.2,
    }, "-=1.2");

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="p-4">
      <div className="hero-inner grid grid-cols-2 w-[200px]">
        <div className="block1 w-[100px] h-[100px] bg-[#3d5a80] rounded-tr-[100px] opacity-100"></div>
        <div className="block2 w-[100px] h-[100px] bg-[#e0fbfc] rounded-tl-[100px] opacity-100"></div>
        <div className="block3 w-[100px] h-[100px] bg-[#ee6c4d] rounded-br-[100px] opacity-100"></div>
        <div className="block4 w-[100px] h-[100px] bg-[#98c1d9] rounded-bl-[100px] opacity-100"></div>
      </div>
    </div>
  );
};

export default Blocks;