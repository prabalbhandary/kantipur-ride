import React from 'react'

const WhyBecomeVendor = () => {
    const vendor1 = "/assets/vendor1.png"
    const vendor2 = "/assets/vendor2.png"
    const vendor3 = "/assets/vendor3.png"
    const vendor4 = "/assets/vendor4.png"
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Why Become a Vendor with Kantipur Ride</h1>
        <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                <img src={vendor1} alt="Trusted Car Rental Platform" className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Trusted Car Rental Platform in Nepal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                <img src={vendor2} alt="On-Time Scheduled Payment" className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">On-Time Scheduled Payment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                <img src={vendor3} alt="Access to a Large Customer Base" className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Access to a Large Customer Base</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                <img src={vendor4} alt="Turn Your Vehicle from Liability to Asset" className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Turn Your Vehicle from Liability to Asset</p>
            </div>
        </div>
    </div>
  )
}

export default WhyBecomeVendor
