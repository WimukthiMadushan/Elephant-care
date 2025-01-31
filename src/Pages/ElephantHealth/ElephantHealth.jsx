import React from "react";
import DeviceTable from "../../Components/DeviceTable/DeviceTable";

function ElephantHealth() {
  const numberOfDevices = [
    {
      live: true,
      beltNo: "IRI2024-002",
      status: "",
      isOn: true,
      Heart_Beat: 37.7,
      Body_Temperature: 39.8,
      Blood_Oxygen: 99.4,
      Status: "Normal",
      Time: "15 hours ago",
      Date: "2024-11-28",
      Battery: 25,
    },
    {
      live: true,
      beltNo: "IRI2024-003",
      status: "",
      isOn: false,
      Heart_Beat: 40.2,
      Body_Temperature: 38.5,
      Blood_Oxygen: 98.8,
      Status: "Normal",
      Time: "12 hours ago",
      Date: "2024-11-27",
      Battery: 50,
    },
    {
      live: true,
      beltNo: "IRI2024-004",
      status: "",
      isOn: true,
      Heart_Beat: 36.5,
      Body_Temperature: 37.2,
      Blood_Oxygen: 96.4,
      Status: "Critical",
      Time: "8 hours ago",
      Date: "2024-11-28",
      Battery: 80,
    },
    {
      live: true,
      beltNo: "IRI2024-005",
      status: "",
      isOn: true,
      Heart_Beat: 35.9,
      Body_Temperature: 36.7,
      Blood_Oxygen: 95.2,
      Status: "Normal",
      Time: "2 hours ago",
      Date: "2024-11-28",
      Battery: 60,
    },
    {
      live: false,
      beltNo: "IRI2024-006",
      status: "",
      isOn: false,
      Heart_Beat: 38.0,
      Body_Temperature: 39.0,
      Blood_Oxygen: 97.5,
      Status: "Normal",
      Time: "20 hours ago",
      Date: "2024-11-26",
      Battery: 15,
    },
  ];

  return (
    <div className="pt-[8rem] bg-gray-100">
      <h1 className="text-center text-[3rem] font-bold text-[#d46429]">
        Elephant Healthy Analysis
      </h1>
      <div className="min-h-screen flex items-center justify-center flex-col p-4 gap-4">
        {numberOfDevices.map((device, index) => (
          <DeviceTable key={index} device={device} />
        ))}
      </div>
    </div>
  );
}

export default ElephantHealth;
