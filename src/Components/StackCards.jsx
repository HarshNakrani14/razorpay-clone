import React, { useState, useRef } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import Framer Motion

function StackCards() {
  const [activeLink, setActiveLink] = useState("Accept Payments");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardRefs = {
    "Accept Payments": useRef(null),
    "Make Payouts": useRef(null),
    "Start Business Banking": useRef(null),
    "Automate Payroll": useRef(null),
    "Credit & Loans": useRef(null),
  };

  const scrollToCard = (link) => {
    setActiveLink(link);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center p-4 md:p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen relative">
      <div className="w-full max-w-screen-lg">
        {/* Mobile Navigation */}
        <nav className="md:hidden sticky top-0 flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-md z-10">
          <div className="text-lg font-semibold text-slate-600">Services</div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-slate-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-slate-600" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gradient-to-r from-blue-100 to-blue-100 via-blue-100 opacity-70 shadow-md rounded-md p-4 mt-4 mr-4 max-w-md mx-auto absolute top-16 left-1/2 transform -translate-x-1/2 z-20" // Centered above the cards
          >
            <ul className="flex flex-col items-center gap-2 font-semibold text-slate-600">
              {[
                "Accept Payments",
                "Make Payouts",
                "Start Business Banking",
                "Automate Payroll",
                "Credit & Loans",
              ].map((link) => (
                <motion.li
                  key={link}
                  className={`cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                    activeLink === link ? "text-blue-600 border-b-4 border-blue-600" : "text-slate-600"
                  } text-center`} // Center text alignment
                  onClick={() => scrollToCard(link)}
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  whileTap={{ scale: 0.95 }} // Scale effect on tap
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex sticky top-0 flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-md">
          <ul className="flex flex-wrap gap-4 md:gap-8 font-semibold text-slate-600 items-center">
            {[
              "Accept Payments",
              "Make Payouts",
              "Start Business Banking",
              "Automate Payroll",
              "Credit & Loans",
            ].map((link) => (
              <motion.li
                key={link}
                className={`cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                  activeLink === link ? "text-blue-600 border-b-4 border-blue-600" : "text-slate-600"
                }`}
                onClick={() => scrollToCard(link)}
                whileHover={{ scale: 1.05 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }} // Scale effect on tap
              >
                {link}
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </nav>

        {/* Cards Section */}
        <div className="mt-6 flex flex-col gap-4">
          {Object.keys(cardRefs).map((key) => (
            <div
              key={key}
              ref={cardRefs[key]}
              className={`transition-transform transform duration-300 ease-in-out ${
                activeLink === key ? "scale-105 shadow-xl" : "scale-100 hidden"
              } shadow-lg rounded-md relative p-4 md:p-6`}
              style={{ marginBottom: "1rem" }}
              data-link={key}
            >
              {activeLink === key && (
                <>
                  {key === "Accept Payments" && <Card1 />}
                  {key === "Make Payouts" && <Card2 />}
                  {key === "Start Business Banking" && <Card3 />}
                  {key === "Automate Payroll" && <Card4 />}
                  {key === "Credit & Loans" && <Card5 />}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackCards;
