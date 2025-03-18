import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = () => {
  const [showFloatingButtons, setShowFloatingButtons] = useState(true);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom-=100",
      end: "bottom bottom",
      onEnter: () => setShowFloatingButtons(false),
      onLeaveBack: () => setShowFloatingButtons(true),
      toggleActions: "play none none reverse",
    });

    return () => trigger.kill();
  }, []);

  return showFloatingButtons;
};

export default useScrollTrigger;
