import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function BentoCard({ item, index, currentPath, onNavigation }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const hasSubmenu = item.submenu;
  const isCurrentPath = item.to === currentPath;

  const isActive = useMemo(
    () =>
      activeSubmenu === item.name ||
      (hasSubmenu &&
        item.submenu.some((subItem) => currentPath && subItem.to === currentPath)),
    [activeSubmenu, item, currentPath, hasSubmenu]
  );

  const isHovered = hoveredCard === item.name;
  const Icon = item.icon;

  useEffect(() => {
    if (hasSubmenu && currentPath) {
      const matchingSubmenuItem = item.submenu.find(
        (subItem) => subItem.to === currentPath
      );
      if (matchingSubmenuItem) {
        setActiveSubmenu(item.name);
      }
    }
  }, [currentPath, item, hasSubmenu]);

  const handleClick = useCallback(
    (e) => {
      if (hasSubmenu) {
        e.preventDefault();
        setActiveSubmenu((prev) => (prev === item.name ? null : item.name));
      } else {
        onNavigation();
      }
    },
    [hasSubmenu, item.name, onNavigation]
  );

  const handleSubmenuItemClick = useCallback(() => {
    onNavigation();
  }, [onNavigation]);

  // Enhanced card animation variants
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 30, rotateX: -10 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200, // Softer spring for smoother motion
        damping: 25,    // Higher damping for less bounce
        mass: 0.8,      // Lower mass for quicker settling
        delay: index * 0.08, // Slightly reduced delay for fluidity
      },
    },
    hover: {
      scale: 1.04,
      rotateX: 2,
      boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Enhanced submenu animation variants
  const submenuVariants = {
    initial: { opacity: 0, y: -15, height: 0 },
    animate: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.35, // Slightly longer for smoothness
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for buttery easing
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const renderSubmenu = useMemo(() => {
    if (!hasSubmenu || !isActive) return null;

    return item.submenu.map((subItem, subIndex) => {
      const SubIcon = subItem.icon;
      const isSubmenuItemActive = currentPath === subItem.to;

      return (
        <motion.div
          key={subItem.name}
          initial={{ opacity: 0, x: -15 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: subIndex * 0.07, // Reduced delay for tighter stagger
              type: "spring",
              stiffness: 250,
              damping: 20,
              mass: 0.6,
            },
          }}
        >
          <Link
            to={subItem.to}
            onClick={(e) => {
              e.stopPropagation();
              handleSubmenuItemClick();
            }}
            className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 font-grotesk text-sm group/item ${
              isSubmenuItemActive
                ? "bg-primary-100 text-primary-400 font-semibold"
                : "hover:bg-primary-200 text-secondary-500"
            }`}
          >
            <motion.div
              className={`p-1.5 rounded-lg transition-colors duration-300 hidden sm:block ${
                isSubmenuItemActive
                  ? "bg-primary-200"
                  : "bg-white/5 group-hover/item:bg-primary-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <SubIcon
                className={`w-4 h-4 ${
                  isSubmenuItemActive ? "text-primary-400" : "text-secondary-500"
                }`}
              />
            </motion.div>
            {subItem.name}
          </Link>
        </motion.div>
      );
    });
  }, [hasSubmenu, isActive, item.submenu, currentPath, handleSubmenuItemClick]);

  const isDisabled = !hasSubmenu && isCurrentPath;

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setHoveredCard(item.name)}
      onHoverEnd={() => setHoveredCard(null)}
      className={`relative group isolate overflow-hidden rounded-3xl bg-secondary-200 border border-gray-100/50 transition-all duration-300 ease-out shadow-sm ${
        isActive && hasSubmenu
          ? "row-span-2 col-span-1 ring-1 ring-gray-200/50 scale-[1.01]"
          : "col-span-1 row-span-1"
      }`}
    >
      <Link
        to={item.to}
        onClick={handleClick}
        className={`relative flex flex-col h-full p-4 ${
          isDisabled ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }} // Smoother icon spin
            className={`p-2 rounded-xl transition-all duration-300 ${
              isActive ? "bg-gray-100/20" : "bg-white/10"
            }`}
          >
            <Icon
              className={`w-6 h-6 ${
                isActive ? "text-primary-400" : "text-secondary-500"
              } transition-colors duration-300`}
            />
          </motion.div>

          {hasSubmenu && (
            <motion.div
              animate={{ rotate: isActive ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="transform"
            >
              <ChevronRight
                className={`w-5 h-5 ${
                  isActive ? "text-gray-600" : "text-gray-400"
                }`}
              />
            </motion.div>
          )}
        </div>

        <h3
          className={`text-xl font-grotesk font-semibold mb-1 transition-colors duration-300 ${
            isActive ? "text-primary-400" : "text-secondary-600"
          }`}
        >
          {item.name}
        </h3>
        <p className="text-sm font-grotesk text-secondary-300 mb-2">{item.description}</p>

        <AnimatePresence>
          {hasSubmenu && isActive && (
            <motion.div
              variants={submenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-4 space-y-2 overflow-hidden"
            >
              {renderSubmenu}
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}

export default BentoCard;