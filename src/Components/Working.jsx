
import React from "react";

const Working = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex items-center justify-center w-full h-auto py-10">
        <div className="w-[80%] bg-transparent p-8 flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-black">Our Working Process</h1>
          <div className="bg-[#6139DA] h-[2.75px] w-56 mt-2"></div>

          {/* Cards Container */}
          <div className="bg-transparent w-full flex flex-wrap justify-center gap-6 p-6 mt-6">
            
            {/* Cards - Ensuring 3 per row */}
            {[
              { title: "Understanding Your Goals", description: "We start by learning about your business, target audience, and project objectives. This helps us design experiences that align perfectly with your vision and user needs." },
              { title: "Research and Strategy", description: "Our team conducts detailed research on your industry, competitors, and audience behavior. We create a clear strategy to ensure the design is effective and user-focused." },
              { title: "Wireframing and Prototyping", description: "We develop wireframes and prototypes to visualize the layout and functionality of your design. This step ensures you have a clear preview of the final product before development begins." },
              { title: "Design and Testing", description: "Our designers create engaging, responsive designs while focusing on usability. We perform rigorous testing to ensure the design is intuitive, accessible, and meets user expectations." },
              { title: "Launch and Ongoing Support", description: "Once the design is finalized, we launch it across all devices and ensure everything runs smoothly. We also provide ongoing support and updates to keep your design functional and relevant as your business grows." },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#FFFFFF] overflow-hidden rounded-3xl border-[0.5px] border-black shadow-md h-60 w-72 flex flex-col text-center text-lg font-semibold text-black"
              >
                {/* Top Section - Heading with Full Width & Equal Height */}
                <div className="bg-[#efe8f5] w-full h-20 p-6 flex items-center justify-center text-gray-600 text-[20px] font-bold">
                  {item.title}
                </div>
                
                {/* Bottom Section - Paragraph */}
                <div className="p-4 flex-grow flex items-center justify-center text-sm">
                  {item.description}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
