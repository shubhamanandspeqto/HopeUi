import axios from 'axios';
import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';

import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineDropbox } from 'react-icons/ai'

import Dropdown from 'react-bootstrap/Dropdown';
import { useDropzone } from 'react-dropzone';
import ReactDropboxChooser from "react-dropbox-chooser";

import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';
import { dropboxKey } from '../../../utils/Keys';

export default function CreateOrder({ singleOrderData, hideModal }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    const [orderDocument, setorderDocument] = useState("");

    const [createOrderFormData, setCreateOrderFormData] = useState({
        company_name: "",
        company_ticker: "",
        share_type: "",
        amountOfShare: "",
        pricePerShare: "",
    })

    const [formError, setFormError] = useState({
        company_name: "",
        company_ticker: "",
        share_type: "",
        amountOfShare: "",
        pricePerShare: "",
    })

    useEffect(() => {
        if (singleOrderData) {
            console.log(singleOrderData);
            setCreateOrderFormData({
                ...createOrderFormData,
                company_name: singleOrderData?.company_name,
                company_ticker: singleOrderData?.company_ticker,
                share_type: "",
                amountOfShare: "",
                pricePerShare: "",
            })
        }
    }, [singleOrderData])


    const orderDocumentRef = useRef();

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    console.log(singleOrderData);

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

        if (name === "amountOfShare") {
            if (isNaN(+value)) return setFormError({ ...formError, amountOfShare: "Quantity Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, amountOfShare: "Quantity Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, amountOfShare: "" })
            else setFormError({ ...formError, amountOfShare: "" })
        }

        if (name === "pricePerShare") {
            if (isNaN(+value)) return setFormError({ ...formError, pricePerShare: "Price Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, pricePerShare: "Price Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, pricePerShare: "" })
            else setFormError({ ...formError, pricePerShare: "" })
        }

        setCreateOrderFormData({
            ...createOrderFormData, [name]: value
        })
    }

    const resetFormData = () => {
        setCreateOrderFormData({
            company_name: "",
            company_ticker: "",
            proposed_buyer: "",
            quantity: "",
            share_type: "",
            offered_price: "",
            wallet_address: '',
        })
        setorderDocument("");
        setSelectedFile();
    }

    // useEffect(() => {
    //     if (singleOrderData) {
    //         const { company_name, company_ticker, proposed_buyer, quantity, share_type, offered_price, wallet_address } = singleOrderData
    //         setCreateOrderFormData({
    //             company_name,
    //             company_ticker,
    //             proposed_buyer,
    //             quantity,
    //             share_type,
    //             offered_price,
    //             wallet_address,
    //         })
    //     } else {
    //         resetFormData()
    //     }
    // }, [singleOrderData])

    const createOrder = (company_name, company_ticker, share_type, amountOfShare, pricePerShare) => {
        setIsLoading(true)

        // if (!orderDocument) {
        //     setIsLoading(false)
        //     return errorPopup("Please Upload Document First")
        // }

        let bodyContent = new FormData();
        bodyContent.append("company_name", company_name.trim())
        bodyContent.append("company_ticker", company_ticker.trim())
        bodyContent.append("email", userInfo?.email)
        bodyContent.append("share_type", share_type.trim())
        bodyContent.append("share_amt", amountOfShare.trim())
        bodyContent.append("share_price", pricePerShare.trim())
        bodyContent.append("share_id", singleOrderData?.id)
        bodyContent.append("proposed_buyer", userInfo?.name)
        // bodyContent.append("quantity", quantity.trim())
        // bodyContent.append("offered_price", offered_price.trim())
        // bodyContent.append("proposed_buyer", proposed_buyer.trim())
        // bodyContent.append("file", orderDocument)

        axios.post(`${URLS.createOrder}/${address}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            successPopup(res.data.message)
            setIsSubmitted(true)
            setIsLoading(false)
            // resetFormData()
        }).catch((error) => {
            console.log(error);
            setIsLoading(false)
            errorPopup("Some Error Occured")
        })
    }

    // const updateOrder = (id, company_name, company_ticker, proposed_buyer, quantity, share_type, offered_price) => {
    //     setIsLoading(true)
    //     console.log(id);
    //     let bodyContent = new FormData();
    //     bodyContent.append("company_name", company_name.trim())
    //     bodyContent.append("company_ticker", company_ticker.trim())
    //     bodyContent.append("proposed_buyer", proposed_buyer.trim())
    //     bodyContent.append("quantity", quantity.trim())
    //     bodyContent.append("share_type", share_type.trim())
    //     bodyContent.append("offered_price", offered_price)
    //     bodyContent.append("file", orderDocument)

    //     axios.put(`${URLS.updateOrder}/${id}`, bodyContent, {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then((res) => {
    //         console.log(res);
    //         successPopup(res.data.message)
    //         setIsSubmitted(true)
    //         setIsLoading(false)
    //         resetFormData()
    //     }).catch((error) => {
    //         console.log(error);
    //         setIsLoading(false)
    //         errorPopup("Some Error Occured")
    //     })
    // }

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const { company_name, company_ticker, share_type, amountOfShare, pricePerShare } = createOrderFormData;

        createOrder(company_name, company_ticker, share_type, amountOfShare, pricePerShare)
    }

    useEffect(() => {
        console.log(acceptedFiles);
        if (!acceptedFiles.length) return
        let newImage = {
            html: <li key={acceptedFiles[0].name}>
                {acceptedFiles[0].name} - {acceptedFiles[0].size} bytes
                <br />
            </li>,
            file: acceptedFiles[0]
        }

        setSelectedFile(newImage)
        setorderDocument(acceptedFiles[0]);
    }, [acceptedFiles])

    // For Select File From Dropbox
    const onSuccess = (file) => {
        console.log(file);
        let newImage = {
            html: <li key={file[0].name}>
                {file[0].name} - {file[0].bytes} bytes
                <br />
            </li>,
            file: file[0]
        }
        setSelectedFile(newImage);
    }

    // For Cancel Upload Of Dropbox
    const onCancel = () => {
        console.log("User Cancelled Upload");
    }

    return (
        <div className='issue-new-container my-4'>
            {
                !isSubmitted ? <>
                    <h3 className='text-center'>New Order</h3>
                    <p className='text-center pb-3'>Send a new Order</p>
                    <div>
                        <form onSubmit={handleOrderSubmit} className='d-flex flex-column gap-4 issue-new-form px-5'>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_name" >Company Name</label>
                                    <input value={createOrderFormData.company_name} onChange={handleInputChange} className='w-100' type="text" name="company_name" id="company_name" required readOnly />
                                    {
                                        formError.company_name &&
                                        <span className='form-error-value'>{formError.company_name}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_ticker" >Company Ticker</label>
                                    <input value={createOrderFormData.company_ticker} onChange={handleInputChange} className='w-100' type="text" name="company_ticker" id="company_ticker" required readOnly />
                                    {
                                        formError.company_ticker &&
                                        <span className='form-error-value'>{formError.company_ticker}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>

                                <div defaultValue={""} className='d-flex flex-row align-items-center w-100 select-share-type'
                                    onChange={(e) => {
                                        setCreateOrderFormData({
                                            ...createOrderFormData, share_type: e.target.value
                                        })
                                    }}>
                                    <div className='w-50 d-flex align-items-center gap-2'>
                                        <input required type="radio" id="preferredShare" name="typeOfShare" defaultValue="Preffered" />
                                        <label htmlFor="preferredShare">Preferred Share</label><br />
                                    </div>
                                    <div className='w-50 d-flex align-items-center gap-2'>
                                        <input required type="radio" id="commonShare" name="typeOfShare" defaultValue="Common" />
                                        <label htmlFor="commonShare">Common Share</label><br />
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>

                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="amountOfShare" >Amount of share</label>
                                    <input value={createOrderFormData.amountOfShare} onChange={handleInputChange} className='w-100' type="text" name="amountOfShare" id="amountOfShare" required />
                                    {
                                        formError.amountOfShare &&
                                        <span className='form-error-value'>{formError.amountOfShare}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="pricePerShare" >Price per share</label>
                                    <input value={createOrderFormData.pricePerShare} onChange={handleInputChange} className='w-100' type="text" name="pricePerShare" id="pricePerShare" required />
                                    {
                                        formError.pricePerShare &&
                                        <span className='form-error-value'>{formError.pricePerShare}</span>
                                    }
                                </div>
                            </div>
                            {/* Drag and File Upload */}
                            {/* <div className="drag-drop-container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    {console.log({ ...getInputProps() })}
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some file here</p>
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                + Upload Deal Document
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="m-0 p-0">
                                                <Dropdown.Item>
                                                    <p onClick={open} className="d-flex gap-2 align-items-center p-2">
                                                        <span><RiComputerLine /></span>
                                                        <label>Browse Computer</label>
                                                    </p>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <ReactDropboxChooser
                                                        appKey={dropboxKey}
                                                        success={files => onSuccess(files)}
                                                        cancel={() => onCancel()}
                                                        multiselect={false} >
                                                        <p className="d-flex gap-2 align-items-center p-2">
                                                            <span><AiOutlineDropbox /></span>
                                                            <label>Dropbox</label>
                                                        </p>
                                                    </ReactDropboxChooser>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>

                                <aside>
                                    {
                                        selectedFile && <ul className="my-0 py-0 pt-1">{selectedFile?.html}</ul>
                                    }
                                </aside>
                            </div> */}

                            <div className='w-100 d-flex flex-column'>
                                {
                                    singleOrderData &&
                                    <a className='pb-2 w-100 text-center'
                                        href={singleOrderData?.doc_url} target='_blank'>View Document</a>
                                }
                            </div>

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button
                                    // onClick={() => { setIsSubmitted(true) }} 
                                    disabled={formError.company_name || !createOrderFormData.company_name || formError.company_ticker || !createOrderFormData.company_ticker}
                                    className='py-2 px-4 d-flex gap-2 align-items-center' type='submit'>
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
                        <p className='text-center pb-5'>Order created successfully. </p>

                        <div className='view-issued-shares d-flex justify-content-center'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                hideModal();
                                setIsSubmitted(false);
                            }} className='px-4 py-2'>View Created Orders</button>
                        </div>

                        <p className='text-center mt-5 text-decoration-underline'>View on chain</p>
                    </>
            }
        </div >
    )
}