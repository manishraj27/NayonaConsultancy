import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our financial forecasting process used to take weeks. After implementing Oracle EPM with this team, we've cut that time by 75% and improved accuracy dramatically.",
    name: "Jane Doe",
    position: "CFO, Global Enterprise",
    initials: "JD",
  },
  {
    quote:
      "The tailored implementation approach ensured our unique business requirements were met. The ROI has exceeded our expectations significantly.",
    name: "Robert Smith",
    position: "Finance Director, Tech Solutions Inc.",
    initials: "RS",
  },
  {
    quote:
      "Their ongoing support has been invaluable. The team is responsive, knowledgeable, and has helped us optimize our EPM solution as our business grows.",
    name: "Sarah Johnson",
    position: "VP of Finance, Healthcare Innovations",
    initials: "SJ",
  },
];

export default function ServiceTestimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-cycle testimonials every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]); // Re-run effect when index changes

  return (
    <motion.div
      className="w-full mt-24 bg-background-200/20 p-8 rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-heading-2 text-on-dark font-grotesk text-center mb-6">
        Client Success Stories
      </h1>
      <div className="mt-8 relative">
        <div className="absolute -left-4 top-0 text-secondary-300/30">
          <Quote size={48} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="pl-12 pr-4"
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-on-dark italic text-body-1">{testimonials[index].quote}</p>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-secondary-300/20 flex items-center justify-center">
                <span className="text-secondary-300 font-bold">{testimonials[index].initials}</span>
              </div>
              <div className="ml-4">
                <p className="text-on-dark font-medium">{testimonials[index].name}</p>
                <p className="text-on-dark/70 text-sm">{testimonials[index].position}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className=" justify-between mt-6">
          <motion.button
            onClick={prevTestimonial}
            className="text-secondary-500 hover:text-secondary-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="text-secondary-500 hover:text-secondary-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}