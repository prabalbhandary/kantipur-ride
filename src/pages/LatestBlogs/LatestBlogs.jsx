import React from 'react';

const LatestBlogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Latest Blogs</h1>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="/assets/blog1.jpg" alt="Blog 1" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Hiace Van Rental in Kathmandu, Nepal</h2>
            <p className="text-gray-700 mb-4">Hiace van rental in Kathmandu, Nepal is best when you are traveling in a group. Renting a Hiace in Kathmandu can be the perfect solution for your travel needs.</p>
            <a href="/blog" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="/assets/blog2.jpg" alt="Blog 2" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Customers Love Renting from Spark Car: Nepal’s Leading Vehicle Rental</h2>
            <p className="text-gray-700 mb-4">As Nepal's first ISO-certified vehicle rental company, Spark Car has set the benchmark for quality, reliability, and customer satisfaction. Discover why customers choose us.</p>
            <a href="/blog" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="/assets/blog3.jpg" alt="Blog 3" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">How Good and Bad Driving Affects Road Traffic?</h2>
            <p className="text-gray-700 mb-4">In this blog, we'll explore how good and bad driving practices affect road traffic and why promoting good driving habits is essential for everyone.</p>
            <a href="/blog" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
