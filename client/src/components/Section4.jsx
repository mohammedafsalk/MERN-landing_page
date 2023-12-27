import React from "react";
import img from "../assets/6860680.jpg";

export default function Section4() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <img src={img} className="" alt="" />
        </div>
        <div className="flex flex-col gap-5 flex-1 justify-center align-middle">
          <div className="">
            <h2 className="text-4xl font-bold text-center">
              Light,Fast & Powerful
            </h2>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit in
              odio hic distinctio sit error natus quis est molestias at
            </p>
          </div>
          <div className="flex justify-center">
            <button className="border bg-blue-700 text-white font-medium rounded-md  w-44">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
