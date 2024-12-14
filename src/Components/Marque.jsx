// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaPython, FaBrain } from 'react-icons/fa';
// import { SiMongodb, SiDotnet, SiTensorflow } from 'react-icons/si';

// const IconMarquee = () => {
//   return (
//     <div className="icon-marquee overflow-hidden w-full bg-gray-100 py-4">
//       <motion.div
//         className="icon-container flex space-x-10 justify-around"
//         initial={{ x: '100%' }}
//         animate={{ x: '-100%' }}
//         transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
//       >
//         {/* AI-related Icons */}
//         <FaBrain className="text-6xl text-purple-500" />
//         <SiTensorflow className="text-6xl text-orange-500" />
//         <FaPython className="text-6xl text-blue-500" />
        
//         {/* MERN stack Icons */}
//         <FaReact className="text-6xl text-blue-600" />
//         <FaNodeJs className="text-6xl text-green-600" />
//         <SiMongodb className="text-6xl text-green-800" />

//         {/* ASP.NET Icon */}
//         <SiDotnet className="text-6xl text-blue-700" />
//       </motion.div>
//     </div>
//   );
// };

// export default IconMarquee;

import React from 'react';

function NewsMarquee() {
  return (
    <div className="bg-green-600 mb-48 relative text-white py-2 overflow-hidden" style={{ transform: 'rotate(-10deg)' }}>
      <div className="whitespace-nowrap flex animate-marquee">
        {/* Duplicate the content to create a seamless loop */}
        <div className="flex space-x-8">
          <p className="text-lg font-semibold mx-4">
            🚀 Breaking News: Our team has launched a new AI-powered tool for seamless web development!
          </p>
          <p className="text-lg font-semibold mx-4">
            📈 Market Update: Tech stocks are on the rise as innovations continue to drive the sector!
          </p>
          <p className="text-lg font-semibold mx-4">
            🌐 Stay Tuned: Upcoming webinar on the future of full-stack development!
          </p>
        </div>
        <div className="flex space-x-8">
          {/* Duplicate the same set of messages for seamless transition */}
          <p className="text-lg font-semibold mx-4">
            🚀 Breaking News: Our team has launched a new AI-powered tool for seamless web development!
          </p>
          <p className="text-lg font-semibold mx-4">
            📈 Market Update: Tech stocks are on the rise as innovations continue to drive the sector!
          </p>
          <p className="text-lg font-semibold mx-4">
            🌐 Stay Tuned: Upcoming webinar on the future of full-stack development!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsMarquee;
