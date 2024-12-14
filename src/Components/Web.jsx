// import React from 'react';

// const Web = () => {
//   return (
//     <div className="main flex items-center justify-center w-full h-screen bg-red-600">
//       <div className="left w-1/2 bg-blue-400 p-5 mx-16">
//         <h1 className="text-6xl text-white font-bold">
//           Solutions We <br /> Provide
//         </h1>
//         <p className="text-lg mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati itaque nisi, fuga perferendis reiciendis magni minima officia facilis animi nam dignissimos velit explicabo aut accusamus nulla cupiditate. Accusamus, aliquid nostrum.
//         </p>
//       </div>

      

//       <div className="right w-1/2 bg-yellow-300 p-5 mx-5">
//         {/* You can add more content or components here if needed */}
//       </div>
//     </div>
//   );
// };

// export default Web;





import React from "react";
import { SlDiamond } from "react-icons/sl";

function Craft( ) {
  return (
    <>
      <div className="main w-full  bg-[#FFFFFF] ">
        <div className="craft flex gap-5 w-full px-7 py-5 justify-between relative items-start">
          <div className="left bg-transparent ml-14 w-[50%] mt-32 sticky top-0 left-0 ">
            <p className=" text-[18px]  mt-32">
              Significo is a custom health software developer founded on the
              belief that technology can transform healthcare to put people
              first. We put humanity back at the center of healthcare with
              technology that simplifies complexity, accelerates capacity, and
              improves outcomes.
            </p>
            <h1 className="text-6xl text-black font-bold">
           Solutions We <br /> Provide
         </h1>

            <div className="w-fit text-xl px-5  mt-5 bg-[#062A2E]  text-white  border-black border-[0.5px]">
              <div className="masker overflow-hidden ">
                <span className="inline-block text-[10px] font-medium">
                  OUR SOLUTIONS
                </span>
              </div>
            </div>
            {/* <button className='border-separate border-black border-[0.5px] mt-3 p-1'>OUR SOLUTIONS</button> */}
          </div>

          <div className="right flex flex-col ml-56 bg-transparent w-1/2">
            <div className="card  w-[90%]  flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex text-start items-center justify-center">
                <div>
                  <h1 className="text-[22px]  ml-5 font-bold">
                    Custom Web Application Development
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Crafting Tailored Digital Solutions</b><br />
                  We design and build web applications from scratch, focusing on scalable architecture and intuitive UI/UX that meet your unique business needs. Our team ensures the highest standards in performance and user experience.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] text-start flex items-center justify-center">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  Responsive Design and Mobile Optimization
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Seamless Experience Across All Devices</b> <br />
                  Our designs are mobile-first and responsive, making sure that your web application or site looks great and functions smoothly on any device—from desktops to tablets and smartphones.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  E-commerce Development
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Boost Your Online Business with Modern E-commerce Solutions</b> <br />
                  We create fully integrated e-commerce platforms with features such as secure payment gateways, product management, and an optimized checkout process to provide a smooth shopping experience.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  API Integration and Development
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Connecting Your Application to Powerful External Services</b> <br />
                  Our team can integrate third-party APIs or create custom APIs to add enhanced functionality, helping your applications communicate seamlessly with other services or platforms.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  Performance Optimization and Scalabilitye
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Building Speed and Stability for High Traffic</b> <br />
                  We specialize in optimizing web applications for high performance, focusing on loading speed, server response, and ensuring scalability as your traffic and data needs grow.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  Maintenance and Support
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                 <b> Ongoing Care for Long-Term Success</b> <br />
                  Our commitment doesn’t end at launch. We provide ongoing support and maintenance to keep your application running smoothly, with regular updates and security monitoring.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  SEO and Analytics Integration
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Drive Visibility and Track Your Success</b> <br />
                  From the initial setup to advanced SEO practices, we help ensure your site is search-engine-friendly. Our analytics integration allows you to monitor performance and gather insights into user behavior
                  </p>
                </div>
              </div>
            
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  SEO and Analytics Integration
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Drive Visibility and Track Your Success</b> <br />
                  From the initial setup to advanced SEO practices, we help ensure your site is search-engine-friendly. Our analytics integration allows you to monitor performance and gather insights into user behavior.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  Maintenance and Support
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                 <b> Ongoing Care for Long-Term Success</b> <br />
                  Our commitment doesn’t end at launch. We provide ongoing support and maintenance to keep your application running smoothly, with regular updates and security monitoring.
                  </p>
                </div>
              </div>
              
            </div>


            <div className="card w-[90%] flex border-[#13737F] border-[0.5px] bg-transparent hover:bg-[#062A2E] text-black hover:text-white mb-2">
              <div className="left w-full h-[110px] flex items-center justify-center text-start">
                <div>
                  <h1 className="text-[22px] mt-5 ml-5 font-bold">
                  Performance Optimization and Scalability
                  </h1>
                  <p className="text-[15px] ml-5 mt-1 font-semibold">
                  <b>Building Speed and Stability for High Traffic</b> <br />
                  We specialize in optimizing web applications for high performance, focusing on loading speed, server response, and ensuring scalability as your traffic and data needs grow.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Craft;
