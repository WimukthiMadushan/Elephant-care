import React from "react";

const BatteryIndicator = ({ charge }) => {
  const getBatteryColor = (charge) => {
    if (charge > 25) return "bg-green-400";
    return "bg-red-500";
  };
  const batteryColor = getBatteryColor(charge);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center border-2 border-gray-700 rounded-md w-16 h-8 relative">
        <div
          className={`h-full ${batteryColor} rounded-l-md`}
          style={{ width: `${charge}%` }}
        ></div>
        <div
          className="absolute top-0 right-0 bottom-0 left-0  rounded-md"
          style={{ clipPath: `inset(0 ${100 - charge}% 0 0)` }}
        ></div>
      </div>
      <div className="w-2 h-4 bg-gray-700 rounded-sm"></div>
      <span className="text-sm font-medium">{charge}%</span>
    </div>
  );
};

export default BatteryIndicator;
