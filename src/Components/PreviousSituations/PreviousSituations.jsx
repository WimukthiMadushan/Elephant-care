import React, { useState } from "react";

const PreviousSituations = () => {
  const data = [
    {
      id: 1,
      heartRate: 75,
      oxygenRate: 98,
      accelerometer: "0.5, 1.2, -0.3",
      gyroscope: "0.02, 0.04, -0.01",
    },
    {
      id: 2,
      heartRate: 80,
      oxygenRate: 96,
      accelerometer: "0.3, 1.1, -0.2",
      gyroscope: "0.01, 0.03, -0.02",
    },
    {
      id: 3,
      heartRate: 72,
      oxygenRate: 99,
      accelerometer: "0.6, 1.0, -0.4",
      gyroscope: "0.03, 0.05, -0.01",
    },
    {
      id: 4,
      heartRate: 78,
      oxygenRate: 97,
      accelerometer: "0.4, 1.3, -0.5",
      gyroscope: "0.02, 0.06, -0.03",
    },
    {
      id: 5,
      heartRate: 76,
      oxygenRate: 95,
      accelerometer: "0.7, 1.2, -0.6",
      gyroscope: "0.04, 0.05, -0.02",
    },
    {
      id: 6,
      heartRate: 82,
      oxygenRate: 94,
      accelerometer: "0.2, 1.0, -0.1",
      gyroscope: "0.01, 0.03, -0.01",
    },
    {
      id: 7,
      heartRate: 85,
      oxygenRate: 93,
      accelerometer: "0.3, 1.1, -0.2",
      gyroscope: "0.02, 0.04, -0.01",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Previous Situations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Elephant ID</th>
              <th className="px-4 py-2 border">Heart Rate (BPM)</th>
              <th className="px-4 py-2 border">Oxygen Rate (%)</th>
              <th className="px-4 py-2 border">Accelerometer (x, y, z)</th>
              <th className="px-4 py-2 border">Gyroscope (x, y, z)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((elephant) => (
              <tr key={elephant.id} className="text-center hover:bg-gray-100">
                <td className="px-4 py-2 border">{elephant.id}</td>
                <td className="px-4 py-2 border">{elephant.heartRate}</td>
                <td className="px-4 py-2 border">{elephant.oxygenRate}</td>
                <td className="px-4 py-2 border">{elephant.accelerometer}</td>
                <td className="px-4 py-2 border">{elephant.gyroscope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreviousSituations;
