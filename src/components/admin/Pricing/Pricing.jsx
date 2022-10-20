import React from 'react'
import "./Pricing.css"
export default function Pricing() {
    return (
        <div className='special-page-pricing pb-3'>
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
                        <button type="button" className="btn btn-outline-secondary" disabled>Sign Up For Free</button>
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
                        <button type="button" className="btn btn-outline-secondary" disabled>Get Started</button>
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
                        <button type="button" className="btn prim">Get Started</button>
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
                        <button type="button" className="btn orange" >Get Started</button>
                    </div>
                </div>
            </div>

            <div className='py-3 pricing-features mt-2 m-5'>
                <h2 className='px-3'>Features</h2>

                <table className='w-100 pt-4 pricing-features-header'>
                    <tr className='pricing-features-bottom-border-row py-4'>
                        <th className='w-25'></th>
                        <th>
                            <div className='pricing-features-header-non-active mx-1'>
                                <span className='ps-1'>Free</span>
                                <p>$0 / MONTH</p>
                            </div>
                        </th>
                        <th>
                            <div className='pricing-features-header-active mx-1'>
                                <span>PRO</span>
                                <p>$15 / MONTH</p>
                            </div>
                        </th>
                        <th>
                            <div className='pricing-features-header-non-active mx-1'>
                                <span>ENTERPRISE</span>
                                <p>$29 / MONTH</p>
                            </div>
                        </th>
                        <th>
                            <div className='pricing-features-header-non-active mx-1'>
                                <span>PREMIUM</span>
                                <p>$49 / MONTH</p>
                            </div>
                        </th>
                    </tr>

                    <tr className='pricing-features-bottom-border-row'>
                        <td className='w-25 p-3'>
                            <p className="pricing-features-text">Features 1</p>
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/blue-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-features-bottom-border-row'>
                        <td className='w-25 p-3'>
                            <p className="pricing-features-text">Features 2</p>
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-cross.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/blue-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-features-bottom-border-row'>
                        <td className='w-25 p-3'>
                            <p className="pricing-features-text">Features 3</p>
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-cross.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/blue-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-features-bottom-border-row'>
                        <td className='w-25 p-3'>
                            <p className="pricing-features-text">Features 4</p>
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/blue-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-features-bottom-border-row'>
                        <td className='w-25 p-3'>
                            <p className="pricing-features-text">Features 5</p>
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-cross.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/blue-cross.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center py-3'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-row-buy-buttons'>
                        <td className='w-25'></td>
                        <td className='text-center pt-3'>
                            <button>Free</button>
                        </td>
                        <td className='text-center pt-3'>
                            <button>Purchase</button>
                        </td>
                        <td className='text-center pt-3'>
                            <button>Purchase</button>
                        </td>
                        <td className='text-center pt-3'>
                            <button>Purchase</button>
                        </td>
                    </tr>
                </table>

                {/* <div className='pt-4 row pricing-features-header'>
                    <div className='col-md-4'>

                    </div>

                    <div className='col-md-2 pricing-features-header-non-active'>
                        <span>Free</span>
                        <p>$0 / MONTH</p>
                    </div>
                    <div className='col-md-2 pricing-features-header-active'>
                        <span>PRO</span>
                        <p>$15 / MONTH</p>
                    </div>
                    <div className='col-md-2 pricing-features-header-non-active'>
                        <span>ENTERPRISE</span>
                        <p>$29 / MONTH</p>
                    </div>
                    <div className='col-md-2 pricing-features-header-non-active'>
                        <span>PREMIUM</span>
                        <p>$49 / MONTH</p>
                    </div>
                </div>

                <div className='prc'>

                </div> */}
            </div>

            <div className='py-3 mt-2 m-5 pricing-payments'>

                <h2 className='px-4 m-0 pb-2'>Payments</h2>

                <div className='row m-0 p-0 pricing-payments-row-container'>
                    <div className='col-md-2'></div>

                    <div className='col-md-2 pricing-payments-border-left '>
                        <div className='d-flex flex-column gap-3 ps-3 pt-2'>
                            <p className='pricing-payments-card-heading'>FREE</p>
                            <p className='pricing-payments-card-price'>USD <span>$0</span> /MO</p>
                            <div className='pricing-payments-card-text'>
                                <p>BILLED YEARLY</p>
                                <p>$0.00 BILLED MONTHLY</p>
                            </div>
                        </div>
                        <button className='pricing-payments-button w-100 mt-4'>Free</button>
                    </div>

                    <div className='col-md-2 pricing-payments-border-left '>
                        <div className='d-flex flex-column gap-3 ps-3 pt-2'>
                            <p className='pricing-payments-card-heading'>PRO <span>POPULAR</span></p>
                            <p className='pricing-payments-card-price'>USD <span>$15</span> /MO</p>
                            <div className='pricing-payments-card-text'>
                                <p>BILLED YEARLY</p>
                                <p>$169.99 BILLED MONTHLY</p>
                            </div>
                        </div>
                        <button className='pricing-payments-button w-100 mt-4'>Buy Pro</button>
                    </div>

                    <div className='col-md-2 pricing-payments-border-left '>
                        <div className='d-flex flex-column gap-3 ps-3 pt-2'>
                            <p className='pricing-payments-card-heading'>ENTERPRISE</p>
                            <p className='pricing-payments-card-price'>USD <span>$29</span> /MO</p>
                            <div className='pricing-payments-card-text'>
                                <p>BILLED YEARLY</p>
                                <p>$319.89 BILLED MONTHLY</p>
                            </div>
                        </div>
                        <button className='pricing-payments-button w-100 mt-4'>Buy Enterprise</button>
                    </div>

                    <div className='col-md-2 pricing-payments-border-left '>
                        <div className='d-flex flex-column gap-3 ps-3 pt-2'>
                            <p className='pricing-payments-card-heading'>PREMIUM</p>
                            <p className='pricing-payments-card-price'>USD <span>$49</span> /MO</p>
                            <div className='pricing-payments-card-text'>
                                <p>BILLED YEARLY</p>
                                <p>$549.09 BILLED MONTHLY</p>
                            </div>
                        </div>
                        <button className='pricing-payments-button w-100 mt-4'>Buy Premium</button>
                    </div>
                </div>

                <div className='pricing-payments-sub-heading'>
                    <h5 className='m-0 p-0'>Features</h5>
                </div>
                <table className='w-100'>
                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 1</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 2</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-dash.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 3</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-dash.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 4</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>
                </table>

                <div className='pricing-payments-sub-heading'>
                    <h5 className='m-0 p-0'>Features</h5>
                </div>
                <table className='w-100'>
                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 1</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 2</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-dash.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 3</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-dash.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>

                    <tr className='pricing-payments-features-table-row'>
                        <td className='text-center' >
                            <p>Feature 4</p>
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                        <td className='text-center'>
                            <img src="/assets/black-tick.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>

            <div className='mt-2 m-5 lifetime-membership'>
                <div className='row m-0 p-0'>
                    <div className='col-md-8 p-3 lifetime-membership-first-column'>
                        <h4>Lifetime Membership</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna at turpis vulputate tincidunt et tincidunt velit pulvinar. Hac leo curabitur semper id ipsum mi. Turpis egestas vel et diam.
                        </p>

                        <h6 className='my-4'>INCLUDED FEATURES</h6>

                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex gap-5'>
                                <div className='d-flex gap-2 included-features-checkbox'>
                                    <input type="checkbox" checked={true} />
                                    <p>Private Forum access</p>
                                </div>
                                <div className='d-flex gap-2 included-features-checkbox'>
                                    <input type="checkbox" checked={true} readOnly />
                                    <p>Private Forum access</p>
                                </div>
                            </div>
                            <div className='d-flex gap-5'>
                                <div className='d-flex gap-2 included-features-checkbox'>
                                    <input type="checkbox" checked={true} readOnly />
                                    <p>Private Forum access</p>
                                </div>
                                <div className='d-flex gap-2 included-features-checkbox'>
                                    <input type="checkbox" checked={true} readOnly />
                                    <p>Private Forum access</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 lifetime-membership-side-column d-flex flex-column justify-content-center align-items-center gap-3'>
                        <h3 className='d-flex '>$599 <span className='mt-1'>USD</span></h3>
                        <p className='text-center px-5'>No monthly subscripion,you only pay once</p>
                        <button className='w-100 mt-3'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className='mt-2 m-5'>
                <div className='row m-0 p-0'>
                    <div className='col-md-4 my-5 pricing-big-card-1 p-3 d-flex flex-column justify-content-center align-items-center gap-2'>
                        <h5>Enterprise</h5>
                        <p className='price'>
                            $29 <span>/month</span>
                        </p>
                        <p>BILLED YEARLY</p>
                        <p>$169.99 BILLED MONTHLY</p>
                        <p>30 users included</p>
                        <p>15GB of storage</p>
                        <p>Call and email support</p>
                        <p>Help center access</p>
                        <button className='w-100 mt-2'>Get Started</button>
                    </div>

                    <div className='col-md-4 pricing-big-card-2 p-3 d-flex flex-column justify-content-center align-items-center gap-2'>
                        <span className='px-2 py-1 mb-3'>POPULAR</span>
                        <h5>Pro</h5>
                        <p className='price'>
                            $15 <span>/month</span>
                        </p>
                        <p>BILLED YEARLY</p>
                        <p>$169.99 BILLED MONTHLY</p>
                        <p>30 users included</p>
                        <p>15GB of storage</p>
                        <p>Call and email support</p>
                        <p>Help center access</p>
                        <button className='w-100 mt-2'>Get Started</button>
                    </div>

                    <div className='col-md-4 my-5 pricing-big-card-3 p-3 d-flex flex-column justify-content-center align-items-center gap-2'>
                        <h5>Premium</h5>
                        <p className='price'>
                            $49 <span>/month</span>
                        </p>
                        <p>BILLED YEARLY</p>
                        <p>$169.99 BILLED MONTHLY</p>
                        <p>30 users included</p>
                        <p>15GB of storage</p>
                        <p>Call and email support</p>
                        <p>Help center access</p>
                        <button className='w-100 mt-2'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
