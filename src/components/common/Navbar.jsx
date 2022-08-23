import React from 'react';
import '../admin/DashboardHome/DashboardHome.css'


export default function Navbar() {
    return (
        <nav className="navbar fixed-top bg-light dark-mode">
            <div className="container-fluid">
                <div className='row w-100 extra-dark'>
                <div className='col-md-2 '>
                    <a className="navbar-brand dark-mode" href="#" >
                        <img src={"/assets/logo.png"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Hope Ui
                    </a>
                    <img src={"/assets/leftArrow.png"} />
                </div>

                <div className='col-md-6'>
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
                      <h5 className='p-0 m-0'>Austin Robertson</h5> 
                      <p className=""
                      style={{color:"#8a92a6"}}
                      >Marketing Administrator</p>
                        </div>
                </div>
                </div>
            </div>
        </nav>

    )
}