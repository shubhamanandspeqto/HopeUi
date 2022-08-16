import React from 'react'

export default function IncomingOrdersList() {
    return (
        <div className='m-3 mt-5 d-flex flex-column gap-4'>

            <div className='issued-shares-row d-flex justify-content-between align-items-center'>
                <h5 className='px-5 py-4 w-50'>Buy Order #1</h5>
                <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                <button className='me-5 px-3'>View</button>
            </div>

            <div className='incoming-orders-row d-flex justify-content-between align-items-center'>
                <h5 className='px-5 py-4 w-50'>Buy Order #2</h5>
                <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                <button className='me-5 px-3'>View</button>
            </div>

            <div className='incoming-orders-row d-flex justify-content-between align-items-center'>
                <h5 className='px-5 py-4 w-50'>Buy Order #3</h5>
                <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                <button className='me-5 px-3'>View</button>
            </div>
        </div>
    )
}
