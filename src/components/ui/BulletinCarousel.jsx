import gsap from "gsap";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef, forwardRef } from "react";

const BulletinCard = forwardRef(({ item, isNext }, ref) => (
  <a
    href={item.link}
    ref={ref}
    className={`
      absolute w-full grid grid-cols-[50px_1fr] gap-3 items-start 
      backdrop-blur-md rounded-3xl p-3
      border border-white/20 shadow-lg transform
      ${isNext ? 'z-10 bg-white/5 pointer-events-none' : 'z-20 bg-white/10'}
    `}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-[50px] h-[50px] object-cover rounded transform transition-transform duration-300 hover:scale-105"
    />
    <div className="overflow-hidden">
      <div className="flex font-open-sans gap-1 text-xs uppercase tracking-wider text-white/70 mb-1">
        <span>{item.category}</span>
      </div>
      <h3 className="font-open-sans font-medium text-white mb-1 text-sm line-clamp-2">
        {item.title}
      </h3>
      <p className="text-xs font-grotesk text-body-2 text-white/80 line-clamp-2 hidden md:block">
        {item.description}
      </p>
    </div>
  </a>
));

BulletinCard.displayName = 'BulletinCard';

const BulletinCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentCardRef = useRef(null);
  const nextCardRef = useRef(null);

  const getNextIndex = (current) => (current + 1) % items.length;

  // Enhanced initial animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!currentCardRef.current || !nextCardRef.current) return;

      const ctx = gsap.context(() => {
        // Reset positions with improved initial state
        gsap.set([currentCardRef.current, nextCardRef.current], {
          y: 70,
          opacity: 0,
          scale: 0.85,
          rotateX: 10
        });

        // Animate current card with spring physics
        gsap.to(currentCardRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
          clearProps: "transform"
        });

        // Animate next card with slight delay and different physics
        gsap.to(nextCardRef.current, {
          y: 16,
          opacity: 0.6,
          scale: 0.95,
          rotateX: 5,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out"
        });
      });

      return () => {
        ctx.revert();
        clearTimeout(timeout);
      };
    }, 0);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating || !currentCardRef.current || !nextCardRef.current) return;
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(getNextIndex);
        setIsAnimating(false);
      }
    });

    // Enhanced next animation with physics and rotation
    timeline
      .to(currentCardRef.current, {
        y: -70,
        opacity: 0,
        scale: 0.85,
        rotateX: -10,
        duration: 0.5,
        ease: "power3.in"
      })
      .to(nextCardRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.4");
  };

  const handlePrev = () => {
    if (isAnimating || !currentCardRef.current || !nextCardRef.current) return;
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((current) => (current - 1 + items.length) % items.length);
        setIsAnimating(false);
      }
    });

    // Enhanced prev animation with physics and rotation
    timeline
      .to(currentCardRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.85,
        rotateX: 10,
        duration: 0.5,
        ease: "power3.in"
      })
      .to(nextCardRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.4");
  };

  return (
    <div className="relative w-full max-w-md h-[200px]">
      <div className="absolute top-[270px] w-full px-2">
        <div className="relative h-[120px] perspective-1000">
          <BulletinCard 
            ref={currentCardRef}
            item={items[currentIndex]}
            isNext={false}
          />
          <BulletinCard 
            ref={nextCardRef}
            item={items[getNextIndex(currentIndex)]}
            isNext={true}
          />
        </div>
        
        <div className="absolute right-full mr-[15px] top-1/2 -translate-y-1/2 grid gap-2">
          <button 
            onClick={handlePrev}
            disabled={isAnimating}
            className="size-[8px] relative group"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          size-[44px] rounded-full flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          hover:bg-white/10">
              <ChevronUp className="text-white/70 transition-transform group-hover:scale-110" />
            </div>
          </button>

          {items.map((_, index) => (
            <div
              key={index}
              aria-current={index === currentIndex}
              aria-label={`Bulletin #${index + 1}`}
              className={`size-[8px] border-brand-cream/60 border rounded-full
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${index === currentIndex 
                  ? "bg-brand-cream scale-100 shadow-lg" 
                  : "bg-brand-cream/60 scale-50"}`}
            />
          ))}

          <button 
            onClick={handleNext}
            disabled={isAnimating}
            className="size-[8px] relative group"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          size-[44px] rounded-full flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          hover:bg-white/10">
              <ChevronDown className="text-white/70 transition-transform group-hover:scale-110" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulletinCarousel;