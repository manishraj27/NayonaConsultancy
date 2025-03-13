import React from "react";
import ServicesSection from "../ui/ServicesSection";
import Heading from "../ui/Heading";

function Service() {
  return (
    <section
      id="service"
      aria-label="service"
      className="rounded-b-3xl overflow-visible lg:px-12 px-4 w-full lg:py-52 py-64 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center"
    >
      <div className="w-full text-left">
        <Heading title="Services We Provide" description="Enterprise Services" />
        <div className="mt-4 w-full md:w-2/3">
          <span className="text-secondary-300 lg:mx-16 lg:w-full text-heading-4 font-grotesk text-pretty block">
          Optimize, Automate, Elevate – Oracle EPM Solutions.
          </span>
        </div>
      </div>
      <div className="pt-16">
        
      <ServicesSection />
      </div>

    </section>
  );
}

export default Service;
