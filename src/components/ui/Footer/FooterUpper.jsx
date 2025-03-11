import React, { useState } from 'react';
import { Mail, Send, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import apiconfig from '../../../configurations/APIConfig';

function FooterUpper() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (email) {
      try {
        // Make a POST request to the backend
        const response = await fetch(`${apiconfig.nayona_api}/api/newsletter/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        // Parse the response
        const data = await response.json();
  
        if (response.ok) {
          // If the subscription is successful
          setIsSubmitted(true);
          setEmail("");
          // Reset submission status after 3 seconds
          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          // If there's an error (e.g., email already subscribed)
          alert(data.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };
  // Hover animation variants
  const linkHoverVariants = {
    initial: { width: 0 },
    hover: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full mt-12 lg:mt-0 mb-12 lg:mb-8 relative">
   {/* Company Description - Mobile Only */}
   <motion.div 
        className="block lg:hidden md:pb-12 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-grotesk font-semibold text-secondary-600 mb-2">Nayona Consultancy</h2>
        <p className="text-secondary-700 font-grotesk text-body-3">
          Empowering businesses through innovative digital solutions and strategic Oracle EPM implementations. 
          With over a decade of expertise, we transform how organizations plan, analyze, and report financial data.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
        {/* Navigation Links */}
        <motion.div 
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-2">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                className="w-fit group relative text-secondary-700 hover:text-secondary-600 transition-colors font-grotesk text-body-3"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-accent-300 duration-300 ease-in-out group-hover:w-full"></span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[0.15em] w-0 rounded-full bg-accent-300"
                  initial="initial"
                  whileHover="hover"
                  variants={linkHoverVariants}
                ></motion.span>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-2">Connect</h3>
          <div className="flex flex-col space-y-2">
            {[
              { name: 'Instagram', icon: <Instagram className="w-4 h-4 mr-2" />, url: 'https://instagram.com/nayona' },
              { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4 mr-2" />, url: 'https://linkedin.com/in/nayona' },
              { name: 'X [Twitter]', icon: <Icon icon="prime:twitter" className="w-4 h-4 mr-2" />, url: 'https://twitter.com/nayona' },
              { name: 'Facebook', icon: <Icon icon="icon-park-outline:facebook" className="w-4 h-4 mr-2" />, url: 'https://facebook.com/nayona' },
              { name: 'hello@nayona.com', icon: <Mail className="w-4 h-4 mr-2" />, url: 'mailto:hello@nayona.com' }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.url} 
                target={item.url.startsWith('mailto') ? '' : '_blank'} 
                rel={item.url.startsWith('mailto') ? '' : 'noopener noreferrer'} 
                className="flex items-center text-secondary-700 hover:text-secondary-600 transition-colors font-grotesk text-body-3"
                whileHover="hover"
              >
                <motion.span variants={iconVariants}>
                  {item.icon}
                </motion.span>
                <div className="group relative w-fit">
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-accent-300 duration-300 ease-in-out group-hover:w-full"></span>
                  <motion.span 
                  className="absolute bottom-0 left-0 h-[0.15em] w-0 rounded-full bg-accent-300"
                  initial="initial"
                  whileHover="hover"
                  variants={linkHoverVariants}
                ></motion.span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Address & Contact */}
        <motion.div 
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-2">Location</h3>
          <div className="flex flex-col space-y-2">
            <motion.div 
              className="flex items-start text-secondary-700 font-grotesk text-body-3"
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
              <span>123 Madison Avenue<br />New York, NY 10001<br />United States</span>
            </motion.div>
            <motion.a 
              href="tel:+12125551234" 
              className="flex items-center text-secondary-700 hover:text-secondary-600 transition-colors font-grotesk text-body-3"
              whileHover="hover"
            >
              <motion.span variants={iconVariants}>
                <Phone className="w-4 h-4 mr-2" /> 
              </motion.span>
              <div className="group relative w-fit">
                <span>+1 (212) 555-1234</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-accent-300 duration-300 ease-in-out group-hover:w-full"></span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[0.15em] w-0 rounded-full bg-gray-500"
                  initial="initial"
                  whileHover="hover"
                  variants={linkHoverVariants}
                ></motion.span>
              </div>
            </motion.a>
            
            {/* Oracle EPM Partnership */}
            <div className="mt-4 pt-4 border-t border-secondary-200">
              <p className="text-secondary-600 font-grotesk text-body-4 mb-2">Official Partner</p>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon 
                  icon="simple-icons:oracle" 
                  className="w-6 h-6 mr-2 text-red-600" 
                />
                <span className="text-secondary-700 font-medium">Oracle EPM Solutions</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter - Updated with micro-interactions */}
        <motion.div 
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-secondary-700 font-grotesk text-body-3 mb-2">
            Subscribe to our newsletter for updates and insights.
          </p>
          
          {!isSubmitted ? (
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
              <div className="relative z-0">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className={`peer block w-full appearance-none border-0 border-b ${emailFocus ? 'border-b-blue-500' : 'border-b-secondary-700'} bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 transition-colors duration-300`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 ${emailFocus ? 'text-blue-500' : 'text-secondary'} duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500`}
                >
                  Your email
                </label>
                <motion.button 
                  type="submit" 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-secondary-700 "
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              <p className="text-secondary font-grotesk text-body-5">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-md p-3 text-green-700"
            >
              <p className="flex items-center">
                <Icon icon="ph:check-circle-fill" className="w-5 h-5 mr-2" />
                <span>Thanks for subscribing!</span>
              </p>
            </motion.div>
          )}
          
          {/* Oracle EPM Banner - Desktop Only */}
          <motion.div 
            className="hidden lg:flex mt-6 p-4  rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                icon="simple-icons:oracle" 
                className="w-8 h-8 text-red-600" 
              />
              <div>
                <h4 className="font-semibold text-secondary-600">Oracle EPM Experts</h4>
                <p className="text-xs text-secondary-700">Certified Implementation Partner</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default FooterUpper;