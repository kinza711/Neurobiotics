

import React from "react";

const MinContact = () => {
  return (
    <div>
      {/* Add proper spacing for a fixed/sticky navbar */}
      <section className="bg-[#082325] w-full min-h-screen md:h-screen relative overflow-visible pt-20">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Contact Us for <br />
              <span className="text-[#9DD9C7]"> Web, .NET, and AI Solutions</span>
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">
              Reach out to our team for tailored solutions and expert guidance.
              Whether you have a project in mind or need support, we're here to
              help. Let’s collaborate to bring your vision to life and achieve
              your business goals.
            </p>

            <div className="h-12 w-1/3 mt-5 bg-[#9DD9C7]">
              <button className="bg-[#13737f] h-full rounded-xl w-full px-4 py-2 text-sm sm:text-base lg:text-lg transform transition-transform duration-300 hover:scale-110">
                <span className="text-white">Sign Up</span>
              </button>
            </div>
          </div>

          {/* Image/Background Content */}
          <div
            className="w-full md:w-1/2 md:h-full -mt-12 bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: `url('https://i.pinimg.com/736x/52/70/16/527016e4e3dfdd806da99161e91f1d50.jpg')`,
              borderTopLeftRadius: "1px",
              borderTopRightRadius: "1px",
              borderBottomRightRadius: "1px",
              borderBottomLeftRadius: "1460px",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default MinContact;
