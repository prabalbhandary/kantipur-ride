import React, { useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import "./Layout.css";

const Layout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const backgroundImg = "url('/assets/banner.jpg')";
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  return (
    <div
      style={{ backgroundImage: backgroundImg }}
      className="min-h-screen bg-cover bg-center text-gray-800"
    >
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight text-white">
          Discover Your Ideal <span className="text-blue-400">Car</span> Rental
          with Ease
        </h1>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-[-5rem] relative px-6 py-16 space-y-8 md:space-y-0">
        <div className="flex-1">
          <p className="text-3xl font-semibold text-white mb-8 text-center">
            Choose a Service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/assets/hireadriver.webp", label: "Rent a Car" },
              { src: "/assets/driver.webp", label: "Hire a Driver" },
              { src: "/assets/rentacar.webp", label: "Self-Drive" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer transition-transform duration-300 ease-in-out ${
                  activeIndex === index
                    ? "transform scale-100 shadow-2xl"
                    : "transform scale-95 shadow-md"
                } hover:transform hover:scale-100 hover:shadow-lg`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-48 object-cover mb-4 rounded-xl border-2 border-gray-200"
                />
                <p className="text-lg font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-gray-100 py-12 px-8 md:px-10 rounded-xl shadow-lg">
          <form className="space-y-6">
            {activeIndex === 0 && (
              <>
                <div className="relative">
                  <label
                    htmlFor="pickup"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Pick Up Location
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoff"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Drop Off Location
                  </label>
                  <input
                    type="text"
                    id="dropoff"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickupdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    id="pickupdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoffdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Drop Off Date
                  </label>
                  <input
                    type="date"
                    id="dropoffdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
              </>
            )}
            {activeIndex === 1 && (
              <>
                <div className="relative">
                  <label
                    htmlFor="pickup"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Pick Up Location
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoff"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Drop Off Location
                  </label>
                  <input
                    type="text"
                    id="dropoff"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickupdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    id="pickupdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoffdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Drop Off Date
                  </label>
                  <input
                    type="date"
                    id="dropoffdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="type"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    Vehicle Type To Drive
                  </label>
                  <select
                    id="type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  >
                    <option value="" disabled>
                      Select a vehicle type
                    </option>
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="truck">Truck</option>
                    <option value="van">Van</option>
                  </select>
                </div>
              </>
            )}
            {activeIndex === 2 && (
              <>
                <div className="relative">
                  <label
                    htmlFor="pickup"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    From
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoff"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    To
                  </label>
                  <input
                    type="text"
                    id="dropoff"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickupdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    From Date
                  </label>
                  <input
                    type="date"
                    id="pickupdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="dropoffdate"
                    className="block text-gray-800 font-medium mb-2"
                  >
                    To Date
                  </label>
                  <input
                    type="date"
                    id="dropoffdate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
              </>
            )}
            <button
              type="button"
              className={`w-full py-3 px-4 rounded-md text-lg font-bold transition duration-300 flex items-center justify-center ${
                buttonClicked
                  ? "bg-blue-500 border border-blue-500 text-white"
                  : "bg-blue-500 border border-transparent text-white"
              }`}
              onClick={handleButtonClick}
            >
              {buttonClicked && <FaCheck className="mr-2" />}
              Find Vehicle
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-8">
        <div className="flex-1">
          <div className="bg-blue-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-lg font-bold">
            1
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-white">
            Choose Your Vehicle
          </h2>
          <p className="text-white">
            Select your ideal vehicle based on your requirements and
            preferences.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-lg font-bold">
            2
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-white">
            Book Easily
          </h2>
          <p className="text-white">
            Make a booking through our app or by calling us directly.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-lg font-bold">
            3
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-white">
            Select Details
          </h2>
          <p className="text-white">
            Choose your pick-up location and date to schedule your journey.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-lg font-bold">
            4
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-white">
            Relax and Enjoy
          </h2>
          <p className="text-white">
            Enjoy your journey with comfort and ease, knowing you are in good
            hands.
          </p>
        </div>
      </div>

      <div className="bg-black text-blue-500 p-4 overflow-hidden">
        <div className="bg-black text-blue-500 p-4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <p className="inline-block px-4 py-2">Hatchback</p>
              <p className="inline-block px-4 py-2">EV</p>
              <p className="inline-block px-4 py-2">SUV</p>
              <p className="inline-block px-4 py-2">Sedan</p>
              <p className="inline-block px-4 py-2">Premium</p>
              <p className="inline-block px-4 py-2">Pickup</p>
              <p className="inline-block px-4 py-2">Vintage</p>
              <p className="inline-block px-4 py-2">Van/Hiace</p>
              <p className="inline-block px-4 py-2">Coster</p>
              <p className="inline-block px-4 py-2">Sutlej Bus</p>
              <p className="inline-block px-4 py-2">Minivans</p>
              <p className="inline-block px-4 py-2">Exotic Cars</p>
              <p className="inline-block px-4 py-2">Hatchback</p>
              <p className="inline-block px-4 py-2">EV</p>
              <p className="inline-block px-4 py-2">SUV</p>
              <p className="inline-block px-4 py-2">Sedan</p>
              <p className="inline-block px-4 py-2">Premium</p>
              <p className="inline-block px-4 py-2">Pickup</p>
              <p className="inline-block px-4 py-2">Vintage</p>
              <p className="inline-block px-4 py-2">Van/Hiace</p>
              <p className="inline-block px-4 py-2">Coster</p>
              <p className="inline-block px-4 py-2">Sutlej Bus</p>
              <p className="inline-block px-4 py-2">Minivans</p>
              <p className="inline-block px-4 py-2">Exotic Cars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
