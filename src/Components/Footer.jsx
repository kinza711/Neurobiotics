

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] flex items-center justify-center text-white text-2xl font-semibold py-10">
        <div className="main bg-transparent w-[90%] h-auto flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/12 mx-10 my-5 md:my-16 text-center md:text-left">
            <img src="/footlogo.png" alt="" className="mx-auto md:mx-0" />
            <p className="text-white font-normal text-[20px] mt-2 md:ml-10">
              Building the future of business with tech.
            </p>
            <h6 className="mt-5 md:ml-10 text-[16px] text-white">Follow Us</h6>
            {/* <div className="icons ml-9 flex justify-center md:justify-start gap-x-2 mt-2">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaXTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  rel="me"
                  className="w-7 h-7 flex items-center justify-center bg-white rounded-full  hover:bg-[#32C9DD] transition"
                >
                  <Icon className="text-[#442AC7] text-sm" />
                </a>
              ))}
            </div> */}

            <div className="icons  flex justify-center md:justify-start gap-x-2 mt-2 ml-8   h-auto w-[70%]">
              <a
                href="#"
                rel="me"
                className="w-7 h-7 flex items-center  justify-center bg-white rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaLinkedinIn className="text-[#442AC7] text-sm" />
              </a>
              <a
                href="#"
                rel="me"
                className="w-7 h-7 flex items-center justify-center bg-white rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaInstagram className="text-[#442AC7] text-sm" />
              </a>
              <a
                href="#"
                rel="me"
                className="w-7 h-7 flex items-center justify-center bg-white rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaFacebookF className="text-[#442AC7] text-sm" />
              </a>

              <a
                href="#"
                rel="me"
                className="w-7 h-7 flex items-center justify-center bg-white rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaYoutube className="text-[#442AC7] text-sm" />
              </a>

              <a
                href="#"
                rel="me"
                className="w-7 h-7 flex items-center justify-center bg-white rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaXTwitter className="text-[#442AC7] text-sm" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/12 my-5 md:mt-16 text-center md:text-left">
            <h2 className="text-white font-semibold my-3 underline">Company</h2>
            {["Home", "About Us", "Services", "FAQs", "Free Consultation"].map(
              (item, index) => (
                <h3 key={index} className="text-white font-normal text-[16px]">
                  {item}
                </h3>
              )
            )}
          </div>
          <div className="w-full md:w-3/12 my-5 md:mt-16 text-center md:text-left">
            <h2 className="text-white font-semibold my-3 underline">
              Services
            </h2>
            {[
              "Digital Marketing",
              "Visual Designing",
              "Web Development",
              "App Development",
              "Software Solutions",
              "E-Commerce Solutions",
            ].map((item, index) => (
              <h3 key={index} className="text-white font-normal text-[16px]">
                {item}
              </h3>
            ))}
          </div>
          <div className="w-full md:w-3/12 my-5 md:mt-16 text-center md:text-left">
            <h2 className="text-white font-semibold my-3 underline">
              Industries we serve
            </h2>
            {[
              "E-Commerce & Retail",
              "Healthcare & Wellness",
              "Education",
              "Real Estate",
              "Entertainment and Media",
              "Travel and Hospitality",
            ].map((item, index) => (
              <h3 key={index} className="text-white font-normal text-[16px]">
                {item}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
