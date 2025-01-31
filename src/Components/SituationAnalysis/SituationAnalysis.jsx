import React from "react";

const SituationAnalysis = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Situations Identification
      </h2>
      <div className="bg-[#eae9e9] p-4 rounded-md mb-4">
        <table className="table-auto w-[90%] text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-gray-700 font-medium">Parameter</th>
              <th className="py-2 px-4 text-gray-700 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 text-gray-600">{item.parameter}</td>
                <td className="py-2 px-4 text-gray-600">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Prediction Situation
      </h1>
      <p className="py-2 px-4 text-gray-600">No prediction Now</p>
    </div>
  );
};

export default SituationAnalysis;
