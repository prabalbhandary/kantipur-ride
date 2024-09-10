import React from 'react';
import { FaMapPin, FaRoad, FaTag, FaTrophy } from 'react-icons/fa';
import Testimonials from '../Testimonials/Testimonials';

const About = () => {
  const staffs = "/assets/staffs.png";
  const rajeshdai = "/assets/rajeshdai.png";

  const buttonData = [
    {
      title: "Luxury",
      description: "Explore our luxury vehicle collection at Kantipur Ride where each vehicle is selected with precision to ensure our customers a premium driving experience. With Kantipur Ride, elevate your travel expectations and experience the unmatched elegance of our premium vehicles.",
    },
    {
      title: "Comfort",
      description: "At Kantipur Ride, we ensure you will have a comfortable ride and a seamless journey to any destination. It's not just transportation; it's an experience for your absolute relaxation and enjoyment.",
    },
    {
      title: "Prestige",
      description: "Your safety is our priority. We do continuous monitoring with regular vehicle maintenance, to guarantee a secure journey every time you ride with us. Your peace of mind is our promise, so you can travel confidently and safely.",
    }
  ];

  return (
    <>
      <div className="flex justify-center mb-8">
        <img src={staffs} alt="Staffs" className="w-full h-64 object-cover rounded-lg shadow-lg" />
      </div>
      <div className="px-4 lg:px-16 py-8">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-4">Hiring a vehicle? You're at the right place.</h1>
        <p className="text-center text-xl mb-8"><b>Kantipur Ride, तपाइको यात्राको सहयात्री।</b></p>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex-1 lg:mr-4 mb-8 lg:mb-0">
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 p-4 rounded-full shadow-md">
                <FaTrophy className="text-white text-3xl" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2">20+ Years of Providing Luxury Car Services in Nepal</h2>
                <p className="text-gray-700">For over two decades, we've provided supreme experiences in luxury car services, bringing safety and comfort to every drive in Nepal.</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 p-4 rounded-full shadow-md">
                <FaRoad className="text-white text-3xl" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2">Services Available in 50+ Major Cities of Nepal</h2>
                <p className="text-gray-700">Kantipur Ride is at your service for your extraordinary adventures in major cities across Nepal. Wherever your journey leads, we're here for you.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:mx-4 flex justify-center mb-8 lg:mb-0">
            <img src="/assets/car.jpg" alt="Car" className="w-full max-w-sm h-auto rounded-lg shadow-md" />
          </div>

          <div className="flex-1 lg:ml-4">
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 p-4 rounded-full shadow-md">
                <FaTag className="text-white text-3xl" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2">Safe Rides Anyday, Everyday (24/7 365 days)</h2>
                <p className="text-gray-700">We are never off duty. Safe and reliable journeys, every day, all year round just for you.</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 p-4 rounded-full shadow-md">
                <FaMapPin className="text-white text-3xl" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2">Range of Options - Economical Hiring to Posh Premium Cars</h2>
                <p className="text-gray-700">Choose your favorite car from our versatile vehicle fleet that caters to every need, no matter your style or budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-16 py-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <img src={rajeshdai} alt="Rajesh Dai" className="w-48 h-48 object-cover rounded-full shadow-lg" />
        </div>
        <b className='text-center'>Only Quality For Clients</b>
        <div className="flex-1 flex flex-col lg:flex-row lg:justify-between">
          {buttonData.map((button, index) => (
            <div key={index} className="flex-1 lg:max-w-xs mb-6 lg:mb-0 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">{button.title}</h3>
              <p className="text-gray-700">{button.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default About;
