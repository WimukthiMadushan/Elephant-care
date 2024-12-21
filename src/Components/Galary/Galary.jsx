import React from "react";
import "./Galary.css";
import Gallery_01 from "./../../assets/Galary_01.png";
import Gallery_02 from "./../../assets/Galary_02.png";
import Gallery_03 from "./../../assets/Galary_03.png";

function Gallery() {
  const images = [
    Gallery_01,
    Gallery_02,
    Gallery_03,
    Gallery_01,
    Gallery_02,
    Gallery_03,
    Gallery_01,
    Gallery_02,
    Gallery_03,
  ];

  return (
    <div className="gallery-container bg-gray-100 mt-[7rem]">
      <h1 className="text-center text-[3rem] font-bold text-[#323842] pt-[1.5rem] pb-5">
        Elephant Gallery
      </h1>
      <div className="gallery-slider">
        <div className="gallery-track">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image shadow-lg"
            />
          ))}
          {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
