import React from 'react';

const ProjMain = () => {
  return (
    <div
      className="main h-[70vh] w-full flex items-center justify-center bg-cover bg-center opacity-100"
      style={{
        backgroundImage: "url('https://images.pexels.com/videos/3141208/free-video-3141208.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
      }}
    >
      <h1 className="text-white text-4xl  text-center font-bold">Innovative projects for 
        engaging <br /><span className="text-[#9DD9C7]"> Learning</span> </h1>
    </div>
  );
};

export default ProjMain;
