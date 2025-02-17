import Heading from "../ui/Heading";
import { GlobeDemo } from "../ui/GlobeNayona";

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        aria-label="contact"
        className="overflow-hidden lg:px-12 px-6 w-full lg:py-16 py-64 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center"
      >
        {/* Container for Heading and Globe */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
          {/* Left Content - Heading and Text */}
          <div className="text-white w-full md:w-3/4 text-left">
            <Heading title="Reach To Us" description="START CONVERSATION" />
            <div className="mt-4 w-full md:w-2/3">
              <span className="text-white lg:mx-16 lg:w-full text-heading-4 font-grotesk text-pretty block">
                Start a conversation about new business opportunities and get a free consultation.
              </span>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <GlobeDemo />
          </div>
        </div>

        {/* Paragraph Text Below Heading and Globe */}
        <div className="w-full mt-8 text-left lg:pr-40 ">
          <p className="lg:text-heading-3 text-heading-4 font-montserrat text-white">
            Have an inquiry, suggestion, a collaboration offer, or even trouble sleeping?{" "}
            <span className="bg-gradient-to-r from-white via-gray-600 to-white text-transparent bg-clip-text">
              Get in touch
            </span>{" "}
            with us now.
          </p>
        </div>

      </section>
    </>
  );
}

export default Contact;