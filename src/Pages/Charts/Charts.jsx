import React from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ElephantLocations from "../../Components/ElephantLocations/ElephantLocations";
import HeartbeatGraph from "../../Components/HeartBeat/HeartbeatGraph";
import BodyTempratureGraph from "../../Components/BodyTemperatureGraph/BodyTemperatureGraph";
import BloodOxygenGraph from "./../../Components/BloodOxygenGraph/BloodOxygenGraph";
import { useLocation } from "react-router-dom";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const coordinates = [
  {
    lat: 6.8743,
    lng: 80.7602,
    name: "Udawalawe National Park, Sri Lanka",
  },
];

function Charts() {
  const location = useLocation();
  const device = location.state?.device;

  if (!device) {
    return <p>No device data found.</p>;
  }

  const data = {
    labels: ["Heart Beat(bpm)", "Body Temperature", "Blood Oxygen(%)"],
    datasets: [
      {
        data: [device.Heart_Beat, device.Body_Temperature, device.Blood_Oxygen],
        backgroundColor: ["#ff7043", "#66bb6a", "#42a5f5"],
        borderColor: ["#ff5722", "#388e3c", "#1976d2"],
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ["Heart Beat(bpm)", "Body Temperature", "Blood Oxygen(%)"],
    datasets: [
      {
        data: [device.Heart_Beat, device.Body_Temperature, device.Blood_Oxygen],
        backgroundColor: ["#ff7043", "#66bb6a", "#42a5f5"],
        borderColor: ["#ff5722", "#388e3c", "#1976d2"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#fff",
      },
    },
    rotation: 0.5,
    cutout: "60%",
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="pt-[4rem] flex flex-col bg-gray-50">
      <h1 className="text-center text-[3rem] font-bold text-[#d46429] mb-8">
        Elephant Health Metrics
      </h1>
      <div className="flex justify-center items-center mt-8 flex-wrap mb-5">
        <div className="w-full max-w-[500px] min-w-[500px] h-[400px] py-[5rem] mx-[5rem]">
          <Bar data={barData} options={options} />
        </div>
        <div className="w-full max-w-[500px] min-w-[300px] h-[400px]">
          <Pie data={data} options={options} />
        </div>
      </div>
      <HeartbeatGraph />
      <BodyTempratureGraph />
      <BloodOxygenGraph />
      <ElephantLocations elephantLocations={coordinates} />
    </div>
  );
}

export default Charts;
