import React from 'react';
import BulletinCarousel from './BulletinCarousel';

const TestSec = () => {
  return (
    <section className=''>

    <div className="w-full py-32 select-none px-4 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 
          className="text-6xl md:text-7xl lg:text-6xl font-serif mb-12 leading-tight"
        >
          Empowering Oracle EPM Solutions 
          <br className="hidden md:block" />
          for Financial Excellence
        </h2>
       
        <p 
          className="text-xl md:text-2xl lg:text-xl max-w-4xl mx-auto leading-relaxed"
        >
          Streamline financial planning, automate consolidations, and improve 
          decision-making with Oracle Enterprise Performance Management, 
          tailored to drive business growth and efficiency.
        </p>
      </div>
    </div>
    </section>
  );
};

export default TestSec;
