import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import aboutuspic from "../../assets/images/AboutUs.webp"
import CalComIntegration from "../ui/CalComIntegration";
import { useNavigate } from "react-router-dom";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function AboutUsPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const navigate = useNavigate();
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




  return (
    <section
      id="about-us"
      aria-label="about-us"
      className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100 flex flex-col items-center justify-start relative"
    >
      {/* Hero Section */}
      <div ref={heroRef} className="w-full lg:px-8 px-4 max-w-7xl mx-auto py-32 lg:py-32 relative z-10">
        <Heading
          title="Excellence in Oracle EPM Solutions"
          description="About Nayona Consultancy"
        />
        <div className="mt-12 lg:mt-20 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-heading-3 font-grotesk text-on-dark mb-6 animate-in">
              Your Strategic Partner in <span className="text-primary-300">Enterprise Performance Management</span>
            </h3>
            <p className="text-body-1 font-open-sans text-secondary-300 mb-8 animate-in">
              Since our inception, Nayona Consultancy has been at the forefront of Oracle EPM solutions, delivering transformative implementations that drive business excellence. With over a decade of combined expertise, our team of certified consultants has successfully delivered 100+ projects across diverse industries.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 animate-in">
              <div className="border border-secondary-500 rounded-lg p-4">
                <h4 className="text-primary-300 text-heading-5 font-grotesk mb-2">100+</h4>
                <p className="text-secondary-300 text-body-3">Projects Delivered</p>
              </div>
              <div className="border border-secondary-500 rounded-lg p-4">
                <h4 className="text-primary-300 text-heading-5 font-grotesk mb-2">98%</h4>
                <p className="text-secondary-300 text-body-3">Client Satisfaction</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 animate-in">
              <Button text="Our Services" theme="dark" />
              <CalComIntegration theme="dark"/>
            </div>
          </div>
          <div className="flex items-center justify-center animate-in">
            <div className="w-full h-96 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-300 to-accent-400 rounded-xl opacity-20 blur-xl transform -rotate-6"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-primary-400 to-secondary-600 rounded-xl opacity-40 shadow-xl transform rotate-3"></div>
              <div className="relative w-full h-full bg-secondary-700 rounded-xl overflow-hidden shadow-2xl border border-secondary-500">
                <img src={aboutuspic} alt="Nayona Consultancy Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div ref={missionRef} className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-heading-3 font-grotesk text-on-dark mb-8">Our Mission</h3>
              <p className="text-body-1 text-secondary-300 mb-6">
                To empower organizations with cutting-edge Oracle EPM solutions that drive financial excellence, operational efficiency, and data-driven decision-making. We are committed to delivering innovative, scalable, and sustainable solutions that create lasting value for our clients.
              </p>
              <ul className="space-y-4">
                {[
                  "Industry-leading Oracle EPM expertise with certified professionals",
                  "Proven implementation methodology with 98% success rate",
                  "24/7 dedicated support and comprehensive training programs",
                  "Customized solution development tailored to your business needs",
                  "Data security and compliance with industry standards",
                  "Continuous innovation and technology advancement"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-secondary-300">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Values Section */}
            <div>
              <h3 className="text-heading-3 font-grotesk text-on-dark mb-8">Our Core Values</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Technical Excellence",
                    description: "We maintain the highest standards in Oracle EPM implementation, ensuring robust, scalable, and efficient solutions that exceed industry benchmarks."
                  },
                  {
                    title: "Innovation & Adaptability",
                    description: "Continuously evolving with technology trends, we integrate cutting-edge methodologies and tools to deliver future-ready solutions."
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Your success is our priority. We work closely with stakeholders to understand unique challenges and deliver tailored solutions that drive real business value."
                  },
                  {
                    title: "Transparency & Integrity",
                    description: "Building lasting relationships through honest communication, ethical practices, and complete transparency in our processes and deliverables."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-background-100/50 p-6 rounded-xl">
                    <h4 className="text-heading-4 font-grotesk text-primary-300 mb-2">{value.title}</h4>
                    <p className="text-secondary-300 text-body-2">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add new Industry Focus Section after Mission & Values */}
      <div className="w-full py-24 bg-background-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h3 className="text-heading-3 font-grotesk text-on-dark mb-12 text-center">Industry Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Banking & Financial Services",
                description: "Streamlining financial consolidation, planning, and reporting for leading financial institutions.",
                features: ["Regulatory Compliance", "Risk Management", "Financial Analytics"]
              },
              {
                title: "Manufacturing & Supply Chain",
                description: "Optimizing cost management and operational planning across complex supply chains.",
                features: ["Cost Allocation", "Inventory Planning", "Production Analytics"]
              },
              {
                title: "Healthcare & Pharmaceuticals",
                description: "Enhancing financial visibility and operational efficiency in healthcare organizations.",
                features: ["Cost Management", "Resource Planning", "Compliance Reporting"]
              },
              {
                title: "Retail & E-commerce",
                description: "Driving better business decisions through integrated planning and analytics.",
                features: ["Merchandise Planning", "Sales Forecasting", "Inventory Optimization"]
              },
              {
                title: "Technology & Software",
                description: "Supporting rapid growth with scalable financial planning solutions.",
                features: ["Revenue Planning", "Project Costing", "SaaS Metrics"]
              },
              {
                title: "Energy & Utilities",
                description: "Improving resource allocation and financial performance tracking.",
                features: ["Asset Management", "Resource Planning", "Regulatory Reporting"]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-background-100/50 p-6 rounded-xl border border-secondary-500/30">
                <h4 className="text-heading-4 font-grotesk text-primary-300 mb-3">{industry.title}</h4>
                <p className="text-secondary-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-secondary-200 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Implementation Process Section before Experience Section */}
      <div className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h3 className="text-heading-3 font-grotesk text-on-dark mb-12 text-center">Our Implementation Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive assessment of your current processes, challenges, and objectives to design the perfect solution.",
                duration: "2-3 weeks"
              },
              {
                phase: "02",
                title: "Solution Design",
                description: "Detailed solution architecture and implementation roadmap tailored to your specific needs.",
                duration: "3-4 weeks"
              },
              {
                phase: "03",
                title: "Implementation",
                description: "Systematic deployment of Oracle EPM solutions with continuous testing and validation.",
                duration: "8-12 weeks"
              },
              {
                phase: "04",
                title: "Training & Support",
                description: "Comprehensive training programs and ongoing support to ensure maximum value realization.",
                duration: "Continuous"
              }
            ].map((phase, index) => (
              <div key={index} className="relative p-6 rounded-xl border border-secondary-500/30">
                <span className="absolute -top-4 right-4 text-4xl font-bold text-primary-300/20">{phase.phase}</span>
                <h4 className="text-heading-4 font-grotesk text-primary-300 mb-3">{phase.title}</h4>
                <p className="text-secondary-300 mb-4">{phase.description}</p>
                <span className="text-sm text-secondary-400">Duration: {phase.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Technology Stack Section before CTA */}
      <div className="w-full py-24 bg-background-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h3 className="text-heading-3 font-grotesk text-on-dark mb-12 text-center">Our Technology Stack</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-heading-4 font-grotesk text-primary-300 mb-6">Oracle EPM Suite</h4>
              <div className="space-y-4">
                {[
                  "Oracle Planning and Budgeting Cloud Service (PBCS)",
                  "Oracle Financial Consolidation and Close Cloud Service (FCCS)",
                  "Oracle Account Reconciliation Cloud Service (ARCS)",
                  "Oracle Enterprise Data Management Cloud (EDMCS)",
                  "Oracle Profitability and Cost Management Cloud Service (PCMCS)"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center p-3 bg-background-100/50 rounded-lg">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    <span className="text-secondary-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-heading-4 font-grotesk text-primary-300 mb-6">Integration Capabilities</h4>
              <div className="space-y-4">
                {[
                  "Oracle ERP Cloud",
                  "Oracle HCM Cloud",
                  "SAP ERP Systems",
                  "Microsoft Dynamics",
                  "Custom API Integrations"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center p-3 bg-background-100/50 rounded-lg">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    <span className="text-secondary-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update CTA Section with more specific actions */}
      <div className="w-full py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-heading-3 font-grotesk text-on-dark mb-6">
            Ready to Elevate Your Financial Planning & Analytics?
          </h2>
          <p className="text-body-1 font-open-sans text-secondary-100 mb-10 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have transformed their financial processes with Nayona Consultancy. Our expert team is ready to guide you through a seamless implementation journey.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <CalComIntegration theme="dark"/>
            <Button text="Contact Us" theme="dark" onClick={() => navigate('/contact')} />
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutUsPage;
