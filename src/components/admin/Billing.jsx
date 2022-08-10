import React from 'react'
import './Billing.css'

export default function Billing() {
    return (
        <div className='special-page-container'>

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

            <div className='billing-container'>
                <div className='d-flex justify-content-between'>
                    <h2>Invoice  #215462</h2>
                    <p>DUE DATE: Aug 19, 2022</p>
                </div>
            </div>

        </div>
    )
}
