import React from 'react';
import { FaMapPin, FaRoad, FaTag, FaTrophy } from "react-icons/fa";

const WhyKantipurRide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Why Kantipur Ride?</h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-8">
        <div className="flex-1 lg:mr-4 mb-4 lg:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaTrophy className="text-white text-3xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold mb-2">24-hour Customer Service</h2>
              <p className="text-gray-700">We promise impeccable service by promptly addressing your queries and problems through our dedicated 24/7 customer support team.</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaRoad className="text-white text-3xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold mb-2">ISO Certification</h2>
              <p className="text-gray-700">We are an ISO 9001, ISO 14001, and ISO 45001 certified car rental company with 20+ years of service excellence in Nepal.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:mx-4 flex justify-center mb-4 lg:mb-0">
          <img src="/assets/car.jpg" alt="Car" className="w-full max-w-xs h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1 lg:ml-4">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaTag className="text-white text-3xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold mb-2">Own Dedicated Workshop</h2>
              <p className="text-gray-700">We ensure impeccable fleet management, with regular inspections for optimal vehicle performance and customer satisfaction.</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaMapPin className="text-white text-3xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold mt-4 mb-2">All Over Nepal Service</h2>
              <p className="text-gray-700">Our service spans all 7 provinces and 77 districts, ensuring accessibility for your transportation needs nationwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyKantipurRide;
