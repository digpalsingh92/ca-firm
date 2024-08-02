import React from "react";
import BirdThumbnail from "../Asset/BirdThumbnail.jpg";

export default function HomeOverview() {
  return (
    <section className="mt-10">
      <div className="flex justify-center gap-10 items-center w-[70%] m-auto h-full">
        <div className="flex w-[30%] justify-center items-center">
          <img src={BirdThumbnail} alt="Bird" />
        </div>
        <div className=" w-[65%] h-full justify-center items-center ">
          <p className="ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            molestias amet asperiores rem libero minima ipsum placeat
            necessitatibus minus dicta mollitia, ab similique praesentium nam
            nostrum. Officiis, ab laudantium.
          </p>
        </div>
      </div>
    </section>
  );
}
