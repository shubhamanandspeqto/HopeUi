import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const changeDirection = () => {
    let element = document.getElementById('root')
    element.setAttribute('dir', "rtl")
  }

  return (
    <>
      <aside id='menu' className='pt-3 mt-5 w-100 d-flex flex-column bedrock-sidebar'>

        <div className='d-flex flex-column gap-2'>
          <p className='py-2 bedrock-sidebar-subheading px-2'>Home</p>

          <div className='d-flex flex-column gap-2'>
            <Link to='/dashboard'>
              <div className='d-flex gap-2 align-items-center px-2'>
                <img src="/assets/Category.png" alt="" />
                <p>Dashboard</p>
              </div>
            </Link>

            <div className='d-flex flex-column gap-2'>
              <a
                href="#menuStyle"
                data-bs-toggle="collapse"
                className="nav-link px-2 align-middle"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className='d-flex gap-2 align-items-center'>
                    <img src="/assets/Filter1.png" alt="" />
                    <p> Menu Style </p>
                  </div>
                  <img src="/assets/Shape.png" alt="" />
                </div>
              </a>

              <ul
                className="collapse hide nav flex-column ms-1 px-2 px-2"
                id="menuStyle"
                data-bs-parent="#menu" >
                <li className="w-100 d-flex">
                  <Link to={'/dashboard/upload'} className="nav-link px-0 w-100">
                    <span className="d-none d-sm-inline text-gray px-2 px-2">
                      Menu Style
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div
          className="hr_line my-3"
          style={{
            background: "#E9ECEF",
            border: "1px solid #E9ECEF",
            width: "100%",
          }}
        ></div>

        <div className='d-flex flex-column gap-2'>
          <p className='py-2 bedrock-sidebar-subheading px-2'>Pages</p>

          <div className='d-flex flex-column gap-2'>
            <a
              href="#specialPages"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Game.png" alt="" />
                  <p> Special Pages </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2 px-2"
              id="specialPages"
              data-bs-parent="#menu" >

              <li className="w-100 d-flex">
                <Link to={'/dashboard/billing'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Billing
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/dashboard/calender'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Calender
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/dashboard/kanban'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Kanban
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <a href="#" onClick={() => { changeDirection() }} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    RTL Support
                  </span>
                </a>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/dashboard/timeline'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Timeline
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/dashboard/pricing'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Pricing
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex flex-column gap-2'>
            <a
              href="#widgets"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle px-2"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Ticket Star.png" alt="" />
                  <p> Widgets </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2 px-2"
              id="widgets"
              data-bs-parent="#menu" >

              <li className="w-100 d-flex">
                <Link to={'/dashboard/widget-basic'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Widgets Basic
                  </span>
                </Link>
              </li>


              <li className="w-100 d-flex">
                <Link to={'/dashboard/widget-chart'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Widgets Chart
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/dashboard/widgetCard'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2 px-2">
                    Widgets Card
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex flex-column gap-2'>
            <a
              href="#Maps"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Location.png" alt="" />
                  <p> Maps </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="Maps"
              data-bs-parent="#menu" >

              <li className="w-100 d-flex">
                <Link to={'/dashboard/map'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Maps
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex flex-column gap-2'>
            <a
              href="#authentication"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Shield Done.png" alt="" />
                  <p> Authentication </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="authentication"
              data-bs-parent="#menu" >

              <li className="w-100 d-flex">
                <Link to={'/'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Login
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/sign-up'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    SignUp
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/signed-up'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    After Registration
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/lock-screen'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Lock Screen
                  </span>
                </Link>
              </li>

              <li className="w-100 d-flex">
                <Link to={'/reset-password'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Reset Password
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex flex-column gap-2'>
            <a
              href="#bedrock"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/3Users.png" alt="" />
                  <p> Bedrock </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="bedrock"
              data-bs-parent="#menu" >

              <li className="w-100 d-flex">
                <Link to={'/dashboard/bedrock'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    User Profile
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex flex-column gap-2'>

            <Link to='/errorPage'>
              <div className='d-flex gap-2 align-items-center px-2'>
                <img src="/assets/Info Circle.png" alt="" />
                <p>Error 404</p>
              </div>
            </Link>

            <Link to='/error'>
              <div className='d-flex gap-2 align-items-center px-2'>
                <img src="/assets/Danger.png" alt="" />
                <p>Error 505</p>
              </div>
            </Link>

            <Link to='/maintenance1'>
              <div className='d-flex gap-2 align-items-center px-2'>
                <img src="/assets/Bookmark.png" alt="" />
                <p>Maintenance</p>
              </div>
            </Link>

          </div>

          <div
            className="hr_line my-3"
            style={{
              background: "#E9ECEF",
              border: "1px solid #E9ECEF",
              width: "100%",
            }}
          ></div>

          <div className='d-flex flex-column gap-2'>
            <p className='py-2 bedrock-sidebar-subheading px-2'>Elements</p>

            <a
              href="#components"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Game.png" alt="" />
                  <p> Components </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="components"
              data-bs-parent="#menu" >
              <li className="w-100 d-flex">
                <Link to={'/dashboard'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Components
                  </span>
                </Link>
              </li>
            </ul>


            <a
              href="#form"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Document.png" alt="" />
                  <p> Form </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="form"
              data-bs-parent="#menu" >
              <li className="w-100 d-flex">
                <Link to={'/dashboard'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Form
                  </span>
                </Link>
              </li>
            </ul>


            <a
              href="#table"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/Setting.png" alt="" />
                  <p> Table </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="table"
              data-bs-parent="#menu" >
              <li className="w-100 d-flex">
                <Link to={'/dashboard'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Table
                  </span>
                </Link>
              </li>
            </ul>


            <a
              href="#icons"
              data-bs-toggle="collapse"
              className="nav-link px-2 align-middle"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                  <img src="/assets/icon.png" alt="" />
                  <p> Icons </p>
                </div>
                <img src="/assets/Shape.png" alt="" />
              </div>
            </a>

            <ul
              className="collapse hide nav flex-column ms-1 px-2"
              id="icons"
              data-bs-parent="#menu" >
              <li className="w-100 d-flex">
                <Link to={'/dashboard'} className="nav-link px-0 w-100">
                  <span className="d-none d-sm-inline text-gray px-2">
                    Icons
                  </span>
                </Link>
              </li>
            </ul>


          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
