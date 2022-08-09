import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className='w-100 d-flex login-container'>
            <div className='w-50 d-flex flex-column login-form justify-content-center align-items-center'>
                <h3>Bedrock Private Data</h3>
                <p>Sign in to get started</p>
                <div className='d-flex flex-column w-100 pt-3'>
                    <label className='text-left' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='d-flex flex-column w-100'>
                    <label htmlFor="betaCode">Beta Code</label>
                    <input type="password" name="betaCode" id="betaCode" />
                </div>

                <button className='mt-3' type="submit">Create Account</button>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
