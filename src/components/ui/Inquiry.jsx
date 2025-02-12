import { useState } from "react";
import { ArrowRight } from "lucide-react";
import apiconfig from "../../configurations/APIConfig";
import UiButton from "./UiButton";


const Inquiry = ({ setStep }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: [],
    message: "",
    budgetRange: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Submission successful!");
        setStep(1);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Project Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="fullName" placeholder="Full Name" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        <input type="text" name="companyName" placeholder="Company Name" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
        <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea name="message" placeholder="Project Details" required className="w-full p-3 border rounded-lg h-32" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        
        <UiButton
          text="Submit"
          icon={ArrowRight}
          bgColor="#1F2937"
          iconBgColor="#374151"
          iconPosition="right"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Inquiry;
 