import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Home,
  Zap,
  Settings,
  BookOpen,
  Users,
  Briefcase,
  Laptop,
  Target,
  BarChart,
  Building,
  Cloud,
  FileText,
  Book,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import apiconfig from "../../../configurations/APIConfig";

function FooterUpper() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const response = await fetch(
          `${apiconfig.nayona_api}/api/newsletter/subscribe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setEmail("");
          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          alert(data.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  // Animation variants
  const linkHoverVariants = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } },
  };

  // Site map based on provided data
  const siteMap = [
    {
      name: "Home",
      to: "/",
      icon: Home,
      description: "Return to homepage",
    },
    {
      name: "Contact",
      to: "/contact",
      icon: Mail,
      description: "Get in touch",
    },
    {
      name: "Services",
      icon: Settings,
      description: "Professional solutions",
      submenu: [
        {
          name: "Enterprise Solutions",
          to: "/services/enterprise",
          icon: Building,
        },
        { name: "Cloud Services", to: "/services/cloud", icon: Cloud },
      ],
    },
    {
      name: "Resources",
      icon: BookOpen,
      description: "Knowledge center",
      submenu: [
        { name: "Case Studies", to: "/resources/cases", icon: FileText },
        { name: "Blog", to: "/resources/blog", icon: Book },
      ],
    },
    {
      name: "Features",
      icon: Zap,
      description: "Explore our key",
      submenu: [
        {
          name: "Consulting Services",
          to: "/features/consulting",
          icon: Briefcase,
        },
        {
          name: "Digital Transformation",
          to: "/features/digital",
          icon: Laptop,
        },
      ],
    },
    {
      name: "About",
      icon: Users,
      description: "Our story",
      submenu: [
        { name: "About Us", to: "/about/team", icon: Users },
        {
          name: "Testimonials",
          to: "/about/testimonials",
          icon: MessageCircle,
        },
      ],
    },
  ];

  // Social media links with only icons
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://linkedin.com/in/nayona",
    },
    { name: "Twitter", icon: "mdi:twitter", url: "https://twitter.com/nayona" },
    {
      name: "Facebook",
      icon: "mdi:facebook",
      url: "https://facebook.com/nayona",
    },
    {
      name: "Instagram",
      icon: "mdi:instagram",
      url: "https://instagram.com/nayona",
    },
  ];

  return (
    <div className="w-full mt-12 lg:mt-0 mb-6 lg:mb-5 relative bg-light-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Company Information Column - 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <h2 className="text-heading-4 tracking-widest font-open-sans font-ligh text-secondary-600">
                NAYONA
              </h2>
            </div>
            <p className="text-secondary-700 font-grotesk lg:text-body-4 text-body-3 mb-4">
              Empowering businesses through innovative digital solutions and
              strategic Oracle EPM implementations.
            </p>

            <motion.div
              className="w-full my-3 lg:hidden "
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
          </motion.div>

          {/* Site Navigation - 4 cols */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-4">
              Site Map
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {siteMap.map((item, index) => (
                <div key={index} className="mb-3">
                  {/* Menu Item */}
                  <div className="group relative">
                    {item.to ? (
                      <a
                        href={item.to}
                        className="font-medium text-secondary-700 hover:text-accent-500 transition-colors flex items-center"
                      >
                        {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[0.10em] w-0 bg-accent-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <div className="font-medium text-secondary-700 flex items-center">
                        {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                        {item.name}
                      </div>
                    )}
                  </div>

                  {/* Submenu Items */}
                  {item.submenu && (
                    <div className="mt-1 ml-6 flex flex-col space-y-1">
                      {item.submenu.map((subitem, subindex) => (
                        <div key={subindex} className="group relative">
                          {subitem.to ? (
                            <a
                              href={subitem.to}
                              className="text-secondary-600 text-sm hover:text-accent-500 transition-colors"
                            >
                              {subitem.name}
                              <span className="absolute bottom-0 left-0 h-[0.10em] w-0 bg-accent-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </a>
                          ) : (
                            <div className="text-secondary-600 text-sm">
                              {subitem.name}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information - 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-start text-secondary-700 font-grotesk lg:text-body-4 text-body-3"
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-accent-500" />
                <span>
                  123 Madison Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </span>
              </motion.div>

              <motion.a
                href="tel:+12125551234"
                className="group flex items-center text-secondary-700 hover:text-secondary-800 transition-colors font-grotesk lg:text-body-4 text-body-3 relative"
                whileHover="hover"
              >
                <motion.span variants={iconVariants}>
                  <Phone className="w-4 h-4 mr-2 text-accent-500" />
                </motion.span>
                <span>+1 (212) 555-1234</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 bg-accent-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>

              <motion.a
                href="mailto:hello@nayona.com"
                className="group flex items-center text-secondary-700 hover:text-secondary-800 transition-colors font-grotesk lg:text-body-4 text-body-3 relative"
                whileHover="hover"
              >
                <motion.span variants={iconVariants}>
                  <Mail className="w-4 h-4 mr-2 text-accent-500" />
                </motion.span>
                <span>hello@nayona.com</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 bg-accent-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>

              {/* Line Separator */}
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

              {/* Social Media Icons */}
              <div className="mt-4">
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-secondary-600 hover:text-accent-500 hover:border-accent-500 transition-all"
                      whileHover={{ y: -3, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="flex flex-col space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-secondary-600 font-grotesk font-semibold text-lg mb-2">
                Newsletter
              </h3>
              <p className="text-secondary-700 font-grotesk lg:text-body-4 text-body-3 mb-2">
                Subscribe to our newsletter for updates and insights.
              </p>

              {!isSubmitted ? (
                <form
                  className="flex flex-col space-y-2"
                  onSubmit={handleSubmit}
                >
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
                      className={`peer block w-full appearance-none border-0 border-b ${emailFocus
                          ? "border-b-blue-500"
                          : "border-b-secondary-700"
                        } bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 transition-colors duration-300`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 ${emailFocus ? "text-blue-500" : "text-secondary"
                        } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500`}
                    >
                      Your email
                    </label>
                    <motion.button
                      type="submit"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-secondary-700"
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
                    <Icon
                      icon="ph:check-circle-fill"
                      className="w-5 h-5 mr-2"
                    />
                    <span>Thanks for subscribing!</span>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FooterUpper;
// import React, { useState } from 'react';
// import {
//   Mail,
//   Send,
//   MapPin,
//   Phone,
//   Home,
//   Zap,
//   Settings,
//   BookOpen,
//   Users,
//   Briefcase,
//   Laptop,
//   Target,
//   BarChart,
//   Building,
//   Cloud,
//   FileText,
//   Book,
//   MessageCircle
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import apiconfig from '../../../configurations/APIConfig';
// import { Icon } from '@iconify/react';

// function FooterUpper() {
//   const [emailFocus, setEmailFocus] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (email) {
//       try {
//         const response = await fetch(`${apiconfig.nayona_api}/api/newsletter/subscribe`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setIsSubmitted(true);
//           setEmail("");
//           setTimeout(() => setIsSubmitted(false), 3000);
//         } else {
//           alert(data.message || "Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   // Animation variants
//   const linkHoverVariants = {
//     initial: { width: 0 },
//     hover: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
//     tap: { scale: 0.95 }
//   };

//   const iconVariants = {
//     initial: { rotate: 0 },
//     hover: { rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }
//   };

//   // Site map based on provided data
//   const siteMap = [

//     {
//       name: "Features",
//       icon: Zap,
//       description: "Explore our key",
//       submenu: [
//         { name: "Consulting Services", to: "/features/consulting", icon: Briefcase },
//         { name: "Digital Transformation", to: "/features/digital", icon: Laptop },
//         { name: "Strategy Planning", to: "/features/strategy", icon: Target },
//         { name: "Business Analytics", to: "/features/analytics", icon: BarChart }
//       ]
//     },
//     {
//       name: "Services",
//       icon: Settings,
//       description: "Professional solutions",
//       submenu: [
//         { name: "Enterprise Solutions", to: "/services/enterprise", icon: Building },
//         { name: "Cloud Services", to: "/services/cloud", icon: Cloud },
//       ]
//     },
//     {
//       name: "Resources",
//       icon: BookOpen,
//       description: "Knowledge center",
//       submenu: [
//         { name: "Case Studies", to: "/resources/cases", icon: FileText },
//         { name: "Blog", to: "/resources/blog", icon: Book },
//       ]
//     },
//     {
//       name: "About",
//       icon: Users,
//       description: "Our story",
//       submenu: [
//         { name: "About Us", to: "/about/team", icon: Users },
//         { name: "Testimonials", to: "/about/testimonials", icon: MessageCircle }
//       ]
//     },
//     {
//       name: "Contact",
//       to: "/contact",
//       icon: Mail,
//       description: "Get in touch",
//     }
//   ];

//   // Social media links with only icons
//   const socialLinks = [
//     { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/nayona' },
//     { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/nayona' },
//     { name: 'Facebook', icon: 'mdi:facebook', url: 'https://facebook.com/nayona' },
//     { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com/nayona' }
//   ];

//   return (
//     <div className="w-full mt-12 lg:mt-0 mb-12 lg:mb-8 relative">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
//           {/* Company Information Column - 3 cols */}
//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center mb-4">
//               <img src="/logo.svg" alt="Nayona" className="h-8 w-auto mr-2" />
//               <h2 className="text-xl font-grotesk font-semibold text-secondary-800">Nayona</h2>
//             </div>
//             <p className="text-secondary-600 font-grotesk text-body-3 mb-4">
//               Empowering businesses through innovative digital solutions and strategic Oracle EPM implementations.
//             </p>

//             <motion.div
//               className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 mt-6"
//               whileHover={{ y: -2, boxShadow: "0 6px 12px -3px rgba(0, 0, 0, 0.1)" }}
//               transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             >
//               <div className="w-8 h-8 flex items-center justify-center mr-2 bg-red-600 rounded-md text-white">
//                 <span className="text-xs font-bold">OPN</span>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-secondary-800 text-sm">Oracle EPM Partner</h4>
//                 <p className="text-xs text-secondary-600">Certified Solutions Provider</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Site Navigation - 4 cols */}
//           <motion.div
//             className="lg:col-span-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="text-secondary-800 font-grotesk font-semibold text-lg mb-4">Site Map</h3>
//             <div className="grid grid-cols-2 gap-x-6 gap-y-1">
//               {siteMap.map((item, index) => (
//                 <div key={index} className="mb-3">
//                   <a
//                     href={item.to || '#'}
//                     className="font-medium text-secondary-800 hover:text-accent-500 transition-colors flex items-center"
//                   >
//                     {item.icon && <item.icon className="w-4 h-4 mr-2" />}
//                     {item.name}
//                   </a>
//                   {item.submenu && (
//                     <div className="mt-1 ml-6 flex flex-col space-y-1">
//                       {item.submenu.map((subitem, subindex) => (
//                         <a
//                           key={subindex}
//                           href={subitem.to}
//                           className="text-secondary-600 text-sm hover:text-accent-500 transition-colors"
//                         >
//                           {subitem.name}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Information - 2 cols */}
//           <motion.div
//             className="lg:col-span-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-secondary-800 font-grotesk font-semibold text-lg mb-4">Contact Us</h3>
//             <div className="space-y-3">
//               <motion.div
//                 className="flex items-start text-secondary-700 font-grotesk text-body-3"
//                 whileHover={{ x: 3, transition: { duration: 0.2 } }}
//               >
//                 <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-accent-500" />
//                 <span>123 Madison Avenue<br />New York, NY 10001<br />United States</span>
//               </motion.div>
//               <motion.a
//                 href="tel:+12125551234"
//                 className="flex items-center text-secondary-700 hover:text-secondary-800 transition-colors font-grotesk text-body-3"
//                 whileHover="hover"
//               >
//                 <motion.span variants={iconVariants}>
//                   <Phone className="w-4 h-4 mr-2 text-accent-500" />
//                 </motion.span>
//                 <span>+1 (212) 555-1234</span>
//               </motion.a>
//               <motion.a
//                 href="mailto:hello@nayona.com"
//                 className="flex items-center text-secondary-700 hover:text-secondary-800 transition-colors font-grotesk text-body-3"
//                 whileHover="hover"
//               >
//                 <motion.span variants={iconVariants}>
//                   <Mail className="w-4 h-4 mr-2 text-accent-500" />
//                 </motion.span>
//                 <span>hello@nayona.com</span>
//               </motion.a>

//               {/* Social Media Icons */}
//               <div className="mt-4">
//                 <div className="flex space-x-3">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-secondary-600 hover:text-accent-500 hover:border-accent-500 transition-all"
//                       whileHover={{ y: -3, scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                       aria-label={social.name}
//                     >
//                       <span className="sr-only">{social.name}</span>
//                       <span className="text-xl">{social.icon.split(':')[1][0].toUpperCase()}</span>
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Newsletter Subscription - 3 cols */}
//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="text-secondary-800 font-grotesk font-semibold text-lg mb-4">Stay Updated</h3>
//             <p className="text-secondary-600 font-grotesk text-body-3 mb-4">
//               Subscribe to our newsletter for insights and industry trends.
//             </p>

//             {!isSubmitted ? (
//               <form className="relative" onSubmit={handleSubmit}>
//                 <div className="flex items-center">
//                   <input
//                     required
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onFocus={() => setEmailFocus(true)}
//                     onBlur={() => setEmailFocus(false)}
//                     className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring focus:ring-accent-200 focus:ring-opacity-50 pl-4 pr-10 py-2"
//                     placeholder="Your email address"
//                   />
//                   <motion.button
//                     type="submit"
//                     className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-r-md"
//                     variants={buttonVariants}
//                     initial="initial"
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <Send className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//                 <p className="text-secondary-500 font-grotesk text-body-5 mt-2">
//                   We respect your privacy. No spam, ever.
//                 </p>
//               </form>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-green-50 border border-green-200 rounded-md p-3 text-green-700"
//               >
//                 <p className="flex items-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Thanks for subscribing!</span>
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default FooterUpper;
