import React from 'react';

const CirclePattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full absolute opacity-20">
    <defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="1" fill="currentColor" className="text-sky-600" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
  </svg>
);

const EngagementIcon = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <circle cx="60" cy="60" r="50" fill="none" stroke="#0369a1" strokeWidth="4" />
    <circle cx="60" cy="60" r="40" fill="none" stroke="#0284c7" strokeWidth="3" />
    <circle cx="60" cy="60" r="30" fill="none" stroke="#38bdf8" strokeWidth="2" />
    <circle cx="60" cy="60" r="8" fill="#0369a1" />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <path d="M20,100 L100,20" stroke="#0369a1" strokeWidth="4" fill="none" />
    <circle cx="30" cy="90" r="8" fill="#0284c7" />
    <circle cx="60" cy="60" r="8" fill="#0369a1" />
    <circle cx="90" cy="30" r="8" fill="#38bdf8" />
  </svg>
);

const GlobalIcon = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <circle cx="60" cy="60" r="45" fill="none" stroke="#0369a1" strokeWidth="3" />
    <path d="M60,15 A45,45 0 0,1 60,105" fill="none" stroke="#0284c7" strokeWidth="3" />
    <path d="M15,60 H105" stroke="#38bdf8" strokeWidth="3" />
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <rect x="20" y="40" width="80" height="60" fill="none" stroke="#0369a1" strokeWidth="3" rx="4" />
    <path d="M40,40 V20 H80 V40" fill="none" stroke="#0284c7" strokeWidth="3" />
    <line x1="40" y1="60" x2="80" y2="60" stroke="#38bdf8" strokeWidth="3" />
    <line x1="40" y1="80" x2="80" y2="80" stroke="#38bdf8" strokeWidth="3" />
  </svg>
);

const Motto = () => {
  return (
    <section
      id="motto"
      aria-label="motto"
      className="rounded-t-3xl dark-section bg-secondary-100 relative select-none flex flex-col lg:px-12 px-4 w-full min-h-screen py-32 items-center overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto w-full h-full relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Elements */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0">
              <CirclePattern />
            </div>
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full transition-colors duration-300">
              <h3 className="text-heading-4 font-grotesk text-white mb-8">
                Oracle EPM Excellence
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg transition-colors duration-300">
                    <EngagementIcon />
                    <div className="text-center mt-4">
                      <div className="text-3xl font-grotesk font-bold text-sky-400">98%</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Client Satisfaction</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg transition-colors duration-300">
                    <GrowthIcon />
                    <div className="text-center mt-4">
                      <div className="text-3xl font-grotesk font-bold text-sky-400">250+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg transition-colors duration-300">
                    <GlobalIcon />
                    <div className="text-center mt-4">
                      <div className="text-3xl font-grotesk font-bold text-sky-400">20+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Countries Served</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg transition-colors duration-300">
                    <ProjectIcon />
                    <div className="text-center mt-4">
                      <div className="text-3xl font-grotesk font-bold text-sky-400">15+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Message */}
          <div className="space-y-8">
            <h2 className="font-grotesk text-heading-1 text-white leading-tight">
              Transforming
              <span className="block text-sky-400">Financial</span>
              <span className="block">Operations</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-grotesk text-body-2 text-white">Strategic Planning</h4>
                  <p className="font-open-sans text-body-4 text-slate-300">Comprehensive roadmap development</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg shadow-sm transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-grotesk text-body-2 text-white">Technical Excellence</h4>
                  <p className="font-open-sans text-body-4 text-slate-300">Industry-leading implementation expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sky-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sky-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 :bg-sky-700/20 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Motto;