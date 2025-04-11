import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../ui/Heading';

const CookiesPolicy = () => {
  return (
    <section className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full py-24 min-h-screen dark-section bg-background-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-32"
      >
        <Heading title="Cookies Policy" description="Last Updated: March 2024" />
        
        <div className="mt-12 text-on-dark">
          <p className="text-body-1 font-open-sans mb-8">This Cookies Policy explains how Nayona Consultancy uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
          
          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">What Are Cookies?</h2>
          <p className="text-body-2 font-open-sans">Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.</p>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Essential Cookies</h3>
              <p className="text-body-2 font-open-sans">These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.</p>
            </div>
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Analytics Cookies</h3>
              <p className="text-body-2 font-open-sans">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</p>
            </div>
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Functional Cookies</h3>
              <p className="text-body-2 font-open-sans">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
            </div>
            <div>
              <h3 className="text-body-1 font-grotesk font-semibold">Marketing Cookies</h3>
              <p className="text-body-2 font-open-sans">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
            </div>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Third-Party Services</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>We use the following third-party services that may set cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Web analytics service</li>
              <li><strong>Google Tag Manager:</strong> Tags management system</li>
              <li><strong>LinkedIn:</strong> Professional networking integration</li>
              <li><strong>Cal.com:</strong> Scheduling system</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Managing Cookies</h2>
          <div className="space-y-4 text-body-2 font-open-sans">
            <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
            
            <h3 className="text-body-1 font-grotesk font-semibold">How to manage cookies in major browsers:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
          </div>

          <h2 className="text-heading-4 font-grotesk mt-8 mb-4">Contact Us</h2>
          <p className="text-body-2 font-open-sans">If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@nayonaconsultancy.com" className="text-primary-300 hover:text-primary-200">privacy@nayonaconsultancy.com</a></p>
        </div>
      </motion.div>
    </section>
  );
};

export default CookiesPolicy;