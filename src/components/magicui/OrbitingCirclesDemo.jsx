import OrbitingCircles from "./OrbitingCircles";
import Icons from './../../lib/Icons';


export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex  h-[200px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={20} radius={100}>
        <Icons.accountRec />
        <Icons.consolidation />
        <Icons.planning />
        <Icons.profitability />
        <Icons.reporting />
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={50} reverse speed={2}>
      <Icons.accountRec />
        <Icons.consolidation />
        <Icons.planning />
        <Icons.profitability />
      </OrbitingCircles>
    </div>
  );
}

