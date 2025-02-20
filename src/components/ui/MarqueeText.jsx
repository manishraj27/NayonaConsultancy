import  { useEffect } from 'react';
import { gsap } from 'gsap';
import arrow from '../../assets/icons/arrow.svg';

const MarqueeText = () => {
  useEffect(() => {
    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".move .marque", {
          x: "-200%",
          ease: "none",
          repeat: -1,
          duration: 8,
        });
        gsap.to(".move .marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".move .marque", {
          x: "0%",
          ease: "none",
          repeat: -1,
          duration: 8,
        });
        gsap.to(".move .marque img", {
          rotate: 0,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="move bg-background-100 py-3 flex items-center justify-start flex-nowrap rounded-b-[40px]">
      {[...Array(7)].map((_, index) => (
        <div key={index} className="marque flex items-center justify-center flex-shrink-0 gap-[3vw] px-[1.5vw] transform -translate-x-full">
          <h1 className="font-grotesk text-light-100 font-medium text-[3vw]">nayona consultancy</h1>
          <img src={arrow} alt="" className="h-[3.5vw]" />
        </div>
      ))}
    </div>
  );
};

export default MarqueeText;