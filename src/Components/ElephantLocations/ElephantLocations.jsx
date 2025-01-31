import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const tileLayers = {
  Default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  Terrain: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  Hybrid:
    "https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=YOUR_API_KEY",
};

function ElephantLocations({ elephantLocations }) {
  const [mapType, setMapType] = useState("Default");

  // Define the bounding box for Sri Lanka
  const sriLankaBounds = [
    [5.91667, 79.65201], // Southwest corner of Sri Lanka
    [9.84262, 81.88184], // Northeast corner of Sri Lanka
  ];

  return (
    <div className="w-[90%] mx-auto pb-10">
      <h1 className="text-center text-[2rem] md:text-[2.5rem] font-bold text-[#323842] pt-[2rem] md:pt-[3rem] mb-[1.5rem]">
        Elephant Living Places in Sri Lanka
      </h1>
      <div className="flex justify-center mb-4">
        <select
          className="block w-full max-w-[12rem] px-4 py-2 text-base md:text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-blue-400 transition duration-200"
          value={mapType}
          onChange={(e) => setMapType(e.target.value)}
        >
          <option value="Default">Default Map</option>
          <option value="Terrain">Terrain Map</option>
          <option value="Hybrid">Hybrid Map</option>
        </select>
      </div>
      <div
        className="rounded-[12px] shadow-lg overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <MapContainer
          center={[7.8731, 80.7718]}
          zoom={7}
          maxBounds={sriLankaBounds}
          maxBoundsViscosity={1.0}
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full"
        >
          <TileLayer
            url={tileLayers[mapType]}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {elephantLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default ElephantLocations;
