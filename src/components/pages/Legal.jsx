import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../ui/Heading';
import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <section className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full py-24 min-h-screen dark-section bg-background-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-32"
      >
        <Heading title="Legal Information" description="Important legal documents and policies" />
        
        <div className="mt-12 text-on-dark">
          <p className="text-body-1 font-open-sans mb-8">
            Welcome to Nayona Consultancy's legal section. Here you'll find all the important documents that govern our relationship with our users and clients.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-200/50 p-6 rounded-xl"
            >
              <h2 className="text-heading-4 font-grotesk mb-4">Privacy Policy</h2>
              <p className="text-body-2 font-open-sans mb-4">Learn how we collect, use, and protect your personal information.</p>
              <Link to="/privacy-policy" className="text-primary-300 hover:text-primary-200 font-open-sans">
                Read Privacy Policy →
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-200/50 p-6 rounded-xl"
            >
              <h2 className="text-heading-4 font-grotesk mb-4">Terms of Service</h2>
              <p className="text-body-2 font-open-sans mb-4">Understand the terms governing the use of our services.</p>
              <Link to="/terms-of-service" className="text-primary-300 hover:text-primary-200 font-open-sans">
                Read Terms of Service →
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-200/50 p-6 rounded-xl"
            >
              <h2 className="text-heading-4 font-grotesk mb-4">Cookies Policy</h2>
              <p className="text-body-2 font-open-sans mb-4">Details about how we use cookies and similar technologies.</p>
              <Link to="/cookies-policy" className="text-primary-300 hover:text-primary-200 font-open-sans">
                Read Cookies Policy →
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-200/50 p-6 rounded-xl"
            >
              <h2 className="text-heading-4 font-grotesk mb-4">Contact Legal Team</h2>
              <p className="text-body-2 font-open-sans mb-4">Need to reach our legal department? Contact us directly.</p>
              <a href="mailto:legal@nayonaconsultancy.com" className="text-primary-300 hover:text-primary-200 font-open-sans">
                Email Legal Team →
              </a>
            </motion.div>
          </div>

          <div className="mt-12 bg-background-200/50 p-6 rounded-xl">
            <h2 className="text-heading-4 font-grotesk mb-4">Additional Legal Information</h2>
            <div className="space-y-4 text-body-2 font-open-sans">
              <p>Nayona Consultancy is committed to maintaining transparency and compliance with all applicable laws and regulations.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business Registration: [Your Registration Number]</li>
                <li>Tax ID: [Your Tax ID]</li>
                <li>Registered Address: [Your Business Address]</li>
                <li>Jurisdiction: [Your Legal Jurisdiction]</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-body-2 font-open-sans text-secondary-300">
            <p>For urgent legal matters or press inquiries, please contact our legal team directly at <a href="mailto:legal@nayonaconsultancy.com" className="text-primary-300 hover:text-primary-200">legal@nayonaconsultancy.com</a></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Legal;