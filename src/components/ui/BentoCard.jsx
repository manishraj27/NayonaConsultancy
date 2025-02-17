import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

function BentoCard({ item, index, currentPath }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const hasSubmenu = item.submenu;
  const isActive = activeSubmenu === item.name || 
    (hasSubmenu && item.submenu.some(subItem => 
      currentPath && subItem.href === currentPath
    ));
  
  const isHovered = hoveredCard === item.name;
  const Icon = item.icon;

  useEffect(() => {
    if (hasSubmenu && currentPath) {
      const matchingSubmenuItem = item.submenu.find(
        subItem => subItem.href === currentPath
      );
      
      if (matchingSubmenuItem) {
        setActiveSubmenu(item.name);
      }
    }
  }, [currentPath, item, hasSubmenu]);

  const handleClick = (e) => {
    if (hasSubmenu) {
      e.preventDefault();
      setActiveSubmenu(isActive ? null : item.name);
    }
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const submenuVariants = {
    initial: {
      opacity: 0,
      y: -10,
      height: 0
    },
    animate: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setHoveredCard(item.name)}
      onHoverEnd={() => setHoveredCard(null)}
      className={`relative group isolate overflow-hidden
        ${hasSubmenu ? "row-span-2 col-span-1" : "col-span-1 row-span-1"}
        rounded-3xl bg-white/90
        border border-gray-100/50
        transition-all duration-300 ease-out
        shadow-sm hover:shadow-md
        ${isActive ? "ring-1 ring-gray-200/50 scale-[1.01]" : ""}
      `}
    >
    

      <motion.a
        href={item.href}
        onClick={handleClick}
        className={`relative flex flex-col h-full p-4
          ${item.disabled ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <div className="flex items-center justify-between mb-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`p-2 rounded-xl transition-all duration-300
              ${isActive ? 'bg-gray-100/20' : 'bg-white/10'}
            `}
          >
            <Icon className={`w-6 h-6 
              ${isActive ? 'text-gray-800' : 'text-gray-800'}
              transition-colors duration-300`} 
            />
          </motion.div>

          {hasSubmenu && (
            <motion.div
              animate={{ 
                rotate: isActive ? 90 : 0,
                color: isActive ? '#4B5563' : '#9CA3AF'
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="transform"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          )}
        </div>

        <h3 className={`text-xl font-grotesk font-semibold mb-1 transition-colors duration-300
          ${isActive ? 'text-gray-900' : 'text-gray-800'}
        `}>
          {item.name}
        </h3>
        <p className="text-sm font-grotesk text-gray-600 mb-2">{item.description}</p>

        <AnimatePresence>
          {hasSubmenu && isActive && (
            <motion.div
              variants={submenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-4 space-y-2 overflow-hidden"
            >
              {item.submenu.map((subItem, subIndex) => {
                const SubIcon = subItem.icon;
                const isSubmenuItemActive = currentPath === subItem.href;
                
                return (
                  <motion.a
                    key={subItem.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: subIndex * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    href={subItem.href}
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center gap-3 p-2 rounded-xl
                      transition-all duration-200 font-grotesk text-sm group/item
                      ${isSubmenuItemActive 
                        ? 'bg-gray-100 text-gray-900 font-grotesk font-semibold' 
                        : 'hover:bg-white/10 text-gray-700'}`}
                  >
                    <div
                      className={`p-1.5 rounded-lg transition-colors duration-200
                        hidden sm:block
                        ${isSubmenuItemActive 
                          ? 'bg-gray-100/50' 
                          : 'bg-white/5 group-hover/item:bg-white/10'}`}
                    >
                      <SubIcon className={`w-4 h-4 
                        ${isSubmenuItemActive ? 'text-gray-800' : ''}`} 
                      />
                    </div>
                    {subItem.name}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}

export default BentoCard;

