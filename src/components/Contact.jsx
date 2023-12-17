import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaSms, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-28 bg-gray-100">
      <div className="mx-auto p-6">
        <div className="flex justify-center">
          {/* Image container, replace with your image */}
          <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
            <img
              src="https://imgs.search.brave.com/E2z_0yOwNTgX7QqGUIIQO3Usdne_QOIvYYRcThXI6LY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cGluay1zcHJpbmct/Zmxvd2Vycy5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
              alt="Fruits"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            We'd love to talk about how we can work together.
          </h2>
          {/* <p className="mt-4 text-gray-600">
            Simply dummy text of the printing and typesetting industry...
          </p> */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <FaSms className="h-3 w-3 sm:h-5 sm:w-5 font-semibold" />
            </button>
            {/* <FaSms className="h-3 w-3 sm:h-5 sm:w-5 font-semibold" /> */}
            <button className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            <FaPhone className="h-3 w-3 sm:h-5 sm:w-5 font-semibold " />
            </button>
          </div>
          <div className="flex justify-center mt-8">
            {/* Icons or images for social media */}
            <a href="#" className="text-blue-500 mx-2">
              <FaInstagram className="h-3 w-3 sm:h-5 sm:w-5 font-semibold" />
            </a>
            <a href="#" className="text-blue-500 mx-2">
              <FaLinkedin className="h-3 w-3 sm:h-5 sm:w-5 font-semibold" />
            </a>
            <a href="#" className="text-blue-500 mx-2">
              <FaFacebook className="h-3 w-3 sm:h-5 sm:w-5 font-semibold" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Location</h3>
          {/* <p className="text-gray-600">Our Farms</p> */}
          <p className="text-gray-500">
            Find us in the locations below
          </p>
          <div className="mt-8">
            <p className="text-gray-800">Mukono</p>
            <p className="text-gray-500">Kisoga</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
