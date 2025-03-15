import React, { useState } from "react";
import { database, ref, set } from "./../../firebase";
import { useNavigate } from "react-router-dom";

const AddElephant = () => {
  const [elephantId, setElephantId] = useState("");
  const [beltNo, setBeltNo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!elephantId || !beltNo || !age || !gender) {
      alert("Please enter all required fields");
      return;
    }

    const elephantData = {
      elephant_id: elephantId,
      beltNo: beltNo,
      age: age,
      gender: gender,
      Battery: 0,
      Blood_Oxygen: 0,
      Body_Temperature: 0,
      Heart_Beat: 0,
      isLive: true,
      isOn: true,
      llm_prediction: {
        analysis: "No analysis available",
        hypothesis: "No hypothesis available",
      },
      predictions: {
        acceleration_x: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
        acceleration_y: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
        acceleration_z: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
        body_temperature: {
          value: 0,
        },
        gyro_x: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
        gyro_y: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
        gyro_z: {
          Estimation: "No estimation available",
          anomaly_percentage: 0,
        },
      },
      status: "Normal",
      timestamp: new Date().toISOString(),
    };

    console.log(elephantData);

    try {
      // Save to Realtime Database
      await set(ref(database, `predictions/${elephantId}`), elephantData);
      alert("Elephant data added successfully!");
      setElephantId("");
      setBeltNo("");
      setAge("");
      setGender("");
      navigate("/");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add elephant data.");
    }
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-xl font-bold mb-4 text-center text-gray-700">
          Add Elephant
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Elephant ID"
            value={elephantId}
            onChange={(e) => setElephantId(e.target.value)}
            className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="text"
            placeholder="Belt No"
            value={beltNo}
            onChange={(e) => setBeltNo(e.target.value)}
            className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            type="submit"
            className="bg-[#e8a828] text-white p-2 w-full rounded-md hover:bg-[#ffbd38] transition"
          >
            Add Elephant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddElephant;
