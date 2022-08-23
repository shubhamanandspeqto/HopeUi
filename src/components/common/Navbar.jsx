import React from 'react';



export default function Navbar() {
    return (
        <nav className="navbar fixed-top bg-light">
            <div className="container-fluid">
                <div className='row w-100'>
                <div className='col-md-2'>
                    <a className="navbar-brand" href="#">
                        <img src={"/assets/logo.png"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Hope Ui
                    </a>
                    <img src={"/assets/leftArrow.png"} />
                </div>

                <div className='col-md-7'>
                    <form className="d-flex w-50" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
              
                    </form>
                </div>
                <div className='col-md-3 d-flex align-items-center gap-2'>
                    <img src={"/assets/flag.png"} alt="flag" />
                    <img src={"/assets/Notification.png"} alt="notification" />
                    <img src={"/assets/Message.png"} alt="message" />
                    <img src={"/assets/Navbar-user.png"} alt="user" />
                    <div className="user-profile">
                      <h5>Austin Robertson</h5> 
                      <p className="d-flex text-grey">Marketing Administrator</p>
                        </div>
                </div>
                </div>
            </div>
        </nav>

    )
}