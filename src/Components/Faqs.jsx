

import React, { useState } from 'react';

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqData = [
    {
      question: '1. What services does NeuroBiotics offer?',
      answer:
        'At NeuroBiotics, we specialize in providing customized Web, .NET, and AI solutions designed to enhance business efficiency and drive growth.',
    },
    {
      question: '2.How can I get started with your services?',
      answer:
        'You can get started by reaching out to us through our contact form or by calling us directly. Our team will be happy to discuss your project needs and provide tailored solutions.',
    },
    {
      question: '3. What industries do you serve?',
      answer:
        'We serve a wide range of industries, including healthcare, finance, education, and e-commerce, helping businesses leverage technology to achieve their goals.',
    },
    {
      question: '4. Do you provide ongoing support after project completion?',
      answer:
        'Yes, we offer continuous support and maintenance services to ensure your solutions run smoothly and remain updated.',
    },
    {
      question: '5. How long does it typically take to complete a project?',
      answer:
        'Project timelines vary based on complexity and requirements. After discussing your project, we can provide a more accurate timeline.',
    },
    {
      question: '6. Can you work with existing systems and software?',
      answer:
        'Absolutely! We can integrate our solutions with your existing systems to enhance functionality and improve overall performance.',
    },
    {
      question: '7. What technologies do you use?',
      answer:
        'We utilize the latest technologies in Web development, .NET frameworks, and AI, ensuring our solutions are cutting-edge and effective.',

    },
    {
      question: '8. Do you offer customized solutions?',
      answer:
        'Yes, all our services are tailored to meet the specific needs of our clients, ensuring that we deliver the most relevant solutions for your business',
    },
    {
      question: '9.What is your pricing model?',
      answer:
        'Our pricing model is flexible and based on project requirements. We offer competitive rates and transparent pricing to suit various budgets.',
    },
    {
      question: '10. How long does it typically take to complete a project?',
      answer:
        'Project timelines vary based on complexity and requirements. After discussing your project, we can provide a more accurate timeline.',
    },
    {
      question: '11. How do I contact your support team?',
      answer:
        'You can reach our support team via email at info@neurobiotics.com or by calling us at +92 3000337348. We’re here to help!',
    },

  ];

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col bg-transparent items-center justify-center w-full h-full p-10">
      <div className="w-full  max-w-7xl p-4 bg-white shadow-lg rounded-lg">
        <p className="text-2xl font-bold text-center mb-5">FAQ's</p>
        <div className="space-y-3">
          {faqData.slice(0, showMore ? faqData.length : 4).map((item, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-4 rounded-lg transition-all duration-300 ${
                selectedItem === index ? 'bg-white' : ''
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
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
            className="px-6 py-2 bg-[#015053] text-white rounded-full hover:bg-[#001421] hover:text-white"
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
