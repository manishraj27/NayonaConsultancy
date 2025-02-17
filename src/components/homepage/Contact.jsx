
import Heading from "../ui/Heading";
import { GlobeDemo } from "../ui/GlobeNayona";

function Contact() {
  return (
    <section
      id="contact"
      aria-label="contact"
      className="overflow-hidden lg:px-12 px-4 w-full py-24 lg:24 h-screen dark-section bg-background-100"
    >
      <div className="my-[25%] md:my-[9%] overflow-hidden text-white ">
        <Heading title="Reach To Us" description="START CONVERSTION" />
        <div className="mt-4 w-1/3 mx-64"> {/* Centers and limits width */}
          <span className="text-white text-heading-4 font-grotesk text-pretty block">
            Start a conversation about new business opportunities and get a free consultation.
          </span>
        </div>
      </div>

      <GlobeDemo />
    </section>
  );
}

export default Contact;
