import React from "react";
import { CiClock2 } from "react-icons/ci";

const TourPackage = () => {
  const tourPackages = [
    {
      name: "Muktinath",
      price: "68750",
      duration: "5D",
      image: "/assets/muktinath.png",
    },
    {
      name: "Mustang",
      price: "100000",
      duration: "5D",
      image: "/assets/Mustang.png",
    },
    {
      name: "Chitwan",
      price: "38000",
      duration: "3D",
      image: "/assets/Chitwan.png",
    },
    {
      name: "Pokhara",
      price: "53000",
      duration: "4D",
      image: "/assets/Pokhara.png",
    },
    {
      name: "Nagarkot",
      price: "24000",
      duration: "2D",
      image: "/assets/Nagarkot.png",
    },
    {
      name: "Chagu Narayan",
      price: "14000",
      duration: "1D",
      image: "/assets/Chagu Narayan.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Tour Packages</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Embark on an unforgettable journey with our exquisite tour packages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-60 object-cover"
                src={item.image}
                alt={`${item.name} Tour`}
              />
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <div className="flex items-center text-gray-600">
                    <CiClock2 className="mr-2 text-xl text-blue-500" />
                    <p>{item.duration}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <h3 className="text-lg font-medium text-gray-700">NRP {item.price}</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
