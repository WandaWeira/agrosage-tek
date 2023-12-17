import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-24">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://agrosagetekugandalimited.com/images/logo2.jpg"
            alt="logo"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <p
            className={`text-lg md:text-xl mx-4 font-semibold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-gray-700"
            }`}
          >
            Agrosage-Tek Uganda Limited
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-8">
          <Link to="/">
            <p
              onClick={() => handleItemClick("Home")}
              className={`transition-colors duration-300 ${
                selectedItem === "Home"
                  ? "text-blue-500 font-bold"
                  : isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Home
            </p>
          </Link>
          <Link to="/products">
            <p
              onClick={() => handleItemClick("Products")}
              className={`transition-colors duration-300 ${
                selectedItem === "Products"
                  ? "text-blue-500 font-bold"
                  : isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Products
            </p>
          </Link>
          <Link to="/services">
            <p
              onClick={() => handleItemClick("Services")}
              className={`transition-colors duration-300 ${
                selectedItem === "Services"
                  ? "text-blue-500 font-bold"
                  : isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Services
            </p>
          </Link>
          <Link to="/about">
            <p
              onClick={() => handleItemClick("About")}
              className={`transition-colors duration-300 ${
                selectedItem === "About"
                  ? "text-blue-500 font-bold"
                  : isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              About us
            </p>
          </Link>
          <Link to="/contact">
            <p
              onClick={() => handleItemClick("Contact")}
              className={`transition-colors duration-300 ${
                selectedItem === "Contact"
                  ? "text-blue-500 font-bold"
                  : isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Contact us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
