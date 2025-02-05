import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const BulletinCarousel = ({ items }) => {
  const defaultItems = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s",
      category: "Journal",
      title: "Col becomes a trustee for local mental health charity",
      description: "Colin Grist, Creative Director & Co-Founder at Few and Far has joined the board at mental health charity Leeds Mind as a Trustee.",
      link: "/journal/mental-health-trustee",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s",
        category: "News",
        title: "Few and Far wins Best in Show at the Roses Creative Awards",
        description: "We're thrilled to announce that our work with the National Trust has been awarded Best in Show at the Roses Creative Awards.",
        link: "/news/best-in-show",

    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s",
        category: "Journal",
        title: "ioiuiui becomes a trustee for local mental health charity",
        description: "Colin Grist, Creative Director & Co-Founder at Few and Far has joined the board at mental health charity Leeds Mind as a Trustee.",
        link: "/journal/mental-healt"
    }
  ];

  const carouselItems = items || defaultItems;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute top-[175px] w-full px-2">
        <div
          aria-label="Bulletin pagination"
          className="absolute right-full mr-[15px] top-1/2 -translate-y-1/2 grid gap-2"
        >
          {/* Previous Button */}
          <button 
            onClick={handlePrev} 
            aria-label="Previous Bulletin"
            className="size-[8px] relative group"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              size-[44px] rounded-full flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronUp className="text-white/70" />
            </div>
          </button>

          {/* Pagination Dots */}
          {carouselItems.map((_, index) => (
            <div
              key={index}
              aria-current={index === currentIndex}
              aria-label={`Bulletin #${index + 1}`}
              className={`size-[8px] border-brand-cream/60 border rounded-full transition
                ${
                  index === currentIndex
                    ? "bg-brand-cream scale-100"
                    : "bg-brand-cream/60 scale-50"
                }`}
            />
          ))}

          {/* Next Button */}
          <button 
            onClick={handleNext} 
            aria-label="Next Bulletin"
            className="size-[8px] relative group"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              size-[44px] rounded-full flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronDown className="text-white/70" />
            </div>
          </button>
        </div>

        {/* Current Bulletin Item */}
        <a
          href={carouselItems[currentIndex].link}
          className="grid grid-cols-[50px_1fr] gap-3 items-start bg-white/10 backdrop-blur-md 
           rounded-3xl p-3 transition-all duration-300 hover:bg-white/20
           border border-white/20 shadow-md"
        >
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            className="w-[50px] h-[50px] object-cover rounded-xl"
          />

          <div className="overflow-hidden">
            <div className="flex font-open-sans gap-1 text-xs uppercase tracking-wider text-white/70 mb-1">
              <span>{carouselItems[currentIndex].category}</span>
            </div>

            <h3 className="font-open-sans font-medium text-white mb-1 text-sm line-clamp-2">
              {carouselItems[currentIndex].title}
            </h3>

            <p className="text-xs font-grotesk text-body-2 text-white/80 line-clamp-2 hidden md:block">
              {carouselItems[currentIndex].description}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BulletinCarousel;