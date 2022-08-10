import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

export default function Dashboard() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <div className="d-flex w-100">
        <div className="" style={{ width: "20%" }}>
          <Sidebar />
        </div>
        <div className="w-100" style={{ width: "80%", marginTop: "57px" }}>
          {/* <img style={{width:"100%"}} src={"/assets/Outlet.jpeg"} /> */}
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
