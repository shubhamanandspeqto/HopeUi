import React from 'react'
import './MyDocumentsSelected.css'

import DataTable from 'react-data-table-component';
import { BiSearch } from 'react-icons/bi'
// import { FaRegEye } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { useContext } from 'react';
import { UserContext } from '../../../ContextAPI/Context';
import { useEffect } from 'react';
import axios from 'axios';
import { URLS } from '../../../utils/ApiURLs';
import { useState } from 'react';
import { errorPopup } from '../../../utils/PopupMessages';

// const data = [
//     {
//         id: 1,
//         title: "atul",
//         description: "desc",
//         file_url: "https://res.cloudinary.com/bedrock/image/upload/v1663313519/qjnjqxvoodaq6pyb7dzb.jpg",
//         timestamp: '01/01/2022',
//         email: "abc@gmail.com",
//         wallet_address: "0x1234567890123456789012345"
//     },
//     {
//         id: 2,
//         title: "sumit",
//         description: "desc 2",
//         file_url: "https://res.cloudinary.com/bedrock/image/upload/v1663315755/nbm8u7wksoxeqs7i0qvh.pdf",
//         createdDate: '01/01/2022',
//         email: "abc@gmail.com",
//         wallet_address: "0x1234567890123456789012345"
//     },
// ]

export default function MyDocumentsSelected() {

    const [fetchedDocumentData, setFetchedDocumentData] = useState([]);

    let userDetails = useContext(UserContext)
    const { userInfo } = userDetails
    console.log(userInfo.email);

    const subHeaderComponent = () => {
        return (
            <div className='d-flex w-100 align-items-center'>
                <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                <input className='w-100 ps-5 py-2' placeholder='Search Records' />
            </div>
        )
    }

    const viewFile = (url) => {
        window.open(url, '_blank')
    }

    const columns = [
        {
            name: 'Document Name',
            selector: row => row.title,
        },
        {
            name: 'Document Type',
            selector: row => row.description,
        },
        {
            name: 'Created Date',
            selector: row => {
                let date = new Date(row.timestamp * 1000)
                return date.toLocaleDateString()
            },
        },
        {
            name: 'View/Download',
            selector: row => {
                let date = new Date(row.timestamp * 1000)
                return (
                    <div onClick={() => { viewFile(row.file_url) }} style={{ cursor: 'pointer' }} className='d-flex gap-2'>
                        <div>
                            <IoDocumentTextOutline size={25} color='gray' />
                        </div>
                        <div>
                            {row.title} - {date.toLocaleDateString()}
                        </div>
                    </div>
                    // <p className='text-center' style={{ cursor: 'pointer' }}><FaRegEye size={20} /></p>
                )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            // button: true,
        },
    ];

    useEffect(() => {

        if (userInfo.email) {
            axios.get(`${URLS.getDocumentDetails}/${userInfo.email}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setFetchedDocumentData(res.data.data)
            }).catch((err) => {
                console.log(err);
                errorPopup("Some Error Occured")
            })
        }

    }, [userInfo.email])

    return (
        <div className='documents-page-container pb-3'>

            <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h4>Hello! Welcome to Bedrock.</h4>
                    <p>You are currently using the invite-only product version of Bedrock.</p>
                </div>
            </div>

            <div className='m-3 documents-page-content d-flex p-0 gap-5 align-items-center'>
                <div className='ps-3 d-flex gap-5 align-items-center documents-page-img-container'>
                    <img className='pb-3' src="/assets/beared-guy.png" alt="" />
                    {/* <p className='ps-5 d-flex gap-2'>My Documents <span>- user name</span></p> */}
                </div>
                <div className='d-flex gap-3 pe-3 documents-page-btn-container'>
                    <button>Upload</button>
                    <button className='px-3 py-1'>My Documents</button>
                </div>
            </div>

            {/* <div className='m-3 mt-5 d-flex flex-column gap-4'>

                <div className='documents-page-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>document name 1</h5>
                    <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                </div>

                <div className='documents-page-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>document name 2</h5>
                    <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                </div>
            </div> */}

            <div className='m-3 mt-5 BED80documentsTable'>
                <DataTable
                    columns={columns}
                    data={fetchedDocumentData}
                    subHeader
                    subHeaderComponent={subHeaderComponent()}
                    pagination
                />
            </div>

        </div>
    )
}
