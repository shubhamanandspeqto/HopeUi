import React, { useState } from 'react'

export default function IncomingOrdersList() {

    const [rowID, setRowID] = useState()

    const table = () => {
        return (
            <div className='incoming-order-view-container p-3'>
                <div>
                    <h4>Buyer: <span>User Name</span></h4>

                    <div className='mt-3 mb-5'>
                        <p>Investor Accreditation: Verified</p>
                        <p>   Identification: Verified</p>
                    </div>

                    <table className='w-100'>
                        <tr className='incoming-order-view-table-border'>
                            <th className='pb-2'>Type</th>
                            <th className='text-end'>Quantity</th>
                            <th className='text-end'>Price</th>
                            <th className='text-end'>Totals</th>
                        </tr>

                        <tr>
                            <td className='pb-2'>
                                <p>Preferred Shares</p>
                                <p>Preferential shares of stock in SpaceX. </p>
                            </td>
                            <td className='text-end'>10000</td>
                            <td className='text-end'>$100.00</td>
                            <td className='text-end'>$100,000</td>
                        </tr>

                        <tr>
                            <td className='pb-2'>
                                <p>Common Shares</p>
                                <p>Common shares of stock in SpaceX. </p>
                            </td>
                            <td className='text-end'>10000</td>
                            <td className='text-end'>$100.00</td>
                            <td className='text-end'>$100,000</td>
                        </tr>

                        <tr>
                            <td className='pb-2'>
                                <p>Total</p>
                            </td>
                            <td className='text-end'></td>
                            <td className='text-end'></td>
                            <td className='text-end'>$100,000</td>
                        </tr>

                        <tr className='incoming-order-view-table-border'>
                            <td className='pb-2'>
                                <p>Discount</p>
                            </td>
                            <td className='text-end'></td>
                            <td className='text-end'></td>
                            <td className='text-end'>0%</td>
                        </tr>

                        <tr className='incoming-order-net-amount'>
                            <td className='pb-2'>
                                <p>Net Amount</p>
                            </td>
                            <td className='text-end'></td>
                            <td className='text-end'></td>
                            <td className='text-end'><p>$105,000</p></td>
                        </tr>
                    </table>

                    <p className='mb-5'>Offer expires in 15 days. Thank you for your business.</p>

                    <div className='d-flex flex-column gap-3 incoming-orders-first-buttons align-items-center mb-5'>
                        <button>View Deal Documents</button>
                        <button>Verify On-Chain</button>
                    </div>

                    <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                        <div className='d-flex gap-3'>
                            <button className='incoming-orders-accept-btn px-5 py-2'>Accept</button>
                            <button className='incoming-orders-decline-btn px-5 py-2'>Decline</button>
                        </div>

                        <div>
                            <button className='incoming-orders-counteroffer-btn px-5 py-2'>Counteroffer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='m-3 mt-5 d-flex flex-column gap-4'>

            <div className='d-flex flex-column'>
                <div className='issued-shares-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>Buy Order #1</h5>
                    <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                    {
                        rowID === 1 ? <button className='me-5 px-3' onClick={() => { setRowID() }}>
                            Minimize
                        </button> :
                            <button onClick={() => { setRowID(1) }} className='me-5 px-3'>View</button>
                    }
                </div>
                {
                    rowID === 1 && table()
                }
            </div>

            <div className='d-flex flex-column'>
                <div className='incoming-orders-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>Buy Order #2</h5>
                    <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                    {
                        rowID === 2 ? <button className='me-5 px-3' onClick={() => { setRowID() }}>
                            Minimize
                        </button> :
                            <button onClick={() => { setRowID(2) }} className='me-5 px-3'>View</button>
                    }
                </div>
                {
                    rowID === 2 && table()
                }
            </div>

            <div className='d-flex flex-column'>
                <div className='incoming-orders-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>Buy Order #3</h5>
                    <p className='mx-5 px-5 w-50'>- received 01/20/2022</p>
                    {
                        rowID === 3 ? <button className='me-5 px-3' onClick={() => { setRowID() }}>
                            Minimize
                        </button> :
                            <button onClick={() => { setRowID(3) }} className='me-5 px-3'>View</button>
                    }
                </div>
                {
                    rowID === 3 && table()
                }
            </div>
        </div>
    )
}
