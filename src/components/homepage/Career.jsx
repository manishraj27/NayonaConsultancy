
import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { Briefcase, Users, Heart, Award, ArrowRight, Globe, BookOpen, Target, ChevronRight, Sparkles, Rocket } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import careerHeroImage from "../../assets/images/ABOUTUSMEETING.webp"
const Career = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment that fosters innovation and teamwork.",
      highlight: "200+ Team Members Globally"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, wellness programs, and work-life balance initiatives.",
      highlight: "Complete Healthcare Coverage"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning, career development paths, and mentorship programs.",
      highlight: "Regular Promotions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Work on projects that transform businesses across the globe using cutting-edge technologies.",
      highlight: "20+ Countries"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Access to training resources, certification support, and skill development programs.",
      highlight: "100% Training Support"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Performance Recognition",
      description: "Competitive compensation, performance bonuses, and recognition programs.",
      highlight: "Quarterly Rewards"
    }
  ];

  return (
    <section
      id="career"
      aria-label="career"
      className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
    >
      <div className="max-w-7xl mx-auto mt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <Heading
            title="Build Your Career With Us"
            description="JOIN OUR TEAM"
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-primary-300 mb-4 flex items-center gap-3">
                  Shape the Future 
                  <Sparkles className="w-6 h-6" />
                </h3>
                <p className="text-secondary-300 text-xl leading-relaxed">
                  At Nayona Consultancy, we're building the future of enterprise performance management. Join our team of innovators, problem-solvers, and industry experts.
                </p>
              </motion.div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 bg-secondary-700/50 p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-300/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-on-dark font-semibold">Global Reach</h4>
                    <p className="text-secondary-300">Remote-first culture with global opportunities</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 bg-secondary-700/50 p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-300/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-on-dark font-semibold">Fast Growth</h4>
                    <p className="text-secondary-300">Rapid career advancement opportunities</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 bg-secondary-700/50 p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-300/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-on-dark font-semibold">Inclusive Culture</h4>
                    <p className="text-secondary-300">Diverse and supportive work environment</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
  className="hidden lg:block relative"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3 }}
>
  <div className="relative bg-secondary-700 p-8 rounded-xl">
    <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
    <div className="relative z-10">
      <img 
        src={careerHeroImage} 
        alt="Career at Nayona" 
        className="w-full h-auto rounded-lg mb-6"
      />

      <Button
        text="Explore Opportunities"
        icon={ArrowRight}
        iconPosition="right"
        theme="dark"
        className="w-full"
      />
    </div>
  </div>
</motion.div>
          </div>
        </motion.div>

        {/* Why Join Us Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-on-dark mb-4">Why Join Nayona Consultancy?</h2>
            <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
              Discover the benefits of being part of our innovative and growing team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-auto">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-3 row-span-2 bg-secondary-700 p-8 rounded-xl hover:bg-secondary-600 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-300/5 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="text-primary-300 mb-6">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-on-dark mb-4">{benefits[0].title}</h3>
                <p className="text-secondary-300 text-xl leading-relaxed mb-6">{benefits[0].description}</p>
                <div className="bg-secondary-600/50 p-4 rounded-xl inline-block">
                  <span className="text-primary-300">{benefits[0].highlight}</span>
                </div>
              </div>
            </motion.div>

            {/* Varied size cards */}
            {benefits.slice(1, 6).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                className={`bg-secondary-700 p-6 rounded-xl hover:bg-secondary-600 transition-all duration-300 group
                  ${index === 0 || index === 1 ? 'md:col-span-3 lg:col-span-3' : 'md:col-span-2'}`}
              >
                <div className="text-primary-300 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-on-dark mb-3">{benefit.title}</h3>
                <p className="text-secondary-300 mb-4">{benefit.description}</p>
                <div className="bg-secondary-600/50 p-2 rounded-lg inline-block">
                  <span className="text-primary-300 text-sm">{benefit.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;