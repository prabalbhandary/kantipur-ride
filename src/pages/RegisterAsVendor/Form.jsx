import React from 'react'

const Form = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form action="#" className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="fname" className="mb-2 text-gray-700 font-semibold">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="fname" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lname" className="mb-2 text-gray-700 font-semibold">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lname" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="address" className="mb-2 text-gray-700 font-semibold">Address</label>
                <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-gray-700 font-semibold">Phone Number</label>
                <input 
                    type="text" 
                    name="phoneNumber" 
                    id="phone" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-2 text-gray-700 font-semibold">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-500 rounded" />
                <p className="text-gray-700">Accept Terms and Conditions</p>
            </div>
        </form>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
        </button>
    </div>
  )
}

export default Form
