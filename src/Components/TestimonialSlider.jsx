

import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CardSwiper = () => {
  return (
    <Swiper
      spaceBetween={20} // Adjust spacing between cards
      slidesPerView={1} // Default to 1 card per view
      breakpoints={{
        640: {
          slidesPerView: 1, // Small screens
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2, // Medium screens
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3, // Large screens
          spaceBetween: 30,
        },
      }}
      loop={true} // Enables infinite loop
      autoplay={{
        delay: 2000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Autoplay]}
    >
      {/* Cards */}
      {[
        {
          name: "Kinza",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "Working with Neurobiotics has transformed our operations. Their expertise in AI has streamlined our processes, resulting in increased efficiency and substantial cost savings.",
        },
        {
          name: "Asma",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "The team at Neurobiotics went above and beyond to understand our unique requirements. Their customized web solutions have significantly enhanced our online presence and customer engagement.",
        },
        {
          name: "Kinza",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "Working with Neurobiotics has transformed our operations. Their expertise in AI has streamlined our processes, resulting in increased efficiency and substantial cost savings.",
        },
        {
          name: "Asma",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "The team at Neurobiotics went above and beyond to understand our unique requirements. Their customized web solutions have significantly enhanced our online presence and customer engagement.",
        },
        {
          name: "Kinza",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "Working with Neurobiotics has transformed our operations. Their expertise in AI has streamlined our processes, resulting in increased efficiency and substantial cost savings.",
        },
        {
          name: "uzma",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "The team at Neurobiotics went above and beyond to understand our unique requirements. Their customized web solutions have significantly enhanced our online presence and customer engagement.",
        },
        {
          name: "humaira",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "Working with Neurobiotics has transformed our operations. Their expertise in AI has streamlined our processes, resulting in increased efficiency and substantial cost savings.",
        },
        {
          name: "bilal",
          role: "Web Developer",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s",
          review:
            "The team at Neurobiotics went above and beyond to understand our unique requirements. Their customized web solutions have significantly enhanced our online presence and customer engagement.",
        },
      ].map((person, index) => (
        <SwiperSlide key={index}>
          <div className="card bg-white p-4 rounded-md shadow-md flex flex-col">
            {/* Top section */}
            <div className="top bg-transparent flex p-2 text-start">
              <div className="left w-1/4">
                <img
                  src={person.img}
                  alt="profile"
                  className="w-full h-auto rounded-full"
                />
              </div>
              <div className="right w-3/4 pl-4">
                <h1 className="text-black font-semibold text-xl">{person.name}</h1>
                <h5 className="text-sm text-gray-600">{person.role}</h5>
                <div className="stars flex mt-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="bottom bg-transparent text-start text-black p-4 rounded-b-md mt-1">
              <p className="text-[19px]">{person.review}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TestimonialSlider = () => {
  return (
    <div className="testimonials h-screen w-full bg-[#FFFFFF]">
      <h1 className="text-[#1F213E] mt-3 mb-3 text-4xl font-semibold text-center">
        Join Our Happy Clients
      </h1>
      <p className="text-black text-md font-semibold text-center">
        At NeuroBiotics, here’s a glimpse into the experiences <br /> of those
        who have partnered with us on their journey of innovation.
      </p>

      {/* Swiper section */}
      <div className="swiper-section bg-transparent py-16 mt-8">
        <CardSwiper />
      </div>
    </div>
  );
};

export default TestimonialSlider;
