
import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Leaders = () => {
  const leaders = [
    { name: "Jonathan Warner", title: "CEO" },
    { name: "Tammy Johnson", title: "CTO" },
    { name: "David Roberts", title: "CFO" },
    { name: "Pamela Wagner", title: "COO" }
  ];

  return (
    <div className="bg-[#f8f8f8f3] w-full min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#F8F8F8]  text-center p-6 w-full max-w-[1000px] mx-auto">
        <h1 className="text-3xl sm:text-5xl mb-6 font-bold text-black">Meet Our <span className='text-[#594a60]'>Leaders</span></h1>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Loop to render leader cards */}
          {leaders.map((leader, index) => (
            <div key={index} className="bg-transparent w-full">
              <div className="main bg-slate-300 w-full h-[70%] rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src={`https://zrtechsolutions.com/demo/html/technoit/assets/images/team/team-${index + 1}.jpg`}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text bg-transparent mt-4">
                <h1 className="text-xl sm:text-2xl">{leader.name}</h1>
                <h5 className="text-md sm:text-lg text-gray-800">{leader.title}</h5>
                {/* Social media icons */}
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl text-[#1F213E]" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl text-[#1F213E]" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-xl text-[#1F213E]" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl text-[#1F213E]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaders;
