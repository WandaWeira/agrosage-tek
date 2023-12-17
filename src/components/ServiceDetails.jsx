import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";

const ServiceDetails = ({ services }) => {
  const { id } = useParams();
  const service = services[id];

  return (
    <div className="h-auto mt-4">
      <img
        src={service.imageUrl}
        alt={service.name}
        className="w-full h-auto md:h-96 object-cover"
      />
      <div className="px-4 md:px-10 my-10 text-center">
        <h2 className="font-bold text-xl md:text-2xl my-10">{service.name}</h2>
        <p className="text-base md:text-lg">{service.detailedDescription}</p>
      </div>

      <Gallery />
    </div>
  );
};

export default ServiceDetails;
