
import Features from "../homepage/Features"
import Hero from "../homepage/Hero"
import Motto from "../ui/Motto"
import TestSec from "../ui/TestSec"

function LandingPage() {
  return (
   <>
   <Hero/>
   {/* <HeroSection/> */}
   <Motto/>
   <TestSec/>
   <Features/>
   </>
  )
}

export default LandingPage