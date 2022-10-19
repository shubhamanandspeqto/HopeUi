import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Navbar.css'
import '../admin/DashboardHome/DashboardHome.css'

import { HiOutlineUser } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
import { UserContext } from '../../ContextAPI/Context';
import { useContext } from 'react';
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Navbar() {

    const [username, setUsername] = useState("Sumit");
    const [userImage, setUserImage] = useState("");

    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    let userDetails = useContext(UserContext)
    const { logoutFunction, torus } = userDetails

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    console.log(userDetails, userInfo);

    useEffect(() => {
        if (!userInfo) {
            alert("Please Login")
            navigate('/')
        } else {
            setUsername(userInfo?.name)
            setUserImage(userInfo?.profileImage)
        }
    }, [userInfo])


    return (
        <>
            {
                userInfo &&
                <nav className="navbar fixed-top bg-light dark-mode">
                    <div className="container-fluid">
                        <div className='row w-100 dark-mode'>
                            <div className='col-md-2 d-flex justify-content-between align-items-center'>
                                <a className="navbar-brand dark-mode" href="#" >
                                    Bedrock
                                </a>
                                <img onClick={goBack} className='navbar-back-button' src={"/assets/leftArrow.png"} />
                            </div>

                            <div className='col-md-6 d-flex align-items-center'>
                                <form className="d-flex w-50" role="search">
                                    <input className="form-control dark-mode me-2" type="search" placeholder="Search..." aria-label="Search" />

                                </form>
                            </div>
                            <div className='col-md-4 d-flex align-items-center gap-2 justify-content-end'>
                                {/* <img src={"/assets/flag.png"} alt="flag" /> */}
                                <img src={"/assets/Notification.png"} alt="notification" />
                                {/* <img src={"/assets/Message.png"} alt="message" /> */}
                                {/* <img src={"/assets/Navbar-user.png"} alt="user" /> */}
                                {/* <div className="user-profile d-flex flex-column">
                            <h5 className='p-0 m-0'>{username}</h5>
                            <p className=""
                                style={{ color: "#8a92a6" }}
                            >Marketing Administrator</p>
                        </div> */}
                                <div className="btn-group">
                                    <Dropdown align="end" >
                                        <Dropdown.Toggle className="d-flex align-items-center gap-2 navbar-button" id="dropdown-basic">
                                            {
                                                userImage ?
                                                    <img className='navbar-user-image' src={userImage} alt="user" /> :
                                                    <p className='navbar-user-text'>{username.slice(0, 2).toUpperCase()}</p>
                                            }
                                            <h5 className='p-0 m-0'>{username}</h5>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <p className='p-2 d-flex align-items-center gap-2'>
                                                    <HiOutlineUser />
                                                    <span>My Profile</span>
                                                </p>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <p data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    className='p-2 d-flex align-items-center gap-2'>
                                                    <FiSettings />
                                                    <span>Settings</span>
                                                </p>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <p onClick={() => { logoutFunction(torus) }} className='p-2 d-flex align-items-center gap-2'>
                                                    <FiLogOut />
                                                    <span>Logout</span>
                                                </p>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* <div className="dropdown-toggle d-flex align-items-center gap-2 navbar-button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            userImage ?
                                                <img className='navbar-user-image' src={userImage} alt="user" /> :
                                                <p className='navbar-user-text'>{username.slice(0, 2).toUpperCase()}</p>
                                        }
                                        <h5 className='p-0 m-0'>{username}</h5>
                                    </div> */}
                                    {/* <ul className="dropdown-menu dropdown-menu-end navbar-button-menu m-0 p-0">
                                        <li>
                                            <p className='p-2 d-flex align-items-center gap-2'>
                                                <HiOutlineUser />
                                                <span>My Profile</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                className='p-2 d-flex align-items-center gap-2'>
                                                <FiSettings />
                                                <span>Settings</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p onClick={() => { logoutFunction(torus) }} className='p-2 d-flex align-items-center gap-2'>
                                                <FiLogOut />
                                                <span>Logout</span>
                                            </p>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </>

    )
}