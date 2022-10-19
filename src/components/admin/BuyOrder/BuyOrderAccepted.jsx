import React, { useContext } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../../../ContextAPI/Context'
import '../BuyOrder/BuyOrder.css'
export default function BuyOrderAccepted() {

  let userDetails = useContext(UserContext)
  const { userInfo, address } = userDetails

  // useEffect(() => {

  // }, [])

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
            <p className='ps-5 d-flex gap-2 ms-5'>Incoming Orders <span className='mt-1'>- {userInfo?.name}</span></p>
          </div>
          <div className="col-md-4">
            <div className="buy-order-button  ">
              <p>Completed</p>
              <button className="px-4">Pending</button>
            </div>
          </div>

        </div>

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

            {/* <p className='ps-5 d-flex gap-2 ms-5'>Buy Order #1 for SpaceX</p> */}
            <button type="button" className=" py-3 ps-3 gap-2 order-accepted noHover "><b>Order Accepted</b><span>- See 'Completed' for Post-Deal Documentation</span></button>
          </div>


        </div>
      </div>
    </>
  )
}
