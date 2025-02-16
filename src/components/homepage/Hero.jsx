import HeroButton from "../ui/HeroButton";
import "./gradient.css";
import PencilStroke from "./../../assets/icons/PencilStroke";
import BulletinCarousel from "../ui/BulletinCarousel";
import item from "../../lib/bulletin";
import { AnimatedBeamMultipleOutputDemo } from "./../ui/AnimatedBeamMultipleOutputDemo";
import Iridescence from "./../../blocks/Backgrounds/Iridescence/Iridescence";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex w-full min-h-screen items-center justify-between lg:px-12 px-4 bg-light-200"
      aria-label="hero"
    >
      {/* Left Content */}
      <div className="max-w-xl lg:pr-8 text-left lg:text-left">
        <div className="my-auto lg:pr-[60px]">
          <h2 className="text-heading-3 mt-2 font-open-sans font-light leading-normal">
            <span className="relative block">
              <span className="inline-block mr-1">We</span>
              <span className="inline-block mr-1">help</span>
              <span className="inline-block mr-1">companies</span>
              <span className="inline-block mr-1">optimize</span>
              <span className="inline-block mr-1">their</span>
              <span className="inline-block mr-1">Oracle</span>
              <span className="inline-block mr-1">EPM</span>
              <span className="relative inline-block">
                <span className="text-heading-3 font-serif italic">
                  solutions
                </span>
                <PencilStroke />
              </span>
            </span>
          </h2>

          <div className="pt-4">
            <p className="text-body-3 justify-start items-start font-grotesk max-w-2xl">
              Nayona Consultancy is a leading provider of Oracle EPM services,
              helping companies streamline their financial and operational
              processes. Our team of experts deliver tailored solutions to
              optimize your Oracle investment.
            </p>
          </div>
          <div className="pt-6">
            <HeroButton />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col items-center justify-center p-10 z-[1] overflow-hidden">
        {/* Noise effect covering the entire background */}
        

        {/* Iridescence effect */}
        <div className="absolute inset-0 w-full h-full">
          <Iridescence
            color={[0.4, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.5}
          />
        </div>

        {/* Bulletin Carousel */}
        <div className="absolute w-full h-full flex items-center justify-center mt-[440px]">
          <BulletinCarousel items={item} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
