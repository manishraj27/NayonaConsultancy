import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex w-full h-screen items-center justify-between px-10 bg-white"
      aria-label="hero"
    >
      {/* Left Content */}
      <div className="max-w-xl">
        {/* Left side company details  */}
      </div>
   
      {/* Right Gradient Box */}
      <div className="absolute right-2 top-2 w-[48%] h-[97%] rounded-3xl flex flex-col items-center justify-center text-white p-10 shadow-2xl">
   
      </div>
    </section>
  );
};

export default Hero;
