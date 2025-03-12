import React from "react";

const PreviousSituations = ({ elephantData }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Overall Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Elephant ID</th>
              <th className="px-4 py-2 border">Heart Rate (BPM)</th>
              <th className="px-4 py-2 border">Oxygen Rate (%)</th>
              <th className="px-4 py-2 border">Acceleration (x, y, z)</th>
              <th className="px-4 py-2 border">Gyroscope (x, y, z)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center hover:bg-gray-100">
              <td className="px-4 py-2 border">{elephantData.elephant_id}</td>
              <td className="px-4 py-2 border">{elephantData.Heart_Beat}</td>
              <td className="px-4 py-2 border">{elephantData.Blood_Oxygen}</td>
              <td className="px-4 py-2 border">
                X:{" "}
                {elephantData.predictions?.acceleration_x?.anomaly_percentage ||
                  "N/A"}
                % , Y:{" "}
                {elephantData.predictions?.acceleration_y?.anomaly_percentage ||
                  "N/A"}
                % , Z:{" "}
                {elephantData.predictions?.acceleration_z?.anomaly_percentage ||
                  "N/A"}
                %
              </td>
              <td className="px-4 py-2 border">
                X:{" "}
                {elephantData.predictions?.gyro_x?.anomaly_percentage || "N/A"}%
                , Y:{" "}
                {elephantData.predictions?.gyro_y?.anomaly_percentage || "N/A"}%
                , Z:{" "}
                {elephantData.predictions?.gyro_z?.anomaly_percentage || "N/A"}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousSituations;
