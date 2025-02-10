
import React from "react";
import {
  IoLocationSharp,
  IoCallSharp,
  IoMail,
  IoPerson,
} from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div id='contact' className="bg-[#F8F9FF] w-full min-h-screen flex items-center justify-center p-4">
        <div className="pink bg-[#F8F9FF] w-full max-w-6xl flex flex-col md:flex-row items-center justify-center">
          <div className="left w-full md:w-1/2 bg-transparent h-full text-center md:text-left">
            <h1 className="text-4xl text-[#442AC7] mt-10 md:mt-32">Contact Us </h1>
            <h1 className="text-4xl text-[#9853FF]">Let's Start the Conversation!</h1>
            <p className="text-2xl text-gray-600 mt-2">
              Your next big step starts here. We're <br className="hidden md:block" /> just a click away!
            </p>

            <div className="icons my-5 bg-transparent w-full md:w-1/2 h-auto md:h-40 flex flex-col items-center md:items-start justify-start relative">
              <div className="bk1 flex gap-5 p-2 items-center">
                <div className="circle h-8 w-8 bg-[#442AC7] text-white rounded-full flex items-center justify-center">
                  <IoLocationSharp size="20" />
                </div>
                <h1 className="text-black text-[18px]">Rahim Yar Khan</h1>
              </div>

              <div className="bk2 flex gap-5 p-2 items-center">
                <div className="circle h-8 w-8 bg-[#442AC7] text-white rounded-full flex items-center justify-center">
                  <IoCallSharp size="20" className="rotate-[265deg]" />
                </div>
                <h1 className="text-black text-[18px]">+923258429083</h1>
              </div>

              <div className="bk2 flex gap-5 p-2 items-center">
                <div className="circle h-8 w-8 bg-[#442AC7] text-white rounded-full flex items-center justify-center">
                  <IoMail size="20" />
                </div>
                <h1 className="text-black text-[18px]">infotechxicon360@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-1/2 bg-transparent h-full flex items-start justify-start">
            <div className="form bg-[#9853FF] py-2 h-[90%] w-[95%] md:w-[75%] m-5 mt-10 rounded-3xl flex flex-col items-center justify-center relative">
              <div className="relative bg-transparent mt-10 w-[80%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-4 text-white bg-[#B687FF] placeholder:text-white rounded-xl focus:outline-none"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  <IoPerson size={20} />
                </span>
              </div>

              <div className="relative w-[80%] mt-2">
                <input
                  type="mail"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-4 text-white bg-[#B687FF] placeholder:text-white rounded-xl focus:outline-none"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  <IoMail size={20} />
                </span>
              </div>

              <div className="relative w-[80%] mt-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-4 text-white bg-[#B687FF] placeholder:text-white rounded-xl focus:outline-none"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  <IoCallSharp size={20} />
                </span>
              </div>

              <div className="relative w-[80%] mt-4">
                <textarea
                  placeholder="Message"
                  className="w-full h-[20vh] text-start pl-4 pr-4 py-4 text-white bg-[#B687FF] placeholder-white rounded-xl focus:outline-none resize-none"
                />
              </div>
              <div className="relative   w-[80%]">
              <button className="bg-white mb-2 text-[#22165e] px-5 p-1 rounded-md mt-1  font-semibold">Submit</button>
              </div>
              {/* <button className="bg-white mb-2 text-[#22165e] px-5 py-1 rounded-lg mt-4  font-semibold">Submit</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
