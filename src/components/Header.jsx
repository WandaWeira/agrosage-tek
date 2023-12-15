import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the scroll is more than 10px, set isScrolled to true, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add the event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between py-6 px-24">
        <div className="flex items-center">
          <img
            src="https://agrosagetekugandalimited.com/images/logo2.jpg"
            alt="logo"
            className="h-16 w-16"
          />
          <p
            className={`text-xl mx-4 font-semibold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-700"
            }`}
          >
            Agrosage-Tek Uganda Limited
          </p>
        </div>
        <div className="flex gap-x-8">
          <Link to="/">
            <p
              className={`transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              Home
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              About us
            </p>
          </Link>
          <Link to="/">
            <p
              className={`transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              Services
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
