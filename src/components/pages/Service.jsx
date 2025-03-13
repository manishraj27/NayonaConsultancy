import React from "react";
import ServicesSection from "../ui/ServicesSection";
import Heading from "../ui/Heading";

function Service() {
  return (
    <section
      id="service"
      aria-label="service"
      className="rounded-b-3xl overflow-visible lg:px-12 px-4 w-full lg:py-52 py-64 min-h-screen dark-section bg-background-100 flex flex-col items-center justify-center"
    >
      {/* Introduction Section */}
      <div className="w-full text-left min-h-screen">
        <Heading title="Services We Deal With" description="Enterprise Services" />
        <div className="mt-4 w-full md:w-2/3">
          <span className="text-secondary-300 lg:mx-16 lg:w-full text-body-1 font-grotesk text-pretty block">
            Optimize, Automate, Elevate – Oracle EPM Solutions for Your Business Needs.
          </span>
          <p className="text-on-dark text-body-2 font-open-sans mt-4">
            Our Oracle EPM services are designed to streamline your financial processes, improve decision-making, and ensure compliance. Below, we outline how we implement these solutions to deliver maximum value to your business.
          </p>
        </div>

 
      </div>

        

      {/* Services Section */}
      <div className="w-full">
        <ServicesSection />
      </div>

      {/* Implementation Methodology Section */}
      <div className="w-full mt-24">
        <Heading title="Our Implementation Methodology" description="How We Deliver Success" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Discovery & Assessment</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              We begin by understanding your business needs, pain points, and goals. Our team conducts a thorough assessment of your current processes and systems to identify areas for improvement.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Solution Design</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Based on the assessment, we design a tailored Oracle EPM solution that aligns with your business objectives. This includes defining workflows, data models, and integration points.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Development & Configuration</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Our experts configure the Oracle EPM platform to meet your specific requirements. We develop custom scripts, workflows, and dashboards to ensure seamless functionality.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Testing & Validation</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              We rigorously test the solution to ensure it meets your business needs. This includes unit testing, integration testing, and user acceptance testing (UAT).
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Deployment & Go-Live</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Once validated, we deploy the solution in your production environment. Our team provides full support during the go-live phase to ensure a smooth transition.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Training & Support</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              We provide comprehensive training to your team and offer ongoing support to ensure you get the most out of your Oracle EPM solution.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies & Tools Section */}
      <div className="w-full mt-24">
        <Heading title="Technologies & Tools We Use" description="Our Tech Stack" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Oracle EPM Cloud</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For financial consolidation, planning, and reporting.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Oracle ERP Cloud</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For seamless integration with financial systems.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">SQL & PL/SQL</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For custom database queries and scripting.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Python</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For data analysis and automation tasks.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Power BI</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For advanced data visualization and analytics.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg text-center">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">REST APIs</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              For integrating Oracle EPM with other systems.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full mt-24">
        <Heading title="Benefits of Our Oracle EPM Solutions" description="Why Choose Us?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Improved Efficiency</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Automate repetitive tasks and streamline workflows to save time and resources.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Enhanced Accuracy</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Reduce errors and ensure data integrity with robust validation and reconciliation processes.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Scalability</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Our solutions grow with your business, ensuring long-term success.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Real-Time Insights</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Access real-time data and analytics for better decision-making.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Compliance & Security</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Ensure compliance with regulatory standards and protect sensitive data.
            </p>
          </div>
          <div className="bg-secondary-700 bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-on-dark text-heading-4 font-grotesk font-medium">Cost Savings</h3>
            <p className="text-on-dark text-body-2 font-open-sans mt-2">
              Optimize resource allocation and reduce operational costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;