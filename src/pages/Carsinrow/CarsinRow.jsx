import React from "react";

const CarsInRow = () => {
  const cars = "/assets/cars-in-row.png";
  return (
    <div className="relative">
      <img
        src={cars}
        alt="Cars in a row"
        className="w-full max-h-60 object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black bg-opacity-50">
        <p className="text-white mb-4 md:mb-8 text-sm md:text-base lg:text-lg">
          We offer customers a diverse fleet of{" "}
          <span className="text-blue-600">commercial and luxury cars</span>{" "}
          customized to suit any requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="bg-white bg-opacity-50 p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000</h1>
            <p className="text-gray-700 text-sm md:text-base">No of Vehicles</p>
          </div>
          <div className="bg-white bg-opacity-50 p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2 Lakh +</h1>
            <p className="text-gray-700 text-sm md:text-base">Customers Served Annually</p>
          </div>
          <div className="bg-white bg-opacity-50 p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000 +</h1>
            <p className="text-gray-700 text-sm md:text-base">No of Drivers</p>
          </div>
          <div className="bg-white bg-opacity-50 p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">30</h1>
            <p className="text-gray-700 text-sm md:text-base">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsInRow;
