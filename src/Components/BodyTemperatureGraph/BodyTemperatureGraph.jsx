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

const BodyTemperatureGraph = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const { elephants } = useGlobalData();

  useEffect(() => {
    if (elephants.length === 0) return;

    const interval = setInterval(() => {
      const latestTemperature = parseFloat(elephants[0].Body_Temperature) || 0;
      const currentTime = new Date().toLocaleTimeString();

      setTemperatureData((prevData) => {
        const updatedData = [...prevData, latestTemperature];
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
  }, [elephants]); // Only run when elephants data changes

  const data = {
    labels: timeData,
    datasets: [
      {
        label: "Body Temperature (°C)",
        data: temperatureData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-[80%] mx-auto h-[400px] p-4 bg-white shadow-lg rounded-lg mb-10 pb-10">
      <h3 className="text-lg font-semibold text-center mb-4">
        Body Temperature
      </h3>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true, suggestedMin: 30, suggestedMax: 45 }, // Adjust min/max for temperature range
          },
        }}
      />
    </div>
  );
};

export default BodyTemperatureGraph;
