

import React from "react";

function Capsole() {
  return (
    <>
      <div className="main w-full h-auto sm:h-[75vh] bg-green-30">
        <div className="capsole flex flex-col md:flex-row px-5 items-start md:justify-between w-full h-auto md:h-screen">
          {/* Left Section */}
          <div className="left w-full md:w-1/2 flex flex-col justify-between h-auto md:h-screen px-2">
            <h1 className="text-[24px] md:text-[35px] ml-2 sm:ml-7 text-[#9EDAC8] font-bold mt-10 md:mt-20 leading-8 md:leading-9">
              Here’s a revised version tailored for your services page: Stay
              Ahead with the{" "}
              <span className="text-[#082325]">
                Latest in Web, .NET, and AI Solutions
              </span>
            </h1>
            <h5 className="bg-white text-gray-800 mt-4 text-[15px] md:text-[17px] ml-2 sm:ml-7 p-2 rounded-lg shadow">
              Discover innovative strategies and expert insights that drive
              success in your business. Embrace the future with cutting-edge
              technology and tailored solutions designed for your needs.
            </h5>
          </div>

          {/* Right Section */}
          <div className="right hidden md:flex mt-10 md:mt-16 h-auto gap-4 flex-wrap md:flex-nowrap items-center justify-center">
            <div className="capsole2 mt-10 md:mt-24 ml-5 md:ml-10 -rotate-[28deg] p-2 md:p-3 rounded-full border-[0.5px] border-black">
              <div className="w-28 md:w-40 h-28 md:h-full rounded-full bg-yellow-300 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65e61826ab9558e05e681a7f_Untitled%20design.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="capsole1 h-60 md:h-80 mb-5 md:mb-10 -rotate-[28deg] p-2 md:p-3 rounded-full border-[0.5px] border-black">
              <div className="w-28 md:w-40 h-28 md:h-full rounded-full bg-yellow-300 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="capsole2 mt-5 md:mt-10 ml-5 md:ml-10 -rotate-[28deg] p-2 md:p-3 rounded-full border-[0.5px] border-black">
              <div className="w-28 md:w-40 h-28 md:h-full rounded-full bg-yellow-300 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65e61826ab9558e05e681a7f_Untitled%20design.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capsole;



