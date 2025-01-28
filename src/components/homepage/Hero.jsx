import React from 'react';
import { ChevronRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white min-h-[80vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight animate-slideUp">
                Oracle EPM Excellence
                <span className="block text-emerald-600">Powered by Expertise</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl animate-slideUp animation-delay-200">
                Transform your financial planning and analytics with our comprehensive Oracle EPM consulting services. Unite your business strategy with powerful cloud solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-300">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-slate-200 text-slate-800 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors">
                Schedule Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 animate-slideUp animation-delay-400">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-6 h-6 text-emerald-600" />
                <span className="text-slate-600">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">✓</div>
                <span className="text-slate-600">Certified Experts</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Analytics Visual */}
          <div className="relative animate-fadeIn animation-delay-500">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800">Financial Planning Analytics</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-100"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-white rounded-lg shadow-sm p-4">
                      <div className="w-full h-2 bg-emerald-100 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-emerald-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-emerald-50 to-transparent -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-emerald-50 to-transparent -z-10 animate-pulse"></div>
    </div>
  );
};

export default Hero;