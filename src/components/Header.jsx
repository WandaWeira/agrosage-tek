import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex w-full items-center justify-between py-6 px-24 overflow-x-hidden">
        <p className="text-xl mx-4 font-semibold text-gray-700">
          Agrosage-Tek Uganda Limited
        </p>
        <div className="flex gap-x-8">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/">
            <p>Services</p>
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-500 text-white rounded-md p-2 w-20 text-center">
            Login
          </div>
          <div className="border border-gray-500 p-2 rounded-md mx-4 w-20 text-center">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
