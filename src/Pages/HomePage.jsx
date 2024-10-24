import React from 'react';
import Hero from '../Components/Hero';
import StackCards from '../Components/StackCards';
import Comp1 from '../Components/Comp1';

function HomePage() {
  return (
    <div className="pt-10"> {/* Add padding-top equal to the navbar height */}
      <Hero />

      {/* Main Banner Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-4 md:py-10">
        <div className="max-w-screen-lg mx-auto text-left">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 leading-snug md:leading-tight">
            The all-in-one <span className="text-green-700">finance platform</span>
            <br />
            you’ve been looking for
          </h1>
          <p className="text-gray-500 mt-2 text-lg md:text-xl">
            With Razorpay, you can:
          </p>
          
          {/* Feature Links */}
          <div className="flex flex-wrap justify-center mt-6 space-x-4 text-base font-semibold text-gray-800">
            {['Accept Payments', 'Make Payouts', 'Start Business Banking', 'Automate Payroll', 'Get Credit & Loans'].map((item, index) => (
              <span key={index} className="flex items-center">
                <a href="#" className="hover:text-black">{item}</a>
                {index < 4 && <span className="text-gray-300 mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      <StackCards />
      <Comp1 />
    </div>
  );
}

export default HomePage;
