import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const elephantLocations = [
  { lat: 6.8743, lng: 80.7602, name: "Udawalawe National Park, Sri Lanka" },
  { lat: 7.847, lng: 81.0174, name: "Minneriya National Park, Sri Lanka" },
  { lat: 6.8333, lng: 81.5333, name: "Lunugamvehera National Park, Sri Lanka" },
  { lat: 8.3567, lng: 80.4111, name: "Kaudulla National Park, Sri Lanka" },
  { lat: 7.9278, lng: 81.002, name: "Hurulu Eco Park, Sri Lanka" },
  { lat: 6.3402, lng: 81.4788, name: "Yala National Park, Sri Lanka" },
];

function ElephantLocations() {
  return (
    <div className="w-[90%] mx-auto pb-10 ">
      <h1 className="text-center text-[3rem] font-bold text-[#323842] pt-[5rem] mb-[2rem]">
        Elephant Living Places in Sri Lanka
      </h1>
      <MapContainer
        center={[7.8731, 80.7718]}
        zoom={7}
        style={{
          height: "500px",
          width: "100%",
          zIndex: "0",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {elephantLocations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup className="">{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ElephantLocations;
