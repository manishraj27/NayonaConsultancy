import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "../../assets/icons/ChatIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import FinalLogoWithBrand from "../../assets/icons/FinalLogoWithBrand";
import LogoWithInitial from '../../assets/icons/LogoWithInitial';

const HeaderButtons = ({ isMenuOpen, setIsMenuOpen }) => {
  const [logoType, setLogoType] = useState('full');
  const [logoColor, setLogoColor] = useState("#E1E4E6");
  const [menuColor, setMenuColor] = useState("#0c0c0c");
  const [menuInnerCircleColor, setMenuInnerCircleColor] = useState("#1A1F2F");
  const [textColor, setTextColor] = useState("#ffffff");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Memoized color settings for motto and footer sections
  const colorSettings = useMemo(() => ({
    motto: {
      logoColor: "#E1E4E6",
      menuColor: "#E1E4E6",
      menuInnerCircleColor: "#D7D7D7",
      textColor: "#000000"
    },
    default: {
      logoColor: "#000000",
      menuColor: "#0c0c0c",
      menuInnerCircleColor: "#1A1F2F",
      textColor: "#ffffff"
    }
  }), []);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 40);

    setLogoType(scrollY > 50 ? 'initial' : 'full');

    const motto = document.querySelector('.dark-section');
    const footer = document.querySelector('footer');

    if (motto) {
      const mottoRect = motto.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (mottoRect.top < viewportHeight && mottoRect.bottom > 0) {
        const visiblePercentage = Math.min(
          (viewportHeight - mottoRect.top) / viewportHeight * 100,
          100
        );

        if (visiblePercentage > 30) {
          setLogoColor(colorSettings.motto.logoColor);
          setMenuColor(colorSettings.motto.menuColor);
          setMenuInnerCircleColor(colorSettings.motto.menuInnerCircleColor);
          setTextColor(colorSettings.motto.textColor);
        } else {
          setLogoColor(colorSettings.default.logoColor);
          setMenuColor(colorSettings.default.menuColor);
          setMenuInnerCircleColor(colorSettings.default.menuInnerCircleColor);
          setTextColor(colorSettings.default.textColor);
        }
      } else {
        setLogoColor(colorSettings.default.logoColor);
        setMenuColor(colorSettings.default.menuColor);
        setMenuInnerCircleColor(colorSettings.default.menuInnerCircleColor);
        setTextColor(colorSettings.default.textColor);
      }
    }

    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (footerRect.top < viewportHeight && footerRect.bottom > 0) {
        setLogoColor(colorSettings.default.logoColor);
        setMenuColor(colorSettings.default.menuColor);
        setMenuInnerCircleColor(colorSettings.default.menuInnerCircleColor);
        setTextColor(colorSettings.default.textColor);
      }
    }
  }, [colorSettings]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="fixed flex flex-row items-center justify-between w-full px-4 lg:px-12 py-4 lg:py-4 z-40">
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
        <a
          href="/contact"
          className="p-[0.3rem] select-none will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex-row items-center hidden lg:flex"
          style={{ backgroundColor: "#C7F0FF" }}
        >
          <span className="text-sm lg:text-lg font-normal uppercase pl-10 pr-8 text-slate-900">
            Chat with us
          </span>
          <span className="relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-[#90E2FF]">
            <span className="block w-1/3 will-change-transform group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-slate-900">
              <ChatIcon />
            </span>
            <span className="block w-1/3 will-change-transform absolute -translate-x-[250%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-slate-900">
              <ChatIcon />
            </span>
          </span>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-[0.3rem] will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex flex-row items-center"
          style={{ backgroundColor: menuColor }}
        >
          <span className="text-sm lg:text-base font-normal uppercase pl-6 lg:pl-10 pr-4 lg:pr-8" style={{ color: textColor }}>
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
            style={{ backgroundColor: menuInnerCircleColor }}
          >
            <span className="block w-1/3 will-change-transform group-hover:rotate-[90deg] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]" style={{ color: textColor }}>
              <DotsIcon />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;