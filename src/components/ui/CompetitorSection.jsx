import React, { useState } from 'react';
import Heading from './Heading';
import Cal from '@calcom/embed-react';
import CalComIntegration from './CalComIntegration';

const CompetitorSection = () => {
  const [activeCompetitor, setActiveCompetitor] = useState("Nayona Consultancy");
  
  const competitors = [
    {
      name: "Nayona Consultancy",
      serviceFocus: "Provides tailored Oracle EPM consulting with personalized solutions.",
      customization: "Emphasizes bespoke solutions tailored to client needs.",
      integration: "Specializes in seamless integration with Oracle systems.",
      userExperience: "Prioritizes user-friendly interfaces tailored to client preferences.",
      support: "Offers personalized support and comprehensive training programs.",
      scalability: "Delivers solutions designed to scale with business growth.",
      compliance: "Ensures compliance leveraging expertise in Oracle EPM systems."
    },
    {
      name: "OneStream",
      serviceFocus: "Offers a unified finance platform integrating financial and operational data with AI.",
      customization: "Offers a unified platform configurable for financial processes.",
      integration: "Unifies core financial functions for various processes.",
      userExperience: "Streamlined financial processes enhancing user productivity.",
      support: "Provides customer support, training, and consulting services.",
      scalability: "Extensible platform adapting to evolving business needs.",
      compliance: "Features support for financial compliance and reporting."
    },
    {
      name: "Anaplan",
      serviceFocus: "Delivers a connected planning platform infused with AI for scenario planning.",
      customization: "Provides a flexible modeling platform allowing customization.",
      integration: "Connects planning data from multiple sources for a unified business view.",
      userExperience: "Intuitive planning experience with AI-driven scenario planning.",
      support: "Offers support and training resources for maximizing platform benefits.",
      scalability: "Scalable platform handling increasing data volumes and complexity.",
      compliance: "Solutions helping organizations comply with financial regulations."
    },
    {
      name: "CCH Tagetik",
      serviceFocus: "Provides a comprehensive EPM solution integrating financial and operational planning.",
      customization: "Offers pre-configured templates for faster deployment.",
      integration: "Integrates with various ERP systems and offers advanced ETL capabilities.",
      userExperience: "User-friendly interface with prebuilt templates.",
      support: "Provides customer service and training for optimal deployment.",
      scalability: "Scalable solution accommodating more complex needs.",
      compliance: "Supports regulatory compliance, including ESG reporting."
    }
  ];

  // Feature categories
  const categories = [
    { id: "serviceFocus", name: "Service Focus" },
    { id: "customization", name: "Customization" },
    { id: "integration", name: "Integration Capabilities" },
    { id: "userExperience", name: "User Experience" },
    { id: "support", name: "Support & Training" },
    { id: "scalability", name: "Scalability" },
    { id: "compliance", name: "Regulatory Compliance" }
  ];

  return (
    <section
      id="competitors"
      aria-label="Competitors"
      className="relative min-h-screen w-full py-16 md:py-24 bg-background-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 md:pb-12">
          <Heading 
            title="The Premier Choice for Oracle EPM" 
            description="Why Industry Leaders Choose Us" 
          />
          <p className="mt-4 text-body-1 text-on-dark/70 max-w-3xl">
            See how Nayona Consultancy delivers superior value compared to other providers in the markert. Our tailored solutions, personalized support, and deep expertise in Oracle EPM set us apart from the competition.
          </p>
        </div>

        {/* Desktop view - visible only on md and up */}
        <div className="hidden md:block mt-8 overflow-hidden">
          <div className="relative overflow-x-auto shadow-lg rounded-xl border border-secondary-600/20">
            {/* Header row with company names */}
            <div className="flex border-b border-secondary-600/20 bg-secondary-700/10 backdrop-blur-sm">
              <div className="w-1/4 p-6 font-bold text-on-dark font-grotesk">
                Features
              </div>
              {competitors.map((competitor) => (
                <div 
                  key={competitor.name} 
                  className={`w-1/4 p-4 text-center font-semibold ${competitor.name === "Nayona Consultancy" ? "bg-primary-400/10" : ""}`}
                >
                  <div className={`py-2 px-1 rounded-lg ${competitor.name === "Nayona Consultancy" ? "bg-primary-400 text-light-100" : "bg-secondary-600/20 text-on-dark"}`}>
                    {competitor.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {categories.map((category) => (
              <div key={category.id} className="flex border-b border-secondary-600/20 hover:bg-secondary-700/10 transition-colors duration-200">
                <div className="w-1/4 p-6 font-medium text-on-dark bg-secondary-700/5 font-grotesk">
                  {category.name}
                </div>
                {competitors.map((competitor) => (
                  <div 
                    key={`${competitor.name}-${category.id}`} 
                    className={`w-1/4 p-4 text-body-2 ${competitor.name === "Nayona Consultancy" ? "bg-primary-400/5" : ""}`}
                  >
                    <div className="flex items-start">
                      {competitor.name === "Nayona Consultancy" && (
                        <span className="inline-flex items-center justify-center rounded-full bg-primary-400 px-2.5 py-0.5 text-light-100 mr-2 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                      <p className="text-on-dark/80">{competitor[category.id]}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view - card-based approach */}
        <div className="md:hidden mt-6">
          {/* Competitor selector */}
          <div className="flex overflow-x-auto pb-4 space-x-2 scrollbar-hide">
            {competitors.map((competitor) => (
              <button
                key={competitor.name}
                onClick={() => setActiveCompetitor(competitor.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-body-4 font-medium transition-colors ${
                  activeCompetitor === competitor.name
                    ? "bg-primary-400 text-light-100"
                    : "bg-secondary-600/20 text-on-dark hover:bg-secondary-600/30"
                }`}
              >
                {competitor.name}
              </button>
            ))}
          </div>

          {/* Active competitor card with features */}
          <div className="mt-6 bg-secondary-700/10 rounded-xl shadow-lg overflow-hidden border border-secondary-600/20 backdrop-blur-sm">
            <div className={`p-4 ${activeCompetitor === "Nayona Consultancy" ? "bg-primary-400 text-light-100" : "bg-secondary-600/20 text-on-dark"}`}>
              <h3 className="text-body-1 font-bold font-grotesk">{activeCompetitor}</h3>
              {activeCompetitor === "Nayona Consultancy" && (
                <span className="inline-block mt-1 px-2 py-1 bg-primary-300 text-light-100 text-body-5 rounded-full font-mono">
                  Recommended Choice
                </span>
              )}
            </div>
            
            <div className="p-0">
              {categories.map((category) => {
                const activeCompetitorData = competitors.find(c => c.name === activeCompetitor);
                return (
                  <div key={category.id} className="border-b border-secondary-600/20 last:border-0">
                    <div className="p-4">
                      <div className="text-body-3 font-semibold text-on-dark/70 font-grotesk">{category.name}</div>
                      <div className="mt-2 text-body-3 text-on-dark/80">
                        {activeCompetitorData && (
                          <div className="flex items-start">
                            {activeCompetitor === "Nayona Consultancy" && (
                              <span className="inline-flex items-center justify-center rounded-full bg-primary-400 px-2 py-0.5 text-light-100 mr-2 shrink-0 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                              </span>
                            )}
                            {activeCompetitorData[category.id]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compare snippet */}
          <div className="mt-6 p-4 bg-secondary-700/10 rounded-lg border border-secondary-600/20 backdrop-blur-sm">
            <h4 className="font-medium text-on-dark font-grotesk">Why choose Nayona Consultancy?</h4>
            <div className="mt-2 text-body-3 text-on-dark/70 space-y-2">
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Tailored solutions vs. one-size-fits-all approaches
              </p>
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Personalized support with dedicated consultants
              </p>
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Specialized Oracle EPM expertise
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
         <CalComIntegration theme="dark" />
        </div>
      </div>
    </section>
  );
};

export default CompetitorSection;