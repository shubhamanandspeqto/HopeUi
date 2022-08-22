import React from "react";
import { Link } from "react-router-dom";

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
                      to={"/"}
                      type="button"
                      className="text-gray"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="d-flex">
                        <img src="/assets/Category.png" alt="" />
                        <p>Dashboard</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex">
                        <img src="/assets/Filter1.png" alt="" />
                        <p>MenuStyle</p>
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <div className="d-flex">
                        <img src="/assets/Game.png" alt="" />
                        <p> Example</p>
                      </div>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Menu
                          </span>
                        </a>
                      </li>
                    </ul>
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
                      href="#submenu5"
                      data-bs-toggle="collapse1"
                      className="nav-link px-0 align-middle"
                    >
                      {/* <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-gray">
                      Example
                      </span>{" "} */}
                      <div className="d-flex justify-content-around">
                        <img src="/assets/File Outline Icon.png" alt="" />
                        <p> BED15 </p>
                      </div>
                    </a>

                    <a
                      href="#submenu5"
                      data-bs-toggle="collapse2"
                      className="nav-link px-0 align-middle"
                    >
                      {/* <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-gray">
                      Widgets
                      </span>{" "} */}

                      <div className="d-flex justify-content-around">
                        <img src="/assets/Shield Done.png" alt="" />
                        <p> BED70 </p>
                      </div>
                    </a>

                    <a
                      href="#submenu5"
                      data-bs-toggle="collapse3"
                      className="nav-link px-0 align-middle"
                    >
                   
                      <div className="d-flex justify-content-around">
                        <img src="/assets/Fill 1.png" alt="" />
                        <p> BED80 </p>
                      </div>
                    </a>

                    <a
                      href="#submenu5"
                      data-bs-toggle="collapse4"
                      className="nav-link px-0 align-middle"
                    >
                      
                      <div className="d-flex justify-content">
                        <img src="/assets/Ticket Star(bed-rock).png" alt="" />
                        <p> BED100 </p>
                      </div>
                    </a>
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
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Widgets
                          </span>
                        </a>
                      </li>
                      <div className="d-flex justify-content-around">
                        <img src="/assets/Category.png" alt="" />
                        <p> maps</p>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                     
                      <div className="d-flex justify-content-around">
                        <img src="/assets/Bedrock(coming-soon).png" alt="" />
                        <p> Bedrock A.I.</p>
                      </div>
                    </a>
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
