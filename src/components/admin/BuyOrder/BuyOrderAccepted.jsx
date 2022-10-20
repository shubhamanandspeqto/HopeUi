import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { BiSearch } from 'react-icons/bi'
import { UserContext } from '../../../ContextAPI/Context'
import { URLS } from '../../../utils/ApiURLs'
import { errorPopup } from '../../../utils/PopupMessages'
import '../BuyOrder/BuyOrder.css'
export default function BuyOrderAccepted() {

  const [searchValue, setSearchValue] = useState("")
  const [filteredHistoryDetails, setFilteredHistoryDetails] = useState([]);
  const [totalHistoryDetails, setTotalHistoryDetails] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true)

  let userDetails = useContext(UserContext)
  const { userInfo, address } = userDetails

  const columns = [
    // {
    //   name: 'Proposed Buyer',
    //   selector: row => row.proposed_buyer,
    //   sortable: true,
    // },
    // {
    //   name: 'Price',
    //   selector: row => row.share_price,
    //   sortable: true,
    // },
    // {
    //   name: 'Quantity',
    //   selector: row => row.share_amt,
    //   sortable: true,
    // },
    // {
    //   name: 'Action Time',
    //   selector: row => {
    //     let date = new Date(Number(row.action_time) * 1000)
    //     let localDate = date.toLocaleDateString();
    //     let time = String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, 0);
    //     let totalTime = time + ", " + localDate
    //     return (totalTime)
    //   },
    //   sortable: true,
    // },
    {
      name: 'Description',
      width: "60%",
      selector: row => {

        let date = new Date(Number(row.action_time) * 1000)
        let localDate = date.toLocaleDateString();
        let time = String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, 0);
        let totalTime = time + ", " + localDate;

        if (row?.order_action === "New" && address === row?.order_wallet) {
          let desc = `You sent the order with $${row.share_price} and ${row.share_amt} quantity at ${totalTime}.`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
        if (row.order_action === "New" && address === row?.shares_wallet) {
          let desc = `You received the order from ${row.proposed_buyer} with $${row.share_price} and ${row.share_amt} quantity at ${totalTime}.`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
        if (row.order_action === "Approved" && address === row?.order_wallet) {
          let desc = `Your Order with $${row.share_price} and ${row.share_amt} quantity was Approved at ${totalTime}.`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
        if (row.order_action === "Approved" && address === row?.shares_wallet) {
          let desc = `You Approved the order of ${row.proposed_buyer} with $${row.share_price} and ${row.share_amt} quantity at ${totalTime}`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
        if (row.order_action === "Denied" && address === row?.order_wallet) {
          let desc = `Your Order with $${row.share_price} and ${row.share_amt} quantity was Denied at ${totalTime}.`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
        if (row.order_action === "Denied" && address === row?.shares_wallet) {
          let desc = `You Denied the order with $${row.share_price} and ${row.share_amt} quantity at ${totalTime}`
          return <p className='scroll' data-bs-toggle="tooltip" data-bs-placement="top" title={desc}>{desc}</p>
        }
      },
      sortable: true,
    },
    {
      name: 'Company Name',
      selector: row => row.company_name,
      sortable: true,
    },
    {
      name: 'Company Ticker',
      selector: row => row.company_ticker,
      sortable: true,
    },
    // {
    //   name: 'Proposed Buyer',
    //   selector: row => row.proposed_buyer,
    //   sortable: true,
    // },
    // {
    //   name: 'Edit/Delete',
    //   selector: row => {
    //     return (
    //       <div className='d-flex gap-2'>
    //         <p data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
    //           className='text-center' style={{ cursor: 'pointer' }}
    //           onClick={() => {
    //             // editShares(row)
    //           }}>
    //           <FaRegEdit size={20} />
    //         </p>
    //         <p data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
    //           className='text-center' style={{ cursor: 'pointer' }}
    //           onClick={() => {
    //             // deleteShares(row.id)
    //             showDeleteConfirmation(row.id)
    //           }} >
    //           <MdOutlineDelete size={20} />
    //         </p>
    //       </div>
    //     )
    //   },
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
  ];

  useEffect(() => {

    if (address) {
      setIsDataLoading(true)
      axios.get(`${URLS.getOrderHistory}/${address}`).then((res) => {
        // console.log(res);
        setTotalHistoryDetails(res.data.data)
        setFilteredHistoryDetails(res.data.data)
        setIsDataLoading(false)
      }).catch((err) => {
        // console.log(err);
        setIsDataLoading(false)
        errorPopup(err.response?.data?.message ? err.response?.data?.message : "Some Error Occured")
      })
    }

  }, [address])

  useEffect(() => {
    if (searchValue) {
      let filteredDetails = totalHistoryDetails.filter((detail) => {
        return String(detail?.company_name).includes(searchValue) ||
          String(detail?.company_ticket).includes(searchValue) ||
          String(detail?.email).includes(searchValue) ||
          String(detail?.proposed_buyer).includes(searchValue) ||
          String(detail?.share_amt).includes(searchValue) ||
          String(detail?.share_price).includes(searchValue) ||
          String(detail?.share_type).includes(searchValue) ||
          String(detail?.order_action).includes(searchValue) ||
          String(detail?.status).includes(searchValue) ||
          String(detail?.order_wallet).includes(searchValue) ||
          String(detail?.shares_wallet).includes(searchValue)
      })
      console.log(filteredDetails);
      setFilteredHistoryDetails(filteredDetails)
    } else {
      setFilteredHistoryDetails(totalHistoryDetails)
    }
  }, [searchValue])

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

  const customLoader = () => {
    return (
      <>
        <i className="fa fa-circle-o-notch fa-spin py-5" style={{ fontSize: 50 }} />
      </>
    )
  }



  return (
    <>
      <div className='documents-page-container pb-3'>

        <div className='d-flex justify-content-between documents-page-heading py-5 px-4'>
          <div className='d-flex flex-column'>
            <h4>Hello! Welcome to Bedrock.</h4>
            <p>You are currently using the invite-only product version of Bedrock.</p>
          </div>
        </div>

        <div className='m-3 buy-order-content d-flex p-0 justify-content-between align-items-center'>
          <div className='ps-3 d-flex gap-5 align-items-center buy-order-img-container '>
            {
              userInfo?.profileImage ?
                <img className='pb-3' src={userInfo?.profileImage} alt="Profile Image" />
                :
                <img className='pb-3' src="/assets/beared-guy.png" alt="" />
            }
            <p className='ps-5 d-flex gap-2 ms-5'>Orders History<span className='mt-1'>- {userInfo?.name}</span></p>
          </div>
          {/* <div className="col-md-4">
            <div className="buy-order-button  ">
              <p>Completed</p>
              <button className="px-4">Pending</button>
            </div>
          </div> */}

        </div>

        {/* <>
          <div className='m-3 mb-0 buy-order-content d-flex p-0  align-items-center justify-content-start'>
            <div className='ps-3 d-flex gap-5 align-items-center buy-order-img-container ' style={{ width: '50%' }}>

              <p className='ps-5 d-flex gap-2 '>Buy Order #1 for SpaceX</p>
            </div>
            <div className='ps-5  d-flex gap-5  align-items-center buy-order-img-container receive-date '>

              <span>- receive 01/20/2022</span>
            </div>


          </div>
          <div className='m-3 my-1 order-accepted-content d-flex p-0 justify-content-between align-items-center'>
            <div className=' d-flex gap-5 align-items-center order-accepted-container '>

              <p className='ps-5 d-flex gap-2 ms-5'>Buy Order #1 for SpaceX</p>
              <button type="button" className=" py-3 ps-3 gap-2 order-accepted noHover "><b>Order Accepted</b><span>- See 'Completed' for Post-Deal Documentation</span></button>
            </div>


          </div>
        </> */}

        <div className='m-3 mt-5'>
          <DataTable
            columns={columns}
            data={filteredHistoryDetails}
            subHeader
            subHeaderComponent={subHeaderComponent()}
            pagination
            progressComponent={customLoader()}
            progressPending={isDataLoading}
            responsive
          />
        </div>
      </div>
    </>
  )
}
