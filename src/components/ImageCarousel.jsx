import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})`, height: '600px' }}
    >
        
    </div>
  );
};

export default ImageCarousel;
