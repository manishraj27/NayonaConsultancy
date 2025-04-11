import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Phone, MapPin, Briefcase, GraduationCap, 
  Link as LinkIcon, FileText, MessageSquare, X, Plus, 
  Trash2, Globe, Calendar, Building, Mail
} from "lucide-react";
import Button from "./Button";
import Heading from "./Heading";
import apiconfig from "../../configurations/APIConfig";

const JobApplication = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [job, setJob] = useState(null);

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      placeOfResidence: "",
      countryCode: "+1"
    },
    workExperience: [{
      title: "",
      company: "",
      location: "",
      description: "",
      fromDate: "",
      toDate: "",
      isCurrentJob: false
    }],
    education: [{
      institution: "",
      major: "",
      degree: "",
      location: "",
      fromDate: "",
      toDate: "",
      isCurrentlyStudying: false
    }],
    socialProfiles: {
      linkedin: "",
      facebook: "",
      twitter: "",
      website: ""
    },
    resumeUrl: "",
    messageToHiringTeam: ""
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${apiconfig.nayona_api}/api/jobs/${slug}`);
        if (!response.ok) throw new Error('Job not found');
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobDetails();
  }, [slug]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }));
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      const newWorkExperience = [...prev.workExperience];
      newWorkExperience[index] = {
        ...newWorkExperience[index],
        [name]: type === 'checkbox' ? checked : value
      };
      return { ...prev, workExperience: newWorkExperience };
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      const newEducation = [...prev.education];
      newEducation[index] = {
        ...newEducation[index],
        [name]: type === 'checkbox' ? checked : value
      };
      return { ...prev, education: newEducation };
    });
  };

  const handleSocialProfilesChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      socialProfiles: {
        ...prev.socialProfiles,
        [name]: value
      }
    }));
  };

  const addWorkExperience = () => {
    setFormData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, {
        title: "",
        company: "",
        location: "",
        description: "",
        fromDate: "",
        toDate: "",
        isCurrentJob: false
      }]
    }));
  };

  const removeWorkExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        institution: "",
        major: "",
        degree: "",
        location: "",
        fromDate: "",
        toDate: "",
        isCurrentlyStudying: false
      }]
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/jobs/${job._id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <section className="min-h-screen bg-background-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-300"></div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background-100 text-on-dark font-body-1">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Heading
            title="Job Application Form"
            description={`Apply for ${job.title} position`}
          />
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-300/20 text-on-dark p-6 rounded-xl text-center"
          >
            <h3 className="text-heading-4 font-semibold mb-2">Application Submitted Successfully!</h3>
            <p className="mb-4">Thank you for your application. We'll review it and get back to you soon.</p>
            <Button
              text="Back to Job Listing"
              theme="dark"
              className="bg-primary-300 hover:bg-primary-400 text-on-dark"
              onClick={() => navigate('/jobs')}
            />
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 text-red-500 p-4 rounded-lg body-3">
                {error}
              </div>
            )}

            {/* Personal Information */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <h3 className="text-heading-4 font-semibold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-300" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                  />
                </div>
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                  />
                </div>
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                  />
                </div>
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">Phone Number *</label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.personalInfo.countryCode}
                      onChange={handlePersonalInfoChange}
                      className="bg-background-300/50 rounded-lg px-3 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.personalInfo.phoneNumber}
                      onChange={handlePersonalInfoChange}
                      className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-secondary-300 mb-2 body-3">Place of Residence *</label>
                  <input
                    type="text"
                    name="placeOfResidence"
                    required
                    value={formData.personalInfo.placeOfResidence}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-heading-4 font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary-300" />
                  Work Experience
                </h3>
                <Button
                  type="button"
                  onClick={addWorkExperience}
                  text="Add Experience"
                  theme="dark"
                  className="bg-primary-300 hover:bg-primary-400 text-on-dark"
                />
              </div>
              
              {formData.workExperience.map((exp, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-secondary-600/20 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-heading-4 font-medium">Experience {index + 1}</h4>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeWorkExperience(index)}
                        className="text-accent-400 hover:text-accent-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Job Title *</label>
                      <input
                        type="text"
                        name="title"
                        required
                        value={exp.title}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Company *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={exp.company}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={exp.location}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-secondary-300 mb-2 body-3">Description *</label>
                      <textarea
                        name="description"
                        required
                        value={exp.description}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none min-h-[100px] body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">From Date *</label>
                      <input
                        type="date"
                        name="fromDate"
                        required
                        value={exp.fromDate}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">To Date</label>
                      <input
                        type="date"
                        name="toDate"
                        value={exp.toDate}
                        onChange={(e) => handleWorkExperienceChange(index, e)}
                        disabled={exp.isCurrentJob}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30 disabled:opacity-50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-secondary-300 body-3">
                        <input
                          type="checkbox"
                          name="isCurrentJob"
                          checked={exp.isCurrentJob}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="rounded border-secondary-600/30 text-primary-300 focus:ring-primary-300"
                        />
                        I currently work here
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-heading-4 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary-300" />
                  Education
                </h3>
                <Button
                  type="button"
                  onClick={addEducation}
                  text="Add Education"
                  theme="dark"
                  className="bg-primary-300 hover:bg-primary-400 text-on-dark"
                />
              </div>
              
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-secondary-600/20 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-heading-4 font-medium">Education {index + 1}</h4>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="text-accent-400 hover:text-accent-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Institution *</label>
                      <input
                        type="text"
                        name="institution"
                        required
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Degree *</label>
                      <input
                        type="text"
                        name="degree"
                        required
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Major/Field of Study *</label>
                      <input
                        type="text"
                        name="major"
                        required
                        value={edu.major}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={edu.location}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">From Date *</label>
                      <input
                        type="date"
                        name="fromDate"
                        required
                        value={edu.fromDate}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-300 mb-2 body-3">To Date</label>
                      <input
                        type="date"
                        name="toDate"
                        value={edu.toDate}
                        onChange={(e) => handleEducationChange(index, e)}
                        disabled={edu.isCurrentlyStudying}
                        className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30 disabled:opacity-50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-secondary-300 body-3">
                        <input
                          type="checkbox"
                          name="isCurrentlyStudying"
                          checked={edu.isCurrentlyStudying}
                          onChange={(e) => handleEducationChange(index, e)}
                          className="rounded border-secondary-600/30 text-primary-300 focus:ring-primary-300"
                        />
                        I am currently studying here
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Profiles */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <h3 className="text-heading-4 font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-300" />
                Social Profiles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.socialProfiles.linkedin}
                    onChange={handleSocialProfilesChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div>
                  <label className="block text-secondary-300 mb-2 body-3">Personal Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.socialProfiles.website}
                    onChange={handleSocialProfilesChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <h3 className="text-heading-4 font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-300" />
                Resume/CV
              </h3>
              <div>
                <label className="block text-secondary-300 mb-2 body-3">Resume URL *</label>
                <input
                  type="url"
                  required
                  value={formData.resumeUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, resumeUrl: e.target.value }))}
                  className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none body-2 border border-secondary-600/30"
                  placeholder="https://drive.google.com/your-resume"
                />
                <p className="text-secondary-300 body-4 mt-2">
                  Please upload your resume to a cloud storage service (Google Drive, Dropbox, etc.) and provide the link
                </p>
              </div>
            </div>

            {/* Message to Hiring Team */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-600/30">
              <h3 className="text-heading-4 font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-300" />
                Message to Hiring Team
              </h3>
              <textarea
                value={formData.messageToHiringTeam}
                onChange={(e) => setFormData(prev => ({ ...prev, messageToHiringTeam: e.target.value }))}
                className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark focus:ring-2 focus:ring-primary-300 outline-none min-h-[150px] body-2 border border-secondary-600/30"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                text={isSubmitting ? "Submitting..." : "Submit Application"}
                theme="dark"
                className="w-full md:w-auto bg-primary-300 hover:bg-primary-400 text-on-dark"
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default JobApplication;