import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

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
      onComplete: () => {
        setShowHome(true); // Show home page after all animations
      },
    });

    // First move: Ball moves from left to right
    tl.to(ball, {
      duration: 0.7, // Fast speed
      x: 500,
      scale: 1.7,
      ease: "power4.inOut", // Fast at start
      onStart: () => {
        ball.style.boxShadow = "20px 5px 30px rgba(88, 28, 135, 0.6)"; // Shadow tail effect
      },
    })
    // Second move: Ball moves from right to left, text appears at the same time
    .to(ball, {
      duration: 0.7, // Fast speed
      x: 100,
      scale: 1,
      ease: "power4.inOut",
      onStart: () => {
        ball.style.boxShadow = "10px 5px 20px rgba(88, 28, 135, 0.6)"; // Reduce shadow effect
        // Show the text as soon as ball starts moving left
        gsap.to(text, {
          opacity: 1,
          scale: 1.2,
          duration: 0.3, // Quick appearance
          ease: "power1.out",
        });
      },
    })
    // Third move: Ball moves from left to right again, and text disappears right away
    .to(ball, {
      duration: 0.7, // Fast speed
      x: 500,
      scale: 1.7,
      ease: "power4.inOut",
      onStart: () => {
        ball.style.boxShadow = "20px 5px 30px rgba(88, 28, 135, 0.6)"; // Shadow tail effect
        // Hide the text as soon as the ball starts moving right
        gsap.to(text, {
          opacity: 0,
          duration: 0.3, // Quick disappearance
          ease: "power1.in",
        });
      },
    })
    // Fourth move: Ball moves back to the left without bouncing, then shows homepage
    .to(ball, {
      duration: 0.7,
      x: 100,
      scale: 1,
      ease: "power4.out", // Smooth easing without bounce
      onStart: () => {
        ball.style.boxShadow = "10px 5px 20px rgba(88, 28, 135, 0.6)"; // Reduce shadow effect
      },
    });

    return () => {
      // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="container">
      {!showHome ? (
        <svg width="800" height="400" viewBox="0 0 800 200" key="loading-svg">
          <text
            ref={textRef}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="56"
            fontFamily="Arial"
            style={{ zIndex: 1 }}
          >
            <tspan fill="#581C87">Neuro</tspan>
            <tspan fill="#808080">biotics</tspan>
          </text>
          <circle
            ref={ballRef}
            fill="#581C87"
            cx="100"
            cy="100"
            r="24"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(88, 28, 135, 0.6))" }} // Initial shadow effect
          />
        </svg>
      ) : (
        <div className="home w-full h-screen animate-gradient bg-gradient-to-r from-blue-800 via-black to-blue-800">
          {/* Render home page content after animation */}
          Home Page Content
        </div>
      )}
    </div>
  );
};

export default LoadingEffect;
