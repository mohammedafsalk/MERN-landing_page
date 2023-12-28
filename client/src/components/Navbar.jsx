import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, setRefresh } = useUser();

  const HandleLogout = () => {
    localStorage.removeItem("jwtToken");
    setRefresh();
  };

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
      <div className="flex justify-end gap-5 items-center">
        {user && <p className="font-medium">Welcome {user.name}</p>}
        <button
          onClick={HandleLogout}
          className="border bg-blue-700 text-white font-medium rounded-md px-1"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
