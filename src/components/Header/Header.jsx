import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div className="bg-black text-white py-2 px-4 flex items-center justify-around fixed top-0 w-full z-30">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
            <FaPhoneAlt className="text-lg" />
            <span className="text-sm">01-5971616</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
            <FaEnvelope className="text-lg" />
            <span className="text-sm">info@kantipurride.org</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link to="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors duration-300">
            <FaFacebookF className="text-xl" />
          </Link>
          <Link to="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
            <FaTwitter className="text-xl" />
          </Link>
          <Link to="#" aria-label="YouTube" className="hover:text-blue-400 transition-colors duration-300">
            <TfiYoutube className="text-xl" />
          </Link>
          <Link to="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-300">
            <FaLinkedinIn className="text-xl" />
          </Link>
        </div>
      </div>
      <header className="bg-white fixed top-0 w-full z-20">
        <nav className="container mx-auto flex items-center justify-between py-6 px-6 mt-6 relative">
          <div onClick={() => navigate("/")} className="cursor-pointer flex items-center">
            <img src="/assets/logo.webp" alt="Logo" className="h-16 object-contain" />
          </div>
          <button 
            className="bg-blue-500 text-white lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className={`lg:flex lg:space-x-10 lg:items-center lg:static lg:bg-white lg:shadow-none ${isMobileMenuOpen ? "block absolute bg-white shadow-lg top-16 left-0 w-full" : "hidden"}`}>
            <li>
              <Link
                to="/"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hireadriver"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                Hire a Driver
              </Link>
            </li>
            <li>
              <Link
                to="/corporate-rent"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                Corporate Rent
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block lg:inline text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 text-base py-2 px-4"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            to="/login"
            className="xs:hidden lg:block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 text-base"
          >
            Log In
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
