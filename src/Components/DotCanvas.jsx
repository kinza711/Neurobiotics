

import React, { useEffect, useRef } from 'react';
import '../index.css'; 

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const DotCanvas = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 100 });

  // Create Dot class
  class Dot {
    constructor(x, y, size, speedX, speedY) {
      this.x = x || Math.random() * window.innerWidth;
      this.y = y || Math.random() * window.innerHeight;
      this.size = size || Math.random() * 2.5 + 1;
    //   this.speedX = speedX || Math.random() * 2 - 1;
    //   this.speedY = speedY || Math.random() * 2 - 1;
    this.speedX = speedX || (Math.random() * 0.4 - 0.3); // Slower horizontal speed
    this.speedY = speedY || (Math.random() * 0.4 - 0.3);
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
  const connectDots = (ctx, canvasWidth, canvasHeight) => {
    for (let a = 0; a < dots.current.length; a++) {
      for (let b = a; b < dots.current.length; b++) {
        let dx = dots.current[a].x - dots.current[b].x;
        let dy = dots.current[a].y - dots.current[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // If dots are close enough, draw a connection
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
        ctx.strokeStyle = 'rgba(255, 155, 255, 0.5)';
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
    ctx.fillStyle = '#082325'; // Blue background
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    dots.current.forEach((dot) => {
      dot.update(canvasWidth, canvasHeight);
      dot.draw(ctx);
    });

    connectDots(ctx, canvasWidth, canvasHeight);
    requestAnimationFrame(() => animate(ctx, canvasWidth, canvasHeight));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initDots(48); // Initialize 40 dots

    // Mouse move event
    const handleMouseMove = (event) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
    };

    // Handle window resize to update canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots(10); // Re-initialize dots on resize
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

    <div className="dot-canvas-container ">

    <canvas ref={canvasRef} className="background-canvas bg-cover" />
    <div className="content-container">
      <div className="main flex w-full h-screen items-center justify-end relative">
        <div className="contant flex w-full h-full">
          <div className="left-side  opacity-100 shadow-[#2C2C4A] ">
            <img
              src="../public/robo.png"
              alt="Your Description"
              className="side-image -ml-16  items-center  w-[70%] h-[100%] "
            />
          </div>
          <div className="right-side items-start mr-12 justify-center relative text-start mt-48">
            <h1 className="ml-5 text-left text-[35px] md:text-[64px] lg:text-[80px] font-bold text-white">
            Transforming Ideas into Intelligent Solutions.<br />
              <span className='text-[#32c9dd]'>AI & Web Solutions.</span><br />
            </h1>
            <p className="text-[20px] text-start justify-start flex text-white ml-5">
            Mastery of services Empowers Enterprises to Transcend Limitations And Navigate The Complexities of The Digital Landscape.
            </p>
            {/* Icons Container */}
            <div className="flex mt-10 ml-56 space-x-5 text-[#32c9dd] items-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#32c9dd] hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#32c9dd] hover:text-white transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#32c9dd] hover:text-white transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#32c9dd] hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
            {/* Buttons Container */}
            <div className="flex mt-5 ml-60 space-x-4">
              <button className="bg-white ml-2 text-[#4D3F53] font-bold px-4 py-3 rounded-full hover:bg-[#32c9dd] hover:text-white transition duration-300">
                <a href="contact">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DotCanvas;



// import React, { useEffect, useRef } from 'react';
// import '../index.css'; 
// import Navbar from './Navbar'; // Ensure this is the right path
// import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// const DotCanvas = () => {
//   const canvasRef = useRef(null);
//   const dots = useRef([]);
//   const mouse = useRef({ x: null, y: null, radius: 100 });

//   // Create Dot class
//   class Dot {
//     constructor(x, y, size, speedX, speedY) {
//       this.x = x || Math.random() * window.innerWidth;
//       this.y = y || Math.random() * window.innerHeight;
//       this.size = size || Math.random() * 2.5 + 1;
//       this.speedX = speedX || (Math.random() * 0.4 - 0.3);
//       this.speedY = speedY || (Math.random() * 0.4 - 0.3);
//     }

//     draw(ctx) {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx.fillStyle = 'white';
//       ctx.fill();
//     }

//     update(canvasWidth, canvasHeight) {
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

//   const initDots = (numDots) => {
//     dots.current = [];
//     for (let i = 0; i < numDots; i++) {
//       dots.current.push(new Dot());
//     }
//   };

//   const connectDots = (ctx, canvasWidth, canvasHeight) => {
//     for (let a = 0; a < dots.current.length; a++) {
//       for (let b = a; b < dots.current.length; b++) {
//         let dx = dots.current[a].x - dots.current[b].x;
//         let dy = dots.current[a].y - dots.current[b].y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
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

//       let mouseDx = mouse.current.x - dots.current[a].x;
//       let mouseDy = mouse.current.y - dots.current[a].y;
//       let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

//       if (mouseDistance < 150) {
//         ctx.strokeStyle = 'rgba(255, 155, 255, 0.5)';
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(dots.current[a].x, dots.current[a].y);
//         ctx.lineTo(mouse.current.x, mouse.current.y);
//         ctx.stroke();
//         ctx.closePath();
//       }
//     }
//   };

//   const animate = (ctx, canvasWidth, canvasHeight) => {
//     ctx.fillStyle = '#1F213E';
//     ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//     dots.current.forEach((dot) => {
//       dot.update(canvasWidth, canvasHeight);
//       dot.draw(ctx);
//     });

//     connectDots(ctx, canvasWidth, canvasHeight);
//     requestAnimationFrame(() => animate(ctx, canvasWidth, canvasHeight));
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     initDots(48); 

//     const handleMouseMove = (event) => {
//       mouse.current.x = event.x;
//       mouse.current.y = event.y;
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initDots(10); 
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     animate(ctx, canvas.width, canvas.height); 

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="dot-canvas-container">
     
//       <canvas ref={canvasRef} className="background-canvas bg-cover" />
//       <div className="content-container">
//         <div className="main flex w-full h-screen items-center justify-end relative">
//           <div className="contant flex w-full h-[80%]">
//             <div className="left-side rounded-full opacity-30 shadow-[#2C2C4A] overflow-hidden">
//               <img
//                 src="https://xira.ai/wp-content/uploads/2023/05/img16.png"
//                 alt="Your Description"
//                 className="side-image items-center rounded-full w-[80%] h-[95%]"
//               />
//             </div>
//             <div className="right-side items-start justify-center relative text-start mt-40">
//               <h1 className="ml-5 text-left text-[35px] md:text-[64px] lg:text-[80px] font-bold text-white">
//                 Delivering Superior Services<br />
//                 <span className='text-[#4D3F53]'>IT Solutions.</span><br />
//               </h1>
//               <p className="text-[20px] text-start justify-start flex text-white ml-5">
//                 You can easily change any design to your own. It is also highly <br />
//                 customizable SEO friendly template.
//               </p>
//               <div className="flex mt-16 ml-56 space-x-5 text-[#0F1F55] items-center">
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#4D3F53] hover:text-white transition duration-300">
//                   <FaTwitter size={24} />
//                 </a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4D3F53] hover:text-white transition duration-300">
//                   <FaFacebookF size={24} />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#4D3F53] hover:text-white transition duration-300">
//                   <FaLinkedinIn size={24} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#4D3F53] hover:text-white transition duration-300">
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DotCanvas;
