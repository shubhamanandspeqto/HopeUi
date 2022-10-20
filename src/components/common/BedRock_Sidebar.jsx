import React from "react";
import { Link } from "react-router-dom";
//import "../common/BedRock_sidebar.css"


// Not in Use

export default function BedRock_Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <div className="container-fluid">
          <div className="row flex-nowrap ">
            <div className="col-auto bg-white">
              <div className="d-flex flex-column align-items-center  text-white min-vh-100 ">
                <a
                  href="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="text-gray ms-1 d-none d-sm-inline">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard"}
                      type="button"
                      className="text-gray"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="d-flex justify-content-around">
                        <img src="/assets/Category.png" alt="" />
                        <p>Dashboard</p>

                      </div>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justiy-content-between">
                        <img src="/assets/Filter1.png" alt="" />
                        <p>Identities</p>
                      </div>
                    </a>
                  </li>
                  <div
                    className="hr_line"
                    style={{
                      background: "#E9ECEF",
                      border: "1px solid #E9ECEF",
                      width: "100%",
                    }}
                  ></div>

                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-gray">
                        BED Standards
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subject1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <img src="/assets/File Outline Icon.png" alt="" />
                        <p> BED15 </p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="subject1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to={'/dashboard/upload'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Upload
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <a
                      href="#subject2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >

                      <div className="d-flex justify-content-between align-items-center">
                        <img src="/assets/Shield Done.png" alt="" />
                        <p> BED70 </p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="subject2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to={'/dashboard/proofs'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Issue Proof
                          </span>
                        </Link>
                      </li>
                    </ul>


                    <a
                      href="#subject3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >

                      <div className="d-flex justify-content-between align-items-center">
                        <img src="/assets/Fill 1.png" alt="" />
                        <p> BED80 </p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="subject3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to={'/dashboard/documents'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Documents
                          </span>
                        </Link>
                      </li>

                      <li className="w-100">
                        <Link to={'/dashboard/shares'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Issued Shares
                          </span>
                        </Link>
                      </li>

                      <li className="w-100">
                        <Link to={'/dashboard/incoming-orders'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Incoming Orders
                          </span>
                        </Link>
                      </li>

                      <li className="w-100">
                        <Link to={'/dashboard/order'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Orders Accepted
                          </span>
                        </Link>
                      </li>
                    </ul>

                    <a
                      href="#subject4"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >

                      <div className="d-flex justify-content-between align-items-center">
                        <img src="/assets/Ticket Star(bed-rock).png" alt="" />
                        <p> BED100 </p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>

                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="subject4"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to={'/dashboard/package'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Packages
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <a
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}

                      <div className="d-flex justify-content-around">
                        <img src="/assets/ Bedrock(coming-soon).png" alt="" />
                        <p> Coming Soon </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subject5"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >

                      <div className="d-flex justify-content-between align-items-center">
                        <img src="/assets/Bedrock(coming-soon).png" alt="" />
                        <p> Bedrock A.I.</p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="subject5"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to={'/dashboard/Ai'} className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            BedRock AI
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr />
              </div>


            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
