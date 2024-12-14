

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div>
      <section>
        <div className="projects h-[60vh] w-full bg-[#F8F8F8] items-center justify-center flex">
          <div className="bakground h-full w-[85%] bg-[#F8F8F8] items-center justify-center flex flex-col">
            <Swiper
              slidesPerView={1} // Default for small screens
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              mousewheel={true} // Enable mousewheel scrolling
              modules={[FreeMode, Pagination]}
              className="w-full"
              breakpoints={{
                // For medium screens (e.g., tablets) show 2 cards
                
                768: {
                  slidesPerView: 2,
                },
                // For larger screens, show 3 cards
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {/* Card 1 */}
              <SwiperSlide>
                <div className="relative bg-white rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  <img
                    src="1.jpg"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute flex items-center justify-center border-2 h-[90%] w-[90%] border-[#2CB1C2] bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="h-[90%] w-[90%] flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          OCR Project
                        </h3>
                        <p className="text-sm">
                          <b> Description:</b> A cutting-edge system that
                          converts printed or handwritten text into digital
                          format using advanced OCR technology, enabling
                          seamless data extraction and processing. Traffic
                          Signal Optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 2 */}
              <SwiperSlide>
                <div className="relative bg-white rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  <img
                    src="3.jpg"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute flex items-center justify-center border-2 h-[90%] w-[90%] border-[#2CB1C2] bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="h-[90%] w-[90%] flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          Question Management system
                        </h3>
                        <p className="text-sm">
                          A question management system could have many features
                          like creating, editing, deleting, and categorizing
                          questions, user roles for admins and users, and
                          possibly a quiz functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 3 */}
              <SwiperSlide>
                <div className="relative bg-white rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  <img
                    src="2.jpg"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute flex items-center justify-center border-2 h-[90%] w-[90%] border-[#2CB1C2] bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="h-[90%] w-[90%] flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          Smart Traffic Control with Reinforcement Learning
                        </h3>
                        <p className="text-sm">
                          <b>Description:</b> An AI-driven solution for
                          optimizing traffic signals at intersections,
                          leveraging reinforcement learning to improve traffic
                          flow and reduce congestion in real time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 4 */}
              <SwiperSlide>
                <div className="relative bg-white rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  <img
                    src="ASP.png"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute flex items-center justify-center border-2 h-[90%] w-[90%] border-[#2CB1C2] bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="h-[90%] w-[90%] flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          ASP.NET Web Application Development
                        </h3>
                        <p className="text-sm">
                          <b>Description:</b> A web application built
                          using ASP.NET technologies, focusing on server-side
                          logic, user authentication, and dynamic content rendering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
