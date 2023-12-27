import React from "react";

export default function Navbar() {
  return (
    <section className="p-4 bg-transparent flex justify-between align-middle">
      <div className="">
        <ul className="list-none flex justify-between gap-10 text-blue-700 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <h1 className="text-xl text-blue-700 font-extrabold">Landings</h1>
      </div>
      <div className="flex justify-end">
        <button className="border bg-blue-700 text-white font-medium rounded-md  w-44">
          Buy Now
        </button>
      </div>
    </section>
  );
}
