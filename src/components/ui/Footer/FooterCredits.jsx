import React from 'react';
import { Copyright, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

function FooterCredits() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* Animated separator line */}
      <motion.div 
        className="w-full my-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </motion.div>

      {/* Credits section with animations */}
      <motion.div 
        className="w-full flex flex-wrap justify-between items-center py-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Left side - Copyright and policy links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
          {/* Copyright notice with animation */}
          <motion.span 
            className="flex items-center text-secondary-700 font-grotesk text-body-5 lg:text-body-5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Copyright className="w-3 h-3 mr-2" /> 
            <span>{currentYear} Nayona Consultancy</span>
          </motion.span>
          
          {/* Policy links */}
          <div className="flex items-center gap-3 text-body-5 text-secondary-600">
            {[
              { name: "Privacy Policy", path: "privacy-policy" },
              { name: "Terms of Service", path: "terms-of-service" },
              { name: "Cookies Policy", path: "cookies-policy" },
              { name: "Legal", path: "legal" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ color: "#4B5563" }}
              >
                <Link
                  to={`/${item.path}`}
                  className="relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-accent-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Credits with animations */}
        <div className="flex items-center gap-4 mr-12">
          {/* Website credit */}
          <motion.span 
            className="text-secondary-700 font-grotesk text-body-5 lg:text-body-5 flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            Website by
            <motion.a
              href="https://manishraj.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 ml-1 font-medium inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              this guy
              <motion.span
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
              </motion.span>
            </motion.a>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
}

export default FooterCredits;