import Heading from "./Heading"



function About() {
  return (
    <section
      id="about"
      className="relative flex w-full min-h-screen items-center justify-between lg:px-12 px-4"
      aria-label="About"
    >
      <Heading title="About Us" description="About Us"/>
    </section>
  )
}

export default About