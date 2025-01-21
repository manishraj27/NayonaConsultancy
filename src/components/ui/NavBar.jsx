import { useState } from "react";
import BentoCard from "./BentoCard";
import HeaderButtons from './HeaderButtons';
import menuItems from "../../lib/menuItems";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative">
      <header>
        <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <nav className={`fixed lg:px-6 px-4 right-0 left-0 lg:right-16 lg:left-auto 
        w-full lg:w-3/5 top-24 lg:top-32 
        select-none pointer-events-auto z-[3]
        transition-all duration-500 ease-[cubic-bezier(.22,.68,0,1)]
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className={`max-h-[70vh] overflow-y-auto rounded-3xl 
          bg-gray-50/80 backdrop-blur-xl border border-white/20
          p-6 shadow-xl transform transition-all duration-500
          ease-[cubic-bezier(.22,.68,0,1)]
          ${isMenuOpen ? 'scale-100' : 'scale-95'}
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-gray-300
          hover:scrollbar-thumb-gray-400`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-500 
                  ease-[cubic-bezier(.22,.68,0,1)]
                  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}}`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <BentoCard 
                  item={item} 
                  activeSubmenu={activeSubmenu} 
                  setActiveSubmenu={setActiveSubmenu} 
                  hoveredCard={hoveredCard} 
                  setHoveredCard={setHoveredCard} 
                />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;