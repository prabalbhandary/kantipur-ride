import React from "react";
import RVComponent from "./RvComponent";
import WhyBecomeVendor from "./WhyBecomeVendor";
import VBanner from "./VBanner";

const RegisterAsVendor = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-10">
        <img
          src="/assets/banner.jpg"
          alt="Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center justify-between mb-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-5">
            Rent{" "}
            <span className="text-blue-600">As A Vendor & Start Earning</span>
          </h1>
          <b className="text-lg text-gray-600 mb-6">
            Join us for access to a huge marketplace,
            <br />
            serving over 200,000+ customers annually.
          </b>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/iphone.png"
            alt="iPhone"
            className="w-full"
          />
        </div>
      </div>
      <div className="text-center">
        <a
          href="#"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg inline-flex items-center justify-center transition duration-300"
        >
          <img
            src="/assets/google-play-white.svg"
            alt="Google Play"
            className="h-7 mr-2"
          />
          <span className="font-semibold">Get It On Google Play</span>
        </a>
      </div>
      <RVComponent />
      <WhyBecomeVendor />
      <VBanner />
    </div>
  );
};

export default RegisterAsVendor;
