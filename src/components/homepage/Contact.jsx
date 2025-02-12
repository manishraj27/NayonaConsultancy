import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UiButton from "../ui/UiButton";
import Inquiry from "../ui/Inquiry";
import Join from "../ui/Join";


const Contact = () => {
  const [step, setStep] = useState(1);
  const [inquiryType, setInquiryType] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-64">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {step === 1 && (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">
              Hey there! How can we assist you?
            </h1>
            <div className="flex gap-4 justify-center">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => {
                  setInquiryType("join");
                  setStep(2);
                }}
              >
                
                Join Nayona
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => {
                  setInquiryType("project");
                  setStep(2);
                }}
              >
                Start a Project
          
              </button>
            </div>

          </div>
        )}

        {step === 2 && inquiryType === "project" && (
          <Inquiry setStep={setStep} />
        )}

        {step === 2 && inquiryType === "join" && <Join setStep={setStep} />}

        {step > 1 && (
          <div className="mt-6 flex justify-start">
            <UiButton
              text="Go Back"
              icon={ArrowLeft}
              bgColor="#1F2937"
              iconBgColor="#374151"
              iconPosition="left"
              onClick={() => setStep(1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
