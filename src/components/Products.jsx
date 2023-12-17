import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="flex flex-col items-center my-28 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold mt-5">Our Product</h1>
      <p className="text-center my-10">
        Unlock Your Potential with Our Specialized Services Tailored to Your
        Needs
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {products.map((product, index) => (
          <Link
            to={`/products/${product.id || index}`}
            key={product.id || index}
          >
            <div className="p-2 shadow-xl border rounded-xl w-52 flex flex-col items-center bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              />
              <p className="p-2 text-sm text-center font-semibold">
                {product.name}
              </p>
              <p className="text-xs p-2">
                {product.description.length > 120
                  ? `${product.description.substring(0, 120)}...`
                  : product.description}
              </p>
              {product.description.length > 120 && (
                <p className="text-sky-500 my-4 cursor-pointer">Read more</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
