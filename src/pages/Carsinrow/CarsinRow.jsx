import React from "react";

const CarsInRow = () => {
  const cars = "/assets/cars-in-row.png";
  return (
    <div className="relative">
      <img
        src={cars}
        alt="Cars in a row"
        className="w-full max-h-60 object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8 bg-black bg-opacity-60">
        <p className="text-white mb-4 md:mb-6 text-sm md:text-base lg:text-lg xl:text-xl">
          We offer customers a diverse fleet of{" "}
          <span className="text-blue-500 font-semibold">commercial and luxury cars</span>{" "}
          customized to suit any requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white bg-opacity-60 p-4 md:p-5 lg:p-6 rounded-lg shadow-md text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-500 mb-2">
              5000
            </h1>
            <p className="text-gray-800 text-xs md:text-sm lg:text-base">
              Number of Vehicles
            </p>
          </div>
          <div className="bg-white bg-opacity-60 p-4 md:p-5 lg:p-6 rounded-lg shadow-md text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-500 mb-2">
              2 Lakh +
            </h1>
            <p className="text-gray-800 text-xs md:text-sm lg:text-base">
              Customers Served Annually
            </p>
          </div>
          <div className="bg-white bg-opacity-60 p-4 md:p-5 lg:p-6 rounded-lg shadow-md text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-500 mb-2">
              5000 +
            </h1>
            <p className="text-gray-800 text-xs md:text-sm lg:text-base">
              Number of Drivers
            </p>
          </div>
          <div className="bg-white bg-opacity-60 p-4 md:p-5 lg:p-6 rounded-lg shadow-md text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-500 mb-2">
              30
            </h1>
            <p className="text-gray-800 text-xs md:text-sm lg:text-base">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsInRow;
