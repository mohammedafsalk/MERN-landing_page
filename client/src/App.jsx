import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import PricePart from "./components/PricePart";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col">
        <Navbar />
        <div className="app">
          <Hero />
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
        <PricePart />
        <Footer/>
    </>
  );
}
