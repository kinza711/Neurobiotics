



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router Link
import { Link as ScrollLink } from "react-scroll"; // React Scroll Link
import { FaBars, FaInstagram, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesPopupVisible, setIsIndustriesPopupVisible] =
    useState(false); // State for Industries Popup
  const [isServicesPopupVisible, setIsServicesPopupVisible] = useState(false); // State for Services Popup

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
    <nav className="navbar bg-white w-full h-14 md:h-16 flex items-center px-4 md:px-8 lg:px-16 transition-all shadow-md">
      {/* Left Section - Logo */}
      <div className="left flex-1 flex items-center">
        <img className="h-64 w-72" src="/headerlogo.png" alt="" />
      </div>

      {/* Right Section - Mobile Menu Button */}
      <div className="right flex md:hidden items-center">
        <button
          className="text-black text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden cursor-context-menu font-semibold md:flex items-center gap-6 lg:gap-10">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-black text-[14px] hover:text-[#9853FF]"
        >
          Home
        </Link>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-black text-[14px] hover:text-[#9853FF]"
        >
          About Us
        </ScrollLink>

        {/* Industries with Hover Popup */}
        <div
          className="relative"
          onMouseEnter={() => setIsIndustriesPopupVisible(true)}
          onMouseLeave={() => setIsIndustriesPopupVisible(false)}
        >
          <Link
            to="/"
            className="text-black text-[14px] hover:text-[#9853FF] flex items-center gap-1"
          >
            Industries
            <FaChevronDown className="text-sm mt-1" />
          </Link>
          {isIndustriesPopupVisible && (
            <div className="absolute bg-white shadow-lg rounded-md p-5 w-56 mt-2 z-10">
              <ul className="mt-2 py-1">
                <li className="text-sm text-gray-600 m-2 hover:text-[#9853FF]">
                  E-Commerce & Retails
                </li>
                <hr />
                <li className="text-sm text-gray-600 m-2 hover:text-[#9853FF]">
                  Healthcare & Wellness
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  Education
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  Real Estate
                </li>
                <hr />
                <li className="text-sm text-gray-600 m-2  hover:text-[#9853FF]">
                  Entertainment & Media
                </li>
                <hr />
                <li className="text-sm text-gray-600 m-2  hover:text-[#9853FF]">
                  Travel & Hospitality
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Services with Hover Popup and Down Arrow */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesPopupVisible(true)}
          onMouseLeave={() => setIsServicesPopupVisible(false)}
        >
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-black text-[14px] hover:text-[#9853FF] flex items-center gap-1"
          >
            Services
            <FaChevronDown className="text-sm mt-1" />
          </ScrollLink>
          {isServicesPopupVisible && (
            <div className="absolute bg-white shadow-lg rounded-md p-5 w-56 mt-2 z-10">
              <ul className="mt-2 py-1">
                <li className="text-sm text-gray-600 m-2 hover:text-[#9853FF]">
                  {" "}
                  <Link
                    to="/digital"
                    className="text-[14px] hover:text-[#9853FF]"
                  >
                   Digital Marketing
                  </Link>
                </li>
                <hr />
                <li className="text-sm text-gray-600 m-2 hover:text-[#9853FF]">
                  <Link
                    to="/visuals"
                    className=" text-[14px] hover:text-[#9853FF]"
                  >
                    Visual Designing
                  </Link>
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  <Link
                    to="/"
                    className=" text-[14px] hover:text-[#9853FF]"
                  >
                    web Development
                  </Link>
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  <Link
                    to="/"
                    className=" text-[14px] hover:text-[#9853FF]"
                  >
                    App Development
                  </Link>
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  <Link
                    to="/software"
                    className=" text-[14px] hover:text-[#9853FF]"
                  >
                   software Solutions
                  </Link>
                </li>
                <hr />
                <li className="text-sm text-gray-600  m-2 hover:text-[#9853FF]">
                  <Link
                    to="/"
                    className=" text-[14px] hover:text-[#9853FF]"
                  >
                   E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ScrollLink
          to="faq"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-black text-[14px] hover:text-[#9853FF]"
        >
          FAQs
        </ScrollLink>
        <Link
          to="/Consultations"
          className="text-black text-[14px] hover:text-[#9853FF]"
        >
          Free Consultations
        </Link>

        {/* Social Icons & Connect Link */}
        <div className="flex items-center gap-x-4">
          <div className="footer-socials flex items-center gap-x-3">
            <a
              href="#"
              rel="me"
              className="w-7 h-7 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
            <a
              href="#"
              rel="me"
              className="w-7 h-7 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
            >
              <FaLinkedinIn className="text-white text-sm" />
            </a>
            <a
              href="#"
              rel="me"
              className="w-7 h-7 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>
          </div>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-black font-bold text-[15px] hover:text-[#9853FF]"
          >
            Connect with us
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 cursor-context-menu left-0 right-0 w-full bg-white text-black z-10 shadow-md">
          <ul className="flex flex-col items-center space-y-5 py-5">
            <li>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                Industries
              </Link>
            </li>
            <li>
              <ScrollLink
                to="faq"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                FAQs
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/Consultations"
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                Free consultation
              </Link>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-[#9853FF]"
                onClick={toggleMenu}
              >
                Connect with us
              </ScrollLink>
            </li>

            {/* Social Icons in Mobile Menu */}
            <div className="flex gap-4">
              <a
                href="#"
                rel="me"
                className="w-8 h-8 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaInstagram className="text-white text-base" />
              </a>
              <a
                href="#"
                rel="me"
                className="w-8 h-8 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaLinkedinIn className="text-white text-base" />
              </a>
              <a
                href="#"
                rel="me"
                className="w-8 h-8 flex items-center justify-center bg-[#9853FF] rounded-full hover:bg-[#32C9DD] transition"
              >
                <FaFacebookF className="text-white text-base" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
