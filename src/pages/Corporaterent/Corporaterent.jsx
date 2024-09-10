import React from "react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";

const Corporaterent = () => {
  const navigate = useNavigate();
  const handshake = "/assets/handshake.webp";
  const driver = "/assets/driver.webp";
  const hdriver = "/assets/hireadriver.webp";
  const rcar = "/assets/rentacar.webp";

  return (
    <div className="space-y-12 p-6 md:p-12 lg:p-24">
      <div className="relative">
        <img
          src={handshake}
          alt="Staff with car"
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
        />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => {
            navigate("/");
          }}
        >
          BE A PARTNER
        </button>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-2">
          WHY RENT FROM KANTIPUR RIDE CAR?
        </h1>
        <h2 className="text-xl font-semibold mb-8">
          Trusted by 200+ Corporate Clients All Across Nepal
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 justify-center">
        <div className="text-center flex-shrink-0 w-full md:w-1/3">
          <img
            src={driver}
            alt="Well maintained Vehicles"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full shadow-md"
          />
          <h1 className="text-2xl font-semibold mb-2">Well Maintained Vehicles</h1>
          <p className="text-lg text-gray-700">
            Experience corporate car rentals with perfectly maintained vehicles for seamless and punctual travel.
          </p>
        </div>
        <div className="text-center flex-shrink-0 w-full md:w-1/3">
          <img
            src={hdriver}
            alt="Flexible Fleet Rental Duration"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full shadow-md"
          />
          <h1 className="text-2xl font-semibold mb-2">Flexible Fleet Rental Duration</h1>
          <p className="text-lg text-gray-700">
            Our fleet rental service offers flexibility on an hourly, daily, monthly, and annual basis to cater to your diverse corporate needs.
          </p>
        </div>
        <div className="text-center flex-shrink-0 w-full md:w-1/3">
          <img
            src={rcar}
            alt="Access to a diverse and extensive fleet"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full shadow-md"
          />
          <h1 className="text-2xl font-semibold mb-2">Access to a Diverse and Extensive Fleet</h1>
          <p className="text-lg text-gray-700">
            Gain access to a wide-ranging and extensive fleet of vehicles spanning the entire country.
          </p>
        </div>
      </div>
      <HowItWorks />
    </div>
  );
};

export default Corporaterent;
