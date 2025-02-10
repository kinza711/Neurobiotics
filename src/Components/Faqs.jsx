

import React, { useState } from 'react';

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqData = [
    {
      question: '1. What services does TechXicon offer?',
      answer:
        'At TechXicon, we specialize inefficiency and drive growth.',
    },
    {
      question: '2.Does techXicon provide ongoing support after completion?',
      answer:
        'You can get started by be happy to discuss your project needs and provide tailored solutions.',
    },
    {
      question: '3. Why choose TechXicon?',
      answer:
        'We serve a wide range of industries,g businesses leverage technology to achieve their goals.',
    },
    {
      question: '4. How TechXicon help improve my online presence?',
      answer:
        'Yes, we offer continuun smoothly and remain updated.',
    },
    {
      question: '5. What makes TechXicons web development services unique?',
      answer:
        'Project timelines vary based onde a more accurate timeline.',
    },
    {
      question: '6. Can TechXicon develop a custom mobile app for my business?',
      answer:
        'Absolutely! We can in improve overall performance.',
    },
    {
      question: '7. What type of software solutions does TechXicon provide?',
      answer:
        'We utilize the lating-edge and effective.',

    },
    {
      question: '8. How can TechXicon assist with my e-commerce business?',
      answer:
        'Yes, all our services are t solutions for your business',
    },
    {
      question: '9.What is the process for starting a project with TechXicon?',
      answer:
        'Our pricing model is fs budgets.',
    },
    {
      question: '10. How does TechXicon ensure the quality of its services?',
      answer:
        'Project timelines v.',
    },
    {
      question: '11. How can i get in touch with TechXicon for more informations?',
      answer:
        'You can reach our support team via email at injbbyv or by calling us at 79798686867868. We’re here to help!',
    },

  ];

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id='faq' className="flex flex-col bg-transparent items-center justify-center w-full h-full p-10">
      <div className="w-full  max-w-6xl p-4 bg-[#FFFFFF] shadow-lg rounded-lg">
        <p className="text-2xl font-semibold  text-[#442AC7] text-start mb-1">FAQs</p>
        <p className="text-2xl font-semibold  text-[#7941EA] text-start mb-5">Frequently Asked Questions</p>
        <p className="text-2xl font-semibold  text-black text-start mb-5">Got questions? Explore our FAQs to find everthing you need to know about our services, processes,  and more.</p>
        <div className="space-y-3">
          {faqData.slice(0, showMore ? faqData.length : 4).map((item, index) => (
            <div
              key={index}
              className={`bg-[#f1feff]  p-2 rounded-lg transition-all duration-300 ${
                selectedItem === index ? 'bg-white' : ''
              }`}
            >
              <div
                className="flex justify-between  items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <p className="font-semibold text-lg">{item.question}</p>
                <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                  {selectedItem === index ? '-' : '+'}
                </span>
              </div>
              {selectedItem === index && (
                <div className="mt-2 text-sm text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button
            className="px-6 py-2 bg-[#5E38D8] text-white rounded-full hover:bg-[#4b2daf] hover:text-white"
            onClick={handleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
