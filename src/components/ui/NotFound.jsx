import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ballpit from "../../blocks/Backgrounds/Ballpit/Ballpit";
import Button from "./Button";

function NotFound() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Mobile threshold at 640px (sm)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative w-full min-h-screen bg-background-100 dark-section rounded-b-3xl flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Ballpit
          count={isMobile ? 30 : 60}         // Fewer balls on mobile
          colors={[0xC7D2FE, 0x6366F1, 0x2C5282]} // Accent gradient + deep blue
          gravity={0.8}
          friction={0.99}
          wallBounce={0.9}
          followCursor={false}
          maxY={10}
          minSize={isMobile ? 0.3 : 0.5}     // Smaller min size on mobile
          maxSize={isMobile ? 0.8 : 1.5}     // Smaller max size on mobile
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 py-12 lg:px-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-8xl text-secondary-200 font-open-sans tracking-widest font-bold drop-shadow-lg"
          variants={itemVariants}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-heading-3 text-accent-300 font-grotesk font-semibold mt-6 drop-shadow-md"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-body-1 text-on-dark mt-6 max-w-md mx-auto my-8"
          variants={itemVariants}
        >
          Oops! It seems this page has vanished into the void. Let’s get you
          back on track.
        </motion.p>
        <motion.a href="/" variants={buttonVariants} whileHover="hover">
          <Button text="Return Home" theme="dark" />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default NotFound;