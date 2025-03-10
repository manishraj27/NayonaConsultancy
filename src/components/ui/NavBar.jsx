import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuItems from "../../lib/menuItems";
import BentoCard from "./BentoCard.jsx";
import HeaderButtons from "./HeaderButtons.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle blur effect on main content
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.toggle("blur-sm", isMenuOpen);
      mainContent.classList.toggle("transition-all", isMenuOpen);
      mainContent.classList.toggle("duration-300", isMenuOpen);
    }
  }, [isMenuOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Handle scroll event isolation
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (isMenuOpen && container) {
      const preventBackgroundScroll = (e) => {
        if (container.contains(e.target)) {
          e.stopPropagation();
        }
      };

      const handleWheel = (e) => {
        const { deltaY } = e;
        const isAtTop = container.scrollTop === 0;
        const isAtBottom =
          container.scrollHeight - container.scrollTop === container.clientHeight;

        if ((deltaY < 0 && !isAtTop) || (deltaY > 0 && !isAtBottom)) {
          e.stopPropagation();
        } else if ((deltaY < 0 && isAtTop) || (deltaY > 0 && isAtBottom)) {
          e.preventDefault();
        }
      };

      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchmove", preventBackgroundScroll, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchmove", preventBackgroundScroll);
      };
    }
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const handleOverlayClick = useCallback(() => setIsMenuOpen(false), []);

  return (
    <nav className="relative">
      <header>
        <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/5 z-40"
              onClick={handleOverlayClick}
            />

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed lg:px-6 px-4 right-0 left-0 lg:right-16 lg:left-auto 
                w-full lg:w-3/5 top-24 lg:top-32 
                select-none pointer-events-auto z-50"
            >
              <motion.div
                ref={scrollContainerRef}
                className="max-h-[70vh] overflow-y-auto rounded-3xl 
                  bg-light-200 backdrop-blur-xl border border-gray-100/50
                  p-6 scrollbar-hide scroll-ready"
                style={{
                  scrollBehavior: "smooth",
                  overscrollBehavior: "contain",
                  touchAction: "pan-y",
                }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                  {menuItems.map((item, index) => (
                    <BentoCard
                      key={item.name}
                      item={item}
                      index={index}
                      currentPath={window.location.pathname}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;