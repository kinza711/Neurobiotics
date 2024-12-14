
// import React, { useEffect, useRef } from 'react';
// import '../index.css'; 
// import Navbar from './Navbar';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const DotCanvas = () => {
//   const canvasRef = useRef(null);
//   const dots = useRef([]);
//   const mouse = useRef({ x: null, y: null });

//   // Create Dot class
//   class Dot {
//     constructor(x, y, size, speedX, speedY) {
//       this.x = x || Math.random() * window.innerWidth;
//       this.y = y || Math.random() * window.innerHeight;
//       this.size = size || Math.random() * 2.5 + 1;
//       this.speedX = speedX || (Math.random() * 0.4 - 0.2); // Adjusted speed for a more natural movement
//       this.speedY = speedY || (Math.random() * 0.4 - 0.2);
//     }

//     draw(ctx) {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx.fillStyle = 'white';
//       ctx.fill();
//     }

//     update(canvasWidth, canvasHeight) {
//       // Bounce off edges
//       if (this.x > canvasWidth || this.x < 0) {
//         this.speedX = -this.speedX;
//       }
//       if (this.y > canvasHeight || this.y < 0) {
//         this.speedY = -this.speedY;
//       }
//       this.x += this.speedX;
//       this.y += this.speedY;
//     }
//   }

//   // Initialize dots
//   const initDots = (numDots) => {
//     dots.current = [];
//     for (let i = 0; i < numDots; i++) {
//       dots.current.push(new Dot());
//     }
//   };

//   // Connect dots and mouse to each other
//   const connectDots = (ctx) => {
//     for (let a = 0; a < dots.current.length; a++) {
//       for (let b = a + 1; b < dots.current.length; b++) {
//         let dx = dots.current[a].x - dots.current[b].x;
//         let dy = dots.current[a].y - dots.current[b].y;
//         let distance = Math.sqrt(dx * dx + dy * dy);

//         // Draw connection if dots are close enough
//         if (distance < 100) {
//           ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
//           ctx.lineWidth = 0.5;
//           ctx.beginPath();
//           ctx.moveTo(dots.current[a].x, dots.current[a].y);
//           ctx.lineTo(dots.current[b].x, dots.current[b].y);
//           ctx.stroke();
//           ctx.closePath();
//         }
//       }

//       // Connect dots to the mouse
//       let mouseDx = mouse.current.x - dots.current[a].x;
//       let mouseDy = mouse.current.y - dots.current[a].y;
//       let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

//       if (mouseDistance < 150) {
//         ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(dots.current[a].x, dots.current[a].y);
//         ctx.lineTo(mouse.current.x, mouse.current.y);
//         ctx.stroke();
//         ctx.closePath();
//       }
//     }
//   };

//   // Main animation function
//   const animate = (ctx, canvasWidth, canvasHeight) => {
//     // Fill the background with blue color
//     ctx.fillStyle = '#082325'; // Background color
//     ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//     dots.current.forEach((dot) => {
//       dot.update(canvasWidth, canvasHeight);
//       dot.draw(ctx);
//     });

//     connectDots(ctx);
//     requestAnimationFrame(() => animate(ctx, canvasWidth, canvasHeight));
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     initDots(48); // Initialize 48 dots

//     // Mouse move event
//     const handleMouseMove = (event) => {
//       mouse.current.x = event.clientX; // Changed to clientX for better accuracy
//       mouse.current.y = event.clientY; // Changed to clientY for better accuracy
//     };

//     // Handle window resize to update canvas size
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initDots(48); // Re-initialize dots on resize
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     animate(ctx, canvas.width, canvas.height); // Start the animation

//     // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="dot-canvas-container2">
     
//       <canvas ref={canvasRef} className="background-canvas bg-cover overflow-hidden" />
      
//       <footer className="footer " role="contentinfo" itemType="http://schema.org/WPFooter">
//         <div className="footer-left bg-yellow-500  overflow-hidden" itemType="http://schema.org/Organization">   
//         <img src="/Nlogo.png" alt="" className='w-60 h-60 m-5  ' />
//           <h3 className="p-name text-black ">
            
//             Neuro<span className="!text-[#32C9DD]">Biotics</span>
//           </h3>
//           <nav aria-label="Footer Navigation">
//             <p className="footer-links">
//               <Link to="/" className="text-black hover:underline hover:text-[#32C9DD]">Home</Link>
//               <Link to="/about" className="text-black hover:underline hover:text-[#32C9DD]">About Us</Link>
//               <Link to="/services" className="text-black hover:underline hover:text-[#32C9DD]">Services</Link>
//               <Link to="/project" className="text-black hover:underline hover:text-[#32C9DD]">Projects</Link>
//               <Link to="/contact" className="text-black hover:underline hover:text-[#32C9DD]">Contact</Link>
//             </p>
//           </nav>
//           <p className="footer-name !text-[#32C9DD]"><p>&copy; 2024 NeuroBiotics. All rights reserved.</p></p>
//           {/* <img src="/N.png" alt="" className='w-64 h-64' /> */}
//         </div>

//         <div className="footer-center bottom-0 h-auto text-[20px] bg-blue-800 flex flex-col md:flex-row items-center justify-around">
//           <div itemType="http://schema.org/PostalAddress" className="p-address flex items-center mt-[20vh] ml-5 md:mb-0">
//             <FaMapMarkerAlt aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
//             <h1 className="text-gray-400 ml-2">Lahore, Punjab, Pakistan</h1>
//           </div>
//           <div className="flex items-center mt-3 ml-5 mb-2 md:mb-0">
//             <FaPhone aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
//             <h1 className="text-gray-400 ml-2">+9230000337348</h1>
//           </div>
//           <div className="flex items-center mt-3 ml-5 mb-2 md:mb-0 ">
//             <FaEnvelope aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
//             <p>
//               <a href="mailto:support@company.com" itemProp="email" className="u-email !text-[#32C9DD] ml-2"> Neurobiotics.ai@gmail.com</a>
//             </p>
//           </div>
//         </div>

//         <div className="footer-right bg-red-700 ">
//           <h1 className="text-3xl font-bold mt-[17vh] text-[#32C9DD] ml-2">About Us</h1>
//           <p className="text-[13px] font-semibold text-gray-400 mt-3 mb-2 mr-3 ml-2">
//           At NeuroBiotics, we leverage technology to deliver innovative AI and web solutions that drive business growth. Our expert team provides tailored services designed to meet the unique needs of each client. With a commitment to excellence and customer satisfaction, we empower organizations to navigate the digital landscape and achieve their strategic goals.
//           </p>
//           <div className="footer-socials flex mt-4">
//             <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaFacebook /></a>
//             <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaTwitter /></a>
//             <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaLinkedin /></a>
//             <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaGithub /></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DotCanvas; 

import React, { useEffect, useRef } from 'react';
import '../index.css'; 
import Navbar from './Navbar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const DotCanvas = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: null, y: null });

  // Create Dot class
  class Dot {
    constructor(x, y, size, speedX, speedY) {
      this.x = x || Math.random() * window.innerWidth;
      this.y = y || Math.random() * window.innerHeight;
      this.size = size || Math.random() * 2.5 + 1;
      this.speedX = speedX || (Math.random() * 0.4 - 0.2); // Adjusted speed for a more natural movement
      this.speedY = speedY || (Math.random() * 0.4 - 0.2);
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    update(canvasWidth, canvasHeight) {
      // Bounce off edges
      if (this.x > canvasWidth || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvasHeight || this.y < 0) {
        this.speedY = -this.speedY;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  // Initialize dots
  const initDots = (numDots) => {
    dots.current = [];
    for (let i = 0; i < numDots; i++) {
      dots.current.push(new Dot());
    }
  };

  // Connect dots and mouse to each other
  const connectDots = (ctx) => {
    for (let a = 0; a < dots.current.length; a++) {
      for (let b = a + 1; b < dots.current.length; b++) {
        let dx = dots.current[a].x - dots.current[b].x;
        let dy = dots.current[a].y - dots.current[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Draw connection if dots are close enough
        if (distance < 100) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dots.current[a].x, dots.current[a].y);
          ctx.lineTo(dots.current[b].x, dots.current[b].y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      // Connect dots to the mouse
      let mouseDx = mouse.current.x - dots.current[a].x;
      let mouseDy = mouse.current.y - dots.current[a].y;
      let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

      if (mouseDistance < 150) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dots.current[a].x, dots.current[a].y);
        ctx.lineTo(mouse.current.x, mouse.current.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  // Main animation function
  const animate = (ctx, canvasWidth, canvasHeight) => {
    // Fill the background with blue color
    ctx.fillStyle = '#082325'; // Background color
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    dots.current.forEach((dot) => {
      dot.update(canvasWidth, canvasHeight);
      dot.draw(ctx);
    });

    connectDots(ctx);
    requestAnimationFrame(() => animate(ctx, canvasWidth, canvasHeight));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initDots(48); // Initialize 48 dots

    // Mouse move event
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX; // Changed to clientX for better accuracy
      mouse.current.y = event.clientY; // Changed to clientY for better accuracy
    };

    // Handle window resize to update canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots(48); // Re-initialize dots on resize
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate(ctx, canvas.width, canvas.height); // Start the animation

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dot-canvas-container2">
      <canvas ref={canvasRef} className="background-canvas bg-cover overflow-hidden" />
      
      <footer className="footer" role="contentinfo" itemType="http://schema.org/WPFooter">
  {/* Yellow Section */}
  <div className="footer-left bg-transparent overflow-hidden p-5 w-full h-screen flex-shrink-0 flex flex-col justify-between">
    <img src="/Nlogo.png" alt="" className="w-60 h-60 mx-auto md:mx-0" />
    <h3 className="p-name text-black text-center md:text-left">
      Neuro<span className="!text-[#32C9DD]">Biotics</span>
    </h3>
    <nav aria-label="Footer Navigation">
      <p className="footer-links text-center md:text-left">
        <Link to="/" className="text-black hover:underline hover:text-[#32C9DD]">Home</Link>
        <Link to="/about" className="text-black hover:underline hover:text-[#32C9DD]">About Us</Link>
        <Link to="/services" className="text-black hover:underline hover:text-[#32C9DD]">Services</Link>
        <Link to="/project" className="text-black hover:underline hover:text-[#32C9DD]">Projects</Link>
        <Link to="/contact" className="text-black hover:underline hover:text-[#32C9DD]">Contact</Link>
      </p>
    </nav>
    <p className="footer-name !text-[#32C9DD] text-center md:text-left">&copy; 2024 NeuroBiotics. All rights reserved.</p>
  </div>

  {/* Blue Section (hidden on small screens, shown on larger screens) */}
  <div className="footer-center bg-transparent sm:flex hidden flex-col items-center justify-center w-full p-5 mb-6 h-screen sm:mb-0">
    <div itemType="http://schema.org/PostalAddress" className="p-address flex items-center mt-3 mb-4 md:mb-0">
      <FaMapMarkerAlt aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
      <h1 className="text-gray-400 ml-2">Lahore, Punjab, Pakistan</h1>
    </div>
    <div className="flex items-center mt-3 mb-4 md:mb-0">
      <FaPhone aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
      <h1 className="text-gray-400 ml-2">+9230000337348</h1>
    </div>
    <div className="flex items-center mt-3 mb-4 md:mb-0">
      <FaEnvelope aria-hidden="true" className="mr-2 !text-[#32C9DD]" />
      <p>
        <a href="mailto:support@company.com" itemProp="email" className="u-email !text-[#32C9DD] ml-2">Neurobiotics.ai@gmail.com</a>
      </p>
    </div>
  </div>

  {/* Red Section (hidden on small screens, shown on larger screens) */}
  <div className="footer-right bg-transparent sm:flex hidden p-5 w-full mb-6 sm:flex-col sm:items-center sm:h-screen sm:mb-0">
    <h1 className="text-3xl font-bold text-[#32C9DD] mb-4">About Us</h1>
    <p className="text-[13px] font-semibold text-gray-400 mb-4">
      At NeuroBiotics, we leverage technology to deliver innovative AI and web solutions that drive business growth. Our expert team provides tailored services designed to meet the unique needs of each client. With a commitment to excellence and customer satisfaction, we empower organizations to navigate the digital landscape and achieve their strategic goals.
    </p>
    <div className="footer-socials flex justify-center md:justify-start">
      <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaFacebook /></a>
      <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaTwitter /></a>
      <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaLinkedin /></a>
      <a href="#" rel="me" className="text-2xl mx-2 !text-[#32C9DD] hover:text-white"><FaGithub /></a>
    </div>
  </div>
</footer>


    </div>
  );
};

export default DotCanvas;
