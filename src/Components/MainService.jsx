// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="bg-[#082325] w-full h-screen relative overflow-hidden p-4">
//       {/* Navbar */}

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between h-full">
//         {/* Text Content */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-8 z-10">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
//             Digital Workflow
//             <span className="text-[#9DD9C7]"> Web, .NET, and AI Solutions</span>
//           </h1>
//           <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">
//             At NeuroBiotics, we spark innovation with customized Web, .NET, and
//             AI solutions that drive growth and open new opportunities. Transform
//             your vision with our expertise and unlock impactful results.
//           </p>
//           {/* <button className="bg-[#13737f] mt-6 px-6 py-3 text-white text-lg font-semibold rounded-md transform transition-transform duration-300 hover:scale-105">
//             Learn More
//           </button> */}

//           <div className="h-12 w-1/3 mt-5  bg-[#9DD9C7]">
//             <button className="bg-[#13737f] h-full   rounded-xl w-full px-4 py-2 text-sm sm:text-base lg:text-lg transform transition-transform duration-300 hover:scale-110">
//               <span className="text-white">Let`s Connect Together</span>
//             </button>
//           </div>
          
//         </div>

//         {/* Image/Background Content */}
//         <div
//           className="w-full md:w-1/2 h-full bg-cover  bg-center"
//           style={{
//             backgroundImage: `url('../public/servi.jpg')`, // Replace with your image
//             borderTopLeftRadius: "1px",
//             borderTopRightRadius: "1px",
//             borderBottomRightRadius: "1px",
//             borderBottomLeftRadius: "1460px",
//           }}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;




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
            Digital Workflow <br />
            <span className="text-[#9DD9C7]"> Web, .NET, and AI Solutions</span>
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">
            At NeuroBiotics, we spark innovation with customized Web, .NET, and
            AI solutions that drive growth and open new opportunities. Transform
            your vision with our expertise and unlock impactful results.
            </p>

            <div className="h-12 w-1/3 mt-5 bg-[#9DD9C7]">
              <button className="bg-[#13737f] h-full rounded-xl w-full px-4 py-2 text-sm sm:text-base lg:text-lg transform transition-transform duration-300 hover:scale-110">
                <span className="text-white">Let`s Connect Together</span>
              </button>
            </div>
          </div>

          {/* Image/Background Content */}
          <div
            className="w-full md:w-1/2 md:h-full bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: `url('../public/servi.jpg')`,
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
