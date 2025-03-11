import React, { useEffect, useRef } from "react";
import globe from "../../../assets/images/globe.png";
import NayonaFooter from "../../../assets/icons/NayonaFooter";
import FooterArrow from "../../../assets/icons/FooterArrow";
import {motion, useAnimation } from "framer-motion";

function FooterBottom() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Setup for animation on scroll
  const mobileControls = useAnimation();
  const desktopControls = useAnimation();
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  // Start animation when component mounts or is in view
  useEffect(() => {
    // Mobile observer
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mobileControls.start("visible");
          mobileObserver.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.5 }
    );

    // Desktop observer
    const desktopObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          desktopControls.start("visible");
          desktopObserver.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (mobileRef.current) {
      mobileObserver.observe(mobileRef.current);
    }

    if (desktopRef.current) {
      desktopObserver.observe(desktopRef.current);
    }

    return () => {
      if (mobileRef.current) {
        mobileObserver.unobserve(mobileRef.current);
      }
      if (desktopRef.current) {
        desktopObserver.unobserve(desktopRef.current);
      }
    };
  }, [mobileControls, desktopControls]);

  // Mobile animation variants - From LEFT
  const mobileLogoVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  // Desktop animation variants - From BOTTOM
  const desktopLogoVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Mobile Layout: Column order */}
      <div className="w-full flex flex-col lg:hidden">
        {/* "Based in New York" */}
        <div className="flex items-center justify-center whitespace-nowrap mb-4">
          <motion.img
            src={globe}
            alt="Globe"
            className="w-6 h-6 mr-2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className="text-secondary-700 font-grotesk text-body-2 lg:text-body-4">
            Based in New York
          </span>
        </div>

        {/* Logo */}
        <motion.div
          ref={mobileRef}
          className="w-full flex justify-center mb-4 text-secondary-700"
          initial="hidden"
          animate={mobileControls}
          variants={mobileLogoVariants}
        >
          <NayonaFooter />
        </motion.div>

        {/* Back to top button */}
        <div className="w-full flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-secondary-700 hover:text-secondary-600 transition-colors"
            whileHover="hover"
          >
            <motion.span
              className="mr-2 font-grotesk text-body-2 lg:text-body-4 whitespace-nowrap"
              variants={{
                hover: { fontWeight: 700 },
              }}
            >
              Back to top
            </motion.span>
            <motion.div
              variants={{
                hover: { y: -4 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <FooterArrow className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Desktop Layout: Row order */}
      <div className="w-full hidden lg:flex flex-row items-center justify-between lg:justify-start">
        {/* Logo */}
        <motion.div
          ref={desktopRef}
          className="w-full flex justify-center lg:justify-start mb-4 lg:mb-0 text-secondary-700"
          initial="hidden"
          animate={desktopControls}
          variants={desktopLogoVariants}
        >
          <NayonaFooter />
        </motion.div>

        {/* Stacked "Based in New York" and "All Rights Reserved" */}
        <div className="flex flex-col items-start whitespace-nowrap space-y-1">
          {/* Based in New York Section */}
          <div className="flex items-center">
            <motion.img
              src={globe}
              alt="Globe"
              className="w-6 h-6 mr-2"
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="text-secondary-700 font-grotesk text-body-2 lg:text-body-4">
              Based in New York
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Back to top button */}
      <div>
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <motion.button
            onClick={scrollToTop}
            className="lg:flex hidden items-center text-secondary-700 hover:text-secondary-600 transition-colors"
            whileHover="hover"
          >
            <motion.span
              className="mr-2 font-grotesk text-body-2 lg:text-body-4 whitespace-nowrap"
              variants={{
                hover: { fontWeight: 700 },
              }}
            >
              Back to top
            </motion.span>
            <motion.div
              variants={{
                hover: { y: -4 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <FooterArrow className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
