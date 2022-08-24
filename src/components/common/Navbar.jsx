import React from 'react';
import '../admin/DashboardHome/DashboardHome.css'


export default function Navbar() {
    return (
        <nav className="navbar fixed-top bg-light dark-mode">
            <div className="container-fluid">
                <div className='row w-100 dark-mode'>
                    <div className='col-md-2 d-flex justify-content-between align-items-center'>
                        <a className="navbar-brand dark-mode" href="#" >
                            Bedrock
                        </a>
                        <img src={"/assets/leftArrow.png"} />
                    </div>

                    <div className='col-md-6 d-flex align-items-center'>
                        <form className="d-flex w-50" role="search">
                            <input className="form-control dark-mode me-2" type="search" placeholder="Search..." aria-label="Search" />

                        </form>
                    </div>
                    <div className='col-md-4 d-flex align-items-center gap-2'>
                        <img src={"/assets/flag.png"} alt="flag" />
                        <img src={"/assets/Notification.png"} alt="notification" />
                        <img src={"/assets/Message.png"} alt="message" />
                        <img src={"/assets/Navbar-user.png"} alt="user" />
                        <div className="user-profile d-flex flex-column">
                            <h5 className='p-0 m-0'>Admin - User</h5>
                            <p className=""
                                style={{ color: "#8a92a6" }}
                            >Marketing Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}