import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedinCircular, TiSocialTwitter, TiSocialYoutube, } from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <div className="bg-[#e6ecfe]">
        <div className="max-w-6xl mx-auto p-5">
          <div className="flex justify-between gap-5">
            <div className="flex gap-3 justify-center items-center align-middle text-gray-400 ">
              <RiCopyrightLine />
              <p>Copyright</p>
            </div>
            <div>
              <h1 className="text-xl text-blue-700 font-extrabold">Landing</h1>
            </div>
            <div>
              <button className="border bg-blue-700 text-white font-medium rounded-md  w-44">
                Buy Now
              </button>
            </div>
          </div>
          <div className="mt-5 p-4 flex justify-between border border-t-2 border-t-gray-400">
            <div>
              <ul className="list-none flex justify-between gap-10 text-gray-400 font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="list-none flex justify-between gap-10 text-gray-400 font-medium text-2xl">
                <li><TiSocialFacebook /></li>
                <li><TiSocialLinkedinCircular /></li>
                <li><TiSocialYoutube /></li>
                <li><TiSocialInstagram /></li>
                <li><TiSocialTwitter /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
