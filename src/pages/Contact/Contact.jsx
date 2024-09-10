import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const contact = "/assets/contact.png";
  return (
    <div className="p-8 bg-gray-100">
      <div className="mb-8">
        <img
          src={contact}
          alt="Contact Us"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">
            Do you have any questions?
          </h1>
          <form action="#" className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              className="p-2 border border-gray-300 rounded-md"
            />
            <textarea
              rows={5}
              name="msg"
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded-md resize-none"
            />
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Head Office</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-blue-500 text-xl" />
              <p>Trade Tower Thapathali</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <p>01-5971616</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p>info@kantipurride.org</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-center mt-8 mb-4">
        Our Branch Offices
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {[
          {
            location: "Nepalgunj",
            phone: "9802315720",
            email: "info.npj@kantipurride.org",
          },
          {
            location: "Chitwan",
            phone: "9801101903",
            email: "info.ctw@kantipurride.org",
          },
          {
            location: "Pokhara",
            phone: "9801101911",
            email: "info.pok@kantipurride.org",
          },
          {
            location: "Biratnagar",
            phone: "9801128218",
            email: "info.brt@kantipurride.org",
          },
          {
            location: "Bhairahawa",
            phone: "9801101921",
            email: "info.bwa@kantipurride.org",
          },
          {
            location: "Birgunj",
            phone: "9801101907",
            email: "info.brj@kantipurride.org",
          },
        ].map((branch, index) => (
          <div key={index} className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              {branch.location}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-blue-500 text-lg" />
                <p>{branch.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500 text-lg" />
                <p>{branch.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500 text-lg" />
                <p>{branch.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28259.752748109182!2d85.31285873743057!3d27.702799272188997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190ba68ef82f%3A0xdf51304164f9d27b!2sRide%20Kathmandu%20Tours%20and%20Travel!5e0!3m2!1shi!2snp!4v1725950502867!5m2!1shi!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
