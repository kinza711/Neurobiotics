import React from 'react';

function Introduction() {
  return (

    <div className="flex flex-col border-t-[0.5px] border-gray-600 gap-36  md:flex-row items-center md:items-start justify-center bg-[#FFFFFF] p-8">
      {/* Left side: Photo */}
      <div className="w-full md:w-1/2  flex justify-center md:justify-strat p-4">
        <img 
          src="../public/Kinza.png" 
          alt="Your Name" 
          className="rounded-full w-3/4 md:w-1/2 shadow-lg" 
        />
      </div>
      
      {/* Right side: Introduction */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Building Impactful Web Solutions and Inspiring Future Developers: Kinza’s MERN Stack Journey"</h1>
        <p className="text-lg text-gray-600">
        My journey as a MERN Stack Web Developer started with a passion for creating interactive web applications. I quickly gained expertise in React, Node.js, Express, and MongoDB, developing user-friendly solutions that address real-world challenges.
        </p>
        <p className="text-lg text-gray-600 mt-4">
        As I advanced in my career, I embraced my role as a trainer, sharing my knowledge and empowering aspiring developers to excel in modern web technologies. My goal is to create impactful digital experiences while inspiring the next generation of innovators. <br />
          I’m always eager to learn and explore new technologies. Let’s connect and bring ideas to life!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
