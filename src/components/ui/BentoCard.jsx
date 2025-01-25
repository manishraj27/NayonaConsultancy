import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function BentoCard({ item, index }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const hasSubmenu = item.submenu;
  const isActive = activeSubmenu === item.name;
  const isHovered = hoveredCard === item.name;
  const Icon = item.icon;

  const handleClick = (e) => {
    if (hasSubmenu) {
      e.preventDefault();
      setActiveSubmenu(isActive ? null : item.name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setHoveredCard(item.name)}
      onHoverEnd={() => setHoveredCard(null)}
      className={`relative group isolate overflow-hidden
        ${hasSubmenu ? "row-span-2 col-span-1" : "col-span-1 row-span-1"}
        rounded-3xl bg-white/10 backdrop-blur-sm
        border border-white/20
        transition-all duration-300 ease-out
        ${isActive ? "shadow-lg ring-2 ring-white/20" : ""}
      `}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-30 transition-opacity duration-300 
        ${isHovered ? "opacity-50" : ""}`}
      />

      {/* Animated spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />

      <motion.a
        href={item.href}
        onClick={handleClick}
        className={`relative flex flex-col h-full p-4
          ${item.disabled ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-gray-800" />
          </div>
          {hasSubmenu && (
            <motion.div
              animate={{ rotate: isActive ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="transform text-gray-400"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>

        <p className="text-sm text-gray-600 mb-2">{item.description}</p>

        {hasSubmenu && isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {item.submenu.map((subItem) => {
              const SubIcon = subItem.icon;
              return (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="flex items-center gap-3 p-2 rounded-xl
                    hover:bg-white/10 transition-colors duration-200
                    text-gray-700 text-sm group/item"
                >
                  <div
                    className="p-1.5 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-colors duration-200
                      hidden sm:block" // Hide icons on mobile
                  >
                    <SubIcon className="w-4 h-4" />
                  </div>
                  {subItem.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </motion.a>
    </motion.div>
  );
}

export default BentoCard;
