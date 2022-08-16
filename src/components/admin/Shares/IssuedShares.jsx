import React from 'react'
import IssueNew from './IssueNew'

export default function IssuedShares() {
    return (
        <div className='m-3 mt-5 d-flex flex-column gap-4'>

            <div className='issued-shares-row d-flex justify-content-between align-items-center'>
                <h5 className='px-5 py-4 w-50'>SpaceX</h5>
                <p className='mx-5 px-5 w-50'>- created 01/20/2022</p>
                <button className='me-5'>View</button>
            </div>

            <div className='issue-new-share-btn d-flex justify-content-center mt-5' type="button" data-bs-toggle="modal"
                data-bs-target="#issueNewShare">
                <button>+ Issue New</button>
            </div>

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
