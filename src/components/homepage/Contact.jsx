import Heading from "../ui/Heading";
import { GlobeDemo } from "../ui/GlobeNayona";

function Contact() {
  return (
    <section
      id="contact"
      aria-label="contact"
      className="overflow-hidden lg:px-12 px-6 w-full py-16 min-h-screen dark-section bg-background-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
    >
      {/* Left Content - Heading and Text */}
      <div className="text-white py-24 w-full text-left md:w-3/4  md:text-left">
        <Heading title="Reach To Us" description="START CONVERSATION" />
        <div className="mt-4 w-full md:w-2/3 mx-auto md:mx-0">
          <span className="text-white text-heading-4 mx-16 w-full font-grotesk text-pretty block">
            Start a conversation about new business opportunities and get a free consultation.
          </span>
        </div>
      </div>

      {/* Right Content - Globe */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <GlobeDemo />
      </div>
    </section>
  );
}

export default Contact;
