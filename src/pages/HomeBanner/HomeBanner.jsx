import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="bg-blue-500 p-6 flex items-center justify-around">
      <div className="flex flex-col items-start">
        <h1 className="text-white text-lg font-bold mb-2">
          Call us for further information. Customer care is here to help you
          anytime.
        </h1>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaPhoneAlt className="text-3xl text-white mb-2" />
        <p className="text-white text-base mb-2">CALL US NOW</p>
        <b className="text-white text-lg mb-4">01-5971616</b>
        <Link
          to="/contact"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
