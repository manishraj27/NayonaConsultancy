// Inquiry.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UiButton from "./UiButton";
import apiconfig from "../../configurations/APIConfig";

const Inquiry = ({ onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    serviceInterest: [],
    budgetRange: "",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    preferredContactMethod: "Email",
  });

  const services = ["Financial Planning", "Reporting", "Budgeting"];

  const budgetRanges = ["Below $10,000", "$10,000 - $50,000", "$50,000+"];

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service],
    }));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const required = ["fullName", "companyName", "email", "phone", "message"];
    const missing = required.filter((field) => !formData[field]);

    if (missing.length > 0) {
      alert(`Please fill in all required fields: ${missing.join(", ")}`);
      return false;
    }

    if (formData.serviceInterest.length === 0) {
      alert("Please select at least one service");
      return false;
    }

    if (!formData.budgetRange) {
      alert("Please select a budget range");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceInterest: Array.isArray(formData.serviceInterest)
            ? formData.serviceInterest
            : [formData.serviceInterest],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(
          `Form submitted successfully! Inquiry number: ${result.inquiryNumber}`
        );
        setCurrentStep(0);
        setFormData({
          serviceInterest: [],
          budgetRange: "",
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
          preferredContactMethod: "Email",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  const steps = [
    {
      title: "Ready to team up? Our passion for crushing goals sets us apart. How can we help you?",
      content: (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => handleServiceSelect(service)}
              className={`px-6 py-4 rounded-full text-base font-medium transition-all duration-300
                ${
                  formData.serviceInterest.includes(service)
                    ? "bg-[#333841] text-white"
                    : "bg-[#C8CFD1] text-gray-800 hover:bg-gray-300"
                }`}
            >
              {service}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "Things in life may not always be free, right? What's your budget for your EPM Service?",
      content: (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
          {budgetRanges.map((range) => (
            <button
              key={range}
              onClick={() =>
                setFormData((prev) => ({ ...prev, budgetRange: range }))
              }
              className={`px-6 py-4 rounded-full text-base font-medium transition-all duration-300
                ${
                  formData.budgetRange === range
                    ? "bg-[#333841] text-white"
                    : "bg-[#C8CFD1] text-gray-800 hover:bg-gray-300"
                }`}
            >
              {range}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "Let's spice it up! Fill out our inquiry form — and let our adventure begin!",
      content: (
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none min-h-32"
          />
          <select
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#C8CFD1] text-gray-800 focus:outline-none"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
      ),
    },
  ];
{/* <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                ${index === currentStep ? 'bg-[#333841] text-white' : 
                  index < currentStep ? 'bg-blue-200 text-white' : 'bg-[#C8CFD1] text-gray-600'}`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-16 h-1 bg-[#C8CFD1]">
                  <div className={`h-full transition-all duration-300
                    ${index < currentStep ? 'bg-blue-200 w-full' : 'w-0'}`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div> */}
  return (
    <div className="w-full mx-auto p-8">
      <div className="flex flex-col items-center">
        

        <h2 className="lg:mx-64 mx-0 text-heading-4 text-gray-900 font-grotesk font-bold tracking-wide text-center">
          {steps[currentStep].title}
        </h2>

        {steps[currentStep].content}

        <div className="flex justify-between w-full mb-8">
          <UiButton
            text="Back"
            icon={ChevronLeft}
            iconPosition="left"
            onClick={() => {
              if (currentStep === 0) {
                onBackToHome(); // Go back to ContactBox state
              } else {
                setCurrentStep((prev) => prev - 1); // Go to the previous step
              }
            }}
            type="button"
            disabled={currentStep === 0 && !onBackToHome} // Disable if no onBackToHome provided
          />

          {currentStep === steps.length - 1 ? (
            <UiButton
              text="Submit"
              icon={ChevronRight}
              iconPosition="right"
              onClick={handleSubmit}
              type="button"
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

export default Inquiry;
