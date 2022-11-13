import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
