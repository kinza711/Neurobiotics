import React from "react";
import Footer from "../Components/Footer";

import Visualmain from "../Components/Visualmain";
import Servicespro from "../Components/Servicespro";
import VisualProjects from "../Components/VisualProjects";
import Working from "../Components/Working";
// ProjectPage Component
const ProjectPage = () => {
  return (
    <div>
      <Visualmain />
      <Servicespro />
      <VisualProjects />
      <Working />
      <Footer />
    </div>
  );
};

export default ProjectPage;
