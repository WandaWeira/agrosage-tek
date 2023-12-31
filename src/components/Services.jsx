import React from "react";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
  return (
    <div className="flex flex-col items-center mt-28 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold mt-5">Our Services</h1>
      <p className="text-center my-10">
        Unlock Your Potential with Our Specialized Services Tailored to Your
        Needs
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {services.map((service, index) => (
          <Link
            to={`/services/${service.id || index}`}
            key={service.id || index}
          >
            <div className="p-2 shadow-xl border rounded-xl w-full sm:w-52 flex flex-col items-center bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              />
              <p className="p-2 text-sm text-center font-semibold">
                {service.name}
              </p>
              <p className="text-xs p-2 text-center">
                {service.description.length > 120
                  ? `${service.description.substring(0, 120)}...`
                  : service.description}
              </p>
              {service.description.length > 120 && (
                <p className="text-sky-500 my-4 cursor-pointer text-center">
                  Read more
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
