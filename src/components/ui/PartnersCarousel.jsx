import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Heading from "./Heading";
import logo from "../../assets/partnerLogos/FinalLogo.svg";
import logo1 from "../../assets/partnerLogos/Oracle_logo.svg"
import logo2 from "../../assets/partnerLogos/hyperion-solutions-seeklogo.svg"
import logo3 from "../../assets/partnerLogos/Amazon_Web_Services_Logo.svg"
import logo4 from "../../assets/partnerLogos/Oracle-cloud.png"
import { useNavigate } from "react-router-dom";
import Button from "./Button";
// Assuming you would have more partner logos
// Replace these with your actual logo imports when available
const partnerLogos = [


  { id: 1, logo: logo1, name: "Oracle" },
  { id: 2, logo: logo2, name: "Hyperion" },
  { id: 3, logo: logo3, name: "AWS" },
  // { id: 4, logo: logo, name: "Nayona" },
  // { id: 5, logo: logo, name: "Nayona" },
  // { id: 6, logo: logo, name: "Nayona" },
  // { id: 7, logo: logo, name: "Nayona" },
  // { id: 8, logo: logo, name: "Nayona" },
  // { id: 9, logo: logo, name: "Apple" },
  // { id: 10, logo: logo, name: "Meta" },
];

const LogoItem = ({ partner }) => (
  
  <div className="flex-shrink-0 w-40 mx-8 flex flex-col items-center justify-center group cursor-pointer">
    <div className="h-20 w-20 flex items-center justify-center mb-3 bg-secondary-600 bg-opacity-30 rounded-lg p-3 group-hover:bg-secondary-500 transition-all duration-300">
      <img 
        src={partner.logo} 
        alt={partner.name} 
        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <span className="text-body-4 text-secondary-300 group-hover:text-accent-300 font-grotesk tracking-wider uppercase transition-colors duration-300">
      {partner.name}
    </span>
  </div>
);

const InfiniteMarquee = ({ items, direction = "left", speed = 40 }) => {
  // Double the items to create a seamless loop
  const marqueeItems = [...items, ...items];
  
  return (
    <div className="overflow-hidden relative h-40">
      <div className="flex absolute whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" 
              ? [0, -items.length * 224] // 224 = logo width (160) + margins (2 * 32)
              : [-items.length * 224, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {items.map((item, index) => (
            <LogoItem key={`first-${item.id}-${index}`} partner={item} />
          ))}
        </motion.div>
        
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" 
              ? [0, -items.length * 224] 
              : [-items.length * 224, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          initial={{ 
            x: direction === "left" 
              ? items.length * 224 
              : 0 
          }}
        >
          {items.map((item, index) => (
            <LogoItem key={`second-${item.id}-${index}`} partner={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const PartnersCarousel = () => {

  const navigate = useNavigate();
  return (
    <section className="py-16 lg:py-24 overflow-hidden px-4 lg:px-8">
      <div className="container mx-auto px-4">
        <Heading 
          title="Trusted By Industry Leaders" 
          description="Our Partners"
        />
        
        <div className="flex flex-col lg:flex-row mt-12 items-center">
          {/* Left side description */}
          <div className="lg:w-1/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
            <h3 className="font-open-sans text-heading-4 font-bold mb-4 text-on-dark">
              Partnerships That <span className="text-accent-300">Drive Innovation</span>
            </h3>
            <p className="text-body-2 text-on-dark font-grotesk leading-relaxed mb-6">
              We collaborate with industry pioneers who share our vision for technological advancement and creative excellence.
            </p>
            <div className="inline-block">
            <Button text="Learn More" theme='dark' onClick={() => navigate('/abou/us')} />
            </div>
          </div>
          
          {/* Right side infinite logo carousel */}
          <div className="lg:w-2/3 relative">
            {/* Gradient overlay for left blur effect */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background-100 to-transparent z-10"></div>
            
            {/* Gradient overlay for right blur effect */}
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background-100 to-transparent z-10"></div>
            
            <div className="space-y-4">
              {/* First row - moving left */}
              <InfiniteMarquee items={partnerLogos} direction="left" speed={40} />
              
              {/* Second row - moving right, with different speed for visual interest */}
              <InfiniteMarquee items={[...partnerLogos].reverse()} direction="right" speed={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;