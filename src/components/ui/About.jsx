import Heading from "./Heading"



function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:px-12 px-4 w-full py-16 lg:py-24 overflow-hidden"
      aria-label="About"
    >
      <Heading title="About Us" description="About Us"/>
    </section>
  )
}

export default About