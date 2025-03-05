import React from 'react';



const EngagementIcon = () => (
  <svg viewBox="0 0 120 120" className="w-16 md:w-20 h-16 md:h-20">
    <circle cx="60" cy="60" r="50" fill="none" stroke="#4A90E2" strokeWidth="4" /> {/* primary-300 */}
    <circle cx="60" cy="60" r="40" fill="none" stroke="#B3D9FF" strokeWidth="3" /> {/* primary-200 */}
    <circle cx="60" cy="60" r="30" fill="none" stroke="#818CF8" strokeWidth="2" /> {/* accent-300 */}
    <circle cx="60" cy="60" r="8" fill="#4A90E2" /> {/* primary-300 */}
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 120 120" className="w-16 md:w-20 h-16 md:h-20">
    <path d="M20,100 L100,20" stroke="#4A90E2" strokeWidth="4" fill="none" /> {/* primary-300 */}
    <circle cx="30" cy="90" r="8" fill="#B3D9FF" /> {/* primary-200 */}
    <circle cx="60" cy="60" r="8" fill="#4A90E2" /> {/* primary-300 */}
    <circle cx="90" cy="30" r="8" fill="#818CF8" /> {/* accent-300 */}
  </svg>
);

const GlobalIcon = () => (
  <svg viewBox="0 0 120 120" className="w-16 md:w-20 h-16 md:h-20">
    <circle cx="60" cy="60" r="45" fill="none" stroke="#4A90E2" strokeWidth="3" /> {/* primary-300 */}
    <path d="M60,15 A45,45 0 0,1 60,105" fill="none" stroke="#B3D9FF" strokeWidth="3" /> {/* primary-200 */}
    <path d="M15,60 H105" stroke="#818CF8" strokeWidth="3" /> {/* accent-300 */}
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 120 120" className="w-16 md:w-20 h-16 md:h-20">
    <rect x="20" y="40" width="80" height="60" fill="none" stroke="#4A90E2" strokeWidth="3" rx="4" /> {/* primary-300 */}
    <path d="M40,40 V20 H80 V40" fill="none" stroke="#B3D9FF" strokeWidth="3" /> {/* primary-200 */}
    <line x1="40" y1="60" x2="80" y2="60" stroke="#818CF8" strokeWidth="3" /> {/* accent-300 */}
    <line x1="40" y1="80" x2="80" y2="80" stroke="#818CF8" strokeWidth="3" /> {/* accent-300 */}
  </svg>
);

const Motto = () => {
  return (
    <section
      id="motto"
      aria-label="motto"
      className="relative select-none flex flex-col lg:px-12 px-4 w-full pt-16 lg:pt-24 min-h-screen items-center overflow-hidden transition-colors duration-300 "
    >
      <div className="mx-auto w-full h-full relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Visual Elements */}
          <div className="relative h-auto lg:h-[500px]">
            <div className="relative z-10 bg-secondary-700/10 backdrop-blur-sm rounded-[40px] p-4 lg:p-8 shadow-lg h-full transition-colors duration-300">
              <h3 className="text-heading-4 font-open-sans text-on-dark mb-4 lg:mb-8">
                Oracle EPM Excellence
              </h3>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex flex-col items-center p-2 lg:p-4 bg-secondary-700/40 rounded-[40px] transition-colors duration-300">
                    <EngagementIcon />
                    <div className="text-center mt-2 lg:mt-4">
                      <div className="text-2xl lg:text-3xl font-grotesk font-bold text-accent-300">98%</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Client Satisfaction</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-2 lg:p-4 bg-secondary-700/40 rounded-[40px] transition-colors duration-300">
                    <GrowthIcon />
                    <div className="text-center mt-2 lg:mt-4">
                      <div className="text-2xl lg:text-3xl font-grotesk font-bold text-accent-300">250+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex flex-col items-center p-2 lg:p-4 bg-secondary-700/40 rounded-[40px] transition-colors duration-300">
                    <GlobalIcon />
                    <div className="text-center mt-2 lg:mt-4">
                      <div className="text-2xl lg:text-3xl font-grotesk font-bold text-accent-300">20+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Countries Served</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-2 lg:p-4 bg-secondary-700/40 rounded-[40px] transition-colors duration-300">
                    <ProjectIcon />
                    <div className="text-center mt-2 lg:mt-4">
                      <div className="text-2xl lg:text-3xl font-grotesk font-bold text-accent-300">15+</div>
                      <div className="text-body-4 font-open-sans text-slate-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Message */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="font-open-sans text-heading-2 lg:text-heading-1 text-on-dark leading-tight">
              Transforming
              <span className="block text-accent-300">Financial</span>
              <span className="block">Operations</span>
            </h2>
           
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm p-3 lg:p-4 rounded-[40px] shadow-sm transition-colors duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary-400/50 flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-accent-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-grotesk text-body-3 lg:text-body-2 text-on-dark">Strategic Planning</h4>
                  <p className="font-open-sans text-body-4 text-slate-300">Comprehensive roadmap development</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm p-3 lg:p-4 rounded-[40px] shadow-sm transition-colors duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary-400/50 flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-accent-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-grotesk text-body-3 lg:text-body-2 text-on-dark">Technical Excellence</h4>
                  <p className="font-open-sans text-body-4 text-slate-300">Industry-leading implementation expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-36 left-0 w-1/4 h-1/4 bg-primary-300/20 rounded-full blur-3xl" />
        
      </div>
    </section>
  );
};

export default Motto;