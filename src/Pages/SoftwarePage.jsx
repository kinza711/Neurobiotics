

import React from "react";
import Footer from "../Components/Footer";

import ProjMain from "../Components/ProjMain";
import Servicespro from "../Components/Servicespro";
import Projects from "../Components/Projects";


// ProjectPage Component
const ProjectPage = () => {
  return (
    <div>
    
      <ProjMain />
    <Servicespro/>
    <Projects/>

      <Footer />
    </div>
  );
};

export default ProjectPage;
