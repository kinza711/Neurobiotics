

import React, { useState } from 'react';

const slides = [
  {
    backgroundImage: 'url("https://i.pinimg.com/564x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg")',
    // title: "What's next in .NET 9?",
    // description: ".NET 9 elevates cloud-native and intelligent app development, and more. Preview the next major version of .NET today.",
    // link: "/en-us/next",
    // linkText: "See what's next"
  },
  {
    backgroundImage: 'url("https://dotnet.microsoft.com/blob-assets/images/illustrations/carousel/aspire-day.png")',
    // title: ".NET Aspire Developers Day",
    // description: "Our virtual event is over but catch up on sessions that you missed with our on-demand videos.",
    // link: "https://aka.ms/dotnetAspireDevDayVideos",
    // linkText: "Watch on demand"
  },
  {
    backgroundImage: 'url("https://media.istockphoto.com/id/1999938268/photo/a-chip-labeled-ai-in-the-middle-of-metal-components.jpg?s=612x612&w=0&k=20&c=WiOgextBDKrJvJTAR18PIe3EE5aJSQdfqfF-0zoY7rw=")',
    // title: "Windows and .NET PowerShell",
    // description: "Enhance your workflow with the latest updates and features in Windows and .NET PowerShell.",
    // link: "/en-us/windows-powershell",
    // linkText: "Learn more"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-[80%]  items-center justify-center ml-44 bg-transparent h-screen  py-8 overflow-hidden">
      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-lg z-30"
        aria-label="Go back to previous slide"
        onClick={prevSlide}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5-5h10l-5 5zM10 5l5 5H5l5-5z" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-lg z-30"
        aria-label="Move to next slide"
        onClick={nextSlide}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l5-5H5l5 5zM10 5l-5 5h10l-5-5z" />
        </svg>
      </button>

      {/* Slides */}
      <div className="relative flex items-center justify-center h-full">
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          let positionClasses = 'opacity-0 transform scale-75';
          if (isCurrent) {
            positionClasses = 'z-20 transform scale-100 opacity-100';
          } else if (isPrev) {
            positionClasses = 'z-10 transform scale-75 -translate-x-2/3 opacity-75';
          } else if (isNext) {
            positionClasses = 'z-10 transform scale-75 translate-x-2/3 opacity-75';
          }

          return (
            <figure
              key={index}
              className={`absolute transition-all duration-500 ease-in-out bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-4/5 w-full max-w-[80%] ${positionClasses}`}
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <figcaption className="flex flex-col justify-center h-full p-6 bg-transparent bg-opacity-75 rounded-lg">
                <div className="text ml-5 max-w-[300px] h-auto bg-[#FAFAFA] rounded-lg p-3">
                  <h2 className="ml-5 text-[14px] md:text-lg lg:text-2xl font-bold text-gray-800">{slide.title}</h2>
                  <p className="ml-5 text-[10px] md:text-sm lg:text-md mt-1 text-gray-700">{slide.description}</p>
                  <a
                    className="mt-2 ml-5 text-blue-600 text-[9px] md:text-sm lg:text-md hover:underline flex items-center"
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {slide.linkText}
                    <svg
                      width="16"
                      height="16"
                      className="ml-1 w-4 h-4 fill-current"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 8h8l-3.5 3.5L8 13l5-5-5-5-1.5 1.5L10 8H2z" />
                    </svg>
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
