import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Card Component (unchanged)
const Card = ({ title, description, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "left center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[280px] h-[300px] text-white"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-200 text-blue-600">
        {icon || <div className="w-8 h-8 bg-blue-400 rounded-full"></div>}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};

// Updated HorizontalScrollSection Component
const HorizontalScrollSection = ({
  title = "Our Features",
  description = "Explore what we offer",
  cards = [],
}) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const cardElements = container.children;

    // Calculate total width of all cards including gaps
    const totalWidth = Array.from(cardElements).reduce(
      (acc, card) => acc + card.offsetWidth + 16, // 16 is the gap
      0
    );

    // Calculate the distance to scroll horizontally
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth + 50; // Add some padding

    // Horizontal scroll animation
    gsap.to(container, {
      x: -scrollDistance, // Move cards to the left
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true, // Pin the section while scrolling
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollDistance}`, // End when all cards are in view
        invalidateOnRefresh: true,
        onLeave: () => {
          // Unpin the section when horizontal scroll is complete
          gsap.set(sectionRef.current, { clearProps: "all" }); // Clear all GSAP props
        },
        onEnterBack: () => {
          // Re-pin the section when scrolling back up
          gsap.set(sectionRef.current, { position: "relative" });
        },
        // markers: true, // Uncomment for debugging
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[200vh] py-16 relative z-10 overflow-hidden" // Set height to full viewport
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Scrollable Cards Container */}
      <div className="px-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-4" // Start with cards aligned to the left
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;