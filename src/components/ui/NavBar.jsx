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
      <header className="flex flex-row items-center justify-between px-4 lg:px-16 py-4 lg:py-12">
      <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      {/* Navigation Menu */}
      <nav
        className={`
          fixed top-0 left-0 z-50 w-full h-full bg-[rgba(0,0,0,0.5)]
          transition-transform duration-300 ease-out transform
          lg:hidden

          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="rounded-3xl bg-red-500 px-6 lg:px-6 py-8 lg:py-12 flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex group flex-row items-center gap-4 
                text-3xl lg:text-5xl font-semibold 
                py-1 lg:py-4 rounded-2xl w-full px-6
                hover:bg-white transition-colors duration-200 ease-out
                ${
                  item.disabled
                    ? "text-gray-400 pointer-events-none"
                    : "text-gray-800 pointer-events-auto"
                }
              `}
            >
              <span className="w-0 group-hover:w-7 transition-[width] duration-300 ease-out hidden lg:block">
                <ArrowIcon />
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
