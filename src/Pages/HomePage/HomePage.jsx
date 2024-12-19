import React from "react";
import Header from "../../Components/Header/Header";
import AboutElephant from "../../Components/AboutElephant/AboutElephant";
import ElephantFeatures from "../../Components/ElephantFeatures/ElephantFeatures";
import Galary from "../../Components/Galary/Galary";
import ElephantLocations from "../../Components/ElephantLocations/ElephantLocations";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutElephant />
      <ElephantFeatures />
      <Galary />
      <ElephantLocations />
    </div>
  );
};

export default HomePage;
