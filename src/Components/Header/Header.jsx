import React from "react";
import Header_img from "./../../assets/Header.png";
import { ReactTyped } from "react-typed";
import { Tooltip } from "@mui/material";

function Header() {
  return (
    <div className="relative">
      <img
        src={Header_img}
        alt="header-image"
        className="w-full h-[100vh] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent opacity-65"></div>
      <div className="absolute top-2/3 left-4 transform -translate-y-1/2 z-10 font-poppins ml-7">
        <p className="text-white text-[3.5rem] font-semibold">
          Protect Elephant is
        </p>
        <ReactTyped
          strings={["Our Responsibility.."]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1000}
          startDelay={500}
          loop={true}
          showCursor={true}
          className="text-white text-[3.5rem] font-semibold"
        />
      </div>
      <div className="absolute top-[80%] left-4 ml-7">
        <Tooltip title="Explore Elephant's Health">
          <button className=" bg-transparent border-[1px] border-green-500 text-green-500 px-8 py-3 text-xl font-semibold rounded-full transform  hover:text-white hover:scale-104 transition-all">
            Explore Health
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
