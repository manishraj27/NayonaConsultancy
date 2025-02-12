import React from 'react';
import { motion } from 'framer-motion';

const CirclePattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full absolute opacity-20">
    <defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="1" fill="currentColor" className="text-blue-400" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
  </svg>
);

const EngagementIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" strokeWidth="4" />
    <circle cx="60" cy="60" r="40" fill="none" stroke="#93C5FD" strokeWidth="3" />
    <circle cx="60" cy="60" r="30" fill="none" stroke="#BFDBFE" strokeWidth="2" />
    <circle cx="60" cy="60" r="8" fill="#3B82F6" />
  </svg>
);

const InsightIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <path 
      d="M30,90 L90,90 L60,30 Z" 
      fill="none" 
      stroke="#3B82F6" 
      strokeWidth="4" 
      strokeLinejoin="round"
    />
    <circle cx="60" cy="60" r="40" fill="none" stroke="#93C5FD" strokeWidth="3" strokeDasharray="4 4" />
  </svg>
);

const Motto = () => {
  return (
    <section
      id="motto"
      aria-label="motto"
      className="bg-light-200 relative select-none flex flex-col lg:px-12 px-4 w-full h-screen py-32 items-center overflow-hidden"
    >
      <div className="mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Message */}
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-open-sans text-gray-900 leading-tight">
              Driving
              <span className="block text-blue-600">Financial</span>
              <span className="block">Excellence</span>
            </h2>
            
            {/* Engagement Metrics */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <EngagementIcon />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <InsightIcon />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative h-[400px]">
            <div className="absolute inset-0">
              <CirclePattern />
            </div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Transforming Oracle EPM
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Strategic Planning</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Technical Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Motto;