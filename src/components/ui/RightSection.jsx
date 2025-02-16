import  { useEffect, useRef, useState } from 'react';
import Iridescence from "../../blocks/Backgrounds/Iridescence/Iridescence";
import BulletinCarousel from "./BulletinCarousel";
import item from "../../lib/bulletin";
import GlassCard from "./GlassCard";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";

const RightSection = () => {
  const [paths, setPaths] = useState({ dotted: '', curved: '' });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const activeClientsRef = useRef(null);
  const animatedBeamRef = useRef(null);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const calculatePaths = () => {
    if (!activeClientsRef.current || !animatedBeamRef.current || !carouselRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const activeClients = activeClientsRef.current.getBoundingClientRect();
    const animatedBeam = animatedBeamRef.current.getBoundingClientRect();
    const carousel = carouselRef.current.getBoundingClientRect();

    // Calculate relative positions
    const startX = activeClients.left + activeClients.width/2 - container.left;
    const startY = activeClients.top + activeClients.height/2 - container.top;
    
    const beamX = animatedBeam.left + animatedBeam.width/2 - container.left;
    const beamY = animatedBeam.top - container.top; // Connect to top middle
    
    const carouselX = carousel.left + carousel.width/2 - container.left;
    const carouselY = carousel.top - container.top;

    // Calculate circle position (intersection point)
    const circleX = beamX;
    const circleY = startY;

    // Set paths
    setPaths({
      dotted: `M ${startX} ${startY} L ${startX} ${carouselY} `, // Straight dotted line
      curved: `M ${startX} ${startY} L ${circleX} ${circleY} C ${circleX} ${circleY}, ${beamX} ${circleY}, ${beamX} ${beamY}` // Solid line with curve
    });

    setCirclePosition({ x: circleX, y: circleY });
  };

  useEffect(() => {
    calculatePaths();
    window.addEventListener('resize', calculatePaths);
    return () => window.removeEventListener('resize', calculatePaths);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col p-10 z-[1] overflow-hidden"
    >
      {/* Background Iridescence */}
      <div className="absolute inset-0 w-full h-full">
        <Iridescence
          color={[0.1, 0.8, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />
      </div>

      {/* Connecting Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Dotted line to carousel */}
        <path
          d={paths.dotted}
          className="stroke-white/30"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="8"
            to="0"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Solid curved line to beam */}
        <path
          d={paths.curved}
          className="stroke-white/30"
          strokeWidth="1"
          fill="none"
        />

        {/* Intersection circle */}
        <circle
          cx={circlePosition.x}
          cy={circlePosition.y}
          r="3"
          className="fill-white"
        />
      </svg>

      {/* Active Clients Card */}
      <GlassCard 
        ref={activeClientsRef}
        className="absolute top-16 left-2 w-48 h-28 p-4 flex flex-col justify-between"
      >
        <div className="absolute top-2 left-2">
          <span className="text-3xl font-bold text-white">250+</span>
          <span className="text-white/80 block font-grotesk text-base">Active clients</span>
        </div>
        <div className="mt-12 flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-400" />
            <div className="w-6 h-6 rounded-full bg-blue-500" />
          </div>
          <button className="text-white font-open-sans bg-blue-500/20 px-3 py-1 rounded-full text-xs">
            Learn more
          </button>
        </div>
      </GlassCard>

      {/* Nayona Box */}
      <div className="absolute right-4 top-32 rounded-3xl w-[20%] aspect-square flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Iridescence
            color={[0, 1, 0.7]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.3}
          />
        </div>
        <span className="absolute text-white text-xl font-serif italic">
          Nayona
        </span>
      </div>

      {/* Animated Beam */}
      <div 
        ref={animatedBeamRef}
        className="absolute backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg bg-white/10 top-52 left-[50%] w-[40%] h-[35%] aspect-[1.12/1] flex flex-col justify-between overflow-hidden"
      >
        <AnimatedBeamDemo />
      </div>

      {/* Bulletin Carousel */}
      <div 
        ref={carouselRef}
        className="absolute bottom-14 left-0 w-full"
      >
        <div className="w-full flex items-center justify-center">
          <BulletinCarousel items={item} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
{
  /* Services Selection */
}
{
  /* <GlassCard className="w-72 mb-8">
          <h3 className="text-white mb-4">Explore our EPM solutions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between text-white bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <BarChart2 size={18} />
                <span>Planning & Budgeting</span>
              </div>
              <ChevronRight size={18} />
            </button>
  
            <button className="w-full flex items-center justify-between text-white bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <FileSpreadsheet size={18} />
                <span>Financial Consolidation</span>
              </div>
              <ChevronRight size={18} />
            </button>
  
            <button className="w-full flex items-center justify-between text-white bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <PieChart size={18} />
                <span>Profitability Analysis</span>
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        </GlassCard> */
}

{
  /* Expertise Areas */
}
{

}
