import React from 'react'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar" >
                <div className="container-fluid">
                    <div className="row flex-nowrap ">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
                                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                                </a>
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-4 bi-house"></i> <span className="text-gray ms-1 d-none d-sm-inline">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                    <Link to={"/"} type="button" className="text-gray" style={{textDecoration: "none"}}>
                                            <i className="fas fa-plus"></i> Dashboard</Link>
                                    </li>
                                    <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="text-gray ms-1 d-none d-sm-inline">Menu Style</span> </a>
                                            <ul className="collapse hide nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-gray"> <span className="d-none d-sm-inline">Sub Menu</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Sub Menu</span></a>
                                            </li>
                                        </ul>
                                    </li>

                                    <div className='hr_line' style={{background: "#E9ECEF", border: "1px solid #E9ECEF", width:"100%"}}></div>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-gray">Pages</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-gray">Special Pages</span> </a>
                                        <ul className="collapse hide nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Special</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Special</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-gray">Authentication</span> </a>
                                        <ul className="collapse hide nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Sub Auth</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Sub Auth</span> </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-gray">Users</span> </a>
                                        <ul className="collapse hide nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray"> User Profile</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Edit User</span> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray"> User List</span> </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#submenu5" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-gray">Utilities</span> </a>
                                        <ul className="collapse hide nav flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray"> Sub Utilities 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Sub Utilities 2 </span> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray"> Sub Utilities 3</span> </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <div className='hr_line' style={{background: "#E9ECEF", border: "1px solid #E9ECEF", width:"100%"}}></div>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-gray">Elements</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#submenu6" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline text-gray">Components</span></a>
                                        <ul className="collapse nav flex-column ms-1" id="submenu6" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Item</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Item</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#submenu7" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline text-gray">Widgets</span> </a>
                                        <ul className="collapse nav flex-column ms-1" id="submenu7" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Product</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-gray">Product</span></a>
                                            </li>
                                           
                                        </ul>
                                    </li>
                                    
                                </ul>
                                <hr/>
                                    
                            </div>
                        </div>
                        {/* <div className="col py-3">
                            Content area...
                        </div> */}
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Sidebar;