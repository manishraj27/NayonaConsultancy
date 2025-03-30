// "use client";
// import React from "react";
// import { StickyScroll } from "./sticky-scroll-reveal";
// import { Image } from "./Image";
// import financialModeling from "../../assets/images/ABOUTUSMEETING.webp";
// import realTimeAnalytics from "../../assets/images/ABOUTUSMEETING.webp";
// import profitOptimization from "../../assets/images/ABOUTUSMEETING.webp"
// import Button from "../ui/Button";

// const content = [
//   {
//     title: "Intelligent Planning Architectures",
//     description:
//       "We design Oracle EPM solutions that think beyond spreadsheets. Our adaptive planning models incorporate AI-driven forecasting, multi-scenario analysis, and real-time collaboration - transforming how your finance team operates.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <Image
//           src={financialModeling}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="AI-powered financial modeling"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Live Enterprise Analytics",
//     description:
//       "See your financial ecosystem in motion. Our implementations surface real-time KPIs across planning, consolidation, and profitability - with automated variance alerts and predictive insights built into every dashboard.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <Image
//           src={realTimeAnalytics}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="Real-time financial analytics"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Profitability Engineered",
//     description:
//       "We build EPM systems that do more than report numbers. Our cost allocation frameworks and driver-based models reveal hidden profit opportunities and simulate operational impacts before you commit.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <Image
//           src={profitOptimization}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="Profit optimization modeling"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Future-Ready Controls",
//     description:
//       "Compliance becomes competitive advantage. Our configurable controls framework auto-adapts to new regulations while maintaining audit trails across all EPM processes - from consolidations to disclosures.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-secondary-600 text-white p-6">
//         <div className="text-center">
//           <h3 className="text-heading-4 mb-4">Control Features:</h3>
//           <ul className="text-body-2 space-y-2">
//             <li>• Auto-updating regulatory rulebooks</li>
//             <li>• Blockchain-verified audit trails</li>
//             <li>• AI-assisted anomaly detection</li>
//           </ul>
//         </div>
//       </div>
//     ),
//   }
// ];

// export function ExperienceEPMReimagined() {
//   return (
//     <section id="epm-reimagined" className="w-full py-16 bg-background-100">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 px-4 lg:px-8">
//           <h2 className="text-heading-1 text-on-dark font-grotesk mb-4">
//             Experience EPM Reimagined
//           </h2>
//           <p className="text-body-1 text-on-dark/80 max-w-3xl mx-auto">
//             Discover how Nayona's innovative approach to Oracle EPM delivers more
//             than systems - we build financial intelligence platforms that evolve
//             with your business.
//           </p>
//         </div>
//         <StickyScroll content={content} />
//         <div className="text-center mt-16">
//          <Button text={"Shedule Your Demo"} theme="dark" />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import { Image } from "./Image";
import scenarioModeling from "../../assets/scroll-images/businessAnalyticStrategy.webp";
import consolidationFlow from "../../assets/scroll-images/consolidationFlow.webp";
import taxAutomation from "../../assets/scroll-images/tax.webp";
import { motion } from 'framer-motion';

import { useEffect, useRef } from 'react';
import {useAnimation } from 'framer-motion';

// This component will be used in the 4th content item
const InfiniteVerticalScroll = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  // List of items that will infinitely scroll
  const items = [
    "Predictive cash flow modeling",
    "Self-service regulatory updates", 
    "Embedded process automation",
    "AI-driven financial forecasting",
    "Cross-system data integration",
    "On-demand compliance reporting"
  ];
  
  // Duplicate items to create seamless loop effect
  const allItems = [...items, ...items];
  
  useEffect(() => {
    const startAnimation = async () => {
      // Get container height for animation calculations
      const containerHeight = containerRef.current?.clientHeight || 300;
      const contentHeight = (containerHeight / items.length) * items.length;
      
      // Initial pause
      await controls.start({ y: 0, transition: { duration: 0 } });
      
      // Start infinite loop animation
      while (true) {
        await controls.start({
          y: -contentHeight,
          transition: {
            duration: 8, // Adjust speed of scroll here
            ease: "linear"
          }
        });
        // Reset position without animation to create seamless loop
        await controls.start({ y: 0, transition: { duration: 0 } });
      }
    };
    
    startAnimation();
  }, [controls]);
  
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-accent-400 to-accent-600 px-4 ">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      
      {/* Glow effects */}
      <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent"></div>
      <div className="absolute top-1/4 -right-10 w-20 h-20 rounded-full bg-accent-300/30 blur-xl"></div>
      <div className="absolute bottom-1/3 -left-8 w-16 h-16 rounded-full bg-white/20 blur-lg"></div>
      
      {/* Scrolling content container */}
      <div ref={containerRef} className="relative z-10 h-full overflow-hidden">
        <motion.ul 
          animate={controls}
          className="space-y-6 text-body-1 w-full max-w-md mx-auto"
        >
          {allItems.map((item, index) => (
            <li 
              key={index}
              className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-accent-300 transition-all duration-300 hover:shadow-lg hover:shadow-accent-400/20"
            >
              <span className="flex-shrink-0 bg-white text-accent-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold shadow-sm">
                ✓
              </span>
              <span className="text-white/90 hover:text-white font-grotesk-medium transition-colors duration-300">
                {item}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-auto h-5 w-5 text-white/40 group-hover:text-accent-300 transition-colors duration-300"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};


const content = [
  {
    title: "(01) Smarter Scenario Planning",
    description:
      "Watch how our EPM solutions enable dynamic what-if analysis with live data feeds. Adjust market assumptions, cost variables, or growth targets and see impacts across your financial statements in real-time.",
    content: (
      <div className="relative w-full h-full overflow-hidden   transition-all duration-300 group">
      {/* Image with zoom effect */}
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={scenarioModeling}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Interactive scenario modeling"
        />
      </div>
      
      {/* Blue gradient overlay (appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/70 via-primary-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
         
          {/* Title text */}
          <h3 className="text-heading-4 text-light-100 font-open-sans mb-2">
            Interactive Scenario Modeling
          </h3>
          
          {/* Hover-only description */}
          <p className="text-light-100/80 text-body-2 font-grotesk opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-2">
            Adjust market assumptions and see financial impacts in real-time
          </p>
          
        
        </div>
      </div>
    </div>
    ),
  },
  {
    title: "(02) Error-Proof Consolidations",
    description:
      "See our automated data validation in action. The system flags inconsistencies before close, suggests intercompany matchings, and maintains full audit trails - cutting your month-end process by up to 65%.",
    content: (
      <div className="relative w-full h-full overflow-hidden  transition-all duration-300 group">
      {/* Image with zoom effect */}
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={consolidationFlow}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Interactive scenario modeling"
        />
      </div>
      
      {/* Blue gradient overlay (appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/70 via-primary-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
         
          {/* Title text */}
          <h3 className="text-heading-4 text-light-100 font-open-sans mb-2">
            Error-Proof Consolidations
          </h3>
          
          {/* Hover-only description */}
          <p className="text-light-100/80 text-body-2 font-grotesk opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-2">
            Automated data validation and intercompany matching
          </p>
          
        
        </div>
      </div>
    </div>
    ),
  },
  {
    title: "(03) Intelligent Tax Provisioning",
    description:
      "Our systems auto-calculate tax positions across jurisdictions while maintaining compliance with latest regulations. Watch how adjustments flow through from trial balance to tax filings seamlessly.",
    content: (
      <div className="relative w-full h-full overflow-hidden  transition-all duration-300 group">
      {/* Image with zoom effect */}
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={taxAutomation}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Interactive scenario modeling"
        />
      </div>
      
      {/* Blue gradient overlay (appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/70 via-primary-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
         
          {/* Title text */}
          <h3 className="text-heading-4 text-light-100 font-open-sans mb-2">
            Intelligent Tax Provisioning
          </h3>
          
          {/* Hover-only description */}
          <p className="text-light-100/80 text-body-2 font-grotesk opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-2">
            Automated tax calculations and compliance monitoring
          </p>

        </div>
      </div>
    </div>
    ),
  },
  {
    title: "(04) Your Competitive Edge",
    description:
      "This is where standard EPM stops and Nayona begins. Our proprietary frameworks add:",
    content: (
      <InfiniteVerticalScroll />

    ),
  },
];

export function SeeTheEPMDifference() {
  return (
    <section className="w-full py-20 bg-background-100">
      <div className="container mx-auto">
        <div className="text-center mb-6 px-4 lg:px-8">
          <p className="rounded-full bg-transparent border border-primary-200 flex justify-center items-center px-4 py-1 text-primary-200 text-body-4 2xl:text-3xl mx-auto w-fit mb-4">
            BEYOND STANDARD EPM
          </p>

          {/* <span className="inline-block bg-primary-400 text-white px-4 py-1 rounded-full text-body-2 font-grotesk mb-4">
            BEYOND STANDARD EPM
          </span> */}
          <h2 className="text-heading-2 text-on-dark font-grotesk mb-4">
            See the EPM Difference
          </h2>
          <p className="text-body-1 text-on-dark/70 max-w-3xl mx-auto">
          Demonstration of how Nayona's approach delivers more
            value than out-of-the-box solutions
          </p>
        </div>

        <StickyScroll content={content} />
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
      <div className="relative overflow-hidden bg-secondary-700/40 p-8 rounded-xl backdrop-blur-md border border-secondary-600/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary-300/30 group">
        {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-300/20 rounded-full blur-xl"></div> */}
        <p className="rounded-full bg-transparent border border-primary-200 flex justify-center items-center px-4 py-1 text-primary-200 text-body-4 mx-auto w-fit mb-6">
          EFFICIENCY
        </p>
        <h3 className="text-heading-4 font-grotesk text-primary-300 mb-3 text-center group-hover:scale-110 transition-transform duration-300">35-65%</h3>
        <p className="text-body-2 text-on-dark text-center font-open-sans">
          Faster financial processes in client implementations
        </p>
      </div>
      
      <div className="relative overflow-hidden bg-secondary-700/40 p-8 rounded-xl backdrop-blur-md border border-secondary-600/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary-300/30 group">
        {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-300/20 rounded-full blur-xl"></div> */}
        <p className="rounded-full bg-transparent border border-primary-200 flex justify-center items-center px-4 py-1 text-primary-200 text-body-4 mx-auto w-fit mb-6">
          MONITORING
        </p>
        <h3 className="text-heading-4 font-grotesk text-primary-300 mb-3 text-center group-hover:scale-110 transition-transform duration-300">24/7</h3>
        <p className="text-body-2 text-on-dark text-center font-open-sans">
          Compliance monitoring with automated alerts
        </p>
      </div>
      
      <div className="relative overflow-hidden bg-secondary-700/40 p-8 rounded-xl backdrop-blur-md border border-secondary-600/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary-300/30 group">
        {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-300/20 rounded-full blur-xl"></div> */}
        <p className="rounded-full bg-transparent border border-primary-200 flex justify-center items-center px-4 py-1 text-primary-200 text-body-4 mx-auto w-fit mb-6">
          COMPLIANCE
        </p>
        <h3 className="text-heading-4 font-grotesk text-primary-300 mb-3 text-center group-hover:scale-110 transition-transform duration-300">100%</h3>
        <p className="text-body-2 text-on-dark text-center font-open-sans">
          Audit-ready documentation automatically maintained
        </p>
      </div>
    </div>
      </div>
    </section>
  );
}
