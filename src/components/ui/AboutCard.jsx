
// 2nd Component

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import shape1 from "../../assets/shapes/deepdown.svg";
import shape2 from "../../assets/shapes/EchoFlash.svg";
import shape3 from "../../assets/shapes/entangled.svg";
import shape4 from "../../assets/shapes/target.svg";


gsap.registerPlugin(ScrollTrigger);


const Card = ({ index, title, description, features, iconSrc }) => {
  return (
    <div className="px-4 lg:px-8 card relative w-full" id={`card-${index}`}>
      <div className="card-inner relative will-change-transform w-full h-full pt-4 gap-8 md:gap-16 items-center border-t border-secondary-500 bg-background-100 ">
        <div className="flex grid-cols-12 items-center justify-start gap-x-space-xs text-left text-accent-200 md:grid md:justify-between md:gap-x-fluid">
          <span className="col-span-2 lg:text-heading-3 text-heading-4  font-open-sans">({index})</span>
          <h3 className="col-span-6 px-4 lg:px-0 col-start-6 py-space-md lg:text-heading-3 text-heading-4 text-accent-300 font-open-sans">
            {title}
          </h3>
          <img
            alt=""
            loading="lazy"
            width={32}
            height={32}
            className="hidden h-6 w-6 justify-self-end opacity-30 sm:h-7 sm:w-7 xl:flex 2xl:h-8 2xl:w-8"
            style={{ color: "transparent" }}
            src={iconSrc}
          />
        </div>

        <div className="grid-gap relative flex min-h-[30vh] lg:py-8 py-20 flex-col place-items-start pt-space-3xs md:grid md:min-h-[40vh] md:grid-cols-12">
          <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-space-sm pt-space-sm text-heading-4">
            <p className="max-w-[40ch] text-body-1 pb-2 font-grotesk text-on-dark opacity-80">
              {description}
            </p>

            <div className="flex flex-col divide-y divide-secondary-500">
              {features.map((feature, idx) => (
                <AboutDescriptionCardFeature
                  key={idx}
                  index={`0${idx + 1}`}
                  text={feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutDescriptionCardFeature = ({ index, text }) => {
  return (
    <span className="flex items-start gap-x-space-sm py-4 text-body-1 text-on-dark xl:gap-x-space-md xl:py-space-2xs">
      <span className="font-mono text-base font-medium leading-[200%] text-accent-300">
        {index}
      </span>
      <span className="opacity-80">{text}</span>
    </span>
  );
};
function AboutCard() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Kill existing triggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Ensure the container is properly sized
    gsap.set(container, { height: "auto" });

    const cardElements = gsap.utils.toArray(".card", container);

    // Main pinning animation for intro
    ScrollTrigger.create({
      trigger: cardElements[0],
      start: "top 35%",
      endTrigger: cardElements[cardElements.length - 1],
      end: "top 30%",
      pin: ".intro",
      pinSpacing: false,
    });

    // Card animations
    cardElements.forEach((card, index) => {
      const isLastCard = index === cardElements.length;
      const cardInner = card.querySelector(".card-inner");
      
      if (!isLastCard) {
        // Pin each card
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: ".outro",
          end: "top 60%",
          pin: true,
          pinSpacing: false,
        });

        // Move card upwards
        gsap.to(cardInner, {
          y: `-${(cardElements.length - index) * 15}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 6%",
            scrub: true,
          },
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array ensures this runs once after initial render


  const cardDetails = [
    {
      index: "01",
      title: "Expert Oracle EPM Solutions",
      description: "Transform your financial planning and analysis with our tailored Oracle Enterprise Performance Management services.",
      features: [
        "Advanced Financial Modeling",
        "Real-time Performance Insights",
        "Strategic Business Intelligence"
      ],
      iconSrc: shape1,
    },
    {
      index: "02",
      title: "Comprehensive EPM",
      description: "Seamless integration of Oracle EPM tools to streamline your financial processes and drive business growth.",
      features: [
        "End-to-End Implementation",
        "Custom Configuration",
        "Continuous Support"
      ],
      iconSrc: shape2
    },
    {
      index: "03",
      title: "Data-Driven Financial",
      description: "Leverage our expertise to translate complex financial data into actionable strategic insights.",
      features: [
        "Predictive Analytics",
        "Budgeting Optimization",
        "Performance Reporting"
      ],
      iconSrc: shape3
    },
    {
      index: "04",
      title: "Proven Track Record",
      description: "Partner with Nayona Consultancy and benefit from our extensive experience in Oracle EPM solutions.",
      features: [
        "Industry Expertise",
        "Customized Solutions",
        "Continuous Innovation"
      ],
      iconSrc: shape4
    }
  ];

  return (
    <div className="w-full mt-10 overflow-hidden bg-background-100" ref={containerRef}>
 <section className="intro w-full min-h-screen lg:px-8 px-4 pb-72 lg:pb-56 lg:pt-24 pt-6">
  <div className="container mx-auto">
    {/* Heading Section */}
    <div className="mb-16">
      <Heading title="Why choose us?" description="About Us"/>
    </div>
    
    {/* Content Section with left blank space */}
    <div className="flex">
      {/* Left blank space - 1/4 width */}
      <div className="lg:w-1/4"></div>
      
      {/* Right content - 3/4 width */}
      <div className="lg:w-3/4">
        <div className="space-y-8 text-on-dark font-grotesk leading-relaxed text-body-1  max-w-3xl">
          <p>
            Nayona Consultancy stands as a premier Oracle Enterprise Performance Management (EPM) consulting firm, dedicated to transforming financial strategies and empowering businesses through innovative technological solutions.
          </p>
          <p>
            At the core of our mission is a commitment to delivering exceptional value to our clients. We specialize in tailoring Oracle EPM solutions that are precisely aligned with each organization's unique business objectives.
          </p>
          <p>
            Our team comprises certified Oracle professionals, financial experts, and technology specialists with an average of 12+ years of experience. We pride ourselves on translating intricate financial data into actionable insights.
          </p>
          <p>
            Throughout our journey, Nayona Consultancy has served over 150 clients across 50+ industries, maintaining an impressive 95% client satisfaction rate. We are strategic partners committed to your financial excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="cards w-full">
        {cardDetails.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </section>
      
      <section className="outro w-full p-24 flex items-center justify-center">
        {/* Outro section left empty as per original component */}
      </section>
    </div>
  );
}

export default AboutCard;

