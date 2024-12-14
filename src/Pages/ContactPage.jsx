import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from '../Components/Contact';
import MinContact from "../Components/MinContact";
import Map from '../Components/Map';



const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <MinContact/>
      <Contact/>
      <Map/>
      <Footer />
    </div>
  );
};

export default ContactPage;
