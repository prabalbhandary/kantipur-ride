import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaIdCard, FaRegClock, FaTags, FaUserCheck, FaUsers } from "react-icons/fa";

const Hiredriver = () => {
  const navigate = useNavigate();
  const staff = "/assets/staffwithcar.png";

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="relative">
        <img
          src={staff}
          alt="Staff with car"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => {
            navigate("/");
          }}
        >
          HIRE A DRIVER
        </button>
      </div>
      <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-600">
        Hire a Driver in Nepal
      </h1>
      <p className="text-center text-lg font-medium text-gray-700">
        Nepal's Most Trusted Professional Driver Hire Services
      </p>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4 list-disc pl-6 text-gray-800">
          <li>
            Premium{" "}
            <span className="text-blue-600 cursor-pointer">
              Driver Hire Services
            </span>{" "}
            for individuals and businesses in Nepal seeking drivers on an hourly, daily, or monthly basis.
          </li>
          <li>
            Kantipur Ride Driver proudly introduces its Professional Driver Hire Services, providing a seamless blend of convenience, safety, and expertise for your travels across Nepal.
          </li>
          <li>
            Conveniently hire a driver in Nepal via phone or mobile app for various purposes, including outstation trips, one-way drops, round trips, and more.
          </li>
          <li>
            Our driver hire services extend to special events such as weddings and corporate functions, offering skilled drivers capable of handling diverse car models.
          </li>
        </ul>
      </div>
      <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-600 mt-8">
        Hire a Driver in Nepal in Just Three Easy Steps
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-2xl font-bold bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              1
            </h2>
          </div>
          <b className="text-lg">Download the App/Call</b>
          <p className="text-gray-600 mt-2">Provide details on pick-up and drop-off date and time, vehicle type and model, location, and billing information for driver hire in Nepal.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-2xl font-bold bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              2
            </h2>
          </div>
          <b className="text-lg">Driver Booking Gets Confirmed</b>
          <p className="text-gray-600 mt-2">
            <span className="text-blue-600 cursor-pointer">Kantipur Ride</span>{" "}
            confirms booking, assigns a suitable driver, and updates users with real-time driver status notifications.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-2xl font-bold bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              3
            </h2>
          </div>
          <b className="text-lg">Kantipur Ride Driver Arrives at Pick-up Point</b>
          <p className="text-gray-600 mt-2">The Kantipur Ride Driver reaches the pick-up point, introduces himself to the customer, and then embarks on the journey.</p>
        </div>
      </div>
      <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-600 mt-8">
        Benefits of Hiring A Driver
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaCar className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Personalized 24/7 Driver Hire</b>
          <p className="text-gray-600 mt-2">Kantipur Ride Driver offers a personalized experience tailored to your preferences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaUserCheck className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Safety First</b>
          <p className="text-gray-600 mt-2">Your safety is our top priority. Our drivers are trained even for emergency response protocols.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaTags className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Transparent-Fixed Price</b>
          <p className="text-gray-600 mt-2">
            Streamline your driver hire with our{" "}
            <span className="text-blue-600 cursor-pointer">transparent pricing</span>{" "}
            with no hidden costs for a seamless experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaUsers className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Expertise Service</b>
          <p className="text-gray-600 mt-2">Our drivers are more than just chauffeurs; they are seasoned navigators familiar with the intricacies of Nepal's roads.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaRegClock className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Punctuality and Reliability</b>
          <p className="text-gray-600 mt-2">Always on time! Kantipur Ride Driver Services guarantees punctuality and reliability.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaIdCard className="text-blue-600 text-3xl" />
          </div>
          <b className="text-lg text-blue-600">Easy Booking</b>
          <p className="text-gray-600 mt-2">Experience the convenience of our Professional Driver Hire Services by simply contacting us via call or downloading the app.</p>
        </div>
      </div>
    </div>
  );
};

export default Hiredriver;
