
// import React from 'react'

// const AboutUsSection = () => {
//   return (
//     <>
//    <div className="bg-[#F5F5F5] w-full h-48  items-center mb-20 justify-center relative">
//   <h1 className="text-[#442AC7] font-semibold text-4xl ml-32 py-12">Our Team</h1>
//   <div className="bg-transparent gap-5 h-28 w-[55%] mx-auto flex items-center  justify-center">
//     {/* Add content here */}
// <div className="left bg-white shadow-xl shadow-gray-500/50  h-full w-1/2 items-center justify-center relative ">
// <h1 className='text-gray-800 text-2xl font-semibold ml-10 py-2  mt-5'>M.Arham Sohail</h1>
// <div className="line bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] h-[3.25px] w-36 rounded-lg ml-10 flex items-center justify-center"></div>
// <h1 className='text-gray-500 text-xl font-semibold ml-10  '>CEO/Founder</h1>
// </div>
// <div className="right bg-white h-full w-1/2 shadow-xl shadow-gray-500/50  ">
// <h1 className='text-gray-800 text-2xl font-semibold ml-10 py-2 mt-5'>Nimra Safeir</h1>
// <div className="line bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] h-[3.25px] w-36 rounded-lg ml-10 flex items-center justify-center"></div>
// <h1 className='text-gray-500 text-xl font-semibold ml-10 '>CO-Founder</h1>
// </div>
//   </div>
// </div>


//     </>
    
//   )
// }

// export default AboutUsSection




import React from 'react';

const AboutUsSection = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] w-full h-48 items-center mb-20 justify-center relative">
        <h1 className="text-[#442AC7] font-semibold text-4xl ml-8 md:ml-32 py-12">Our Team</h1>
        <div className="bg-transparent gap-5 h-28 w-[95%] md:w-[55%] mx-auto flex flex-wrap md:flex-nowrap items-center justify-center">
          {/* Left section */}
          <div className="left bg-white shadow-xl shadow-gray-500/50 h-full w-full md:w-1/2 items-center justify-center relative mb-5 md:mb-0">
            <h1 className="text-gray-800 text-2xl font-semibold ml-10 py-2 mt-5">M.Arham Sohail</h1>
            <div className="line bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] h-[3.25px] w-36 rounded-lg ml-10 flex items-center justify-center"></div>
            <h1 className="text-gray-500 text-xl font-semibold ml-10 mb-3">CEO/Founder</h1>
          </div>
          
          {/* Right section */}
          <div className="right bg-white h-full w-full md:w-1/2 shadow-xl shadow-gray-500/50">
            <h1 className="text-gray-800 text-2xl font-semibold ml-10 py-2 mt-5">Nimra Safeir</h1>
            <div className="line bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] h-[3.25px] w-36 rounded-lg ml-10 flex items-center justify-center"></div>
            <h1 className="text-gray-500 text-xl font-semibold ml-10 mb-3">CO-Founder</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
