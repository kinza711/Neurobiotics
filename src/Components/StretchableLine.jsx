// import React from 'react';
// import { FaRobot, FaLaptopCode, FaMicrosoft } from 'react-icons/fa';


// const services = [
//   {
//     title: 'AI Solutions',
//     description: 'Leverage the power of Artificial Intelligence to boost your business.',
//     icon: <FaRobot className="text-6xl text-[#1F213E] ml-32" />,  // Pink color (#F55861)
//     link: '#',
//   },
//   {
//     title: 'Website Development',
//     description: 'Create stunning and responsive websites tailored to your needs.',
//     icon: <FaLaptopCode className="text-6xl text-[#1F213E] ml-32" />,
//     link: '#',
//   },
//   {
//     title: 'ASP.NET Services',
//     description: 'Robust and scalable ASP.NET solutions for enterprise applications.',
//     icon: <FaMicrosoft className="text-6xl text-[#1F213E] ml-32" />,
//     link: '#',
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <>
 
  
//       {/* Services Section */}
//       <div className="bg-[#f4f4f5] bg-cover bg-center py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-5xl font-bold text-[#32C9DD] mb-10">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-[#FFFFFF] backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-8 hover:scale-110 transition-transform duration-300"
//               >
//                 <div className="mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-gray-800 mb-4">{service.description}</p>
//                 <a
//                   href={service.link}
//                   className="inline-block bg-[#1F213E] text-white py-2 px-4 rounded-full hover:bg-[#32C9DD] transition-colors duration-300"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesSection;





import React from 'react';
import { FaRobot, FaLaptopCode, FaMicrosoft } from 'react-icons/fa';

const services = [
  {
    title: 'AI Solutions',
    description: 'Leverage the power of Artificial Intelligence to boost your business.',
    icon: <FaRobot className="text-6xl text-[#1F213E] mx-auto" />,
    link: '#',
  },
  {
    title: 'Website Development',
    description: 'Create stunning and responsive websites tailored to your needs.',
    icon: <FaLaptopCode className="text-6xl text-[#1F213E] mx-auto" />,
    link: '#',
  },
  {
    title: 'ASP.NET Services',
    description: 'Robust and scalable ASP.NET solutions for enterprise applications.',
    icon: <FaMicrosoft className="text-6xl text-[#1F213E] mx-auto" />,
    link: '#',
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#f4f4f5] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#32C9DD] mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-800 text-sm sm:text-base mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-[#1F213E] text-white py-2 px-6 rounded-full hover:bg-[#32C9DD] transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
