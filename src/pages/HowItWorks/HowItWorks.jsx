import React from 'react'

const HowItWorks = () => {
    const fsubmit = "/assets/formsubmit.webp"
    const ref = "/assets/ref.webp"
    const contract = "/assets/contract.webp"
    const sd = "/assets/servicedelivery.jpg"

    return (
        <div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">HOW IT WORKS?</h2>
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Become Our Corporate Client in Just Four Easy Steps</h1>
            <div className='space-y-8'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex-shrink-0'>
                            <img src={fsubmit} alt="Form Submission" className='w-32 h-auto rounded-lg shadow-sm' />
                        </div>
                        <div className='flex-1'>
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Form Submission</h1>
                            <ul className='list-disc list-inside'>
                                <li>
                                    <p className='text-gray-600'>Complete the corporate client form to facilitate the rental process for corporate use of Kantipur Ride.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex-shrink-0'>
                            <img src={ref} alt="Corporate Client Registration" className='w-32 h-auto rounded-lg shadow-sm' />
                        </div>
                        <div className='flex-1'>
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Corporate Client Registration & Confirmation</h1>
                            <ul className='list-disc list-inside'>
                                <li>
                                    <p className='text-gray-600'>Upon form submission, our operations department will promptly reach out to you to ensure necessary documents for the corporate client registration and confirmation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex-shrink-0'>
                            <img src={contract} alt="Contractual Agreement" className='w-32 h-auto rounded-lg shadow-sm' />
                        </div>
                        <div className='flex-1'>
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Contractual Agreement</h1>
                            <ul className='list-disc list-inside'>
                                <li>
                                    <p className='text-gray-600'>Formalize the rental arrangement with a comprehensive contractual agreement to ensure clarity and mutual understanding.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex-shrink-0'>
                            <img src={sd} alt="Service Delivery" className='w-32 h-auto rounded-lg shadow-sm' />
                        </div>
                        <div className='flex-1'>
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Service Delivery</h1>
                            <ul className='list-disc list-inside'>
                                <li>
                                    <p className='text-gray-600'>Experience efficient and reliable service delivery from Spark Cars for all your corporate transportation needs.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
