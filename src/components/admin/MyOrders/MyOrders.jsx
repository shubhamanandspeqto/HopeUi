import React from 'react'

import { FaRegEye } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import DataTable from 'react-data-table-component'
import { useState } from 'react'
import { useEffect } from 'react'
import { Modal } from 'bootstrap'
import axios from 'axios'
import { URLS } from '../../../utils/ApiURLs'
import { useContext } from 'react'
import { UserContext } from '../../../ContextAPI/Context'
import EditOrder from './EditOrder'

const data = [
    {
        id: 1,
        order: 'SpaceX',
        holder: 'Seller',
        proposedBuyer: "Buyer",
        quantity: "Quantity",
        typeOfShare: "New",
        offerdPrice: '$300',
        status: 'Pending'
    },
    {
        id: 2,
        order: 'SpaceX',
        holder: 'Seller',
        proposedBuyer: "Buyer",
        quantity: "Quantity",
        typeOfShare: "New",
        offerdPrice: '$300',
        status: 'Approved'
    },
    {
        id: 3,
        order: 'SpaceX',
        holder: 'Seller',
        proposedBuyer: "Buyer",
        quantity: "Quantity",
        typeOfShare: "New",
        offerdPrice: '$300',
        status: 'Denied'
    },
]

export default function MyOrders() {

    const [dropDownVisible, setDropDownVisible] = useState(false)
    const [createOrderModal, setCreateOrderModal] = useState();
    const [refreshOrderComponent, setRefreshOrderComponent] = useState(false);
    const [singleOrderData, setSingleOrderData] = useState();
    const [isDataLoading, setIsDataLoading] = useState(true)

    const [searchInput, setSearchInput] = useState("");
    const [totalOrders, setTotalOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails

    const handleSingleOrderData = (data) => {
        setSingleOrderData(data)
    }

    const columns = [
        {
            name: 'Order',
            selector: row => row.company_name,
            sortable: true,
        },
        {
            name: 'Holder',
            selector: row => row.company_ticket,
            sortable: true,
        },
        {
            name: 'Proposed Buyer',
            selector: row => row.proposed_buyer,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.share_amt,
            sortable: true,
        },
        {
            name: 'Type of shares',
            selector: row => row.share_type,
            sortable: true,
        },
        {
            name: 'Offered Price',
            selector: row => row.share_price,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => {
                if (row.status === 'Pending') {
                    return (
                        <div className='d-flex align-items-center gap-3'>
                            <p style={{ color: '#c5c502' }}>Pending</p>

                            {/* <span onClick={(e) => {
                                setDropDownVisible(!dropDownVisible)
                            }} style={{ cursor: 'pointer', fontSize: '10px' }}>
                                <HiOutlineDotsHorizontal size={15} />
                                View
                            </span>

                            <div className='table-dropdown-self-orders py-2'
                                style={dropDownVisible ? { position: 'absolute', display: 'block' } : { display: 'none' }}>
                                <p onClick={(e) => {
                                    e.preventDefault();
                                    console.log("View Details");
                                }}>View Details</p>
                            </div> */}
                        </div>
                    )
                }
                if (row.status === 'Approved') {
                    return (
                        <div className='d-flex align-items-center gap-3'>
                            <p style={{ color: 'green' }}>Approved</p>

                            {/* <select value={""} style={{ border: 'none', background: '#dbdbdb', outline: 'none' }} name="" id="">
                            <option></option>
                            <option>View</option>
                            </select> */}
                        </div>
                    )
                }
                if (row.status === 'Denied') {
                    return (
                        <p style={{ color: 'red' }}>Denied</p>
                    )
                }
            },
            sortable: true,
            ignoreRowClick: true,
        },
        {
            name: 'Edit',
            selector: row => {
                return (
                    <p onClick={() => {
                        setSingleOrderData(row)
                        showModal()
                    }} className='text-center' style={{ cursor: 'pointer' }}><FaRegEye size={20} /></p>
                )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const subHeaderComponent = () => {
        return (
            <div className='d-flex justify-content-between w-100'>
                <h4>MY ORDERS</h4>
                <div className='d-flex align-items-center'>
                    <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                    <input onChange={(e) => setSearchInput(e.target.value)} style={{ borderRadius: '10px', border: 'none', outline: 'none' }} className='ps-5 py-2' placeholder='Search Records' />
                </div>
            </div>
        )
    }

    const showModal = () => {
        createOrderModal.show()
    }

    const hideModal = () => {
        createOrderModal.hide()
    }

    const getSelfOrders = () => {
        setIsDataLoading(true)
        axios.get(`${URLS.getSelfOrders}/${address}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            setTotalOrders(res.data.data)
            setFilteredOrders(res.data.data)
            setIsDataLoading(false)
        }).catch((err) => {
            setIsDataLoading(false)
            console.log(err);
        })
    }

    useEffect(() => {
        let createOrderModalElement = new Modal(document.getElementById('createNewOrder'), {});
        setCreateOrderModal(createOrderModalElement);
    }, [])

    useEffect(() => {
        if (address) {
            getSelfOrders()
        }
    }, [address, refreshOrderComponent])

    useEffect(() => {
        if (searchInput) {
            // totalOrders.filter(())
        } else {

        }
    }, [searchInput])

    const changeDropdownVisible = (flag) => {
        setDropDownVisible(flag)
    }

    const handleRefresh = () => {
        createOrderModal.hide()
        setRefreshOrderComponent(!refreshOrderComponent)
    }

    const handleRefreshOnly = () => {
        setRefreshOrderComponent(!refreshOrderComponent)
    }

    const customLoader = () => {
        return (
            <>
                <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
            </>
        )
    }

    return (
        <div style={{ scrollBehavior: 'smooth' }} className='documents-page-container pb-3' onClick={() => {
            if (dropDownVisible) setDropDownVisible(false)
        }}>

            <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h4>Hello! Welcome to Bedrock.</h4>
                    <p>You are currently using the invite-only product version of Bedrock.</p>
                </div>
            </div>

            <div className='m-3 documents-page-content d-flex p-0 justify-content-between align-items-center'>
                <div className='ps-3 d-flex gap-5 align-items-center documents-page-img-container'>
                    {
                        userInfo?.profileImage ?
                            <img className='pb-3' src={userInfo?.profileImage} alt="Profile Image" />
                            :
                            <img className='pb-3' src="/assets/beared-guy.png" alt="" />
                    }
                    <p className='ps-5 d-flex gap-2'>My orders <span>- {userInfo?.name}</span></p>
                </div>
                {/* <div className='d-flex gap-3 pe-3 documents-page-btn-container'>
                    <button>Completed</button>
                    <button className='px-3 py-1'>Pending</button>
                    <button
                        onClick={() => {
                            setSingleOrderData();
                            showModal();
                        }}
                        // data-bs-toggle="modal" data-bs-target="#createNewOrder"
                        className='px-3 py-1'>Create New</button>
                </div> */}
            </div>

            <div className="modal fade" id="createNewOrder" tabIndex="-1" role="dialog" aria-labelledby="createNewOrderLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title" id="createNewOrderLabel">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div className="modal-body">
                            <EditOrder singleOrderData={singleOrderData} handleRefresh={handleRefresh} />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <IncomingOrdersList
                changeDropdownVisible={changeDropdownVisible}
                dropDownVisible={dropDownVisible}
                refreshOrderComponent={refreshOrderComponent}
                handleRefresh={handleRefresh}
                handleSingleOrderData={handleSingleOrderData}
                handleRefreshOnly={handleRefreshOnly}
                showModal={showModal} /> */}

            <div className='m-3 mt-5 incoming-orders-table'>
                <DataTable
                    columns={columns}
                    data={filteredOrders}
                    subHeader
                    subHeaderComponent={subHeaderComponent()}
                    pagination
                    progressComponent={customLoader()}
                    progressPending={isDataLoading}
                />
            </div>

        </div>
    )
}
