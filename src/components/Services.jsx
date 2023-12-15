import React from "react";
// import { useHistory } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Food Storage and preservation services",
      description:
        "We understand that most farmers cannot afford to install cold storage facilities needed to preserve food. So, we established large cold storage facilities called Fresh Stops in strategic places to provide affordable communal food storage and preservation services to peasant farmers.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },

    {
      name: "Value Addition Services",
      description:
        "Before products are made available for sale, they are carefully branded and packaged in disposable paper bags and reusable plastic crates. These packaging materials feature essential details, including name, grade, quantity, and source.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },
    {
      name: "Marketing and Sales Services",
      description:
        "We connect farmers to final consumers using a mobile phone-supported online marketing and shopping application called Fresh Stop Foods. This app provides consumers with valuable information about product offerings, including availability, pricing, ongoing offers, and delivery services. Customers can place orders for their desired products through a toll-free phone call or via in-app messaging, and payments are made using the mobile money system.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },
    {
      name: "Last mile delivery Services",
      description:
        "In addition to marketing and sales services, we offer delivery services for goods purchased at our Fresh stop storage facilities. Products purchased by a client within the Kampala metropolitan area are delivered to their homes free of charge.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },
    {
      name: "Emergency fund and upfront payment services",
      description:
        "One of our strategies to ensure financial stability for the farming families we support is to provide them with an emergency fund. This fund will be available for farmers to access when they urgently need agricultural inputs such as fertilizer or resources to combat pest and disease issues.",
      imageUrl:
        "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-5 text-green-500">Our Services</h1>
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
              <p className="text-sky-500 my-4">Read more</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
