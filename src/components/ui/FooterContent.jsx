import React from 'react';
import globe from '../../assets/images/globe.png';
import NayonaFooter from '../../assets/icons/NayonaFooter';
import UiButton from './UiButton';
import { ArrowBigDown, ArrowDown } from 'lucide-react';

function FooterContent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">
      {/* Container for the content with responsive layout */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center ">
        {/* SVG logo with responsive width */}
        <div className="w-full flex justify-center lg:justify-start mb-4 lg:mb-0">

          <NayonaFooter />
        </div>

        {/* Based in New York with globe icon */}
        <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0 whitespace-nowrap">
          <img src={globe} alt="Globe" className="w-6 h-6 mr-2" />
          <span className="text-gray-700 font-grotesk text-body-2">Based in New York</span>
        </div>

       {/* below based in i want back to top button but in mobile view i want vertically stacked first back to top then nayonafooter than based in  */}

      </div>
    </div>
  );
}

export default FooterContent;