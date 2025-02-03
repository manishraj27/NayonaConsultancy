import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Database, BarChart2, Star, Heart, Zap } from 'lucide-react';
import Heading from '../ui/Heading';

const HeroSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (container) {
      const scrollTo = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full pt-24 min-h-[90vh]">
      {/* Header Section */}
      <div className="container mx-auto p-8">
      <Heading title="Frequently Asked Questions" description="FAQ" />
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <span className="text-sm text-gray-500">[001]</span>
</div>
&nbsp;
--------------------
        
        {/* <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-4 sm:mb-6">
              We're strong on
              <br className="hidden sm:block" />
              Oracle EPM & analytics
            </h1>
          </div>
          <div className="text-sm text-gray-600">
            Records <span className="text-gray-400">[100+ CLIENTS]</span>
            <p className="max-w-xs mt-2">
              We analyze enterprise financial data from companies worldwide to deliver strategic insights.
            </p>
          </div>
        </div>
      </div> */}

      {/* Navigation Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-2 mb-4">
        <button 
          onClick={() => scroll('left')} 
          className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Bento-Style Card Container */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 sm:pl-6 lg:pl-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Card 1: Services Overview */}
          <div className="min-w-[360px] h-[300px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 snap-start shadow-sm flex flex-col justify-between">
            <h3 className="font-medium text-xl">Core EPM Services</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2 bg-white rounded-lg text-center shadow-sm">
                <div className="font-medium">PLANNING</div>
                <div className="text-sm text-blue-600">ACTIVE</div>
              </div>
              <div className="p-2 bg-white rounded-lg text-center shadow-sm">
                <div className="font-medium">HFM</div>
                <div className="text-sm text-blue-600">EXPERT</div>
              </div>
              <div className="p-2 bg-white rounded-lg text-center shadow-sm">
                <div className="font-medium">CLOUD</div>
                <div className="text-sm text-blue-600">CERTIFIED</div>
              </div>
            </div>
            <p className="text-gray-600">
              We primarily focus on enterprise performance management and cloud transformation success.
            </p>
          </div>

          {/* Card 2: Testimonial */}
          <div className="min-w-[350px] h-[200px] bg-white rounded-2xl p-6 snap-start shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-lg italic">
                "Their Oracle EPM expertise transformed our financial consolidation process completely."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/api/placeholder/40/40"
                alt="Client"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Finance Director</p>
                <p className="text-sm text-gray-500">Global Enterprise Client</p>
              </div>
            </div>
          </div>

          {/* Card 3: Metrics */}
          <div className="min-w-[300px] h-[300px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 snap-start flex flex-col justify-between">
            <div>
              <Database className="h-6 w-6 mb-4" />
              <p className="text-lg">
                Each implementation, we analyze success metrics and outcomes across multiple enterprise benchmarks.
              </p>
            </div>
            <div className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm">
              [Best in class]
            </div>
          </div>

          {/* Card 4: Rating */}
          <div className="min-w-[280px] h-[150px] bg-white rounded-2xl p-6 snap-start shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-medium">5.0</span>
            </div>
            <h3 className="text-xl font-medium">Implementation Rating</h3>
            <p className="text-gray-600">
              Rated by 100+ enterprise clients for our Oracle EPM solutions.
            </p>
          </div>

          {/* Card 5: Highlight */}
          <div className="min-w-[300px] h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 snap-start shadow-sm flex flex-col justify-between">
            <div>
              <Zap className="h-6 w-6 mb-4 text-purple-600" />
              <h3 className="text-xl font-medium">Fast Implementation</h3>
            </div>
            <p className="text-gray-600">
              We deliver Oracle EPM solutions 30% faster than industry standards.
            </p>
          </div>

          {/* Spacer */}
          <div className="min-w-[100px] h-[300px] snap-start" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;