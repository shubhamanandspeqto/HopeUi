import React from 'react'
import IncomingOrdersList from './IncomingOrdersList'
import './IncomingOrders.css'

import { FaRegEye } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Order',
        selector: row => row.order,
        sortable: true,
    },
    {
        name: 'Holder',
        selector: row => row.holder,
        sortable: true,
    },
    {
        name: 'Proposed Buyer',
        selector: row => row.proposedBuyer,
        sortable: true,
    },
    {
        name: 'Quantity',
        selector: row => row.quantity,
        sortable: true,
    },
    {
        name: 'Type of shares',
        selector: row => row.typeOfShare,
        sortable: true,
    },
    {
        name: 'Offered Price',
        selector: row => row.offerdPrice,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => {
            if (row.status === 'Pending') {
                return (
                    <p style={{ color: '#c5c502' }}>Pending Review</p>
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

                        <span style={{ cursor: 'pointer', fontSize: '10px' }}>
                            {/* <HiOutlineDotsHorizontal size={15} /> */}
                            View
                        </span>

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
    },
    // {
    //     name: 'View/Download',
    //     selector: row => {
    //         return (
    //             <p className='text-center' style={{ cursor: 'pointer' }}><FaRegEye size={20} /></p>
    //         )
    //     },
    //     ignoreRowClick: true,
    //     allowOverflow: true,
    //     button: true,
    // },
];

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

export default function IncomingOrders() {

    const subHeaderComponent = () => {
        return (
            <div className='d-flex justify-content-between w-100'>
                <h4>PENDING ORDERS</h4>
                <div className='d-flex align-items-center'>
                    <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                    <input style={{ borderRadius: '10px', border: 'none', outline: 'none' }} className='ps-5 py-2' placeholder='Search Records' />
                </div>
            </div>
        )
    }

    return (
        <div className='documents-page-container pb-3'>

            <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h4>Hello! Welcome to Bedrock.</h4>
                    <p>You are currently using the invite-only product version of Bedrock.</p>
                </div>
            </div>

            <div className='m-3 documents-page-content d-flex p-0 justify-content-between align-items-center'>
                <div className='ps-3 d-flex gap-5 align-items-center documents-page-img-container'>
                    <img className='pb-3' src="/assets/beared-guy.png" alt="" />
                    <p className='ps-5 d-flex gap-2'>Pending orders <span>- user name</span></p>
                </div>
                <div className='d-flex gap-3 pe-3 documents-page-btn-container'>
                    <button>Completed</button>
                    <button className='px-3 py-1'>Pending</button>
                </div>
            </div>

            {/* <IncomingOrdersList /> */}

            <div className='m-3 mt-5 incoming-orders-table'>
                <DataTable
                    columns={columns}
                    data={data}
                    subHeader
                    subHeaderComponent={subHeaderComponent()}
                    pagination
                />
            </div>

        </div>
    )
}
