import { useMemo } from "react";
import HeroButton from "../ui/HeroButton";
import "./gradient.css";
import PencilStroke from "./../../assets/icons/PencilStroke";
import RightSection from "../ui/RightSection";
import { FlipWords } from "../magicui/flip-words";
// eslint-disable-next-line no-unused-vars
import nayonalogo from "../../assets/icons/NayonaLogoFull.svg";
import HeroRightSection from "./HeroRightSection";

const Hero = () => {
  const words = useMemo(
    () => [
      "smarter",   // More intelligent or efficient
      "faster",    // More quickly
      "better",    // Improved quality
    ],
    []
  );

  const renderTextWithFlipWords = () => (
    <span className="relative block">
      {["We", "help", "companies", "transform", "their", "Oracle", "EPM"].map(
        (word, index) => (
        <span key={index} className="inline-block mr-2 text-on-light">
          {word}
        </span>
      ))}
      <span className="relative inline-block">
        <span className="font-serif italic text-primary-400">
          {/* <FlipWords words={words} /> */}
          solutions
        </span>
        <PencilStroke />
      </span>
      .
    </span>
  );

  return (
    <section
      id="hero"
      className="relative flex w-full min-h-screen items-center justify-between lg:px-12 px-4 bg-light-200"
      aria-label="hero"
    >
      {/* Left Content */}
      <div className="max-w-xl lg:pr-8 select-none text-left lg:text-start">
        <div className="my-auto lg:pr-[60px]">
          <h2 className="text-heading-4 lg:text-heading-3 pt-10 mt-2 font-open-sans font-light leading-normal text-on-light">
            {renderTextWithFlipWords()}
          </h2>

          <div className="pt-8">
            <p className="text-body-3 justify-start items-start font-grotesk max-w-2xl text-on-light">
              Nayona Consultancy is a leading provider of Oracle EPM services,
              helping companies streamline their financial and operational
              processes. Our team of experts deliver tailored solutions to
              optimize your Oracle investment.
            </p>
          </div>
          <div className="pt-4">
            <HeroButton />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <RightSection />
      {/* <HeroRightSection /> */}
    </section>
  );
};

export default Hero;