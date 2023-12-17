import React from "react";

const images = [
  {
    src: "https://imgs.search.brave.com/jsm_cPQFaQvMcKB4CbzQX1YrwHAqq2cBwenYKimLhng/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YXV0dW1uLWZsb3dl/cnMtaW4tYmxvb20u/anBnP3dpZHRoPTEw/MDAmZm9ybWF0PXBq/cGcmZXhpZj0wJmlw/dGM9MA",
    title: "Image 1",
  },
  {
    src: "https://imgs.search.brave.com/aLR37rvrlwcMffglAkqq98Or8JFOPkjfA6vAbFlbs6k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzEzLzM2LzAx/LzM2MF9GXzUxMzM2/MDEyM18wTUpDbVZx/RlZOSVhUNmJpR3Nu/R00ySEFnTlJBVk9C/RS5qcGc",
    title: "Image 2",
  },
  {
    src: "https://imgs.search.brave.com/jsm_cPQFaQvMcKB4CbzQX1YrwHAqq2cBwenYKimLhng/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YXV0dW1uLWZsb3dl/cnMtaW4tYmxvb20u/anBnP3dpZHRoPTEw/MDAmZm9ybWF0PXBq/cGcmZXhpZj0wJmlw/dGM9MA",
    title: "Image 1",
  },
  {
    src: "https://imgs.search.brave.com/aLR37rvrlwcMffglAkqq98Or8JFOPkjfA6vAbFlbs6k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzEzLzM2LzAx/LzM2MF9GXzUxMzM2/MDEyM18wTUpDbVZx/RlZOSVhUNmJpR3Nu/R00ySEFnTlJBVk9C/RS5qcGc",
    title: "Image 2",
  },
];

const Gallery = () => {
  return (
    <div className="mx-4 my-16">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id || image.src} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto transform hover:scale-110 transition duration-500"
            />
            {/* <p className="text-center text-sm mt-2">{image.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
