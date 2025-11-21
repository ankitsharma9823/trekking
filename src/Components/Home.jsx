// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import About from "../Pages/About";
import OurTrek from "../Pages/OurTrek";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      title: "Himalayan Sunrise",
      description: "Early sunrise hitting the snow peaks.",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
    },
    {
      id: 2,
      title: "Nepal Trekking Trail",
      description: "A classic trekking route in the Himalayas.",
      image: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg"
    },
    {
      id: 3,
      title: "Mountain Landscape",
      description: "Beautiful mountain view with clear sky.",
      image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
    },
    {
      id: 4,
      title: "Snowy Mountain Path",
      description: "Sharp trails leading into the peaks.",
      image: "https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg"
    }
  ];

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex((i) => (i + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex((i) => (i - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToSlide = (i) => {
    if (!isTransitioning && i !== index) {
      setIsTransitioning(true);
      setIndex(i);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Auto Slide Timer
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [index]);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%;
          margin: 0;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Slider Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-black">
        {/* Image Container with Smooth Transition */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img) => (
            <div key={img.id} className="min-w-full h-full relative flex-shrink-0">
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Text Content - Fully Responsive */}
              <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-4 sm:left-6 md:left-10 lg:left-16 right-4 sm:right-6 text-white z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl animate-fade-in">
                  {img.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl drop-shadow-lg opacity-90">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Navigation Arrow - Responsive */}
        <button
          onClick={prev}
          disabled={isTransitioning}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 
                     bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white 
                     p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 
                     hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" />
        </button>
        
        {/* Right Navigation Arrow - Responsive */}
        <button
          onClick={next}
          disabled={isTransitioning}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 
                     bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white 
                     p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 
                     hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" />
        </button>

        {/* Dot Indicators - Responsive & Interactive */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 md:gap-3 bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-full">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full cursor-pointer hover:bg-white disabled:cursor-not-allowed ${
                i === index
                  ? "bg-white w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5"
                  : "bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 h-2 sm:h-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>

        {/* Slide Counter - Responsive */}
        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20 
                        bg-black/40 backdrop-blur-sm text-white 
                        px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full 
                        text-xs sm:text-sm md:text-base font-semibold shadow-lg">
          <span className="font-bold">{index + 1}</span>
          <span className="opacity-70 mx-1">/</span>
          <span className="opacity-70">{images.length}</span>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((index + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Other Sections - Untouched */}
      <div className="bg-gray-100 flex items-center justify-center text-4xl">
        <OurTrek />
      </div>
      <div className="bg-gray-200 justify-center">
        <About />
      </div>
    </>
  );
};

export default Home;