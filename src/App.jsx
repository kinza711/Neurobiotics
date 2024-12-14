// import React from "react";
// import LoadingEffect from "./Components/LoadingEffect.jsx";
// import StretchableLine from './Components/StretchableLine.jsx'
// import ServicesSection from './Components/ServicesSection.jsx'
// import AboutUsSection from './Components/AboutUsSection.jsx'
// import WhyChooseUs from './Components/WhyChooseUs.jsx'
// import TestimonialSlider from './Components/TestimonialSlider.jsx'

// function App() {
//   return (
//     <div className="App">

//       <LoadingEffect />
//       {/* The rest of your application content */}
//     {/* <Navbar/> */}
//     <StretchableLine/>
//     <ServicesSection/>
//     <AboutUsSection/>
//     <WhyChooseUs/>
//     <TestimonialSlider/>
//     {/* <CubeComponent/> */}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import AboutUsPage from './Pages/AboutUsPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import Follw from './Components/Follw';
import Website from './Pages/Website';

function App() {
  return (
    <Router>
      <div className="App">
        <Follw />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ProjectPage as a main route with nested sub-routes */}
          <Route path="/project" element={<ProjectPage />}>
            <Route path="web-gallery" element={<Website />} />
            {/* Additional nested routes */}
            <Route path="dotnet-gallery" element={<div>DotNet Gallery Content</div>} />
            <Route path="ai-gallery" element={<div>AI Gallery Content</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
