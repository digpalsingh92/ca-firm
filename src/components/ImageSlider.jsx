import React, { useEffect, useState } from "react";

const slides = [
  { url: "http://localhost:5173/image-1.jpg", title: "Income-Tax Return" },
  { url: "http://localhost:5173/image-2.jpg", title: "Activa" },
  { url: "http://localhost:5173/image-3.jpg", title: "Midjourney" },
  { url: "http://localhost:5173/image-4.jpg", title: "Panda" },
  { url: "http://localhost:5173/image-5.jpg", title: "W3 School" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
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
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>
      <div className="absolute w-full flex justify-center bottom-4 z-10">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-1 cursor-pointer text-2xl ${
              currentIndex === slideIndex ? "text-green-500" : "text-gray-500"
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
