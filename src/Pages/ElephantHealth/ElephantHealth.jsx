import React from "react";
import DeviceTable from "../../Components/DeviceTable/DeviceTable";
import Skelton from "../../Components/Skelton/Skelton";
import { useGlobalData } from "../../Hooks/GlobalDataContext";

function ElephantHealth() {
  const { elephants } = useGlobalData();

  return (
    <div className="pt-[8rem] bg-gray-100">
      <div className="flex items-center justify-center gap-[5rem]">
        <h1 className="text-center text-[3rem] font-bold text-[#d46429] mb-0">
          Elephant Health Analysis
        </h1>
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-green-600 rounded-full"></span>
            <p className="text-left">Healthy</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
            <p className="text-left">Normal</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-red-700 rounded-full"></span>
            <p className="text-left">Critical</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-gray-600 rounded-full"></span>
            <p className="text-left">Dead</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
            <p className="text-left">ON</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-black rounded-full"></span>
            <p className="text-left">OFF</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-4 gap-[3rem] h-[30rem]">
        {elephants.length === 0 ? (
          <Skelton />
        ) : (
          elephants.map((elephant, index) => (
            <DeviceTable key={index} device={elephant} />
          ))
        )}
      </div>
    </div>
  );
}

export default ElephantHealth;
