import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FeaturedCaseStudies = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  
  const caseStudies = [
    {
      title: "Global Financial Services Transformation",
      company: "Fortune 500 Bank",
      problem: "15-day manual consolidation process with high error rates",
      solution: "Implemented Oracle FCCS with automated workflows",
      results: [
        "60% faster closing cycle",
        "99.9% reporting accuracy",
        "$2M annual savings"
      ],
      industry: "Financial Services"
    },
    {
      title: "Manufacturing Cost Analysis Optimization",
      company: "Leading Automotive Manufacturer",
      problem: "Complex cost allocation across 50+ global plants with manual reconciliation",
      solution: "Oracle PCMCS implementation with integrated planning and reporting",
      results: [
        "75% reduction in allocation time",
        "Real-time cost visibility",
        "30% improvement in forecast accuracy"
      ],
      industry: "Manufacturing"
    },
    {
      title: "Retail Planning System Modernization",
      company: "Global Retail Chain",
      problem: "Disconnected planning processes across 1000+ stores and e-commerce",
      solution: "Oracle Cloud EPM with integrated financial and operational planning",
      results: [
        "40% faster planning cycles",
        "85% reduction in manual data entry",
        "Improved inventory optimization"
      ],
      industry: "Retail"
    }
  ];

  return (
    <section className="pt-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <Heading 
          title="Real Impact, Real Results" 
          description="Success Stories"
        />
        
        {/* Mobile Tab Navigation */}
        <div className="mt-8 flex overflow-x-auto gap-2 md:hidden scrollbar-hide">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === index
                  ? "bg-accent-300 text-background-100"
                  : "bg-secondary-600 bg-opacity-30 text-secondary-300 hover:bg-secondary-500"
              }`}
            >
              {study.industry}
            </button>
          ))}
        </div>

        {/* Mobile View - Single Card */}
        <div className="mt-6 md:hidden">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-secondary-600 bg-opacity-10"
          >
            <span className="text-accent-300 text-sm">{caseStudies[activeTab].industry}</span>
            <h3 className="text-heading-4 text-primary-300 mt-2 font-grotesk">{caseStudies[activeTab].title}</h3>
            <p className="text-secondary-300 mt-1">{caseStudies[activeTab].company}</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-body-2 text-primary-200 font-medium">Challenge:</h4>
                <p className="text-secondary-300">{caseStudies[activeTab].problem}</p>
              </div>
              <div>
                <h4 className="text-body-2 text-primary-200 font-medium">Solution:</h4>
                <p className="text-secondary-300">{caseStudies[activeTab].solution}</p>
              </div>
              <div>
                <h4 className="text-body-2 text-primary-200 font-medium">Results:</h4>
                <ul className="mt-2 space-y-2">
                  {caseStudies[activeTab].results.map((result, idx) => (
                    <li key={idx} className="text-secondary-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-300 rounded-full" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-secondary-600 bg-opacity-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="text-accent-300 text-sm">{study.industry}</span>
              <h3 className="text-heading-4 text-primary-300 mt-2 font-grotesk">{study.title}</h3>
              <p className="text-secondary-300 mt-1">{study.company}</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-body-2 text-primary-200 font-medium">Challenge:</h4>
                  <p className="text-secondary-300">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-body-2 text-primary-200 font-medium">Solution:</h4>
                  <p className="text-secondary-300">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-body-2 text-primary-200 font-medium">Results:</h4>
                  <ul className="mt-2 space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-secondary-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-300 rounded-full" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/resources/cases')}
            variant="secondary"
            className="group"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;