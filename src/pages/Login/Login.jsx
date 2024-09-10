import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Sign In</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
            <div className="text-right">
              <Link to="#" className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out">Forgot Password?</Link>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Don't have an account? <Link className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out" to="/register">Create One</Link></p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-blue-500">or sign in with</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                <FaGoogle className="mr-2" /> Sign in with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-150 ease-in-out"
              >
                <FaFacebook className="mr-2" /> Sign in with Facebook
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/login-register.png)' }}></div>
      </div>
    </div>
  );
};

export default Login;
