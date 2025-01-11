import { useState } from "react";
import HeaderButtons from "./HeaderButtons";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', disabled: true },
    { name: 'Studio', href: '/studio' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' }
  ];

  const ArrowIcon = () => (
    <svg width="100%" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M24.4118 2L41.5 19.0882L24.4118 36.1765M2.06726e-07 19.0882L40.2794 19.0882" 
        stroke="currentColor" 
        strokeWidth="4.88235"
      />
    </svg>
  );

  const DotsIcon = () => (
    <svg width="100%" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.4517" cy="3.41264" r="2.54545" fill="currentColor" />
      <circle cx="2.54545" cy="3.41264" r="2.54545" fill="currentColor" />
    </svg>
  );

  return (
    <div className="relative">
      <HeaderButtons/>

      {/* Navigation Menu */}
      <nav className={`w-full right-0 top-20 lg:top-0 fixed lg:relative select-none pointer-events-auto z-[3] px-4 lg:px-0 transition-transform duration-500 ${isOpen ? 'translate-x-0 rotate-0' : 'translate-x-full rotate-8'}`}>
        <div className="rounded-3xl bg-gray-100 px-6 lg:px-6 py-8 lg:py-12 flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex group flex-row items-center gap-4 
                text-3xl lg:text-5xl font-semibold 
                py-1 lg:py-4 rounded-2xl w-full px-6
                hover:bg-white transition-colors duration-200 ease-out
                ${item.disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-800 pointer-events-auto'}
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