import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Notification from "../Notification";

const Layout = () => {
  return (
    <>
      <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
