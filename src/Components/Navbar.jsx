
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-[#082325] w-full h-14  md:h-16 flex items-center px-4 md:px-8 lg:px-16 transition-all">
      {/* Left Section */}
      <div className="left flex-1 flex items-center">
        <h5 className="text-[18px] md:text-[24px] lg:text-[32px] hover:scale-110 text-white font-bold capitalize">
        NeuroBiotics
        </h5>
      </div>

      {/* Right Section */}
      <div className="right flex md:hidden items-center">
        {/* Menu Icon */}
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden font-semibold md:flex flex-2 gap-4 md:gap-8 lg:gap-12 items-center justify-end">
        <Link to="/" className="text-white text-[14px] hover:text-[#13737F]">
          Home
        </Link>
        <Link to="/about" className="text-white text-[14px] hover:text-[#13737F]">
          About Us
        </Link>
        <Link to="/project" className="text-white text-[14px] hover:text-[#13737F]">
          Projects
        </Link>
        <Link to="/services" className="text-white text-[14px] hover:text-[#13737F]">
          Services
        </Link>
        <Link to="/contact" className="text-white text-[14px] hover:text-[#13737F]">
          Contact
        </Link>
        <a
          href="#"
          className="text-white text-[14px] hover:text-[#13737F]"
        >
          Login
        </a>
        <a
          href="https://www.linkedin.com/in/kinza-shahzadi-5487532b0/?trk=public-profile-join-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#13737f] w-24 h-9 rounded-full transform transition-transform duration-300 hover:scale-110">
            <span className="text-white text-[12px]">Follow-Us</span>
          </button>
        </a>
      </div>

      {/* Dropdown Menu (Small Screens) */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#082325] text-white z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="hover:text-[#13737F]" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#13737F]" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#13737F]" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-[#13737F]" onClick={toggleMenu}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#13737F]" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#13737F]" onClick={toggleMenu}>
                Login
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kinza-shahzadi-5487532b0/?trk=public-profile-join-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#13737f] w-24 h-9 rounded-full transform transition-transform duration-300 hover:scale-110">
                  <span className="text-white text-[12px]">Follow-Us</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
