import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ServiceDetails from "./components/ServiceDetails";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";


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

const products = [
  {
    name: "Fresh Stops",
    description:
      "We understand that most farmers cannot afford to install cold storage facilities needed to preserve food. So, we established large cold storage facilities called Fresh Stops in strategic places to provide affordable communal food storage and preservation services to peasant farmers.",
    imageUrl:
      "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
  },
];

const App = () => {
  return (
    <div className="text-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products products={products}/>} />
        <Route path="services" element={<Services services={services}/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About />} />
        <Route
          path="/services/:id"
          element={<ServiceDetails services={services} />}
        />
         <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
