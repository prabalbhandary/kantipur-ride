import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const question1 = [
    "What is the rental car price in Nepal?",
    "Does the car come with a driver?",
    "What is the price of one-day car rental in Kathmandu, Nepal?",
    "Can you rent a car from anywhere in Nepal?"
  ];
  const question2 = [
    "How can you rent a car in Kathmandu Nepal?",
    "Can you rent a car in Nepal without a driver as a self-drive rental?",
    "What happens in case of a vehicle breakdown?",
    "How do I extend the rental period in vehicle rental services in Nepal?"
  ];
  const answer1 = [
    "You can hire a vehicle in Kathmandu for half a day and a full day at the starting price of Rs. 4000 and Rs. 6000 respectively.",
    "Yes, the car comes with a driver.",
    "You can rent a car in Kathmandu, Nepal from the starting price of Rs.1000 for pickup and drop services.",
    "Yes, you can rent a car anywhere and anytime all over Nepal."
  ];
  const answer2 = [
    "You can rent a vehicle in Kathmandu, Nepal at Kantipur Ride via call at 01-5971616 / 9801101924 or the Kantipur Ride app.",
    "Yes, you can rent a car in Nepal without a driver for self-drive purposes via Kantipur Ride.",
    "In case of vehicle breakdown or any unforeseen circumstances, we provide instant replacement to ensure a smooth journey for the customers.",
    "You can extend the car rental period by calling our 24/7 customer support at 01-5971616 / 9801101924 through virtual communication between the parties."
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-6">Have Any Questions?</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-wrap -mx-4">
          {question1.map((question, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-4">
              <div className="border-b">
                <button
                  className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="font-medium">{question}</span>
                  <span className="text-lg">
                    {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="p-4 text-gray-700">{answer1[index]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <div className="flex flex-wrap -mx-4">
          {question2.map((question, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-4">
              <div className="border-b">
                <button
                  className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAnswer(index + question1.length)}
                >
                  <span className="font-medium">{question}</span>
                  <span className="text-lg">
                    {activeIndex === index + question1.length ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </button>
                {activeIndex === index + question1.length && (
                  <p className="p-4 text-gray-700">{answer2[index]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
