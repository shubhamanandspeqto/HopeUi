import React, { useState } from 'react'
import IssueNew from './IssueNew'

export default function IssuedShares() {
    const [rowId, setRowId] = useState();

    const table = () => {
        return (
            <div className='incoming-order-view-container p-3'>
                <div >
                    <h4 className='shares-issued-heading'>Shares Issued: <span>1/1/22</span></h4>

                    <div className='mt-3 mb-5 shares-issued-sub-heading'>
                        <p>Investor Accreditation: Verified</p>
                        <p>Identification: Verified</p>
                        <p>Seller Identification: Verified Seller</p>
                    </div>

                    <table className='w-100 shares-issued-table'>
                        <tr className='incoming-order-view-table-border'>
                            <th className='pb-2 w-50'>Type</th>
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

                    <div className='d-flex flex-column gap-4 justify-content-center align-items-center my-5'>
                        <div className='d-flex gap-3'>
                            <button className='issued-shares-edit-btn px-5 py-2'>Edit</button>
                            <button className='issued-shares-delete-btn px-3 py-2'>Delete/Revoke</button>
                        </div>

                        <div className='pb-4'>
                            <button className='issued-shares-package-btn px-5 py-2'>Package</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='m-3 mt-5 d-flex flex-column gap-4'>

            <div>
                <div className='issued-shares-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>SpaceX</h5>
                    <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>

                    {
                        rowId === 1 ?
                            <button onClick={() => { setRowId() }} className='me-5 px-3'>Minimize</button> :
                            <button onClick={() => { setRowId(1) }} className='me-5 px-3'>View</button>
                    }

                </div>
                {
                    rowId === 1 && table()
                }
            </div>

            <div className='issue-new-share-btn d-flex justify-content-center mt-5' type="button" data-bs-toggle="modal"
                data-bs-target="#issueNewShare">
                <button>+ Issue New</button>
            </div>

            <div className="modal fade" id="issueNewShare" tabIndex={-1} aria-labelledby="issueNewShareLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title" id="issueNewShareLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div> */}
                        <div className="modal-body">
                            <IssueNew />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
