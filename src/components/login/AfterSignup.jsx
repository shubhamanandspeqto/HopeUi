import React from 'react'
import './AfterSignUp.css'

export default function AfterSignup() {
    return (
        <div className='w-100 d-flex signed-up-container'>
            <div className='w-50 d-flex flex-column signed-up-form justify-content-center align-items-center'>
                <img src="/assets/tickLogo.png" alt="" />

                <h1>Welcome to Bedrock.</h1>

                <p className='pb-4'>Next, please specify your user type. </p>

                <div className='d-flex gap-3 mb-4 justify-content-between'>
                    <button>Buyer (Individual)</button>
                    <button>Seller (Individual)</button>
                </div>

                <div className='d-flex gap-3 justify-content-between'>
                    <button>Buyer (Institutional)</button>
                    <button>Seller (Institutional)</button>
                </div>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
