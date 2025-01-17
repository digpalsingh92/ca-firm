import "../App.css";
import {ImageSlider} from "../components/ImageSlider";
import OurServices from "../components/OurServices";
import HomeOverview from "../components/HomeOverview";
import ScrollableSection from "../components/ScrollableSection";
import { Helmet } from "react-helmet";

export default function Home() {
 
  return (
    <>
     <Helmet>
            <title>Home - KCA TaxCare</title>
            <meta name="description" content="Explore our comprehensive range of accounting and financial services." />
          </Helmet>
      <div className="w-full h-full mt-[10px] flex flex-col">
        <section className="w-full h-full flex ">
          <div className="w-full top-5">
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
