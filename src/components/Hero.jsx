import React from "react";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  const images = [
    "https://media.istockphoto.com/id/1456520455/video/sulfur-cosmos-flowers-bloom-in-the-garden.jpg?s=640x640&k=20&c=pRCTfk8PdZsdriwFCsIC-XMgi21-NVOKM4CXUt0DuWE=",
    "https://media.istockphoto.com/id/1455172237/photo/lavender-at-sunrise.jpg?s=612x612&w=0&k=20&c=kqIkksrTQq1yTpXdddysQKjE56AKlA6ed2F6KPua-iw=",
    "https://media.istockphoto.com/id/1431944902/photo/nature-background-with-green-tropical-leaves-and-multicolored-flowers-minimal-summer-abstract.jpg?s=612x612&w=0&k=20&c=3GyLOphl1IZn_ny9Du7It5ghTuCPpKTJsxwIYG6tASA=",
  ];
  return (
    <div className="relative text-center">
      <ImageCarousel images={images} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2">
        <p className=" text-white text-5xl font-bold">
          Modern Agricultural
          <span className="my-4">Solutions</span>
        </p>
        <div className="flex gap-10 mt-10 mx-28">
          <div className="bg-sky-500 text-white p-2 rounded-md w-48 text-center">
            Introduction
          </div>
          <div className="border border-white p-2 rounded-md mx-4 w-48 text-center text-white">
            Explore our Services
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
