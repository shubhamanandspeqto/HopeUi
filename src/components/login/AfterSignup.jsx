import React from 'react'
import './AfterSignUp.css'
import { useNavigate } from 'react-router-dom'

export default function AfterSignup() {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/lock-screen');
    }

    return (
        <div className='w-100 d-flex signed-up-container'>
            <div className='w-50 d-flex flex-column signed-up-form justify-content-center align-items-center'>
                <img src="/assets/tickLogo.png" alt="" />

                <h1>Welcome to Bedrock.</h1>

                <p className='pb-4'>Next, please specify your user type. </p>

                <div className='d-flex gap-3 mb-4 justify-content-between'>
                    <button onClick={() => { redirect() }} >Buyer (Individual)</button>
                    <button onClick={() => { redirect() }}>Seller (Individual)</button>
                </div>

                <div className='d-flex gap-3 justify-content-between'>
                    <button onClick={() => { redirect() }}>Buyer (Institutional)</button>
                    <button onClick={() => { redirect() }}>Seller (Institutional)</button>
                </div>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
