import React, { useEffect, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { fadeIn } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import $ from 'jquery';
import { useContext } from 'react';
import { UserContext } from '../../../ContextAPI/Context';
import axios from 'axios';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';
import { Modal } from 'bootstrap'

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

export default function IncomingOrdersList({ changeDropdownVisible, dropDownVisible, refreshOrderComponent, handleRefresh, handleSingleOrderData, showModal, handleRefreshOnly }) {

    const [rowID, setRowID] = useState();
    const [viewDetailId, setViewDetailId] = useState();
    // const [dropDownVisible, setDropDownVisible] = useState(false)
    const [pageNo, setPageNo] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [totalOrdersLength, setTotalOrdersLength] = useState();

    const [filteredOrderList, setFilteredOrderList] = useState([])
    const [fetchedOrderList, setFetchedOrderList] = useState([]);

    const [searchOrder, setSearchOrder] = useState("");
    const [isDataLoading, setIsDataLoading] = useState(true);

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    const nextPage = () => {
        if (totalPages >= pageNo + 1) setPageNo(pageNo + 1)
    }

    const previousPage = () => {
        if (pageNo > 1) setPageNo(pageNo - 1)
    }

    const deleteOrder = (id) => {
        axios.delete(`${URLS.deleteOrder}/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            successPopup(res.data.message)
            handleRefresh()
        }).catch((error) => {
            console.log(error);
        })
    }

    let dummyData = [
        {
            id: 1,
            order: "Order1",
            Holder: "Holder1",
            ProposedBuyer: "Buyer1",
            Quantity: "1",
            TypeOfShares: "First",
            OfferedPrice: "1",
            status: "Pending",
        },
        {
            id: 2,
            order: "Order2",
            Holder: "Holder2",
            ProposedBuyer: "Buyer2",
            Quantity: "2",
            TypeOfShares: "Second",
            OfferedPrice: "2",
            status: "Approved",
        },
        {
            id: 3,
            order: "Order3",
            Holder: "Holder3",
            ProposedBuyer: "Buyer3",
            Quantity: "3",
            TypeOfShares: "third",
            OfferedPrice: "3",
            status: "Denied",
        },
        {
            id: 4,
            order: "Order4",
            Holder: "Holder4",
            ProposedBuyer: "Buyer4",
            Quantity: "4",
            TypeOfShares: "Four",
            OfferedPrice: "4",
            status: "Approved",
        },

    ]

    // useEffect(() => {

    // }, [])
    const handleUpdateOrderStatus = (e, status, id) => {
        e.preventDefault();
        let bodyContent = new FormData();
        bodyContent.append('wallet_address', address)
        axios.put(`${URLS.updateOrderStatus}/${id}?status=${status ? "Approved" : "Denied"}`, bodyContent, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            handleRefreshOnly();
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleAcceptOrder = (e, id) => {
        e.preventDefault();
        axios.put(`${URLS.updateOrderStatus}/${id}?status=Approved`, {}, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            handleRefreshOnly()
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleDeclineOrder = (e, id) => {
        e.preventDefault();
        axios.put(`${URLS.updateOrderStatus}/${id}?status=Denied`, {}, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            handleRefreshOnly()
        }).catch((error) => {
            console.log(error);
        })
    }

    const table = (order) => {
        return (
            <div style={styles.fadeIn} className='incoming-order-view-container p-3'>
                <div>
                    <h4 className='incoming-order-heading'>Buyer: <span>{order.proposed_buyer}</span></h4>

                    <div className='mt-3 mb-5 incoming-order-sub-heading'>
                        <p>Investor Accreditation: Verified</p>
                        <p>   Identification: Verified</p>
                    </div>

                    <table className='w-100 incoming-order-table'>
                        <tbody>
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
                        </tbody>
                    </table>

                    <p className='mb-5'>Offer expires in 15 days. Thank you for your business.</p>

                    <div className='d-flex flex-column gap-3 incoming-orders-first-buttons align-items-center mb-5'>
                        <button onClick={(e) => {
                            e.preventDefault()
                            window.open(order.document_url, '_blank')
                        }}>View Deal Documents</button>
                        <button>Verify On-Chain</button>
                    </div>

                    <div className='d-flex flex-column gap-3 justify-content-center align-items-center flex-wrap'>
                        <div className='d-flex gap-3'>
                            <button onClick={(e) => handleUpdateOrderStatus(e, true, order.order_id)} className='incoming-orders-accept-btn px-5 py-2'>Accept</button>
                            <button onClick={(e) => handleUpdateOrderStatus(e, false, order.order_id)} className='incoming-orders-decline-btn px-5 py-2'>Decline</button>
                            {/* {
                                order.status === "Pending" && <>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        console.log("Edit Details");
                                        handleSingleOrderData(order);
                                        showModal()
                                    }} className='incoming-orders-edit-btn px-5 py-2'>Edit</button>
                                    <button
                                        data-bs-toggle="modal" data-bs-target="#deleteOrders"
                                        className='incoming-orders-delete-btn px-5 py-2'>Delete</button>
                                </>
                            } */}

                        </div>

                        <div className="modal fade" id="deleteOrders" tabIndex="-1" aria-labelledby="deleteOrdersLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="deleteOrdersLabel">Are You Sure ?</h5>
                                        <button type="button" className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {order.company_name} will be deleted.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button data-bs-dismiss="modal" onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("View Details");
                                            deleteOrder(order.order_id);
                                        }} type="button" className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pb-4'>
                            <button className='incoming-orders-counteroffer-btn px-5 py-2'>Counteroffer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const statusRender = (order) => {
        if (order.status === 'Pending') {
            return (
                <div className='d-flex align-items-center gap-3 justify-content-center'>
                    <p style={{ color: '#c5c502' }}>Pending</p>

                    {/* <select value={""} style={{ border: 'none', background: '#dbdbdb', outline: 'none' }} name="" id="">
                            <option></option>
                            <option>View</option>
                            </select> */}

                    {/* <span onClick={(e) => {
                        e.stopPropagation();
                        setViewDetailId(order.order_id)
                        changeDropdownVisible(!dropDownVisible);
                    }} style={{ cursor: 'pointer', fontSize: '10px' }} className='px-2'>
                        <HiOutlineDotsHorizontal size={15} />
                    </span>

                    <div className='table-dropdown py-2'
                        style={dropDownVisible && viewDetailId === order.order_id ? { position: 'absolute', marginTop: '105px' } : { display: 'none' }}>
                        <p onClick={(e) => {
                            e.stopPropagation();
                            console.log("Edit Details");
                            handleSingleOrderData(order);
                            showModal()
                        }}>Edit Details</p>

                        <p onClick={(e) => {
                            e.stopPropagation();
                            console.log("View Details");
                            deleteOrder(order.order_id)
                        }}>Delete Details</p>
                    </div> */}

                </div>
            )
        }
        if (order.status === 'Approved') {
            return (
                <div className='d-flex align-items-center gap-3 justify-content-center'>
                    <p style={{ color: 'green' }}>Approved</p>

                    {/* <select value={""} style={{ border: 'none', background: '#dbdbdb', outline: 'none' }} name="" id="">
                            <option></option>
                            <option>View</option>
                            </select> */}

                    {/* <span onClick={(e) => {
                        e.stopPropagation();
                        setViewDetailId(order.order_id)
                        changeDropdownVisible(!dropDownVisible);
                    }} style={{ cursor: 'pointer', fontSize: '10px' }} className='px-2'>
                        <HiOutlineDotsHorizontal size={15} />
                    </span>

                    <div className='table-dropdown py-2'
                        style={dropDownVisible && viewDetailId === order.order_id ? { position: 'absolute', marginTop: '75px' } : { display: 'none' }}>
                        <p onClick={(e) => {
                            e.stopPropagation();
                            console.log("View Details");
                        }}>View Details</p>
                    </div> */}

                </div>
            )
        }
        if (order.status === 'Denied') {
            return (
                <div className='d-flex align-items-center gap-3 justify-content-center'>
                    <p style={{ color: 'red' }}>Denied</p>

                    {/* <select value={""} style={{ border: 'none', background: '#dbdbdb', outline: 'none' }} name="" id="">
                            <option></option>
                            <option>View</option>
                            </select> */}

                    {/* <span onClick={(e) => {
                        e.stopPropagation();
                        setViewDetailId(order.order_id)
                        changeDropdownVisible(!dropDownVisible);
                    }} style={{ cursor: 'pointer', fontSize: '10px' }} className='px-2'>
                        <HiOutlineDotsHorizontal size={15} />
                    </span>

                    <div className='table-dropdown py-2'
                        style={dropDownVisible && viewDetailId === order.order_id ? { position: 'absolute', marginTop: '75px' } : { display: 'none' }}>
                        <p onClick={(e) => {
                            e.stopPropagation();
                            console.log("View Details");
                        }}>View Details</p>
                    </div> */}

                </div>
            )
        }
    }

    const loadOrders = () => {
        // axios.get(`${URLS.getOrder}/${userInfo.email}?page=${pageNo}&limit=${rowsPerPage}`, {
        console.log(address);
        if (address) {
            axios.get(`${URLS.getPendingOrders}/${address}?page=${pageNo}&limit=${rowsPerPage}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setTotalOrdersLength(res.data.total_record)
                setIsDataLoading(false)
                setFetchedOrderList(res.data.data)
                setFilteredOrderList(res.data.data)
                let pages = Math.ceil(res.data.total_record / rowsPerPage);
                setTotalPages(pages)
            }).catch((error) => {
                console.log(error);
                setIsDataLoading(false)
                errorPopup("Some Error Occured")
            })
        }
    }

    useEffect(() => {
        setIsDataLoading(true);
        if (userInfo.email && !searchOrder && address) {
            loadOrders()
        }
    }, [refreshOrderComponent, userInfo, rowsPerPage, pageNo])

    useEffect(() => {
        if (searchOrder && address) {
            setIsDataLoading(true)
            axios.get(`${URLS.getOrder}/${userInfo.email}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                let filteredItem = res.data.data.filter((order) => {
                    return String(order.company_name).toLowerCase().includes(searchOrder) ||
                        String(order.company_ticker).toLowerCase().includes(searchOrder) ||
                        String(order.proposed_buyer).toLowerCase().includes(searchOrder) ||
                        String(order.share_amt).toLowerCase().includes(searchOrder) ||
                        String(order.share_type).toLowerCase().includes(searchOrder) ||
                        String(order.share_price).toLowerCase().includes(searchOrder) ||
                        String(order.status).toLowerCase().includes(searchOrder)
                })
                console.log(filteredItem);
                setIsDataLoading(false)
                let pages = Math.ceil(filteredItem.length / rowsPerPage);
                setTotalPages(pages)
                setTotalOrdersLength(filteredItem.length)

                if (rowsPerPage * pageNo - rowsPerPage > filteredItem.length) setPageNo(pageNo - 1)
                let totalFilteredData = filteredItem
                let filterByPagination = totalFilteredData.slice(rowsPerPage * pageNo - rowsPerPage, rowsPerPage * pageNo)
                console.log(filterByPagination);
                setFilteredOrderList(filterByPagination)
            }).catch((error) => {
                console.log(error);
                setIsDataLoading(false)
                errorPopup("Some Error Occured")
            })

            // let filteredItem = fetchedOrderList.filter((order) => {
            //     return String(order.company_name).toLowerCase().includes(searchOrder) ||
            //         String(order.company_ticker).toLowerCase().includes(searchOrder) ||
            //         String(order.proposed_buyer).toLowerCase().includes(searchOrder) ||
            //         String(order.share_amt).toLowerCase().includes(searchOrder) ||
            //         String(order.share_type).toLowerCase().includes(searchOrder) ||
            //         String(order.share_price).toLowerCase().includes(searchOrder) ||
            //         String(order.status).toLowerCase().includes(searchOrder)
            // })
            // setFilteredOrderList(filteredItem)
        } else {
            // setFilteredOrderList(fetchedOrderList)
            loadOrders()
        }
    }, [searchOrder, rowsPerPage, pageNo, refreshOrderComponent])

    const customLoader = () => {
        return (
            <div className='d-flex justify-content-center'>
                <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
            </div>
        )
    }


    return (
        <StyleRoot>
            <div className='m-3 mt-5 d-flex flex-column gap-4 list-container'>

                <div className='d-flex justify-content-end'>
                    <div className='d-flex align-items-center'>
                        <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                        <input value={searchOrder} onChange={(e) => {
                            setSearchOrder(e.target.value)
                        }} style={{ borderRadius: '10px', border: 'none', outline: 'none' }} className='ps-5 py-2' placeholder='Search Records' />
                    </div>
                </div>

                <div className='incoming-orders-data-table'>

                    <div className='incoming-orders-data-table-header d-flex'>
                        <div>Order</div>
                        <div>Holder</div>
                        <div>Proposed Buyer</div>
                        <div>Quantity</div>
                        <div>Type of shares</div>
                        <div>Offered Price</div>
                        <div>Status</div>
                    </div>

                    {
                        isDataLoading ?
                            customLoader() : filteredOrderList.length ?
                                filteredOrderList.map((order) => {
                                    return (
                                        <div key={order.order_id}>
                                            <div id={order.order_id} onClick={(e) => {
                                                e.stopPropagation();
                                                console.log(rowID, order.order_id);
                                                rowID === order.order_id ? setRowID() : setRowID(order.order_id);
                                                window.location.href = `#${order.order_id}`
                                            }} className='incoming-orders-data-table-header-row d-flex py-3' >
                                                <div>{order.company_name}</div>
                                                <div>{order.company_ticker}</div>
                                                <div>{order.proposed_buyer}</div>
                                                <div>{order.share_amt}</div>
                                                <div>{order.share_type}</div>
                                                <div>{order.share_price}</div>
                                                <div>
                                                    {
                                                        statusRender(order)
                                                    }
                                                </div>
                                            </div>

                                            {rowID === order.order_id && table(order)}
                                        </div>
                                    )
                                }) : <p className='text-center py-4'>No Data Found</p>
                    }

                    <div className='incoming-orders-data-table-footer d-flex justify-content-end gap-4 pt-3'>

                        <div className='d-flex gap-2'>
                            <p>Rows per page:</p>
                            <select value={rowsPerPage} onChange={(e) => { setRowsPerPage(e.target.value) }}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>

                        <div>
                            {
                                totalOrdersLength > rowsPerPage * pageNo ?
                                    <p>{(rowsPerPage * pageNo) - (rowsPerPage - 1)} - {(rowsPerPage * pageNo)} / {totalOrdersLength}</p>
                                    :
                                    <p>{(rowsPerPage * pageNo) - (rowsPerPage - 1)} - {totalOrdersLength} / {totalOrdersLength}</p>
                            }
                        </div>

                        <div className='d-flex gap-3 align-items-center pe-3'>
                            <AiOutlineLeft color='rgba(0,0,0,0.54)' size={'0.8rem'} onClick={previousPage} />
                            <span>{pageNo}</span>
                            <AiOutlineRight color='rgba(0,0,0,0.54)' size={'0.8rem'} onClick={nextPage} />
                        </div>
                    </div>
                </div>

                {/* <div className='d-flex flex-column'>
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
            </div> */}
            </div>
        </StyleRoot>
    )
}