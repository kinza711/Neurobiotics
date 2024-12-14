import React from 'react';
import Footer from '../Components/Footer';
import StretchableLine from '../Components/StretchableLine';
import Navbar from '../Components/Navbar';
import MainService from '../Components/MainService';
import Capsole from '../Components/Capsole';
import Serv from '../Components/Serv'


const ServicesPage = () => {
  return (
    <div>
     <Navbar/>
     <MainService/>
     <Serv/>
     <StretchableLine />
     <Capsole/>
    
  
      <Footer />
    </div>
  );
};

export default ServicesPage;
