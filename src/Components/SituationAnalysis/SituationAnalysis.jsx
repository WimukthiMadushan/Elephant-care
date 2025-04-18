import React from "react";
import PreviousSituations from "../PreviousSituations/PreviousSituations";

const SituationAnalysis = ({ data, elephantData }) => {
  console.log("here the data", data);
  console.log("here the elephant data", elephantData);
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6 w-[90%] mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Situations Identification
      </h2>

      <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left font-medium">Parameter</th>
              <th className="py-3 px-6 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                }`}
              >
                <td className="py-3 px-6 text-gray-700">{item.parameter}</td>
                <td className="py-3 px-6 text-gray-700">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          LLM Predictions
        </h2>
        <p>{elephantData.llm_prediction.analysis}</p>
        <p>{elephantData.llm_prediction.hypothesis}</p>
      </div>
      <div className="mt-6 text-center">
        <PreviousSituations elephantData={elephantData} />
      </div>
    </div>
  );
};

export default SituationAnalysis;
