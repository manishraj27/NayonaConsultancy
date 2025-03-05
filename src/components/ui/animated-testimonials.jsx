"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";
import { cn } from './../../lib/utils';

const Image = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  objectFit = "cover",
  loading = "lazy",
  draggable = true,
  onClick,
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      draggable={draggable}
      className={cn(
        "transition-all duration-300", 
        className
      )}
      style={{ objectFit }}
      loading={loading}
      onClick={onClick}
      {...props}
    />
  );
};

export default Image;

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className="max-w-sm md:max-w-full mx-auto lg:mx-0 lg:ml-auto antialiased font-sans py-20 bg-background-100"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <div className="relative h-72 w-64">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-[40px] object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {/* Name */}
            <h3 className="text-heading-4 font-grotesk font-bold text-on-dark">
              {testimonials[active].name}
            </h3>
            {/* Designation */}
            <p className="text-body-4 font-open-sans text-secondary-300">
              {testimonials[active].designation}
            </p>
            {/* Quote */}
            <motion.p className="text-body-2 font-open-sans text-on-dark mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-6 pt-12">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-primary-200 flex items-center justify-center group/button hover:bg-primary-300 transition-colors duration-300"
            >
              <ArrowLeft
                className="h-5 w-5 text-on-dark group-hover/button:rotate-12 transition-transform duration-300"
              />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-primary-200 flex items-center justify-center group/button hover:bg-primary-300 transition-colors duration-300"
            >
              <ArrowRight
                className="h-5 w-5 text-on-dark group-hover/button:-rotate-12 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};