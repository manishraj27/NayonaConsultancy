import React from "react";

const AboutDescriptionCard = ({ 
  index = "01", 
  title = "Web Development", 
  description = "A website developed to captivate and convert can elevate your brand to new heights.", 
  features = [
    "CMS Integration", 
    "Motion & Animations", 
    "3D Development"
  ],
  iconSrc = "//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
}) => {
  return (
    <div 
      className="sticky top-0 border-t border-t-secondary-300 bg-secondary-400" 
      style={{ top: "calc(20vh + 0em)", marginBottom: "17.25em" }}
    >
      <div className="flex grid-cols-12 items-center justify-start gap-x-space-xs text-left text-heading-4 font-semibold text-accent-400 md:grid md:justify-between md:gap-x-fluid">
        <span className="col-span-2">({index})</span>
        <h3 className="col-span-6 col-start-6 py-space-md 2xl:py-space-sm">{title}</h3>
        <img 
          alt="" 
          loading="lazy" 
          width={32} 
          height={32} 
          className="hidden h-6 w-6 justify-self-end opacity-30 sm:h-7 sm:w-7 xl:flex 2xl:h-8 2xl:w-8" 
          style={{ color: "transparent" }} 
          src={iconSrc} 
        />
      </div>
      
      <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-space-3xs md:grid md:min-h-[40vh] md:grid-cols-12">
        <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-space-sm pt-space-sm text-heading-4">
          <p className="max-w-[40ch] text-balance text-base font-medium text-secondary-50">
            {description}
          </p>
          
          <div className="flex flex-col divide-y divide-secondary-200">
            {features.map((feature, idx) => (
              <AboutDescriptionCardFeature 
                key={idx} 
                index={`0${idx + 1}`} 
                text={feature} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutDescriptionCardFeature = ({ index, text }) => {
  return (
    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
        {index}
      </span>
      {text}
    </span>
  );
};

export default AboutDescriptionCard;