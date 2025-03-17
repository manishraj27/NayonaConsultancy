import React, { useEffect } from "react";
import ServicesSection from "../ui/ServicesSection";
import Heading from "../ui/Heading";
import ServiceFeatureSection from "../ui/ServiceFeatureSection";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import CalComIntegration from "../ui/CalComIntegration";

function Service() {


  return (
    <section
      id="service"
      aria-label="service"
      className="rounded-b-3xl overflow-visible lg:px-12 px-4 w-full lg:py-40 py-48 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center relative"
    >
      {/* Background gradient effect */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500 to-gray-400 pointer-events-none" /> */}

      {/* Introduction Section */}
      <motion.div
        className="w-full text-left min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >
        <Heading
          title="Services We Deal With"
          description="Enterprise Solutions"
        />
        <div className="mt-6 w-full md:w-2/3">
          <motion.span
            className="text-secondary-300 lg:mx-16 lg:w-full text-body-1 font-grotesk text-pretty block"

          >
            Optimize, Automate, Elevate – Oracle EPM Solutions for Your Business
            Needs.
          </motion.span>
          <motion.p
            className="text-on-dark text-body-2 font-grotesk mt-4"

          >
            Our Oracle EPM services are designed to streamline your financial
            processes, improve decision-making, and ensure compliance. Below, we
            outline how we implement these solutions to deliver maximum value to
            your business.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >

        {/* this component explains about oracle epm services */}
        <ServicesSection />
      </motion.div>

      {/* Implementation Methodology Section */}
      <motion.div
        className="w-full mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      
      >
        <Heading
          title="Our Implementation Methodology"
          description="How We Deliver Success"
        />
        <ServiceFeatureSection />
      </motion.div>

      {/* Enhanced Quote Section with animation */}
      <motion.div
        className="bg-light-100 rounded-3xl w-full mx-0 mt-24 overflow-hidden shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >
        <div className="w-full py-16 px-6 md:px-12 relative">
          <motion.div
            className="absolute top-8 left-8 text-secondary-300 opacity-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <Quote size={64} />
          </motion.div>

          <motion.h1
            className="text-center text-heading-2 md:text-heading-1 font-grotesk text-background-100 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We are here to help you grow your business
          </motion.h1>

          <motion.p
            className="text-center text-body-1 font-grotesk text-background-100/80 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            "Transform your financial operations with our expertise. We don't just implement solutions; we create strategic advantages for your business."
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >


            <Link to="/contact">
            <Button text="Get Started"/>
            </Link>

          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced "Why Choose Us" Section */}
      <motion.div
        className="w-full mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >
        <Heading title="Why Choose Us?" description="What Makes Us Stand Out" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"

        >
          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300"

          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold">Oracle EPM Expertise</h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-12">Specialized team with extensive experience in Oracle EPM implementations across industries.</p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300"

          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M12 16h3.5a3.5 3.5 0 1 1 0 7H12v-7z"></path></svg>
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold">Tailored Solutions</h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-12">Customized implementation strategies aligned with your unique business requirements and objectives.</p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300"

          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold">Proven Track Record</h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-12">Successfully delivered enterprise projects with measurable ROI and client satisfaction.</p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300"

          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold">Ongoing Support</h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-12">Comprehensive post-implementation support and continuous optimization services to maximize your investment.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Client Testimonial Section */}
      <motion.div
        className="w-full mt-24 bg-background-200/20 p-8 rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >
        {/* <Heading title="Client Success Stories" description="What Our Clients Say" /> */}
        <h1 className="text-heading-2 text-on-dark font-grotesk text-center mb-6">Client Success Stories</h1>
        <div className="mt-8 relative">
          <div className="absolute -left-4 top-0 text-secondary-300/30">
            <Quote size={48} />
          </div>

          <motion.div
            className="pl-12 pr-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-on-dark italic text-body-1">Our financial forecasting process used to take weeks. After implementing Oracle EPM with this team, we've cut that time by 75% and improved accuracy dramatically.</p>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-secondary-300/20 flex items-center justify-center">
                <span className="text-secondary-300 font-bold">JD</span>
              </div>
              <div className="ml-4">
                <p className="text-on-dark font-medium">Jane Doe</p>
                <p className="text-on-dark/70 text-sm">CFO, Global Enterprise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="w-full mt-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

      >
        <h2 className="text-heading-3 text-on-dark font-grotesk mb-6">Ready to Transform Your Financial Operations?</h2>
        <p className="text-on-dark/80 mb-8 max-w-2xl mx-auto">Let's discuss how our Oracle EPM solutions can address your specific business challenges and drive growth.</p>
        <CalComIntegration theme="dark" />
      </motion.div>
    </section>
  );
}

export default Service;