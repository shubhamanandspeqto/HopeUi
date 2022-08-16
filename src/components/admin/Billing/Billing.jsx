import React from 'react'
import './Billing.css'

export default function Billing() {
    return (
        <div className='special-page-container'>

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

            <div className='billing-container p-3'>
                <div className='d-flex justify-content-between'>
                    <h2>Invoice  #215462</h2>
                    <p>DUE DATE: Aug 19, 2022</p>
                </div>

                <h3>Hello , Devon Lane </h3>

                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>

                <div className='pt-4'>
                    <table className='w-100 billing-table'>
                        <tr>
                            <th className='w-50'>Items</th>
                            <th style={{ width: '20%' }} className='text-center'>Quantity</th>
                            <th style={{ width: '20%' }} className='text-center'>Price</th>
                            <th style={{ width: '10%' }} className='text-end'>Totals</th>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Item 1</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </td>
                            <td className='text-center'>5</td>
                            <td className='text-center'>$120.00</td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Item 2</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </td>
                            <td className='text-center'>5</td>
                            <td className='text-center'>$120.00</td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Item 3</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </td>
                            <td className='text-center'>5</td>
                            <td className='text-center'>$120.00</td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Item 4</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </td>
                            <td className='text-center'>5</td>
                            <td className='text-center'>$120.00</td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Total</p>
                            </td>
                            <td className='text-center'></td>
                            <td className='text-center'></td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr>
                            <td className='pt-3'>
                                <p>Taxs</p>
                            </td>
                            <td className='text-center'></td>
                            <td className='text-center'></td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr className='billing-last-row'>
                            <td className='pt-3 pb-3'>
                                <p>Discount</p>
                            </td>
                            <td className='text-center'></td>
                            <td className='text-center'></td>
                            <td className='text-end'>$2,880.00</td>
                        </tr>
                        <tr className='billing-final-price'>
                            <td className='pt-3'>
                                <p>Net Amount</p>
                            </td>
                            <td className='text-center'></td>
                            <td className='text-center'></td>
                            <td className='text-end'>
                                <span>$2,880.00</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className='d-flex py-4 gap-3 billing-terms-conditions align-items-center'>
                    <img src="/logo.png" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula interdum tellus sed scelerisque sed habitasse pharetra odio. In sem nunc ac cursus maecenas. Et tincidunt ultrices non et quis elit. Libero dignissim laoreet mattis mollis molestie vitae odio morbi sed.
                    </p>
                </div>

                <p>
                    Please pay within 15 days. Thank you for your business.
                </p>

                <div className='d-flex justify-content-center py-3'>
                    <button>Print</button>
                </div>
            </div>

        </div>
    )
}
