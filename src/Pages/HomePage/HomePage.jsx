import React from "react";
import Header from "../../Components/Header/Header";
import AboutElephant from "../../Components/AboutElephant/AboutElephant";
import ElephantFeatures from "../../Components/ElephantFeatures/ElephantFeatures";
import Galary from "../../Components/Galary/Galary";
import ElephantLocations from "../../Components/ElephantLocations/ElephantLocations";

const HomePage = () => {
  const elephantLocations = [
    { lat: 6.8743, lng: 80.7602, name: "Udawalawe National Park, Sri Lanka" },
    { lat: 7.847, lng: 81.0174, name: "Minneriya National Park, Sri Lanka" },
    {
      lat: 6.8333,
      lng: 81.5333,
      name: "Lunugamvehera National Park, Sri Lanka",
    },
    { lat: 8.3567, lng: 80.4111, name: "Kaudulla National Park, Sri Lanka" },
    { lat: 7.9278, lng: 81.002, name: "Hurulu Eco Park, Sri Lanka" },
    { lat: 6.3402, lng: 81.4788, name: "Yala National Park, Sri Lanka" },
  ];
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="about-elephant">
        <AboutElephant />
      </div>
      <div id="elephant-features">
        <ElephantFeatures />
      </div>
      <div id="gallery">
        <Galary />
      </div>
      <div id="elephant-locations">
        <ElephantLocations elephantLocations={elephantLocations} />
      </div>
    </div>
  );
};

export default HomePage;
