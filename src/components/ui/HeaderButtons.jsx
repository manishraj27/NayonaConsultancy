import { useState } from "react";


const HeaderButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ChatIcon = () => (
    <svg width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1 3.26215C1 2.33911 1.79594 1.59084 2.77778 1.59084L15.2222 1.59082C16.2041 1.59082 17 2.33909 17 3.26213V11.6485C17 12.5716 16.2041 13.3198 15.2222 13.3199L11.9989 13.3199C11.7918 13.3199 11.5912 13.3878 11.4318 13.512L8.9962 15.409L6.59291 13.5151C6.43287 13.389 6.23071 13.3199 6.02188 13.3199H2.77778C1.79594 13.3199 1 12.5716 1 11.6486L1 3.26215Z" 
        stroke="currentColor" 
        strokeWidth="1.77778" 
        strokeLinejoin="round"
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
    <div className="flex flex-row items-center gap-7 z-[4] pointer-events-auto">
      {/* Chat Button */}
      <a 
        href="/contact"
        className="p-[0.3rem] select-none will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex-row items-center hidden lg:flex"
        style={{ backgroundColor: '#D9E0E3' }}
      >
        <span className="text-sm lg:text-lg font-medium uppercase pl-10 pr-8 text-black">
          Chat with us
        </span>
        <span className="relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-[#F0F6F8]">
          <span className="block w-1/3 will-change-transform group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <ChatIcon />
          </span>
          <span className="block w-1/3 will-change-transform absolute -translate-x-[250%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <ChatIcon />
          </span>
        </span>
      </a>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-[0.3rem] will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex flex-row items-center"
        style={{ backgroundColor: '#0C1016' }}
      >
        <span className="text-sm lg:text-base font-medium uppercase pl-6 lg:pl-10 pr-4 lg:pr-8 text-[#F0F6F8]">
          <span className="block text-wrapper relative overflow-hidden">
            <span 
              className="absolute left-1/2 -translate-x-1/2 top-0 flex transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.2)]"
              style={{ 
                transform: `translateY(${isMenuOpen ? '-100%' : '0'}) translateX(-50%)`
              }}
            >
              Menu
            </span>
            <span 
              className="flex transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.2)]"
              style={{ 
                transform: `translateY(${isMenuOpen ? '0' : '100%'})` 
              }}
            >
              close
            </span>
          </span>
        </span>
        <span 
          className="relative overflow-hidden flex items-center justify-center w-7 lg:w-12 h-7 lg:h-12 rounded-full"
          style={{ backgroundColor: '#1E242C' }}
        >
          <span className="block w-1/3 will-change-transform group-hover:rotate-[90deg] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-[#F0F6F8]">
            <DotsIcon />
          </span>
        </span>
      </button>
    </div>
  );
};

export default HeaderButtons;