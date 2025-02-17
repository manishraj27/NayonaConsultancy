import Heading from "../ui/Heading";
import { GlobeDemo } from "../ui/GlobeNayona";

function Contact() {
  return (
    <section
      id="contact"
      aria-label="contact"
      className="overflow-hidden lg:px-12 px-4 w-full py-24 h-screen lg:h-screen dark-section bg-background-100 flex items-center justify-between"
    >
      {/* Left Content - Heading and Text */}
      <div className="text-white w-3/4">
        <Heading title="Reach To Us" description="START CONVERSTION" />
        <div className="mt-4 w-2/3">
          <span className="text-white text-heading-4 font-grotesk text-pretty block">
            Start a conversation about new business opportunities and get a free consultation.
          </span>
        </div>
      </div>

      {/* Right Content - Globe */}
      <div className="w-1/4 flex justify-end">
        <GlobeDemo />
      </div>


    </section>
  );
}

export default Contact;
