

import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <section className="bg-[#082325] w-full h-[65vh] relative overflow-hidden">
      <Navbar />

      <img
        src="../public/aboutcanva.png"
        alt=""
        className="w-full h-[100%] object-center ml-5 opacity-100"
      />

      <div className="absolute inset-0 items-start mt-36 ml-24 justify-start">
        {/* Heading with responsive text alignment */}
        <h1 className="text-5xl font-bold text-center md:text-start text-[#13737F] z-10">
          About Us
        </h1>
        {/* This paragraph will be hidden on small screens (below 'md') */}
        <h6 className="text-white w-1/3 text-start text-[22px] mt-2 items-center justify-center md:block hidden">
          To be the leading catalyst for <br /> innovation, transforming ideas
          into impactful <br /> solutions that drive success for businesses
          worldwide.
        </h6>
        {/* Adjusted button */}
        <button className="bg-[#13737f] md:block hidden w-full sm:w-32 md:w-40 mt-5 h-8 md:h-9 px-4 py-2 transform transition-transform duration-300 hover:scale-110">
          <span className="text-white text-xs sm:text-sm md:text-[14px]">
            Let's Connect 
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
