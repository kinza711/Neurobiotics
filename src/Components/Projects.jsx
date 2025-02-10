
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-auto flex items-center justify-center py-10 md:py-0">
        <div className="bg-white w-full md:w-[90%] h-auto md:h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 px-4 md:px-8">
          {/* Right Section (Image) */}
          <div className="right w-full md:w-5/12 flex items-center justify-center">
            <div className="h-[250px] md:h-[320px] lg:h-[400px] w-full flex items-center justify-center">
              <img
                src="/custom.png"
                alt="pics"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          {/* Left Section (Text Content) */}
          <div className="left w-full md:w-7/12 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-2xl md:text-3xl text-black font-bold text-center md:text-left mb-4">
              Why Choose TechXicon for Software Solutions?
            </h1>

            <div className="w-full">
              <h3 className="text-lg md:text-xl text-black font-semibold  text-center md:text-left">
                1. Custom Solutions:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-2">
                We create software specifically for your business, ensuring it meets your exact
                <br className="hidden md:block" /> needs and goals.
              </p>

              <h3 className="text-lg md:text-xl text-black font-semibold  text-center md:text-left">
                2. Scalability & Flexibility:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-2">
                Our software grows with your business, easily adapting to new needs and users in the
                <br className="hidden md:block" /> future.
              </p>

              <h3 className="text-lg md:text-xl text-black font-semibold  text-center md:text-left">
                3. Easy Integration:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-4">
                We make sure our software works smoothly with your current systems, improving
                <br className="hidden md:block" /> efficiency and reducing disruptions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
