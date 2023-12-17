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
    detailedDescription: `
    We understand that most farmers cannot afford to install cold storage facilities needed to preserve food. So, we established large cold storage facilities called "Fresh Stops" in strategic places to provide affordable communal food storage and preservation services. The Fresh stops provide controlled humidity and temperature conditions required to preserve food for at least 60 days. Fresh stops are built with the capacity to store and preserve products for up to 50 farmers and are powered by solar energy and or electricity, depending on their location. Agricultural products are cleaned, graded, packaged and stored in air-tight chambers with controlled temperature and humidity to preserve their quality and freshness until demand rises.  `,
  },

  {
    name: "Value Addition Services",
    description:
      "Before products are made available for sale, they are carefully branded and packaged in disposable paper bags and reusable plastic crates. These packaging materials feature essential details, including name, grade, quantity, and source.",
    imageUrl:
      "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    detailedDescription: `
    Before products are made available for sale, they are carefully packaged and branded in disposable paper bags and reusable plastic crates. These packaging materials feature essential details, including name, grade, quantity, and source. This information is presented by direct printing on the bags and via a QR Code. This packaging approach increases the quality of our products and protects them during storage and transportation. The information provided on the packaging materials enables customers to track the journey of the products from farms to their homes. During transportation, products are placed in plastic crates, which allows proper aeration to prevent product damage. By implementing effective packaging and branding practices, we aim to consistently deliver high-quality products that meet consumer expectations and adhere to international quality standards. 
    `,
  },
  {
    name: "Marketing and Sales Services",
    description:
      "We connect farmers to final consumers using a mobile phone-supported online marketing and shopping application called Fresh Stop Foods. This app provides consumers with valuable information about product offerings, including availability, pricing, ongoing offers, and delivery services. Customers can place orders for their desired products through a toll-free phone call or via in-app messaging, and payments are made using the mobile money system.",
    imageUrl:
      "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    detailedDescription: `
    We believe that the goal of any successful farmer is to deliver their products to the final consumers and obtain a decent return on their investment. Yet this is not the case for most farmers in Uganda, who lose up to 53% of their harvests. For this reason, we support farmers to sell their products directly to the final consumers using e-commerce platforms they never had access to. We connect farmers to final consumers using a mobile phone-supported online marketing and shopping application called "Fresh Stop Foods". This app provides consumers valuable information about our product offerings, including availability, pricing, ongoing offers, and delivery services. Customers can place orders for their desired products through a toll-free phone call or via in-app messaging, and payments can be made using the mobile money system. A similar online shopping experience is also available through our website and social media applications like WhatsApp Business and Facebook.
      `,
  },
  {
    name: "Last mile delivery Services",
    description:
      "In addition to marketing and sales services, we offer delivery services for goods purchased at our Fresh stop storage facilities. Products purchased by a client within the Kampala metropolitan area are delivered to their homes free of charge.",
    imageUrl:
      "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    detailedDescription: `We not only offer marketing and sales services but also delivery services for goods purchased at our storage facilities. Products purchased by a client within the Kampala metropolitan area are delivered to their homes free of charge. This is made possible by using electric bikes, which cut costs and eliminate carbon emissions. The delivery services enable farmers to supply the under-supplied niche of online shoppers in Uganda who have a high demand for fresh and high-quality food products. 
    `,
  },
  {
    name: "Emergency fund and upfront payment services",
    description:
      "One of our strategies to ensure financial stability for the farming families we support is to provide them with an emergency fund. This fund will be available for farmers to access when they urgently need agricultural inputs such as fertilizer or resources to combat pest and disease issues.",
    imageUrl:
      "https://agrosagetekugandalimited.com/images/Manufacturing%20.jpg",
    detailedDescription: `One of our strategies to ensure financial stability for the farming families we support is to provide them with an emergency fund. This fund will be available for farmers to access when they urgently need agricultural inputs such as fertilizer or resources to combat pest and disease issues. Typically, farmers turn to microfinance and loan agents for such needs, but many of these money lenders charge exploitative interest rates that significantly eat into the farmers' margins. By offering farmers a safer and more accessible means of obtaining financial assistance, we aim to enhance their ability to care for their crops, leading to improved yields. Additionally, this approach will allow farmers to retain a larger portion of their income.
      `,
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
        <Route path="products" element={<Products products={products} />} />
        <Route path="services" element={<Services services={services} />} />
        <Route path="contact" element={<Contact />} />
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
