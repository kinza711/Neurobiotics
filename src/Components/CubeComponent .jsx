// CubeComponent.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css"; 

const CubeComponent = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    // Animate the cube rotation on all axes
    gsap.to(cubeRef.current, {
      rotationX: 360,
      rotationY: 360,
      rotationZ: 360,
      duration: 5,
      ease: "power2.inOut",
      repeat: -1, // Infinite repeat
      yoyo: true, // Animate back and forth
    });
  }, []);

  return (
    <div className="scene">
      <div className="cube" ref={cubeRef}>
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </div>
    </div>
  );
};

export default CubeComponent;
