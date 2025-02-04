import HeroButton from '../ui/HeroButton';
import PencilStroke from './../../assets/icons/PencilStroke';
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex w-full h-screen items-center justify-between px-16"
      aria-label="hero"
    >
      {/* Left Content */}
      <div className="max-w-xl text-left lg:text-left">
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
              <span className="inline-block text-heading-3 font-serif italic">solutions</span>
              <PencilStroke />
            </span>
          </h2>

          <div className="pt-4">
            <p className="text-body-3 justify-start items-start font-grotesk max-w-2xl">
              Nayona Consultancy is a leading provider of Oracle EPM services, helping companies streamline their financial and operational processes. Our team of experts deliver tailored solutions to optimize your Oracle investment.
            </p>
          </div>
          <div className='pt-2'>
            <HeroButton />
          </div>
        </div>
      </div>

      {/* Right Gradient Box */}
      {/* to be implemented later */}
      <div className="absolute right-2 top-2 w-[48%] h-[97%] rounded-3xl flex flex-col items-center justify-center text-white p-10 shadow-2xl">
      </div>
    </section>
  );
};

export default Hero;
