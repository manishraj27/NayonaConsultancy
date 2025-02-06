import gsap from "gsap";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef, forwardRef } from "react";

const BulletinCard = forwardRef(({ item, state }, ref) => {
  const getStyles = () => {
    switch (state) {
      case 'current':
        return {
          transform: "translateY(0) scale(1)",
          zIndex: 20,
          opacity: 1,
          filter: "blur(0px)"
        };
      case 'next':
        return {
          transform: "translateY(20px) scale(0.95)",
          zIndex: 10,
          opacity: 0.7,
          filter: "blur(2px)"
        };
      case 'reflection':
        return {
          transform: "translateY(40px) scale(0.9)",
          zIndex: 5,
          opacity: 0.4,
          filter: "blur(4px)"
        };
      case 'exitTop':
        return {
          transform: "translateY(100px)",
          opacity: 0,
          zIndex: 0
        };
      case 'exitBottom':
        return {
          transform: "translateY(-50px)",
          opacity: 0,
          zIndex: 0
        };
      default:
        return {};
    }
  };

  const styles = getStyles();

  return (
    <div 
      ref={ref}
      className="absolute w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
      style={{
        ...styles,
        transformOrigin: 'center bottom'
      }}
    >
      <a
        href={item.link}
        className="
          grid grid-cols-[50px_1fr] gap-3 items-start 
          backdrop-blur-sm rounded-3xl p-3
          border border-white/20 shadow-lg
          bg-white/10 bg-clip-padding
          relative overflow-hidden
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-[50px] h-[50px] object-cover rounded-2xl"
        />
        <div className="overflow-hidden">
          <div className="flex font-open-sans gap-1 text-xs uppercase tracking-wider text-white/70 mb-1">
            <span>{item.category}</span>
          </div>
          <h3 className="font-open-sans font-medium text-body-2 text-white mb-1 text-sm line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs font-grotesk text-body-2 text-white/80 line-clamp-2 hidden md:block">
            {item.description}
          </p>
        </div>
      </a>
    </div>
  );
});

BulletinCard.displayName = "BulletinCard";

const BulletinCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);
  const carouselRef = useRef(null);

  const getNextIndex = (current) => (current + 1) % items.length;
  const getPrevIndex = (current) => (current - 1 + items.length) % items.length;

  const DOTS_COUNT = 3;

  const getDotIndices = (totalItems, currentIndex) => {
    if (totalItems <= DOTS_COUNT) return [...Array(totalItems).keys()];

    const half = Math.floor(DOTS_COUNT / 2);
    let start = Math.max(0, currentIndex - half);
    let end = start + DOTS_COUNT - 1;

    if (end >= totalItems) {
      end = totalItems - 1;
      start = Math.max(0, end - DOTS_COUNT + 1);
    }

    return Array.from({ length: DOTS_COUNT }, (_, i) => start + i);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection('bottom');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
      setAnimationDirection(null);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection('top');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => getPrevIndex(prevIndex));
      setAnimationDirection(null);
      setIsAnimating(false);
    }, 500);
  };

  const visibleIndices = getDotIndices(items.length, currentIndex);

  return (
    <div 
      ref={carouselRef} 
      className="relative w-full max-w-md h-[100px] perspective-1000"
    >
      <div className="absolute w-full h-full">
        <BulletinCard 
          item={items[getPrevIndex(currentIndex)]} 
          state={animationDirection === 'top' ? 'exitBottom' : 'reflection'} 
        />
        <BulletinCard 
          item={items[currentIndex]} 
          state={animationDirection ? 
            (animationDirection === 'top' ? 'exitBottom' : 'exitTop') 
            : 'current'
          } 
        />
        <BulletinCard 
          item={items[getNextIndex(currentIndex)]} 
          state={animationDirection === 'bottom' ? 'exitTop' : 'next'} 
        />
      </div>

      <div className="absolute right-full mr-[15px] top-1/2 -translate-y-1/2 grid gap-2">
        <button 
          onClick={handlePrev} 
          disabled={isAnimating}
          className="size-[8px] relative group"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      size-[44px] rounded-full flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      hover:bg-white/10"
          >
            <ChevronUp className="text-white/70 transition-transform group-hover:scale-110" />
          </div>
        </button>

        {visibleIndices.map((index) => (
          <div
            key={index}
            aria-current={index === currentIndex}
            aria-label={`Bulletin #${index + 1}`}
            className={`size-[8px] border-brand-cream/60 border rounded-full
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    ${index === currentIndex
              ? "bg-brand-cream scale-100 shadow-lg"
              : "bg-brand-cream/60 scale-50"
            }`}
          />
        ))}

        <button 
          onClick={handleNext} 
          disabled={isAnimating}
          className="size-[8px] relative group"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      size-[44px] rounded-full flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      hover:bg-white/10"
          >
            <ChevronDown className="text-white/70 transition-transform group-hover:scale-110" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BulletinCarousel;