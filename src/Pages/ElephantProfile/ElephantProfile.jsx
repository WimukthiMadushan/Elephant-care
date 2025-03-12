import React, { useRef, useState, useEffect } from "react";
import { database, ref, onValue } from "./../../firebase";
import Elephant from "./../../assets/Elephant.png";
import { useParams } from "react-router-dom";
import ElephantLocations from "../../Components/ElephantLocations/ElephantLocations";
import SituationAnalysis from "../../Components/SituationAnalysis/SituationAnalysis";

function ElephantProfile() {
  const { id } = useParams();
  const mapRef = useRef(null);
  const situationRef = useRef(null);
  const [elephantData, setElephantData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const elephantRef = ref(database, `predictions/${id}`);

    const unsubscribe = onValue(elephantRef, (snapshot) => {
      if (snapshot.exists()) {
        setElephantData(snapshot.val());
        console.log("elephant data", elephantData);
      } else {
        setElephantData(null);
      }
    });

    return () => unsubscribe();
  }, [id]);

  if (!elephantData) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  const situationData = [
    {
      parameter: "Heart Rate",
      status: elephantData.predictions?.HR?.Estimation || "No Data",
    },
    {
      parameter: "Oxygen Rate",
      status: elephantData.predictions?.SPO2?.Estimation || "No Data",
    },
    {
      parameter: "Gyroscope",
      status: elephantData.predictions?.gyro_x?.Estimation || "No Data",
    },
    {
      parameter: "Accelerometer",
      status: elephantData.predictions?.acceleration_x?.Estimation || "No Data",
    },
  ];

  const elephantLocation = [
    { lat: 6.8743, lng: 80.7602, name: "Udawalawe National Park, Sri Lanka" },
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
              Belt No:{" "}
              <span className="font-normal text-gray-600">
                {elephantData.beltNo}
              </span>
            </h2>
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              Elephant Id:{" "}
              <span className="font-normal text-gray-600">
                {elephantData.elephant_id}
              </span>
            </h2>
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow-inner mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Issue</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Heart Beat: {elephantData.Heart_Beat} bpm</li>
              <li>Oxygen Level: {elephantData.Blood_Oxygen}%</li>
              <li>Body Temperature: {elephantData.Body_Temperature}°F</li>
              <li>Status: {elephantData.Status}</li>
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

      <div ref={situationRef}>
        <SituationAnalysis data={situationData} elephantData={elephantData} />
      </div>
      <div ref={mapRef}>
        <ElephantLocations elephantLocations={elephantLocation} />
      </div>
    </div>
  );
}

export default ElephantProfile;
