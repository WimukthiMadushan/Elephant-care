import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="bg-[#09332d] flex justify-between items-center hover:shadow-md hover:shadow-green-700 hover:transition duration-700">
        <div className="flex items-center ">
          <img src={logo} alt="logo-image" />
          <h1 className="text-[#f8dea9] text-[1.5rem] font-poppins font-semibold">
            Elephant-Care
          </h1>
        </div>
        <div className="hidden md:block pr-4">
          <ul className="flex justify-center space-x-6 text-white font-poppins text-[0.9rem]">
            <li className="group">
              <a href="/home" className="relative inline-block">
                Home
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a href="/features" className="relative inline-block">
                Device Features
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a href="/gallery" className="relative inline-block">
                Gallery
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group cursor-pointer">
              <a className="relative inline-block" onClick={handleClick}>
                All Collars
                <ArrowDropDownIcon />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose} component={Link} to="/link1">
                  Link 1
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/link2">
                  Link 2
                </MenuItem>
              </Menu>
            </li>
            <li className="group">
              <a href="/map" className="relative inline-block">
                Map
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a href="/locations" className="relative inline-block">
                Locations
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2 pr-[4rem] text-white font-poppins text-[0.9rem]">
          <button className="group relative text-white transition-all duration-300">
            <div className="flex items-center space-x-1">
              <NotificationsNoneRoundedIcon className="text-white" />
              <span class="relative top-[-0.6rem] right-2 flex h-2 w-2 rounded-full">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f8dea9] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#f8dea9]"></span>
              </span>
            </div>
          </button>
          <button className="group relative text-white py-2 px-2 rounded-md transition-all duration-700 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#f8dea9] hover:via-[#f7c16e] hover:to-[#f5a439] hover:text-white hover:delay-200">
            Sign Up
          </button>
          <button className="group relative text-white py-2 px-2 rounded-md transition-all duration-700 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#f8dea9] hover:via-[#f7c16e] hover:to-[#f5a439] hover:text-white hover:delay-200">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
