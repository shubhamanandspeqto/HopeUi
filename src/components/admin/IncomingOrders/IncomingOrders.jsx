import React from 'react'
import IncomingOrdersList from './IncomingOrdersList'
import './IncomingOrders.css'

export default function IncomingOrders() {
    return (
        <div className='documents-page-container pb-3'>

            <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h4>Hello! Welcome to Bedrock.</h4>
                    <p>You are currently using the invite-only product version of Bedrock.</p>
                </div>
            </div>

            <div className='m-3 documents-page-content d-flex p-0 justify-content-between align-items-center'>
                <div className='ps-3 d-flex gap-5 align-items-center documents-page-img-container'>
                    <img className='pb-3' src="/assets/beared-guy.png" alt="" />
                    <p className='ps-5 d-flex gap-2'>Incoming orders <span>- user name</span></p>
                </div>
                <div className='d-flex gap-3 pe-3 documents-page-btn-container'>
                    <button>Completed</button>
                    <button className='px-3 py-1'>Pending</button>
                </div>
            </div>

            <IncomingOrdersList />

        </div>
    )
}
