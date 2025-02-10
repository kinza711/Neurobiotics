import React from "react";

import Navbar from "../Components/Navbar";
import StretchableLine from "../Components/StretchableLine";

import AboutUsSection from "../Components/AboutUsSection";
import WhyChooseUs from "../Components/WhyChooseUs";

import Footer from "../Components/Footer";

import DotCanvas from "../Components/DotCanvas";
import Marque from "../Components/Marque";
import Mission from "../Components/Mission";
import Contact from "../Components/Contact";
import Faqs from "../Components/Faqs";
import Simple from "../Components/Simple";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../index.css";
function HomePage() {
  return (
    <div className="homepage-container ">
      <Navbar />
      <DotCanvas />
      <Mission/>
      <Marque/>
      <StretchableLine />
      
      <WhyChooseUs />
      <Simple />
      <AboutUsSection />

      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;



