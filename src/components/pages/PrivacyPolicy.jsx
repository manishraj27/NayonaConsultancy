import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../ui/Heading';

const PrivacyPolicy = () => {
  return (
    <section className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full py-24 min-h-screen dark-section bg-background-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-32"
      >
        <Heading title="Privacy Policy" description="Last Updated: March 2024" />
        
        <div className="mt-12 text-on-dark">
          <p className="text-body-1 font-open-sans mb-8">At Nayona Consultancy, protecting your privacy is paramount. This Privacy Policy outlines our practices for collecting, using, and safeguarding your personal information when you use our services or visit our website.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-body-2 font-open-sans">
                <li>Name and contact details (email, phone number)</li>
                <li>Professional information (company, job title)</li>
                <li>Location data (country, city)</li>
                <li>Login credentials (for registered users)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-body-2 font-open-sans">
                <li>IP address and browser information</li>
                <li>Device information</li>
                <li>Cookies and usage data</li>
                <li>Website interaction patterns</li>
              </ul>
            </div>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">How We Use Your Information</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> To provide and maintain our services</li>
              <li><strong>Communication:</strong> To respond to inquiries and send updates</li>
              <li><strong>Improvement:</strong> To enhance our website and services</li>
              <li><strong>Legal Compliance:</strong> To meet regulatory requirements</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Data Protection</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>We implement robust security measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Your Rights</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>Under data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate information</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Objection:</strong> Object to certain data processing</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">International Transfers</h2>
          <p className="text-body-2 font-open-sans">We may transfer your data to countries outside your residence. We ensure appropriate safeguards are in place through standard contractual clauses and data protection agreements.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Contact Us</h2>
          <p className="text-body-2 font-open-sans">For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at <a href="mailto:privacy@nayonaconsultancy.com" className="text-primary-300 hover:text-primary-200">privacy@nayonaconsultancy.com</a></p>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;