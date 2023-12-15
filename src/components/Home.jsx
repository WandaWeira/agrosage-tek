import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import Overview from "./Overview"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Overview />
    </div>
  );
};

export default Home;
