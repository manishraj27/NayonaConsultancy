import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderButtons from "./HeaderButtons";
import menuItems from "../../lib/menuItems";
import BentoCard from "./BentoCard.JSX";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
    <div className="relative">
      <header>
        <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed lg:px-6 px-4 right-0 left-0 lg:right-16 lg:left-auto 
              w-full lg:w-3/5 top-24 lg:top-32 
              select-none pointer-events-auto z-[3]"
          >
            <motion.div 
              className="max-h-[70vh] overflow-y-auto rounded-3xl 
                bg-gray-50 backdrop-blur-xl border border-gray-100/50
                p-6"
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                {menuItems.map((item, index) => (
                  <BentoCard key={item.name} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  );
};

export default NavBar;