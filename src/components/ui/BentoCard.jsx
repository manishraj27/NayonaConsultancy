import { ChevronRight } from "lucide-react";

const BentoCard = ({ item, activeSubmenu, setActiveSubmenu, hoveredCard, setHoveredCard }) => {
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
    <div
      onMouseEnter={() => setHoveredCard(item.name)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`relative group isolate overflow-hidden
        ${hasSubmenu ? 'row-span-2 col-span-1' : 'col-span-1 row-span-1'}
        rounded-3xl bg-white/10 backdrop-blur-sm
        border border-white/20
        ${isActive ? 'shadow-lg ring-2 ring-white/20' : ''}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-30 
        ${isHovered ? 'opacity-50' : ''}`} />

      <a
        href={item.href}
        onClick={handleClick}
        className={`relative flex flex-col h-full p-4
          ${item.disabled ? "pointer-events-none opacity-50" : ""}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-gray-800" />
          </div>
          {hasSubmenu && (
            <div className={`transform text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`}>
              <ChevronRight className="w-5 h-5" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {item.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">
          {item.description}
        </p>

        {hasSubmenu && isActive && (
          <div className="mt-4 space-y-2">
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
                  <div className="p-1.5 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-colors duration-200">
                    <SubIcon className="w-4 h-4" />
                  </div>
                  {subItem.name}
                </a>
              );
            })}
          </div>
        )}
      </a>
    </div>
  );
};


export default BentoCard;