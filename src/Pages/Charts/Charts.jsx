import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

function Charts() {
  const xAxisData = ["Heart Beat(bpm)", "Body Temperature", "Blood Oxygen(%)"];
  const seriesData = [
    {
      data: [40, 10, 80],
      style: {
        fill: ["black", "white", "yellow"],
      },
    },
  ];
  return (
    <div>
      <div className="pt-[7rem] flex flex-col bg-gray-5">
        <h1 className="text-center text-[3rem] font-bold text-[#d46429]">
          Elephant Healthy Metrics Bar Chart
        </h1>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: xAxisData,
              categoryGapRatio: 0.5,
              barGapRatio: 0.4,
            },
          ]}
          series={seriesData}
          width={800}
          height={500}
        />
      </div>
      <div>
        <h1>pie chart</h1>
      </div>
    </div>
  );
}

export default Charts;
