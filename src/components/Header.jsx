import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <p className="text-xl mx-4 font-semibold text-gray-700">Agrosage-Tek Uganda Limited</p>
      <div className="flex gap-10">
        <p>Home</p>
        <p>About us</p>
        <p>Services</p>
      </div>
      <div className="flex gap-10">
        <div className="bg-gray-500 text-white rounded-md p-2 w-20 text-center">Login</div>
        <div className="border border-gray-500 p-2 rounded-md mx-4 w-20 text-center">Sign up</div>
      </div>
    </div>
  );
};

export default Header;
