import React from "react";
import ServicesSection from "../ui/ServicesSection";
import Heading from "../ui/Heading";
import ServiceFeatureSection from "../ui/ServiceFeatureSection";
import { motion } from "framer-motion";
import { ChevronDown, Quote, Check, PieChart, Users, Award, Hand, Handshake } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import CalComIntegration from "../ui/CalComIntegration";
import cloudServicedata from './../../lib/cloudServicedata';
import cloudOracleImplementation from "../../lib/cloudOracleImplementation";
import { HoverEffect } from "../ui/card-hover-effect";






// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

function CloudService() {
  // Scroll to the next section smoothly
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="cloud-service"
      aria-label="cloud-service"
      className="overflow-visible lg:px-12 px-4 w-full rounded-b-3xl py-24 lg:py-32 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center relative"
    >
      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="w-full text-center min-h-[80vh] flex flex-col items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <span className="text-secondary-300 text-xl font-medium tracking-wider uppercase mb-4 block">
            Cloud Solutions
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-grotesk font-bold text-on-dark mb-6">
            Cloud <span className="text-secondary-300">Transformation</span>
          </h1>
          <p className="text-on-dark/80 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Accelerate innovation, scalability, and efficiency with our cutting-edge cloud solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CalComIntegration theme="dark" />
            <div onClick={scrollToNextSection}>
              <Button text="Learn More" theme="dark" />
            </div>
          </div>
        </motion.div>

        {/* Animated down arrow */}
        <motion.div
          className="absolute bottom-12 lg:left-1/2 transform -translate-x-1/2"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToNextSection}
        >
          <ChevronDown size={36} className="text-secondary-300 cursor-pointer" />
        </motion.div>
      </motion.div>

      {/* Services Section with improved layout */}
      <motion.div
        id="services-section"
        className="w-full mt-24 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
       <Heading
          title="Oracle Cloud Services"
          description="Comprehensive Solutions for Your Business"
        />
        <div className="mt-6 w-full md:w-2/3">
          <motion.span
            className="text-secondary-300 lg:mx-16 lg:w-full text-body-1 font-grotesk text-pretty block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unlock the full potential of the cloud with our comprehensive suite of services.
          </motion.span>
          <motion.p
            className="text-on-dark text-body-2 font-grotesk mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From migration to optimization, our cloud solutions are designed to help your business achieve agility, scalability, and cost efficiency.
          </motion.p>
        </div>

        <div className="lg:py-56 pt-52">
        <ServicesSection title="Cloud Services" services={cloudServicedata} />
        </div>
      </motion.div>

      {/* Implementation Methodology Section */}
      <motion.div
        className="w-full "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Heading
          title="Our Implementation Methodology"
          description="How We Deliver Success"
        />
        <section className="max-w-6xl mx-auto py-12">
             <HoverEffect items={cloudOracleImplementation} className="gap-6" />
           </section>
      </motion.div>

      {/* Enhanced Quote Section */}
      <motion.div
        className="bg-gradient-to-br from-light-100 to-primary-100 rounded-3xl w-full mx-0 mt-24 overflow-hidden"
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
            <Quote size={84} />
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-8 text-secondary-300 opacity-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.2, scale: 1, rotate: 180 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Quote size={64} />
          </motion.div>

          <motion.h1
            className="text-center text-heading-2 md:text-heading-1 font-grotesk text-background-100 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We are here to help you <span className="text-primary-300">scale</span> your business
          </motion.h1>

          <motion.p
            className="text-center text-body-1 font-grotesk text-background-100/80 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your operations with our cloud expertise. We don't just implement solutions; we create strategic advantages for your business.
          </motion.p>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact">
              <Button text="Get Started" className="px-8 py-4 text-lg" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced "Why Choose Us" Section */}
      <motion.div
        className="w-full mt-24 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Heading title="Why Choose Us?" description="What Makes Us Stand Out" />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" variants={containerVariants}>
          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300 border border-secondary-300/10 hover:border-secondary-300/30 hover:shadow-lg hover:shadow-secondary-300/5"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-4">
                <PieChart size={24} />
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold text-xl">
                Cloud Expertise
              </h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-16">
              Specialized team with extensive experience in cloud migrations, optimizations, and management.
            </p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300 border border-secondary-300/10 hover:border-secondary-300/30 hover:shadow-lg hover:shadow-secondary-300/5"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-4">
                <Users size={24} />
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold text-xl">
                Tailored Solutions
              </h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-16">
              Customized cloud strategies aligned with your unique business requirements and objectives.
            </p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300 border border-secondary-300/10 hover:border-secondary-300/30 hover:shadow-lg hover:shadow-secondary-300/5"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold text-xl">
                Proven Track Record
              </h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-16">
              Successfully delivered cloud projects with measurable ROI and client satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="bg-background-200/30 p-6 rounded-xl backdrop-blur-sm hover:bg-background-200/50 transition-all duration-300 border border-secondary-300/10 hover:border-secondary-300/30 hover:shadow-lg hover:shadow-secondary-300/5"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-secondary-300 flex items-center justify-center text-white mr-4">
                <Handshake size={24} />
              </div>
              <h3 className="text-on-dark font-grotesk font-semibold text-xl">
                Ongoing Support
              </h3>
            </div>
            <p className="text-on-dark/80 text-body-2 ml-16">
              Comprehensive post-implementation support and continuous optimization services to maximize your investment.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>



      {/* Enhanced Call to Action */}
      <motion.div
        className="w-full mt-24 p-8 md:p-12 bg-background-200/30 rounded-3xl border border-secondary-300/10 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-heading-3 text-on-dark font-grotesk mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Transform Your Business with Cloud?
          </motion.h2>
          <motion.p
            className="text-on-dark/80 mb-8 max-w-2xl mx-auto text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's discuss how our cloud solutions can address your specific business challenges and drive growth.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <CalComIntegration theme="dark" />
          </motion.div>

          {/* Additional benefit highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-secondary-300">
                <Check size={20} />
              </div>
              <p className="text-on-dark/80">Free initial consultation to assess your needs</p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-secondary-300">
                <Check size={20} />
              </div>
              <p className="text-on-dark/80">Customized cloud planning and ROI analysis</p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-secondary-300">
                <Check size={20} />
              </div>
              <p className="text-on-dark/80">Ongoing support and optimization services</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CloudService;