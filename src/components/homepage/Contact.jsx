import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import apiconfig from '../../configurations/APIConfig';


const Contact = () => {
  const [step, setStep] = useState(1);
  const [inquiryType, setInquiryType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: [],
    message: '',
    budgetRange: '',
    preferredContactMethod: 'Email',
    portfolioLink: '',
    skillName: ''
  });

  const services = ["Financial Planning", "Reporting", "Budgeting"];
  const budgetRanges = ["Below $10,000", "$10,000 - $50,000", "$50,000+"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = inquiryType === 'project' 
        ? `${apiconfig.nayona_api}/api/inquiries`
        : `${apiconfig.nayona_api}/api/join-inquiries`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Submission successful!');
        setStep(1);
        setInquiryType('');
        setFormData({});
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-64">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {step === 1 && (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">Hey there! How can we assist you?</h1>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setInquiryType('join');
                  setStep(2);
                }}
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                Join SOHub
              </button>
              <button
                onClick={() => {
                  setInquiryType('project');
                  setStep(2);
                }}
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                Start a project
              </button>
            </div>
          </div>
        )}

        {step === 2 && inquiryType === 'project' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ready to team up? Our passion for crushing goals sets us apart. How can we help you?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {services.map(service => (
                <button
                  key={service}
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      serviceInterest: [service]
                    }));
                    setStep(3);
                  }}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2" /> Go Back
              </button>
            </div>
          </div>
        )}

        {step === 3 && inquiryType === 'project' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Things in life may not always be free, right? Whats your budget for this project?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {budgetRanges.map(range => (
                <button
                  key={range}
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      budgetRange: range
                    }));
                    setStep(4);
                  }}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2" /> Go Back
              </button>
            </div>
          </div>
        )}

        {step === 4 && inquiryType === 'project' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Project Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Project Details"
                required
                className="w-full p-3 border rounded-lg h-32"
                onChange={handleInputChange}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2" /> Go Back
                </button>
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  Submit <ArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && inquiryType === 'join' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="skillName"
                  placeholder="Skill/Position"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
                <input
                  type="url"
                  name="portfolioLink"
                  placeholder="Portfolio Link"
                  required
                  className="p-3 border rounded-lg"
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about yourself"
                required
                className="w-full p-3 border rounded-lg h-32"
                onChange={handleInputChange}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  <ArrowLeft className="mr-2" /> Go Back
                </button>
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                >
                  Submit <ArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;