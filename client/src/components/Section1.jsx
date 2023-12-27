import React from "react";
import img from "../assets/8690699_3969609.jpg";
import { IoCalendarSharp } from "react-icons/io5";

export default function Section1() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h2 className="text-4xl font-bold">Light,Fast & Powerful</h2>
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit in
            odio hic distinctio sit error natus quis est molestias at
            repellendus incidunt accusamus, labore nesciunt. Dolorem ipsam quo
            laboriosam dicta. Quidem tempora doloremque possimus numquam laborum
            cum maiores voluptas deleniti, libero neque. Dicta numquam, pariatur
            itaque assumenda hic quia, tempore nulla sed eligendi earum eum illo
            doloribus vitae iure aliquam. Earum ducimus reiciendis magni
          </div>
          <div className="flex gap-6">
            <div className="p-3 flex flex-col gap-5 flex-1">
              <div className="text-4xl">
                <IoCalendarSharp />
              </div>
              <div>
                <h3 className="text-xl font-bold">Title Goes Here</h3>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                in odio hic distinctio sit error natus quis est molestias at
              </div>
            </div>
            <div className="p-3 flex flex-col gap-3 flex-1">
              <div className="text-4xl">
                <IoCalendarSharp />
              </div>
              <div>
                <h3 className="text-xl font-bold">Title Goes Here</h3>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                in odio hic distinctio sit error natus quis est molestias at
              
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={img} className="" alt="" />
        </div>
      </div>
    </>
  );
}
