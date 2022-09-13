import React, { useState } from 'react'
import IssuedShares from './IssuedShares';
import IssueNew from './IssueNew';
import './Shares.css'

export default function Shares() {

    const [newProof, setNewProof] = useState(false);

    return (
        <div className='documents-page-container pb-3'>

            <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h4>Hello, SpaceX! Welcome to Bedrock.</h4>
                    <p>You are currently using the invite-only product version of Bedrock.</p>
                </div>
            </div>

            <div className='m-3 proof-page-content d-flex p-0 gap-5 align-items-center'>
                <div className='ps-3 d-flex gap-5 align-items-center proof-page-img-container'>
                    <img className='pb-3' src="/assets/beared-guy.png" alt="" />
                    {/* <p className='ps-5 d-flex gap-2 ms-5'>Issue BED80 <span>- user name</span></p> */}
                </div>
                <div className='d-flex gap-3 pe-3 proof-page-btn-container'>
                    <button data-bs-toggle="modal"
                        data-bs-target="#issueNewShare"
                        // onClick={() => { setNewProof(true) }}
                        className={`${newProof ? 'active' : ""} px-3 py-1`} > + Issue New BED80</button>
                    <button onClick={() => { setNewProof(false) }} className={`${!newProof ? 'active' : ""} px-3 py-1`}>Issued BED80</button>
                </div>
            </div>

            {
                newProof ? "" : <IssuedShares />
            }

            <div className="modal fade" id="issueNewShare" tabIndex={-1} aria-labelledby="issueNewShareLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title" id="issueNewShareLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div> */}
                        <div className="modal-body">
                            <IssueNew />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
