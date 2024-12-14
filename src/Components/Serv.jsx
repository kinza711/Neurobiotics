


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Mission = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the content from the bottom to top
    gsap.fromTo(
      contentRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Animate the image from right to left
    gsap.fromTo(
      imageRef.current, 
      { x: 200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-12 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-between">
          {/* Image Section - Left Side */}
          <div 
            className="w-full md:w-1/2 h-[40vh] md:h-[50vh] rounded-xl overflow-hidden"
            ref={imageRef}
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsqiSBI0kDo0-JjKd8kqOItjAIXkNNzQBbw&s" 
              alt="Mission Image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full md:w-1/2" ref={contentRef}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
              We make sure your idea & creation are delivered properly
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center md:text-left">
              Our mission is to provide exceptional service to our customers and create a sustainable environment for growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base text-center md:text-left">
              We are dedicated to understanding your unique needs and delivering innovative AI and web solutions that drive success. 
              With a commitment to excellence, we strive to empower businesses to thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
