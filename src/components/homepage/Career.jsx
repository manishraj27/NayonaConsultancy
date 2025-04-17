
import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { Briefcase, Users, Heart, Award, ArrowRight, Globe, BookOpen, Target, ChevronRight, Sparkles, Rocket } from "lucide-react";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, BriefcaseIcon, Clock, MapPin, DollarSign } from "lucide-react";
import careerHeroImage from "../../assets/images/ABOUTUSMEETING.webp"
import apiconfig from "../../configurations/APIConfig";
import { Check } from "lucide-react";
import { Star, Lightbulb, Zap, Trophy } from "lucide-react";
import employee from "../../assets/images/clien1.webp"
import { useEffect } from "react";
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


  const careerStories = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      image: employee,
      quote: "Joining Nayona was the best career move I've made. The growth opportunities and collaborative culture are unmatched.",
      years: "3 years at Nayona"
    },
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      image: employee,
      quote: "The supportive environment and emphasis on work-life balance make Nayona a great place to build a career.",
      years: "2 years at Nayona"
    }
  ];

  const growthStats = [
    { number: "85%", label: "Employee Growth Rate", icon: <Zap className="w-6 h-6" /> },
    { number: "92%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "100+", label: "Learning Programs", icon: <Lightbulb className="w-6 h-6" /> },
    { number: "45+", label: "Industry Awards", icon: <Trophy className="w-6 h-6" /> }
  ];


  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [recentJobs, setRecentJobs] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [jobError, setJobError] = useState(null);
  const navigate = useNavigate();

  const fetchRecentJobs = async () => {
    try {
      setIsLoadingJobs(true);
      const response = await fetch(`${apiconfig.nayona_api}/api/jobs?limit=3&sort=latest`);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();

      const jobsArray = data.jobs && Array.isArray(data.jobs) ? data.jobs.slice(0, 3) : [];

      setRecentJobs(jobsArray.map(job => ({
        id: job._id,
        title: job.title,
        type: job.employmentType || 'Full Time',
        location: job.location ?
          (job.location.type === 'remote' ? 'Remote' : `${job.location.state || ''}, ${job.location.country}`) :
          'Location not specified',
        salary: job.salaryRange ?
          `$${job.salaryRange.min}k - $${job.salaryRange.max}k` :
          'Competitive',
        posted: job.createdAt ? formatTimeAgo(new Date(job.createdAt)) : 'Recently',
        slug: job.slug || job._id,
        description: job.description || '',
        requiredSkills: job.requiredSkills || [],
        experience: job.experience || 'Not specified',
        department: job.department || 'General',
        responsibilities: job.responsibilities || [],
        benefits: job.benefits || [],
        qualifications: job.qualifications || []
      })));
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobError('Failed to load recent jobs');
    } finally {
      setIsLoadingJobs(false);
    }
  };

  // Add this utility function
  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  // Add useEffect to fetch jobs when component mounts
  useEffect(() => {
    fetchRecentJobs();
  }, []);



  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      setSubscriptionStatus({ success: response.ok, message: data.message });
    } catch (error) {
      setSubscriptionStatus({
        success: false,
        message: "Failed to subscribe. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
              <div className="relative bg-gradient-to-br from-secondary-800 to-secondary-700 p-10 rounded-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative w-[480px] aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={careerHeroImage}
                        alt="Career at Nayona"
                        className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-primary-200 text-sm font-medium mb-1">Join Our Team</p>
                            <h4 className="text-on-dark text-2xl font-bold">We're Growing Fast</h4>
                          </div>
                          <div className="w-12 h-12 bg-primary-300/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 w-full my-8">
                    <div className="bg-secondary-800/80 backdrop-blur-sm p-6 rounded-2xl border border-secondary-600/10">
                      <div className="flex flex-col">
                        <span className="text-primary-200 text-sm font-medium mb-2">Open Positions</span>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-bold text-on-dark">15</span>
                          <span className="text-primary-300 text-sm mb-1">positions</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-secondary-800/80 backdrop-blur-sm p-6 rounded-2xl border border-secondary-600/10">
                      <div className="flex flex-col">
                        <span className="text-primary-200 text-sm font-medium mb-2">Global Offices</span>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-bold text-on-dark">6</span>
                          <span className="text-primary-300 text-sm mb-1">locations</span>
                        </div>
                      </div>
                    </div>
                  </div>

         
                    <Button
                      text="Explore Opportunities"
                      theme="dark"
                     onClick={() => navigate('/careers/all-jobs/search')}
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


        <div className="mb-24">
          <div className="mt-12">
          <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-on-dark">Recent Opportunities</h3>
              <Button
                text="View All Jobs"
                onClick={() => navigate('/careers/all-jobs/search')}
                theme="dark"
              />
            </div>
            {isLoadingJobs ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-secondary-800/50 animate-pulse rounded-xl p-6">
                    <div className="h-6 bg-secondary-700 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-secondary-700 rounded w-1/4"></div>
                      <div className="h-4 bg-secondary-700 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : jobError ? (
              <div className="text-red-400 bg-red-400/10 p-4 rounded-xl">
                {jobError}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/careers/job/${job.slug}`}
                    className="group block bg-secondary-800/50 hover:bg-secondary-700/50 transition-all duration-300 rounded-xl p-6 border border-secondary-600/10 hover:border-primary-300/30"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <h4 className="text-xl font-semibold text-on-dark mb-2 group-hover:text-primary-300 transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-2 text-primary-300/70">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 text-secondary-300">
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      {job.requiredSkills && (
                        <div className="flex flex-wrap gap-2">
                          {job.requiredSkills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-lg bg-primary-300/10 text-primary-300"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.requiredSkills.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-lg bg-secondary-700/50 text-secondary-300">
                              +{job.requiredSkills.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* View Details Button */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-primary-300 group-hover:translate-x-1 transition-transform">
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="mb-24 mt-12">
            {/* Growth Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {growthStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary-800/50 backdrop-blur-sm p-6 rounded-2xl border border-secondary-600/10 text-center group hover:border-primary-300/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-300/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-primary-300 mb-2">{stat.number}</h3>
                  <p className="text-secondary-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Employee Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-on-dark mb-4">Employee Stories</h2>
              <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
                Hear from our team members about their journey at Nayona Consultancy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {careerStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary-600/10 relative group hover:border-primary-300/30 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-300/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary-300/10 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary-300/30"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-on-dark">{story.name}</h3>
                        <p className="text-primary-300">{story.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-secondary-300 text-lg italic mb-4">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-primary-300/70 text-sm">{story.years}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Path Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-on-dark mb-4">Your Growth Path</h2>
              <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
                We provide clear career progression paths and support your professional development
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-secondary-700/50"></div>
              {['Entry Level', 'Mid Level', 'Senior Level', 'Leadership'].map((level, index) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-300"></div>
                  <div className="w-1/2 bg-secondary-800/50 backdrop-blur-sm p-6 rounded-2xl border border-secondary-600/10">
                    <h3 className="text-xl font-bold text-on-dark mb-2">{level}</h3>
                    <p className="text-secondary-300">
                      Structured learning path with mentorship and hands-on project experience
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>



          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300/2 via-secondary-300/5 to-primary-300/2 rounded-[40px] blur-3xl"></div>
            <div className="mt-16 relative px-4 lg:px-0">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/5 via-secondary-300/10 to-primary-300/5 rounded-[40px] blur-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-300),0.1),transparent_50%)]"></div>

              <div className="bg-secondary-800/50 rounded-[clamp(20px,5vw,40px)] p-6 sm:p-8 lg:p-16 border border-secondary-600/10 backdrop-blur-lg relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-[clamp(200px,50vw,400px)] h-[clamp(200px,50vw,400px)] bg-primary-300/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[clamp(200px,50vw,400px)] h-[clamp(200px,50vw,400px)] bg-secondary-300/5 rounded-full -ml-48 -mb-48 blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-3xl mx-auto text-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8 sm:space-y-12"
                  >
                    {/* Enhanced icon container */}
                    <div className="relative inline-block group">
                      <div className="w-[clamp(60px,15vw,80px)] h-[clamp(60px,15vw,80px)] bg-gradient-to-br from-primary-300/20 to-primary-300/5 rounded-3xl flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-all duration-500">
                        <Mail className="w-[clamp(30px,8vw,40px)] h-[clamp(30px,8vw,40px)] text-primary-300" />
                      </div>
                      {/* Animated decorative elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-300/20 rounded-lg animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary-300/20 rounded-lg animate-pulse delay-300"></div>
                      <div className="absolute top-1/2 -right-8 w-2 h-2 bg-primary-300/30 rounded-full animate-ping"></div>
                      <div className="absolute top-1/2 -left-8 w-2 h-2 bg-primary-300/30 rounded-full animate-ping delay-700"></div>
                    </div>

                    {/* Enhanced text content */}
                    <div className="relative">
                      <h2 className="text-[clamp(2rem,5vw,2.5rem)] font-bold text-on-dark mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 leading-tight">
                        Never Miss an Opportunity
                      </h2>
                      <p className="text-secondary-300 text-[clamp(1rem,3vw,1.25rem)] leading-relaxed max-w-2xl mx-auto">
                        Subscribe to our job alerts and be the first to know about new positions that match your interests
                      </p>
                    </div>

                    {/* Enhanced form */}
                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto w-full">
                      <div className="p-1 bg-gradient-to-r from-primary-300/20 via-secondary-300/20 to-primary-300/20 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex flex-col sm:flex-row gap-3 bg-secondary-800/80 rounded-xl p-2">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 bg-secondary-700/50 border border-secondary-600/20 rounded-xl px-4 py-3 text-on-dark placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-300/30 focus:border-primary-300/50 transition-all duration-300"
                            required
                          />
                          <Button
                            text={isSubmitting ? "Subscribing..." : "Subscribe"}
                            icon={Mail}
                            iconPosition="right"
                            theme="dark"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-gradient-to-r from-primary-300 to-primary-400 hover:from-primary-400 hover:to-primary-500 transform hover:translate-y-[-2px] transition-all duration-300"
                          />
                        </div>
                      </div>
                      {/* Enhanced status message */}
                      {subscriptionStatus && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`mt-4 p-3 rounded-xl backdrop-blur-sm ${subscriptionStatus.success
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}
                        >
                          {subscriptionStatus.message}
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Add this CTA section at the bottom */}
            <motion.div
              className="w-full mt-24 p-8 md:p-12 bg-background-200/30 rounded-3xl border border-secondary-300/10 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2
                  className="text-heading-3 text-on-dark font-grotesk mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to Shape the Future With Us?
                </motion.h2>
                <motion.p
                  className="text-on-dark/80 mb-8 max-w-2xl mx-auto text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Join our innovative team and be part of transforming the future of enterprise solutions.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-4"
                >
                  <Link to="/careers">
                    <Button
                      text="View All Positions"
                      icon={Briefcase}
                      iconPosition="right"
                      theme="dark"
                      className="bg-primary-300/90 hover:bg-primary-300 transition-all duration-300"
                    />
                  </Link>
                  <Link to="/contact">
                    <Button
                      text="Contact Us"
                      icon={Mail}
                      iconPosition="right"
                      theme="dark"
                      className="bg-secondary-700 hover:bg-secondary-600 transition-all duration-300"
                    />
                  </Link>
                </motion.div>

                {/* Additional benefit highlights */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-secondary-300">
                      <Check size={20} />
                    </div>
                    <p className="text-on-dark/80">Flexible work environment with remote options</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-secondary-300">
                      <Check size={20} />
                    </div>
                    <p className="text-on-dark/80">Comprehensive benefits and growth opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-secondary-300">
                      <Check size={20} />
                    </div>
                    <p className="text-on-dark/80">Innovative projects with global impact</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Career;