import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

import { Web3Auth } from "@web3auth/web3auth";
import { web3authClientID } from '../../utils/Keys';
import { useEffect } from 'react';

export default function Signup() {

    let web3auth;

    const web3connect = async () => {
        web3auth = new Web3Auth({
            clientId: web3authClientID,
            chainConfig: {
                chainNamespace: "eip155",
                chainId: "0x1",
            },
        });

        let response = await web3auth.initModal();
        // console.log(response);
    }

    useEffect(() => {
        web3connect();
    }, [])

    const login = async (e) => {
        e.preventDefault();
        let res = await web3auth.connect();
        // console.log(res);
    }


    const navigate = useNavigate()
    return (
        <div className='w-100 d-flex signup-container'>

            <div className='w-50 signup-background-container' >

            </div>

            <div className='w-50 d-flex flex-column signup-form justify-content-center align-items-center'>
                <h3>Sign up</h3>
                <p className='pb-3'>Create your Bedrock Seller Account</p>

                <div className='w-100 row'>
                    <div className='col-md-6'>
                        <label htmlFor="firstName">Individual’s First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div className='col-md-6'>
                        <label htmlFor="lastName">Individual’s Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>
                </div>

                <div className='w-100 row'>
                    <div className='col-md-6'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className='col-md-6'>
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                </div>

                <div className='w-100 row'>
                    <div className='col-md-6'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className='col-md-6'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-center w-100 gap-2'>
                    <input type="checkbox" name="termsOfUse" id="termsOfUse" />
                    <label htmlFor="termsOfUse">I agree with the terms of use</label>
                </div>


                <button
                    // onClick={() => {
                    //     navigate('/signed-up')
                    // }}
                    onClick={(e) => {
                        login(e)
                    }}
                    className='mt-3' type="submit">Sign up</button>

                <div className='signup-footer mt-2'>
                    <p>or sign up with other accounts?</p>

                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <img src="/assets/Gmail.png" alt="" />
                        <img src="/assets/Facebook.png" alt="" />
                        <img src="/assets/Instagram.png" alt="" />
                        <img src="/assets/Linkedin.png" alt="" />
                    </div>

                    <p>Already have an Account <span>Sign in</span></p>
                </div>
            </div>
        </div>
    )
}
