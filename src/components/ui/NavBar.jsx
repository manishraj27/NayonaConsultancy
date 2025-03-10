import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuItems from "../../lib/menuItems";
import BentoCard from "./BentoCard.jsx";
import HeaderButtons from "./HeaderButtons.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (isMenuOpen) {
        mainContent.classList.add('blur-sm', 'transition-all', 'duration-300');
      } else {
        mainContent.classList.remove('blur-sm', 'transition-all', 'duration-300');
      }
    }

    // Prevent background scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Set up scroll event isolation when the menu is open
    if (isMenuOpen && scrollContainerRef.current) {
      const preventBackgroundScroll = (e) => {
        // Only if the event originated within our container
        if (scrollContainerRef.current && scrollContainerRef.current.contains(e.target)) {
          e.stopPropagation();
        }
      };
      
      // Stop wheel events from propagating to the document
      const handleWheel = (e) => {
        const { deltaY } = e;
        const container = scrollContainerRef.current;
        
        // Check if we're at the top or bottom of the container
        const isAtTop = container.scrollTop === 0;
        const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
        
        // Allow scrolling within the container
        if ((deltaY < 0 && !isAtTop) || (deltaY > 0 && !isAtBottom)) {
          e.stopPropagation();
        } else if ((deltaY < 0 && isAtTop) || (deltaY > 0 && isAtBottom)) {
          // Prevent default when at the boundaries to avoid background scroll
          e.preventDefault();
        }
      };
      
      // Add the event listeners to the specific container
      scrollContainerRef.current.addEventListener('wheel', handleWheel, { passive: false });
      scrollContainerRef.current.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
      
      // Clean up function
      return () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.removeEventListener('wheel', handleWheel);
          scrollContainerRef.current.removeEventListener('touchmove', preventBackgroundScroll);
        }
      };
    }
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <nav className="relative">
      <header className="">
        <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/5 z-40"
              onClick={() => setIsMenuOpen(false)}
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
                  scrollBehavior: 'smooth',
                  overscrollBehavior: 'contain',
                  touchAction: 'pan-y',
                }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                  {menuItems.map((item, index) => (
                    <BentoCard key={item.name} item={item} index={index} currentPath={window.location.pathname} />
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