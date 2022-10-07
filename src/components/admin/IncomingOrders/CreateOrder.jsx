import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';

export default function CreateOrder({ handleRefresh, singleOrderData }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [orderDocument, setorderDocument] = useState();

    const [createOrderFormData, setCreateOrderFormData] = useState({
        order_name: '',
        holder: '',
        proposed_buyer: '',
        quantity: '',
        share_type: '',
        offered_price: '',
        wallet_address: '',
    })

    const orderDocumentRef = useRef();

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    const handleInputChange = (e) => {
        const { name, value } = e.target

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
            order_name: '',
            holder: '',
            proposed_buyer: '',
            quantity: '',
            share_type: '',
            offered_price: '',
            wallet_address: '',
        })
        setorderDocument();
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

        let bodyContent = new FormData();
        bodyContent.append("order_name", order_name)
        bodyContent.append("holder", holder)
        bodyContent.append("proposed_buyer", proposed_buyer)
        bodyContent.append("quantity", quantity)
        bodyContent.append("share_type", share_type)
        bodyContent.append("offered_price", offered_price)
        bodyContent.append("wallet_address", address)

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

    const updateOrder = (id, order_name, holder, proposed_buyer, quantity, share_type, offered_price) => {
        setIsLoading(true)
        console.log(id);
        let bodyContent = new FormData();
        bodyContent.append("order_name", order_name)
        bodyContent.append("holder", holder)
        bodyContent.append("proposed_buyer", proposed_buyer)
        bodyContent.append("quantity", quantity)
        bodyContent.append("share_type", share_type)
        bodyContent.append("offered_price", offered_price)

        axios.put(`${URLS.updateOrder}/${id}`, bodyContent, {
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

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const { order_name, holder, proposed_buyer, quantity, share_type, offered_price } = createOrderFormData;

        if (singleOrderData) {
            updateOrder(singleOrderData.id, order_name, holder, proposed_buyer, quantity, share_type, offered_price)
        } else {
            createOrder(order_name, holder, proposed_buyer, quantity, share_type, offered_price)
        }
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
                                    <input value={createOrderFormData.order_name} onChange={handleInputChange} className='w-100' type="text" name="order_name" id="order_name" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="holder" >Holder</label>
                                    <input value={createOrderFormData.holder} onChange={handleInputChange} className='w-100' type="text" name="holder" id="holder" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="proposed_buyer" >Buyer</label>
                                    <input value={createOrderFormData.proposed_buyer} onChange={handleInputChange} className='w-100' type="text" name="proposed_buyer" id="proposed_buyer" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input value={createOrderFormData.quantity} onChange={handleInputChange} className='w-100' type="text" name="quantity" id="quantity" />
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_type" >Type of share</label>
                                    <input value={createOrderFormData.share_type} onChange={handleInputChange} className='w-100' type="text" name="share_type" id="share_type" />
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="offered_price" >Offered Price</label>
                                    <input value={createOrderFormData.offered_price} onChange={handleInputChange} className='w-100' type="text" name="offered_price" id="offered_price" />
                                </div>
                            </div>

                            <div className='d-flex justify-content-center issue-new-upload-button'>
                                <button onClick={(e) => { handleUploadDocument(e) }} className='py-3 px-4'>+ Upload Deal Documents</button>
                                <input ref={orderDocumentRef} onChange={(e) => { handleFileChange(e) }} type="file" />
                            </div>

                            <div className='w-100 d-flex flex-column'>
                                {
                                    singleOrderData &&
                                    <a className='pb-2 w-100 text-center'
                                        href={singleOrderData.document_url} target='_blank'>View Document</a>
                                }
                                {
                                    orderDocument &&
                                    <ul>
                                        <li>{orderDocument.name}, {orderDocument.type}, {orderDocument.size} bytes</li>
                                    </ul>
                                }
                            </div>

                            {/* <div className='d-flex justify-content-center gap-2 issue-new-conditions'>
                                <input type="checkbox" />
                                <span>I agree with the terms of use</span>
                            </div> */}

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button
                                    // onClick={() => { setIsSubmitted(true) }} 
                                    className='py-2 px-4 d-flex gap-2 align-items-center' type='submit'>Create
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
