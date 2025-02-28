import React from 'react';
import { Mail, Send, Instagram, Linkedin, Github, MapPin, Phone } from 'lucide-react';

function FooterUpper() {
  return (
    <div className="w-full mb-12 lg:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 font-grotesk font-semibold text-lg mb-2">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3">About</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3">Services</a>
            <a href="/work" className="text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3">Work</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3">Contact</a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 font-grotesk font-semibold text-lg mb-2">Connect</h3>
          <div className="flex flex-col space-y-2">
            <a 
              href="https://instagram.com/nayona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3"
            >
              <Instagram className="w-4 h-4 mr-2" /> Instagram
            </a>
            <a 
              href="https://linkedin.com/in/nayona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3"
            >
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a 
              href="https://github.com/nayona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3"
            >
              <Github className="w-4 h-4 mr-2" /> Github
            </a>
            <a 
              href="mailto:hello@nayona.com" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3"
            >
              <Mail className="w-4 h-4 mr-2" /> hello@nayona.com
            </a>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 font-grotesk font-semibold text-lg mb-2">Location</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-start text-gray-700 font-grotesk text-body-3">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
              <span>123 Madison Avenue<br />New York, NY 10001<br />United States</span>
            </div>
            <a 
              href="tel:+12125551234" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-grotesk text-body-3"
            >
              <Phone className="w-4 h-4 mr-2" /> +1 (212) 555-1234
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 font-grotesk font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-gray-700 font-grotesk text-body-3 mb-2">
            Subscribe to our newsletter for updates and insights.
          </p>
          <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md font-grotesk text-body-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600 font-grotesk text-body-5">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FooterUpper;