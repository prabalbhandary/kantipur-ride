import React from 'react';
import { useNavigate } from 'react-router-dom';

const VBanner = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-blue-500 text-white p-6 text-center">
            <p className="mb-4 text-lg">
                Welcome to our Rental Car Service Vendor Registration! We're excited to have you on board as a partner. Join our platform and expand your reach by offering your rental car services to a wider audience.
            </p>
            <h1 className="text-2xl font-bold mb-6">REGISTER AS VENDOR</h1>
            <button
                onClick={() => navigate("/form")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                FILL FORM
            </button>
        </div>
    );
};

export default VBanner;
