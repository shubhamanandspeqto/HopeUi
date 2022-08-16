import React from 'react'
import './MyDocumentsSelected.css'

export default function MyDocumentsSelected() {
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
                    <p className='ps-5 d-flex gap-2'>My Documents <span>- user name</span></p>
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

        </div>
    )
}
