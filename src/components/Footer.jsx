import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-16 bg-gray-700 text-white">
      <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
        <h1 className="text-lg sm:text-xl font-bold my-4">
          Agrosage Tek Uganda Limited
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Agrosage Tek Uganda Limited (ATUL)
          <br /> is committed to addressing poverty among small-scale farmers
          <br /> in Uganda by significantly reducing postharvest losses
        </p>
        <div className="flex gap-5 my-5">
          <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
          <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
          <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full sm:w-1/2">
        <div className="w-full mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Pages</h3>
          <ul className="text-white/70">
            <Link to="/">
              <li className="text-sm hover:underline my-3">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-sm hover:underline my-3">About</li>
            </Link>
            <Link to="/about">
              <li className="text-sm hover:underline my-3">Product</li>
            </Link>
            {/* <Link to="/about">
              <li className="text-sm hover:underline my-3">Blog</li>
            </Link> */}
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">About</h3>
          <ul className="text-white/70">
            <Link to="/">
              <li className="text-sm hover:underline my-3">Our Services</li>
            </Link>
            <Link to="/about">
              <li className="text-sm hover:underline my-3">Contact us</li>
            </Link>
            <Link to="/about">
              <li className="text-sm hover:underline my-3">Benefits</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
