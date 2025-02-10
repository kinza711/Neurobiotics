

// import React from "react";

// const Simple = () => {
//   return (
//     <>
//       <div className=" bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] flex items-center justify-center text-white w-full  h-[75vh]">
//         <div className="main bg-transparent h-full w-[85%] items-center justify-ccenter flex ">
//           <div className="left bg-transparent h-full w-1/2 items-center relative justify-center   ">
//             <div className="top  ml-5 w-[55%] items-center justify-center flex">
//               <img src="./public/qoutes.png" alt="qoutes" />
//             </div>
//             <div className="botm bg-transparent mt-[-70px] ml-16 items-center justify-center relative ">
//               <h2s className="text-5xl text-white ">
//                 Words of Trust from <br /> Our Partners
//               </h2s>
//               <h4 className="text-2xl text-white ">
//                 Hear from our satisfation partners who have <br /> experienced
//                 the impact of our solutions
//               </h4>
//             </div>
//           </div>
//           <div className="right bg-red-500 h-full w-1/2"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Simple;






import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Card 1", color: "bg-blue-500" },
  { id: 2, title: "Card 2", color: "bg-green-500" },
  { id: 3, title: "Card 3", color: "bg-purple-500" },
];

export default function VerticalSwipeCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2500); // Stay in center for 2.5 sec before moving

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 via-[#6139DA] to-[#442AC7] flex items-center justify-center text-white w-full h-screen">
      <div className="main bg-transparent h-full w-[85%] flex items-center justify-center">
        
        {/* Left Section */}
        <div className="left bg-transparent h-full w-1/2 flex flex-col justify-center">
          <div className="top ml-5 w-[55%] flex items-center justify-center">
            <img src="/qoutes.png" alt="quotes" />
          </div>
          <div className="bottom mt-[-70px] ml-16">
            <h2 className="text-5xl text-white">
              Words of Trust from <br /> Our Partners
            </h2>
            <h4 className="text-2xl text-white mt-2">
              Hear from our satisfied partners who have <br /> experienced
              the impact of our solutions
            </h4>
          </div>
        </div>

        {/* Right Section - Animated Cards */}
        <div className="relative flex flex-col gap-5 items-center justify-center h-96 w-64 overflow-hidden">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ y: "100%", scale: 1 }}
                animate={{
                  y: index === activeIndex ? "0%" : index > activeIndex ? "100%" : "-100%",
                  scale: index === activeIndex ? 1.2 : 1, // Scale up when in center
                  opacity: index === activeIndex ? 1 : 0.5,
                }}
                exit={{ y: "-100%", scale: 1, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute w-64 h-40 ${card.color} flex items-center justify-center rounded-xl shadow-xl`}
              >
                {card.title}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
