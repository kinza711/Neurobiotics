
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="chose h-screen w-full bg-[#FFFFFF]">
      <h1 className="text-[#082325] mt-10 mb-10 text-4xl font-bold text-center">
        Why Choose Us
      </h1>

      {/* Full Layout for Large Screens */}
      <div className="contant w-full bg-[#FFFFFF] hidden lg:flex items-center justify-center">
        {/* Left Section */}
        <div className="left w-4/12 bg-transparent mt-5 mr-10 flex flex-col justify-center">
          <div className="side bg-white relative mb-8">
            <h1 className="text-right font-semibold text-[#1F213E] text-2xl">
              Experience
            </h1>
            <p className="text-right">
              Our seasoned team brings years of industry <br /> expertise,
              delivering innovative solutions tailored <br /> to your unique
              challenges.
            </p>
          </div>
          <div className="side bg-white relative mb-8">
            <h1 className="text-right font-semibold text-[#1F213E] text-2xl">
              Products
            </h1>
            <p className="text-right">
              We utilize cutting-edge technology to create <br /> scalable,
              user-centric products that align <br /> with your business
              objectives.
            </p>
          </div>
          <div className="side bg-white relative">
            <h1 className="text-right font-semibold text-[#1F213E] text-2xl">
              Customization
            </h1>
            <p className="text-right">
              Our personalized approach ensures that each <br /> solution is
              meticulously crafted <br /> to meet your specific needs.
            </p>
          </div>
        </div>

        {/* Middle Image Section */}
        <div className="middle w-4/12 flex items-center justify-center">
          <img
            src="https://zrtechsolutions.com/demo/html/technoit/assets/images/features.jpg"
            alt=""
            className="w-50"
          />
        </div>

        {/* Right Section */}
        <div className="right w-4/12 bg-transparent ml-10 flex flex-col justify-center">
          <div className="side bg-white relative mb-8">
            <h1 className="text-left font-semibold text-[#1F213E] text-2xl">
              Pricing
            </h1>
            <p className="text-left">
              We offer competitive pricing models <br /> designed to provide
              exceptional value <br /> without compromising on quality.
            </p>
          </div>
          <div className="side bg-white relative mb-8">
            <h1 className="text-left font-semibold text-[#1F213E] text-2xl">
              Delivery
            </h1>
            <p className="text-left">
              Committed to timely execution, we ensure <br /> that your projects
              are delivered on schedule, <br /> enabling you to achieve your
              goals efficiently.
            </p>
          </div>
          <div className="side bg-white relative">
            <h1 className="text-left font-semibold text-[#1F213E] text-2xl">
              Support
            </h1>
            <p className="text-left">
              Our dedicated support team is available to <br /> assist you at
              every step, ensuring a seamless <br /> experience from start to
              finish.
            </p>
          </div>
        </div>
      </div>

      {/* Text-Only Layout for Small Screens */}
      <div className="contant w-full bg-[#FFFFFF] flex flex-col space-y-6 lg:hidden px-6">
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Experience
          </h1>
          <p className="text-left text-sm">
            Our seasoned team brings years of industry expertise, delivering
            innovative solutions tailored to your unique challenges.
          </p>
        </div>
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Products
          </h1>
          <p className="text-left text-sm">
            We utilize cutting-edge technology to create scalable, user-centric
            products that align with your business objectives.
          </p>
        </div>
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Customization
          </h1>
          <p className="text-left text-sm">
            Our personalized approach ensures that each solution is
            meticulously crafted to meet your specific needs.
          </p>
        </div>
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Pricing
          </h1>
          <p className="text-left text-sm">
            We offer competitive pricing models designed to provide exceptional
            value without compromising on quality.
          </p>
        </div>
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Delivery
          </h1>
          <p className="text-left text-sm">
            Committed to timely execution, we ensure that your projects are
            delivered on schedule, enabling you to achieve your goals
            efficiently.
          </p>
        </div>
        <div className="side bg-white relative p-4 rounded shadow">
          <h1 className="text-left font-semibold text-[#1F213E] text-xl">
            Support
          </h1>
          <p className="text-left text-sm">
            Our dedicated support team is available to assist you at every step,
            ensuring a seamless experience from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
