import React from 'react'
import './AllSharesDashboard.css'
import AllSharesDashboardListing from './AllSharesDashboardListing'

export default function AllSharesDashboard() {
    return (
        <div className='special-page-container extra-dark'>

            <div className='d-flex justify-content-between special-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h2>Hello Devs !</h2>
                    <p>We are on a mission to help developers like you to build beautiful projects for FREE.</p>
                </div>
                <div>
                    <button>
                        <img src="/assets/VoiceIcon.png" alt="" />
                        Announcments
                    </button>
                </div>
            </div>

            <div>
                <AllSharesDashboardListing />
            </div>
        </div>
    )
}
