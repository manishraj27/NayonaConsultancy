import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderButtons from "./HeaderButtons";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import menuItems from "../../lib/menuItems";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: {
      x: 100,
      y: -100,
      opacity: 0,
      rotate: 10,
      scale: 0.9
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5
      }
    },
    exit: {
      x: 100,
      y: -100,
      opacity: 0,
      rotate: 10,
      scale: 0.9,
      transition: {
        type: "tween",
        duration: 0.3,
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
            className="fixed lg:px-0 px-4 lg:right-16 w-full lg:w-2/5 top-24 lg:top-32 select-none pointer-events-auto z-[3]"
          >
            <motion.div 
              className="rounded-3xl bg-gray-100 px-4 lg:px-6 py-4 lg:py-6 flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className={`flex group flex-row items-center gap-3 
                    text-xl lg:text-2xl font-semibold 
                    py-2 lg:py-3 rounded-2xl w-full px-4
                    hover:bg-white transition-colors duration-200 ease-out
                    ${
                      item.disabled
                        ? "text-gray-400 pointer-events-none"
                        : "text-gray-800 pointer-events-auto"
                    }
                  `}
                >
                  <span className="w-0 group-hover:w-5 transition-[width] duration-300 ease-out hidden lg:block">
                    <ArrowIcon />
                  </span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;