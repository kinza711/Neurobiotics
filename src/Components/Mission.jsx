
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Mission = () => {
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // Animate the content from the bottom to top
//     gsap.fromTo(
//       contentRef.current, 
//       { y: 100, opacity: 0 }, // Start position: 100px below and invisible
//       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // End position: Normal, fully visible
//     );

//     // Animate the image from right to left
//     gsap.fromTo(
//       imageRef.current, 
//       { x: 200, opacity: 0 }, // Start position: 200px to the right and invisible
//       { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" } // End position: Normal, fully visible
//     );
//   }, []);

//   return (
//     <section className="py-12 bg-[#F8F8F8]">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row gap-16 items-center justify-between ml-10">
          
//           {/* Content Section - Left Side */}
//           <div className="w-full md:w-1/2 ml-10" ref={contentRef}>
//             <h3 className="text-3xl font-bold mb-4">
//               We make sure your idea & creation are delivered properly
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Our mission is to provide exceptional service to our customers and create a sustainable environment for growth.
//             </p>
//             <p>
//             We are dedicated to understanding your unique needs and delivering innovative AI and web solutions that drive success. With a commitment to excellence, we strive to empower businesses to thrive in the digital landscape.
//             </p>
//           </div>
          
//           {/* Image Section - Right Side */}
//           <div className="w-full md:w-1/2 h-[50vh] rounded-xl overflow-hidden mr-20" ref={imageRef}>
//             <img 
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYSCZYoNGArWkWM-RX-YtRAtyVgx-AgpBUw&s" 
//               alt="" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;




import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Mission = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the content from the bottom to top
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 }, // Start position: 100px below and invisible
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // End position: Normal, fully visible
    );

    // Animate the image from right to left
    gsap.fromTo(
      imageRef.current,
      { x: 200, opacity: 0 }, // Start position: 200px to the right and invisible
      { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" } // End position: Normal, fully visible
    );
  }, []);

  return (
    <section className="py-12 bg-[#F8F8F8]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-between md:px-10">

          {/* Content Section - Left Side */}
          <div className="w-full md:w-1/2 md:ml-10" ref={contentRef}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              We make sure your idea & creation are delivered properly
            </h3>
            <p className="text-gray-600 mb-4 text-center md:text-left">
              Our mission is to provide exceptional service to our customers and create a sustainable environment for growth.
            </p>
            <p className="text-center md:text-left">
              We are dedicated to understanding your unique needs and delivering innovative AI and web solutions that drive success. With a commitment to excellence, we strive to empower businesses to thrive in the digital landscape.
            </p>
          </div>

          {/* Image Section - Right Side */}
          <div className="w-full md:w-1/2 h-[50vh] rounded-xl overflow-hidden mt-8 md:mt-0" ref={imageRef}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYSCZYoNGArWkWM-RX-YtRAtyVgx-AgpBUw&s"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
