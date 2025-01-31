import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering ChartJS components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const HeartbeatGraph = () => {
  const [heartbeatData, setHeartbeatData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    // Generate static data for now
    const interval = setInterval(() => {
      const newHeartbeatValue = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random heartbeat between 60-100
      const newTime = new Date().toLocaleTimeString();

      setHeartbeatData((prevData) => {
        const updatedData = [...prevData, newHeartbeatValue];
        if (updatedData.length > 20) updatedData.shift();
        return updatedData;
      });

      setTimeData((prevTime) => {
        const updatedTime = [...prevTime, newTime];
        if (updatedTime.length > 20) updatedTime.shift();
        return updatedTime;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timeData,
    datasets: [
      {
        label: "Heartbeat",
        data: heartbeatData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.01,
      },
    ],
  };

  return (
    <div className="w-[80%] mx-auto h-[400px] p-4 bg-white shadow-lg rounded-lg mb-10 pb-10">
      <h2 className="text-xl font-semibold text-center mb-4">
        Heartbeat Graph
      </h2>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};

export default HeartbeatGraph;
