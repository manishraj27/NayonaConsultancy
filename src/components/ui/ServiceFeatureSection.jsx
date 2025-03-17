import { HoverEffect } from "./card-hover-effect";

// const items = [
//   {
//     title: "Project Management",
//     description: "Manage your projects efficiently with our intuitive tools.",

//   },
//   {
//     title: "Team Collaboration",
//     description: "Enhance teamwork with seamless communication and file sharing.",

//   },
//   {
//     title: "Analytics & Insights",
//     description: "Gain valuable insights with real-time analytics and reports.",

//   },
//   {
//     title: "Security & Compliance",
//     description: "Ensure data security with advanced compliance features.",

//   },
//   {
//     title: "Customer Support",
//     description: "Get 24/7 support from our dedicated team of experts.",

//   },
//   {
//     title: "Integrations",
//     description: "Connect with third-party services for enhanced productivity.",

//   },
// ];

const implementationMethodology = [
  {
    title: "Assessment & Planning",
    description:
      "We assess business needs and create a roadmap for seamless Oracle EPM implementation.",
  },
  {
    title: "Design & Architecture",
    description:
      "We design a scalable EPM structure optimized for data integration and security.",
  },
  {
    title: "Configuration & Development",
    description:
      "Customizing Oracle EPM modules to fit your financial planning and reporting needs.",
  },
  {
    title: "Data Integration & Migration",
    description:
      "Seamless migration of financial and operational data with high accuracy.",
  },
  {
    title: "Testing & Validation",
    description:
      "Rigorous testing ensures reliability, accuracy, and business requirement compliance.",
  },
  {
    title: "Training & Knowledge Transfer",
    description:
      "Empowering teams with hands-on training for effective Oracle EPM usage.",
  },
  {
    title: "Deployment & Go-Live",
    description:
      "Structured deployment with minimal disruptions and proactive monitoring.",
  },
  {
    title: "Post-Implementation Support",
    description:
      "Ongoing optimization and support to maximize Oracle EPM value.",
  },
  {
    title: "Scalability & Future Optimization",
    description: "Ensuring the solution evolves with business growth and technological advancements.",
  },
];

export default function ServiceFeatureSection() {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <HoverEffect items={implementationMethodology} className="gap-6" />
    </section>
  );
}
