import React, { useState } from 'react'

export default function IssueNew() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <div className='issue-new-container my-4'>
            {
                !isSubmitted ? <>
                    <h3 className='text-center'>Issue New</h3>
                    <p className='text-center pb-3'>Create a new issuance</p>
                    <div>
                        <form className='d-flex flex-column gap-4 issue-new-form px-5'>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="companyName" >Company Name </label>
                                    <input className='w-100' type="text" name="companyName" id="companyName" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="companyTicker" >Company Ticker </label>
                                    <input className='w-100' type="text" name="companyTicker" id="companyTicker" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="shareType" >Share Type </label>
                                    <input className='w-100' type="text" name="shareType" id="shareType" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="sharePrice" >Share Price </label>
                                    <input className='w-100' type="text" name="sharePrice" id="sharePrice" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="minShares" >Min. Shares </label>
                                    <input className='w-100' type="text" name="minShares" id="minShares" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="maxShares" >Max Shares </label>
                                    <input className='w-100' type="text" name="maxShares" id="maxShares" />
                                </div>
                            </div>

                            <div className='d-flex justify-content-center issue-new-upload-button'>
                                <button className='py-3 px-4'>+ Upload Issuance Documents</button>
                            </div>

                            <div className='d-flex justify-content-center gap-2 issue-new-conditions'>
                                <input type="checkbox" />
                                <span>I agree with the terms of use</span>
                            </div>

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button onClick={() => { setIsSubmitted(true) }} className='py-2 px-4' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </> :
                    <>
                        <h3 className='text-center'>Success</h3>
                        <p className='text-center pb-5'>Shares issued successfully. </p>

                        <div className='view-issued-shares d-flex justify-content-center'>
                            <button className='px-4 py-2'>View Issued Shares</button>
                        </div>

                        <p className='text-center mt-5 text-decoration-underline'>View on chain</p>
                    </>
            }
        </div>
    )
}
