import React from "react";
import BirdThumbnail from "../Asset/BirdThumbnail.jpg";

export default function HomeOverview() {
  return (
    <section className="mt-10 bg-slate-50 p-2">
      <div className="flex justify-center p-2 gap-10 items-center w-[70%] m-auto h-full">
        <div className="flex w-[35%] justify-center items-center">
          <img className="shadow-sm shadow-slate-700" src={BirdThumbnail} alt="Bird" />
        </div>
        <div className=" w-[60%] flex flex-col h-full ">
          <h1 className="text-xl items-center ml-2 font-semibold">Best Chartered Accountant in NCR region</h1>
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
