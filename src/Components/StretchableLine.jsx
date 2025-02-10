import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Card data array with icons, headings, and descriptions
const cards = [
  {
    id: 1,
    title: "Digital Marking",
    image: "/digital-icon.png",
    description:
      "We help businesses grow online by using effective strategies like social media, search engine optimization, and paid ads to reach more customers and boost sales.",
  },
  {
    id: 2,
    title: "Visual Designing",
    image: "/pen-icon.png",
    description:
      "Our creative designs make your brand stand out. We create eye-catching visuals like logos, graphics, and promotional materials to give your business a unique identity.",
  },
  {
    id: 3,
    title: "Web Development",
    image: "/web-icon.png",
    description:
      "We build user-friendly, responsive websites that work across all devices. Our websites are designed to provide a smooth experience for your customers while enhancing your online presence.",
  },
  {
    id: 4,
    title: "App Development",
    image: "/app-icon.png",
    description:
      "We develop custom mobile apps that improve user engagement and make your services more accessible. Whether for iOS or Android, we create apps that help your business grow.",
  },
  {
    id: 5,
    title: "Software Solutions",
    image: "/soft-icon.png",
    description:
      "Our customized software solutions simplify your business processes, improve efficiency, and help you manage operations with ease, ensuring long-term success.",
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    image: "/ecom-icon.png",
    description:
      "We provide end-to-end e-commerce solutions, from building online stores to integrating payment systems, ensuring your business thrives in the digital marketplace.",
  },
];

const SwiperSlider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 3,
      spaceBetween: 5,
      breakpoints: {
        1920: { slidesPerView: 3, spaceBetween: 10 },
        1028: { slidesPerView: 3, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 10 },
      },
    });
  }, []);

  return (
    <div id="services" className="w-full h-screen bg-[#F8F8F7]">
      <div className="purple w-full h-[60vh] items-center justify-center relative flex bg-[#442AC7]">
        <div className="heading w-[70%] h-auto text-white p-5 -mt-16">
          <h1 className="text-3xl mb-[0.75px]">Our Custom Services</h1>
          <div className="line w-36 h-1 bg-[#00CFDD] rounded-lg"></div>
          <h1 className="text-3xl mt-2">
            TechXicon is here to support your business every step of the way.
          </h1>
          <p className="text-[18px] mt-1">
            We provide effective and sales-driven business solutions to help our
            clients grow. With a
            <br />
            strong commitment to honesty, integrity, and dedication, we help
            businesses reach new
            <br />
            heights and uncover new opportunities for their success.
          </p>
        </div>
      </div>

      <div className="swiper-container w-[70%] h-[55vh] -mt-40 ml-56 absolute">
        {/* Container for the buttons */}
        <div className="swiper-button-container absolute top-4 right-4 flex justify-between -space-x-3 w-auto">
          <div className="swiper-button-next bg-transparent border-2 border-white w-14 h-14 rounded-full text-white hover:bg-[#00CFDD]"></div>{" "}
          {/* Increased size */}
          <div className="swiper-button-prev hover:border-2  border-white w-14 h-14 rounded-full text-white bg-[#00CFDD]"></div>{" "}
          {/* Increased size */}
        </div>

        <div className="max-w-5xl mx-auto py-10">
          <div className="swiper">
            <div className="swiper-wrapper">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="swiper-slide h-[45vh] mt-5 bg-white text-start flex flex-col items-start justify-center p-6 shadow-md rounded-lg"
                >
                  <div className="top w-32 h-30 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-24 h-28"
                    />
                  </div>
                  <div className="bottom bg-transparent mt-4">
                    <h1 className="text-lg font-semibold">{card.title}</h1>
                    <p className="text-sm text-gray-600">{card.description}</p>
                    <button className="border-2 border-black py-1 px-3 mt-3 rounded-md">
                      Read More &gt;&gt;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;



