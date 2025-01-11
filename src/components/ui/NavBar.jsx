import { useState } from "react";
import HeaderButtons from "./HeaderButtons";
import ArrowIcon from "../../assets/icons/ArrowIcon";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", disabled: true },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative">
      <header>
        <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <nav className="fixed lg:px-0 px-4 lg:right-16 w-full lg:w-2/5 top-24 lg:top-32 select-none pointer-events-auto z-[3]">
          <div className="rounded-3xl bg-gray-100 px-4 lg:px-6 py-4 lg:py-6 flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
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
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
