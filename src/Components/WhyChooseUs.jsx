

import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] items-center justify-center flex   w-full h-[65vh]">
        <div className="pink h-full w-[80%] max-auto bg-transparent items-start justify-start relative">
          <h1 className="mt-20 text-3xl font-semibold text-[#6139DA] ">
            Reason to Choose Us{" "}
          </h1>
          <p className="text-gray-700 text-[22px] leading-7">
            Your success is our mission, and we deliver it with expertise, care
            and <br />
            commitments!
          </p>

          <div className="cards  items-center jussify-center  relative overflow-hidden bg-transparent h-1/2 my-5  w-full ">
            <div className="bg-transparent  gap-10 w-full h-auto items-center justify-center flex">
            <div className="card1 ml-1  h-[14vh] w-4/12 bg-[#F8F8F7] border-2 border-[#6139DA]  rounded-xl flex items-center justify-center">
              <div className="lft bg-transparent h-full w-[20%] items-center justify-center flex">
                {/* <div className="img h-12 w-12 bg-[#9853FF] rounded-full "> */}
                <img
                  src="client-icon.png"
                  alt="icon"
                  className="h-full w-full object-cover "
                />
                {/* </div> */}
              </div>
              <div className="right bg-transparent h-full w-[80%]">
                <h1 className="text-[20px] text-gray-800 mt-5 font-semibold">Client Centric Approach</h1>
                <h4 className="text-[14px] text-gray-800 mt-1">We focus on our clents needs and work closely with them every step of the journey.</h4>
              </div>
            </div>

            <div className="card2 h-[14vh] w-4/12 bg-[#F8F8F7] border-2 border-[#6139DA]  rounded-xl flex items-center justify-center">
              <div className="lft bg-transparent h-full w-[20%]">
              <img
                  src="call-icon.png"
                  alt="icon"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="right bg-transparent h-full w-[80%]">
              <h1 className="text-[20px] text-gray-800 mt-5 font-semibold">Ongoing Support</h1>
              <h4 className="text-[14px] text-gray-800 mt-1">We continue to help you even after the project is done, ensuring you keep succeeding.</h4>
              </div>
            </div>

            <div className="card3 h-[14vh] w-4/12 bg-[#F8F8F7] mr-[2.25px]  border-2 border-[#6139DA]  rounded-xl flex items-center justify-center">
              <div className="lft bg-transparent h-full w-[20%]">
              <img
                  src="service-icon.png"
                  alt="icon"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="right bg-transparent h-full w-[80%]">
              <h1 className="text-[20px] text-gray-800 mt-5 font-semibold">Complete Sercices</h1>
              <h4 className="text-[14px] text-gray-800 mt-1">we handle everything from the initial idea to the final product. Your IDEA+OUR SERVIES=Success.</h4>
              </div>
            </div>

            </div>
            <div className="bg-tranparent gap-10 m-3 w-full h-auto mt-8 items-center justify-center flex">
            

            <div className="card2 h-[14vh] w-4/12 overflow-hidden bg-[#F8F8F7] border-2 border-[#6139DA]  rounded-xl flex items-center justify-center">
              <div className="lft bg-transparent  h-full w-[20%]">
              <img
                  src="solution-icon.png"
                  alt="icon"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="right bg-transparent h-full w-[80%]">
              <h1 className="text-[20px] text-gray-800 mt-5 font-semibold">Custom Solutions</h1>
              <h4 className="text-[14px] text-gray-800 mt-1">We know every business is differeny, so we create solutions that are spacific just for you.</h4>
              </div>
            </div>

            <div className="card3  flex-shrink-0 h-[14vh] w-4/12 overflow-hidden bg-[#F8F8F7] border-2 border-[#6139DA]  rounded-xl flex items-center justify-center">
              <div className="lft bg-transparent h-full w-[20%]">
              <img
                  src="success-icon.png"
                  alt="icon"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="right bg-trabsparent h-full w-[80%]">
              <h1 className="text-[20px] text-gray-800 mt-5 font-semibold">100% Success</h1>
              <h4 className="text-[14px] text-gray-800 mt-1">Our past project showcase our approach towords success.</h4>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;



