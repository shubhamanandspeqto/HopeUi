import React from 'react'
import "./Pricing.css"
export default function Pricing() {
    return (
        <div className='special-page-pricing'>
            <div className='d-flex justify-content-between special-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h2>Hello Devs !</h2>
                    <p>We are on a mission to help developers like you to build beautiful projects for FREE.</p>
                </div>
                <div>
                    <button>
                        <img src="/assets/VoiceIcon.png" alt="" />
                        Announcments
                    </button>
                </div>
            </div>

            <div className='row pricing-card p-3'>
                <div className="price-card col-md-3 " >
                    <div className="price-body">
                        <h2 className="card-title">$0<span className='text-gray'>/mo</span></h2>
                        <h4 className='price-title'>Free</h4>
                        <p className='price-para text-gray'>10 users included</p>
                        <p className='price-para text-gray'>2GB of storage</p>
                        <p className='price-para text-gray'>Email support</p>
                        <p className='price-para text-gray'>Help center access</p>
                        <button type="button" class="btn btn-outline-secondary" disabled>Sign Up For Free</button>
                    </div>
                </div>
               
                <div className="price-card col-md-3 " >
                    <div className="price-body">
                        <h2 className="card-title">$15<span className='text-gray'>/mo</span></h2>
                        <h4 className='price-title'>Pro</h4>
                        <p className='price-para text-gray'>20 users included</p>
                        <p className='price-para text-gray'>10GB of storage</p>
                        <p className='price-para text-gray'>Priority Email support</p>
                        <p className='price-para text-gray'>Help center access</p>
                        <button type="button" class="btn btn-outline-secondary" disabled>Get Started</button>
                    </div>
                </div>
                <div className="price-card col-md-3 " >
                    <div className="price-body">
                        <h2 className="card-title">$29<span className='text-gray'>/mo</span></h2>
                        <h4 className='price-title'>Enterprise</h4>
                        <p className='price-para text-gray'>30 users included</p>
                        <p className='price-para text-gray'>15GB of storage</p>
                        <p className='price-para text-gray'>Call and email support</p>
                        <p className='price-para text-gray'>Help center access</p>
                        <button type="button" class="btn prim">Get Started</button>
                    </div>
                </div>
                <div className="price-card col-md-3 " >
                    <div className="price-body">
                        <h2 className="card-title">$49<span className='text-gray'>/mo</span></h2>
                        <h4 className='price-title'>Premium</h4>
                        <p className='price-para text-gray'>50 users included</p>
                        <p className='price-para text-gray'>60GB of storage</p>
                        <p className='price-para text-gray'>24 x 7 call support</p>
                        <p className='price-para text-gray'>Help center access</p>
                        <button type="button" class="btn orange" >Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
