import Iridescence from "../../blocks/Backgrounds/Iridescence/Iridescence";

import BulletinCarousel from "./BulletinCarousel";
import item from "../../lib/bulletin";
import GlassCard from "./GlassCard";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import {
  BarChart2,
  ChevronRight,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

function RightSection() {
  return (
    <div className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col  p-10 z-[1] overflow-hidden">
      {/* Iridescence effect of Blue Color in the background*/}
      <div className="absolute inset-0 w-full h-full">
        <Iridescence
          color={[0.4, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />
      </div>

      {/* Active Clients Card */}
      <GlassCard className="absolute top-16 left-2 w-48 h-32 p-4 flex flex-col justify-between">
        <div className="absolute top-2 left-2">
          <span className="text-3xl font-bold text-white">250+</span>
          <span className="text-white/80 block text-sm">Active clients</span>
        </div>
        <div className="mt-12 flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-400" />
            <div className="w-6 h-6 rounded-full bg-blue-500" />
          </div>
          <button className="text-white bg-blue-500/20 px-3 py-1 rounded-full text-sm">
            Learn more
          </button>
        </div>
      </GlassCard>

      {/* Bulletin Carousel */}
      <div className="absolute w-full h-full flex flex-col top-52 left-0">
        <div className="w-full h-full flex items-center justify-center">
          <BulletinCarousel items={item} />
        </div>
      </div>
    </div>
  );
}

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
  /* <GlassCard className="w-72">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-medium">Core Expertise</span>
          <span className="text-white/60 text-sm">2024</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-white text-sm">
            Oracle EPM Cloud
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-white text-sm">
            Hyperion
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-white text-sm">
            PBCS
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-white text-sm">
            FCCS
          </span>
          <button className="w-8 h-8 rounded-full bg-blue-600/20 text-white flex items-center justify-center">
            +
          </button>
        </div>
      </GlassCard> */
}
