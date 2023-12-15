import React from "react";

const Products = () => {
  const Products = [
    {
      name: "Fresh Stops",
      description:
        "We understand that most farmers cannot afford to install cold storage facilities needed to preserve food. So, we established large cold storage facilities called Fresh Stops in strategic places to provide affordable communal food storage and preservation services to peasant farmers.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mt-5 text-green-500">Our Product</h1>
      <p className="my-10">
        Unlock Your Potential with Our Specialized Services Tailored to Your
        Needs
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {Products.map((product, index) => (
          <div
            key={index}
            className="p-2 shadow-xl border rounded-xl w-52 flex flex-col items-center bg-gray-50"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 rounded-full"
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
              <p className="text-sky-500 my-4">Read more</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
