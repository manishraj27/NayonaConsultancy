import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

// Register GSAP plugins outside component
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);
  const page2Ref = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Ensure all refs are available
    if (!page2Ref.current || !textRefs.current.length) return;

    // Text animation
    gsap.from(textRefs.current, {
      y: 600,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: page2Ref.current,
        start: "top 80%",
      }
    });

    // String animation setup
    const stringElement = stringRef.current;
    const pathElement = pathRef.current;
    
    if (!stringElement || !pathElement) return;

    const finalPath = "M 10 120 Q 500 120 990 120";

    const handleMouseMove = (e) => {
      const rect = stringElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newPath = `M 10 120 Q ${x} ${y} 990 120`;
      
      gsap.to(pathElement, {
        attr: { d: newPath }
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: finalPath },
        ease: "elastic.out(1.2,0.2)",
        duration: 1
      });
    };

    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Store text element refs
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div ref={page2Ref} className="page2 min-h-screen w-full  rounded-t-[100px] py-[10vw] px-[6vw]">
     

       <h1 className='text-on-dark'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ducimus placeat quod iure assumenda quibusdam perferendis, ad veritatis voluptatum voluptatem dolore. Nostrum alias libero quisquam adipisci incidunt quo pariatur doloribus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime commodi sunt ratione eaque officiis, temporibus tempora ipsam officia tenetur magni itaque obcaecati, perspiciatis minus eos corrupti ab culpa voluptatem optio.
       </h1>
      <div className="btn h-[8vh] w-[16vw] rounded-[50px] bg-white mt-[4vw] flex items-center justify-center gap-[1vw] overflow-hidden cursor-pointer transition-all duration-400 relative hover:scale-110 group">
        <h5 className="text-[1.3vw] capitalize font-medium z-[999]">i'm ready to go</h5>
        <div className="circle h-[15px] w-[15px] bg-[#D9FF06] rounded-[50px] transition-all duration-500 group-hover:scale-[30]"></div>
        <div className="icon h-[2vw] w-[2vw] absolute left-[80%] top-[30%] overflow-hidden">
          <ArrowRight className="text-black opacity-0 text-[1.5vw] z-[999] group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <div ref={stringRef} className="string mt-[3vw] h-[250px] w-full">
        <svg width="1000" height="240">
          <path 
            ref={pathRef} 
            d="M 10 120 Q 500 120 990 120" 
            stroke="white" 
            fill="transparent" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Page2;