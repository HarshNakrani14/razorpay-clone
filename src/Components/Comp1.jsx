import React from 'react';
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';

function Comp1() {
  return (
    <div className="bg-gray-100 py-10 w-[80vw] mx-auto ">
      <div className="container mx-auto px-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-semibold text-gray-800">Powering every industry. <br /> Powering all disruptors.</h1>
          <div className="flex space-x-4">
            <FaAmazon className="text-3xl text-gray-700" />
            <FaApple className="text-3xl text-gray-700" />
            <FaGoogle className="text-3xl text-gray-700" />
            <FaMicrosoft className="text-3xl text-gray-700" />
          </div>
        </header>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-semibold text-gray-600 border-b-2 border-gray-300 pb-2 mb-8">
            {['E-Commerce', 'Education', 'BFSI', 'SaaS', 'Freelancer'].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-black">
                {item}
              </li>
            ))}
          </ul>
        </nav>
        {/* Content */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Card */}
          <div className="absolute top-1/4 left-1/4 z-10 p-6 bg-white bg-opacity-90 rounded-lg w-1/2 transform -translate-x-1/4 -translate-y-1/4">
            <p className="text-4xl font-semibold mb-4">
              Empower your <br /> <span className='text-green-600'>e-commerce business</span>
            </p>
            <p className="text-gray-700 mb-4">
              Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.
            </p>
            <div className="flex mb-4 items-center gap-6">
              <img src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="Brand 1" className="h-6 w-14" />
              <img src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="Brand 2" className="h-6 w-14" />
              <img src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="Brand 3" className="h-6 w-14" />
              <img src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="Brand 4" className="h-6 w-14" />
              <span className="text-gray-500 text-sm font-semibold">+70,000 others</span>
            </div>

            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">See Solutions</button>
          </div>
          {/* Background Image */}
          <img src="https://plus.unsplash.com/premium_photo-1725472984558-dc26f5eb1a49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-Commerce" className="w-full h-[70vh] object-center" />
        </div>
      </div>
    </div>
  );
}

export default Comp1;