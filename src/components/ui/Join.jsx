import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UiButton from "./UiButton";
import apiconfig from "../../configurations/APIConfig";

const Join = ({ onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skillName: "",
    customSkill: "",
    message: "",
    portfolioLink: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const skills = [
    "Oracle EPM Consultant",
    "Oracle Planning Specialist",
    "Oracle HFM Consultant",
    "Oracle FCCS Specialist",
    "Oracle PBCS Consultant",
    "EPM Technical Architect",
    "EPM Project Manager",
    "EPM Business Analyst",
    "Other"
  ];

  const handleSkillSelect = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skillName: skill,
      customSkill: skill === "Other" ? prev.customSkill : "", // Keep custom skill if "Other" is selected
    }));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const required = ["fullName", "email", "message", "portfolioLink"];
    const missing = required.filter((field) => !formData[field]);

    if (missing.length > 0) {
      alert(`Please fill in all required fields: ${missing.join(", ")}`);
      return false;
    }

    if (!formData.skillName) {
      alert("Please select a skill");
      return false;
    }

    if (formData.skillName === "Other" && !formData.customSkill) {
      alert("Please specify your skill");
      return false;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/join-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          skillName: formData.skillName === "Other" ? formData.customSkill : formData.skillName,
        }),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        alert("Your application has been submitted successfully!");
        setCurrentStep(0);
        setFormData({
          fullName: "",
          email: "",
          skillName: "",
          customSkill: "",
          message: "",
          portfolioLink: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Ready to join our EPM consulting team? Tell us about your expertise!",
      content: (
        <div className="flex flex-col gap-6 w-full max-w-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillSelect(skill)}
                className={`px-6 py-4 rounded-full text-body-3 font-medium font-grotesk transition-all duration-300
                  ${
                    formData.skillName === skill
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-[#ffffff] text-black hover:bg-light-200"
                  }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {formData.skillName === "Other" && (
            <input
              type="text"
              name="customSkill"
              placeholder="Specify your skill"
              value={formData.customSkill}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
            />
          )}
        </div>
      ),
    },
    {
      title: "Great! Now, let's get to know you better.",
      content: (
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
            />
          </div>
          <input
            type="url"
            name="portfolioLink"
            placeholder="Portfolio/LinkedIn Profile Link"
            value={formData.portfolioLink}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Tell us about your EPM experience and why you'd like to join our team"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none min-h-32"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full lg:w-[60%] px-4 lg:px-0 pt-8 pb-24 lg:py-16">
        <div className="flex flex-col items-center gap-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-600 tracking-wide">[Join Our EPM Team]</h2>
          <p className="text-gray-900 text-heading-3 lg:text-heading-3 font-grotesk font-semibold tracking-wide text-center">
            {steps[currentStep].title}
          </p>
        </div>

        <div className="mt-6 lg:mt-12 w-full">
          {steps[currentStep].content}
        </div>

        {submitting && (
          <div className="mt-4 text-gray-600">Submitting...</div>
        )}

        {submissionSuccess && (
          <div className="mt-4 text-green-600">Thank you for your interest! We'll review your application and get back to you soon.</div>
        )}

        <div className="absolute left-8 bottom-2">
          <UiButton
            text="Back"
            icon={ChevronLeft}
            iconPosition="left"
            onClick={() => {
              if (currentStep === 0) {
                onBackToHome();
              } else {
                setCurrentStep((prev) => prev - 1);
              }
            }}
            type="button"
            disabled={currentStep === 0 && !onBackToHome}
          />
        </div>

        <div className="absolute right-8 bottom-2">
          {currentStep === steps.length - 1 ? (
            <UiButton
              text={submitting ? "Submitting..." : "Submit"}
              icon={ChevronRight}
              iconPosition="right"
              onClick={handleSubmit}
              type="button"
              disabled={submitting}
            />
          ) : (
            <UiButton
              text="Next"
              icon={ChevronRight}
              iconPosition="right"
              onClick={() => setCurrentStep((prev) => prev + 1)}
              type="button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Join;