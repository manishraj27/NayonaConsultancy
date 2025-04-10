import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Phone, MapPin, Briefcase, GraduationCap, 
  Link, FileText, MessageSquare, X, Plus, Trash2
} from "lucide-react";
import Button from "./Button";
import Heading from "./Heading";
import apiconfig from "../../configurations/APIConfig";

const JobApplication = () => {
  const { slug } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      placeOfResidence: "",
      countryCode: ""
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
      const response = await fetch(`${apiconfig.nayona_api}/api/jobs/${slug}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="job-application"
      aria-label="job-application"
      className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Heading
            title="Job Application Form"
            description="Please fill out all required fields"
          />
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/20 text-green-500 p-6 rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
            <p>Thank you for your application. We'll review it and get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-on-dark mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark"
                  />
                </div>
                {/* Add more personal info fields similarly */}
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-on-dark">Work Experience</h3>
               <div
                 onClick={addWorkExperience}>

                <Button
                  type="button"
                
                  text="Add Experience"
                  theme="dark"
                  className="bg-primary-300 hover:bg-primary-400"
                />
               </div>
              </div>
              {formData.workExperience.map((exp, index) => (
                <div key={index} className="mb-6 border-b border-background-300/20 pb-6">
                  {/* Add work experience fields */}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              {/* Similar structure to Work Experience */}
            </div>

            {/* Social Profiles */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              {/* Add social profile fields */}
            </div>

            {/* Resume Upload */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              {/* Add resume upload field */}
            </div>

            {/* Message to Hiring Team */}
            <div className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-on-dark mb-6">Message to Hiring Team</h3>
              <textarea
                name="messageToHiringTeam"
                value={formData.messageToHiringTeam}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  messageToHiringTeam: e.target.value
                }))}
                className="w-full bg-background-300/50 rounded-lg px-4 py-3 text-on-dark min-h-[150px]"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            {error && (
              <div className="bg-red-500/20 text-red-500 p-4 rounded-lg">
                {error}
              </div>
            )}

            <Button
              type="submit"
              text={isSubmitting ? "Submitting..." : "Submit Application"}
              theme="dark"
              className="w-full md:w-auto bg-primary-300 hover:bg-primary-400"
              disabled={isSubmitting}
            />
          </form>
        )}
      </div>
    </section>
  );
};

export default JobApplication;