import React from "react";
import globe from "../../assets/images/globe.png";
import NayonaFooter from "../../assets/icons/NayonaFooter";
import UiButton from "./UiButton";
import { ArrowBigDown, ArrowDown } from "lucide-react";

function FooterContent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">
      {/* Mobile layout (flex column with different order) */}
      <div className="w-full lg:hidden flex flex-col items-center">
        {/* "Based in New York" on top for mobile */}
        <div className="flex items-center justify-center mb-4 whitespace-nowrap">
          <img src={globe} alt="Globe" className="w-6 h-6 mr-2" />
          <span className="text-gray-700 font-grotesk text-body-2">
            Based in New York
          </span>
        </div>
        
        {/* Logo in the middle for mobile */}
        <div className="mb-4">
          <NayonaFooter />
        </div>
        
        {/* Back to top button at bottom for mobile */}
        <button
          onClick={scrollToTop}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          <span className="mr-2 font-grotesk text-body-2 whitespace-nowrap">
            Back to top
          </span>
          <ArrowDown className="w-4 h-4 transform rotate-180" />
        </button>
      </div>
      
      {/* Desktop layout (preserved exactly as original) */}
      <div className="hidden lg:flex lg:flex-row lg:items-center w-full">
        {/* SVG logo with responsive width */}
        <div className="w-full flex justify-center lg:justify-start gap-32">
          <NayonaFooter />
          <div className="flex items-center justify-start whitespace-nowrap">
            <img src={globe} alt="Globe" className="w-6 h-6 mr-2" />
            <span className="text-gray-700 font-grotesk text-body-2">
              Based in New York
            </span>
          </div>
        </div>
        {/* Back to top button */}
        <div className="flex justify-end ml-auto">
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="mr-2 font-grotesk text-body-2 whitespace-nowrap">
              Back to top
            </span>
            <ArrowDown className="w-4 h-4 transform rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;