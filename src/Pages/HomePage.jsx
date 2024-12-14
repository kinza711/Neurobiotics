// import React from "react";
// import LoadingEffect from "../Components/LoadingEffect"; // Corrected path
// import Navbar from "../Components/Navbar"; // Corrected path
// import StretchableLine from "../Components/StretchableLine"; // Corrected path
// import ServicesSection from "../Components/ServicesSection"; // Corrected path
// import AboutUsSection from "../Components/AboutUsSection"; // Corrected path
// import WhyChooseUs from "../Components/WhyChooseUs"; // Corrected path
// import TestimonialSlider from "../Components/TestimonialSlider"; // Corrected path
// import Footer from "../Components/Footer";
// import Real from '../Components/Real';
// import Sun from '../Components/Sun';
// import Circle from '../Components/Circle';
// import Clone from '../Components/Clone';
// import Main from '../Components/Contact';
// import DotCanvas from "../Components/DotCanvas";
// import Marque from '../Components/Marque';
// import Team from '../Components/Team'
// import Contact from '../Components/Contact';
// import Faqs from '../Components/Faqs';
// import Simple from '../Components/Simple';

// function HomePage() {
//   return (
//     <>
//     <DotCanvas/>

//     {/* <Clone/> */}
//       {/* <LoadingEffect /> */}
//       {/* <Circle/> */}
//       {/* <Navbar /> */}
//       <StretchableLine />
//       {/* <ServicesSection /> */}
//       {/* <Real/> */}
//       <WhyChooseUs />
//       <TestimonialSlider />
//       <AboutUsSection />
//       <Marque/>
//       <Team/>
//       <Faqs/>
//       <Simple/>
//       <Contact/>
//       <Sun/>
//       <Footer/>

//     </>
//   );
// }

// export default HomePage;



/////its second code 


import React, { useEffect, useRef } from "react";

import Navbar from "../Components/Navbar";
import StretchableLine from "../Components/StretchableLine";
// import ServicesSection from "../Components/ServicesSection";
import AboutUsSection from "../Components/AboutUsSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import TestimonialSlider from "../Components/TestimonialSlider";
import Footer from "../Components/Footer";


import DotCanvas from "../Components/DotCanvas";
// import Marque from "../Components/Marque";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Faqs from "../Components/Faqs";
import Simple from "../Components/Simple";
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; 
import "../index.css"; 
function HomePage() {
  

  return (
    <div className="homepage-container ">

      
      <Navbar />
      <DotCanvas />
      <StretchableLine />
      <WhyChooseUs />
      <TestimonialSlider />
      <AboutUsSection />
      {/* <Marque /> */}
      <Team />
      <Faqs />
      <Simple />
      <Contact />
      {/* <Sun /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
