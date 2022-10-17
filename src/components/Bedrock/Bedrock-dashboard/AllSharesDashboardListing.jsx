import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component'
import { BiSearch } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup } from '../../../utils/PopupMessages';
import CreateOrder from './CreateOrder';

export default function AllSharesDashboardListing() {

    const [fetchedIssuedShares, setFetchedIssuedShares] = useState([]);
    const [filteredIssuedShares, setFilteredIssuedShares] = useState([]);;
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("");

    const [singleRowData, setSingleRowData] = useState()

    let userDetails = useContext(UserContext)
    const { userInfo } = userDetails
    console.log(userInfo.email);

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
    }, [userInfo])

    const columns = [
        {
            name: 'Shareholder',
            selector: row => row.company_name,
            sortable: true,
        },
        {
            name: 'Company Ticker',
            selector: row => row.company_ticker,
            sortable: true,
        },
        {
            name: 'Share Type',
            selector: row => row.share_type,
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
            name: "View",
            selector: row => {
                return (
                    <div>
                        <p onClick={() => {
                            setSingleRowData(row)
                        }} data-bs-toggle="modal" data-bs-target="#createNewOrderFromShare">
                            <FaRegEye style={{ cursor: 'pointer' }} size={20} />
                        </p>

                    </div>
                )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
        // {
        //     name: 'Edit/Delete',
        //     selector: row => {
        //         return (
        //             <div className='d-flex gap-2'>
        //                 <p data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
        //                     className='text-center' style={{ cursor: 'pointer' }}
        //                     onClick={() => {
        //                         editShares(row)
        //                     }}>
        //                     <FaRegEdit size={20} />
        //                 </p>
        //                 <p data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
        //                     className='text-center' style={{ cursor: 'pointer' }}
        //                     onClick={() => {
        //                         // deleteShares(row.id)
        //                         showDeleteConfirmation(row.id)
        //                     }} >
        //                     <MdOutlineDelete size={20} />
        //                 </p>
        //             </div>
        //         )
        //     },
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        // },
    ];

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

    const customLoader = () => {
        return (
            <>
                <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
            </>
        )
    }


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

    return (
        <div>
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

            <div className="modal fade"
                id="createNewOrderFromShare"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="createNewOrderLabel"
                aria-hidden="true">

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {singleRowData && <CreateOrder singleOrderData={singleRowData} />}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
