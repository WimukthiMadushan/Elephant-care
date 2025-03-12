import React from "react";
import Header_img from "./../../assets/Header.png";
import { ReactTyped } from "react-typed";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { auth } from "./../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../Login/Login";

function Header() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMode, setLoginMode] = useState("login");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src={Header_img}
          alt="header-image"
          className="w-full h-[100vh] object-cover md:object-cover lg:object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent opacity-65"></div>

        <div className="absolute top-[70%] left-4 transform -translate-y-1/2 z-10 font-poppins ml-4 md:ml-7">
          <p className="text-white text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-semibold leading-tight">
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
            className="text-white text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-semibold leading-tight"
          />
        </div>

        {/* Button */}
        <div className="absolute top-[80%] left-4 ml-4 md:ml-7">
          <Tooltip title="Explore Elephant's Health">
            <button
              onClick={() => {
                if (user) {
                  window.location.href = "/elephanthealth"; // Navigate if logged in
                } else {
                  setShowLogin(true); // Open login popup if not logged in
                }
              }}
              className="bg-transparent border-[1px] border-green-500 text-green-500 px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl font-semibold rounded-full transform hover:text-white hover:scale-105 transition-all"
            >
              Explore Health
            </button>
          </Tooltip>
        </div>
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} mode={loginMode} />}
    </>
  );
}

export default Header;
