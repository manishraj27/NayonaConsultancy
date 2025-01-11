import { useState } from "react";


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
      {/* Chat with SOHub Button */}
      <div className="flex items-center gap-4">
        <a href="/contact" className="bg-gray-200 p-1 rounded-full flex items-center group hover:scale-110 transition-transform duration-500">
          <span className="text-black font-medium uppercase pl-10 pr-8">Chat with SOHub</span>
          <span className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
            <span className="w-4">
              <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.26215C1 2.33911 1.79594 1.59084 2.77778 1.59084L15.2222 1.59082C16.2041 1.59082 17 2.33909 17 3.26213V11.6485C17 12.5716 16.2041 13.3198 15.2222 13.3199L11.9989 13.3199C11.7918 13.3199 11.5912 13.3878 11.4318 13.512L8.9962 15.409L6.59291 13.5151C6.43287 13.389 6.23071 13.3199 6.02188 13.3199H2.77778C1.79594 13.3199 1 12.5716 1 11.6486L1 3.26215Z" stroke="currentColor" strokeWidth="1.77778" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black p-1 rounded-full flex items-center group hover:scale-110 transition-transform duration-500"
        >
          <span className="text-gray-100 font-medium uppercase pl-6 lg:pl-10 pr-4 lg:pr-8 relative overflow-hidden">
            <span className={`block transition-transform duration-500 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
              Menu
            </span>
            <span className={`absolute top-0 left-0 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
              Close
            </span>
          </span>
          <span className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            <span className="w-4 transition-transform duration-500 text-white">
              <DotsIcon />
            </span>
          </span>
        </button>
      </div>

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