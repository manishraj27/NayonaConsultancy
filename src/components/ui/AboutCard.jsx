
// 2nd Component

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";

// Ensure plugins are registered only once
if (!gsap.plugins.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// const Card = ({ index, title, description, features, iconSrc}) => {
//   return (
//     <div className="lg:px-8 px-4 card relative w-full" id={`card-${index}`}>
//       {/* <div className={`card-inner relative will-change-transform w-full h-full p-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center border-secondary-500 border-t bg-background-100 rounded-t-[40px]`}/> */}

//       <div className="card-inner  top-0   border-t-secondary-300 relative will-change-transform w-full h-full pt-4  gap-8 md:gap-16 items-center border-secondary-500 border-t bg-background-100 rounded-t-[40px]`}" 
       
//       >
//         <div className="flex grid-cols-12 items-center justify-start gap-x-space-xs text-left text-heading-4 font-semibold text-accent-400 md:grid md:justify-between md:gap-x-fluid">
//           <span className="col-span-2">({index})</span>
//           <h3 className="col-span-6 px-4 lg:px-0 col-start-6 py-space-md text-heading-3 ">{title}</h3>
//           <img 
//             alt="" 
//             loading="lazy" 
//             width={32} 
//             height={32} 
//             className="hidden h-6 w-6 justify-self-end opacity-30 sm:h-7 sm:w-7 xl:flex 2xl:h-8 2xl:w-8" 
//             style={{ color: "transparent" }} 
//             src={iconSrc} 
//           />
//         </div>
        
//         <div className="grid-gap relative flex min-h-[30vh] py-8 flex-col place-items-start pt-space-3xs md:grid md:min-h-[40vh] md:grid-cols-12">
//           <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-space-sm pt-space-sm text-heading-4">
//             <p className="max-w-[40ch] text-body-1 pb-2 font-medium text-on-dark">
//               {description}
//             </p>
            
//             <div className="flex flex-col divide-y divide-secondary-200">
//               {features.map((feature, idx) => (
//                 <AboutDescriptionCardFeature 
//                   key={idx} 
//                   index={`0${idx + 1}`} 
//                   text={feature} 
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AboutDescriptionCardFeature = ({ index, text }) => {
//   return (
//     <span className="flex items-start gap-x-space-sm py-2 text-body-1 text-on-dark xl:gap-x-space-md xl:py-space-2xs">
//       <span className="font-mono text-base font-medium leading-[200%] text-on-dark">
//         {index}
//       </span>
      
//       {text}
//     </span>
//   );
// };




const Card = ({ index, title, description, features, iconSrc }) => {
  return (
    <div className="px-4 lg:px-8 card relative w-full" id={`card-${index}`}>
      <div className="card-inner relative will-change-transform w-full h-full pt-4 gap-8 md:gap-16 items-center border-t border-secondary-500 bg-background-100 ">
        <div className="flex grid-cols-12 items-center justify-start gap-x-space-xs text-left text-accent-400 md:grid md:justify-between md:gap-x-fluid">
          <span className="col-span-2 lg:text-heading-3 text-heading-4  font-open-sans">({index})</span>
          <h3 className="col-span-6 px-4 lg:px-0 col-start-6 py-space-md lg:text-heading-3 text-heading-4 text-accent-400 font-open-sans">
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

        <div className="grid-gap relative flex min-h-[30vh] py-8 flex-col place-items-start pt-space-3xs md:grid md:min-h-[40vh] md:grid-cols-12">
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

    // Kill any existing ScrollTrigger instances to prevent conflicts
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
      iconSrc: "//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
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
      iconSrc: "//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
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
      iconSrc: "//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
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
      iconSrc: "//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
    }
  ];

  return (
    <div className="w-full mt-10 overflow-hidden bg-background-100" ref={containerRef}>
      <section className="intro w-full min-h-screen p-8 bg-background-100 flex">
       <Heading title="Why choose us?" description="About Us"/>
        {/*  */}

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


// 1st Component
// import React, { useRef, useEffect } from "react";
// import card1 from "../../assets/images/cards/card-1.webp";
// import card2 from "../../assets/images/cards/card-2.webp";
// import card3 from "../../assets/images/cards/card-3.webp";
// import card4 from "../../assets/images/cards/card-4.webp";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Heading from "./Heading";
// import Page2 from "./Page2";

// // Ensure plugins are registered only once
// if (!gsap.plugins.ScrollTrigger) {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Card = ({ title, copy, index }) => {
//   const images = [card1, card2, card3, card4];


//   return (
//     <div className="card relative w-full" id={`card-${index + 1}`}>
//       <div className={`card-inner relative will-change-transform w-full h-full p-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center border-secondary-500 border-t bg-background-100 rounded-t-[40px]`}>
//         <div className="flex-[3] w-full">
//           <h1 className="text-4xl md:text-6xl font-semibold text-on-dark leading-none mb-6 md:mb-10">{title}</h1>
//           <p className="text-xl md:text-2xl text-on-dark font-medium">{copy}</p>
//         </div>
//         <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
//           <img src={images[index]} alt={title} className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// function AboutCard() {
//   const cards = [
//     {
//       title: "About Us",
//       copy: "Nayona Consultancy is a leading provider of IT services and solutions. We are a team of professionals who are passionate about what we do.",
//     },
//     {
//       title: "Our Mission",
//       copy: "Our mission is to provide the best IT services and solutions to our clients. We are committed to delivering high-quality services that meet their needs.",
//     },
//     {
//       title: "Our Vision",
//       copy: "Our vision is to be the leading provider of IT services and solutions worldwide. We strive to deliver innovative solutions to help our clients achieve their goals.",
//     },
//     {
//       title: "Our Values",
//       copy: "Our values are the foundation of our company. We believe in honesty, integrity, and transparency in delivering the best services to our clients.",
//     },
//   ];

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Kill any existing ScrollTrigger instances to prevent conflicts
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Ensure the container is properly sized
//     gsap.set(container, { height: "auto" });

//     const cardElements = gsap.utils.toArray(".card", container);

//     // Main pinning animation for intro
//     ScrollTrigger.create({
//       trigger: cardElements[0],
//       start: "top 35%",
//       endTrigger: cardElements[cardElements.length - 1],
//       end: "top 30%",
//       pin: ".intro",
//       pinSpacing: false,
//     });

//     // Card animations
//     cardElements.forEach((card, index) => {
//       const isLastCard = index === cardElements.length - 1;
//       const cardInner = card.querySelector(".card-inner");
      
//       if (!isLastCard) {
//         // Pin each card
//         ScrollTrigger.create({
//           trigger: card,
//           start: "top 35%",
//           endTrigger: ".outro",
//           end: "top 60%",
//           pin: true,
//           pinSpacing: false,
//         });

//         // Move card upwards
//         gsap.to(cardInner, {
//           y: `-${(cardElements.length - index) * 14}vh`,
//           ease: "none",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 35%",
//             endTrigger: ".outro",
//             end: "top 65%",
//             scrub: true,
//           },
//         });
//       }
//     });

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []); // Empty dependency array ensures this runs once after initial render

//   return (
//     <div className="w-full mt-10 overflow-hidden bg-background-100" ref={containerRef}>
//       <section className="intro w-full min-h-screen p-8 bg-background-100 flex">
//        <Heading title="Why choose us?" description="About Us"/>
      
//       </section>
      
//       <section className="cards w-full">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} index={index} />
//         ))}
//       </section>
      
//       <section className="outro w-full p-8 flex items-center justify-center">
//         {/* <p className="text-on-dark">
//           This is the outro section. Scroll back up to see the intro section.
//           nayona consultancy
//         </p> */}
//       </section>
//     </div>
//   );
// }

// export default AboutCard;


// import React, { useRef, useEffect } from "react";
// import card1 from "../../assets/images/cards/card-1.webp";
// import card2 from "../../assets/images/cards/card-2.webp";
// import card3 from "../../assets/images/cards/card-3.webp";
// import card4 from "../../assets/images/cards/card-4.webp";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Heading from "./Heading";
// import Page2 from "./Page2";

// // Ensure plugins are registered only once
// if (!gsap.plugins.ScrollTrigger) {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Card = ({ title, copy, details, keyPoints, index }) => {
//   const images = [card1, card2, card3, card4];

//   return (
//     <div className="card relative w-full" id={`card-${index + 1}`}>
//       <div className={`card-inner relative will-change-transform w-full h-full p-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center border-secondary-500 border-t bg-background-100 rounded-t-[40px]`}>
//         <div className="flex-[3] w-full">
//           <h1 className="text-4xl md:text-6xl font-semibold text-on-dark leading-none mb-6 md:mb-10">{title}</h1>
//           <p className="text-xl md:text-2xl text-on-dark font-medium mb-6">{copy}</p>
          
//           {/* Additional Details Section */}
//           <div className="bg-gray-50 p-6 rounded-xl">
//             <h3 className="text-2xl font-semibold text-on-dark mb-4">Key Highlights:</h3>
//             <ul className="space-y-3">
//               {keyPoints.map((point, idx) => (
//                 <li key={idx} className="flex items-start space-x-3">
//                   <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-lg text-on-dark">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Additional Details Description */}
//           {details && (
//             <div className="mt-6 bg-blue-50 p-6 rounded-xl">
//               <h3 className="text-2xl font-semibold text-on-dark mb-4">What This Means for You:</h3>
//               <p className="text-lg text-on-dark">{details}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
//           <img src={images[index]} alt={title} className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// function AboutCard() {
//   const cards = [
//     {
//       title: "Oracle EPM Expertise",
//       copy: "Specialized Oracle Enterprise Performance Management Solutions Tailored to Your Business",
//       keyPoints: [
//         "10+ Years of Dedicated Oracle EPM Experience",
//         "Certified Oracle Implementation Partners",
//         "Advanced Financial Planning & Analysis Capabilities"
//       ],
//       details: "Our deep expertise ensures that you receive cutting-edge EPM solutions that transform your financial management, providing actionable insights and strategic decision-making tools."
//     },
//     {
//       title: "Customized Implementation",
//       copy: "Precision-Engineered EPM Strategies for Unique Business Needs",
//       keyPoints: [
//         "Comprehensive Needs Assessment",
//         "Personalized Solution Architecture",
//         "Seamless Integration with Existing Systems"
//       ],
//       details: "We don't believe in off-the-shelf solutions. Our approach involves a thorough understanding of your business ecosystem, creating EPM strategies that fit like a glove and drive meaningful performance improvements."
//     },
//     {
//       title: "Industry-Leading Results",
//       copy: "Proven Track Record of Transforming Financial Performance",
//       keyPoints: [
//         "50+ Successful Enterprise Implementations",
//         "Clients Across Multiple Industries",
//         "Measurable ROI Guaranteed"
//       ],
//       details: "Our portfolio speaks volumes. We've helped businesses across sectors optimize their financial processes, reduce reporting time, and gain unprecedented visibility into their financial performance."
//     },
//     {
//       title: "Comprehensive Support Ecosystem",
//       copy: "End-to-End Oracle EPM Services Beyond Implementation",
//       keyPoints: [
//         "24/7 Technical Support",
//         "Continuous System Optimization",
//         "Training & Knowledge Transfer"
//       ],
//       details: "Our relationship doesn't end with implementation. We provide ongoing support, regular system health checks, and continuous training to ensure your EPM solution evolves with your business."
//     }
//   ];

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.set(container, { height: "auto" });

//     const cardElements = gsap.utils.toArray(".card", container);

//     ScrollTrigger.create({
//       trigger: cardElements[0],
//       start: "top 35%",
//       endTrigger: cardElements[cardElements.length - 1],
//       end: "top 30%",
//       pin: ".intro",
//       pinSpacing: false,
//     });

//     cardElements.forEach((card, index) => {
//       const isLastCard = index === cardElements.length - 1;
//       const cardInner = card.querySelector(".card-inner");
      
//       if (!isLastCard) {
//         ScrollTrigger.create({
//           trigger: card,
//           start: "top 35%",
//           endTrigger: ".outro",
//           end: "top 60%",
//           pin: true,
//           pinSpacing: false,
//         });

//         gsap.to(cardInner, {
//           y: `-${(cardElements.length - index) * 14}vh`,
//           ease: "none",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 35%",
//             endTrigger: ".outro",
//             end: "top 65%",
//             scrub: true,
//           },
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="w-full mt-10 overflow-hidden bg-background-100" ref={containerRef}>
//       <section className="intro w-full min-h-screen p-8 bg-background-100 flex">
//        <Heading 
//          title="Why Nayona Consultancy Leads in Oracle EPM" 
//          description="Transforming Financial Performance Through Expert Solutions"
//        />
//       </section>
      
//       <section className="cards w-full">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} index={index} />
//         ))}
//       </section>
      
//       <section className="outro w-full p-8 flex items-center justify-center">
//         {/* Outro section left empty as per original component */}
//       </section>
//     </div>
//   );
// }

// export default AboutCard;