import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';

export default function IssueNew({ singleFormData, handleRefresh }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isConditionsAccepted, setIsConditionsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [issuedShareDocument, setIssuedShareDocument] = useState("");
    const issuedShareDocumentRef = useRef();
    const [issuedShareFormData, setIssuedShareFormData] = useState({
        company_name: '',
        company_ticker: '',
        share_type: '',
        share_price: '',
        shares: '',
        market_value: '',
    })

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    useEffect(() => {
        console.log(singleFormData);
        if (singleFormData) {
            const { company_name, company_ticker, market_value, share_price, share_type, shares, document_url } = singleFormData;
            setIssuedShareFormData({
                company_name,
                company_ticker,
                share_type,
                share_price,
                shares,
                market_value,
            })
        } else {
            setIssuedShareFormData({
                company_name: '',
                company_ticker: '',
                share_type: '',
                share_price: '',
                shares: '',
                market_value: '',
            })
        }
    }, [singleFormData])

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setIssuedShareFormData({
            ...issuedShareFormData, [name]: value
        })
    }

    const handleUploadDocument = (e) => {
        e.preventDefault();
        issuedShareDocumentRef.current.click();
    }

    const handleFileChange = (e) => {
        setIssuedShareDocument(e.target.files[0])
    }

    const resetFormData = () => {
        setIssuedShareFormData({
            company_name: '',
            company_ticker: '',
            share_type: '',
            share_price: '',
            shares: '',
            market_value: '',
        })
        setIssuedShareDocument("")
        setIsConditionsAccepted(false)
    }

    const handleCreateButton = (e) => {
        e.preventDefault();
        // setIsSubmitted(true)
        setIsLoading(true);
        console.log(issuedShareFormData);
        console.log(issuedShareDocument);


        const { company_name, company_ticker, market_value, share_price, share_type, shares } = issuedShareFormData;

        if (singleFormData) {
            let bodyContent = new FormData()
            bodyContent.append('company_name', company_name)
            bodyContent.append('company_ticker', company_ticker)
            bodyContent.append('market_value', market_value)
            bodyContent.append('share_price', share_price)
            bodyContent.append('share_type', share_type)
            bodyContent.append('shares', shares)
            if (issuedShareDocument) {
                console.log(issuedShareDocument);
                bodyContent.append('file', issuedShareDocument)
            } else {
                bodyContent.append('file', "")
            }

            axios.put(`${URLS.updateIssuedShare}/${singleFormData.id}`, bodyContent, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setIsLoading(false)
                resetFormData()
                successPopup(res.data.message)
                handleRefresh();
                // setIsSubmitted(true);
            }).catch(error => {
                console.log(error);
                setIsLoading(false)
                errorPopup("Some Error Occured")
            })
        } else {
            if (!issuedShareDocument) {
                setIsLoading(false)
                return errorPopup("Document is not selected")
            }
            let bodyContent = new FormData();
            bodyContent.append('company_name', company_name)
            bodyContent.append('company_ticker', company_ticker)
            bodyContent.append('market_value', market_value)
            bodyContent.append('share_price', share_price)
            bodyContent.append('share_type', share_type)
            bodyContent.append('shares', shares)
            bodyContent.append('wallet_address', address)
            bodyContent.append('file', issuedShareDocument)

            axios.post(`${URLS.createIssuedShares}/${userInfo?.email}`, bodyContent, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setIsLoading(false)
                resetFormData()
                successPopup(res.data.message)
                setIsSubmitted(true)
                // handleRefresh()
            }).catch(error => {
                console.log(error);
                setIsLoading(false)
                errorPopup("Some Error Occured")
            })
        }
    }

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
                                    <label htmlFor="company_name" >Company Name </label>
                                    <input value={issuedShareFormData.company_name} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="company_name" id="companyName" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_ticker" >Company Ticker </label>
                                    <input value={issuedShareFormData.company_ticker} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="company_ticker" id="companyTicker" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_type" >Share Type </label>
                                    <input value={issuedShareFormData.share_type} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="share_type" id="shareType" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_price" >Share Price </label>
                                    <input value={issuedShareFormData.share_price} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="share_price" id="sharePrice" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="shares" >Shares</label>
                                    <input value={issuedShareFormData.shares} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="shares" id="shares" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="market_value" >Market Value</label>
                                    <input value={issuedShareFormData.market_value} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="market_value" id="market_value" />
                                </div>
                            </div>

                            {/* <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="quantity" id="quantity" />
                                </div>
                            </div> */}

                            <div className='d-flex justify-content-center issue-new-upload-button'>
                                <button onClick={(e) => { handleUploadDocument(e) }}
                                    className='py-3 px-4'>+ Upload Issuance Documents</button>
                                <input ref={issuedShareDocumentRef} onChange={(e) => { handleFileChange(e) }} type="file" />
                            </div>

                            <div className='w-100 d-flex flex-column'>
                                {
                                    singleFormData &&
                                    <a className='pb-2 w-100 text-center'
                                        href={singleFormData.document_url} target='_blank'>View Document</a>
                                }
                                {
                                    issuedShareDocument &&
                                    <ul>
                                        <li>{issuedShareDocument.name}, {issuedShareDocument.type}, {issuedShareDocument.size} bytes</li>
                                    </ul>
                                }
                            </div>

                            <div className='d-flex justify-content-center gap-2 issue-new-conditions'>
                                <input id='conditionsCheckbox' onChange={() => { setIsConditionsAccepted(!isConditionsAccepted) }} type="checkbox" checked={isConditionsAccepted} />
                                <label htmlFor='conditionsCheckbox'>I agree with the terms of use</label>
                            </div>

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button
                                    disabled={!issuedShareFormData.company_name || !issuedShareFormData.company_ticker || !issuedShareFormData.market_value || !issuedShareFormData.share_price || !issuedShareFormData.share_type || !issuedShareFormData.shares || !isConditionsAccepted}
                                    onClick={(e) => { handleCreateButton(e) }}
                                    className='py-2 px-4 d-flex gap-2 align-items-center'
                                    type='submit'>
                                    Create
                                    {
                                        isLoading && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </> :
                    <>
                        <h3 className='text-center'>Success</h3>
                        <p className='text-center pb-5'>Shares issued successfully. </p>

                        <div className='view-issued-shares d-flex justify-content-center'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                handleRefresh()
                            }} className='px-4 py-2'>View Issued Shares</button>
                        </div>

                        <p className='text-center mt-5 text-decoration-underline'>View on chain</p>
                    </>
            }
        </div>
    )
}
