import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChatIcon from "../../assets/icons/ChatIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import FinalLogoWithBrand from "../../assets/icons/FinalLogoWithBrand";
import LogoWithInitial from '../../assets/icons/LogoWithInitial';
import Lenis from '@studio-freight/lenis';



const HeaderButtons = ({ isMenuOpen, setIsMenuOpen }) => {
  const [logoType, setLogoType] = useState('full');
  const [logoColor, setLogoColor] = useState("#000000");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollY = lenis.scroll;
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set timeout to stop scrolling state
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 40);

      // Logo type logic remains the same as original
      setLogoType(scrollY > 50 ? 'initial' : 'full');

      // Color logic for different sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          setLogoColor(
            section.classList.contains('dark-section') ? "#ffffff" : "#000000"
          );
        }
      });
    };

    lenis.on('scroll', handleScroll);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      lenis.off('scroll', handleScroll);
      lenis.destroy();
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