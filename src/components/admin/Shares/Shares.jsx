import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component';
import IssuedShares from './IssuedShares';
import IssueNew from './IssueNew';
import './Shares.css'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import $ from 'jquery'
import { useEffect } from 'react';
import { Modal } from 'bootstrap'
import axios from 'axios';
import { URLS } from '../../../utils/ApiURLs';
import { UserContext } from '../../../ContextAPI/Context';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';

const data = [
    {
        id: 1,
        documentName: 'Beetlejuice',
        documentType: '1988',
        createdDate: "01/01/2022"
    },
    {
        id: 2,
        documentName: 'Beetlejuice',
        documentType: '1988',
        createdDate: "01/01/2022"
    },
]


export default function Shares() {

    const [newProof, setNewProof] = useState(false);
    const [issuedShareModal, setIssuedShareModal] = useState();
    const [deleteShareModal, setDeleteShareModal] = useState();
    const [fetchedIssuedShares, setFetchedIssuedShares] = useState([]);
    const [filteredIssuedShares, setFilteredIssuedShares] = useState([]);
    const [singleFormData, setSingleFormData] = useState()
    const [refreshDataTable, setRefreshDataTable] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [deleteID, setDeleteID] = useState();
    const [searchValue, setSearchValue] = useState("");

    const [isDataLoading, setIsDataLoading] = useState(true)

    let userDetails = useContext(UserContext)
    const { userInfo } = userDetails
    console.log(userInfo);

    const subHeaderComponent = () => {
        return (
            <div className='d-flex align-items-center'>
                <span className='ps-2' style={{ position: 'absolute' }}><BiSearch size={25} color='gray' /></span>
                <input onChange={(e) => { setSearchValue(e.target.value) }}
                    value={searchValue}
                    style={{ borderRadius: '10px', border: 'none', outline: 'none' }}
                    className='ps-5 py-2' placeholder='Search Records' />
            </div>
        )
    }

    const editShares = (data) => {
        console.log(data);
        setSingleFormData(data)
        issuedShareModal.show()
    }

    const showDeleteConfirmation = (id) => {
        setDeleteID(id)
        deleteShareModal.show();
    }

    const deleteShares = (id) => {
        console.log(id);
        setIsLoading(true)
        axios.delete(`${URLS.deleteIssuedShare}/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log(res);
            setRefreshDataTable(!refreshDataTable)
            successPopup(res.data.message)
            setIsLoading(false)
            deleteShareModal.hide()
        }).catch((error) => {
            console.log(error);
            errorPopup("Some Error Occured")
            setIsLoading(false)
        })
    }

    const handleRefresh = () => {
        issuedShareModal.hide()
        setRefreshDataTable(!refreshDataTable)
    }

    useEffect(() => {
        let issueNewShareModal = new Modal(document.getElementById('issueNewShare'), {});
        let deleteShare = new Modal(document.getElementById('sharesDeleteConfirmationModal'), {})
        setIssuedShareModal(issueNewShareModal);
        setDeleteShareModal(deleteShare);
    }, [])

    useEffect(() => {
        if (userInfo.email) {
            axios.get(`${URLS.getIssuedShares}/${userInfo.email}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setFetchedIssuedShares(res.data.data)
                setFilteredIssuedShares(res.data.data)
                setIsDataLoading(false)
            }).catch((error) => {
                console.log(error);
                setIsDataLoading(false)
                errorPopup("Some Error Occured")
            })
        }
    }, [userInfo, refreshDataTable])

    useEffect(() => {
        if (searchValue) {
            let filteredItems = fetchedIssuedShares.filter((share) => {
                return String(share.company_name).toLowerCase().includes(searchValue.toLowerCase()) ||
                    String(share.company_ticker).toLowerCase().includes(searchValue.toLowerCase()) ||
                    String(share.market_value).toLowerCase().includes(searchValue.toLowerCase()) ||
                    String(share.share_price).toLowerCase().includes(searchValue.toLowerCase()) ||
                    String(share.share_type).toLowerCase().includes(searchValue.toLowerCase()) ||
                    String(share.shares).toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredIssuedShares(filteredItems)
        } else {
            setFilteredIssuedShares(fetchedIssuedShares)
        }
    }, [searchValue])

    const columns = [
        {
            name: 'Shareholder',
            selector: row => row.company_name,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.shares,
            sortable: true,
        },
        {
            name: 'Price/Share',
            selector: row => row.share_price,
            sortable: true,
        },
        {
            name: 'Market Value',
            selector: row => row.market_value,
            sortable: true,
        },
        {
            name: 'Edit/Delete',
            selector: row => {
                return (
                    <div className='d-flex gap-2'>
                        <p data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                            className='text-center' style={{ cursor: 'pointer' }}
                            onClick={() => {
                                editShares(row)
                            }}>
                            <FaRegEdit size={20} />
                        </p>
                        <p data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                            className='text-center' style={{ cursor: 'pointer' }}
                            onClick={() => {
                                // deleteShares(row.id)
                                showDeleteConfirmation(row.id)
                            }} >
                            <MdOutlineDelete size={20} />
                        </p>
                    </div>
                )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const customLoader = () => {
        return (
            <>
                <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
            </>
        )
    }


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
                    <button
                        // data-bs-toggle="modal"
                        // data-bs-target="#issueNewShare"
                        onClick={() => {
                            issuedShareModal.show()
                            setSingleFormData();
                        }}
                        className={`${newProof ? 'active' : ""} px-3 py-1`} > + Issue New BED80</button>
                    <button onClick={() => { setNewProof(false) }} className={`${!newProof ? 'active' : ""} px-3 py-1`}>Issued BED80</button>
                </div>
            </div>

            {/* {
                newProof ? "" : <IssuedShares />
            } */}

            <div className="modal fade" id="issueNewShare" tabIndex={-1} aria-labelledby="issueNewShareLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title" id="issueNewShareLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div> */}
                        <div className="modal-body">
                            <IssueNew singleFormData={singleFormData} handleRefresh={handleRefresh} />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="modal fade" id="sharesDeleteConfirmationModal" tabIndex={-1} aria-labelledby="sharesDeleteConfirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="sharesDeleteConfirmationModalLabel">Are You Sure</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            This Share will be deleted.
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => { deleteShares(deleteID) }}
                                type="button" className="btn btn-danger d-flex gap-2 align-items-center">
                                Delete
                                {
                                    isLoading && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                                }
                            </button>
                            <button data-bs-dismiss="modal" type="button" className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-3 mt-5 issued-shares-table'>
                <DataTable
                    columns={columns}
                    data={filteredIssuedShares}
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
