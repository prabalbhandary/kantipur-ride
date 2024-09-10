import React from "react";
import { FaRegUser, FaCar } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";

const Explore = () => {
  const cards = [
    {
      image: "/assets/domestic.jpg",
      title: "Domestic Tour Cars",
      userCount: 4,
      briefcaseCount: 0,
      doorCount: 0,
      serviceType: "Domestic-Tour-Car-Service",
      rate: 6000,
    },
    {
      image: "/assets/car.jpg",
      title: "VIP Delegects Car",
      userCount: 4,
      briefcaseCount: 0,
      doorCount: 0,
      serviceType: "VIP-Delegects-Car-Service",
      rate: 20000,
    },
    {
      image: "/assets/pick.jpg",
      title: "Pick and drop outside Ring Road by Car",
      userCount: 5,
      briefcaseCount: 0,
      doorCount: 0,
      serviceType: "Pick-and-drop-outside-Ring-Road",
      rate: 1700,
    },
    {
      image: "/assets/pick.jpg",
      title: "Pick and drop outside Ring Road by Car",
      userCount: 5,
      briefcaseCount: 0,
      doorCount: 0,
      serviceType: "Pick-and-drop-outside-Ring-Road",
      rate: 1700,
    },
    {
      image: "/assets/air.jpg",
      title: "Airport Pickup & Drop Service",
      userCount: 4,
      briefcaseCount: 0,
      doorCount: 4,
      serviceType: "Airport-Pickup-and-Drop-Service",
      rate: 1500,
    },
    {
      image: "/assets/domestic.jpg",
      title: "Local Pickup & Drop Service",
      userCount: 4,
      briefcaseCount: 0,
      doorCount: 4,
      serviceType: "Local-Pickup-and-Drop-Service",
      rate: 1500,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
        Explore the Kantipur Ride Car Fleet
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
        Where your journey begins with an exquisite fleet of vehicles for an
        unforgettable experience.
      </p>
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {card.title}
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaRegUser className="text-2xl" />
                      <p className="text-lg">{card.userCount}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <BsBriefcase className="text-2xl" />
                      <p className="text-lg">{card.briefcaseCount}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <GiCarDoor className="text-2xl" />
                      <p className="text-lg">{card.doorCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 text-gray-600">
                    <FaCar className="text-2xl" />
                    <p className="text-lg">{card.serviceType}</p>
                  </div>
                  <hr className="border-gray-300 mb-4" />
                  <div className="text-gray-800 mb-6">
                    <h3 className="text-lg font-medium">Starting Rate From</h3>
                    <h2 className="text-3xl font-bold">{card.rate}</h2>
                  </div>
                  <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
