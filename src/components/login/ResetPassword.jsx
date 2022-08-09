import React from 'react'
import './ResetPassword.css'

export default function ResetPassword() {
    return (
        <div className='w-100 d-flex reset-password-container'>
            <div className='w-50 d-flex flex-column reset-password-form justify-content-center align-items-center'>

                <div className='d-flex align-items-center gap-2 justify-content-left w-100'>
                    <img src="/assets/logo.png" alt="" />
                    <h3 className='m-0 p-0'>Hope Ui</h3>
                </div>

                <h3 className='mt-3'>Reset Password</h3>

                <p className='pb-3'>Enter your email address and we’ll send you an email with instructions to reset your password</p>

                <div className='d-flex flex-column w-100'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>

                <button className='mt-3' type="submit">Reset</button>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
