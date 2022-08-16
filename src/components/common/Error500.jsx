import React from 'react'
import './Error.css'

export default function Error500() {
    return (
        <div className='error-404 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center'>500</h1>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                <h2>Oops! This Page is Not Working.</h2>
                <p>The requested is Internal Server Error.</p>
                <button>Back to Home</button>
            </div>
        </div>
    )
}
