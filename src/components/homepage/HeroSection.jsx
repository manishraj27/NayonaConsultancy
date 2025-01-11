
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-svh overflow-x-clip">
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/2 bg-gradient-to-tr from-blue to-purple opacity-70 blur-[350px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-1/2 w-1/2 bg-gradient-to-tr from-blue to-purple opacity-30 blur-[350px]" />

      {/* 3D Canvas Container */}
      <div className="pointer-events-none absolute -z-10 flex h-screen w-screen cursor-none select-none items-center justify-between overflow-visible">
        <div className="h-full w-full relative">
          {/* Canvas would be inserted here by your 3D engine */}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex h-svh w-full flex-col items-start justify-end gap-y-4 px-6 pb-8 pt-14 sm:gap-y-5 sm:px-[5%] sm:pb-20 sm:pt-[8%] md:gap-y-8 xl:pt-[6%] 2xl:gap-y-8 3xl:px-[7%]">
        {/* Title */}
        <div className="w-fit md:-mb-12 2xl:mb-0">
          <h1 className="sr-only">Investing in napoleonic ambitions.</h1>
          <h1 className="sm:max-w-[50vw]">
            <span className="pb-4 font-serif text-6xl text-white mix-blend-difference sm:mix-blend-normal">
              Investing in napoleonic ambitions.
            </span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
          {/* Arrow Icon */}
          <div className="order-last flex w-full justify-end sm:order-none sm:w-fit sm:justify-start">
            <div className="relative overflow-clip">
              <ArrowUpRight className="m-0 size-8 p-0 sm:size-12 xl:size-14 2xl:size-16 text-[#F6F6F8]" />
            </div>
          </div>

          {/* Description and CTA */}
          <div className="flex justify-start sm:justify-end">
            <div className="item flex flex-col items-start gap-y-8">
              <p className="sr-only">
                BlueBrown is an early-stage venture capital fund that source and invest in technology companies run by young innovators.
              </p>
              <p className="max-w-[32ch] text-balance text-lg text-grey mix-blend-exclusion">
                BlueBrown is an early-stage venture capital fund that source and invest in technology companies run by young innovators.
              </p>

              {/* CTA Button */}
              <a 
                href="#about" 
                className="group relative overflow-hidden font-mono flex items-center gap-x-2 rounded-lg px-4 py-2 font-medium uppercase transition-colors bg-white text-black"
              >
                <span className="flex relative h-2 w-2 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-purple to-blue transition-all duration-700 ease-expo group-hover:h-4 group-hover:w-4">
                  <ArrowRight className="-translate-x-12 transition-all duration-700 ease-expo group-hover:translate-x-0 text-[#F6F6F8]" />
                </span>
                <div className="relative z-10 flex items-center">
                  <span className="font-mono">Learn more</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;