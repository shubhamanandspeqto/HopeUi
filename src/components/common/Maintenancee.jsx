import React from 'react'
import './Error.css'

export default function Maintenancee() {
    return (
        <div className='maintenence-container d-flex flex-column'>
            <div className='maintenence-top p-2'>

            </div>

            <div className='maintenence-bottom d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column align-items-center gap-2'>
                    <h1>Hang on! We are under maintenance</h1>
                    <p>It will not take a long time till we get the error fiked. We wii live again in</p>
                    <h3>00 :  04 : 13 : 39</h3>
                    <div className='d-flex gap-2 w-100 justify-content-center'>
                        <input className='p-2' type="text" name="" id="" placeholder='Enter your mail' />
                        <button className='px-2'>Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
