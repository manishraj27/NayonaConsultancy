import React from "react";
import pic from "../../assets/images/ServiceImages/EnterpriseDataManagement.webp";
import Heading from "../ui/Heading";
import { Card, Carousel } from "../magicui/Carousel-Card";

export function HomePageServiceSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-24">
      <div className="w-full px-4 lg:px-12">
        <Heading
          title="Our Services"
          description="Explore Nayona Consultancy's Oracle EPM Solutions"
        />
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const ServiceContent = ({ title }) => {
  // Custom content for each service; you can expand this further
  const contentMap = {
    "Oracle EPM Implementation": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Streamline your business performance with Oracle EPM.
        </span>{" "}
        We provide end-to-end implementation services, from planning to deployment, ensuring your enterprise leverages Oracle’s powerful tools for financial planning, reporting, and analytics.
      </p>
    ),
    "Financial Planning & Analysis": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Optimize your financial strategy.
        </span>{" "}
        Our experts help you harness Oracle EPM for accurate forecasting, budgeting, and scenario analysis to drive informed decision-making.
      </p>
    ),
    "Data Integration & Management": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Seamless data flow for your enterprise.
        </span>{" "}
        We integrate your systems with Oracle EPM, ensuring data consistency, security, and real-time insights across your organization.
      </p>
    ),
    "Cloud Migration Services": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Transition to the cloud with confidence.
        </span>{" "}
        Move your Oracle EPM solutions to the cloud with our expert guidance, minimizing downtime and maximizing scalability.
      </p>
    ),
    "Custom Reporting Solutions": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Tailored insights for your business.
        </span>{" "}
        We design custom reports and dashboards within Oracle EPM to meet your specific reporting needs, enhancing visibility and control.
      </p>
    ),
    "Training & Support": (
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Empower your team with Oracle EPM expertise.
        </span>{" "}
        Our comprehensive training and ongoing support ensure your staff can fully utilize Oracle EPM tools to achieve business goals.
      </p>
    ),
  };

  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      {contentMap[title] || (
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Default content for {title}.
        </p>
      )}
    </div>
  );
};

const data = [
  {
    category: "Implementation",
    title: "Oracle EPM Implementation",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",

    src: pic, // Use specific image if available, e.g., "OracleEPMImplementation.webp"
    content: <ServiceContent title="Oracle EPM Implementation" />,
  },
  {
    category: "Financial Solutions",
    title: "Financial Planning & Analysis",
     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",
    src: pic, // Use specific image if available, e.g., "FinancialPlanning.webp"
    content: <ServiceContent title="Financial Planning & Analysis" />,
  },
  {
    category: "Data Management",
    title: "Data Integration & Management",
     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",
    src: pic, // Already fits this category
    content: <ServiceContent title="Data Integration & Management" />,
  },
  {
    category: "Cloud Services",
    title: "Cloud Migration Services",
     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",
    src: pic, // Use specific image if available, e.g., "CloudMigration.webp"
    content: <ServiceContent title="Cloud Migration Services" />,
  },
  {
    category: "Reporting",
    title: "Custom Reporting Solutions",
     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",
    src: pic, // Use specific image if available, e.g., "CustomReporting.webp"
    content: <ServiceContent title="Custom Reporting Solutions" />,
  },
  {
    category: "Support",
    title: "Training & Support",
     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure explicabo adipisci? Aut dicta repudiandae aliquam, beatae illum, ipsa minima laudantium voluptate nostrum dolore ex veritatis! ",
    src: pic, // Use specific image if available, e.g., "TrainingSupport.webp"
    content: <ServiceContent title="Training & Support" />,
  },
];