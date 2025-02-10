import React from "react";
import Footer from "../Components/Footer";

import Digitalmain from "../Components/Digitalmain";
import Digitalpro from "../Components/Digitalpro";
import DigitalProjects from "../Components/DigitalProjects";
import DigitalWorking from "../Components/DigitalWorking";
// ProjectPage Component
const ProjectPage = () => {
  return (
    <div>
      <Digitalmain />
      <Digitalpro />
       <DigitalProjects />
      <DigitalWorking />  
      <Footer />
    </div>
  );
};

export default ProjectPage;
