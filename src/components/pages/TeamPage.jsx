import React from 'react';
import Heading from '../ui/Heading';
import member from "../../assets/images/clien1.webp";
import { Linkedin, Mail, Award, BookOpen, Users, Target, Briefcase, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

function TeamPage() {
const navigate = useNavigate();

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Oracle EPM Specialist",
      image: member,
      description: "15+ years of experience leading Oracle EPM implementations for Fortune 500 companies. Certified Oracle Cloud Excellence Implementer.",
      expertise: ["Strategic Planning", "Enterprise Solutions", "Digital Transformation"],
      certifications: ["Oracle Cloud Excellence", "PMP", "TOGAF"],
      education: "MBA, Harvard Business School",
      linkedin: "linkedin.com/in/johnsmith",
      email: "john.smith@nayona.com"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Director",
      image: member,
      description: "Former Oracle EPM architect with 12+ years of experience in cloud migrations and enterprise architecture. Led 50+ successful implementations.",
      expertise: ["Cloud Solutions", "System Integration", "Technical Leadership"],
      certifications: ["Oracle EPM Master", "AWS Solutions Architect", "CISSP"],
      education: "MS Computer Science, Stanford University",
      linkedin: "linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@nayona.com"
    },
    {
      name: "Michael Chen",
      role: "Senior Consultant",
      image: member,
      description: "Financial planning expert with 8+ years specializing in Oracle PBCS and FCCS. Implemented solutions for major banking and insurance clients.",
      expertise: ["Financial Planning", "Analytics", "Process Optimization"],
      certifications: ["CPA", "Oracle PBCS Certified", "Six Sigma Black Belt"],
      education: "MS Finance, London School of Economics",
      linkedin: "linkedin.com/in/michaelchen",
      email: "michael.chen@nayona.com"
    },
  ];

  return (
    <section className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-background-200/30 to-transparent">
        <div className="w-full mx-auto px-4 lg:px-8">
          <div className=" gap-12">
            <div className="">
              <h1 className="text-heading-2 font-grotesk text-on-dark mb-6">
                Building Excellence Through{" "}
                <span className="text-primary-300 max-w-4xl">Expert Teams</span>
              </h1>
              <p className="text-secondary-300 text-lg mb-12 leading-relaxed">
                Our diverse team of Oracle EPM specialists brings together decades of experience, 
                innovation, and dedication to deliver transformative solutions for our clients. 
                With a proven track record of success and deep industry expertise, we're committed 
                to driving your business transformation journey.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h4 className="text-heading-3 font-grotesk text-primary-300">50+</h4>
                  <p className="text-secondary-300 font-medium">Certified Experts</p>
                </div>
                <div>
                  <h4 className="text-heading-3 font-grotesk text-primary-300">200+</h4>
                  <p className="text-secondary-300 font-medium">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-heading-3 font-grotesk text-primary-300">15+</h4>
                  <p className="text-secondary-300 font-medium">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-heading-3 font-grotesk text-primary-300">98%</h4>
                  <p className="text-secondary-300 font-medium">Client Satisfaction</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 p-6 bg-background-200/30 rounded-xl border border-secondary-500/30">
                <div className="text-center p-4">
                  <h5 className="text-primary-300 font-grotesk mb-2">Global Reach</h5>
                  <p className="text-secondary-300 text-sm">Serving clients across multiple continents with localized expertise</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="text-primary-300 font-grotesk mb-2">Industry Leaders</h5>
                  <p className="text-secondary-300 text-sm">Recognized experts in Oracle EPM implementation and consulting</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="text-primary-300 font-grotesk mb-2">Continuous Innovation</h5>
                  <p className="text-secondary-300 text-sm">Staying ahead with the latest technologies and methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className=" mx-auto px-4 lg:px-8 py-24">
        <Heading
          title="Meet Our Expert Team"
          description="Leadership & Expertise"
        />
        
        {/* Existing team members grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-background-200/30 rounded-xl p-8 backdrop-blur-sm border border-secondary-500/30 hover:border-primary-300/50 transition-all duration-300"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400">
                      <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-primary-300 hover:text-primary-400">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-heading-4 font-grotesk text-primary-300 mb-2">
                {member.name}
              </h3>
              <p className="text-secondary-200 mb-4 flex items-center gap-2">
                {member.role}
              </p>
              <p className="text-secondary-300 mb-6 text-sm">
                {member.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Award className="text-primary-300 w-5 h-5 mt-1" />
                  <div className="text-sm text-secondary-200">
                    <p className="font-medium mb-1">Certifications</p>
                    <p className="text-secondary-300">{member.certifications.join(" • ")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <BookOpen className="text-primary-300 w-5 h-5 mt-1" />
                  <div className="text-sm text-secondary-200">
                    <p className="font-medium mb-1">Education</p>
                    <p className="text-secondary-300">{member.education}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-secondary-500/30">
                <p className="text-sm text-secondary-200 mb-2">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-primary-300/10 text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="bg-background-200/30 py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-heading-3 font-grotesk text-on-dark mb-6">Our Culture & Values</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Collaborative Excellence",
                    description: "We foster an environment where diverse perspectives come together to create innovative solutions."
                  },
                  {
                    icon: Target,
                    title: "Client-Centric Focus",
                    description: "Every team member is dedicated to delivering exceptional value and results for our clients."
                  },
                  {
                    icon: Briefcase,
                    title: "Professional Growth",
                    description: "We invest in continuous learning and development to stay at the forefront of technology."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-300/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h4 className="text-heading-5 font-grotesk text-primary-300 mb-2">{value.title}</h4>
                      <p className="text-secondary-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src={member} alt="Team Culture" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8">
                <img src={member} alt="Team Culture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24">
        <div className="bg-background-200/30 rounded-2xl p-12 text-center">
          <h3 className="text-heading-3 font-grotesk text-on-dark mb-4">Join Our Growing Team</h3>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence in Oracle EPM solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              text="View Open Positions" 
              theme="dark"
              onClick={() => navigate('/careers')}
            />
            <Button 
              text="Learn More" 
              theme="dark" 
              onClick={() => navigate('/about/us')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPage;