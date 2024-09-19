import ImageSlider from "../components/ImageSlider";
import "../App.css";
import OurServices from "../components/OurServices";
import HomeOverview from "../components/HomeOverview";
import ScrollableSection from "../components/ScrollableSection";

export default function Home() {
  const containerStyles = {
    width: "100%",
    // height: "580px",
    aspectRatio: "14/4",
    margin: "0 auto",
  };

  const slides = [
    { url: "images/image-1.webp", title: "Income-Tax Return" },
    { url: "images/image-2.webp", title: "Activa" },
    { url: "images/image-3.webp", title: "Accounting" },
    { url: "images/image-4.webp", title: "Panda" },
    { url: "images/image-5.webp", title: "W3 School" },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <section className="w-full h-full flex ">
          <div className="w-full aspect-[12/5]">
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
