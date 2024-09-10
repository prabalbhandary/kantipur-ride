import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RVComponent = () => {
    const questions = [
        "Why Register as a Vendor at Kantipur Ride?",
        "What are Vendor Requirements?",
        "How to Become Vendor/Partner at Kantipur Ride?",
        "How much can you earn as a Vendor/Partner at Kantipur Ride?",
        "How will you be paid as a Vendor/Partner at Kantipur Ride?",
        "Where can you contact if you have issues?"
    ];
    const answers = [
        "Trusted Car Rental Platform in Nepal. Earn Good Money. Access to a Large Customer Base. 24/7 Customer Support",
        "Valid licenses and permits for the vehicle. Well-maintained vehicles that meet our quality standards. Compliance and safety regulations and industry-specific guidelines.",
        "Complete the Partner/Vendor Application Form on our website. Submit required documents and details for verification. Go through a comprehensive verification process for compliance and reliability. Sign the partnership agreement to affirm our commitment to mutual success Start accepting bookings, serving valued customers, and earning a respectable income.",
        "You can earn up to Rs. 100,000 per month by renting your car to us. You can also do daily/weekly/monthly contracts with us as a vendor.",
        "We provide an on-time and uniform payment cycle as per the contract that turns your vehicle into a reliable asset.",
        "If you have any questions or concerns, feel free to contact our Operations Managers, who will serve as your primary point of contact based on your assigned client. They will offer assistance and address your inquiries promptly."
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-blue-500 text-center mb-8">
                Join Our Prestigious Entrepreneurial Network as a Partner/Vendor with Kantipur Ride!
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                    <img src="/assets/iphone.png" className='w-full h-auto rounded-lg shadow-lg' alt="Iphone" />
                    <b className="mt-4 text-lg font-semibold text-gray-800">
                        Your Car, Your Asset! Lease your vehicle with Kantipur Ride and start earning today by becoming a valued partner! Connect your vehicle with us for a fulfilling journey and generate significant income as a true entrepreneur.
                    </b>
                </div>
                <div className="flex-1">
                    <div className="space-y-4">
                        {questions.map((question, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                                <button 
                                    className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <span className="text-lg font-semibold text-gray-800">{question}</span>
                                    {openIndex === index ? <FaChevronUp className="text-blue-500"/> : <FaChevronDown className="text-blue-500"/>}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 bg-gray-50">
                                        <p className="text-gray-700">{answers[index]}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RVComponent;
