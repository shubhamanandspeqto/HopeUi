import React from 'react'

export default function IssuedShares() {
    return (
        <div className='m-3 mt-5 d-flex flex-column gap-4'>

            <div className='issued-shares-row d-flex justify-content-between align-items-center'>
                <h5 className='px-5 py-4 w-50'>SpaceX</h5>
                <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                <button className='me-5'>View</button>
            </div>

            <div className='issue-new-share-btn d-flex justify-content-center mt-5'>
                <button>+ Issue New</button>
            </div>

        </div>
    )
}
