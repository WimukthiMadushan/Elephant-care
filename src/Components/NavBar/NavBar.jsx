import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/Logo.png";
import Login from "../Login/Login";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { User } from "lucide-react";
import { auth } from "../../firebase";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMode, setLoginMode] = useState("Sign In");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New message from John",
      isRead: false,
      route: "/notification",
    },
    { id: 2, message: "Meeting at 3 PM", isRead: true, route: "/notification" },
    {
      id: 3,
      message: "System update available",
      isRead: false,
      route: "/notification",
    },
  ]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        position: "bottom-right",
        theme: "colored",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const open = Boolean(anchorEl);
  const unreadNotifications = notifications.filter((notif) => !notif.isRead);

  const togglePopup = () => setIsPopupVisible((prev) => !prev);

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const openLoginModal = (mode) => {
    setLoginMode(mode);
    setShowLogin(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar max-w-[100%] overflow-y-hidden">
      <div className="bg-[#09332d] flex justify-between items-center px-4 py-3 md:px-8 hover:shadow-sm hover:shadow-green-600 hover:transition duration-700 z-20 fixed w-[100vw]">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-8" />
          <h1 className="text-[#f8dea9] text-lg md:text-[1.5rem] font-poppins font-semibold">
            Elephant-Care
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex md:items-center md:space-x-6 text-white font-poppins text-sm md:text-[0.9rem]">
          <li className="group">
            <button
              onClick={() => scrollToSection("header")}
              className="relative inline-block"
            >
              Home
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li className="group">
            <a href="/devicefeatures" className="relative inline-block">
              Device Features
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="group">
            <button
              onClick={() => scrollToSection("gallery")}
              className="relative inline-block"
            >
              Gallery
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li
            className="group cursor-pointer relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <Tooltip title="Dropdown">
              <a className="relative inline-block">
                All Collars
                <ArrowDropDownIcon
                  className={`transition-transform duration-500 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300"></span>
              </a>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              MenuListProps={{
                onMouseEnter: () => setAnchorEl(anchorEl),
                onMouseLeave: closeMenu,
              }}
            >
              <MenuItem
                component={Link}
                to="/elephanthealth"
                onClick={closeMenu}
              >
                Health Prediction
              </MenuItem>
              <MenuItem component={Link} to="/link2" onClick={closeMenu}>
                Accident Prediction
              </MenuItem>
            </Menu>
          </li>

          <li className="group">
            <button
              onClick={() => scrollToSection("elephant-locations")}
              className="relative inline-block"
            >
              Map
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-3 text-white font-poppins text-sm md:text-[0.9rem]">
          <Tooltip title="Notification">
            <NotificationsNoneRoundedIcon
              className="text-white cursor-pointer"
              onClick={togglePopup}
            />
          </Tooltip>
          {isPopupVisible && (
            <NotificationPopup
              notifications={unreadNotifications}
              onNotificationClick={markNotificationAsRead}
            />
          )}
          <span className="relative top-[-0.6rem] right-3 flex h-2 w-2 rounded-full">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f8dea9] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f8dea9]"></span>
          </span>
          {user ? (
            <>
              <User />
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button
                className="py-2 px-3 rounded-md hover:scale-105 transform transition duration-300"
                onClick={() => openLoginModal("Sign Up")}
              >
                Sign Up
              </button>
              <button
                className="py-2 px-3 rounded-md hover:scale-105 transform transition duration-300"
                onClick={() => openLoginModal("Sign In")}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} mode={loginMode} />}
    </nav>
  );
}

export default NavBar;
