
import React from "react";
import { IoMdPin } from "react-icons/io";
import { MdAddIcCall, MdAccessTimeFilled, MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-red-400 w-screen h-screen flex items-center justify-center">
      <div className="bg-[#F8F8F8] text-center p-8 w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-[#1F213E]">
          Contact With Our Team
        </h1>

        {/* Centering the main content */}
        <div className="main mt-12 w-full md:w-[170vh] h-[60vh] flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Contact Form */}
          <div className="left bg-[#F0F0F0] w-full md:w-1/2 p-4 shadow-lg">
            <h1 className="text-2xl mt-4 font-semibold text-[#1F213E]">
              Get in Touch with Us
            </h1>
            <div className="mt-4">
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 p-2 rounded border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 p-2 rounded border border-gray-300"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 mb-4 rounded border border-gray-300"
              />

              <textarea
                placeholder="Write your message here"
                className="w-full p-2 rounded border border-gray-300 h-32"
              />
              <button className="rounded-3xl mt-4 bg-black p-3 hover:bg-[#0a2d2f] hover:scale-105 text-white">
                Send Message
              </button>
            </div>
          </div>

          {/* Right Section: Contact Details */}
          <div className="right w-1/2 ml-5 hidden md:block">
            <h1 className="text-start text-2xl font-semibold text-[#082325]">
              Contact Details
            </h1>
            <p className="text-start mt-4">
              Our hours are <strong>Monday to Friday from 9:00 AM to 6:00 PM</strong> and{" "}
              <strong>Saturday from 10:00 AM to 2:00 PM</strong>. Connect with us on{" "}
              <strong>LinkedIn</strong>, <strong>Twitter</strong>, <strong>Facebook</strong>, and <strong>Instagram</strong>.
              We look forward to hearing from you!
            </p>

            <div className="details mt-10 grid grid-cols-2 gap-8">
              <div className="detail-item flex bg-gray-100 p-4 shadow">
                <div className="icon bg-black rounded-full text-white flex items-center justify-center h-12 w-12">
                  <IoMdPin size={30} />
                </div>
                <div className="info ml-4">
                  <h1 className="text-xl font-semibold">Address</h1>
                  <p className="text-[#082325]">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="detail-item flex bg-gray-100 p-4 shadow">
                <div className="icon bg-black text-white flex items-center justify-center h-12 w-12 rounded-full">
                  <MdAddIcCall size={30} />
                </div>
                <div className="info ml-4">
                  <h1 className="text-xl font-semibold">Mobile</h1>
                  <p className="text-gray-700">+923000337348</p>
                </div>
              </div>

              <div className="detail-item flex bg-gray-100 p-4 shadow">
                <div className="icon bg-black text-white flex items-center justify-center h-12 w-12 rounded-full">
                  <MdAccessTimeFilled size={30} />
                </div>
                <div className="info ml-4">
                  <h1 className="text-xl font-semibold">Availability</h1>
                  <p className="text-gray-700">Monday To Friday</p>
                </div>
              </div>

              <div className="detail-item flex bg-gray-100 p-4 shadow">
                <div className="icon bg-black text-white flex items-center justify-center h-12 w-12 rounded-full">
                  <MdMarkEmailUnread size={30} />
                </div>
                <div className="info ml-4">
                  <h1 className="text-xl font-semibold">Email</h1>
                  <p className="text-[#082325]">info@neurobiotics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
