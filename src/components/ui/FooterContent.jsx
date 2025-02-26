

import FooterBottom from "./FooterBottom";

function FooterContent() {
 

  return (
    <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">
      
      
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-24">
       <FooterBottom />
      </div>
    </div>
  );
}

export default FooterContent;