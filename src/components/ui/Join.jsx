import { useState } from "react";
import { ArrowRight } from "lucide-react";
import apiconfig from "../../configurations/APIConfig";
import UiButton from "./UiButton";


const Join = ({ setStep }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skillName: "",
    portfolioLink: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/join-inquiries`, {
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
      <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="fullName" placeholder="Full Name" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="text" name="skillName" placeholder="Skill/Position" required className="p-3 border rounded-lg" onChange={(e) => setFormData({ ...formData, skillName: e.target.value })} />
        <textarea name="message" placeholder="Tell us about yourself" required className="w-full p-3 border rounded-lg h-32" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

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

export default Join;
