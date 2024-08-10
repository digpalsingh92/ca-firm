import ImageSlider from "../Components/ImageSlider";
import "../App.css";
import OurTeam from "../Components/OurTeam";
import OurServices from "../Components/OurServices";
import HomeOverview from "../Components/HomeOverview";

export default function Home() {
  const containerStyles = {
    width: "100%",
    height: "600px",
    margin: "0 auto",
  };
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <section className="w-full h-full flex ">
          <div style={containerStyles}>
            <ImageSlider />
          </div>
        </section>
        <section>
          <HomeOverview />
          </section>
        <section>
        <OurServices />
        </section>
        <section className="h-[480px]">
        <OurTeam />
        </section>
      </div>
    </>
  );
}
