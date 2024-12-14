import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Web from "../Components/Web";
import Marque from "../Components/Marque"
import Introduction from "../Components/Introduction"
import Skills from "../Components/Skills";




const Website = () => {
  return (
    <div>
      <Navbar />
      <Intro />
       <Web/>
       <Marque/>
       <Introduction/>
       <Skills/>
      <Footer />
    </div>
  );
};

export default Website;
