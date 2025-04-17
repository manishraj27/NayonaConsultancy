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

const partnerLogos = [
  { id: 1, logo: logo1, name: "Oracle" },
  { id: 2, logo: logo2, name: "Hyperion" },
  { id: 3, logo: logo3, name: "AWS" },
  { id: 4, logo: logo, name: "Nayona" },
  { id: 5, logo: logo, name: "Nayona" },
  // { id: 6, logo: logo, name: "Nayona" },
  // { id: 7, logo: logo, name: "Nayona" },
  // { id: 8, logo: logo, name: "Nayona" },
];

const LogoItem = ({ partner }) => (
  <div className="flex-shrink-0 w-32 md:w-40 mx-4 md:mx-8 flex flex-col items-center justify-center group cursor-pointer">
    <div className="h-16 md:h-20 w-16 md:w-20 flex items-center justify-center mb-2 md:mb-3 bg-secondary-600 bg-opacity-30 rounded-lg p-2 md:p-3 group-hover:bg-secondary-500 transition-all duration-300">
      <img 
        src={partner.logo} 
        alt={partner.name} 
        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <span className="text-xs md:text-body-4 text-secondary-300 group-hover:text-accent-300 font-grotesk tracking-wider uppercase transition-colors duration-300">
      {partner.name}
    </span>
  </div>
);

const InfiniteMarquee = ({ items, direction = "left", speed = 40 }) => {
  const marqueeItems = [...items, ...items];
  
  return (
    <div className="overflow-hidden relative h-28 md:h-40">
      <div className="flex absolute whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" 
              ? [0, -items.length * 180] 
              : [-items.length * 180, 0]
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
              ? [0, -items.length * 180] 
              : [-items.length * 180, 0]
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
              ? items.length * 180 
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
    <section className="pt-8 md:pt-16 lg:pt-24 overflow-hidden px-2 md:px-4 lg:px-8">
      <div className="container mx-auto px-2 md:px-4">
        <Heading 
          title="Trusted By Industry Leaders" 
          description="Our Partners"
        />
        
        <div className="flex flex-col lg:flex-row mt-8 md:mt-12 items-center">
          <div className="lg:w-1/3 pr-0 lg:pr-12 mb-6 md:mb-10 lg:mb-0">
            <h3 className="font-open-sans text-heading-4 font-bold mb-4 text-on-dark">
              Partnerships That <span className="text-accent-300">Drive Innovation</span>
            </h3>
            <p className="text-body-2 text-on-dark font-grotesk leading-relaxed mb-6">
              We collaborate with industry pioneers who share our vision for technological advancement and creative excellence.
            </p>
            <div className="inline-block">
              <Button text="Learn More" theme='dark' onClick={() => navigate('/about/us')} />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 relative">
            <div className="absolute left-0 top-0 w-12 md:w-24 h-full bg-gradient-to-r from-background-100 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-12 md:w-24 h-full bg-gradient-to-l from-background-100 to-transparent z-10"></div>
            
            <div className="space-y-4">
              <InfiniteMarquee items={partnerLogos} direction="left" speed={40} />
              <InfiniteMarquee items={[...partnerLogos].reverse()} direction="right" speed={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;