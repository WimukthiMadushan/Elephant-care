import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Elephant_icon from "../../assets/Elephant_icon.png";
import BatteryIndicator from "../BatteryIndicator/BatteryIndicator";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Tooltip } from "@mui/material";
import Delete_Image from "./../../assets/Delete.png";
import Update_Image from "./../../assets/Update.png";
import { getDatabase, ref, remove, update } from "firebase/database";
import { toast } from "react-toastify";
import { useState } from "react";

const DeviceTable = ({ device }) => {
  //console.log(device);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedDevice, setUpdatedDevice] = useState({
    id: device.id,
    name: device.name,
    age: device.age,
    gender: device.gender,
  });

  const handleDelete = async (deviceId) => {
    const dbRef = getDatabase();
    try {
      await remove(ref(dbRef, `predictions/${deviceId}`));
      console.log(`Device ${deviceId} deleted successfully!`);
      toast.success("Device deleted successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      console.error("Error deleting device:", error);
      toast.error("Error Deleting the Device!", { position: "bottom-right" });
    }
  };

  const handleUpdate = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDevice({ ...updatedDevice, [e.target.name]: e.target.value });
  };

  const handleSaveUpdate = async () => {
    const dbRef = getDatabase();
    try {
      await update(ref(dbRef, `predictions/${updatedDevice.id}`), {
        name: updatedDevice.name,
        age: updatedDevice.age,
        gender: updatedDevice.gender,
      });
      toast.success("Device updated successfully!", {
        position: "bottom-right",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating device:", error);
      toast.error("Error updating the device!", { position: "bottom-right" });
    }
  };

  return (
    <div className="border-2 border-gray-600 rounded-lg shadow-lg overflow-hidden bg-white w-full max-w-5xl mx-auto min-h-[15rem]">
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
          <Tooltip title="Elephant Profile" arrow>
            <Link
              to={`/elephantprofile/${device.id}`}
              className="text-[1rem] font-bold text-gray-700"
            >
              <h2 className="text-[1rem] font-bold text-gray-700">
                Belt No - <span className="font-bold">{device.beltNo}</span>
              </h2>
            </Link>
          </Tooltip>
        </div>

        {/* Status Dots */}
        <div className="flex items-center gap-2">
          <span
            className={`h-4 w-4 rounded-full border-2 border-gray-600 ${
              device.status === "Normal" ? "bg-blue-500" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-4 w-4 rounded-full border-2 border-gray-600 ${
              device.status === "Healthy" ? "bg-green-500" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-4 w-4 rounded-full border-2 border-gray-600 ${
              device.status === "Critical" ? "bg-red-500" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-4 w-4 rounded-full border-2 border-gray-600 ${
              device.status === "Dead" ? "bg-black" : "bg-white"
            }`}
          ></span>
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
        <div className="flex items-center gap-2">
          <img
            src={Update_Image}
            alt="edit"
            className="cursor-pointer"
            onClick={() => handleUpdate(device.id)}
          />
          <img
            src={Delete_Image}
            alt="recycle"
            onClick={() => handleDelete(device.id)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Table Body */}
      <div className="grid grid-cols-5 border-t-2 divide-x-4 divide-gray-300 ">
        <div className="flex items-center justify-center p-6">
          <img src={Elephant_icon} alt="elephant icon" />
        </div>

        <div className="col-span-2 p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <span className="font-bold">Name:</span>
              <span className="ml-2">{device.name}</span>
            </li>
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
              <span className="font-bold">Age:</span>
              <span className="ml-2">{device.age}</span>
            </li>
            <li>
              <span className="font-bold">Gender</span>
              <span className="ml-2">{device.gender}</span>
            </li>
            <li>
              <span className="font-bold">Status:</span>
              <span className="ml-2">{device.status}</span>
            </li>
            <li>
              <Link to={`/chartsdetails/${device.id}`} state={{ device }}>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Update Elephant Details
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Elephant ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={updatedDevice.id}
                  disabled
                  className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Elephant Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={updatedDevice.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={updatedDevice.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={updatedDevice.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveUpdate}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceTable;
