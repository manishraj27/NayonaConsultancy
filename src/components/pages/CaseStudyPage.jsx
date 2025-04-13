import React from 'react';
import Heading from '../ui/Heading';
import { Building2, BarChart, Clock, Award, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../ui/Breadcrumb';

function CaseStudyPage() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Resources', path: '/resources/blogs' },
    { label: 'Case Studies', path: '/resources/cases' }
  ];

  const caseStudies = [
    {
      title: "Global Financial Services Transformation",
      company: "Fortune 500 Financial Institution",
      industry: "Financial Services",
      challenge: "Manual consolidation processes taking 15+ days, with significant error rates and compliance risks.",
      solution: "Implemented Oracle FCCS with custom automation workflows and real-time reporting dashboards.",
      results: [
        "Reduced closing cycle by 70%",
        "99.9% accuracy in financial reporting",
        "Saved $2M annually in operational costs",
        "Improved compliance monitoring by 85%"
      ],
      tags: ["Oracle FCCS", "Financial Services", "Process Automation"]
    },
    {
      title: "Healthcare Provider Planning Optimization",
      company: "Leading Healthcare Network",
      industry: "Healthcare",
      challenge: "Disconnected planning processes across 50+ facilities causing inefficient resource allocation.",
      solution: "Deployed Oracle EPBCS with integrated workforce and capital planning modules.",
      results: [
        "40% reduction in planning cycle time",
        "Improved forecast accuracy by 65%",
        "Optimized staffing costs saving $5M annually",
        "Real-time visibility across all facilities"
      ],
      tags: ["Oracle EPBCS", "Healthcare", "Planning"]
    },
    {
      title: "Manufacturing Cost Management Revolution",
      company: "Global Manufacturing Enterprise",
      industry: "Manufacturing",
      challenge: "Complex cost allocation processes and lack of profitability insights across product lines.",
      solution: "Implemented Oracle PCMCS with advanced cost modeling and analytics.",
      results: [
        "50% improvement in cost allocation accuracy",
        "Identified 30% cost reduction opportunities",
        "Increased profit margins by 15%",
        "Real-time profitability analysis"
      ],
      tags: ["Oracle PCMCS", "Manufacturing", "Cost Management"]
    }
  ];

  return (
    <section className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-2 mt-28">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="py-12">
          <Heading
            title="Client Success Stories"
            description="Case Studies"
          />
          
          <div className="mt-12 grid gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-background-200/30 rounded-2xl p-8 hover:bg-background-200/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-secondary-300 mb-4">
                      <Building2 className="w-5 h-5" />
                      <span className="text-sm">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-heading-4 text-on-dark mb-2">{study.title}</h3>
                    <p className="text-secondary-300 mb-6">{study.company}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-primary-300 mb-2">Challenge</h4>
                        <p className="text-secondary-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-primary-300 mb-2">Solution</h4>
                        <p className="text-secondary-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <h4 className="text-primary-300 mb-4">Key Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-secondary-300">
                          <Award className="w-4 h-4 text-primary-300" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-background-300/30 rounded-full text-xs text-secondary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyPage;