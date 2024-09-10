import React from "react";
import { FaMapPin, FaRoad, FaTrophy } from "react-icons/fa";

const CarsInRow = () => {
  const staff_with_car = "/assets/staffwithcar.png";
  
  return (
    <div className="relative overflow-hidden">
      <img
        src={staff_with_car}
        alt="Cars in a row"
        className="w-full h-60 object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 p-6 md:p-12">
        <p className="text-white text-2xl md:text-4xl font-bold mb-8 text-center">
          Let Your Adventure Begin
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            {
              icon: <FaTrophy className="text-3xl md:text-4xl text-white" />,
              title: "First Class Services",
              description: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
            },
            {
              icon: <FaRoad className="text-3xl md:text-4xl text-white" />,
              title: "24/7 Customer Service",
              description: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
            },
            {
              icon: <FaMapPin className="text-3xl md:text-4xl text-white" />,
              title: "Pick-Up & Drop-Off",
              description: "Enjoy pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
            },
          ].map(({ icon, title, description }, index) => (
            <div key={index} className="flex items-center gap-4 text-white text-center max-w-xs md:max-w-sm">
              <div className="p-3 bg-blue-500 rounded-full">
                {icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsInRow;
