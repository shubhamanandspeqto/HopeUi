import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
                      <div className="d-flex justify-content-between algn-items-center">
                        <img src="/assets/Filter1.png" alt="" />
                        <p>MenuStyle</p>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <div className="d-flex justify-content-between algn-items-center">
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
                        Pages
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu9"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2">
                        <img src="/assets/Game.png" alt="" />
                        <p> Example </p>
                        </div>
                       
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu9"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>{" "}
                        </a>
                      </li>
                    </ul>

                    <a
                      href="#submenu8"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div className="d-flex gap-2">
                        <img src="/assets/Ticket Star.png" alt="" />
                        <p> Widgets </p>
                        </div>
                      
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu8"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>{" "}
                        </a>
                      </li>
                    </ul>

                    <a
                      href="#submenu7"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div className="d-flex gap-2">
                        <img src="/assets/Location.png" alt="" />
                        <p> Maps </p>
                        </div>
                      
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu7"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>{" "}
                        </a>
                      </li>
                    </ul>

                    <a
                      href="#submenu6"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div className="d-flex gap-2">
                        <img src="/assets/Shield Done.png" alt="" />
                        <p> Authentication </p>
                        </div>
                       
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu6"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>{" "}
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                    
                      <div className="d-flex justify-content-between align-items-center gap-5">
                     <div className="d-flex gap-2">
                     <img src="/assets/3Users.png" alt="" />
                        <p>Users</p>
                     </div>
                        <img src="/assets/Shape.png" alt="" />
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
                      <div className="d-flex">
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
                      <div className="d-flex justify-content-center align-items-center gap-5">
                        <div className="d-flex gap-2">
                          <img src="/assets/Info Circle.png" alt="" />
                          <p> Error 404 </p>
                        </div>
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Auth
                          </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu4"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-center align-items-center  gap-5">
                        <div className="d-flex gap-2">
                        <img src="/assets/Danger.png" alt="" />
                        <p> Error 505 </p>
                        </div>
                       
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu4"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            User Profile
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Edit User
                          </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            User List
                          </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu5"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      {/* <span className="ms-1 d-none d-sm-inline text-gray">
                        Maintence
                      </span>{" "} */}
                      <div className="d-flex justify-content-center align-items-center gap-5">
                        <div className="d-flex gap 2">
                        <img src="/assets/Bookmark.png" alt="" />
                        <p> Maintence </p>
                        </div>
                       
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse hide nav flex-column ms-1"
                      id="submenu5"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Sub Utilities 1
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Sub Utilities 2{" "}
                          </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            {" "}
                            Sub Utilities 3
                          </span>{" "}
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
                        Elements
                      </span>
                      {/* <div className="d-flex">
                        <img src="/assets/Category.png" alt="" />
                        <p> Elements </p>
                      </div> */}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#submenu6"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                    >
                      <i className="fs-4 bi-bootstrap"></i>{" "}
                      {/* <span className="ms-1 d-none d-sm-inline text-gray">
                        Components
                      </span> */}
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div className="d-flex gap-2">
                        <img src="/assets/Game.png" alt="" />
                        <p> Components </p>
                        </div>
                      
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu6"
                      data-bs-parent="#menu"
                    >
                      {/* <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Form
                          </span>
                        </a> */}

                      <div className="d-flex">
                        <img src="/assets/Document.png" alt="" />
                        <p> Form </p>
                      </div>

                      <li>
                        <div className="d-flex justify-content-between algn-items-center">
                          <img src="/assets/Setting.png" alt="" />
                          <p> Icons </p>
                          <img src="/assets/Shape.png" alt="" />
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu7"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <div className="d-flex justify-content-between  align-items-center">
                        <div className="d-flex gap-2">
                        <img src="/assets/icon.png" alt="" />
                        <p> Icons </p>
                        </div>
                        
                        <img src="/assets/Shape.png" alt="" />
                      </div>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu7"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Product
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline text-gray">
                            Product
                          </span>
                        </a>
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
};

export default Sidebar;
