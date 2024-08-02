import React from "react";

const slides = [
  { url: "http://localhost:5173/image-1.jpg", title: "income-Tax Return" },
  { url: "http://localhost:5173/image-2.jpg", title: "Activa" },
  { url: "http://localhost:5173/image-3.jpg", title: "Midjourney" },
  { url: "http://localhost:5173/image-4.jpg", title: "Panda" },
  { url: "http://localhost:5173/image-5.jpg", title: "W3 School" },
];

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  alignItems: "center",
};
const rightArrowStyles = {
  width: "30px",
  alignItems: "center",
  backgroundColor: "#334155",
  position: "absolute",
  top: "50%",
  padding: "5px",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  borderRadius: "10px",
  color: "#0d9488",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  padding: "5px",
  width: "30px",
  alignItems: "center",
  backgroundColor: "#334155",
  borderRadius: "10px",
  color: "#0d9488",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
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
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className=" text-slate-700"
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}
