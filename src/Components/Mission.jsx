
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Mission = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section id='about' className="py-12 bg-[#F8F8F8]">
      <div className="container mx-auto w-[90%] md:w-[85%] lg:w-[80%]">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-4 items-center justify-between md:px-5">
          {/* Image Section - Right Side */}
          <div
            className="w-full md:w-1/2 h-[40vh] md:h-[40vh] lg:h-[50vh] rounded-xl overflow-hidden"
            ref={imageRef}
          >
            <img
              src="about.png"
              alt="About TechXicon360"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section - Left Side */}
          <div className="w-full md:w-1/2 p-4" ref={contentRef}>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#442AC7] text-center md:text-left">
              About
            </h3>

            <p className="text-center mt-2 text-[16px] md:text-[18px] text-black leading-relaxed md:text-left">
              TechXicon360 is a software company focused on solving business
              challenges and driving growth for companies of all sizes. We provide
              smart, personalized solutions to improve efficiency, streamline
              operations, and support long-term success.
              Our experienced team of tech experts works closely with clients to design,
              develop, and deliver high-quality products and services customized to their
              specific needs. We offer services including Digital Marketing, Web/App Development,
              Software Solutions, and more for industries like healthcare, e-commerce, and education.
            </p>
          

            {/* Feature Cards Section */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 md:space-y-0 space-y-4">
              <div className="flex items-center  p-4 w-full sm:w-[55%]">
                <img
                  src="bulb.png"
                  alt="icon"
                  className="h-12 w-12 object-cover"
                />
                <h4 className="text-[16px] md:text-[18px] text-[#442AC7] text-start ml-3">
                  Industry specific <br /> starategies for success
                </h4>
              </div>

              <div className="flex items-center  p-4 w-full sm:w-[48%]">
                <img
                  src="end-to-end.png"
                  alt="icon"
                  className="h-12 w-12 object-cover"
                />
                <h4 className="text-[16px] md:text-[18px] text-[#442AC7] text-start ml-3">
                  End-to-End Service <br /> for Your Growth
                </h4>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side
          <div className="w-full md:w-1/2 h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-xl overflow-hidden" ref={imageRef}>
            <img src="about.png" alt="About TechXicon360" className="w-full h-full object-cover" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Mission;
