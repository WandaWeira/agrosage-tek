import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ services }) => {
  const { id } = useParams();
  const service = services[id];

  return (
    <div className="h-screen mt-10">
      <h2>{service.name}</h2>
      <img src={service.imageUrl} alt={service.name} />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;

