import ImageSlider from "../Components/ImageSlider";
import "../App.css";
import OurServices from "../Components/OurServices";
import HomeOverview from "../Components/HomeOverview";
import ScrollableSection from "../Components/ScrollableSection";

export default function Home() {
  const containerStyles = {
    width: "100%",
    height: "600px",
    margin: "0 auto",
  };

  const slides = [
    { url: "images/image-1.png", title: "Income-Tax Return" },
    { url: "images/image-2.png", title: "Activa" },
    { url: "images/image-3.jpg", title: "Accounting" },
    { url: "images/image-4.png", title: "Panda" },
    { url: "images/image-5.png", title: "W3 School" },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <section className="w-full h-full flex ">
          <div style={containerStyles}>
            <ImageSlider slides={slides} autoSlideInterval={4000} />
          </div>
        </section>
        <section>
          <HomeOverview />
          </section>
        <section>
        <OurServices />
        </section>
        <section >
          <ScrollableSection />
        </section>
      </div>
    </>
  );
}
