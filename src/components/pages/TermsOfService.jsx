import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../ui/Heading';

const TermsOfService = () => {
  return (
    <section className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full py-24 min-h-screen dark-section bg-background-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-32"
      >
        <Heading title="Terms of Service" description="Last Updated: March 2024" />
        
        <div className="mt-12 text-on-dark">
          <p className="text-body-1 font-open-sans mb-8">Welcome to Nayona Consultancy. By accessing our website and services, you agree to these terms. Please read them carefully.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">1. Services</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>We provide the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Oracle EPM implementation and consulting</li>
              <li>Cloud migration services</li>
              <li>Financial planning and analysis</li>
              <li>Custom reporting solutions</li>
              <li>Training and support services</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">2. User Obligations</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>By using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in unauthorized access or use</li>
              <li>Not interfere with service operation</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">3. Intellectual Property</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>Our intellectual property includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trademarks and logos</li>
              <li>Software and code</li>
              <li>Documentation and training materials</li>
              <li>Methodologies and processes</li>
            </ul>
            <p>You may not use, copy, or distribute these materials without explicit permission.</p>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">4. Service Level Agreements</h2>
          <p className="text-body-2 font-open-sans">Specific service levels and performance metrics will be detailed in individual engagement agreements.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">5. Limitation of Liability</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Data loss or security breaches</li>
              <li>Service interruptions</li>
              <li>Third-party actions or services</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">6. Termination</h2>
          <p className="text-body-2 font-open-sans">We reserve the right to terminate or suspend services for violations of these terms or for any other reason at our discretion.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">7. Governing Law</h2>
          <p className="text-body-2 font-open-sans">These terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Contact</h2>
          <p className="text-body-2 font-open-sans">For questions about these terms, contact us at <a href="mailto:legal@nayonaconsultancy.com" className="text-primary-300 hover:text-primary-200">legal@nayonaconsultancy.com</a></p>
        </div>
      </motion.div>
    </section>
  );
};

export default TermsOfService;