import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Card One",
      description: "Description for card one.",
      image: "../lovable-uploads/section-box-bg.png",
    },
    {
      id: 2,
      title: "Card Two",
      description: "Description for card two.",
      image: "../lovable-uploads/section-box-bg.png",
    },
    {
      id: 3,
      title: "Card Three",
      description: "Description for card three.",
      image: "../lovable-uploads/section-box-bg.png",
    },
    {
      id: 4,
      title: "Card Four",
      description: "Description for card four.",
      image: "../lovable-uploads/section-box-bg.png",
    },
    {
      id: 5,
      title: "Card Five",
      description: "Description for card five.",
      image: "../lovable-uploads/section-box-bg.png",
    },
    {
      id: 6,
      title: "Card Six",
      description: "Description for card six.",
      image: "../lovable-uploads/section-box-bg.png",
    },
  ];

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Responsive settings based on window width
  const getResponsiveSettings = (width: number) => {
    if (width >= 1024) {
      return { cardsPerView: 4, cardWidth: 300, gap: 20 };
    } else if (width >= 768) {
      return { cardsPerView: 3, cardWidth: 250, gap: 15 };
    } else if (width >= 480) {
      return { cardsPerView: 2, cardWidth: 200, gap: 10 };
    } else {
      return { cardsPerView: 1, cardWidth: 250, gap: 10 };
    }
  };

  const { cardsPerView, cardWidth, gap } = getResponsiveSettings(windowWidth);

  const [index, setIndex] = useState(cardsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clone slides for smooth infinite loop
  const loopCards = [
    ...cards.slice(-cardsPerView), // add last N to start
    ...cards,
    ...cards.slice(0, cardsPerView), // add first N to end
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView]); // Depend on cardsPerView to reset if it changes

  const nextSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  // Handle seamless looping when reaching clone edges
  useEffect(() => {
    if (index === loopCards.length - cardsPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(cardsPerView);
      }, 300);
    } else if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(loopCards.length - cardsPerView * 2);
      }, 300);
    }
  }, [index, cardsPerView]);

  return (
    <>
      <style>{`
           .testimonial{
          background-image:url("../lovable-uploads/testimonial-bg.png");
        }
      `}
      </style>
      <div className="testimonial bg-no-repeat min-h-screen bg-cover bg-center mt-24 flex items-center justify-center">
        <div className="relative w-[90%] max-w-6xl overflow-hidden px-4 py-10">
          {/* Title and Arrows */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-12 animate-slide-in-right leading-tight text-white">
                Our Testimonials
            </h1>
            <div className="flex gap-2 z-20 self-end md:self-auto">
              <button
                onClick={prevSlide}
                className="bg-[#1a1e24] hover:bg-[#34373d] text-white shadow-md p-3 md:p-4 rounded-full transition"
              >
                <ArrowLeft size={18} className="md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#1a1e24] hover:bg-[#34373d] text-white shadow-md p-3 md:p-4 rounded-full transition"
              >
                <ArrowRight size={18} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${index * (cardWidth + gap)}px)`,
              }}
            >
              {loopCards.map((card, i) => (
                <div key={`${card.id}-${i}`} className="flex-shrink-0">
                  <div
                    className="rounded-2xl shadow-md hover:shadow-lg transition p-4 md:p-6 flex flex-col justify-end text-white bg-cover bg-center relative overflow-hidden"
                    style={{
                      width: `${cardWidth}px`,
                      height: windowWidth < 480 ? '300px' : '400px', // Adjust height for very small screens
                      backgroundImage: `url(${card.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-base md:text-lg font-semibold">{card.title}</h3>
                      <p className="text-xs md:text-sm mt-1">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-12 animate-slide-in-right leading-tight text-white">
                Our Testimonials
            </h1>
        
        </div>
      </div>
    </>
  );
};

export default Testimonial;
