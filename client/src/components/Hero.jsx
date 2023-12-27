import React from "react";
import img from "../assets/features-1.svg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <div className="flex  flex-col gap-6 max-w-lg justify-center align-middle  h-full">
        <div className="text-black text-4xl font-bold">
          <h1>Introduce Your Product Quickly & Effectively</h1>
        </div>
        <div className="text-black ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis labore assumenda cupiditate itaque numquam accusamus cum,
          hic esse repudiandae sint. Culpa doloribus libero tenetur unde dolorum
          dignissimos, delectus maxime. Dolorum, quam. Hic numquam quas ea
          nulla. Earum, incidunt. Rem nihil ipsum minus quae dolorem nisi quos
          saepe voluptatibus, reprehenderit nostrum maiores officia quis
          consequuntur repellendus pariatur iusto iste veritatis! Repudiandae,
          explicabo? Sit dignissimos molestias veniam ratione soluta amet
          tempore doloremque voluptate doloribus porro repellendus, voluptas
        </div>
        <div className="flex gap-7">
          <button className="bg-blue-700 w-48 p-1 text-white rounded-sm">
            Purchase Now
          </button>
          <button className="border border-blue-700 w-48 p-1 text-black rounded-sm">
            Buy Later
          </button>
        </div>
      </div>
    </>
  );
}
