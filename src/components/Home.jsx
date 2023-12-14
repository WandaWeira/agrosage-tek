import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Services />
      <Products />
    </div>
  );
};

export default Home;
