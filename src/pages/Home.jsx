import "../App.css";
import {ImageSlider} from "../components/ImageSlider";
import OurServices from "../components/OurServices";
import HomeOverview from "../components/HomeOverview";
import ScrollableSection from "../components/ScrollableSection";

export default function Home() {
 
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <section className="w-full h-full flex ">
          <div className="w-full ">
            <ImageSlider />
          </div>
        </section>
          <HomeOverview />
        <OurServices />
          <ScrollableSection />
      </div>
    </>
  );
}
