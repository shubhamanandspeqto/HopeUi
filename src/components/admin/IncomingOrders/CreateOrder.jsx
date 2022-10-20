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

export default function CreateOrder({ handleRefresh, singleOrderData }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    const [orderDocument, setorderDocument] = useState("");

    const [createOrderFormData, setCreateOrderFormData] = useState({
        order_name: "",
        holder: "",
        proposed_buyer: "",
        quantity: "",
        share_type: "",
        offered_price: "",
        wallet_address: "",
    })

    const [formError, setFormError] = useState({
        order_name: "",
        holder: "",
        proposed_buyer: "",
        quantity: "",
        share_type: "",
        offered_price: "",
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

        if (name === "order_name") {
            if (value.length < 3) setFormError({ ...formError, order_name: "Length Must be greater than 3" })
            else setFormError({ ...formError, order_name: "" })
        }

        if (name === "holder") {
            if (value.length < 3) setFormError({ ...formError, holder: "Length Must be greater than 3" })
            else setFormError({ ...formError, holder: "" })
        }

        if (name === "proposed_buyer") {
            if (value.length < 3) setFormError({ ...formError, proposed_buyer: "Length Must be greater than 3" })
            else setFormError({ ...formError, proposed_buyer: "" })
        }

        if (name === "quantity") {
            if (isNaN(+value)) return setFormError({ ...formError, quantity: "Quantity Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, quantity: "Quantity Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, quantity: "" })
            else setFormError({ ...formError, quantity: "" })
        }

        if (name === "share_type") {
            if (value.length < 3) setFormError({ ...formError, share_type: "Length Must be greater than 3" })
            else setFormError({ ...formError, share_type: "" })
        }

        if (name === "offered_price") {
            if (isNaN(+value)) return setFormError({ ...formError, offered_price: "Price Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, offered_price: "Price Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, offered_price: "" })
            else setFormError({ ...formError, offered_price: "" })
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
            order_name: "",
            holder: "",
            proposed_buyer: "",
            quantity: "",
            share_type: "",
            offered_price: "",
            wallet_address: '',
        })
        setorderDocument("");
        setSelectedFile();
    }

    useEffect(() => {
        if (singleOrderData) {
            const { order_name, holder, proposed_buyer, quantity, share_type, offered_price, wallet_address } = singleOrderData
            setCreateOrderFormData({
                order_name,
                holder,
                proposed_buyer,
                quantity,
                share_type,
                offered_price,
                wallet_address,
            })
        } else {
            resetFormData()
        }
    }, [singleOrderData])

    const createOrder = (order_name, holder, proposed_buyer, quantity, share_type, offered_price) => {
        setIsLoading(true)

        if (!orderDocument) {
            setIsLoading(false)
            return errorPopup("Please Upload Document First")
        }

        let bodyContent = new FormData();
        bodyContent.append("order_name", order_name.trim())
        bodyContent.append("holder", holder.trim())
        bodyContent.append("proposed_buyer", proposed_buyer.trim())
        bodyContent.append("quantity", quantity.trim())
        bodyContent.append("share_type", share_type.trim())
        bodyContent.append("offered_price", offered_price.trim())
        bodyContent.append("wallet_address", address)
        bodyContent.append("file", orderDocument)

        axios.post(`${URLS.createOrder}/${userInfo.email}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            // console.log(res);
            successPopup(res.data.message)
            setIsSubmitted(true)
            setIsLoading(false)
            resetFormData()
        }).catch((error) => {
            // console.log(error);
            setIsLoading(false)
            errorPopup(error.response?.data?.message ? error.response?.data?.message : "Some Error Occured, Please Try Again")
        })
    }

    const updateOrder = (id, order_name, holder, proposed_buyer, quantity, share_type, offered_price) => {
        setIsLoading(true)
        // console.log(id);
        let bodyContent = new FormData();
        bodyContent.append("order_name", order_name.trim())
        bodyContent.append("holder", holder.trim())
        bodyContent.append("proposed_buyer", proposed_buyer.trim())
        bodyContent.append("quantity", quantity.trim())
        bodyContent.append("share_type", share_type.trim())
        bodyContent.append("offered_price", offered_price)
        bodyContent.append("file", orderDocument)

        axios.put(`${URLS.updateOrder}/${id}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            // console.log(res);
            successPopup(res.data.message)
            setIsSubmitted(true)
            setIsLoading(false)
            resetFormData()
        }).catch((error) => {
            // console.log(error);
            setIsLoading(false)
            errorPopup("Some Error Occured")
        })
    }

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const { order_name, holder, proposed_buyer, quantity, share_type, offered_price } = createOrderFormData;

        if (singleOrderData) {
            updateOrder(singleOrderData.id, order_name, holder, proposed_buyer, quantity, share_type, offered_price)
        } else {
            createOrder(order_name, holder, proposed_buyer, quantity, share_type, offered_price)
        }
    }

    useEffect(() => {
        // console.log(acceptedFiles);
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
        // console.log(file);
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
        // console.log("User Cancelled Upload");
    }

    return (
        <div className='issue-new-container my-4'>
            {
                !isSubmitted ? <>
                    <h3 className='text-center'>Order</h3>
                    <p className='text-center pb-3'>Create a new Order</p>
                    <div>
                        <form onSubmit={handleOrderSubmit} className='d-flex flex-column gap-4 issue-new-form px-5'>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="order_name" >Order Name </label>
                                    <input value={createOrderFormData.order_name} onChange={handleInputChange} className='w-100' type="text" name="order_name" id="order_name" required />
                                    {
                                        formError.order_name &&
                                        <span className='form-error-value'>{formError.order_name}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="holder" >Holder</label>
                                    <input value={createOrderFormData.holder} onChange={handleInputChange} className='w-100' type="text" name="holder" id="holder" required />
                                    {
                                        formError.holder &&
                                        <span className='form-error-value'>{formError.holder}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="proposed_buyer" >Buyer</label>
                                    <input value={createOrderFormData.proposed_buyer} onChange={handleInputChange} className='w-100' type="text" name="proposed_buyer" id="proposed_buyer" required />
                                    {
                                        formError.proposed_buyer &&
                                        <span className='form-error-value'>{formError.proposed_buyer}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input value={createOrderFormData.quantity} onChange={handleInputChange} className='w-100' type="text" name="quantity" id="quantity" required />
                                    {
                                        formError.quantity &&
                                        <span className='form-error-value'>{formError.quantity}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_type" >Type of share</label>
                                    <input value={createOrderFormData.share_type} onChange={handleInputChange} className='w-100' type="text" name="share_type" id="share_type" required />
                                    {
                                        formError.share_type &&
                                        <span className='form-error-value'>{formError.share_type}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="offered_price" >Offered Price</label>
                                    <input value={createOrderFormData.offered_price} onChange={handleInputChange} className='w-100' type="text" name="offered_price" id="offered_price" required />
                                    {
                                        formError.offered_price &&
                                        <span className='form-error-value'>{formError.offered_price}</span>
                                    }
                                </div>
                            </div>

                            <div className="drag-drop-container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    {/* { console.log({ ...getInputProps() })} */}
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
                                    {
                                        // alertMessage && <span style={{ fontSize: '14px', color: 'red' }}>{alertMessage}</span>
                                    }
                                </aside>
                            </div>

                            {/* <div className='d-flex justify-content-center issue-new-upload-button'>
                                <button onClick={(e) => { handleUploadDocument(e) }} className='py-3 px-4'>+ Upload Deal Documents</button>
                                <input ref={orderDocumentRef} onChange={(e) => { handleFileChange(e) }} type="file" />
                            </div> */}

                            <div className='w-100 d-flex flex-column'>
                                {
                                    singleOrderData &&
                                    <a className='pb-2 w-100 text-center'
                                        href={singleOrderData.document_url} target='_blank'>View Document</a>
                                }
                                {
                                    // orderDocument &&
                                    // <ul>
                                    //     <li>{orderDocument.name}, {orderDocument.type}, {orderDocument.size} bytes</li>
                                    // </ul>
                                }
                            </div>

                            {/* <div className='d-flex justify-content-center gap-2 issue-new-conditions'>
                                <input type="checkbox" />
                                <span>I agree with the terms of use</span>
                            </div> */}

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button
                                    // onClick={() => { setIsSubmitted(true) }} 
                                    disabled={formError.order_name || !createOrderFormData.order_name || formError.holder || !createOrderFormData.holder || formError.proposed_buyer || !createOrderFormData.proposed_buyer || formError.quantity || !createOrderFormData.quantity || formError.share_type || !createOrderFormData.share_type || formError.offered_price || !createOrderFormData.offered_price}
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