
import React from "react";

const AboutUsSection = () => {
  return (
    <div>
      <div className="about items-center justify-center w-full h-[70vh] flex bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUgR5odjLuZhXP7Zou_vLb8XDQtdiXl8wxw&s')] opacity-100 bg-cover overflow-hidden md:flex hidden">
        <div className="width bg-transparent w-[160vh] h-[40vh] flex">
          <div className="1st bg-transparent w-5/12 items-center justify-center relative">
            <div className="image items-center justify-center flex">
              <img
                src="https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/happy-clients.svg"
                alt=""
                className="text-center"
              />
            </div>
            <h2 className="text-4xl font-bold text-center text-[#42B1B3] mt-5">56</h2>
            <h1 className="text-4xl font-bold text-center text-[#42B1B3]">Happy Clients</h1>
            <h5 className="text-xl text-center text-white mt-4">Who Trust Us to Transform Their Vision</h5>
          </div>
          <div className="2nd bg-transparent w-5/12 items-center justify-center relative">
            <div className="image items-center justify-center flex">
              <img
                src="https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/complete-projects.svg"
                alt=""
                className="text-center"
              />
            </div>
            <h2 className="text-4xl font-bold text-center text-[#42B1B3] mt-5">102</h2>
            <h1 className="text-4xl font-bold text-center text-[#42B1B3]">Completed Projects</h1>
            <h5 className="text-xl text-center text-white mt-4">A Legacy of Excellence</h5>
          </div>
          <div className="3rd bg-transparent w-5/12 items-center justify-center relative">
            <div className="image items-center justify-center flex">
              <img
                src="https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/hours-support.svg"
                alt=""
                className="text-center text-[#128C25]"
              />
            </div>
            <h2 className="text-4xl font-bold text-center text-[#42B1B3] mt-5">24/7</h2>
            <h1 className="text-4xl font-bold text-center text-[#42B1B3]">Hours of Support</h1>
            <h5 className="text-xl text-center text-white mt-4">Valuing Your Time with Unmatched Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
