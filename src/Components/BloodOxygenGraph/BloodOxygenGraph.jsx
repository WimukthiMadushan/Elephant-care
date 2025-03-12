import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useGlobalData } from "../../Hooks/GlobalDataContext";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering ChartJS components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BloodOxygenGraph = () => {
  const [oxygenData, setOxygenData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const { elephants } = useGlobalData();

  useEffect(() => {
    if (elephants.length === 0) return;

    const interval = setInterval(() => {
      const latestOxygen = parseFloat(elephants[0].Blood_Oxygen) || 0;
      const currentTime = new Date().toLocaleTimeString();

      setOxygenData((prevData) => {
        const updatedData = [...prevData, latestOxygen];
        if (updatedData.length > 20) updatedData.shift();
        return updatedData;
      });

      setTimeData((prevTime) => {
        const updatedTime = [...prevTime, currentTime];
        if (updatedTime.length > 20) updatedTime.shift();
        return updatedTime;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup function
  }, [elephants]);

  const data = {
    labels: timeData,
    datasets: [
      {
        label: "Blood Oxygen (%)",
        data: oxygenData,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-[80%] mx-auto h-[400px] p-4 bg-white shadow-lg rounded-lg mb-10 pb-10">
      <h3 className="text-lg font-semibold text-center mb-4">Blood Oxygen</h3>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true, suggestedMin: 80, suggestedMax: 100 }, // Oxygen level range
          },
        }}
      />
    </div>
  );
};

export default BloodOxygenGraph;
