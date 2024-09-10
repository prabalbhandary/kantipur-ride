import React from "react";
import FooterSection from "./FooterSection";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8 px-4 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p>
              Established in 1996, Kantipur Ride stands as Nepal's best vehicle rental
              company, offering an unparalleled experience in travel. With a
              commitment to excellence, we provide car rental in Kathmandu and all
              over Nepal along with driver hire services marked by professionalism,
              at the best price.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-[#1e75b8] mr-2" />
              <p>Trade Tower Thapathali, address2</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-[#1e75b8] mr-2" />
              <p>
                <Link to="#" className="hover:text-[#1e75b8]">01-5971616</Link> / <Link to="#" className="hover:text-[#1e75b8]">9801101924</Link>
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-[#1e75b8] mr-2" />
              <Link to="#" className="hover:text-[#1e75b8]">info@kantipurride.org</Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><Link to="/about" className="block hover:text-[#1e75b8]">About</Link></li>
              <li><Link to="/blog" className="block hover:text-[#1e75b8]">Blog</Link></li>
              <li><Link to="/contact" className="block hover:text-[#1e75b8]">Contact</Link></li>
              <li><Link to="/registerasvendor" className="block hover:text-[#1e75b8]">Register As Vendor</Link></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
            <b>Social Network</b> 
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-2 rounded-full bg-white text-[#1e75b8] hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1e75b8] hover:bg-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1e75b8] hover:bg-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1e75b8] hover:bg-gray-200">
              <TfiYoutube />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 md:mb-0">ISO Certification</h2>
            <div className="flex space-x-4">
              <img src="/assets/iso1.png" alt="ISO" className="w-20 h-auto" />
              <img src="/assets/iso_2.png" alt="ISO" className="w-20 h-auto" />
              <img src="/assets/iso_3.png" alt="ISO" className="w-20 h-auto" />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-lg font-semibold mb-4">Download</h2>
            <div className="flex space-x-4">
              <button className="bg-white p-2 rounded">
                <img src="/assets/appstore.png" alt="App Store" className="w-24 h-auto" />
              </button>
              <button className="bg-white p-2 rounded">
                <img src="/assets/google-play-white.svg" alt="Google Play" className="w-24 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <hr className="border-gray-700" />
      <FooterSection />
    </div>
  );
};

export default Footer;
