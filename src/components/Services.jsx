import React from "react";
import { Link } from "react-router-dom";

const Services = ({services}) => {
 
  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-4xl font-bold mt-5">Our Services</h1>
      <p className="my-10">
        Unlock Your Potential with Our Specialized Services Tailored to Your
        Needs
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-2 shadow-xl border rounded-xl w-52 flex flex-col items-center bg-gray-50"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-20 rounded-full"
            />
            <p className="p-2 text-sm text-center font-semibold">
              {service.name}
            </p>
            <p className="text-xs p-2">
              {service.description.length > 120
                ? `${service.description.substring(0, 120)}...`
                : service.description}
            </p>
            {service.description.length > 120 && (
              <Link to={`/services/${index}`}>
                <p className="text-sky-500 my-4">Read more</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
