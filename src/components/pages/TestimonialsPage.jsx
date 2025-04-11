import React, { useState } from 'react';
import Heading from '../ui/Heading';
import { Quote, Star, BarChart, Clock, Award, ArrowRight } from 'lucide-react';
import member from "../../assets/images/clien1.webp";
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../ui/Breadcrumb';
function TestimonialsPage() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about/us' },
    { label: 'Testimonials', path: '/about/testimonials' }
  ];

  // Add statistics section data
  const statistics = [
    { icon: Star, value: "98%", label: "Client Satisfaction" },
    { icon: BarChart, value: "60%", label: "Average Efficiency Gain" },
    { icon: Clock, value: "40%", label: "Faster Implementation" },
    { icon: Award, value: "200+", label: "Success Stories" },
  ];

  // Enhanced testimonials with more details
  const testimonials = [
    {
      name: "David Anderson",
      position: "CFO",
      company: "Global Tech Solutions",
      image: member,
      quote: "Working with Nayona Consultancy transformed our financial planning process. Their Oracle EPM implementation reduced our monthly closing cycle by 60%.",
      industry: "Technology",
      results: ["60% faster closing cycle", "30% cost reduction", "Improved accuracy by 45%"],
      projectScope: "Enterprise-wide EPM Implementation"
    },
    {
      name: "Emily Rodriguez",
      position: "Finance Director",
      company: "Healthcare Innovations",
      image: member,
      quote: "The team's expertise in healthcare finance metrics and Oracle EPM made our digital transformation seamless and highly effective.",
      industry: "Healthcare"
    },
    {
      name: "James Wilson",
      position: "VP of Operations",
      company: "Manufacturing Excellence",
      image:member,
      quote: "Their deep understanding of manufacturing processes combined with technical expertise delivered exceptional results for our planning systems.",
      industry: "Manufacturing"
    },
    // Add more testimonials as needed
  ];

  const [filter, setFilter] = useState('All');
  const industries = ['All', ...new Set(testimonials.map(t => t.industry))];

  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.industry === filter);

  return (
    <section className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100">

<div className="max-w-7xl mx-auto px-4 lg:px-12 py-2 mt-28">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Hero Section */}
      <div className="mt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-heading-2 font-grotesk text-on-dark mb-6">
              Real Results, Real <span className="text-primary-300">Impact</span>
            </h1>
            <p className="text-secondary-300 text-lg">
              Discover how our Oracle EPM solutions have transformed businesses across industries, 
              delivering measurable results and lasting value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background-100/5 rounded-xl border border-secondary-500/30">
                <stat.icon className="w-8 h-8 text-primary-300 mx-auto mb-4" />
                <h3 className="text-heading-3 font-grotesk text-primary-300 mb-2">{stat.value}</h3>
                <p className="text-secondary-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24">
        <div className="mb-16">
          <Heading
            title="Client Success Stories"
            description="What Our Clients Say"
          />
          <p className="text-secondary-300 max-w-3xl mx-auto text-center mt-6">
            From Fortune 500 companies to growing enterprises, we've helped organizations 
            across the globe achieve their financial transformation goals.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
          {['All', ...new Set(testimonials.map(t => t.industry))].map((industry) => (
            <button
              key={industry}
              onClick={() => setFilter(industry)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === industry
                  ? 'bg-primary-300 text-background-100 shadow-lg'
                  : 'bg-background-200/30 text-secondary-300 hover:bg-background-200/50'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-200/30 rounded-xl p-8 backdrop-blur-sm border border-secondary-500/30 hover:border-primary-300/50 transition-all duration-300"
            >
              <Quote className="text-primary-300/20" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-300/30"
                />
                <div>
                  <h3 className="text-heading-5 font-grotesk text-primary-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-secondary-200 text-sm">{testimonial.position}</p>
                  <p className="text-secondary-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-secondary-300 italic text-lg mb-6">"{testimonial.quote}"</p>
              
              {testimonial.results && (
                <div className="mb-6">
                  <h4 className="text-primary-300 font-medium mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-secondary-300">
                        <span className="w-1.5 h-1.5 bg-primary-300 rounded-full"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary-500/30">
                <span className="text-xs px-3 py-1 rounded-full bg-primary-300/10 text-primary-300">
                  {testimonial.industry}
                </span>
                {testimonial.projectScope && (
                  <span className="text-sm text-secondary-300">
                    {testimonial.projectScope}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-background-200/30 py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-heading-3 font-grotesk text-on-dark mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-secondary-300 text-lg mb-12 max-w-2xl mx-auto">
            Join these success stories and discover how our Oracle EPM expertise can drive your business forward. Schedule a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              text="Schedule a Consultation" 
              theme="dark"
              onClick={() => navigate('/contact')}
              icon={<ArrowRight className="w-5 h-5" />}
            />
            <Button 
              text="View Our Services" 
              theme="dark" 
              variant="outline"
              onClick={() => navigate('/services')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPage;