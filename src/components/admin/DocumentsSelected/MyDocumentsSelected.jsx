import React from 'react'
import './MyDocumentsSelected.css'

import DataTable from 'react-data-table-component';
import { BiSearch } from 'react-icons/bi'
import { FaRegEye } from 'react-icons/fa'

const columns = [
    {
        name: 'Document Name',
        selector: row => row.documentName,
    },
    {
        name: 'Document Type',
        selector: row => row.documentType,
    },
    {
        name: 'Created Date',
        selector: row => row.createdDate,
    },
    {
        name: 'View/Download',
        selector: row => {
            return (
                <p className='text-center' style={{ cursor: 'pointer' }}><FaRegEye size={20} /></p>
            )
        },
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];

const data = [
    {
        id: 1,
        documentName: 'Beetlejuice',
        documentType: '1988',
        createdDate: "01/01/2022"
    },
]

export default function MyDocumentsSelected() {

    const subHeaderComponent = () => {
        return (
            <div className='d-flex w-100 align-items-center'>
                <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                <input className='w-100 ps-5 py-2' placeholder='Search Records' />
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

            <div className='m-3 mt-5 d-flex flex-column gap-4'>

                <div className='documents-page-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>document name 1</h5>
                    <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                </div>

                <div className='documents-page-row d-flex justify-content-between align-items-center'>
                    <h5 className='px-5 py-4 w-50'>document name 2</h5>
                    <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                </div>
            </div>

            {/* <div className='m-3 mt-5 BED80documentsTable'>
                <DataTable
                    columns={columns}
                    data={data}
                    subHeader
                    subHeaderComponent={subHeaderComponent()}
                />
            </div> */}

        </div>
    )
}
