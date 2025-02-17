import { useState } from "react";
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
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

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

    setSubmitting(true);

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
        setSubmissionSuccess(true);
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
    } finally {
      setSubmitting(false);
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
              className={`px-6 py-4 rounded-full text-body-3 font-medium font-grotesk transition-all duration-300
                ${
                  formData.serviceInterest.includes(service)
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#ffffff] text-black hover:bg-light-200"
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
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#ffffff] text-black hover:bg-light-200"
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
              className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
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
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none min-h-32"
          />
          <select
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleInputChange}
            className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] text-white focus:outline-none"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full lg:w-[60%] px-4 lg:px-0 pt-8 pb-24 lg:py-16">
        <div className="flex flex-col items-center gap-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-600 tracking-wide">[Start your inquiry]</h2>
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
          <div className="mt-4 text-green-600">Check your mail for inquiry details</div>
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

export default Inquiry;