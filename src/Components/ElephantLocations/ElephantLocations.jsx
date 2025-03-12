import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const tileLayers = {
  Default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  Terrain: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
};

function ElephantLocations({ elephantLocations }) {
  const [mapType, setMapType] = useState("Default");
  const sriLankaBounds = [
    [5.91667, 79.65201],
    [9.84262, 81.88184],
  ];

  return (
    <div className="w-[90%] mx-auto pb-10 z-0">
      <h1 className="text-center text-[2rem] md:text-[2.5rem] font-bold text-[#323842] pt-[2rem] md:pt-[3rem] mb-[1.5rem]">
        Elephant Living Place in Sri Lanka
      </h1>
      <div className="flex justify-start mb-4">
        <select
          className="block w-full max-w-[12rem] px-4 py-2 text-base md:text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-blue-400 transition duration-200"
          value={mapType}
          onChange={(e) => setMapType(e.target.value)}
        >
          <option value="Default">Default Map</option>
          <option value="Terrain">Terrain Map</option>
        </select>
      </div>
      <div className="rounded-[12px] shadow-lg overflow-hidden">
        <MapContainer
          center={[7.8731, 80.7718]}
          zoom={7}
          zoomControl={false}
          scrollWheelZoom={true}
          style={{ height: "300px" }}
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
