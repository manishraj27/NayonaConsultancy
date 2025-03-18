import React from "react";
import Heading from "../ui/Heading";
import { Card, Carousel } from "../magicui/Carousel-Card";
import oracleEPMImplementation from "../../assets/images/hpserviceimg/OracleEPMImplementation.webp";
import financialPlanningAnalysis from "../../assets/images/hpserviceimg/FinancialPlanningAnalysis.webp";
import dataIntegrationManagement from "../../assets/images/hpserviceimg/DataIntegrationManagement.webp";
import cloudMigrationServices from "../../assets/images/hpserviceimg/CloudMigrationServices.webp";
import customReportingSolutions from "../../assets/images/hpserviceimg/CustomReportingSolutions.webp";  
import supportTrainingServices from "../../assets/images/hpserviceimg/support.webp";
import { SeriveCardContent } from "../magicui/SeriveCardContent";


export function HomePageServiceSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-24">
      <div className="w-full px-4 lg:px-12">
        <Heading
          title="Our Services"
          description="Explore Services"
        />
      </div>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Implementation",
    title: "Oracle EPM Implementation",
    message: "End-to-end implementation services for Oracle EPM applications, including Planning, Financial Consolidation, Profitability and Cost Management, and more.",
    src: oracleEPMImplementation,
    content: <SeriveCardContent serviceType="Implementation" />,
  },
  {
    category: "Financial Solutions",
    title: "Financial Planning & Analysis",
    message: "Streamline budgeting, forecasting, and reporting with our advanced financial planning and analysis solutions powered by Oracle EPM.",
    src: financialPlanningAnalysis, 
    content: <SeriveCardContent serviceType="Financial Solutions" />,
  },
  {
    category: "Data Management",
    title: "Data Integration & Management",
    message: "Comprehensive data integration and management solutions to ensure your Oracle EPM applications have access to accurate and timely data.",
    src: dataIntegrationManagement,
    content: <SeriveCardContent serviceType="Data Management" />,
  },
  {
    category: "Cloud Services",
    title: "Cloud Migration Services",
    message: "Seamless migration from on-premises EPM applications to Oracle EPM Cloud with minimal disruption to your business operations.",
    src: cloudMigrationServices,
    content: <SeriveCardContent serviceType="Cloud Services" />,
  },
  {
    category: "Reporting",
    title: "Custom Reporting Solutions",
    message: "Tailored reporting solutions that provide actionable insights and support informed decision-making across your organization.",
    src: customReportingSolutions,
    content: <SeriveCardContent serviceType="Reporting" />,
  },
  {
    category: "Support",
    title: "Training & Support",
    message: "Comprehensive training programs and ongoing support services to ensure you get the most value from your Oracle EPM investment.",
    src: supportTrainingServices,
    content: <SeriveCardContent serviceType="Support" />,
  },
];

