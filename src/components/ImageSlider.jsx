import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
// }

const slides = [
  {
    image: "images/image-1.webp",
    title: "Expert Financial Guidance",
    description: "Professional accounting and advisory services for your business success"
  },
  {
    image: "images/image-2.webp",
    title: "Tax Planning Excellence",
    description: "Strategic tax solutions to optimize your financial position"
  },
  {
    image: "images/image-3.webp",
    title: "Business Advisory",
    description: "Comprehensive consulting services for sustainable growth"
  },
  {
    image: "images/image-4.webp",
    title: "Business Advisory",
    description: "Comprehensive consulting services for sustainable growth"
  },
  {
    image: "images/image-5.webp",
    title: "Business Advisory",
    description: "Comprehensive consulting services for sustainable growth"
  },
];

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative top-[4rem] h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            loading='eager'
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 left-5 flex items-center justify-center text-center text-white">
            <div className="max-w-3xl px-4">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl sm:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        aria-label='Previous Slide'
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        aria-label='Next Slide'
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label='Slider Position Indicator'
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-10 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}