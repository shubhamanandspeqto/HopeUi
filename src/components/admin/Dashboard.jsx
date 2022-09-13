import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import BedRock_Sidebar from "../common/BedRock_Sidebar";
import Iconly from "../common/Iconly";
import { useContext } from "react";
import { UserContext } from "../../ContextAPI/Context";
import BedrockSidebar from "../common/BedrockSidebar";

export default function Dashboard() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="d-flex flex-column">
      <Navbar />
      <div className="d-flex w-100 dark-mode">
        <div className="" style={{ width: "20%" }}>
          {
            location.pathname === '/dashboard/bedrock' || location.pathname === '/dashboard/upload' || location.pathname === '/dashboardAi' || location.pathname === '/dashboard/documents' || location.pathname === '/dashboard/proofs' || location.pathname === '/dashboard/shares' || location.pathname === '/dashboard/incoming-orders' || location.pathname === '/dashboard/order' || location.pathname === '/dashboard/package' || location.pathname === '/dashboard/Ai' ? <BedrockSidebar /> : <Sidebar />
          }
          {/* <Sidebar /> */}
          {/* <BedRock_Sidebar/> */}
        </div>
        <div
          className="w-100"
          style={{
            width: "80%",
            marginTop: "57px",
            backgroundColor: "#E5E5E5",
          }}
        >
          {/* <img style={{width:"100%"}} src={"/assets/Outlet.jpeg"} /> */}
          <Iconly />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
