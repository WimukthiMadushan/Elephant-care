import React, { useRef } from "react";
import Elephant from "./../../assets/Elephant.png";
import { useParams } from "react-router-dom";
import ElephantLocations from "../../Components/ElephantLocations/ElephantLocations";
import SituationAnalysis from "../../Components/SituationAnalysis/SituationAnalysis";

function ElephantProfile() {
  const { id } = useParams();
  const mapRef = useRef(null);
  const situationRef = useRef(null);
  const elephantLocation = [
    { lat: 6.8743, lng: 80.7602, name: "Udawalawe National Park, Sri Lanka" },
  ];

  const situationData = [
    {
      parameter: "Heart Rate",
      status: "Minor heart rate fluctuation, no critical health risk",
    },
    {
      parameter: "Oxygen Rate",
      status: "Minor fluctuation in oxygen levels, no critical event",
    },
    {
      parameter: "Gyroscope",
      status: "Minor rotational anomaly, no significant impact",
    },
    {
      parameter: "Accelerometer",
      status: "Minor acceleration detected, no significant impact",
    },
  ];

  const handleScrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToSituation = () => {
    situationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-[7rem] pb-10 bg-gray-100">
      <h1 className="text-center text-[3rem] font-bold text-[#d46429] pb-5 font-poppins">
        Elephant Profile
      </h1>
      <div className="flex justify-center items-start gap-10 max-w-[80%] mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex-shrink-0">
          <img
            src={Elephant}
            alt="elephant-image"
            className="rounded-lg w-[300px] h-auto"
          />
        </div>

        <div className="flex-grow">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Elephant ID:{" "}
              <span className="font-normal text-gray-600">IR00345</span>
            </h2>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Alert Receive Date:</span>{" "}
              09-September-2024
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Alert Receive Time:</span> 09.26.45
              P.M
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow-inner mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Issue</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Chest Movement - Rapid (&gt; 15 breath/min) due to stress</li>
              <li>
                Motion Data - High (increased movement or erratic behavior)
              </li>
              <li>Body Temperature &gt; 100 F</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleScrollToSituation}
              className="bg-[#d46429] text-white px-5 py-1 rounded-[2rem] text-lg font-medium hover:bg-yellow-700 transition duration-300"
            >
              Situation Analysis
            </button>
            <button
              onClick={handleScrollToMap}
              className="bg-[#d46429] text-white px-5 py-1 rounded-[2rem] text-lg font-medium hover:bg-yellow-700 transition duration-300"
            >
              Location
            </button>
          </div>
        </div>
      </div>
      <div ref={mapRef}>
        <ElephantLocations elephantLocations={elephantLocation} />
      </div>
      <div ref={situationRef}>
        <SituationAnalysis data={situationData} />
      </div>
    </div>
  );
}

export default ElephantProfile;
