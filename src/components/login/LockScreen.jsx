import React from 'react'
import './LockScreen.css'
import { useNavigate } from 'react-router-dom'

export default function LockScreen() {
    const navigate = useNavigate();
    return (
        <div className='w-100 d-flex lock-screen-container'>
            <div className='w-50 d-flex flex-column lock-screen-form justify-content-center align-items-center'>

                <div className='d-flex align-items-center gap-2 justify-content-left w-100'>
                    <img src="/assets/logo.png" alt="" />
                    <h3 className='m-0 p-0'>Hope Ui</h3>
                </div>

                <img src="/assets/BeardGuy.png" alt="" />

                <h3>Hi ! Austin Robertson</h3>

                <p className='pb-3'>Enter your password to acess the admin.</p>

                <div className='d-flex flex-column w-100'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button onClick={() => {
                    navigate('/dashboard')
                }} className='mt-3' type="submit">Login</button>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
