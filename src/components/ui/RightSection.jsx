import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Iridescence from "../../blocks/Backgrounds/Iridescence/Iridescence";
import BulletinCarousel from "./BulletinCarousel";
import item from "../../lib/bulletin";
import GlassCard from "./GlassCard";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";


const RightSection = () => {
  const [paths, setPaths] = useState({ dotted: "", curved: "" });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const activeClientsRef = useRef(null);
  const animatedBeamRef = useRef(null);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const calculatePaths = useCallback(() => {
    if (
      !activeClientsRef.current ||
      !animatedBeamRef.current ||
      !carouselRef.current ||
      !containerRef.current
    )
      return;

    const container = containerRef.current.getBoundingClientRect();
    const activeClients = activeClientsRef.current.getBoundingClientRect();
    const animatedBeam = animatedBeamRef.current.getBoundingClientRect();
    const carousel = carouselRef.current.getBoundingClientRect();

    const startX =
    activeClients.left + activeClients.width / 2 - container.left+30;
    const startY = activeClients.top + activeClients.height / 2 - container.top;

    const beamX = animatedBeam.left + animatedBeam.width / 2 - container.left;
    const beamY = animatedBeam.top - container.top;

    const carouselX = carousel.left + carousel.width / 2 - container.left;
    const carouselY = carousel.top - container.top;

    const circleX = beamX;
    const circleY = startY;

    const controlPoint1X = circleX;
    const controlPoint1Y = circleY + 50;
    const controlPoint2X = beamX;
    const controlPoint2Y = beamY - 50;

    setPaths({
      dotted: `M ${startX} ${startY} L ${startX} ${carouselY} `,
      curved: `M ${startX} ${startY} L ${circleX} ${circleY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${beamX} ${beamY}`,
    });

    setCirclePosition({ x: circleX, y: circleY });
  }, []);

  useEffect(() => {
    const debouncedCalculatePaths = debounce(calculatePaths, 100);

    // Delay the start of animations by 3 seconds
    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
      calculatePaths();

      // Delay the visibility of paths and circle by an additional 500ms
      setTimeout(() => setIsVisible(true), 200);
    }, 3500);

    window.addEventListener("resize", debouncedCalculatePaths);

    return () => {
      window.removeEventListener("resize", debouncedCalculatePaths);
      clearTimeout(animationTimer);
    };
  }, [calculatePaths]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 100 }}
      animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col p-10 z-[1] overflow-hidden"
    >
      {/* Background Iridescence */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full"
      >
        <Iridescence
          color={[0.1, 0.8, 1]}
          mouseReact={false}
          amplitude={0.15}
          speed={0.2}
        />
      </motion.div>

      {/* Connecting Lines SVG */}
      <AnimatePresence>
        {isVisible && (
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Simplified static dotted line */}
            <path
              d={paths.dotted}
              className="stroke-white/30"
              strokeWidth="1"
              fill="none"
              strokeDasharray="2 2"
            />

            {/* Curved line remains the same */}
            <motion.path
              d={paths.curved}
              className="stroke-white/40"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <motion.circle
              cx={circlePosition.x}
              cy={circlePosition.y}
              r="4"
              className="fill-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Active Clients Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 3.2 }}
      >
        <GlassCard
          ref={activeClientsRef}
          className="absolute top-16 left-2 w-48 h-28 p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
        >
          <motion.div
            className="absolute top-2 left-2"
            initial={{ opacity: 0 }}
            animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
          >
            <span className="text-3xl font-bold font-grotesk text-white">
              250+
            </span>
            <span className="text-white/80 block font-grotesk text-base">
              Active clients
            </span>
          </motion.div>
          <div className="mt-12 flex items-center space-x-2">
            <div className="flex -space-x-2">
              <motion.div
                className="w-6 h-6 rounded-full bg-blue-400"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="w-6 h-6 rounded-full bg-blue-500"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <motion.button
              className="text-white font-open-sans bg-blue-500 px-3 py-1 rounded-full text-xs hover:bg-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Nayona Box */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={
          startAnimation
            ? { opacity: 1, rotate: 0 }
            : { opacity: 0, rotate: -10 }
        }
        transition={{ duration: 0.8, delay: 3.6 }}
        className="absolute right-4 top-32 rounded-3xl w-[20%] aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute inset-0 w-full h-full">
          <Iridescence
            color={[0, 1, 0.7]}
            mouseReact={true}
            amplitude={0.15}
            speed={0.4}
          />
        </div>
        <span className="absolute text-white text-xl font-serif italic">
          Nayona
        </span>
      </motion.div>

      {/* Animated Beam */}
      <motion.div
        ref={animatedBeamRef}
        initial={{ opacity: 0, scale: 1 }}
        animate={
          startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 3.8 }}
        className="absolute backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg bg-white/10 top-52 left-[50%] w-[255px] h-[35%] flex flex-col justify-between overflow-hidden hover:border-white/30 transition-colors duration-300"
      >
        <AnimatedBeamDemo />
      </motion.div>

    
      {/* Bulletin Carousel */}
      <motion.div
        ref={carouselRef}
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 4 }}
        className="absolute bottom-14 left-0 w-full"
      >
        <div className="w-full flex items-center justify-center">
          <BulletinCarousel items={item} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RightSection;