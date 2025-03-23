import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";

import HorizontalScrollSection from './../magicui/AboutUsServiceSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function AboutUsPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current.querySelectorAll(".animate-in"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Mission animation
    gsap.fromTo(
      missionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  const services = [
    {
      title: "1. Planning & Budgeting",
      description: "Streamline your financial planning processes...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "2. Reporting & Analytics",
      description: "Transform your data into actionable insights...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: "3. Planning & Budgeting",
      description: "Streamline your financial planning processes...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "4. Planning & Budgeting",
      description: "Streamline your financial planning processes...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "5. Planning & Budgeting",
      description: "Streamline your financial planning processes...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "6. Planning & Budgeting",
      description: "Streamline your financial planning processes...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
    },
  ];



  return (
    <section
      id="about-us"
      aria-label="about-us"
      className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100 flex flex-col items-center justify-start relative"
    >
      {/* Hero Section */}
      <div ref={heroRef} className="w-full lg:px-8 px-4 max-w-7xl mx-auto py-32 lg:py-32 relative z-10">
        <Heading
          title="Building Excellence in Oracle EPM"
          description="About Nayona Consultancy"
        />
        <div className="mt-12 lg:mt-20 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-heading-3 font-grotesk text-on-dark mb-6 animate-in">
              Your Trusted Partner in <span className="text-primary-300">Oracle EPM</span> Solutions
            </h3>
            <p className="text-body-1 font-open-sans text-secondary-300 mb-8 animate-in">
              Nayona Consultancy delivers exceptional Oracle Enterprise Performance Management solutions, empowering businesses to transform data into strategic insights and achieve operational excellence.
            </p>
            <div className="flex flex-wrap gap-4 animate-in">
              <Button text="Our Services" theme="dark" />
            </div>
          </div>
          <div className="flex items-center justify-center animate-in">
            <div className="w-full h-96 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-300 to-accent-400 rounded-xl opacity-20 blur-xl transform -rotate-6"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-primary-400 to-secondary-600 rounded-xl opacity-40 shadow-xl transform rotate-3"></div>
              <div className="relative w-full h-full bg-secondary-700 rounded-xl overflow-hidden shadow-2xl border border-secondary-500">
                <img src="/api/placeholder/600/500" alt="Nayona Consultancy Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Services Section - Horizontal Scroll */}
      <HorizontalScrollSection
        title="Custom Services"
        description="Tailored Oracle EPM Solutions"
        cards={services}
      />


      <div className="w-full py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-heading-3 font-grotesk text-on-dark mb-6">
            Ready to Transform Your Financial Processes?
          </h2>
          <p className="text-body-1 font-open-sans text-secondary-100 mb-10 max-w-2xl mx-auto">
            Partner with Nayona Consultancy to unlock the full potential of Oracle EPM and drive your business forward with data-driven insights.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button text="Schedule a Consultation" theme="dark" />
            <Button text="View Case Studies" theme="light" />
          </div>
        </div>
      </div> 
    </section>
  );
}

export default AboutUsPage;

      {/* Mission & Values Section */}
      
      {/* Call to Action Section */}
