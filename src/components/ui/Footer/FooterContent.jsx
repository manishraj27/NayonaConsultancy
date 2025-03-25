import FooterBottom from "./FooterBottom";
import FooterCredits from "./FooterCredits";
import FooterUpper from "./FooterUpper";



function FooterContent() {
  return (
    <>
      
      <div className="h-full w-full flex flex-col justify-end pb-4 px-4 lg:px-12">
     
        <FooterUpper />


        <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-24">
          <FooterBottom />
        </div>
        <FooterCredits />
       
      
      </div>
    </>

  );
}

export default FooterContent;
