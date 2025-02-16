
import Iridescence from '../../blocks/Backgrounds/Iridescence/Iridescence'
import GlassCard from './GlassCard'
import BulletinCarousel from './BulletinCarousel'
import item from "../../lib/bulletin";
import { OrbitingCirclesDemo } from './../magicui/OrbitingCirclesDemo';

function RightSection() {
    return (
        <div className="hidden lg:flex absolute right-1 top-2 w-1/2 h-[97%] rounded-3xl flex flex-col items-center justify-center p-10 z-[1] overflow-hidden">

            {/* Iridescence effect of Blue Color in the background*/}
            <div className="absolute inset-0 w-full h-full">
                <Iridescence
                    color={[0.4, 1, 1]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={0.5}
                />
            </div>

            <GlassCard className="w-64 h-48">

            </GlassCard>
            <OrbitingCirclesDemo />


            {/* Bulletin Carousel */}
            <div className="absolute w-full h-full flex items-center justify-center mt-[440px]">
                <BulletinCarousel items={item} />
            </div>
        </div>
    )
}

export default RightSection




// <div className="absolute pb-32 top-12 inset-0 w-full h-full flex items-center justify-center">
// <AnimatedBeamDemo />
// </div>