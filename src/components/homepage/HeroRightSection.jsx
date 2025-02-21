import React from "react";

import Iridescence from "../../blocks/Backgrounds/Iridescence/Iridescence";
import BulletinCarousel from "../ui/BulletinCarousel";
import item from "../../lib/bulletin";
import GlassCardBento from "./GlassCoardBento";
import { WavyBackgroundDemo } from "../magicui/WavyBackgroundDemo";



const HeroRightSection = () => {
  return (
    <div className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col p-10 z-[1] overflow-hidden">
      {/* Background Iridescence */}
      <div className="absolute inset-0 w-full h-full">
        <Iridescence
          color={[0.1, 0.8, 1]}
          mouseReact={false}
          amplitude={0.15}
          speed={0.2}
        />
      </div>

      {/* Bento Grid Layout */}
      <div className="px-12 pt-16 pb-16">
        <div className="grid grid-cols-3 grid-rows-4 gap-4 w-full relative z-10">
         
          <GlassCardBento
            className="col-span-2 row-span-3"
            blurAmount={0}
          ></GlassCardBento>
          <GlassCardBento
            className="col-span-1 row-span-1 flex items-center justify-center"
            blurAmount={0}
          ></GlassCardBento>


          <GlassCardBento
            className="col-span-1 row-span-2 flex items-center justify-center"
            blurAmount={4}
          ></GlassCardBento>

          <GlassCardBento
            className="col-span-3 row-span-3 flex items-center justify-center"
            blurAmount={4}
          ></GlassCardBento>
        </div>
      </div>

<WavyBackgroundDemo />
      {/* Bulletin Carousel */}
      <div className="absolute bottom-8 left-0 w-full">
        <div className="w-full flex items-center justify-center">
          <BulletinCarousel items={item} />
        </div>
      </div>
    </div>
  );
};

export default HeroRightSection;
