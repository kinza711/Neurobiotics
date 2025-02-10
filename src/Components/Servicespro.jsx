
import React from "react";

const Servicespro = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full flex items-center justify-center py-10 md:py-0">
        <div className="main bg-[#F8F9FF] p-6 md:p-10 w-[90%] md:w-[80%] h-auto md:h-[80%] flex flex-col md:flex-row items-center justify-between rounded-xl">
          
          {/* Left Column */}
          <div className="left w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center">
            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
              Enterprise Resource Planning (ERP):
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              Our ERP systems help you manage your business <br className="hidden md:block" /> 
              operations seamlessly, from inventory to finances, <br className="hidden md:block" /> 
              in one place.
            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
              Customer Relationship Management (CRM):
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              We develop CRM tools to help you track leads, <br className="hidden md:block" /> 
              manage customer interactions, and boost sales <br className="hidden md:block" /> 
              effectively.
            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-5 ml-2 md:ml-5 text-[#251864] font-semibold">
              Software Integration Services:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              We ensure your existing software works together <br className="hidden md:block" /> 
              smoothly, saving you time and reducing errors.
            </p>
          </div>

          {/* Right Column */}
          <div className="right w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center mt-6 md:mt-0">
            <h1 className="text-lg md:text-xl mt-4 md:mt-6 ml-2 md:ml-5 text-[#251864] font-semibold">
              Point of Sales (POS) Software
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              Our POS systems streamline your sales process, <br className="hidden md:block" /> 
              manage inventory, and improve customer experiences.
            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-10 ml-2 md:ml-5 text-[#251864] font-semibold">
              Custom Software Development:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              We design and build software specifically tailored to <br className="hidden md:block" /> 
              your unique business requirements.
            </p>

            <h1 className="text-lg md:text-xl mt-4 md:mt-10 ml-2 md:ml-5 text-[#251864] font-semibold">
              Software Maintenance and Support:
            </h1>
            <p className="text-gray-600 ml-2 md:ml-5 text-base md:text-lg">
              Our team provides ongoing support and updates to <br className="hidden md:block" /> 
              keep your software running smoothly and securely.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Servicespro;
