import React from "react";

export default function PricePart() {
  return (
    <>
      <div className="p-4 bg-[#f2f5ff] h-[400px]  flex  justify-center align-middle ">
        <div className="max-w-md flex flex-col justify-evenly align-middle gap-10 ">
          <div className=" text-center p-1">
            <h2 className="font-bold text-2xl">A Price To Suit Everyone</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit in
              odio hic distinctio sit error natus quis est molestias at
            </p>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className="text-3xl font-semibold">$40</h1>
              <p className="font-semibold">UI Design kit</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border bg-blue-700 text-white font-medium rounded-md  w-44">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
