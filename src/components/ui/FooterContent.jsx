

import { Copyright } from "lucide-react";
import FooterBottom from "./FooterBottom";

function FooterContent() {


  return (
    <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">


      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-24">
        <FooterBottom />
      </div>
      
      <div className="w-full my-4 px-4">
        <div className="h-px bg-gray-300"></div>
      </div>

      {/* "All Rights Reserved" */}
      <div className="w-full flex justify-between items-center px-4">
        {/* All Rights Reserved */}
        <span className="flex items-center text-gray-700 font-grotesk text-body-5 lg:text-body-5">
          <Copyright className="w-4 h-4 mr-2" /> {new Date().getFullYear()} All Rights Reserved
        </span>

        {/* Website by Him */}
        <span className="text-gray-700 font-grotesk text-body-5 lg:text-body-5">
          Website by
          <a
            href="https://manishraj.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            Him
          </a>
        </span>
      </div>

    </div>
  );
}

export default FooterContent;