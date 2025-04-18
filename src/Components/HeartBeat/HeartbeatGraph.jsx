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

const HeartbeatGraph = () => {
  const [heartbeatData, setHeartbeatData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const { elephants } = useGlobalData();

  useEffect(() => {
    if (elephants.length === 0) return;

    const latestHeartbeat = parseInt(elephants[0].Heart_Beat, 10) || 0;
    const currentTime = new Date().toLocaleTimeString();

    setHeartbeatData((prevData) => {
      const updatedData = [...prevData, latestHeartbeat];
      if (updatedData.length > 20) updatedData.shift();
      return updatedData;
    });

    setTimeData((prevTime) => {
      const updatedTime = [...prevTime, currentTime];
      if (updatedTime.length > 20) updatedTime.shift();
      return updatedTime;
    });
  }, [elephants]);

  const data = {
    labels: timeData,
    datasets: [
      {
        label: "Heartbeat",
        data: heartbeatData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
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
            y: { beginAtZero: true, suggestedMin: 50, suggestedMax: 120 },
          },
        }}
      />
    </div>
  );
};

export default HeartbeatGraph;
