import React from 'react'

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

export default function BED15Documents() {

    const [fetchedDocumentData, setFetchedDocumentData] = useState([]);
    const [loading, setLoading] = useState(true);

    let userDetails = useContext(UserContext)
    const { userInfo } = userDetails
    // console.log(userInfo.email);

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

    const customLoader = () => {
        return (
            <>
                <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
            </>
        )
    }

    useEffect(() => {

        if (userInfo.email) {

            axios.get(`${URLS.getDocumentDetails}/${userInfo.email}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                // console.log(res);
                setFetchedDocumentData(res.data.data)
                setLoading(false)
            }).catch((err) => {
                // console.log(err);
                setLoading(false)
                errorPopup(err.response?.data?.message ? err.response?.data?.message : "Some Error Occured, Please Try Again")
            })
        }


    }, [userInfo.email])

    return (
        <div className='mt-5 BED80documentsTable'>
            <DataTable
                columns={columns}
                data={fetchedDocumentData}
                subHeader
                subHeaderComponent={subHeaderComponent()}
                pagination
                progressPending={loading}
                progressComponent={customLoader()}
            />
        </div>
    )
}
