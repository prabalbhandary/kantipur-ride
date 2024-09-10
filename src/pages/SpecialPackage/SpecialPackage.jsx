import React from "react";
import "./SpecialPackage.css";

const SpecialPackage = () => {
  const banner = "/assets/carbanner.jpg";

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Our Special Packages
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Where your journey begins with an exquisite fleet of vehicles for an
        unforgettable experience.
      </p>
      <div className="overflow-hidden relative">
        <img
          src={banner}
          alt="Special Packages"
          className="slide-image w-full max-w-4xl h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default SpecialPackage;
