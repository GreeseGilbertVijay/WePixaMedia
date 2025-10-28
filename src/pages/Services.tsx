import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from '../components/Navbar';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const App: React.FC = () => {
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

  const cardsPerView = 4;
  const cardWidth = 300;
  const gap = 20;
  const [index, setIndex] = useState(cardsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Clone slides for smooth infinite loop
  const loopCards = [
    ...cards.slice(-cardsPerView), // add last 4 to start
    ...cards,
    ...cards.slice(0, cardsPerView), // add first 4 to end
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
  }, [index]);

  return (
    <>
    <Navbar />
    <div className="mt-24 flex items-center justify-center">
      <div className="relative w-[90%] max-w-6xl overflow-hidden px-4 py-10">

        {/* Title and Arrows */}
        <div className="flex justify-between items-start">
        <h1 className="text-5xl font-medium mb-12 animate-slide-in-right leading-tight text-white">
        Industries<br></br> We Serve</h1>
        <div className="flex gap-2 z-20">
          <button
            onClick={prevSlide}
            className="bg-[#1a1e24] hover:bg-[#34373d] text-white shadow-md p-4 rounded-full transition"
          >
            <ArrowLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#1a1e24] hover:bg-[#34373d] text-white shadow-md p-4 rounded-full transition"
          >
            <ArrowRight size={22} />
          </button>
        </div>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden" style={{ width: `${cardsPerView * cardWidth + (cardsPerView - 1) * gap}px` }}>
          <div
            ref={sliderRef}
            className={`flex gap-5 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${index * (cardWidth + gap)}px)`,
            }}
          >
            {loopCards.map((card, i) => (
              <div key={`${card.id}-${i}`} className="flex-shrink-0">
                <div
                  className="rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-end text-white bg-cover bg-center relative overflow-hidden"
                  style={{
                    width: `${cardWidth}px`,
                    height: '400px',
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm mt-1">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
