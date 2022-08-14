import React from 'react'
import './Error.css'

export default function Error404() {
    return (
        <div className='error-404 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center'>404</h1>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                <h2>Oops! This Page is Not Found.</h2>
                <p>The requested page dose not exist</p>
                <button>Back to Home</button>
            </div>
        </div>
    )
}
