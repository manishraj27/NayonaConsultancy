import testimonials from "../../lib/testimonials";
import { AnimatedTestimonials } from "./animated-testimonials";
import Heading from "./Heading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative flex flex-col lg:grid min-h-screen lg:grid-cols-2 lg:items-center lg:px-12 px-4 w-full py-24 overflow-hidden gap-12 lg:gap-4"
    >
      {/* Left Side: Heading and Description */}
      <div className=" text-left">
        <Heading title="Client Stories" description="Testimonials" />
        <div className="mt-6">
          <p className="text-body-1 font-grotesk text-secondary-300 text-pretty">
            Discover the impact we've made through the eyes of those who've experienced our exceptional service and transformative solutions.
          </p>
        </div>
      </div>

      {/* Right Side: Testimonial Slider */}
      <AnimatedTestimonials 
        testimonials={testimonials} 
        autoplay={false} 
      
      />
    </section>
  );
}