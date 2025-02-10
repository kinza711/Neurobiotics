
import React from "react";

const Working = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex items-center justify-center w-full h-auto py-10">
        <div className="w-[80%] bg-transparent p-8 flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-black">Our Working Process</h1>
          <div className="bg-[#6139DA] h-[2.75px] w-56 mt-2"></div>

          {/* Cards Container - Using Grid */}
          <div className="bg-transparent w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-6">
            
            {[
              { title: "Understanding Your Business & Goals", description: "We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives." },
              { title: "Market Research & Strategy Development", description: "Our team conducts in-depth market research to analyze competitors, industry trends, and customer behavior. Based on these insights, we develop a detailed digital marketing strategy to maximize your reach." },
              { title: "Campaign Execution & Optimization", description: "We implement targeted campaigns across various channels like social media, search engines, and email marketing. We continuously monitor performance and make data-driven adjustments to improve results and ROI." },
              { title: "Reporting & Analysis", description: "We provide clear and transparent reports, showing the performance of your campaigns. Through detailed analysis, we identify what's working and refine our strategies to ensure consistent growth." },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#FFFFFF] overflow-hidden rounded-3xl border-[0.5px] border-black shadow-md h-72 w-full flex flex-col text-center text-lg font-semibold text-black"
              >
                {/* Top Section - Heading with Full Width & Equal Height */}
                <div className="bg-[#efe8f5] w-full h-24 p-6 flex items-center justify-center text-gray-600 text-[20px] font-bold">
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
