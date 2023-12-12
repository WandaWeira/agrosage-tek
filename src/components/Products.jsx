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
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-4xl font-bold mt-10">Our Product</h1>
      <p className="my-10">
        Unlock Your Potential with Our Specialized Services Tailored to Your
        Needs
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {Products.map((product, index) => (
          <div
            key={index}
            className="p-2 shadow-xl border rounded-xl w-52 flex flex-col items-center bg-gray-100"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 rounded-full"
            />
            <p className="p-2 text-sm text-center">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
