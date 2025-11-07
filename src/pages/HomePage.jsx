// src/pages/HomePage.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
const HomePage = ({getTimer}) => {
  
  return (
   
    <div className="homepage-frame">
      <HomeHeader brandName="Dube" slogan={getTimer()} />
 {/*<div className="home-page-layout"> {/* Give the top-level div a class */}

     {/*div className="home-content-scrollable"> This div will scroll */}
      <section className=" home-grid">
        <div className="home-grid container">
        <div className="nav"> {/* Flex column for links, bottom margin on small screens, no bottom margin on medium+ */}
           
          <Link to="/" className="">new arrivals</Link>
          <Link to="/stores" className="">stores</Link>
          <Link to="/preview" className="">preview</Link>
          <Link to="/about" className="">about</Link>
          <Link to="/contact" className="">contact</Link>
          <Link to="/mail" className="">mailing list</Link>
          <Link to="/" className="">f.a.q</Link>
        </div>
           
        <div className="social-links">
          <a href="#pet" className=""><i className="fa-brands fa-facebook"></i></a>
          <a href="#clothes" className=""><i className="fa-brands fa-youtube"></i></a>
        
          <a href="#contact" className=""><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#subscribe" className=""><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className=" social-inner" >
          <a href="#pet" className="">terms</a>
          <a href="#clothes" >privacy</a>
         <a href="#subscribe" className="">disclaimer</a>
          
        </div>
    </div>
  
      </section>
      
    </div>
  );
};

export default HomePage;
       