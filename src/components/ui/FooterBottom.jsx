import React from 'react';
import globe from "../../assets/images/globe.png";
import NayonaFooter from "../../assets/icons/NayonaFooter";
import FooterArrow from '../../assets/icons/FooterArrow';
import { motion } from 'framer-motion';

function FooterBottom() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              ease: "linear" 
            }}
          />
          <span className="text-gray-700 font-grotesk text-body-2 lg:text-body-4">
            Based in New York
          </span>
        </div>

        {/* Logo */}
        <div className="w-full flex justify-center mb-4">
          <NayonaFooter />
        </div>

        {/* Back to top button */}
        <div className="w-full flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            whileHover="hover"
          >
            <motion.span 
              className="mr-2 font-grotesk text-body-2 lg:text-body-4 whitespace-nowrap"
              variants={{
                hover: { fontWeight: 700 }
              }}
            >
              Back to top
            </motion.span>
            <motion.div
              variants={{
                hover: { y: -4 }
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300 
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
        <div className="w-full flex justify-center lg:justify-start mb-4 lg:mb-0">
          <NayonaFooter />
        </div>

        {/* "Based in New York" */}
        <div className="flex items-center justify-center lg:justify-start whitespace-nowrap">
          <motion.img
            src={globe}
            alt="Globe"
            className="w-6 h-6 mr-2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <span className="text-gray-700 font-grotesk text-body-2 lg:text-body-4">
            Based in New York
          </span>
        </div>
      </div>

      {/* Desktop Layout: Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="lg:flex hidden items-center text-gray-700 hover:text-gray-900 transition-colors"
        whileHover="hover"
      >
        <motion.span
          className="mr-2 font-grotesk text-body-2 lg:text-body-4 whitespace-nowrap"
          variants={{
            hover: { fontWeight: 700 }
          }}
        >
          Back to top
        </motion.span>
        <motion.div
          variants={{
            hover: { y: -4 }
          }}
          transition={{
            type: "spring",
            stiffness: 300
          }}
        >
          <FooterArrow className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </>
  );
}

export default FooterBottom;