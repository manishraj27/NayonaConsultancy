import { motion } from "framer-motion";

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <div className="relative py-16 px-8 overflow-hidden bg-white">
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // className="absolute inset-0 bg-gradient-to-br  z-0" 
      />
      
      <motion.div 
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div className="space-y-8">
            <motion.div 
              variants={fadeInUp}
              className="space-y-4"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                Oracle EPM Experts
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Transform Your Financial Planning with Oracle EPM
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600"
              >
                Optimize your business performance with Nayona's expert Oracle Enterprise Performance Management consulting services
              </motion.p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition-colors duration-200"
              >
                Schedule Consultation
                <span className="ml-2">→</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-2xl font-semibold hover:bg-white transition-colors duration-200"
              >
                View Our Services
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={fadeInUp}
              className="pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "100+", label: "Clients Served" },
                  { number: "5+", label: "Years Experience" },
                  { number: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    variants={cardVariants}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            variants={staggerChildren}
            className="grid gap-6"
          >
            {[
              {
                title: "Financial Planning",
                description: "Streamline budgeting and forecasting processes",
                icon: "📊"
              },
              {
                title: "Data Integration",
                description: "Seamless integration with existing systems",
                icon: "🔄"
              },
              {
                title: "Expert Guidance",
                description: "Certified Oracle EPM consultants",
                icon: "🏆"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-6 rounded-2xl hover:bg-white transition-colors duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;