import React from "react";

const RentalService = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 cursor-pointer hover:text-blue-800 transition-colors duration-300">
        Car Rental Service in Nepal
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Kathmandu</p>
          <p className="mb-2">Rent a Car in Lalitpur</p>
          <p className="mb-2">Rent a Car in Bhaktapur</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Pokhara</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Chitwan</p>
          <p className="mb-2">Rent a Car in Dang</p>
        </div>
        <div>
          <p className="mb-2">Rent a Car in Dhangadhi</p>
          <p className="mb-2">Rent a Car in Itahari</p>
          <p className="mb-2">Rent a Car in Illam</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Hetauda</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Nepalgunj</p>
          <p className="mb-2">Rent a Car in Gorkha</p>
        </div>
        <div>
          <p className="mb-2">Rent a Car in Bharatpur</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Biratnagar</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Birgunj</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Lumbini</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Dharan</p>
          <p className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300 mb-2">Rent a Car in Butwal</p>
        </div>
      </div>
    </div>
  );
};

export default RentalService;
