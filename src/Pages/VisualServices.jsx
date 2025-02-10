
import React from "react";

const VisualServices = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full flex items-center justify-center py-10 md:py-0">
        <div className="main bg-[#F8F9FF] p-6 md:p-10 w-[90%] md:w-[80%] h-auto md:h-[80%] flex flex-col md:flex-row items-center justify-between rounded-xl">
          
          {/* Left Column */}
          <div className="left w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center">
            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
            Custom Graphic Design Solutions:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            We create custom graphic designs that match your <br />  brand’s vision. From logos to marketing materials, we <br /> deliver unique designs that make a strong impression.

            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
            Creative Branding & Identity Design:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            TechXicon360 specializes in creating strong brand  <br /> identities with eye-catching designs. From logos to <br /> brand guidelines, we build cohesive visuals that <br /> create a memorable and professional brand image.

            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
            Marketing & Promotional Materials:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            Our graphic design experts develop eye-catching <br /> marketing materials like brochures, flyers, banners, <br /> and social media content. We focus on delivering <br /> designs that capture attention and drive <br /> engagement, enhancing your brand’s reach.

            </p>
          </div>

          {/* Right Column */}
          <div className="right w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center mt-6 md:mt-0">
            <h1 className="text-lg md:text-xl mt-4 md:mt-6 ml-2 md:ml-5 text-[#251864] font-semibold">
            Packaging & Product Design:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            We create standout packaging and product designs <br /> that match your brand. Our designs grab attention and <br /> connect with your audience.

            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-10 ml-2 md:ml-5 text-[#251864] font-semibold">
            Visual Content for Digital Platforms:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            TechXicon creates high-quality visual content for <br /> websites, social media, and marketing, including <br /> infographics and banner ads, to boost engagement <br /> and maintain brand consistency.

            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-10 ml-2 md:ml-5 text-[#251864] font-semibold">
            Illustration & Icon Design
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
            We create custom illustrations and icons that <br /> enhance user interfaces and marketing materials, <br /> ensuring consistency and visual appeal across all <br /> platforms.

            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default VisualServices;
