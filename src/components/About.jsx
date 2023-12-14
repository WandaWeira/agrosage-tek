import React from "react";
import Overview from "./Overview";
import Team from "./Team";

const About = () => {
  return (
    <div className="p-10 bg-gray-50">
      <Team />
      <Overview />
      <div className="bg-gray-100 shadow-md rounded-md p-8 mt-10">
        <p className="text-gray-700 text-lg leading-relaxed">
          Agrosage Tek Uganda Limited (ATUL) is dedicated to eradicating poverty
          among smallholder farmers in Uganda by reducing postharvest losses.
          Our innovative approach involves the establishment of communal cold
          storage facilities known as "Fresh Stops" that operate on air
          conditioner-based cooling systems powered by solar energy. These
          facilities maintain optimal temperature and humidity conditions to
          preserve agricultural products, significantly reducing food waste.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Our mission is to empower underprivileged farmers to earn decent
          returns on their investments while revolutionizing the agricultural
          supply chain to meet consumer demand for high-quality products. We
          achieve this by offering a holistic postharvest service package,
          including providing access to cold storage services to reduce losses,
          enabling direct sales to consumers through e-commerce, and maximizing
          farmers' profits by adding value to their products.
        </p>
      </div>
    </div>
  );
};

export default About;
