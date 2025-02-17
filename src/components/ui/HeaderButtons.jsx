import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChatIcon from "../../assets/icons/ChatIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import FinalLogoWithBrand from "../../assets/icons/FinalLogoWithBrand";
import LogoWithInitial from '../../assets/icons/LogoWithInitial';

const HeaderButtons = ({ isMenuOpen, setIsMenuOpen }) => {
  const [logoType, setLogoType] = useState('full');
  const [logoColor, setLogoColor] = useState("#000000");
  const [menuColor, setMenuColor] = useState("#0C1016"); // Default menu button background color
  const [menuInnerCircleColor, setMenuInnerCircleColor] = useState("#1E242C"); // Default menu inner circle color
  const [textColor, setTextColor] = useState("#ffffff"); // Default menu text color
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set scrolling state
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 40);

      // Logo type logic
      setLogoType(scrollY > 50 ? 'initial' : 'full');

      // Color logic for dark-section
      const motto = document.querySelector('.dark-section');
      if (motto) {
        const mottoRect = motto.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if motto section is in viewport
        if (mottoRect.top < viewportHeight && mottoRect.bottom > 0) {
          const visiblePercentage = Math.min(
            (viewportHeight - mottoRect.top) / viewportHeight * 100,
            100
          );

          // Change colors when motto section is at least 30% visible
          if (visiblePercentage > 30) {
            setLogoColor("#ffffff");
            setMenuColor("#ffffff"); // White menu button background
            setMenuInnerCircleColor("#D9E0E3"); // Light gray inner circle
            setTextColor("#000000"); // Black text
          } else {
            setLogoColor("#000000");
            setMenuColor("#0C1016"); // Black menu button background
            setMenuInnerCircleColor("#1E242C"); // Dark gray inner circle
            setTextColor("#ffffff"); // white text
          }
        } else {
          setLogoColor("#000000");
          setMenuColor("#0C1016"); // Black menu button background
          setMenuInnerCircleColor("#1E242C"); // Dark gray inner circle
          setTextColor("#ffffff"); // white text
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed flex flex-row items-center justify-between w-full px-4 lg:px-12 py-4 lg:py-4 z-[10]">
      <motion.div
        onClick={() => (window.location.href = "/")}
        className="text-xl lg:text-3xl font-bold tracking-wider flex items-center cursor-pointer"
        style={{ 
          color: logoColor,
          opacity: isScrolling ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        <AnimatePresence mode="wait">
          {logoType === 'full' ? (
            <motion.div
              key="fullLogo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FinalLogoWithBrand />
            </motion.div>
          ) : (
            <motion.div
              key="simpleLogo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <LogoWithInitial />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
          style={{ backgroundColor: menuColor }} // Use menuColor state
        >
          <span className="text-sm lg:text-base font-medium uppercase pl-6 lg:pl-10 pr-4 lg:pr-8" style={{ color: textColor }}> {/* Use textColor state */}
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
            style={{ backgroundColor: menuInnerCircleColor }} // Use menuInnerCircleColor state
          >
            <span className="block w-1/3 will-change-transform group-hover:rotate-[90deg] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]" style={{ color: textColor }}> {/* Use textColor state */}
              <DotsIcon />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;