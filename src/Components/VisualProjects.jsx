import React from "react";

const VisualProjects = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-auto flex items-center justify-center py-10 md:py-0">
        <div className="bg-white w-full md:w-[90%] my-5 h-auto md:h-[95vh] flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 px-4 md:px-8">
          {/* Right Section (Image) */}
          <div className="right w-full md:w-5/12 flex items-center justify-center">
            <div className="h-[250px] md:h-[320px] lg:h-[400px] w-full flex items-center justify-center">
              <img
                src="/ux.png"
                alt="pics"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          {/* Left Section (Text Content) */}
          <div className="left w-full md:w-7/12 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-2xl  md:text-3xl text-[#442AC7] font-semibold text-center md:text-left mb-1">
              UI/UX Design
            </h1>
            <div className="line bg-[#442AC7] w-48 h-[1px] mb-3"></div>
            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600 font-bold  text-center md:text-left">
                Design Strategy & Planning:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-2">
                We work with you to set clear design goals by understanding your
                business and user <br /> needs to build an effective strategy.
              </p>

              <h3 className="text-lg md:text-xl text-gray-600 font-bold  text-center md:text-left">
                Wireframes & Prototypes:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-2">
                We create wireframes and interactive prototypes so you can
                preview and adjust your product’s layout early in the process
              </p>

              <h3 className="text-lg md:text-xl text-gray-600 font-bold  text-center md:text-left">
                Visual UI Design:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-4">
                We design eye-catching user interfaces that align with your
                brand and attract your <br /> target audience, selecting the
                right colors, fonts, and visuals.
              </p>

              <h3 className="text-lg md:text-xl text-gray-600 font-bold text-center md:text-left">
                Responsive Design:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-4">
                We ensure your product looks great and functions smoothly across
                all devices, from <br /> desktop computers to smartphones.
              </p>

              <h3 className="text-lg md:text-xl text-gray-600 font-bold  text-center md:text-left">
                Interactive Features:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-4">
                We incorporate animations and interactive elements to make your
                product engaging <br /> and user-friendly.
                <br />
                UI Performance Optimization: We enhance your design for faster
                loading and smooth <br /> operation on web and mobile platforms.
              </p>

              <h3 className="text-lg md:text-xl text-gray-600 font-bold  text-center md:text-left">
                User Testing & Feedback:
              </h3>
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left mb-4">
                We test your product with real users to identify and fix any
                issues, ensuring a <br /> seamless and intuitive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualProjects;
