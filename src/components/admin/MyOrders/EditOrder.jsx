import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineDropbox } from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDropzone } from 'react-dropzone';
import ReactDropboxChooser from "react-dropbox-chooser";

import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';
import { dropboxKey } from '../../../utils/Keys';

export default function EditOrder({ handleRefresh, singleOrderData }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loaderButton, setLoaderButton] = useState("")
    const [selectedFile, setSelectedFile] = useState();

    const [orderDocument, setorderDocument] = useState("");

    const [createOrderFormData, setCreateOrderFormData] = useState({
        company_name: "",
        company_ticker: "",
        proposed_buyer: "",
        share_amt: "",
        share_type: "",
        share_price: "",
        wallet_address: "",
    })

    const [formError, setFormError] = useState({
        company_name: "",
        company_ticker: "",
        proposed_buyer: "",
        share_amt: "",
        share_type: "",
        share_price: "",
        wallet_address: "",
    })

    const orderDocumentRef = useRef();

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === "company_name") {
            if (value.length < 3) setFormError({ ...formError, company_name: "Length Must be greater than 3" })
            else setFormError({ ...formError, company_name: "" })
        }

        if (name === "company_ticker") {
            if (value.length < 3) setFormError({ ...formError, company_ticker: "Length Must be greater than 3" })
            else setFormError({ ...formError, company_ticker: "" })
        }

        if (name === "proposed_buyer") {
            if (value.length < 3) setFormError({ ...formError, proposed_buyer: "Length Must be greater than 3" })
            else setFormError({ ...formError, proposed_buyer: "" })
        }

        if (name === "share_amt") {
            if (isNaN(+value)) return setFormError({ ...formError, share_amt: "Quantity Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, share_amt: "Quantity Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, share_amt: "" })
            else setFormError({ ...formError, share_amt: "" })
        }

        if (name === "share_type") {
            if (value.length < 3) setFormError({ ...formError, share_type: "Length Must be greater than 3" })
            else setFormError({ ...formError, share_type: "" })
        }

        if (name === "share_price") {
            if (isNaN(+value)) return setFormError({ ...formError, share_price: "Price Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, share_price: "Price Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, share_price: "" })
            else setFormError({ ...formError, share_price: "" })
        }

        setCreateOrderFormData({
            ...createOrderFormData, [name]: value
        })
    }


    const handleFileChange = (e) => {
        setorderDocument(e.target.files[0])
    }

    const handleUploadDocument = (e) => {
        e.preventDefault();
        orderDocumentRef.current.click();
    }

    const resetFormData = () => {
        setCreateOrderFormData({
            company_name: "",
            company_ticker: "",
            proposed_buyer: "",
            share_amt: "",
            share_type: "",
            share_price: "",
            wallet_address: '',
        })
        setorderDocument("");
        setSelectedFile();
    }

    useEffect(() => {
        if (singleOrderData) {
            const { company_name, company_ticket, proposed_buyer, share_amt, share_type, share_price, wallet_address } = singleOrderData
            setCreateOrderFormData({
                company_name,
                company_ticker: company_ticket,
                proposed_buyer,
                share_amt,
                share_type,
                share_price,
                wallet_address,
            })
        } else {
            resetFormData()
        }
    }, [singleOrderData])

    const createOrder = (company_name, company_ticker, proposed_buyer, share_amt, share_type, share_price) => {
        setIsLoading(true)

        if (!orderDocument) {
            setIsLoading(false)
            return errorPopup("Please Upload Document First")
        }

        let bodyContent = new FormData();
        bodyContent.append("company_name", company_name.trim())
        bodyContent.append("company_ticker", company_ticker.trim())
        bodyContent.append("proposed_buyer", proposed_buyer.trim())
        bodyContent.append("share_amt", share_amt.trim())
        bodyContent.append("share_type", share_type.trim())
        bodyContent.append("share_price", share_price.trim())
        bodyContent.append("wallet_address", address)
        bodyContent.append("file", orderDocument)

        axios.post(`${URLS.createOrder}/${userInfo.email}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            successPopup(res.data.message)
            setIsSubmitted(true)
            setIsLoading(false)
            resetFormData()
        }).catch((error) => {
            console.log(error);
            setIsLoading(false)
            errorPopup("Some Error Occured")
        })
    }

    const deleteOrder = (e) => {
        setLoaderButton("Delete")
        setIsLoading(true)
        e.preventDefault();
        axios.delete(`${URLS.deleteOrder}/${address}/${singleOrderData.order_id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            successPopup(res.data.message)
            setLoaderButton("")
            setIsLoading(false);
            handleRefresh()
        }).catch((err) => {
            console.log(err);
            setLoaderButton("")
            setIsLoading(false)
            errorPopup("Some Error Occured")
        })
    }

    const updateOrder = (id, company_name, company_ticker, proposed_buyer, share_amt, share_type, share_price) => {
        setLoaderButton("Update")
        setIsLoading(true)
        console.log(id);
        let bodyContent = new FormData();
        bodyContent.append("company_name", company_name.trim())
        bodyContent.append("company_ticker", company_ticker.trim())
        bodyContent.append("share_amt", share_amt.trim())
        bodyContent.append("share_type", share_type.trim())
        bodyContent.append("share_price", share_price)
        // bodyContent.append("proposed_buyer", proposed_buyer.trim())
        // bodyContent.append("file", orderDocument)

        axios.put(`${URLS.updateOrder}/${address}/${id}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            successPopup(res.data.message)
            setIsSubmitted(true)
            setLoaderButton()
            setIsLoading(false)
            // resetFormData()
        }).catch((error) => {
            console.log(error);
            setLoaderButton();
            setIsLoading(false)
            errorPopup("Some Error Occured")
        })
    }

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const { company_name, company_ticker, proposed_buyer, share_amt, share_type, share_price } = createOrderFormData;

        // if (singleOrderData) {
        updateOrder(singleOrderData.order_id, company_name, company_ticker, proposed_buyer, share_amt, share_type, share_price)
        // } else {
        //     createOrder(company_name, company_ticker, proposed_buyer, share_amt, share_type, share_price)
        // }
    }

    // useEffect(() => {
    //     console.log(acceptedFiles);
    //     if (!acceptedFiles.length) return
    //     let newImage = {
    //         html: <li key={acceptedFiles[0].name}>
    //             {acceptedFiles[0].name} - {acceptedFiles[0].size} bytes
    //             <br />
    //         </li>,
    //         file: acceptedFiles[0]
    //     }

    //     setSelectedFile(newImage)
    //     setorderDocument(acceptedFiles[0]);
    // }, [acceptedFiles])

    // For Select File From Dropbox
    // const onSuccess = (file) => {
    //     console.log(file);
    //     let newImage = {
    //         html: <li key={file[0].name}>
    //             {file[0].name} - {file[0].bytes} bytes
    //             <br />
    //         </li>,
    //         file: file[0]
    //     }
    //     setSelectedFile(newImage);
    // }

    // // For Cancel Upload Of Dropbox
    // const onCancel = () => {
    //     console.log("User Cancelled Upload");
    // }

    return (
        <div className='issue-new-container my-4'>
            {
                !isSubmitted ? <>
                    <h3 className='text-center'>Order</h3>
                    <p className='text-center pb-3'>Create a new Order</p>
                    <div>
                        <form onSubmit={singleOrderData?.status === "Pending" ? handleOrderSubmit : (e) => { e.preventDefault() }} className='d-flex flex-column gap-4 issue-new-form px-5'>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_name" >Company Name</label>
                                    <input value={createOrderFormData.company_name} onChange={handleInputChange} className='w-100' type="text" name="company_name" id="company_name" required />
                                    {
                                        formError.company_name &&
                                        <span className='form-error-value'>{formError.company_name}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_ticker" >Company Ticker</label>
                                    <input value={createOrderFormData.company_ticker} onChange={handleInputChange} className='w-100' type="text" name="company_ticker" id="company_ticker" required />
                                    {
                                        formError.company_ticker &&
                                        <span className='form-error-value'>{formError.company_ticker}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>

                                <div defaultValue={createOrderFormData.share_type} className='d-flex flex-row align-items-center w-100 select-share-type'
                                    onChange={(e) => {
                                        setCreateOrderFormData({
                                            ...createOrderFormData, share_type: e.target.value
                                        })
                                    }}>
                                    <div className='w-50 d-flex align-items-center gap-2'>
                                        <input checked={createOrderFormData.share_type === "Preffered"} required type="radio" id="preferredShare" name="typeOfShare" defaultValue="Preffered" />
                                        <label htmlFor="preferredShare">Preferred Share</label><br />
                                    </div>
                                    <div className='w-50 d-flex align-items-center gap-2'>
                                        <input checked={createOrderFormData.share_type === "Common"} required type="radio" id="commonShare" name="typeOfShare" defaultValue="Common" />
                                        <label htmlFor="commonShare">Common Share</label><br />
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_amt" >Amount of share</label>
                                    <input value={createOrderFormData.share_amt} onChange={handleInputChange} className='w-100' type="text" name="share_amt" id="share_amt" required />
                                    {
                                        formError.share_amt &&
                                        <span className='form-error-value'>{formError.share_amt}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_price" >Price per share</label>
                                    <input value={createOrderFormData.share_price} onChange={handleInputChange} className='w-100' type="text" name="share_price" id="share_price" required />
                                    {
                                        formError.share_price &&
                                        <span className='form-error-value'>{formError.share_price}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex justify-content-center issue-new-create-button gap-4'>
                                {
                                    singleOrderData?.status === "Pending" &&
                                    <>
                                        <button
                                            // onClick={() => { setIsSubmitted(true) }} 
                                            // disabled={formError.company_name || !createOrderFormData.company_name || formError.company_ticker || !createOrderFormData.company_ticker || formError.proposed_buyer || !createOrderFormData.proposed_buyer || formError.share_amt || !createOrderFormData.share_amt || formError.share_type || !createOrderFormData.share_type || formError.share_price || !createOrderFormData.share_price}
                                            className='py-2 px-4 d-flex gap-2 align-items-center' type='submit'>
                                            Update
                                            {
                                                isLoading && loaderButton === "Update" && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                                            }
                                        </button>
                                        <button
                                            style={{ cursor: 'pointer', background: '#a52834' }}
                                            onClick={(e) => { deleteOrder(e) }}
                                            className='py-2 px-4 d-flex gap-2 align-items-center btn btn-danger' >
                                            Delete
                                            {
                                                isLoading && loaderButton === "Delete" && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                                            }
                                        </button>
                                    </>
                                }
                            </div>
                        </form>
                    </div>
                </> :
                    <>
                        <h3 className='text-center'>Success</h3>
                        <p className='text-center pb-5'>Order created successfully. </p>

                        <div className='view-issued-shares d-flex justify-content-center'>
                            <button onClick={(e) => {
                                e.preventDefault()
                                setIsSubmitted(false);
                                handleRefresh()
                            }} className='px-4 py-2'>View Created Orders</button>
                        </div>

                        <p className='text-center mt-5 text-decoration-underline'>View on chain</p>
                    </>
            }
        </div>
    )
}