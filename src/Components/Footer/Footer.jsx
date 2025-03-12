import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <footer className="bg-[#09332d] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 text-left mb-6 md:mb-0">
            <img src={logo} alt="logo" className="mb-4 max-w-[120px]" />
            <p className="text-sm md:text-md text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-md font-semibold text-[#d46429] mb-4">
              Contact Us
            </h3>

            <p className="text-sm hover:text-gray-300 transition-colors cursor-pointer mb-2">
              <LocalPhoneIcon /> Phone: +1 234 567 8900
            </p>
            <p className="text-sm hover:text-gray-300 transition-colors cursor-pointer mb-2">
              <LocalPhoneIcon /> Phone: +1 234 567 8901
            </p>
            <p className="text-sm hover:text-gray-300 transition-colors cursor-pointer mb-2">
              <LocationOnIcon /> 123 Main Street, City, Country
            </p>
            <p className="text-sm hover:text-gray-300 transition-colors cursor-pointer">
              <EmailIcon /> Email: info@example.com
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-md font-semibold text-[#d46429] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-md font-semibold text-[#d46429] mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d46429]"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#d46429] text-white rounded-md hover:bg-[#b35528]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0e4a42] text-center py-6 text-sm">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
