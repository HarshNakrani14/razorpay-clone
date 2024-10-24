import React, { useState } from "react";
import razorpayLogo from "../assets/Images/razorpay-icon.png";
import indiaLogo from "../assets/Images/india-logo.png";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Payments', 'Banking+', 'Payroll', 'Partners', 'Resources', 'Support', 'Pricing'];

  const navbarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 300 }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md fixed w-full z-40 h-16">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <img src={razorpayLogo} alt="Razorpay Logo" className="h-36" />
        <div className="md:hidden flex items-center">
          <img src={indiaLogo} alt="India Logo" className="h-8 mr-2" />
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8 h-full">
          {navItems.map((item) => (
            <motion.a
              href="#"
              key={item}
              className="relative text-gray-700 hover:text-blue-600 text-base h-full flex items-center group"
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </motion.a>
          ))}
          <img src={indiaLogo} alt="India Logo" className="h-8" />
          <motion.button className="border border-blue-600 py-2 px-4 rounded text-blue-600 hover:bg-blue-50 transition duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Login
          </motion.button>
          <motion.button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Sign Up
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden flex flex-col items-center bg-white bg-opacity-90 shadow-lg rounded-b-lg mt-2 overflow-hidden transition-all duration-300 absolute right-0`} // Use bg-opacity to make the background semi-transparent
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navbarVariants}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.a
            href="#"
            key={item}
            className="text-gray-700 hover:bg-blue-100 py-4 text-lg w-full text-center transition duration-200 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {item}
          </motion.a>
        ))}
        <motion.button className="border border-blue-600 py-2 px-4 rounded text-blue-600 hover:bg-blue-50 transition duration-300 my-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Login
        </motion.button>
        <motion.button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 my-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Sign Up
        </motion.button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
