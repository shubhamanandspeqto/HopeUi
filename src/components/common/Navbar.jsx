import React from 'react';
// import logo from "../../../public/assets/logo.png";
// import messages3 from "../Assets/messages-3.jpg";
// import messages2 from "../Assets/messages-2.jpg";
// import messages1 from "../Assets/messages-1.jpg";
// import profileImg from "../Assets/profile-img.jpg";
import '../admin/DashboardHome/DashboardHome.css'


export default function Navbar() {
    return (
        <nav className="navbar fixed-top bg-light dark-mode">
            <div className="container-fluid">
                <div className='row w-100 dark-mode'>
                <div className='col-md-2 '>
                    <a className="navbar-brand dark-mode" href="#" >
                        <img src={"/assets/logo.png"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Hope Ui
                    </a>
                    <img src={"/assets/leftArrow.png"} />
                </div>

                <div className='col-md-7'>
                    <form className="d-flex w-50" role="search">
                        <input className="form-control dark-mode me-2" type="search" placeholder="Search..." aria-label="Search" />
              
                    </form>
                </div>
                <div className='col-md-3'>
                    <img src={"/assets/flag.png"} alt="flag" />
                    <img src={"/assets/Notification.png"} alt="notification" />
                    <img src={"/assets/Message.png"} alt="message" />
                    <img src={"/assets/User.png"} alt="user" />


                </div>
                </div>
            </div>
        </nav>

    )
}