import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextAPI/Context';

export default function Login() {

    const context = useContext(UserContext)
    let { loginFunction, logoutFunction } = context;
    console.log(loginFunction, logoutFunction);
    const navigate = useNavigate();
    let torus;

    const login = async (e) => {
        loginFunction(e)
    }

    const logout = () => {
        logoutFunction();
    }

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
                    <p className='text-end text-gray reset-password'
                        onClick={() => {
                            navigate('/reset-password')
                        }}
                    >Reset Password</p>
                </div>

                <button
                    onClick={(e) => {
                        // navigate('/dashboard')
                        login(e)
                    }}
                    className='mt-3' type="submit">Log in</button>

                <p onClick={() => {
                    navigate('/sign-up')
                }} className='create-account'>Create Account</p>
                <p onClick={logout}>Logout</p>
            </div>

            <div className='w-50 login-background-container' >

            </div>
        </div>
    )
}
