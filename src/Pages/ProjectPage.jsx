// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// const ProjectPage = () => {
//   return (
//     <div >
      
//       <nav>
//         <Link to="web-gallery">Web Gallery</Link>
//         <Link to="dotnet-gallery">DotNet Gallery</Link>
//         <Link to="ai-gallery">AI Gallery</Link>
//       </nav>
//       {/* Outlet for rendering nested routes */}
//       <Outlet />
//     </div>
//   );
// };

// export default ProjectPage;

import React from "react";
import Footer from "../Components/Footer";
import ProjMain from "../Components/ProjMain";
import Servicespro from "../Components/Servicespro";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

// ProjectPage Component
const ProjectPage = () => {
  return (
    <div>
      <ProjMain />
    <Servicespro/>
    <Projects/>
    <Contact/>
      <Footer />
    </div>
  );
};

export default ProjectPage;
