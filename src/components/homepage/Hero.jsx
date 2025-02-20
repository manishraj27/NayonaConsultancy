import HeroButton from "../ui/HeroButton";
import "./gradient.css";
import PencilStroke from "./../../assets/icons/PencilStroke";
import RightSection from "../ui/RightSection";
import { FlipWords } from "../magicui/flip-words";

const Hero = () => {

  const words = ["instantly", "completely", "strategically", "brilliantly", "efficiently"]


  return (
    <section
      id="hero"
      className="relative flex w-full min-h-screen items-center justify-between lg:px-12 px-4 bg-light-200"
      aria-label="hero"
    >
      {/* Left Content */}
      <div className="max-w-xl lg:pr-8 text-left lg:text-start">
        <div className="my-auto lg:pr-[60px]">
          <h2 className="text-heading-3 mt-2 font-open-sans font-light leading-normal">
            <span className="relative block">
              <span className="inline-block mr-2">We</span>
              <span className="inline-block mr-2">help</span>
              <span className="inline-block mr-2">companies</span>
              <span className="inline-block mr-2">transform</span>
              <span className="inline-block mr-2">their</span>
              <span className="inline-block mr-2">Oracle</span>
              <span className="inline-block mr-2">EPM</span>
              <span className="inline-block mr-2">solution</span>
              <span className="relative inline-block">
                <span className="text-heading-4 font-serif italic">
                  <FlipWords words={words} />
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
    <RightSection/>
    </section>
  );
};

export default Hero;
