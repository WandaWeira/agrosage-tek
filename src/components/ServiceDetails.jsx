import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";

const ServiceDetails = ({ services }) => {
  const { id } = useParams();
  const service = services[id];

  return (
    <div className="h-full mt-4">
      <img
        src={service.imageUrl}
        alt={service.name}
        className="w-full h-96 object-cover"
      />
      <div className="ml-10 my-10 text-center">
        <h2 className="font-bold text-2xl my-10">{service.name}</h2>
        <p>{service.detailedDescription}</p>
      </div>

      <Gallery />
    </div>
  );
};

export default ServiceDetails;
