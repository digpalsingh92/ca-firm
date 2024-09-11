import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSlider = ({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoSlide, autoSlideInterval]);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex, slides]);

  return (
    <div {...handlers} className="relative mt-5 w-full h-full overflow-hidden">
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer bg-gray-700 p-2 rounded-full"
        onClick={goToPrevious}
      >
        ❰
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer bg-gray-700 p-2 rounded-full"
        onClick={goToNext}
      >
        ❱
      </div>
      <div
        className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${currentSlide.url})`,
        }}
      ></div>
      <div className="absolute w-full flex justify-center bottom-3 z-10 sm:bottom-6">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-1 cursor-pointer text-2xl ${
              currentIndex === slideIndex ? "text-teal-500" : "text-slate-300"
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
