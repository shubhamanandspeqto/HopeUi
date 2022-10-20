import React from "react";
import '../admin/DashboardHome/DashboardHome.css'

export default function Footer() {
  return (
    <>
      <footer
        className="d-flex dark-mode flex-row justify-content-between text-center text-black p-2"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="text-initial d-flex flex-row mx-2 gap-3">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </footer>
    </>
  );
}
