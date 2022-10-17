import React from 'react'
import { Link } from 'react-router-dom'

import './BedrockSidebar.css'

export default function BedrockSidebar() {
    return (
        <aside id='menu' className='pt-3 mt-5 w-100 d-flex flex-column bedrock-sidebar'>

            <div className='d-flex flex-column gap-2'>
                <p className='py-2 bedrock-sidebar-subheading px-2'>Home</p>

                <div className='d-flex flex-column gap-2'>
                    <Link to='/dashboard/dashboard-bedrock'>
                        <div className='d-flex gap-2 align-items-center px-2'>
                            <img src="/assets/Category.png" alt="" />
                            <p>Dashboard</p>
                        </div>
                    </Link>

                    <Link to='/dashboard'>
                        <div className='d-flex gap-2 align-items-center px-2'>
                            <img src="/assets/Filter1.png" alt="" />
                            <p>Identities</p>
                        </div>
                    </Link>
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
                <p className='py-2 bedrock-sidebar-subheading px-2'>BED Standards</p>

                <div className='d-flex flex-column gap-2'>
                    <a
                        href="#BED15"
                        data-bs-toggle="collapse"
                        className="nav-link px-2 align-middle"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-2 align-items-center'>
                                <img src="/assets/File Outline Icon.png" alt="" />
                                <p> BED15 </p>
                            </div>
                            <img src="/assets/Shape.png" alt="" />
                        </div>
                    </a>

                    <ul
                        className="collapse hide nav flex-column ms-1 px-2 px-2"
                        id="BED15"
                        data-bs-parent="#menu" >
                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/upload'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2 px-2">
                                    Upload
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <a
                        href="#BED70"
                        data-bs-toggle="collapse"
                        className="nav-link px-2 align-middle px-2"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-2 align-items-center'>
                                <img src="/assets/Shield Done.png" alt="" />
                                <p> BED70 </p>
                            </div>
                            <img src="/assets/Shape.png" alt="" />
                        </div>
                    </a>

                    <ul
                        className="collapse hide nav flex-column ms-1 px-2 px-2"
                        id="BED70"
                        data-bs-parent="#menu" >
                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/proofs'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2 px-2">
                                    Issue Proof
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <a
                        href="#BED80"
                        data-bs-toggle="collapse"
                        className="nav-link px-2 align-middle"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-2 align-items-center'>
                                <img src="/assets/Fill 1.png" alt="" />
                                <p> BED80 </p>
                            </div>
                            <img src="/assets/Shape.png" alt="" />
                        </div>
                    </a>

                    <ul
                        className="collapse hide nav flex-column ms-1 px-2"
                        id="BED80"
                        data-bs-parent="#menu" >

                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/documents'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    Documents
                                </span>
                            </Link>
                        </li>

                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/shares'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    Issued Shares
                                </span>
                            </Link>
                        </li>

                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/incoming-orders'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    Pending Orders
                                </span>
                            </Link>
                        </li>

                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/order'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    Orders Accepted
                                </span>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <a
                        href="#BED100"
                        data-bs-toggle="collapse"
                        className="nav-link px-2 align-middle"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-2 align-items-center'>
                                <img src="/assets/Ticket Star(bed-rock).png" alt="" />
                                <p> BED100 </p>
                            </div>
                            <img src="/assets/Shape.png" alt="" />
                        </div>
                    </a>

                    <ul
                        className="collapse hide nav flex-column ms-1 px-2"
                        id="BED100"
                        data-bs-parent="#menu" >
                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/package'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    Packages
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <p className='py-2 bedrock-sidebar-subheading px-2'>Coming Soon</p>

                    <a
                        href="#BedrockAI"
                        data-bs-toggle="collapse"
                        className="nav-link px-2 align-middle"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-2 align-items-center'>
                                <img src="/assets/Bedrock(coming-soon).png" alt="" />
                                <p> Bedrock A.I </p>
                            </div>
                            <img src="/assets/Shape.png" alt="" />
                        </div>
                    </a>

                    <ul
                        className="collapse hide nav flex-column ms-1 px-2"
                        id="BedrockAI"
                        data-bs-parent="#menu" >
                        <li className="w-100 d-flex">
                            <Link to={'/dashboard/Ai'} className="nav-link px-0 w-100">
                                <span className="d-none d-sm-inline text-gray px-2">
                                    BedRock AI
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>

        </aside>
    )
}
