import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import GSAP
import "../index.css"; // Import custom styles for animation
import CubeComponent from "../Components/CubeComponent ";
import AboutUsSection from "./AboutUsSection";
import { Link } from "react-router-dom";
import { MdContactPage } from "react-icons/md"; 
import  Navbar from './Navbar'



const LoadingEffect = () => {
  const [showHome, setShowHome] = useState(false); // State to control home page visibility
  const ballRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const text = textRef.current;

    // Set initial text styles
    text.style.opacity = "0"; // Hide text initially
    text.style.transform = "scale(1)"; // Initial scale

    // GSAP timeline for animation
    const tl = gsap.timeline({
      repeat: 1, // Repeat the movement one more time (total 2 moves)
      onComplete: () => {
        setShowHome(true); // Show home page after 5 seconds
      },
    });

    // GSAP animation for ball movement and scaling
    tl.to(ball, {
      duration: 2, // 2 seconds for one left-right movement
      x: 600, // Move to the right
      scale: 1.7, // Scale up the ball
      ease: "power1.inOut",
    })
      .to(ball, {
        duration: 2, // Move back to the left
        x: 100,
        scale: 1, // Scale back to normal
        ease: "power1.inOut",
      })
      .to(
        text,
        {
          duration: 2, // Reveal the text
          opacity: 1,
          scale: 1.2,
          ease: "power1.out",
        },
        "-=1"
      ); // Sync the text reveal with the second ball movement

    // Set a timeout to end animation and show the home page after 5 seconds
    const timeout = setTimeout(() => {
      setShowHome(true); // Show the home page
    }, 5000);

    return () => {
      clearTimeout(timeout); // Cleanup timeout
    };
  }, []);

  return (
    <div className="container">
      {!showHome ? (
        <svg width="800" height="200" viewBox="0 0 800 200" key="loading-svg">
          <text
            ref={textRef}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#581C87"
            fontSize="56"
            fontFamily="Arial"
            style={{ zIndex: 1 }}
          >
            Neurobiotics
          </text>
          <circle ref={ballRef} fill="#581C87" cx="100" cy="100" r="26" />
        </svg>
      ) : (
        // <div className="home bg-red-300 w-full ">
        <div className="home w-full h-screen animate-gradient bg-gradient-to-r from-blue-800 via-black to-blue-800">
           <Navbar />
          <div className="home-page" key="home-page">
       
        
            {/* Bubbles */}
            <div className="container relative overflow-hidden w-full h-screen flex items-center justify-between"> 
              <div className="flex flex-col items-start justify-between w-70">
              <div className="relative items-start space-y-2 w-full">
                  
                  <h1 className="ml-5 text-left text-[35px] md:text-[64px] lg:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r  from-purple-800 via-pink-700 to-blue-700 animate-gradient">
                  Delivering Superior Services<br /> IT Solutions.<br /> 
                    
                  </h1>
                  <p className="text-[20px] text-start justify-start flex text-white ml-5">You can easily change any design to your own. It is also highly <br /> customizable SEO friendly template.</p>
              </div> 
                
              </div>

              
              <div className="flex justify-center items-center  mb-20 bg-while-500 rounded-full relative ">
                <div className="absolute  rounded-full bg-green-400 opacity-50"></div>
                
                 <img
                  src="https://cdn.pixabay.com/photo/2024/06/18/15/26/ai-generated-8838283_640.jpg"
                  alt="AI Illustration"
                  className="max-w-[80%] h-auto rounded-full z-10 shadow-xl shadow-purple-700"
                />
                {/* <CubeComponent/> */}
             </div> 

              {/* Bubbles */}
              <div className="bubbles absolute top-0 left-0 w-full h-full">
                <span className="bub a w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                  {/* image */}
              </span>
                <span className="bub b w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px]"></span>
                <span className="bub c w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"></span>
                <span className="bub d w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"></span>
                <span className="bub e w-[45px] h-[45px] md:w-[65px] md:h-[65px] lg:w-[85px] lg:h-[85px]"></span>
                <span className="bub f w-[55px] h-[55px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px]"></span>
                <span className="bub g w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"></span>
                <span className="bub h w-[45px] h-[45px] md:w-[65px] md:h-[65px] lg:w-[85px] lg:h-[85px]"></span>
                <span className="bub i w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"></span>
                <span className="bub j w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px]"></span>
                <span className="bub k w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"></span>
              </div> 
            </div> 
        </div>
        </div>
      )}
    </div>
  );
};

export default LoadingEffect;
