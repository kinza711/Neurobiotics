import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-screen items-center justify-center flex bg-[#082325]">
      <div className="main h-[80%] w-[90%] flex overflow-hidden  bg-[#062A2E] rounded-3xl border-4 border-[#0E3620]">
        <div className="left w-1/2 bg-transparent">
          {" "}
          <h1 className="text-6xl ml-20 text-white font-bold  mt-36">I'm Neuro's  <br /><span className="text-black mr-3">Web</span> Developer</h1>
          <p className="ml-20 mt-5 text-white">I’m a dedicated web developer with over 4 years of experience in building high-performance web applications. My background in MERN stack development allows me to deliver solutions that balance both functionality and aesthetics.</p>
        </div>
        <div className="right w-1/2 bg-transparent  ">
            
            <img src="../public/Kinza.png" alt="" className="ml-16" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
