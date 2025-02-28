
import { cn } from "../../lib/utils";
import DotPattern from "../magicui/DotPattern";
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
       
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />

      </div>
    </>

  );
}

export default FooterContent;
