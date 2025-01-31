import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Elephant_icon from "../../assets/Elephant_icon.png";
import BatteryIndicator from "../BatteryIndicator/BatteryIndicator";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const DeviceTable = ({ device }) => {
  return (
    <div className="border-2 border-gray-600 rounded-lg shadow-lg overflow-hidden bg-white w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b-2 border-gray-600">
        {/* Live Status */}
        <div className="flex items-center gap-2">
          {device.live && (
            <span className="bg-red-600 text-white font-semibold px-3 py-1 rounded-full text-xs flex items-center">
              <FiberManualRecordIcon fontSize="small" className="mr-1" />
              Live
            </span>
          )}
        </div>

        <div>
          <Link
            to={`/situationAnalysis/${device.id}`}
            className="text-[1rem] font-bold text-gray-700"
          >
            <h2 className="text-[1rem] font-bold text-gray-700">
              Belt No - <span className="font-bold">{device.beltNo}</span>
            </h2>
          </Link>
        </div>

        {/* Status Dots */}
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 bg-blue-500 rounded-full border-2 border-gray-600"></span>
          <span className="h-4 w-4 bg-white rounded-full border-2 border-gray-600"></span>
          <span className="h-4 w-4 bg-white rounded-full border-2 border-gray-600"></span>
          <span className="h-4 w-4 bg-white rounded-full border-2 border-gray-600"></span>
        </div>

        {/* ON/OFF Indicator */}
        {device.isOn ? (
          <div className="flex items-center gap-2 text-yellow-500">
            <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
            <span className="text-sm font-semibold">ON</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-500">
            <span className="h-4 w-4 bg-gray-500 rounded-full"></span>
            <span className="text-sm font-semibold">Off</span>
          </div>
        )}
      </div>

      {/* Table Body */}
      <div className="grid grid-cols-5 border-t-2 divide-x-4 divide-gray-300">
        <div className="flex items-center justify-center p-6">
          <img src={Elephant_icon} alt="elephant icon" />
        </div>

        <div className="col-span-2 p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <span className="font-bold">Heart Beat:</span>
              <span className="ml-2">{device.Heart_Beat} bmp</span>
            </li>
            <li>
              <span className="font-bold">Body Temperature:</span>
              <span className="ml-2">{device.Body_Temperature}°C</span>
            </li>
            <li>
              <span className="font-bold">Blood Oxygen:</span>
              <span className="ml-2">{device.Blood_Oxygen}%</span>
            </li>
            <li>
              <span className="font-bold">Status:</span>
              <span className="ml-2">{device.Status}</span>
            </li>
            <li>
              <Link to={`/chartsdetails/${device.id}`}>
                <button className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg transition-all duration-300">
                  More <ChevronRight size={15} />
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Time and Battery */}
        <div className="text-center p-6">
          <p className="text-md text-gray-600 mb-2">{device.Time}</p>
          <p className="text-md text-gray-400 font-light mb-4">{device.Date}</p>
        </div>
        <div className="flex justify-center items-center">
          <BatteryIndicator charge={device.Battery} />
        </div>
      </div>
    </div>
  );
};

export default DeviceTable;
