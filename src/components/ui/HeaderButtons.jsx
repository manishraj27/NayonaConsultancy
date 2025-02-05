import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ChatIcon from "../../assets/icons/ChatIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import FinalLogoWithBrand from "../../assets/icons/FinalLogoWithBrand";

const HeaderButtons = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation(); 
  const [logoColor, setLogoColor] = useState("#000000");


  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      // Get all sections you want to trigger color changes
      const sections = document.querySelectorAll('section'); // Add appropriate selector
      const scrollPosition = window.scrollY+50; // Similar to the first example's trigger point

      // Check which section we're currently in
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          // Change color based on section
          // You can customize these colors or add data attributes to sections
          if (section.classList.contains('dark-section')) {
            setLogoColor("#ffffff"); // Light blue for dark sections
          } else {
            setLogoColor("#000000"); // Default color for light sections
          }
        }
      });

      // Existing animation logic
      controls.start({
        y: -window.scrollY,
        opacity: 0,
        transition: { type: "spring", stiffness: 500, damping: 100 },
      });

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        controls.start({
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 500, damping: 100 },
        });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [controls]);



  return (
    <div className="fixed flex flex-row items-center justify-between w-full px-4 lg:px-16 py-4 lg:py-4 z-[10]">
      {/* Logo Section */}
      <motion.div
        onClick={() => (window.location.href = "/")}
        className="text-xl lg:text-3xl font-bold tracking-wider flex items-center cursor-pointer"
        animate={controls} 
        style={{ color: logoColor }} // Apply the color here
        initial={{ y: 0, opacity: 1 }}
      >
        <FinalLogoWithBrand />
      </motion.div>

      {/* Right Side Buttons Container */}
      <div className="flex flex-row items-center gap-4 lg:gap-8 z-[4] pointer-events-auto">
        {/* Chat Button - Hidden on mobile */}
        <a
          href="/contact"
          className="p-[0.3rem] select-none will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex-row items-center hidden lg:flex"
          style={{ backgroundColor: "#D9E0E3" }}
        >
          <span className="text-sm lg:text-lg font-medium uppercase pl-10 pr-8 text-black">
            Chat with us
          </span>
          <span className="relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-[#F0F6F8]">
            <span className="block w-1/3 will-change-transform group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
              <ChatIcon />
            </span>
            <span className="block w-1/3 will-change-transform absolute -translate-x-[250%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
              <ChatIcon />
            </span>
          </span>
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-[0.3rem] will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex flex-row items-center"
          style={{ backgroundColor: "#0C1016" }}
        >
          <span className="text-sm lg:text-base font-medium uppercase pl-6 lg:pl-10 pr-4 lg:pr-8 text-[#F0F6F8]">
            <span className="block text-wrapper relative overflow-hidden">
              <span
                className="absolute left-1/2 -translate-x-1/2 top-0 flex transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.2)]"
                style={{
                  transform: `translateY(${isMenuOpen ? "-100%" : "0"}) translateX(-50%)`,
                }}
              >
                Menu
              </span>
              <span
                className="flex transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.2)]"
                style={{
                  transform: `translateY(${isMenuOpen ? "0" : "100%"})`,
                }}
              >
                Close
              </span>
            </span>
          </span>
          <span
            className="relative overflow-hidden flex items-center justify-center w-7 lg:w-12 h-7 lg:h-12 rounded-full"
            style={{ backgroundColor: "#1E242C" }}
          >
            <span className="block w-1/3 will-change-transform group-hover:rotate-[90deg] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-[#F0F6F8]">
              <DotsIcon />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;