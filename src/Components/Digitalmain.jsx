import React from "react";

const Visualmain = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-auto md:h-[70vh] flex items-center justify-center py-10 md:py-0">
        <div className="bg-white h-auto md:h-full w-[90%] flex flex-col md:flex-row justify-center items-center">
          {/* Left Section - Text Content */}
          <div className="left w-full md:w-8/12 flex flex-col justify-left items-start relative px-4 md:px-0 mt-10 md:mt-36">
            <h1 className="text-2xl md:text-3xl text-[#442AC7] font-semibold mt-4">
            Digital Marketing
            </h1>
            <div className="line w-32 md:w-44 bg-[#442AC7] mt-2 h-[2px]"></div>
            <p className="text-lg md:text-xl text-gray-600 mt-3">
            From SEO and content marketing to social media management and PPC campaigns,our <br /> data-driven approach ensures that every campaign is optimized for maximum impact, <br /> helping you reach and engage your target audience effectively.

            </p>

            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full">
              <button className="w-full sm:w-auto px-7 py-2 bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] rounded-md text-white font-semibold text-lg">
                Let's Contact
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="right w-full md:w-3/12 flex items-center justify-center bg-transparent mt-6 md:mt-0">
            <div className="bg-transparent h-[250px] md:h-[60%] w-[80%] md:w-[100%] flex items-center justify-center">
              <img
                src="/digital.png"
                alt="pics"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualmain;
