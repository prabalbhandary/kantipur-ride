import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Create an Account</h2>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Register
            </button>
            <div className="text-center">
              <p className="text-sm text-gray-600">Already have an account? <Link className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out" to="/login">Sign In</Link></p>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/login-register.png)' }}></div>
      </div>
    </div>
  );
};

export default Register;
