import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem, Tooltip, CircularProgress } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/Logo.png";
import Login from "../Login/Login";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { User } from "lucide-react";
import { auth } from "../../firebase";
import { useGlobalData } from "../../Hooks/GlobalDataContext";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMode, setLoginMode] = useState("Sign In");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for authentication
  const location = useLocation();

  const { notifications } = useGlobalData();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading after auth state changes
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const openLoginModal = (mode) => {
    setLoginMode(mode);
    setShowLogin(true);
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar max-w-[100%] z-50 fixed">
      <div className="bg-[#09332d] flex justify-between items-center px-5 py-2 md:px-6 shadow-md fixed w-full">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-7" />
            <h1 className="text-[#f8dea9] text-base md:text-lg font-bold transition-transform duration-300 hover:scale-105">
              Elephant-Care
            </h1>
          </div>
        </Link>
        <ul className="hidden md:flex items-center space-x-5 text-white text-sm md:text-base">
          <li>
            <button
              className="hover:text-[#f8dea9] transition duration-300"
              onClick={() => handleScrollToSection("header")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("about-elephant")}
              className="hover:text-[#f8dea9] transition duration-300"
            >
              About Elephant
            </button>
          </li>
          <li>
            <Link
              to="/devicefeatures"
              className="hover:text-[#f8dea9] transition duration-300"
            >
              Device Features
            </Link>
          </li>
          <li>
            <button
              className="hover:text-[#f8dea9] transition duration-300"
              onClick={() => handleScrollToSection("gallery")}
            >
              Gallery
            </button>
          </li>
          <li>
            <Tooltip title="Dropdown">
              <button
                onClick={openMenu}
                className="flex items-center hover:text-[#f8dea9] transition duration-300"
              >
                All Collars
                <ArrowDropDownIcon
                  className={`transition-transform duration-300 ${
                    anchorEl ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              {user ? (
                <MenuItem
                  component={Link}
                  to="/elephanthealth"
                  onClick={closeMenu}
                >
                  Health Prediction
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    setShowLogin(true);
                    closeMenu();
                  }}
                >
                  Health Prediction
                </MenuItem>
              )}
            </Menu>
          </li>
          <li>
            <button
              className="hover:text-[#f8dea9] transition duration-300"
              onClick={() => handleScrollToSection("elephant-locations")}
            >
              Map
            </button>
          </li>
        </ul>
        <div className="flex items-center space-x-2 text-white text-sm">
          <Tooltip title="Notification">
            <Link to="/notification">
              <NotificationsNoneRoundedIcon
                className={`cursor-pointer hover:scale-110 transition duration-300 ${
                  notifications.length > 0 ? "animate-bounce" : ""
                }`}
              />
            </Link>
          </Tooltip>
          {user ? (
            <>
              <User className="hover:scale-110 transition duration-300" />
              <button
                onClick={handleLogout}
                className="hover:text-[#f8dea9] transition duration-300"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Logout"
                )}
              </button>
            </>
          ) : (
            <div className="space-x-4">
              <button
                onClick={() => openLoginModal("Sign Up")}
                className="hover:text-[#f8dea9] transition duration-300 mx-4"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Sign Up"
                )}
              </button>
              <button
                onClick={() => openLoginModal("Sign In")}
                className="hover:text-[#f8dea9] transition duration-300"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          mode={loginMode}
          setLoading={setLoading}
        />
      )}
    </nav>
  );
}

export default NavBar;
