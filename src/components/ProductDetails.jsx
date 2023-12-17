// FoodStorage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="h-auto mt-10">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-96 object-cover"
      />
      {/* <div className="flex"> */}
      {/* <div> */}
      <div className="text-center">
        <div className="ml-10 my-10">
          <h2 className="font-bold text-2xl my-10">{product.name}</h2>
          <p>
            The Fresh Stops are simply large communal cold storage facilities
            powered by either solar or electricity, depending on their location.
            They are designed to provide controlled humidity and temperature
            conditions that preserve the freshness and quality of agricultural
            products for at least three months. Fresh stops are cooled using air
            conditioning systems and powered by solar energy, enabling them to
            operate at negligible cost as opposed to conventional refrigeration
            systems.
          </p>
        </div>
        <div className="ml-10 my-10">
          <h2 className="font-semibold text-xl my-10">
            What makes Fresh Stops unique?
          </h2>
          <p>
            By using solar-powered air conditioner units to cool food, as
            opposed to the traditional separate condenser, compressor, and
            evaporator units found in conventional cold storage rooms, the
            operation cost per unit cooling time is slashed by 50%. This
            significant reduction in energy costs for SMEs increases their
            income and enhances their overall quality of life."
          </p>
        </div>
        <div className="ml-10 my-10">
          <h2 className="font-semibold text-xl my-10">
            Why should you use Fresh Stops?
          </h2>
          <p>
            Fresh stop facilities come equipped with a thermostat that allows
            you to adjust the temperature and humidity conditions easily. This
            flexibility makes Fresh Stops the perfect choice for storing a wide
            range of agricultural products, ensuring they remain in optimal
            condition.
          </p>
        </div>
      </div>
      {/* </div> */}
      <Gallery />
      {/* </div> */}
    </div>
  );
};

export default ProductDetails;
